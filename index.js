const express = require("express");

const app = express();

let i = 0;

app.get("/", (_, res) => {
	console.log("handling req - " + i);
	i++;
	res.status(200).send("playground");
});

app.listen(8080, () => console.log("Up"));
