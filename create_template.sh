#! /bin/bash

if [ ! -f config ];
then
  echo "config file is missing. Have you tried with cp config.example config?"
  exit 1
fi

source config

echo "Creating docker-compose template..."
envsubst < ./templates/docker-compose.template.yml > docker-compose.yml
echo "Creating docker-compose.prod template..."
envsubst < ./templates/docker-compose.prod.template.yml > docker-compose.prod.yml
echo "Creating package.json template..."
envsubst < ./templates/package.template.json > ./client/package.json
echo "Creating composer.json template..."
envsubst < ./templates/composer.template.json > ./server/composer.json
echo "Creating server .env template..."
envsubst < ./templates/env.template > ./server/.env
echo "Creating nginx template..."
# Substitute only $PROJECT_SLUG, otherwise all the others $<options> in nginx will fail
envsubst '$PROJECT_SLUG' < ./templates/nginx.dev.template.conf > ./web/nginx.dev.conf

echo "Done!"
