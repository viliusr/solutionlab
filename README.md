# Coffee billboard
Solutionlab Production task. Coffee billboard application based on Lumen/React

## System requirements

 - npm
 - composer
 - git
 - php >= 5.6.4
 - mysql >= 5.6
 - sqlite (for testing)

## Installation

First you have to clone remote project repository
```sh
$ git clone https://github.com/viliusr/solutionlab.git solutionlabtask
```

Enter project directory
```sh
$ cd solutionlabtask
```

#### Back-end setup

Install application back-end dependencies:
```sh
$ composer install
```

Create application back-end environment config file:
```sh
$ cp .env.example .env
```
Edit .env file and change database configuration acording to your database setup (How to setup MySQL database you can check [here](https://dev.mysql.com/doc/refman/5.7/en/creating-database.html))
```sh
DB_DATABASE=<homestead>
DB_USERNAME=<homestead>
DB_PASSWORD=<secret> 
```

Generate application back-end key (safety first):
```sh
$ php artisan key:generate
```

Create database structure:
```sh
$ php artisan migrate
```

You may also would like to have some sample data on the database, so you can seed data into database with:
```sh
$ php artisan db:seed
```

#### Front-end setup

Install application front-end dependencies and build:
```sh
$ npm --prefix ./public install
$ npm --prefix ./public run-script build
```

## Running back-end

Most easy way to run application back-end server is by using php build-in web server
```sh
php -S 127.0.0.1:8000 -t public
```

After you start application back-end server the application is available at:
[http://127.0.0.1:8000/app](http://127.0.0.1:8000/app)

## Testing

Running application back-end tests:
```sh
$ ./vendor/bin/phpunit --configuration phpunit.xml
```

Running application front-end tests:
```sh
$ npm --prefix ./public test
```