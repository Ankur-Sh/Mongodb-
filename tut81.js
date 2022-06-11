//Inserting Data in mongo db
use ankurKart
db.items.insertOne({name:"Samsung 30s",price:22000,rating:4.5,qty:233,sold:98})
db.items.insertMany([{name:"Samsung 30s",price:22000,rating:4.5,qty:233,sold:98},db.items.insertOne({name:"Moto 30s",price:29000,rating:4.2,qty:203,sold:88}),db.items.insertOne({name:"Realme 80s",price:30000,rating:4.8,qty:33,sold:90,isBig:"True"})])