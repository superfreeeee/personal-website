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

const useClickCopy = (text: string) => {
  const copy = useCallback(() => {
    const t = document.createTextNode(text);
    document.body.appendChild(t);

    const range = document.createRange();
    range.selectNodeContents(t);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');
    document.body.removeChild(t);
  }, [text]);

  return copy;
};

const TOOLTIP_AUTO_CLOSE_DELAY = 2000;

const Contact: FC = () => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number>(null);

  const email = 'superfreeeee@gmail.com';

  const copy = useClickCopy(email);

  const copyEmail = useCallback(
    (e) => {
      if (!copied) {
        copy();
        setCopied(true);
        e.target.focus();

        clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
          setCopied(false);
        }, TOOLTIP_AUTO_CLOSE_DELAY);
      }
    },
    [copy, copied]
  );

  const copyBlur = useCallback(() => {
    setCopied(false);
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
