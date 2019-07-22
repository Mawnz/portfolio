FROM node:10.16

RUN mkdir /usr/src/cache
WORKDIR /usr/src/cache

COPY package.json ./

RUN npm install

RUN mkdir /app

COPY . /app

WORKDIR /app
