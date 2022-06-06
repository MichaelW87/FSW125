const express = require('express');
const app = express();

const legend = [
    {name: "Ash", age: 121},
    {name: "Fuse", age: 54},
    {name: "Horizon", age: 37},
    {name: "Octane", age: 24}
]

const primary = [
    {name: "Havoc"},
    {name: "Car Smg"},
    {name: "Flatline"},
    {name: "R-99"}
]

const secondary = [
    {name: "Mozambique"},
    {name: "Longbow"},
    {name: "Kraber"},
    {name: "Wingman"}
]

app.get("/legend", (req, res) => {
    res.send(legend);
})

app.get("/primary", (req, res) => {
    res.send(primary);
})

app.get("/secondary", (req, res) => {
    res.send(secondary);
})

app.listen(3000, () => {
    console.log(`the server is running on port: ${3000}`)
})