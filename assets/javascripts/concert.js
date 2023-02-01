var url =
  "https://graph.facebook.com/v15.0/The.SonarMen/events?limit=1000&access_token=EAAMzwwBYdfwBAHobEyMEiDMIzZB31yNZC9JudfqDpOFl7WtKuSAePiBCFi97ZCQiwKmm2SLZBRzEpeQMCeOLedFablwoYjcURUGmm06WsPjdrZAg22cbsMNDKcmnZAtuOYZCNTccJpnN9COuvC1MkPqBGBa6YUnl11l8ZAHw4N2FlpytyFrmNikz";

var events = [];
var str = '<div class="col-md-12" id="listEvents">';

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    i = 0;
    for (final of data.data) {
      events.push([
        final.name,
        typeof final.place !== "undefined" &&
        typeof final.place !== "undefined" &&
        typeof final.place.location !== "undefined" &&
        typeof final.place.location.city !== "undefined" &&
        typeof final.place.location.zip !== "undefined"
          ? final.place.location.city + " - " + final.place.location.zip
          : "",
        final.start_time,
        "https://www.facebook.com/events/" + final.id + "/",
      ]);
    }

    var pastEvents = [];
    var futureEvents = [];

    for (newEvent in events) {
      isPassed = false;
      events[newEvent][2] = new Date(events[newEvent][2]);
      if (events[newEvent][2] < new Date()) {
        isPassed = true;
      }
      events[newEvent][2] = events[newEvent][2].toLocaleDateString("fr-FR", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      if (isPassed) {
        pastEvents.push(events[newEvent]);
      } else {
        futureEvents.push(events[newEvent]);
      }
    }
    futureEvents.reverse();
    futureEvents.forEach(function (event) {
      str += `<div class="schedrow wow animated fadeIn" style="display: flex;justify-content: space-evenly;">
        <div class="event">
          <span class="bold"><i class="fa fa-microphone"></i>${event[0]}</span>
        </div>
        <div class="location">
          <span class="bold"><i class="fa fa-map-marker"></i>${event[1]}
          </span>
          / ${event[2]}
        </div>
        <div class="button-wrap">
          <a href="${event[3]}" target="_blank" class="def-button">Plus d'informations</a>
            </div>
        </div>`;
    });
    str += "</div>";
    document.getElementById("listEvents").innerHTML = str;
    str = '<div class="col-md-12" id="listEvents">';
    pastEvents.forEach(function (event) {
      str += `<div class="schedrow wow animated fadeIn" style="display: flex;justify-content: space-evenly;">
    <div class="event">
      <span class="bold"><i class="fa fa-microphone"></i>${event[0]}</span>
    </div>
    <div class="location">
      <span class="bold"><i class="fa fa-map-marker"></i>${event[1]}
      </span>
      / ${event[2]}
    </div>
    <div class="button-wrap">
      <a href="${event[3]}" target="_blank" class="def-button soldout">Déja passé</a>
        </div>
    </div>`;
    });
    str += "</div>";
    document.getElementById("listPastEvents").innerHTML = str;
  })
  .catch(function (err) {
    console.log("Fetch Error :-S", err);
  });

// var passedEvents = [
// [
//   "The SonarMen @Le Piège",
//   "Uzès - 30",
//   "VEN., 18 MARS 2022 À 20:30",
//   "https://www.facebook.com/events/672000337252322/",
// ],
// [
//   "The SonarMen St Patrick@Arène des bières",
//   "Marguerittes - 30",
//   "DIM., 17 MARS, 2022 À 20:00",
//   "https://www.facebook.com/events/353015296643933/",
// ],
// [
//   "The SonarMen @Théâtre de Nathalie",
//   "Abais - 30",
//   "VEN., 4 MARS, 2022 À 20:30",
//   "https://www.facebook.com/events/1070714730447928/",
// ],
// [
//   "The SonarMen @Gazette Café",
//   "Montpellier - 34",
//   "SAM., 12 FÉVR., 2022 À 20:00",
//   "https://www.facebook.com/events/409456157252583/",
// ],
// [
//   "The SonarMen @La Voûte",
//   "Avèze - 30",
//   "SAM., 11 DÉC. 2021",
//   "https://www.facebook.com/events/409456157252583/",
// ],
// [
//   "The SonarMen @ Seven Hills",
//   "Nîmes -30",
//   "VEN., 10 DÉC. 2021",
//   "https://www.facebook.com/events/1070714730447928/",
// ],
// [
//   `The SonarMen @O'Varieties`,
//   "St Rémy de Provence -13",
//   "SAM., 4 DÉC. 2021",
//   "https://www.facebook.com/events/353015296643933/",
// ],
// [
//   `The SonarMen @Bistrot de la scène`,
//   "Dijon - 21",
//   "SAM., 2 OCT. 2021",
//   "https://www.facebook.com/events/484441465909338/",
// ],
// [
//   `The SonarMen @L'AbreuVoir`,
//   "Séauve/Semène – 43",
//   "VEN., 1 OCT. 2021",
//   "https://www.facebook.com/events/470152418169181/",
// ],
// [
//   "The SonarMen // Kruzberg // First Date @Rock N Eat",
//   "Lyon - 69",
//   "JEU., 30 SEPT. 2021",
//   "https://www.facebook.com/events/616446932914463/",
// ],
// [
//   "The SonarMen (Bluegrass Power Rock • Tribute Classic Hits)",
//   "Montpellier - 34",
//   "MER., 29 SEPT. 2021",
//   "https://www.facebook.com/events/458620122404296/",
// ],
// [
//   `SonarMen @Guingette du Gardon`,
//   "Montfrin - 30",
//   "SAM., 25 SEPT. 2021",
//   "https://www.facebook.com/events/1067408430776119/",
// ],
// ];
// var str = '<div class="col-md-12" id="listEvents">';

// passedEvents.forEach(function (event) {
//   str += `<div class="schedrow wow animated fadeIn" style="display: flex;justify-content: space-evenly;">
//     <div class="event">
//       <span class="bold"><i class="fa fa-microphone"></i>${event[0]}</span>
//     </div>
//     <div class="location">
//       <span class="bold"><i class="fa fa-map-marker"></i>${event[1]}
//       </span>
//       / ${event[2]}
//     </div>
//     <div class="button-wrap">
//       <a href="${event[3]}" target="_blank" class="def-button soldout">Déja passé</a>
//         </div>
//     </div>`;
// });
// str += "</div>";
// document.getElementById("listPastEvents").innerHTML = str;
