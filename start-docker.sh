#!/bin/bash

source .env

docker build -t elli-charger-api .
docker run --restart unless-stopped -d --env-file .env -p ${SERVER_PORT}:${SERVER_PORT} elli-charger-api