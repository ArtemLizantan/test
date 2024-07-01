import Image from 'next/image';
import Link from 'next/link';
import { Logodata } from './logoPath';
import styles from './logo.module.scss';

export default function Logo() {
  return (
    <Link className={styles.logo} href={'/'}>
      <Image
        alt='logo'
        width={194}
        height={54}
        src={Logodata.LogoPath}
      />
    </Link>
  );
}
