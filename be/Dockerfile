FROM node:12

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

ADD ./ ./

RUN npm run build
