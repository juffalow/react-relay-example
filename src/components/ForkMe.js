import React from 'react';

const ForkMe = () => (
  <a href="https://github.com/juffalow/react-relay-example">
    <img
      width="149"
      height="149"
      src="https://github.blog/wp-content/uploads/2008/12/forkme_right_red_aa0000.png?resize=149%2C149"
      style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
      alt="Fork me on GitHub"
      data-recalc-dims="1"
    />
  </a>
);

export default React.memo(ForkMe);
