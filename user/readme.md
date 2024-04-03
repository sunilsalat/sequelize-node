## post eg. using curl

curl -X POST http://localhost:3000/api/v1/user/create -H "Content-Type: application/json" -d '{"name": "john", "email":"john@yopmail.com", "addressid":1}'

curl -X http://localhost:3000/api/v1/user/all

curl -X POST http://localhost:3000/api/v1/user/update -H "Content-Type: application/json" -d '{"userId":2, "name": "john", "email":"johny@yopmail.com", "addressid":1}'

## connect using defaul user

psql -U postgres

## to query using psql use ; with space at the end of query

select \* from "Emps" ;

## command to list all databases and tables and to see current database

\l list all databases
\dt list all tables
\c show current connected user

## association in sequelize

a.hasOne(b)
a.hasMany(b)
a.belongsTo(b)
A.belongsToMany(B, { through: 'C', /_ options _/ });

The A.hasOne(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the target model (B).

The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).

The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).
