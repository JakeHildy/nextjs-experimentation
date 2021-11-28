import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import { Commerce7AdminUI, Avatar, Heading, Text } from "@commerce7/admin-ui";

import C7Logo from "./C7Logo";

const Layout = (props) => {
  const { children, home } = props;

  return (
    <Commerce7AdminUI>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Commerce7 dev-center" />
        <title>Commerce7 - Developers</title>
      </Head>
      <StyledHeader>
        <C7Logo />
        <StyledHeading>Commerce7 Dev Center</StyledHeading>
        <Link href="/" passHref>
          <StyledNavLinkText>Home</StyledNavLinkText>
        </Link>
        <Link href="/page1" passHref>
          <StyledNavLinkText>Page 1</StyledNavLinkText>
        </Link>
        <Link href="/page2" passHref>
          <StyledNavLinkText>Page 2</StyledNavLinkText>
        </Link>
        <Avatar label="JH" size="small" />
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </Commerce7AdminUI>
  );
};

const StyledHeader = styled.header`
  height: 60px;
  background-color: #2a3238;
  padding: 0 20px;

  display: flex;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  color: white;
  margin: 0 auto 0 20px;
`;

const StyledNavLinkText = styled.a`
  color: white;
  margin: 0 20px 0 0;
`;

const StyledMain = styled.main`
  padding: 20px;
`;

export default Layout;
