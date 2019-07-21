from node:10-alpine

RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install
