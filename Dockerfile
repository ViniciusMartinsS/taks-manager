FROM node:12.13.1-alpine

ADD ./ /src

WORKDIR /src

RUN npm install

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait
RUN chmod +x /wait

RUN /wait && npm run migrate

CMD npm start

EXPOSE 3000
