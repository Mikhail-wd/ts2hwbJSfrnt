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

// Задание 2.1

const numberInput = document.getElementsByTagName("Input")[1];

numberInput.addEventListener("keyup", function (event) {

  try {
    if (numberInput.value > 10 || numberInput.value < 5) {
      document.getElementById("anonce").innerHTML = "Вроде как ошибок нету"
    } else {
      throw error
    }
  } catch (error) {
    if (numberInput.value < 10 || numberInput.value1 > 5) {
      document.getElementById("anonce").innerHTML = "Нет, нет, нет, число должно быть меньше 5 или больше 10 !"
    } else {
      document.getElementById("anonce").innerHTML = "Что то не очень похоже на число."
    }
  }


})


//Задание 2.2

async function lotteryTwoZero() {

  console.log("Вы начали игру в версию 2.0")

  const result = await Math.random(0);
  
  const promise = await new Promise(function(resolve){
    if (result>0.5) {
      resolve (console.log("Вы выйграли."),console.log("Вам заплатили"),console.log("Игра закончена"))
    } else {
      resolve (console.log("Вы проиграли"),console.log("Игра закончена"))
    }    
  })

}
lotteryTwoZero()