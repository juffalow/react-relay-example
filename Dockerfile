FROM node:16-alpine as build

RUN mkdir /home/node/react-relay-example/ && chown -R node:node /home/node/react-relay-example
WORKDIR /home/node/react-relay-example
COPY --chown=node:node . .
RUN rm tsconfig.json
RUN yarn install --frozen-lockfile && yarn build

FROM nginx:stable-alpine

COPY --from=build /home/node/react-relay-example/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
