const fs = require("fs");

// 1- to add 7 persons with ids from 1-7
let persons = [];
const fnames = ["Ahmed", "Mohamed", "Hana", "Nada", "Mostafa", "Rana", "Omar"];
const lnames = ["Mohamed", "Riyad", "Rashad", "Ahmed", "Emad", "Mostafa", "Omar"];
const ages = ["30", "40", "20", "35", "45", "50", "70"];
const cities = ["Cairo", "Alex", "Banha", "Minea", "Monofya", "Giza", "Qalyubia"];
for (let i = 1; i <= 7; i++) {
  const item = {
    id: i,
    fname: fnames[i - 1],
    lname: lnames[i - 1],
    age: ages[i - 1],
    city: cities[i - 1],
  };
  persons.push(item);
}

fs.writeFileSync("persons.json", JSON.stringify(persons));

// 2- to delete id 4 - 6
const idsToDelete = [4, 5, 6];

const personsAfterDelete = persons.filter((person) => !idsToDelete.includes(person.id));

fs.writeFileSync("personsAfterDelete.json", JSON.stringify(personsAfterDelete));

const allPersons = fs.readFileSync("persons.json");

// 3- to list fname & lname & city for all .
// 4- to read all data for only the 5th person .

JSON.parse(allPersons).forEach(({ id, fname, lname, city, age }) => {
  id === 5 ? console.log({ id, fname, lname, city, age }) : console.log({ fname, lname, city });
});
