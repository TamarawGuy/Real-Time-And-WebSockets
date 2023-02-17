## Project

In our third version of the same project we are going to create a chat application using the `Socket.io` library. Now we don't have to handle raw mechanics of accepting a connection, negotiating an upgrade, handling handshake to acknowledge what sort of a WebSocket connection it will be and what protocol they will speak on. All we are doing is to accept a connection.

## Libraries Used

- `http` -> we are using Node.js built-in library to create the server.
- `body-parser` -> allows Express to parse request bodies from the browser.
- `nanobuffer` -> allows us to create capped collection. In our array we will have mostly 50 messages and drop them off the end. For the sake of simplicity we're using this instead of database.
- `morgan` -> A logging library so we can see some nice request logs
- `nodemon` -> Helps us restart the server everytime we make a change.
