const formInputs = document.getElementsByClassName("input-field");
const emptyMessage = document.getElementsByClassName("empty-message");

function checkForm() {
  for (let i = 0; i < emptyMessage.length; i++) {
    console.log(emptyMessage[i].style.display);
    if (emptyMessage[i].style.display === "none") {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
}

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("focusout", () => {
    if (
      formInputs[i].value === "" &&
      formInputs[i].classList[1] !== "empty-warning"
    ) {
      formInputs[i].classList.add("empty-warning");
      emptyMessage[i].style.display = "block";
    } else if (formInputs[i].value !== "") {
      formInputs[i].classList.remove("empty-warning");
      emptyMessage[i].style.display = "none";
    }
  });
}

document.getElementById("contact-form").onsubmit = function () {
  return checkForm();
};
