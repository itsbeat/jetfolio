FROM node:12-alpine

RUN apk add --no-cache git

WORKDIR /app

EXPOSE 8080

#COPY ./package.json *yarn* ./
#RUN yarn install

COPY . /app

CMD ["sh", "-c", "yarn install; yarn upgrade; yarn serve"]
