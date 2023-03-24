/*
- write a function canAdmitToNightClub that takes a person object as an argument and returns true if they can be admitted and false if they cannot
- an unaccompanied minor (under the age of 18) may not be admitted
- any person who is visibly inebriated may not be admitted
- the person object should have the following fields
  - age (Number)
  - isAccompaniedByAdult (Boolean)
  - isVisiblyInebriated (Boolean)
*/


/*
function canAdmitToNightClub(person){
  return personOver18 = true;  // return false because function needs some code here.   
  //● returns true for a person over 18
}

test("returns true for a person over 18", () =>{
  const personOver18 = {
    age: 18,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personOver18)).toBe(true);
});



function canAdmitToNightClub(person){      //    Identifier 'canAdmitToNightClub' has already been declared.
  return false     //    ● returns true for a person under 18
};

test("returns true for a person under 18", () =>{
  let personOver18 = {
    age: 30,
    isVisiblyInebriated: false,
    isAccompaniedByAdult:false,
  };
    expect(canAdmitToNightClub(personOver18)).toBe(true);
});

*/

function canAdmitToNightClub(person){
  if(person.age >= 18){
    return true;
  }
  else{
    return false;
  }
}

test("returns true for a person over 18", () =>{
  let personOver18 = {
    age: 18,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personOver18)).toBe(true);
});

test("returns false for a person under 18", () =>{
  let personOver18 = {
    age: 17,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personOver18)).toBe(false);
});