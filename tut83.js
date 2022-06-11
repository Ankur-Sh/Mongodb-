show dbs
use ankurKart
show collections

db.items.find({price:22000})

//Deleting items from the mongo database
db.items.deleteOne({price:22000}) //dleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteMany({rating:4.2})