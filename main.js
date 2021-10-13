//! תרגילי מחלקות :

//!1.	ופונקציית בנאי צרו מחלקה של מרצה, עם שדות של שם פרטי, שם משפחה, שכר שעתי, שעות עבודה בשבוע וטלפון.
//!3.	צרו 3 אובייקטים.

class Teacher {
  name;
  lastName;
  hourPay;
  hoursOfWorkWeekly;
  phoneNumber;
  constructor(name, lastName, hourPay, hoursOfWorkWeekly, phoneNumber) {
    this.name = name;
    this.lastName = lastName;
    this.hourPay = hourPay;
    this.hoursOfWorkWeekly = hoursOfWorkWeekly;
    this.phoneNumber = phoneNumber;
  }
  printToLogInfo = function () {
    console.log(
      this.name,
      this.lastName,
      this.hourPay,
      this.hoursOfWorkWeekly,
      this.phoneNumber
    );
  };
  weeklyPayment = function () {
    return this.hoursOfWorkWeekly;
  };
  static numberOfTeachers(numberOFProfessors) {
    return numberOFProfessors;
  }
}

const professorOne = new Teacher("Eden", "Tasama", 30, 35, "0527303780");
const professorTwo = new Teacher("Daniel", "Tal", 100, 40, "054485969");
const professorThree = new Teacher("Oshra", "tasama", 50, 20, "05263647586");

//!4.	צרו במחלקה פונקציה שמדפיסה את המידע של האובייקט בצורה יפה ללוג.

// professorOne.printToLogInfo();
// professorTwo.printToLogInfo();
// professorThree.printToLogInfo();

//!6.	אתגר: צרו פונקציה סטטית שמחזירה את מספר המרצים שנוצרו.

// console.log(professorOne.numberOfTeachers(5));;

//!7.	צרו טופס של מרצה, עם התייחסות לשדות במחלקה מרצה.

//!האובייקט יודפס ללוג.
//!האובייקט יודפס למסך.
//!	הציגו טבלה עם הנתונים.

let arrayOfObjectProfessors = [];

buttonId.onclick = () => {
  let professorUser = new Teacher(
    firstNameID.value,
    lastNameID.value,
    Number(hourPayID.value),
    Number(hoursOfWorkWeeklyID.value),
    Number(phoneNumberID.value)
  );
  console.log(professorUser);
  arrayOfObjectProfessors.push(professorUser);
  divOfShowInfo.innerHTML += `<table><th>name</th>  <th>last Name</th>  <th>hour Pay</th>  <th>Hours for week</th>  <th>PhoneNumber</th> 
   <tr><td>${firstNameID.value}</td>  <td>${
    lastNameID.value
  }</td>   <td>${Number(hourPayID.value)}</td>   <td>${Number(
    hoursOfWorkWeeklyID.value
  )}</td>  <td>${Number(phoneNumberID.value)}</td></tr>
    </table>`;
};

//!**************************************************************************************************

//! תרגילי לולאות:

//!1.צרו פונקציה עם מנגנון של לולאה שרצה על אובייקט של בניין,עם שדות : גובה, רוחב, מספר קומות ומספר דירות.
//!המנגנון מדפיס את המידע בצורה יפה ללוג, כלומר,מפתח: ערך.'

let object = {
  height: 1.5,
  width: 2.0,
  floorNum: 5,
  apartmentNum: 20,
};

function runOverObject(object) {
  for (const key in object) {
    console.log(`${key} : ${object[key]}`);
  }
}

// runOverObject(object);

//!2.	צרו פונקציה שמקבלת מערך של אובייקטים ומדפיסה את המידע בצורה יפה ללוג, יש לבדוק עם מערך בניינים מהסעיף הקודם.
//!בצעו פעמיים.

let arrayOfObjectBuilding = [
  { width: 2.0, height: 1.5, floorNum: 2, apartmentNum: 20 },
  { width: 5.5, height: 4.4, floorNum: 6, apartmentNum: 10 },
];

// function PrintingArrayOfObjects(array) {
//   array.forEach((element) => {
//     for (const key in element) {
//       console.log(`${key} : ${element[key]}`);
//     }
//   });
// }

// PrintingArrayOfObjects(arrayOfObjectBuilding);

// function PrintingArrayOfObjectsTwo(array) {
//   for (const item of array) {
//     for (const key in item) {
//       console.log(`${key} : ${item[key]}`);
//     }
//   }
// }

// PrintingArrayOfObjectsTwo(arrayOfObjectBuilding);

//!3.	צרו פונקציה שמקבלת מערך של בניינים ומחזירה מערך חדש, שכולל רק את הבניינים שמספר הקומות בהם גדול מ5.

// function PrintingArrayOfObjects(array) {
//   array.forEach((element) => {
//     for (const key in element) {
//       if (element["floorNum"] > 5) {
//         console.log(`${key} : ${element[key]}`);
//       }
//     }
//   });
// console.log("All floors is under 5 ");
// }

//   PrintingArrayOfObjects(arrayOfObjectBuilding);

// function PrintingArrayOfObjectsTwo(array) {
//   for (const item of array) {
//     for (const key in item) {
//       if (item["floorNum"] > 5) {
//         console.log(`${key} : ${item[key]}`);
//       }
//     }
//   }
// }

//   PrintingArrayOfObjectsTwo(arrayOfObjectBuilding)

//!**************************************************************************************************
//! JS question
//!1.	צרו פונקציה שמקבלת מספרים מהמשתמש, עד שהמשתמש מכניס 0, הדפיסו למסך את המספר הגדול ביותר ואת המספר הקטן ביותר.

