FROM node:latest

MAINTAINER joshglazebrook

ADD . /app
WORKDIR /app

RUN npm install

ENV NODE_ENV=development
ENV PORT=80


EXPOSE 80

CMD "node" "app.js"
