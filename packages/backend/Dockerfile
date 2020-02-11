FROM node:12

ENV TZ Europe/Paris
RUN cp /usr/share/zoneinfo/Europe/Paris /etc/localtime

RUN apt-get update && apt-get install -y pdftk

COPY package.json yarn.lock /app/

WORKDIR /app

RUN yarn --production --frozen-lockfile --no-cache

COPY  ./dist /app/dist

ENTRYPOINT [ "yarn", "start:prod"]
