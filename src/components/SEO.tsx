import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const SEO = ({ title, description, children }: Props) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title} | juffalow.com</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </>
);

export default SEO;
