FROM node:16-alpine as build

RUN mkdir /home/node/react-relay-example/ && chown -R node:node /home/node/react-relay-example
WORKDIR /home/node/react-relay-example
COPY --chown=node:node . .
RUN yarn install --frozen-lockfile && yarn build

FROM nginx:stable-alpine

RUN addgroup --gid 3000 --system juffgroup \
  && adduser  --uid 2000 --system --ingroup juffgroup juffuser

RUN chown -R juffuser:juffgroup /etc/nginx/conf.d
RUN chown -R juffuser:juffgroup /var/log/nginx
RUN chown -R juffuser:juffgroup /var/cache/nginx
RUN chown -R juffuser:juffgroup /usr/share/nginx

RUN touch /var/run/nginx.pid && \
        chown -R juffuser:juffgroup /var/run/nginx.pid

USER 2000:3000

COPY --from=build /home/node/react-relay-example/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

RUN echo $'\n\
server {\n\
  listen 8080;\n\
  location / {\n\
    root   /usr/share/nginx/html;\n\
    index  index.html index.htm;\n\
    try_files $uri $uri/ /index.html;\n\
  }\n\
  error_page   500 502 503 504  /50x.html;\n\
  location = /50x.html {\n\
    root   /usr/share/nginx/html;\n\
  }\n\
}\n\
' > /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
