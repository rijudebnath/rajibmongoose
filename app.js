// jshint esversion:6;
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
 mongoose.connect("mongodb://localhost:27017/newRDB",{useNewUrlParser:true});

//  schema
const fruitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String,
    price:Number
})
const Fruit = mongoose.model("Fruit",fruitSchema);

const Apple = new Fruit({
    name:"Apple",
    rating:5,
    review:"My Favorite Fruit"
})
const Banana = new Fruit({
    name:"Banana",
    rating:5,
    review:"This is so long"
})
const Orange = new Fruit({
    name:"Orange",
    rating:8,
    review:"This is so Sour"
})
const Strobery = new Fruit({
    name:"Strobery",
    rating:7,
    review:"This is so sweet"
})
const pineaple = new Fruit({
    name:"Pineaple",
    rating:8,
    review:"it's my favorite Fruit for all time ",
    price:35
})
// pineaple.save()
// Fruit.insertMany([Banana,Orange,Strobery], function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("insert Success Full")
//     }
// } )

Fruit.find(function(err,fruits){
    if(err){
        console.log(err)
    }
    else{
        mongoose.connection.close();
        fruits.forEach((fruit)=>{
            
            console.log(fruit.name)
        })
    }
})
// Apple.save();
const personSchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true]
    },
    age:Number,
    favoritFruit : fruitSchema
    
})
const Person = mongoose.model("Person",personSchema);

const firstPerson = new Person({
    name:"John",
    age:37
})
const Amy = new Person({
    name:'Amy',
    age:12,
    favoritFruit:pineaple
})
// Amy.save(function(err){
    //     if(err){
        //         console.log(err)
        //     }
        //     else{
            //         console.log("Amy Save SuccessFull")
            //     }
            // });
            Person.find(function(err,persons){
                if(err){
                    console.log(err)
                }
                else{
        persons.forEach((person)=>{
            console.log(person)

        })

    }
})
// firstPerson.save();

Fruit.updateOne({name:"Apple"},{price:40},function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("Update SuccessFull")
    }
})

Person.updateOne({name:"John"},{favoritFruit:Apple},function(err){
    if(err){
        console.log(err)
    }else{
        console.log("John Update SuccessFull")
    }
})
Fruit.deleteMany({_id:["6395c41874ddb7a3a2a3a7e1","6395c40bfdf25a5c4126dbeb","6395c335564d5fb9f1ed6976","6395c2b00286cb5550f088eb"]},function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("pineapls Delete SuccessFull")
    }
})