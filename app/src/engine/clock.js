// Months of the year and their respective dates
const months = [ { index: 0, monthName:'January', days: 31 },{ index: 1, monthName:'February', days : 28 },{ index: 2, monthName:"March", days : 31 },{ index: 3, monthName:"April", days : 30 },{ index: 4, monthName: "May", days : 31 },{ index: 5, monthName:"June", days : 30 },{ index: 6, monthName:'July', days : 31 },{ index: 7, monthName:'August', days : 31 },{ index: 8,monthName:'September', days : 30 },{ index: 9, monthName:'October', days : 31 },{ index: 10, monthName:'November', days : 30 }, { index: 11, monthName:'December', days : 31 }]
    
/**
 *  Sleep function used for the clock mainly
 * */ 
function sleep(ms) {
    return new Promise( (resolve) => {
      setTimeout(resolve, ms);
    });
}


/**
 * The clock tells which month/day is running. \
 * It receives a object containing the index (represents the current month) and current day
 * @param {{index:Number,monthName:String,day:Number,year:Number}} last
 * */ 
async function clock(current) {
    // First check if there has been a current, then returns the starting clock
    if (current === undefined) {
        return {index:0, monthName:months[0].monthName, day:0, year:1300 }
    }

    await sleep(15000);
    const newCurrent = {index:0, monthName:'', day:0, year: 0} // new current obj
    // const currentMonth = last.index;
    // Verify each month to find current by using the index of the months
    for (const month of months) {
        // match the current month by index and check if its not at the limit, else turn to a new month
        if (current.monthName === month.monthName) {
            newCurrent.day = current.day + 1; // reset
            newCurrent.index = current.index;
            newCurrent.monthName = current.monthName;
            newCurrent.year = current.year;
            if (current.day >= month.days) {
                if (current.monthName === months[11].monthName) { // In case its december, rerun back index/month/day and add a year
                    newCurrent.day = 0;
                    newCurrent.index = months[0].index;
                    newCurrent.monthName = months[0].monthName;
                    newCurrent.year = current.year + 1;
                } else {
                    newCurrent.day = 0; // reset
                    newCurrent.index = current.index + 1;
                    newCurrent.monthName = months[newCurrent.index].monthName;
                    newCurrent.year = current.year;
                }
            }
            break;
        }
    }
    return newCurrent;
}

export default clock;