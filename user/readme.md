## post eg. using curl

curl -X POST http://localhost:3000/api/v1/user/create -H "Content-Type: application/json" -d '{"name": "john", "email":"john@yopmail.com"}'

## connect using defaul user

psql -U postgres

## command to list all databases and tables and to see current database

\l
\dt
\c

## association in sequelize

sourceModel.hasOne(targetModel)
sourceModel.hasMany(targetModel)
targetModel.belongsTo(sourceTable)
