let name = new Typed(".nameChange", {
  strings: ["Ateba Chouacha"],
  typeSpeed: 100,
  backSpeed: 300,
  loop: true,
  fadeOut: true,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 600
});

let indication = new Typed(".indication", {
  strings: ['Enter a city to get its current weather', 'eg : Yaounde', 'eg: Paris', 'eg: London', 'eg: Newyork','eg: Manchester'],
  loop: false,
  typeSpeed: 100,
  backSpeed: 20,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 200
});

const myApiKey = "8c28d7ff09fe18e0d7726382f4431c04";

async function fetchApp(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric&lang=fr`;
  const app = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.getElementById("ville").innerHTML = data.name;
      document.getElementById("tmp").innerHTML =
        "<ion-icon name='thermometer-outline'></ion-icon> " +
        data.main.temp +
        " °";
      document.getElementById("humid").innerHTML =
        "<ion-icon name='water'></ion-icon> " + data.main.humidity + " %";
      document.getElementById("vent").innerHTML =
        "<ion-icon name='rainy-sharp'></ion-icon>" + data.wind.speed + " Km/H";
    })
    .catch((err) => console.log("Erreur :" + err));
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let ville = document.getElementById("city").value;
  fetchApp(ville);
});

// Appel par defaut
fetchApp("Yaounde");

// throw new Error("impossible d'acceder au serveur");
// async function fetchUser() {
//   let app = await fetch("text.json");
//   if (app.ok === true) {
//     return app.text();
//   }
//   throw new Error("Impossible d'acceder au serveur. Verifiez votre url");
// }

// fetchUser().then(res => console.log(res))
