//getting-started.js
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/ankurKart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
//db.once("open", function () {
//we are connected
//  console.log("We are connected bro/sis..");
//});

var kittySchema = new mongoose.Schema({
    name: String,
});

kittySchema.methods.speak = function speak() {
    var greeting = "My name is " + this.name;
    console.log(greeting);
};

var Kitten = mongoose.model("ankurKitty", kittySchema);

var ankurKitty = new Kitten({ name: "ankurKitty" });
var ankurKitty2 = new Kitten({ name: "ankurKitty2" });
// console.log(ankurKitty.name); // 'Silence'
// ankurKitty.speak();

ankurKitty.save(function (err, ankurKitty) {
    if (err) return console.error(err);
    //  ankurKitty.speak();
});
ankurKitty2.save(function (err, k) {
    if (err) return console.error(err);
    // k.speak();
});

Kitten.find({ name: "ankurKitty2" }, function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
});
