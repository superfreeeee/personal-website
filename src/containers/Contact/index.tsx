import { ReactNode, useCallback, useRef, useState } from 'react';
import { SiCsdn, SiGithub, SiInstagram, SiNpm } from 'react-icons/si';
import { BiCheck, BiCopyAlt } from 'react-icons/bi';
import classNames from 'classnames';

import { CSDN_BLOG_LINK, GITHUB_PROFILE_LINK, INSTAGRAM_PROFILE_LINK, NPM_PROFILE_LINK } from '@/constant/config';
import { copy } from '@/utils';

import styles from './index.module.scss';

interface ContactInfo {
  icon: ReactNode;
  href: string;
  title: string;
}

const CONTACT_ITEM_ICON_SIZE = 32;
const contactList: ContactInfo[] = [
  {
    icon: <SiGithub size={CONTACT_ITEM_ICON_SIZE} />,
    href: GITHUB_PROFILE_LINK,
    title: 'Github Profile',
  },
  {
    icon: <SiNpm size={CONTACT_ITEM_ICON_SIZE} />,
    href: NPM_PROFILE_LINK,
    title: 'Npm Profile',
  },
  {
    icon: <SiCsdn size={CONTACT_ITEM_ICON_SIZE} />,
    href: CSDN_BLOG_LINK,
    title: 'CSDN Column',
  },
  {
    icon: <SiInstagram size={CONTACT_ITEM_ICON_SIZE} />,
    href: INSTAGRAM_PROFILE_LINK,
    title: 'Instagram Profile',
  },
];

const COPY_ICON_SIZE = 22;

const TOOLTIP_AUTO_CLOSE_DELAY = 2000;

const EMAIL_ADDR = 'superfreeeee@gmail.com';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyTimerRef = useRef<number | undefined>(undefined);
  const copyEmail = useCallback(
    (e: any) => {
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
    <div className={styles.ContactContainer}>
      <h1 className={styles.ContactTitle}>Where to find me?</h1>
      <ul className={styles.ContactList}>
        {contactList.map(({ icon, href, title }) => {
          return (
            <li key={href} className={styles.ContactItem} title={title}>
              <a className={styles.ContactItemLink} target="_blank" href={href}>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
      <div className={styles.ContactEmalBar}>
        <div className={styles.ContactEmalText}>{EMAIL_ADDR}</div>
        <div className={styles.ContactEmalCopyPad}>
          <div className={classNames(styles.ContactEmalCopyTooltip, { [styles.copied]: copied })}>Copied!</div>
          <button className={styles.ContactEmalCopyBtn} onClick={copyEmail}>
            {copied ? <BiCheck size={COPY_ICON_SIZE} /> : <BiCopyAlt size={COPY_ICON_SIZE} />}
          </button>
        </div>
      </div>
    </div>
  );
};
