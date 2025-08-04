### BUILD ###
FROM node:24-bookworm-slim AS build

WORKDIR /build
COPY . /

RUN npm ci --no-audit --no-fund && npm run build

### RELEASE ###
# https://hub.docker.com/_/caddy/tags
FROM caddy:2.9.1-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /build /srv

EXPOSE 80
EXPOSE 443