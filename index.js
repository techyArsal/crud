const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const usersList = document.getElementById("users_list");
const addUserBtn = document.getElementById("add_user");
const viewUserBtn = document.getElementById("view_user");

let users = [];

class User {
  name;
  email;

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

showUsers();

addUserBtn.addEventListener("click", function () {
  const user = new User(nameInput.value, emailInput.value);
  users.push(user);
  const usersJson = JSON.stringify(users);
  localStorage.setItem("users", usersJson);
});
{
  /* <li class="user_record">Arsalan ( me@khattak.dev)</li> */
}

viewUserBtn.addEventListener("click", function () {
  showUsers();
});

function showUsers() {
  const userStorage = localStorage.getItem("users");
  const JSONToUser = JSON.parse(userStorage);
  for (let i = 0; i < JSONToUser.length; i++) {
    const liItem = document.createElement("li");
    // liItem.textContent = JSONToUser[i].name + " ( " + JSONToUser[i].email + " )";
    liItem.textContent = `${JSONToUser[i].name} ( ${JSONToUser[i].email})`;
    usersList.appendChild(liItem);
  }
}
