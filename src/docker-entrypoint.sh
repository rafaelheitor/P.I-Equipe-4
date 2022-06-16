#!/bin/sh

echo "Waiting for MySQL to start..."
./wait-for db:3306

echo "creating the databse..."
npm run db:create 

echo "Migrating the databse..."
npm run db:migrate

echo "Populating the databse..."
npm run seeder

echo "Starting the server..."
npm start 