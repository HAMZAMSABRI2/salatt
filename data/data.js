
const url = "https://dailyprayer.abdulrcs.repl.co/api/FRENCH";
const salat = document.getElementsByClassName('salat');
const hour = document.getElementsByClassName('hour');
const city = document.getElementsByClassName('city');
const date = document.getElementsByClassName('date');

const compareTimes = (time1, time2) => {
  const [hour1, minute1] = time1.split(':');
  const [hour2, minute2] = time2.split(':');
  

  if (hour1 !== hour2) {
    return hour1 - hour2;
  }
  
 
  return minute1 - minute2;
};

fetch(url)
  .then(response => response.json())
  .then(data => {
/*    console.log(data["city"]);
console.log("value",data["today"])
*/    
   console.log(data["date"]);
    for (let i = 0; i < salat.length; i++) {
      
      const sortedTimes = Object.values(data["today"]).sort(compareTimes)
      console.log(sortedTimes)
      salat[i].innerHTML = Object.keys(data["today"]).find(key => data["today"][key] === sortedTimes[i]);
      hour[i].innerHTML = sortedTimes[i];
      
      city[0].innerHTML = (data["city"]);

      date[0].innerHTML = (data["date"]);
      
      
    }
  })
  .catch(error => {
    console.error(error.message);
  });