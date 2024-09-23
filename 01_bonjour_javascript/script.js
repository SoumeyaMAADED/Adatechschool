function askName() {
  let firstname = prompt("Quel est votre Prénom ?");
  let text = "👋 Bonjour " + firstname;

  document.body.innerHTML += "<h2>" + text + "</h2>";
}

/* Autre méthode :

let h2 = document.querySelector("h2")
h2.textContent = texte;
// pour forcer le texte en H2
Bien mettre une balise H2 en HTML */

function askBirthYear() {
  let birthYear = prompt("Quelle est ton année de naissance ?");
  let age = 2024 - birthYear;

  return age;
}
askName();
let my_age = askBirthYear();

function askBirthMonth() {
  //let birthmonth = Number(prompt("Quel est ton mois de //naissance ?"))
  let birthmonth = prompt("Quel est ton mois de naissance ?");

  console.log(birthmonth);

  return birthmonth;
}

let my_month = askBirthMonth();

let date = new Date();
console.log(date);
let currentMonth = date.getMonth();
console.log(currentMonth);
let months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "nomvembre",
  "décembre",
];
let my_month_number = 0;

for (let i = 0; i < months.length; i++) {
  if (my_month === months[i]) {
    my_month_number = i;
  }
}
console.log(my_month_number);

if (my_month_number > currentMonth) {
  my_age = my_age - 1;
}

document.body.innerHTML += "<h3>" + "Vous avez " + my_age + " ans" + "</h3>";

/*function calculAge() {

for (let i = 0; i < months.length; i++) {
    if (moisUtilisateur === months[i]) {
        moisUtilisateur = i + 1;
    }
}
if (moisUtilisateur > moisActuel) {
    ageUtilisateur = ageUtilisateur - 1;
}
}*/
console.log();
