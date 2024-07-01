import styles from './link.module.scss';
import Link from 'next/link';

interface IButtonLinkProps {
  background?: string;
  boxShadow?: string;
  color?: string;
  text?: string;
  path: string;
}

export const ButtonLink = ({ background, boxShadow, color, text, path }: IButtonLinkProps) => {
  return (
    <Link
      style={{ background, boxShadow, color }}
      className={styles.link}
      href={path}>
      <span>{text}</span>
    </Link>
  );
};
