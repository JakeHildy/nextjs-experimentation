import Head from "next/head";
import { Message } from "@commerce7/admin-ui";

import Layout from "../components/Layout";

const Page1 = () => {
  return (
    <Layout>
      <Head>
        <title>Dev-center | Page1</title>
      </Head>
      <section>Page 1</section>
      <Message variant="warning">Commerce7 is the best!</Message>
    </Layout>
  );
};

export default Page1;
