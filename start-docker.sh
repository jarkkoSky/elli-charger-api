#!/bin/bash

CONTAINER_NAME=elli-charger-api-container
IMAGE_NAME=elli-charger-api

source .env

docker rm -f $CONTAINER_NAME || true

docker build -t $IMAGE_NAME .
docker run --name $CONTAINER_NAME --restart unless-stopped -d --env-file .env -p ${SERVER_PORT}:${SERVER_PORT} $IMAGE_NAME