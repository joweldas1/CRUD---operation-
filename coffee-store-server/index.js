const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

//CoffeeMaster
//MujCQAUQo0TXVVbk

// middle wire
app.use(cors(
  {
  origin: ["https://coffee-store-b221e.web.app"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  withCredentials: true,
}
));
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.4mwwnz0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const coffeeCollection = client.db("coffeeDB").collection("coffee");
    const userCollection=client.db('coffeeDB').collection('user')

    app.get("/coffee", async (req, res) => {
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    //post - data comes here form client side
    app.post("/coffee", async (req, res) => {
      const newCoffee = req.body;
      console.log(newCoffee);
      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result);
    });
    //delete operation
    app.delete("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      console.log("server delete function is hitting", id);
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    });

    app.get("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.findOne(query);
      res.send(result);
    });

    app.put("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const update = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateCoffee = {
        $set: {
          name: update.name,
          supplier: update.supplier,
          category: update.category,
          chef: update.chef,
          taste: update.taste,
          details: update.details,
          image: update.image,
          price: update.price,
        },
      };
      const result=await coffeeCollection.updateOne(filter,updateCoffee,options)
      res.send(result)

      console.log(update);
    });

    //user related api

    app.get('/user',async (req,res)=>{
      const data=userCollection.find()
      const result=await data.toArray()
      res.send(result)
    })

    app.post('/user',async(req,res)=>{
      const user=req.body;
      console.log(user);
      const result=await userCollection.insertOne(user)
      res.send(result)
    })

    app.patch('/user',async(req,res)=>{
      const user=req.body;
      const filter={email:user.email}
      const updateDoc={
        $set:{
          lastLoggedAt: user.lastLoggedAt
        }
      }
      const result = await userCollection.updateOne(filter,updateDoc )
      res.send(result)
    })

    app.delete("/user/:id",async(req,res)=>{
      const id=req.params.id;
      console.log('server hitting');
      const query={_id:new ObjectId(id)}
      const result=await userCollection.deleteOne(query);
      res.send(result)
    })
 

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("coffee server is running");
});

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
