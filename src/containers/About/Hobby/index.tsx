import { BiBasketball, BiCodeAlt, BiMoviePlay, BiMusic } from 'react-icons/bi';

import styles from './index.module.scss';

const HOBBY_ICON_SIZE = 50;

export const Hobby = () => {
  return (
    <div className={styles.HobbyContainer}>
      <BiBasketball size={HOBBY_ICON_SIZE} title="Basketball" />
      <BiMoviePlay size={HOBBY_ICON_SIZE} title="Movies" />
      <BiMusic size={HOBBY_ICON_SIZE} title="Music" />
      <BiCodeAlt size={HOBBY_ICON_SIZE} title="Coding" />
    </div>
  );
};
