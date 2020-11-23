#!/bin/sh
set -e
# Install composer dependencies
php artisan key:generate --force

exec "$@"
