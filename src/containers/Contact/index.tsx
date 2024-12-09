import { useCallback, useRef, useState } from 'react';
import classNames from 'classnames';

import { Icon, IconType } from '@/components/Icon';
import { copy } from '@/utils';
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
import { CSDN_BLOG_LINK, GITHUB_PROFILE_LINK, INSTAGRAM_PROFILE_LINK, NPM_PROFILE_LINK } from '@/constant/config';

interface ContactInfo {
  icon: IconType;
  href: string;
  title: string;
}

const contactList: ContactInfo[] = [
  {
    icon: IconType.Github,
    href: GITHUB_PROFILE_LINK,
    title: 'Github Profile',
  },
  {
    icon: IconType.Library,
    href: NPM_PROFILE_LINK,
    title: 'Npm Profile',
  },
  {
    icon: IconType.Blogger,
    href: CSDN_BLOG_LINK,
    title: 'CSDN Column',
  },
  {
    icon: IconType.Instagram,
    href: INSTAGRAM_PROFILE_LINK,
    title: 'Instagram Profile',
  },
];

const TOOLTIP_AUTO_CLOSE_DELAY = 2000;

const EMAIL_ADDR = 'superfreeeee@gmail.com';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyTimerRef = useRef<number | undefined>();
  const copyEmail = useCallback(
    (e) => {
      if (!copied) {
        copy(EMAIL_ADDR);
        setCopied(true);
        e.target.focus();

        copyTimerRef.current = window.setTimeout(() => {
          setCopied(false);
        }, TOOLTIP_AUTO_CLOSE_DELAY);
      }

      return () => {
        window.clearTimeout(copyTimerRef.current);
        copyTimerRef.current = undefined;
      };
    },
    [copied]
  );

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
        <Email>{EMAIL_ADDR}</Email>
        <CopyPad>
          <CopiedToolTip className={classNames({ copied })}>Copied!</CopiedToolTip>
          <CopyBtn onClick={copyEmail}>
            <Icon type={copied ? IconType.Check : IconType.Copy} width={30} size={20} height={30} />
          </CopyBtn>
        </CopyPad>
      </CopyBar>
    </Container>
  );
};
