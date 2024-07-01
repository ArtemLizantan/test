import Link from 'next/link';
import Image from 'next/image';
import { HeroSectionImage, heroData } from './heroData';
import styles from './style.module.scss';
import { ButtonLink } from '@/components/UI/Link';
import Logo from '@/components/Layout/Logo/Logo';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        alt='bg'
        priority
        fill
        src={HeroSectionImage.ImageDesk}
      />
      <div className={styles.hero__body}>
        <div className={styles.hero__top}>
          <div className={styles.hero__topItem}>
            <Logo />
          </div>
          <div className={styles.hero__topItem}>
            <h1>{heroData.text}</h1>
          </div>
          <div className={styles.hero__topItem}>
            <ButtonLink
              path={heroData.path}
              text={heroData.btn1}
            />
            <ButtonLink
              path={heroData.path}
              text={heroData.btn2}
              color='#fff'
              boxShadow='0 4px 4px 0 rgba(0, 0, 0, 0.25), inset 0 8px 8px 0 rgba(0, 0, 0, 0.25);'
              background='linear-gradient(180deg, #e90000 0%, #9100bf 95.08%)'
            />
          </div>
        </div>

        <div className={styles.hero__bottom}>
          <div className={styles.hero__images}>
            <Image
              alt='circle'
              priority
              width={700}
              height={700}
              src={HeroSectionImage.ImageCircle}
            />
            <Image
              alt='clown'
              width={700}
              height={700}
              src={HeroSectionImage.ImageClown}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
