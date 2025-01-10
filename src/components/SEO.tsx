import React from 'react';

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const SEO = ({ title, description, children }: Props) => (
  <>
    <meta charSet="utf-8" />
    <title>{`${title} | juffalow.com`}</title>
    <meta name="description" content={description} />
    {children}
  </>
);

export default SEO;
