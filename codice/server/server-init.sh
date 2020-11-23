#!/bin/bash
set -e

composer update -vv
composer dumpautoload

php artisan config:cache
php artisan key:generate

# Clear all the possible cache
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan config:cache
php artisan passport:keys
php artisan migrate

php artisan queue:work --daemon &

exec "$@"
