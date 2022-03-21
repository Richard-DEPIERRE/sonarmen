var events = [
  [`The SonarMen (en duo) @O'Varieties`, 'St Rémy de Provence - 13', 'SAM., 2 AVR., 2022 À 20:45', 'https://www.facebook.com/events/318366940313116/'],
  [`The O'liver Pub Lattes`, 'Lattes - 34', 'SAM., 9 AVR., 2022 À 21:30', 'https://www.facebook.com/events/991133435109085/'],
  [`The SonarMen @Paddy Mullin's`, 'Arles - 13', 'SAM., 16 AVR., 2022 À 22:00', 'https://www.facebook.com/events/484441465909338/'],
  ['The SonarMen @Song à Sète', 'Sète - 34', 'SAM., 28 MAI, 2022 À 21:00', 'https://www.facebook.com/events/470152418169181/'],
  ['The SonarMen @Le Vigan (évènement privé motoclub)', 'Le Vigan - 30', 'SAM., 11 JUIN, 2022 À 20:30', 'https://www.facebook.com/events/616446932914463/'],
  ['The SonarMen @Fête de la musique', 'Combaillaux - 34', 'SAM., 25 JUIN, 2022 À 20:30', 'https://www.facebook.com/events/458620122404296/'],
  [`The SonarMen @Vallon Pont d'Arc`, 'Les Mazes - 07', 'MAR., 12 JUIL., 2022 À 20:30', 'https://www.facebook.com/events/1067408430776119/'],
  ['The SonarMen @St André de Roquepertuis', 'Saint-André-de-Roquepertuis - 30', 'VEN., 22 JUIL., 2022 À 20:30', 'https://www.facebook.com/events/290656226272884/'],
  [`The SonarMen @Vallon Pont d'Arc`, 'Les Mazes - 07', 'MAR., 16 AOÛT, 2022 À 20:30', 'https://www.facebook.com/events/299601442212350/'],
]
var str = '<div class="col-md-12" id="listEvents">'

events.forEach(function (event) {
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
    </div>`
});
str += '</div>'
console.log(str);
document.getElementById("listEvents").innerHTML = str;

var passedEvents = [
  ['The SonarMen @Le Piège', 'Uzès - 30', 'VEN., 18 MARS 2022 À 20:30', 'https://www.facebook.com/events/672000337252322/'],
  ['The SonarMen St Patrick@Arène des bières', 'Marguerittes - 30', 'DIM., 17 MARS, 2022 À 20:00', 'https://www.facebook.com/events/353015296643933/'],
  ['The SonarMen @Théâtre de Nathalie', 'Abais - 30', 'VEN., 4 MARS, 2022 À 20:30', 'https://www.facebook.com/events/1070714730447928/'],
  ['The SonarMen @Gazette Café', 'Montpellier - 34', 'SAM., 12 FÉVR., 2022 À 20:00', 'https://www.facebook.com/events/409456157252583/'],
  ['The SonarMen @La Voûte', 'Avèze - 30', 'SAM., 11 DÉC. 2021', 'https://www.facebook.com/events/409456157252583/'],
  ['The SonarMen @ Seven Hills', 'Nîmes -30', 'VEN., 10 DÉC. 2021', 'https://www.facebook.com/events/1070714730447928/'],
  [`The SonarMen @O'Varieties`, 'St Rémy de Provence -13', 'SAM., 4 DÉC. 2021', 'https://www.facebook.com/events/353015296643933/'],
  [`The SonarMen @Bistrot de la scène`, 'Dijon - 21', 'SAM., 2 OCT. 2021', 'https://www.facebook.com/events/484441465909338/'],
  [`The SonarMen @L'AbreuVoir`, 'Séauve/Semène – 43', 'VEN., 1 OCT. 2021', 'https://www.facebook.com/events/470152418169181/'],
  ['The SonarMen // Kruzberg // First Date @Rock N Eat', 'Lyon - 69', 'JEU., 30 SEPT. 2021', 'https://www.facebook.com/events/616446932914463/'],
  ['The SonarMen (Bluegrass Power Rock • Tribute Classic Hits)', 'Montpellier - 34', 'MER., 29 SEPT. 2021', 'https://www.facebook.com/events/458620122404296/'],
  [`SonarMen @Guingette du Gardon`, 'Montfrin - 30', 'SAM., 25 SEPT. 2021', 'https://www.facebook.com/events/1067408430776119/'],
]
var str = '<div class="col-md-12" id="listEvents">'

passedEvents.forEach(function (event) {
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
    </div>`
});
str += '</div>'
console.log(str);
document.getElementById("listPastEvents").innerHTML = str;