const fs = require("fs");

// 1) create object person ( fname = ahmed , lname = hossam , age = 20 , city = alex )
const person = {
  fname: "ahmed",
  lname: "hossam",
  age: 20,
  city: "alex",
};

// 2) change obj to Json
const jsonPerson = JSON.stringify(person);

// 3) store in file
fs.writeFileSync("person.json", jsonPerson);

// 4) read file (json)
const dataFromFile = fs.readFileSync("person.json");

// 5) Convert to obj
const objectData = JSON.parse(dataFromFile);

// 6) Update data to ( adel ahmed , 40 , cairo)
objectData.fname = "adel";
objectData.lname = "ahmed";
objectData.age = "40";
objectData.city = "cairo";

// 7) convert obj to Json
const updatedJson = JSON.stringify(objectData);

// 8) store in file (writeFileSync)
fs.writeFileSync("person.json", updatedJson);
