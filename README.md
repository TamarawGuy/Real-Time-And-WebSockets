## Introduction

We have 3 separate folders in this repository. All of them represent the same project -> Chat Application, but the 3 of them use different implementation.

- `01.long-polling` -> Here we are creating the app using a concept know as `Long-Polling`

- `02.websocket-by-hand` -> In this project we are creating a web socket connection from scratch to see what's going on under the hood. In that way we can much more appreciated what the library `socket.io` is doing for us, which we will see in the third project.

- `03.socket-io` -> The final project is using `socket.io`, which enables real-time bidirectional event-based communication.

## Usage

1. Clone the repo
   `git clone https://github.com/TamarawGuy/Real-Time-And-WebSockets.git`

2. Open in Command Prompt and get to folder you want to see. Example
   `cd 01.long-polling`

3. Open it in VScode

4. Run `npm install` to install necessary packages

5. Run `nodemon backend/server.js` to start the server

6. Open in browser
