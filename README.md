# solutionlab
Solutionlab Production task

# BackEnd setup

Install backend apckages:
$ composer install

Create application config:
$ cp .env.example .env

Generate application key (safety first):
$ php artisan key:generate

Create database:
Fill DB data

Create database structure:
$ php artisan migrate

# FrontEnd setup

cd public

$ npm install
$ npm run-script build

Run server:
php -S 127.0.0.1:8000 -t public

http://127.0.0.1:8000

Frontend setup