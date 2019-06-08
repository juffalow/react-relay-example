import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title} | juffalow.com</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </>
);

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default SEO;