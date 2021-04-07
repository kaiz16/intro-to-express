const express = require("express");
// create an instance
const app = express();
// use body passed in by client
app.use(express.json());

// MOCK DATA
let data = [
  {
    title: "First todo",
    id: 1,
  },
  {
    title: "Two todo",
    id: 2,
  },
  {
    title: "Three todo",
    id: 3,
  },
];
// static route
app.get("/todos", (request, respond) => {
  respond.send(data);
});

// dynamic
app.get("/todos/:id", (request, respond) => {
  let todo = data.filter((d) => d.id == request.params.id);
  respond.send(todo);
});

// post route ()
app.post("/create-todo", (req, res) => {
  let todo = {
    title: req.body.title,
    id: req.body.id,
  };
  data.push(todo);
  res.send(todo);
});


// app.listen
app.listen(8000, () => {
  console.log("A server is now listening");
});
