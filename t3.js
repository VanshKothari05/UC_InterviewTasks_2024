const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Used as forms send url- encoded data
app.use(express.static("public"));

const MongoClient = require("mongodb").MongoClient;
let dataCollection;
MongoClient.connect(
  "mongodb+srv://Vanshk:Vansh%402005@unicode.t9odhz7.mongodb.net/?retryWrites=true&w=majority&appName=Unicode",
  { useUnifiedTopology: true } //used when we connect to mongoose library
)
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("Harry-Potter-Task");
    dataCollection = db.collection("data");
    app.get("/ThankYou", (req, res) => {
      res.send("Your Data Has Been Successfully Submitted");
    });
    app.post("/data", (req, res) => { //Used for uploading the data
      console.log(req.body);
      dataCollection
        .insertOne(req.body)
        .then((result) => {
          console.log(result);
          res.redirect("/ThankYou");
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send("An error occurred while inserting data");
        });
    });
    app.get("/data", (req, res) => { //Used for getting the data
      dataCollection
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
          res.render("index.ejs", { data: results });
        })
        .catch((error) => console.error(error));
    });
    app.patch("/data", (req, res) => {   //Used for receiving the data
      console.log("Received Put Request");
      console.log(req);
      dataCollection
        .findOneAndUpdate(
          { id: '13027' },
          {
            $set: {
              name: req.body.name,
              id: req.body.id,
              gender: req.body.gender,
              house: req.body.house,
              wizard: req.body.wizard,
            },
          },
          {
            upsert: true, //If a doc doesnt exist it will create one
            returnDocument: "after", //Used to know if we want before updated doc or after updated
          }
        )
        .then((result) => {
          if (result.value) {
            console.log("Updated document:", result.value);
            res.send("Data updated successfully");
            console.log(result);
          } else {
            res.status(404).send("Data not found"); 
          }
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send("An error occurred while updating data");
        });
    });
    app.delete("/data", (req, res) => {  //Used for deleting the data
      dataCollection
        .deleteOne({ name: req.body.name })
        .then((result) => {
          res.json(`Deleted the data `);
          console.log(result);
        })
        .catch((error) => console.error(error));
    });
    app.get("/t3/query", (req, res) => {
      const { search, limit } = req.query;

      // Initialize query  (Bonus Task)
      let query = {};
      if (search) {
        query.name = { search };
      }

      // Find and filter data
      dataCollection
        .find(query)
        .toArray()
        .then((results) => {
          if (limit) {
            results = results.slice(0, Number(limit));
          }
          res.status(200).json(results);
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send("An error occurred while querying data");
        });
    });
  })
  .catch((error) => console.error(error));

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
