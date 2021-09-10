"use strict";

const copyDog = () => {
    let puppy = {
        name: "Squiggy",
        color: "orange",
        age: 5,
        chipId: "ZA123456",
    };
    console.log('before puppy age: ' + puppy.age);
    let doggy = puppy;
    doggy.age = 6;
    console.log('after doggy changed to 6, puppy age is: ' + puppy.age);
}

const cloneDeepDog = () => {
    let puppy = {
        name: "butch",
        color: "buff",
        age: 1,
        chipId: "ZA123457",
    };
    console.log('before puppy age: ' + puppy.age);
    let doggy = _.cloneDeep(puppy);
    doggy.age = 6;
    console.log('after doggy age was changed to 6, puppy age is still: ' + puppy.age);
}
