FROM node:12.13.1-alpine

ADD ./ /src

WORKDIR /src

RUN apk --no-cache add --virtual builds-deps build-base python
RUN npm install

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait
RUN chmod +x /wait

EXPOSE 3000

CMD /wait && npm run migrate && npm start
