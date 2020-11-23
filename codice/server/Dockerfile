FROM apticlab/laravel:latest

# Set all directory permissions to 755
# RUN find application/ -type f -exec chmod 755 {} \;
# Set all files permissions to 644
# RUN find application/ -type d -exec chmod 644 {} \;

COPY server-init.sh /usr/local/bin/
RUN ln -s usr/local/bin/docker-entrypoint.sh / # backwards compat
RUN chmod +x /usr/local/bin/server-init.sh

USER www-data

ENTRYPOINT ["sh", "server-init.sh"]

CMD ["php-fpm"]
