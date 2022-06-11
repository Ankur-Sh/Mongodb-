//Searching for data in mongo db
use ankurKart

//This query will return all the objects with rating equal to 4.2
db.items.find({rating:4.2})
db.items.find({rating:{$gte:4.2}})
db.items.find({rating:{$gt:4.2}})
//And operator
db.items.find({rating:{$gt:4.2},price:{$gt:22000}})
db.items.find({rating:{$gt:4.2},price:{$lt:25000}})

//Or operator
db.items.find({ $or:[{rating:{$gt:4.2}},{price:{$gt:20000}}]})


//When we need only defined parameters
db.items.find({rating:{$gt:4.2}},{rating:1,qty:1})