let person = {
  name: "John Doe",
  age: 30,
  isStudent: false,
  address: {
    city: "New York",
    country: "USA",
  },
  info: function () {
    console.log(this.name, "-", this.age);
  },
};

person.info();
console.log(person.address.city);

person.age = 33;
person["age"] = 24;
console.log(person.age);

person.gender = "male";

delete person.address;
console.log(person.address);

const adList = [
  { title: "Ad 1", description: "This is the first ad." },
  { title: "Ad 2", description: "This is the second ad." },
  { title: "Ad 3", description: "This is the third ad." },
];

console.log(adList[1].description);
