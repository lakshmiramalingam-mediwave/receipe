let favrecipe = [];

// total or outer div
function makereceipeDiv(recipe) {
  if (recipe.isEdit) {
    const div = document.createElement("div");
    div.setAttribute("class", "recipe-card");

    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", `edit-${recipe.id}-name`);
    nameInput.setAttribute("placeholder", "Enter recipe name");
    nameInput.setAttribute("id", `edit-${recipe.id}-name`);
    nameInput.setAttribute("value", recipe.title);

    const timeInput = document.createElement("input");
    yearInput.setAttribute("type", "date");
    yearInput.setAttribute("name", `edit-${recipe.id}-time`);
    yearInput.setAttribute("placeholder", "Enter recipe time");
    yearInput.setAttribute("id", `edit-${recipe.id}-time`);
    yearInput.setAttribute("value", recipe.recipe - time);

    const yearInput = document.createElement("input");
    yearInput.setAttribute("type", "text");
    yearInput.setAttribute("name", `edit-${recipe.id}-name`);
    yearInput.setAttribute("placeholder", "Enter recipe steps");
    yearInput.setAttribute("id", `edit-${recipe.id}-name`);
    yearInput.setAttribute("value", recipe.recipe - steps);

    button.addEventListener("click", function () {
      const newTitle = document.querySelector(`#edit-${movie.id}-name`).value;
      const newYear = document.querySelector(`#edit-${movie.id}-year`).value;
      if (!newTitle || !newYear) {
        alert("Enter all fields");
      } else {
        if (newYear > new Date().getFullYear()) {
          alert("enter correct year");
        } else if (newYear < 1895) {
          alert("enter correct year");
        } else {
          const toUpdateIndex = favMovies.findIndex((m) => m.id == movie.id);
          if (toUpdateIndex != -1) {
            favrecipe[toUpdateIndex]["title"] = newTitle;
            favrecipe[toUpdateIndex]["releaseDate"] = newtime;
            favrecipe[toUpdateIndex]["isEdit"] = false;
            updateMovieListUI();
            saveToLocalStorage();
          }
        }
      }
    });

    div.appendChild(nameInput);
    div.appendChild(yearInput);
    div.appendChild(button);

    return div;
  } else {
    const id = `recipe-${recipe["id"]}`;
    div.setAttribute("id", id);
    //title
    const h2 = document.createElement("h2");
    h2.innerText = receipe["recipe-title"];
    //release date
    const h3 = document.createElement("h3");
    h3.innerText = receipe["recipe-time"];

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function () {
      removeMovie(recipe["id"]);
    });

    const editBtn = document.createElement("button");
    editBtn.innerText = "Update";
    editBtn.addEventListener("click", function () {
      editMovie(recipe["id"]);
    });

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(deleteBtn);
    return div;
  }
}

function removerecipe(reciped) {
  console.log("Deleting ", recipeId);

  const filteredArray = favrecipe.filter((recipe) => recipe.id != recipeId);
  favrecipe = filteredArray;
  updateMovieListUI();
  saveToLocalStorage();
}

function addrecipe(recipe) {
  favrecipe.push(recipe);
  updateMovieListUI();
  saveToLocalStorage();
}

function appendToApp(recipeDiv) {
  const app = document.querySelector("#app");
  app.appendChild(recipeDiv);
}
function clearApp() {
  const app = document.querySelector("#app");
  app.innerHTML = "";
}

function updateMovieListUI() {
  clearApp();
  for (let i = 0; i < favrecipe.length; i++) {
    const recipeDiv = makerecipeDiv(favrecipe[i]);
    appendToApp(recipe);
  }
}

function hookForm() {
  const form = document.querySelector("#titlecard-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#recipe-title").value;
    const time = document.querySelector("#recipe-time").value;
    const steps = document.querySelector("#recipe-steps").value;
    addrecipe(recipe);
  });
}

function saveToLocalStorage() {
  const str = JSON.stringify(favrecipe);
  localStorage.setItem("my-recipe-list", str);
}

function getFromLocalStorage() {
  const str = localStorage.getItem("my-recipe-list");
  if (!str) {
    favrecipe = [];
  } else {
    favrecipe = JSON.parse(str);
  }
}

getFromLocalStorage();
updateMovieListUI();
hookForm();
