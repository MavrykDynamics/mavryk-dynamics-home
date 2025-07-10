import { socialMedias } from './socials.const';
import styles from './socials.module.css';
import { Icon } from 'components/atoms/Icon';

export const Socials = (props: { pulsation?: boolean }) => {
  return (
    <div className={styles.socialMedia}>
      {socialMedias.map((item) => {
        return (
          <a key={item.link} href={item.link} rel="noreferrer" target="_blank">
            <Icon id={item.name} />
          </a>
        );
      })}
    </div>
  );
};
