let messages = [];
let sendMessage = document.querySelector("#sendMessage");

sendMessage.addEventListener("click", () => {
  addMessage();
});

document.addEventListener("DOMContentLoaded", () => {
  let name = localStorage.getItem("name");
  let avatar = localStorage.getItem("avatar");
  console.log(document.getElementById("avatar"));
  if (name != null) {
    document.getElementById("name").value = name;
  }
  if (avatar != null) {
    document.getElementById("avatar").value = avatar;
  }
});

function generateMessage(userName, avaUrl) {
  let optionsString = "";
  for (item of messages) {
    optionsString += `<div><img src="${avaUrl}" style="width: 30px"><span>${userName}:${item}</span></div>`;
  }
  document.querySelector("#container").innerHTML = optionsString;
}

function addMessage() {
  let userName = document.querySelector("#name").value;
  let message = document.querySelector("#inputMessage").value;
  let avaUrl = document.querySelector("#avatar").value;

  localStorage.setItem("name", userName);
  localStorage.setItem("avatar", avaUrl);

  message = checkSpam(message);
  messages.push(message);
  generateMessage(userName, avaUrl);
  document.querySelector("#inputMessage").innerHTML = "";
}

function checkSpam(str) {
  str = str.replace(/viagra/gi, "***");
  str = str.replace(/xxx/gi, "***");
  return str;
}
