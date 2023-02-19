const btn = document.querySelector("#btn");
const url = "https://httpbin.org/post";
const form = document.querySelector("#form");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(url, {
    method: "POST",
    body: new FormData(form),
    // body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
});
