function lifeInWeeks(age) {

    /************Don't change the code above************/
    var age = prompt("type your age");
    var ageLeft = 90 - age;
    var ageLeftInMonths = (ageLeft * 12);
    var ageLeftInWeeks = (ageLeft * 52);
    var ageLeftInDays = (ageLeft * 365);

    console.log("Your age left in months until you are 90 is " + ageLeftInMonths + " months");
    console.log("Your age left in weeks until you are 90 is " + ageLeftInWeeks + " weeks");
    console.log("Your age left in days until you are 90 is " + ageLeftInDays + " days");
    /*************Don't change the code below**********/
}

lifeInWeeks()
