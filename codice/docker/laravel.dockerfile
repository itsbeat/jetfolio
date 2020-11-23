FROM php:7-fpm-alpine

ARG USER_ID=1000
ARG GROUP_ID=1000

WORKDIR /var/www/

RUN apk --update add wget \
    curl \
    git \
    grep \
    build-base \
    libmemcached-dev \
    libzip-dev \
    libxml2-dev \
    imagemagick-dev \
    pcre-dev \
    libtool \
    freetype-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    shadow \
    make \
    autoconf \
    g++ \
    cyrus-sasl-dev \
    libgsasl-dev \
    supervisor

RUN NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
    docker-php-ext-install -j${NPROC} \
      mysqli \
      gd \
      pdo \
      pdo_mysql \
      tokenizer \
      xml \
      zip

RUN apk del --no-cache \
      freetype-dev \
      libpng-dev \
      libjpeg-turbo-dev

RUN pecl channel-update pecl.php.net \
      && pecl install memcached \
      && pecl install imagick \
      && docker-php-ext-enable memcached \
      && docker-php-ext-enable imagick

RUN userdel -f www-data &&\
      if getent group www-data ; then groupdel www-data; fi &&\
      groupadd -g ${GROUP_ID} www-data &&\
      useradd -l -u ${USER_ID} -g www-data www-data &&\
      install -d -m 0755 -o www-data -g www-data /home/www-data

# latest composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
