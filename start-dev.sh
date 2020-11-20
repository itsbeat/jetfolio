#!/bin/bash


echo "Starting nginx ingress container..."
docker network create proxy_network 2> /dev/null
docker-compose -p ingress -f docker-compose.ingress.yml up -d

echo "Starting APP containers..."
docker-compose -f docker-compose.yml up -d

echo "APP Containers status:"
docker-compose -f docker-compose.yml ps
