//!1.	ופונקציית בנאי צרו מחלקה של מרצה, עם שדות של שם פרטי, שם משפחה, שכר שעתי, שעות עבודה בשבוע וטלפון.
//!3.	צרו 3 אובייקטים.


class Teacher{
    name; 
    lastName;
    hourPay;
    hoursOfWorkWeekly;
    phoneNumber;
    constructor (name , lastName, hourPay ,hoursOfWorkWeekly,phoneNumber ){
        this.name=name;
        this.lastName = lastName;
        this.hourPay=hourPay;
        this.hoursOfWorkWeekly=hoursOfWorkWeekly;
        this.phoneNumber=phoneNumber;
    }
    printToLogInfo = function() {
        console.log(this.name,this.lastName,this.hourPay,this.hoursOfWorkWeekly,this.phoneNumber);
    }
    weeklyPayment = function() {
        return this.hoursOfWorkWeekly;
    }
    static numberOfTeachers(numberOFProfessors){
        return numberOFProfessors;
    }
}

const professorOne= new Teacher("Eden", "Tasama", 30 , 35 , "0527303780");
const professorTwo = new Teacher("Daniel", "Tal" , 100 , 40 , "054485969");
const professorThree = new Teacher("Oshra" , "tasama" , 50 , 20 , "05263647586");



//!4.	צרו במחלקה פונקציה שמדפיסה את המידע של האובייקט בצורה יפה ללוג.

professorOne.printToLogInfo();
professorTwo.printToLogInfo();
professorThree.printToLogInfo();

//!6.	אתגר: צרו פונקציה סטטית שמחזירה את מספר המרצים שנוצרו.

// console.log(professorOne.numberOfTeachers(5));;

//!7.	צרו טופס של מרצה, עם התייחסות לשדות במחלקה מרצה.

//!האובייקט יודפס ללוג.
//!האובייקט יודפס למסך.
//!	הציגו טבלה עם הנתונים.

let arrayOfObjectProfessors=[];

buttonId.onclick=()=>{
    let professorUser = new Teacher(firstNameID.value ,lastNameID.value, Number(hourPayID.value),  Number(hoursOfWorkWeeklyID.value),  Number(phoneNumberID.value ));
    console.log(professorUser);
    arrayOfObjectProfessors.push(professorUser);
    divOfShowInfo.innerHTML += `<table><th>name</th>  <th>last Name</th>  <th>hour Pay</th>  <th>Hours for week</th>  <th>PhoneNumber</th> 
   <tr><td>${firstNameID.value}</td>  <td>${lastNameID.value}</td>   <td>${Number(hourPayID.value)}</td>   <td>${ Number(hoursOfWorkWeeklyID.value)}</td>  <td>${ Number(phoneNumberID.value )}</td></tr>
    </table>`
}

