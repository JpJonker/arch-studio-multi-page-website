const formInputs = document.getElementsByClassName("input-field");
const errorMessage = document.getElementsByClassName("error-message");
console.log(errorMessage);

function checkInput(input, name) {
  console.log(input["name"]);

  switch (name) {
    case "name":
      if (input["name"].value === "") {
        errorMessage[0].textContent = "Can't be empty";
        errorMessage[0].style.display = "block";
        input["name"].classList.add("error-style");
      } else {
        errorMessage[0].style.display = "none";
        input["name"].classList.remove("error-style");
      }

      return;
    case "email":
      if (input["email"].value === "") {
        errorMessage[1].textContent = "Can't be empty";
        errorMessage[1].style.display = "block";
        input["email"].classList.add("error-style");
      } else if (input["email"].value !== "") {
        let email = input["email"].value.split("");
        let valid = checkEmail(email);
        if (valid == false) {
          errorMessage[1].textContent = "Not valid email";
          errorMessage[1].style.display = "block";
          input["email"].classList.add("error-style");
        } else {
          errorMessage[1].style.display = "none";
          input["email"].classList.remove("error-style");
        }
      }
      return;
    case "message":
      if (input["message"].value === "") {
        errorMessage[2].textContent = "Can't be empty";
        errorMessage[2].style.display = "block";
        input["message"].classList.add("error-style");
        return;
      } else {
        errorMessage[2].style.display = "none";
        input["message"].classList.remove("error-style");
        return;
      }
  }
}

function checkEmail(email) {
  let isValidEmail = false;
  let hasDot = false;
  let hasAtSym = false;

  email.forEach((element) => {
    switch (element) {
      case "@":
        hasAtSym = true;
        break;
      case ".":
        hasDot = true;
        break;
      default:
        break;
    }
  });
  if (hasDot == true && hasAtSym == true) {
    isValidEmail = true;
  }

  return isValidEmail;
}

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("focusout", () => {
    checkInput(formInputs, formInputs[i].name);
  });
}
