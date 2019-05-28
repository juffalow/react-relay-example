const local = {
  graphql: 'http://graphql.muvity.local/graphql',
};

const prod = {
  graphql: 'https://graphql.muvity.sk/graphql',
};

const config = process.env.REACT_APP_ENV === 'local'
  ? local
  : prod;

  export default {
    ...config
  };
  