import React from 'react';

import {
  ContentFooter,
  FooterLeft,
  Textinfo,
  FooterRight,
  FooterCenter,
  TitleFooter,
  Link,
} from './styledComponents';

function Footer() {
  return (
    <ContentFooter>
      <FooterLeft>
        <Textinfo>1001 Brickell Bay Drive, Unit 1608</Textinfo>
        <Textinfo>Miami, FL 33131</Textinfo>
        <Textinfo>800-273-9715</Textinfo>
        {/* <Link
          href="mailto:nbathlantic@nbathlantic.com"
          className="emailDesktop"
        >
          nbatlantic@nbatlantic.com
        </Link> */}
      </FooterLeft>
      <FooterCenter>
        <TitleFooter>National Brokerage Atlantic</TitleFooter>
      </FooterCenter>
      <FooterRight>
        <Textinfo>Copyright © 2019 NBAtlantic</Textinfo>
        <Link href="/terms">Terms & Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="mailto:nbathlantic@nbathlantic.com" className="emailMobile">
          nbatlantic@nbatlantic.com
        </Link>
      </FooterRight>
    </ContentFooter>
  );
}

export default Footer;
