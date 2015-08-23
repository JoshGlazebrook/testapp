FROM node:latest

ADD . /app
WORKDIR /app

RUN npm install

ENV NODE_ENV=production
ENV testname=josh
ENV PORT=3000

EXPOSE 3000

CMD "node" "app.js"
