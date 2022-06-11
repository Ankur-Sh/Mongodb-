show dbs
use ankurKart
show collections
//updating database
db.items.updateOne({name:"Moto 30s"},{$set:{price:2}})
db.items.updateMany({name:"Moto 30s"},{$set:{price:4,rating:1}})

