// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => 
{
	let shoppingList = ["bananas", "apples", "strawberries", "kiwis", "toilet paper", "paper", "pencils", "flour"];
	res.json({ shoppingList: shoppingList });
});

app.listen(PORT, () =>
{
	console.log(`Server listening on ${PORT}`);
});