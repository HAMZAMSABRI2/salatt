const url = "https://dailyprayer.abdulrcs.repl.co/api/morocco";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const cityElement = document.getElementById('city');
    const dateElement = document.getElementById('date');
    const prayerTimingsElement = document.getElementById('prayer-timings');

    cityElement.textContent = "City: " + data["city"];
    dateElement.textContent = "Date: " + data["date"];

    for (const prayer in data["today"]) {
      const prayerTiming = document.createElement('p');
     // prayerTiming.textContent = prayer + ": " + data["today"][prayer];
      prayerTimingsElement.appendChild(prayerTiming);
    }
  })
  .catch(error => {
    console.error(error.message);
  });