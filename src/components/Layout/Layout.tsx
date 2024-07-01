import { ReactNode } from 'react';
// TODO: Uncomment after adding Header and Footer
import Footer from './Footer/Footer';
import Header from './Header/Header';
import * as classes from './styles';

interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div css={classes.wrap}>
      <Header />
      <main css={classes.main}>{children}</main>
      <Footer />
    </div>
  );
}
