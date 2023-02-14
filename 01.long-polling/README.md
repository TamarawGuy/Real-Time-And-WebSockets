## Introduction to Long-Polling

**Long-polling** is really a very special way of saying "a lot of requests". There is nothing special in this case, it is just AJAX requests on some interval.

## Project

The aim of this project is to show the concept of long-polling by creating a simple chat app application. The packages used are the following:

- `express` -> I chose Express for the development of the server, because it is most commonly used in the Node.js environment.
- `body-parser` -> allows Express to parse request bodies from the browser.
- `nanobuffer` -> allows us to create capped collection. In our array we will have mostly 50 messages and drop them off the end. For the sake of simplicity we're using this instead of database.
- `morgan` -> A logging library so we can see some nice request logs
- `nodemon` -> Helps us restart the server everytime we make a change.

We are using `requestAnimationFrame`, so that when the user's screen is not on focus, we can stop making requests and pause our polling, because we don't want to waste data and resoursec on our user's device.

We have also implemented **backoff and retry**, which is when our requests fail to load. We know what happens when we have error on our polling - request after request! When that request fails, the polling will try again. In order to prevent that, if a request fails, we will make our polling longer, if the request is successful - set it back to normal interval.
