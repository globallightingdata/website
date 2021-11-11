### BUILD ###
FROM node:16-stretch AS build

WORKDIR /build
COPY . /

RUN npm install && npm run build

### RELEASE ###
FROM caddy:2.4.6-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /build /srv

EXPOSE 80
EXPOSE 443