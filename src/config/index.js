const local = {
  graphql: 'http://graphql.local/graphql',
};

const prod = {
  graphql: 'https://graphql.juffalow.com/graphql',
};

const config = process.env.REACT_APP_ENV === 'local'
  ? local
  : prod;

  export default {
    ...config
  };
