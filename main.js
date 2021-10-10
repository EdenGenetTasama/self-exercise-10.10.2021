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
}

const professorOne= new Teacher("Eden", "Tasama", 30 , 35 , "0527303780");
const professorTwo = new Teacher("Daniel", "Tal" , 100 , 40 , "054485969");
const professorThree = new Teacher("Oshra" , "tasama" , 50 , 20 , "05263647586");


//!4.	צרו במחלקה פונקציה שמדפיסה את המידע של האובייקט בצורה יפה ללוג.

professorOne.printToLogInfo();
professorTwo.printToLogInfo();
professorThree.printToLogInfo();
