### BUILD ###
FROM node:16-stretch AS build

WORKDIR /build
COPY . /

RUN yarn install && yarn build

### RELEASE ###
FROM caddy:latest

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /build /srv

EXPOSE 80
EXPOSE 443