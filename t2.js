const express = require("express");
const app = express();
const axios = require("axios");
//Here we try to get the characters from the api
app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Error fetching data");
  }
});
//Here we try to get thr spells from the api
app.get("/spells", async (req, res) => {
  try {
    const response = await axios.get("https://hp-api.onrender.com/api/spells");
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Error fetching data");
  }
});
//Here we try to get the stuff from the api
app.get("/stuff", async (req, res) => {
  try {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters/staff"
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Error fetching data");
  }
});
//Here we try to get the students from the api
app.get("/students", async (req, res) => {
  try {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters/students"
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Error fetching data");
  }
});
//Here we do get the response based on input id (BONUS TASK)
//Here we initialize a server
app.get("/characters/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await axios.get(
       `https:hp-api.onrender.com/api/character/${userId}` 
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Error fetching data");
  }
});
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
