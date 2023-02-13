const chat = document.getElementById("chat");
console.log(chat);
const msgs = document.getElementById("msgs");

let allChat = [];
const INTERVAL = 3000;

// submit listener for the form in HTML
chat.addEventListener("submit", function (e) {
  e.preventDefault();
  postNewMsg(chat.elements.user.value, chat.elements.text.value);
  chat.elements.text.value = "";
});

async function getNewMsgs() {
  let json;
  try {
    const res = await fetch("/poll");
    json = await res.json();

    if (res.status >= 400) {
      throw new Error("request did not succeed" + res.status);
    }
    console.log(json);
    allChat = json.msg;
    render();
    setTimeout(getNewMsgs, INTERVAL);
  } catch (error) {
    console.error("polling error", error);
  }
}

async function postNewMsg(user, text) {
  const data = { user, text };
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  await fetch("/poll", options);
}

function render() {
  const html = allChat.map(({ user, text, date, id }) =>
    template(user, text, date, id)
  );

  msgs.innerHTML = html.join("\n");
}

const template = (user, msg) =>
  `<li class="collection-item"><span class="badge">${user}</span>${msg}</li>`;

getNewMsgs();
