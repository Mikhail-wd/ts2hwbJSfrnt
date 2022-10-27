const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

document.getElementsByTagName("form")[0].addEventListener("submit", function (event) {
  event.preventDefault();
})
const startForPlaceholders = document.getElementById("startForUsers");

loadBtn.addEventListener("click", function (evt) {
  const searchValue = searchInput.value.trim().toLowerCase();
  fetch(`https://api.github.com/users/${searchValue}`).then(respond => respond.json()).then(
    (data) =>
    (resultsContainer.innerHTML = `<div class="response-container">
                <img src="${data.avatar_url}">
                <p> Имя: <span>${data.name}</span><p>
                <p> О себе: <span>${data.bio}</span><p>
                <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
            </div>`)
  );
});



axios.get("https://jsonplaceholder.typicode.com/users").then(respond =>
respond.data.forEach(persone => startForPlaceholders.insertAdjacentHTML("afterend", `<div class="response-container">
              <img src="https://source.unsplash.com/random/200x200?sig=${persone.id}">
              <p> Имя: <span>${persone.name}</span></p>
              <p> Город: <span>${persone.address.city}</span></p>
              <p> Работает в компании: <span>${persone.company.name}</span></p>
              <p> Телефон и вебсайт: <span>${persone.phone}</span>, <span>${persone.website}</span></p>
          </div>
          <br>`)
));