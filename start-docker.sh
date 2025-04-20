#!/bin/bash

CONTAINER_NAME=elli-charger-api-container

source .env

docker rm -f $CONTAINER_NAME || true

docker build -t elli-charger-api .
docker run --name $CONTAINER_NAME --restart unless-stopped -d --env-file .env -p ${SERVER_PORT}:${SERVER_PORT} elli-charger-api