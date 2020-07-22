//Feet to Mile , problem-solve No. 1 :



function feetToMile(feet) {

    var mile = feet / 5280;
    return mile;

}
var allMan = [156, 288, 300];

var firstUser = feetToMile(allMan[0]);
console.log(firstUser);

var secondUser = feetToMile(288);
console.log(secondUser);

var thirdUser = feetToMile(52800);
console.log(thirdUser);



// Wood Calculator , problem-solve No. 2 :


function woodCaculator(Chair, Table, Bed) {
    if (woodCaculator < 0) {
        console.log("Error Message");
    }
    else {
        var WoodOfChair = Chair * 1;
        var woodOfTabble = Table * 3;
        var WoodOfBed = Bed * 5;
        var Output = WoodOfChair + woodOfTabble + WoodOfBed;
    }
    return Output;
}
var Result = woodCaculator(5, 3, 6);
console.log(Result);



// Brick Calculator , problem-solve No. 3 :

function brickcalculator(TotalSize) {
    var firstToTen = 15;
    var ElavanToTwenty = 12;
    var TwentyUp = 10;
    if (TotalSize <= 0) {
        console.log("Error Message");
    }
    else {
        if (TotalSize <= 10) {
            firstToTen = TotalSize * firstToTen;
            Output = firstToTen * 1000;
        }
        else if (TotalSize <= 20) {
            firstToTen = firstToTen * 10;
            ElavanToTwenty = TotalSize - 10;
            TotalSize = firstToTen + (ElavanToTwenty * 12);
            Output = TotalSize * 1000;
        }
        else {
            firstToTen = firstToTen * 10;
            ElavanToTwenty = ElavanToTwenty * 10;
            TwentyUp = TotalSize - 20;
            TotalSize = firstToTen + ElavanToTwenty + (TwentyUp * 10);
            Output = TotalSize * 1000;
        }
    }
    return Output;
}
var result = brickcalculator(25);
console.log("Result is " + result);



// Tiny Friend , problem-solve No. 4 :


function tinyFriend(friend) {
    var min = friend[0];
    for (var i = 0; i < friend.length; i++) {
        var element = friend[i];
        if (element.length < min.length) {
            min = element;
        }
    }
    return min;

}
var Friend = ["Ekaram", "Fayez", "Prithom", "Tonmoy"];
var tinyFriend = tinyFriend(Friend);
console.log(tinyFriend);

