const chat = document.getElementById("chat");
const msgs = document.getElementById("msgs");

let allChat = [];
const INTERVAL = 3000;

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
  } catch (error) {
    console.error("polling error", error);
  }
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
