import React, { FC, useCallback, useRef, useState } from 'react';
import classNames from 'classnames';

import Icon, { IconType } from '@components/Icon';
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
import useCopy from '@hooks/useCopy';
import useTimer from '@hooks/useTimer';
import { copy } from '@utils';

interface ContactInfo {
  icon: IconType;
  href: string;
  title: string;
}

const contactList: ContactInfo[] = [
  { icon: IconType.Github, href: 'https://github.com/superfreeeee', title: 'Github Profile' },
  { icon: IconType.Blogger, href: 'https://blog.csdn.net/weixin_44691608', title: 'CSDN Column' },
  { icon: IconType.Instagram, href: 'https://www.instagram.com/superfreeeee/', title: 'Instagram Profile' },
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
