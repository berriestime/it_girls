let messages = [];

let sendMessage = document.querySelector("#sendMessage");

sendMessage.addEventListener("click", () => {
  addMessage();
});

function generateMessage() {
  let optionsString = "";
  for (message of messages) {
    optionsString += `<div><span>${message}</span></div>`;
  }

  document.querySelector("#container").innerHTML = optionsString;
}

function addMessage() {
  let name = document.querySelector("#inputMessage").value;
  name = checkSpam(name);
  messages.push(name);
  generateMessage();
  document.querySelector("#inputMessage").innerHTML = "";
}

function checkSpam(str) {
  str = str.replace(/viagra/gi, "***");
  str = str.replace(/xxx/gi, "***");
  return str;
}
