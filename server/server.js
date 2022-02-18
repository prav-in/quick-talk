const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT;
const server = http.createServer(app);

app.use(cors());
app.get("/", (req, res) => {
  res.send("...Server Live!!");
});
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      const newRecipients = recipients.filter((r) => r !== recipient);
      newRecipients.push(id);
      socket.broadcast.to(recipient).emit("receive-message", {
        recipients: newRecipients,
        text,
        sender: id,
      });
    });
  });
});

server.listen(port, () => {
  console.log("server is working on " + port);
});
