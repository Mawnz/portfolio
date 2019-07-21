from node:10-alpine

RUN mkdir /usr/src
RUN mkdir /usr/src/cache
WORKDIR /usr/src/cache

COPY package.json package-lock.json ./

RUN npm install

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN ls
