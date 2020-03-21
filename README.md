# React + Relay Example

List of Quotes with Authors implemented in React + Relay.

*You can use either [PHP](https://github.com/juffalow/slim-graphql-eloquent-example) or [Node](https://github.com/juffalow/express-graphql-example) as a backend.*

## How to run the project

#### Installation

```shell
yarn install

# or if you use npm

npm install
```

#### Download GraphQL schema

For this, you need to have [graphql-cli](https://github.com/graphql-cli/graphql-cli) installed.

```shell
graphql get-schema --project quotes -e default
```

Build / transform components which are using graphql / relay

```shell
yarn run relay
```

#### Start the project

```shell
yarn start
```

## Old version

Working version of React + Relay application written in JavaScript:
* [1.0.0](https://github.com/juffalow/react-relay-example/tree/1.0.0)

## License

[MIT license](./LICENSE)
