#!/bin/bash
set -e

php artisan migrate --force

exec "$@"
