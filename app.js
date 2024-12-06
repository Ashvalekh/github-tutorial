const express = require("express")
const app = express()

app.use(express.json())

let users = [{ id: 1, name: "harry" },
{ id: 2, name: "hari" }
]

app.get("/users", function (req, res) {
    res.json(users)
})

app.post("/users", function (req, res) {
    let newUser = req.body;
    users.push(newUser)
    res.json({ message: "naya banda mil gya" })
})

app.put("/users/:id", function (req, res) {
    const UserId = parseInt(req.params.id);
    const UpdatedData = req.body
    users = users.map(function (user) {
      return user.id === UserId ? { ...user, ...UpdatedData} : user
    })
    console.log(UpdatedData)
    res.json({ message: "banda badal gya" })
})

app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.json({ message: "User deleted successfully!" });
});


app.listen(3000)