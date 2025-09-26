# Usar PHP 8.3 CLI para usar servidor embebido PHP (sin FPM)
FROM php:8.3-cli

# Instalar dependencias del sistema y extensiones PHP necesarias para Laravel
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    curl \
    libzip-dev \
    libonig-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libxml2-dev \
    libpq-dev \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql pgsql zip mbstring xml gd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Instalar Node.js 20 LTS y npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest

# Instalar Composer globalmente
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copiar TODO el código al contenedor (incluye artisan y bootstrap)
COPY . .

# Instalar dependencias PHP (composer)
RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist

# Instalar dependencias JS
RUN npm ci

# Construir frontend React + Vite
RUN npm run build

# Ajustar permisos de storage y bootstrap/cache
RUN chown -R www-data:www-data storage bootstrap/cache \
    && chmod -R 775 storage bootstrap/cache

# Exponer puerto dinámico (Railway usa variable PORT)
EXPOSE 8080

# Comando para iniciar el servidor PHP embebido usando el puerto que da Railway
CMD ["sh", "-c", "php -S 0.0.0.0:${PORT:-8080} -t public"]