function stopAtZero() {
  let userNums = [];
  let getNumber = Number(prompt("Enter Number:"));
  while (getNumber > 0) {
    userNums.push(getNumber);
    getNumber = Number(prompt("Enter Number:"));
    userNums.sort((a, b) => {
      return a - b;
    });
  }
  numberOne.innerHTML += `<p>max number:${userNums[userNums.length - 1]}</p>`;
  numberOne.innerHTML += `<p>min number:${userNums[0]}</p>`;
}

// stopAtZero();

// 2.	צרו פונקציה שמקבלת 10 מספרים מהמשתמש,
//  המספרים נכנסים למערך שמודפס למסך,
//   הפונקציה מחזירה בסוף מערך של מספרים זוגיים בלבד.
// let arrayOfNumbersTwo=[];
// let zogiNumber = [];

// function getTenNumbers(userNumber) {
//     for (let i = 0; i <10; i++) {
//         userNumber= Number(prompt("Enter Number:"));
//         // arrayOfNumbersTwo.push(userNumber);
//         if(userNumber % 2 == 0){
//             zogiNumber.push(userNumber);

//         }
//         else{
//             arrayOfNumbersTwo.push(userNum11ber)
//         }
//     }
//     console.log(arrayOfNumbersTwo);
//     console.log(zogiNumber);

// }

// getTenNumbers();

//! 4.	צרו פונקציה שמקבלת מהמשתמש שם פרטי, הפונקציה מקבלת מבחוץ מערך של אותיות
//!באותיות באנגלית, ובודקת באיזה אות מתחיל השם של המשתמש, במידה והשם מתחיל ב
//!A הדפיסו "NICE"   ובמידה השם מתחיל ב Z הדפיסו "GOOD".

let arrayOfLetter = ["A", "B", "Z", "M", "C"];

function checkLetters(name) {
  arrayOfLetter.forEach((element) => {
    let firstLetter = name[0];
    if (firstLetter == "A") {
      console.log("NICE");
    }
    if (firstLetter == "Z") {
      console.log("GOOD");
    }
  });
}
// checkLetters(prompt("Enter name:"));

//************************************************************************************** */
// 3.	צרו פונקציה שמקבלת מספר מהמשתמש, הפונקציה יוצרת מערך של 100 מספרים רנדומליים
//  ובודקת האם המספר קיים במערך, 
//  במידה וכן יש להדפיס למסך הודעת הצלחה והודעת כישלון במידה ולא.

let arrayOfRandomNumbers= [];
let remdonNumber = Math.floor(Math.random() * 10);
console.log(remdonNumber);



// function isNumberExiest(rendonNumber) {
//   arrayOfRandomNumbers.push();
//   for (let i = 0; i < 100; i++) {
//     if (condition) {
       
//     }
    
//   }
// }

//!**************************************************************************************************

//!כתבו פונקציה שבתוכה נמצאת  לולאה שמבצעת עד 100 איטרציות, תוך כדי
//!שהיא מדפיסה "fizz" במכפלה של 3, "buzz" במכפלות של 5, ו-"fizzbuzz" במכפלות של 3
//!ו-5.

// function fizBuzzGame () {
//     for (let i = 0; i < 100; i++){
//     if (i%3 == 0 && i%5== 0){
//         console.log("fiz Buzz");
//     }
//     else if (i%5 == 0){
//         console.log("buzz");
//     }
//     else if (i%3 == 0){
//         console.log("fizz");
//     }
//     else {
//         console.log("none");
//     }
//     }

//     }
//     fizBuzzGame();

//!**************************************************************************************************
// משימת לוטו

// •	משתמש צריך לנחש 10 מספרים .
// let enterName = prompt("Please enter your name:");
let counterGuesses = 0;
let arrayOfguesses = [];
let counterGuessesRendom = 0;
let arrayOfRandomnNum = [];

// function lotoGame(gessesOfUser) {
//   while (counter < 5) {
//     let guessOfUser = Number(prompt("please enter 10 number to see if you won:"));
//     arrayOfguesses.push(guessOfUser);
//     // let rendomNumber = Math.floor(Math.random() * 50);
//     // arrayOfRandomnNum.push(rendomNumber);
//     // console.log("מערך אקראי"+arrayOfRandomnNum);
//     // console.log("מערך של המשתמש "+arrayOfguesses);
//     // while (arrayOfRandomnNum.length < 10) {
//     //   for (let i = 0; i < arrayOfRandomnNum.length; i++) {
//     //     //   if()
//     //     // }
//     //     // console.log(guessOfUser,counter);
//         counter++;
//     //   }
//     }
//   }

// lotoGame(Number(prompt("please enter 10 number to see if you won:"))):

while (counterGuesses < 10) {
  // let guessOfUser = Number(prompt("please enter 10 number to see if you won:"));
  // arrayOfguesses.push(guessOfUser);
  // counterGuesses++;
}


// console.log("user number" + arrayOfguesses);

while (counterGuessesRendom < 50) {
  let rendomNumber = Math.floor(Math.random() * 50);
  arrayOfRandomnNum.push(rendomNumber);
  counterGuessesRendom++;
}
// console.log("rendom number" + arrayOfRandomnNum);

for (let i = 0; i < arrayOfRandomnNum.length; i++) {
  for (let j = 0 ; j < arrayOfguesses.length; j++) {
    if (arrayOfRandomnNum[i] == arrayOfguesses[j]) {
      let howManyGuesses = [i].length;
        // console.log(howManyGuesses);
        // console.log(` i: ${arrayOfRandomnNum[i]} . j:${arrayOfguesses[j]}`);
        // console.log(מספר ניחושים נכון : );
      }
  }
}
