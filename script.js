/* Calendar app
create divisions by loop-creating objects including class (for css, day of week[generated by index], ), location (array index), 7 columns by 5 rows, 
*/

/*Brainstorm code*/
/*function dayGen() {
for (let i = 0; i < 35; i++) {
    let dayNum = 0;
    dayNum += i;
    console.log(dayNum);
    const calArray = document.write("<div id=day"${+ dayNum}"class=\"Cal_Box\"></div>"); 
} 
    return calArray;
};*/

const days = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,
    6: 0
};


function setCal () {
let gM = getMonth();
let gFY = getFullYear();
let calSet = gFY +"-"+ gM + 1 + "01";
console.log(calSet);
let startDay = getDay(calSet);
let conDay =  days.startDay;
console.log(conDay);
return conDay;

};;