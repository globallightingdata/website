### BUILD ###
FROM node:19-buster-slim AS build

WORKDIR /build
COPY . /

RUN npm install && npm run build

### RELEASE ###
FROM caddy:2.6.4-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /build /srv

EXPOSE 80
EXPOSE 443