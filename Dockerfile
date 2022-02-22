FROM cypress/base:latest

LABEL maintainer "Allan Scala <allanscala@gmail.com>"

WORKDIR /app

COPY . /app

RUN npm i


