import React, { FC } from 'react';

import Icon, { IconType } from '@components/Icon';
import { ContactItem, ContactList, Container, Email, OuterLink, Title } from './styles';

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

const Contact: FC = () => {
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
      <Email>email:</Email>
      <Email>superfreeeee@gmail.com</Email>
    </Container>
  );
};

export default Contact;
