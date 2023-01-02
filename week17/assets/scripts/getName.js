let buttonSend = document.querySelector("#buttonSend");

const getName = () => {
  let fullName = document.querySelector("#fullName");
  fullName = fullName.value.split(" ");
  fullName = fullName.filter((num) => num != "");
  for (let i = 0; i < fullName.length; i++) {
    fullName[i] =
      fullName[i].charAt(0).toUpperCase() + fullName[i].slice(1).toLowerCase();
  }
  return fullName;
};

buttonSend.addEventListener("click", (e) => {
  let fullName = getName();
  const firstName = document.querySelector("#firstName");
  firstName.value = fullName[0];

  const secondName = document.querySelector("#secondName");
  secondName.value = fullName[1];

  const patronymic = document.querySelector("#patronymic");
  patronymic.value = fullName[2];
});
