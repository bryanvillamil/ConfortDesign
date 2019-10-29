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
        <Textinfo>Medellin</Textinfo>
        <Textinfo>instagram:</Textinfo>
        {/* <Link
          href="mailto:nbathlantic@nbathlantic.com"
          className="emailDesktop"
        >
          nbatlantic@nbatlantic.com
        </Link> */}
      </FooterLeft>
      <FooterCenter>
        <TitleFooter>Confort Design</TitleFooter>
      </FooterCenter>
      <FooterRight>
        <Textinfo>Copyright © 2019 confortDesign</Textinfo>
        <Link href="/terms">Terms & Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="mailto:confortdesign@gmail.com" className="emailMobile">
          confortdesign@gmail.com
        </Link>
      </FooterRight>
    </ContentFooter>
  );
}

export default Footer;
