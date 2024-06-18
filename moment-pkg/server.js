let moment = require('moment');

// moment.locale('ev');
// console.log(moment.locale());

// console.log(moment().format('L'));       // 10/14/2023 date
// console.log(moment().format('LL'));        //October 14, 2023
// console.log(moment().format('LLL'));        //October 14, 2023 11:38 PM
// console.log(moment().format('LLLL'));        //Saturday, October 14, 2023 11:38 PM
// console.log(moment().format('LLLLL'));      //Saturday, October 14, 2023 11:39 PM10/14/2023

// // //Format Dates

// console.log(moment().format('MMMM DD YYYY, h:mm:ss a'));   //October 14 2023, 11:45:37 pm
// console.log(moment().format('dddd'));                       //Saturday
// console.log(moment().format("MMM Do  YY"));                 //Oct 14th  23
// console.log(moment().format('YYYY [escaped] YYYY'));             //2023 escaped 2023
// console.log(moment().format());                                 //2023-10-14T23:50:03+05:30


// // //Relative Time

// console.log(moment("20111031", "YYYYMMDD").fromNow());      // 12 years ago
// console.log(moment("20010620", "YYYYMMDD").fromNow());      // 22 years ago
// console.log(moment().startOf('day').fromNow());             // a day ago
// console.log(moment().endOf('day').fromNow());               // in 6 minutes
// console.log(moment().startOf('hour').fromNow());            //an hour ago


// // Calendar Time

// console.log(moment().subtract(10, 'days').calendar());      // 10/04/2023
// console.log(moment().subtract(6, 'days').calendar());       // Last Sunday at 11:56 PM
// console.log(moment().subtract(3, 'days').calendar());       // Last Wednesday at 11:56 PM
// console.log(moment().subtract(1, 'days').calendar());       // Yesterday at 11:56 PM
// console.log(moment().calendar());                           // Today at 11:56 PM
// console.log(moment().add(1, 'days').calendar());            // Tomorrow at 11:56 PM
// console.log(moment().add(3, 'days').calendar());            // Tuesday at 11:56 PM
// console.log(moment().add(10, 'days').calendar());           // 10/25/2023




// //Differnce between two dates

let PreviousDate = moment().subtract(15, 'days').calendar();
console.log({ PreviousDate });

let todaysDate = moment().format('L');
console.log({ todaysDate });


// let DifferenceIndate = getDateDiff('{todaysDate}', '{PreviousDate}', 'd');
// console.log({ DifferenceIndate });


// let res = todaysDate.diff(PreviousDate, 'days');
// console.log({ res });

//moment(). diff(Moment|String|Number|Date|Array, String, Boolean)

// console.log(`Difference is ${todaysDate.diff(differnceInDate)} days`);

// let result = todaysDate.diff(differnceInDate, 'days', true);
// console.log({ result });


// //add one day 

// let addDate = moment().add(1, 'days').calendar();           // 10/25/2023

// console.log(addDate);


// //Minus one day 
// let minusDay = moment().subtract(1, 'days').calendar();
// console.log({ minusDay });

