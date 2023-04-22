FROM alpine:3.17

ENV NODE_VERSION 18.16.0

WORKDIR /usr/src/app

COPY package*.json .

RUN apk update && apk add --no-cache npm

RUN npm ci

COPY . .

CMD ["npm", "run", "nodemon"]