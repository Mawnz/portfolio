from node:10-alpine

RUN mkdir /app

WORKDIR /app

COPY package-lock.json package.json ./

RUN npm install

CMD npm run dev