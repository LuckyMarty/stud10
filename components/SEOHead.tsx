import Head from "next/head";
import { FC } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
}

const SEOHead: FC<SEOHeadProps> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
  </Head>
);

export default SEOHead;
