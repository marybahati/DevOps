FROM node:21-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json .

RUN yarn install

COPY . .

CMD [ "node", "server.js" ]