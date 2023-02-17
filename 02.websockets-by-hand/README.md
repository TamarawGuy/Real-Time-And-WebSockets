## Project

The aim of this project is create a raw implementation of a web socket connection using the Browser's `new WebSocket` API.

- `express` -> I chose Express for the development of the server, because it is most commonly used in the Node.js environment.
- `body-parser` -> allows Express to parse request bodies from the browser.
- `nanobuffer` -> allows us to create capped collection. In our array we will have mostly 50 messages and drop them off the end. For the sake of simplicity we're using this instead of database.
- `morgan` -> A logging library so we can see some nice request logs
- `nodemon` -> Helps us restart the server everytime we make a change.

When the the client connects with the server it requests the connection to be `upgraded` from a normal connection to a websocket.

1. `generate-accept-value.js` => The file, which verifies that both the browser and server want a websocket connection. The client sends an acceptance key in the headers and the server mixes it with the key `258EAFA5-E914-47DA-95CA-C5AB0DC85B11`. Afterwards we send the necessary headers to make sure they are speaking the same protocol.

2. `obj-to-response.js` => Takes the requested object, manipulated in a binary way, so we can make sure it's going to be sent in the correct way.

3. `parse-message.js` => Since we are getting a buffer when we post, we have to parse it to a real text message.

With this implementation we can now update our messages and display them on the client side
