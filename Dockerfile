FROM node:14.4

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY package.json /home/node/app

RUN npm install

COPY . /home/node/app

CMD [ "node", "index.js" ]

EXPOSE 9000

USER node