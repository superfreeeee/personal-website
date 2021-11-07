import React, { FC, useCallback, useState } from 'react';
import classNames from 'classnames';

import Icon, { IconType } from '@components/Icon';
import useTimer from '@hooks/useTimer';
import { copy } from '@utils';
import {
  ContactItem,
  ContactList,
  Container,
  CopiedToolTip,
  CopyBar,
  CopyBtn,
  CopyPad,
  Email,
  OuterLink,
  Title,
} from './styles';
import { CSDN_BLOG_LINK, GITHUB_PROFILE_LINK, INSTAGRAM_PROFILE_LINK, NPM_PROFILE_LINK } from '@constant/config';

interface ContactInfo {
  icon: IconType;
  href: string;
  title: string;
}

const contactList: ContactInfo[] = [
  { icon: IconType.Github, href: GITHUB_PROFILE_LINK, title: 'Github Profile' },
  { icon: IconType.Library, href: NPM_PROFILE_LINK, title: 'Npm Profile' },
  { icon: IconType.Blogger, href: CSDN_BLOG_LINK, title: 'CSDN Column' },
  { icon: IconType.Instagram, href: INSTAGRAM_PROFILE_LINK, title: 'Instagram Profile' },
];

const TOOLTIP_AUTO_CLOSE_DELAY = 2000;

const email = 'superfreeeee@gmail.com';

const Contact: FC = () => {
  // 状态
  const [copied, setCopied] = useState(false);
  const [timer, setTimer] = useState(null);

  // 复制
  useTimer(timer);

  const copyEmail = useCallback(
    (e) => {
      if (!copied) {
        copy(email);
        setCopied(true);
        e.target.focus();

        const timer = window.setTimeout(() => {
          setCopied(false);
        }, TOOLTIP_AUTO_CLOSE_DELAY);
        setTimer(timer);
      }
    },
    [copied]
  );

  const copyBlur = useCallback(() => {
    setCopied(false);
    setTimer(null);
  }, []);

  return (
    <Container>
      <Title>Where to find me?</Title>
      <ContactList>
        {contactList.map(({ icon, href, title }) => {
          return (
            <ContactItem key={href} title={title}>
              <OuterLink href={href}>
                <Icon type={icon} size={40} />
              </OuterLink>
            </ContactItem>
          );
        })}
      </ContactList>
      <CopyBar>
        <Email>{email}</Email>
        <CopyPad>
          <CopiedToolTip className={classNames({ copied })}>Copied!</CopiedToolTip>
          <CopyBtn onClick={copyEmail} onBlur={copyBlur}>
            <Icon type={copied ? IconType.Check : IconType.Copy} width={30} size={20} height={30} />
          </CopyBtn>
        </CopyPad>
      </CopyBar>
    </Container>
  );
};

export default Contact;
