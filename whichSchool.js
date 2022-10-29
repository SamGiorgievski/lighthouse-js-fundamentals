var whichSchool = "";
var age = 11;

if (age<13) {
  whichSchool = "Elementary School";
} else if (age>=13 && age<=18) {
  whichSchool = "Secondary School";
} else {
  whichSchool = "Lighthouse Labs";
}

console.log("Because you are " + age + " years old, you should attend " + whichSchool + ".")

