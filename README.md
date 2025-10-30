# GLDF Website

[![master](https://github.com/globallightingdata/website/actions/workflows/master.yml/badge.svg)](https://github.com/globallightingdata/website/actions/workflows/master.yml) [![develop](https://github.com/globallightingdata/website/actions/workflows/develop.yml/badge.svg)](https://github.com/globallightingdata/website/actions/workflows/develop.yml)

Website of the *Global Lighting Data Format* ➔ [gldf.io](https://gldf.io)

## Requirements

- Node.js ➔ [nodejs.org](https://nodejs.org)

## Installation

```console
npm ci
```

## Local development

```console
npm start
// or 
npm start -- --host 0.0.0.0
```

## Deployment

```console
npm run build
```

## Docker & Testsystem (<https://test.gldf.io>)

Image lokal erstellen und auf Dockerhub pushen.  
Das Testsystem prüft regelmässig auf neue Images und aktualisiert die Container selbstständig.

```console
docker login -u dialgmbh
docker build -t dialgmbh/gldf-website:latest .
docker push dialgmbh/gldf-website:latest
```
