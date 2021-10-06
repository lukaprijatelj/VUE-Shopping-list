// server/index.js
import express from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req: any, res: any) => 
{
	let shoppingList = ["bananas", "apples", "strawberries", "kiwis", "toilet paper", "paper", "pencils", "flour"];
	res.json({ shoppingList: shoppingList });
});

app.listen(PORT, () =>
{
	console.log(`Server listening on ${PORT}`);
});