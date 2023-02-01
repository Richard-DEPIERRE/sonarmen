var url =
  "https://graph.facebook.com/v15.0/The.SonarMen/events?limit=1000&access_token=EAAMzwwBYdfwBAFeb8Qf113lH1Oqynbt4ND2Wwj4hzeNAZAABMcchZAFfhd8zekYf6ZCpo56hL1qTDq3B5qVZAMZAIZAqPoZBUJyToY6sYGKGtZBbvnC88HEz6azvrthHT0x1QBibtbg5A8epIBtBHBLeITqAKQNBROxXZBZAFj82A74QmbB1ZCLX0wq";

var events = [];
var str = '<div class="col-md-12" id="listEvents">';
var futureEvents = [
  [
    "The SonarMen (en duo) @O'Varieties St Rémy de Provence (13)",
    "Saint-Rémy-de-Provence - 13210",
    "sam. 4 févr. 2023",
    "https://www.facebook.com/events/498867078808387/",
  ],
  [
    "The SonarMen St Patrick@Arène des bières (Marguerittes -30)",
    "Nîmes - 30320",
    "ven. 17 mars 2023",
    "https://www.facebook.com/events/635808964654936/",
  ],
  [
    "The SonarMen @O'liver Pub (Lattes -30)",
    "Lattes - 34970",
    "sam. 18 mars 2023",
    "https://www.facebook.com/events/683427849940847/",
  ],
  [
    "The SonarMen (en duo) @O'Flaherty's Nîmes (30)",
    "Nîmes - 30000",
    "sam. 25 mars 2023",
    "https://www.facebook.com/events/880081316470639/",
  ],
  [
    "The SonarMen (en duo) @O'Varieties St Rémy de Provence (13)",
    "Saint-Rémy-de-Provence - 13210",
    "sam. 22 avr. 2023",
    "https://www.facebook.com/events/1746484222401336/",
  ],
  [
    "The SonarMen Fête de la Zic @O'Flaherty's Nîmes (30)",
    "Nîmes - 30000",
    "mer. 21 juin 2023",
    "https://www.facebook.com/events/702881351292805/",
  ],
  [
    "The SonarMen @La Plage fleurie (Vallon-Pont-D'Arc -07)",
    "Vallon-Pont-d'Arc - 07150",
    "dim. 30 juil. 2023",
    "https://www.facebook.com/events/1796207900763755/",
  ],
  [
    "The SonarMen @St André de Roquepertuis (30)",
    "Saint-André-de-Roquepertuis - 30630",
    "ven. 11 août 2023",
    "https://www.facebook.com/events/1894060914262823/",
  ],
];
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

var passedEvents = [
  [
    "The SonarMen (en duo) @Paddy Mullin's (Arles-13)",
    "Arles - 13200",
    "jeu. 22 déc. 2022",
    "https://www.facebook.com/events/3174332349485261/",
  ],
  [
    "The SonarMen (en duo) @O'Flaherty's Nîmes (30)",
    "Nîmes - 30000",
    "sam. 10 déc. 2022",
    "https://www.facebook.com/events/2438959772927648/",
  ],
  [
    "The SonarMen @O'liver Pub (Lattes -30)",
    "Lattes - 34970",
    "sam. 26 nov. 2022",
    "https://www.facebook.com/events/3333060596963551/",
  ],
  [
    "The SonarMen (en duo) @O'Varieties St Rémy de Provence (13)",
    "Saint-Rémy-de-Provence - 13210",
    "sam. 8 oct. 2022",
    "https://www.facebook.com/events/1026521598050910/",
  ],
  [
    "The SonarMen @Oktoberfest V&B Givors (69)",
    "Givors - 69700",
    "ven. 30 sept. 2022",
    "https://www.facebook.com/events/455552126588490/",
  ],
  [
    "The SonarMen @O'Flaherty's Nîmes (30)",
    "Nîmes - 30000",
    "sam. 17 sept. 2022",
    "https://www.facebook.com/events/516350960491588/",
  ],
  [
    "The SonarMen @Gruissan (11)",
    "Gruissan - 11430",
    "jeu. 15 sept. 2022",
    "https://www.facebook.com/events/445097587657384/",
  ],
  [
    "The SonarMen @Métal Workers Bessèges (30)",
    "Bessèges - 30160",
    "sam. 3 sept. 2022",
    "https://www.facebook.com/events/3208690109378486/",
  ],
  [
    "The SonarMen @Sérignan (34)",
    "Sérignan - 34410",
    "mer. 31 août 2022",
    "https://www.facebook.com/events/2118899851624205/",
  ],
  [
    "The SonarMen (en duo) @Paddy Mullin's (Arles-13)",
    "Arles - 13200",
    "jeu. 11 août 2022",
    "https://www.facebook.com/events/949404352376015/",
  ],
  [
    "The SornarMen (en duo) @Food Truck Festival (Remoulins -30)",
    "Remoulins - 30210",
    "mar. 9 août 2022",
    "https://www.facebook.com/events/5208618592492507/",
  ],
  [
    "The SonarMen (en duo) @St Jean du Gard (30)",
    "Saint-Jean-du-Gard - 30270",
    "ven. 5 août 2022",
    "https://www.facebook.com/events/1023908578277913/",
  ],
  [
    "The SonarMen @Jeudis de Nîmes (30)",
    "",
    "jeu. 4 août 2022",
    "https://www.facebook.com/events/300766435597159/",
  ],
  [
    "The SonarMen @St André de Roquepertuis (30)",
    "Saint-André-de-Roquepertuis - 30630",
    "ven. 29 juil. 2022",
    "https://www.facebook.com/events/290656226272884/",
  ],
  [
    "The SonarMen @Azureva Grau du Roi (30)",
    "Le Grau-du-Roi - 30240",
    "ven. 8 juil. 2022",
    "https://www.facebook.com/events/1147540022699686/",
  ],
  [
    "The SonarMen @Mèze (Village Club Thalassa)",
    "",
    "mer. 6 juil. 2022",
    "https://www.facebook.com/events/593508378661333/",
  ],
  [
    "The SonarMen @Fête de la musique Combaillaux (34)",
    "Combaillaux - 34980",
    "sam. 25 juin 2022",
    "https://www.facebook.com/events/458620122404296/",
  ],
  [
    "The SonarMen @Sérignan (34) -Camping Bleu Marine",
    "Sérignan - 34410",
    "sam. 18 juin 2022",
    "https://www.facebook.com/events/526667039119546/",
  ],
  [
    "The SonarMen @Le Vigan (évènement privé motoclub)",
    "",
    "sam. 11 juin 2022",
    "https://www.facebook.com/events/616446932914463/",
  ],
  [
    "The SonarMen @True Love Workshop (Bernis -30)",
    "Bernis - 30620",
    "ven. 10 juin 2022",
    "https://www.facebook.com/events/1608745216160490/",
  ],
  [
    "The SonarMen @Song à Sète",
    "",
    "sam. 28 mai 2022",
    "https://www.facebook.com/events/470152418169181/",
  ],
  [
    "The SonarMen @La Transhumance (Istres -13)",
    "",
    "sam. 7 mai 2022",
    "https://www.facebook.com/events/397543075141342/",
  ],
  [
    "The SonarMen @Paddy Mullin's (Arles -13)",
    "Arles - 13200",
    "sam. 16 avr. 2022",
    "https://www.facebook.com/events/484441465909338/",
  ],
  [
    "The SonarMen @O'liver Pub (Lattes-34)",
    "Lattes - 34970",
    "sam. 9 avr. 2022",
    "https://www.facebook.com/events/991133435109085/",
  ],
  [
    "The SonarMen (en duo) @O'Varieties (St Rémy de Provence -13)",
    "Saint-Rémy-de-Provence - 13210",
    "sam. 2 avr. 2022",
    "https://www.facebook.com/events/318366940313116/",
  ],
  [
    "The SonarMen @Le Piège (Uzès -30)",
    "",
    "ven. 18 mars 2022",
    "https://www.facebook.com/events/672000337252322/",
  ],
  [
    "The SonarMen St Patrick@Arène des bières (Marguerittes -30)",
    "Nîmes - 30320",
    "jeu. 17 mars 2022",
    "https://www.facebook.com/events/353015296643933/",
  ],
  [
    "REPORTE ! The SonarMen @Théâtre de Nathalie (Aubais -30)",
    "Aubais - 30250",
    "ven. 4 mars 2022",
    "https://www.facebook.com/events/1070714730447928/",
  ],
  [
    "The SonarMen @Gazette Café (Montpellier -34)",
    "",
    "sam. 12 févr. 2022",
    "https://www.facebook.com/events/409456157252583/",
  ],
  [
    "The SonarMen @O'liver Pub (Lattes-34)",
    "Lattes - 34970",
    "sam. 5 févr. 2022",
    "https://www.facebook.com/events/1152934688809608/",
  ],
  [
    "The SonarMen  @La Voûte (Avèze -30)",
    "",
    "sam. 11 déc. 2021",
    "https://www.facebook.com/events/593157045471006/",
  ],
  [
    "The SonarMen @ Seven Hills (Nîmes -30)",
    "Nîmes - 30000",
    "ven. 10 déc. 2021",
    "https://www.facebook.com/events/685659459063908/",
  ],
  [
    "The SonarMen @O'Varieties (St Rémy de Provence -13)",
    "Saint-Rémy-de-Provence - 13210",
    "sam. 4 déc. 2021",
    "https://www.facebook.com/events/553612145733314/",
  ],
  [
    "The SonarMen @Bistrot de la scène (Dijon -21)",
    "Dijon - 21000",
    "sam. 2 oct. 2021",
    "https://www.facebook.com/events/1124082678373042/",
  ],
  [
    "The SonarMen @L'AbreuVoir (Séauve/Semène–43)",
    "La Séauve-sur-Semène - 43140",
    "ven. 1 oct. 2021",
    "https://www.facebook.com/events/1944840692357925/",
  ],
  [
    "The SonarMen // Kruzberg // First Date @Rock N Eat (Lyon -69)",
    "Lyon - 69009",
    "jeu. 30 sept. 2021",
    "https://www.facebook.com/events/4330571417066004/",
  ],
  [
    "The SonarMen (Bluegrass Power Rock • Tribute Classic Hits)",
    "Barberaz - 73000",
    "mer. 29 sept. 2021",
    "https://www.facebook.com/events/390931602437585/",
  ],
  [
    "The SonarMen @Guingette du Gardon (Montfrin -30)",
    "Montfrin - 30490",
    "sam. 25 sept. 2021",
    "https://www.facebook.com/events/578406350257311/",
  ],
  [
    "The SonarMen @Camping les Ondines (Vias -34)",
    "Vias - 34450",
    "jeu. 19 août 2021",
    "https://www.facebook.com/events/1256943121412229/",
  ],
  [
    "The SonarMen @La Conseillère (Montagnac -34)",
    "Montagnac - 34530",
    "ven. 13 août 2021",
    "https://www.facebook.com/events/366716578130934/",
  ],
  [
    "The SonarMen @Guingette du Gardon (Montfrin -30)",
    "Montfrin - 30490",
    "ven. 23 juil. 2021",
    "https://www.facebook.com/events/2944589445868482/",
  ],
  [
    "The SonarMen @Guingette du Gardon (Montfrin -30)",
    "",
    "dim. 11 juil. 2021",
    "https://www.facebook.com/events/524932681968171/",
  ],
  [
    "The SonarMen @Festival des Cultures (Cournonsec -34)",
    "",
    "sam. 3 juil. 2021",
    "https://www.facebook.com/events/171484131618767/",
  ],
  [
    "The SonarMen @Food-Trucks de Meynes (Meynes -30)",
    "",
    "mer. 23 juin 2021",
    "https://www.facebook.com/events/500806247706217/",
  ],
  [
    "The SonarMen @Fête de la Musique (Cournonsec -34)",
    "",
    "lun. 21 juin 2021",
    "https://www.facebook.com/events/473843793898433/",
  ],
  [
    "The SonarMen @Guingette du Gardon (Montfrin -30)",
    "Montfrin - 30490",
    "ven. 18 juin 2021",
    "https://www.facebook.com/events/528062764873570/",
  ],
  [
    "The SonarMen @Guingette du Gardon (Montfrin -30)",
    "",
    "dim. 23 mai 2021",
    "https://www.facebook.com/events/3826747040706641/",
  ],
  [
    "The SonarMen @Azureva Cap d'Agde (34)",
    "Le Cap d'Agde - 34300",
    "mer. 19 août 2020",
    "https://www.facebook.com/events/577918212896931/",
  ],
  [
    "The SonarMen @Divin Café (Sauvian -34)",
    "Sauvian - 34410",
    "sam. 15 août 2020",
    "https://www.facebook.com/events/918090602024113/",
  ],
  [
    "The SonarMen @Azureva Grau du Roi (30)",
    "Le Grau-du-Roi - 30240",
    "jeu. 13 août 2020",
    "https://www.facebook.com/events/584839082393918/",
  ],
  [
    "The SonarMen @Nébian (34) PRIVE",
    "",
    "sam. 8 août 2020",
    "https://www.facebook.com/events/311769036646365/",
  ],
  [
    "The SonarMen @Azureva Cap d'Agde (34)",
    "Le Cap d'Agde - 34300",
    "mer. 5 août 2020",
    "https://www.facebook.com/events/1158084131231907/",
  ],
  [
    "The SonarMen @Azureva Grau du Roi (30)",
    "Le Grau-du-Roi - 30240",
    "ven. 24 juil. 2020",
    "https://www.facebook.com/events/601375474096208/",
  ],
  [
    "The SonarMen @Azureva Cap d'Agde (34)",
    "Le Cap d'Agde - 34300",
    "mer. 22 juil. 2020",
    "https://www.facebook.com/events/918250595336879/",
  ],
  [
    "The SonarMen @Divin Café (Sauvian -34)",
    "Sauvian - 34410",
    "sam. 18 juil. 2020",
    "https://www.facebook.com/events/583698519013178/",
  ],
  [
    "The SonarMen @Food Truck Festival (ST Quentin La Poterie -30)",
    "Saint-Quentin-la-Poterie - 30700",
    "lun. 13 juil. 2020",
    "https://www.facebook.com/events/667144463870153/",
  ],
  [
    "The SonarMen @Meynes FoodTruck Festival (30)",
    "",
    "mer. 8 juil. 2020",
    "https://www.facebook.com/events/2619472094985900/",
  ],
  [
    "The SonarMen @Red Turtle (Montpellier -34)",
    "Montpellier - 34070",
    "jeu. 23 avr. 2020",
    "https://www.facebook.com/events/176617247109069/",
  ],
  [
    "The SonarMen @Pignan Food Truck festival (34)",
    "",
    "dim. 1 mars 2020",
    "https://www.facebook.com/events/515470999087177/",
  ],
  [
    "The SonarMen @Paddy Mullin's (Arles -13)",
    "Arles - 13200",
    "sam. 29 févr. 2020",
    "https://www.facebook.com/events/189676878896325/",
  ],
  [
    "The SonarMen @Local SBMC, Sorgues (84)",
    "",
    "sam. 8 févr. 2020",
    "https://www.facebook.com/events/600324837208777/",
  ],
  [
    "The SonarMen @Paddy Mullin's (Arles -13)",
    "Arles - 13200",
    "ven. 20 déc. 2019",
    "https://www.facebook.com/events/2426687424268188/",
  ],
  [
    "The SonarMen @Telethon Frontignan",
    "Frontignan - 34110",
    "ven. 6 déc. 2019",
    "https://www.facebook.com/events/492906088243920/",
  ],
  [
    "The SonarMen @Gajan dans les près festival (Gajan -30)",
    "Montpellier - 34000",
    "dim. 22 sept. 2019",
    "https://www.facebook.com/events/442640179793892/",
  ],
  [
    "The SonarMen en duo @O'Flaherty's (Perpignan -66)",
    "",
    "jeu. 19 sept. 2019",
    "https://www.facebook.com/events/174133416838943/",
  ],
  [
    "The SonarMen @Paddy Mullins (Arles -13)",
    "Montpellier - 34000",
    "sam. 14 sept. 2019",
    "https://www.facebook.com/events/1114091732113921/",
  ],
  [
    "The SonarMen @Chamax (Lyon -69)",
    "Montpellier - 34000",
    "sam. 7 sept. 2019",
    "https://www.facebook.com/events/455668101946648/",
  ],
  [
    "The SonarMen @GoOnRock (Pierre Bénite -69)",
    "",
    "ven. 6 sept. 2019",
    "https://www.facebook.com/events/2610221345711192/",
  ],
  [
    "The SonarMen @El Celler Ibèric (St André -66)",
    "Montpellier - 34000",
    "ven. 9 août 2019",
    "https://www.facebook.com/events/1073463362851452/",
  ],
  [
    "The SonarMen @Oufti Bar (Cap d'Agde -34)",
    "Montpellier - 34000",
    "jeu. 25 juil. 2019",
    "https://www.facebook.com/events/343757522960354/",
  ],
  [
    "The SonarMen en duo @Collias Foodtrucks Festival -30",
    "Montpellier - 34000",
    "ven. 12 juil. 2019",
    "https://www.facebook.com/events/1321820004641715/",
  ],
  [
    "The SonarMen @Food Truck Festival (ST Quentin La Poterie -30)",
    "",
    "lun. 24 juin 2019",
    "https://www.facebook.com/events/436815057099177/",
  ],
  [
    "The SonarMen @Fête de la musique (Cournonsec -34)",
    "",
    "ven. 21 juin 2019",
    "https://www.facebook.com/events/2755069467843491/",
  ],
  [
    "The SonarMen en duo @The Celt (Carcassonne -11)",
    "Carcassonne - 11000",
    "jeu. 13 juin 2019",
    "https://www.facebook.com/events/454990041919786/",
  ],
  [
    "The SonarMen @Azureva (Grau du Roi -30)",
    "Le Grau-du-Roi - 30240",
    "dim. 9 juin 2019",
    "https://www.facebook.com/events/1352948244843954/",
  ],
  [
    "The SonarMen @Eric's (Nizas -34)",
    "",
    "sam. 8 juin 2019",
    "https://www.facebook.com/events/592744241209540/",
  ],
  [
    "The SonarMen @Le Repère (Nyons -26)",
    "Nyons - 26110",
    "ven. 31 mai 2019",
    "https://www.facebook.com/events/2133769666935854/",
  ],
  [
    "The SonarMen @Paddy Mullins (Arles -13)",
    "Arles - 13200",
    "jeu. 30 mai 2019",
    "https://www.facebook.com/events/368578153958965/",
  ],
  [
    "The SonarMen @Arène des bières (Marguerittes -30)",
    "Nîmes - 30320",
    "sam. 25 mai 2019",
    "https://www.facebook.com/events/234405820819390/",
  ],
  [
    "The SonarMen en duo @St Quentin La Poterie (30)",
    "Saint-Quentin-la-Poterie - 30700",
    "lun. 13 mai 2019",
    "https://www.facebook.com/events/1010693625787011/",
  ],
  [
    "The SonarMen @Festival Food Truck (Clapiers -34)",
    "",
    "dim. 5 mai 2019",
    "https://www.facebook.com/events/436219953867276/",
  ],
  [
    "The SonarMen @Feria de Pâques (Arles -13)",
    "Arles - 13200",
    "sam. 20 avr. 2019",
    "https://www.facebook.com/events/1887280921383781/",
  ],
  [
    "The SonarMen @My Beers (Montpellier -34)",
    "Montpellier - 34000",
    "jeu. 11 avr. 2019",
    "https://www.facebook.com/events/1157463247747750/",
  ],
  [
    "The SonarMen @Food Truck Festival (Pignan -34)",
    "",
    "dim. 17 mars 2019",
    "https://www.facebook.com/events/246462266250559/",
  ],
  [
    "The SonarMen @Répèt Music (Pézénas -34)",
    "Pézenas - 34120",
    "sam. 16 mars 2019",
    "https://www.facebook.com/events/426520394754305/",
  ],
  [
    "The SonarMen @Seven Hills Pub (Nïmes -30)",
    "Nîmes - 30000",
    "ven. 15 mars 2019",
    "https://www.facebook.com/events/2320134594706069/",
  ],
  [
    "The SonarMen @The Celt (Carcassonne -11)",
    "Carcassonne - 11000",
    "jeu. 31 janv. 2019",
    "https://www.facebook.com/events/519912575087209/",
  ],
  [
    "The SonarMen @Paddy Mullin's Irish Pub (Arles)",
    "Arles - 13200",
    "sam. 19 janv. 2019",
    "https://www.facebook.com/events/2101624459850321/",
  ],
  [
    "The SonarMen @Blablah Café (Pézenas -34)",
    "Pézenas - 34120",
    "ven. 18 janv. 2019",
    "https://www.facebook.com/events/189991088564467/",
  ],
  [
    "The SonarMen @Drinkshop (St Estève -66)",
    "Saint-Estève - 66240",
    "sam. 12 janv. 2019",
    "https://www.facebook.com/events/377438809669238/",
  ],
  [
    "The SonarMen @O'Irish Pub (Avignon -84)",
    "Avignon - 84000",
    "lun. 7 janv. 2019",
    "https://www.facebook.com/events/1994787403968406/",
  ],
  [
    "Concert : The Sonarmen",
    "Avignon - 84000",
    "lun. 7 janv. 2019",
    "https://www.facebook.com/events/358788121575137/",
  ],
  [
    "The SonarMen @Wembley Pub (Frontignan -34)",
    "Frontignan - 34110",
    "ven. 7 déc. 2018",
    "https://www.facebook.com/events/240374523324465/",
  ],
  [
    "The SonarMen @Fête De La Bière (Jonquières -30)",
    "",
    "sam. 3 nov. 2018",
    "https://www.facebook.com/events/2359563377389148/",
  ],
  [
    "The SonarMen @Halloween (Lunel -34)",
    "Lunel - 34400",
    "ven. 2 nov. 2018",
    "https://www.facebook.com/events/296524264409692/",
  ],
  [
    "The SonarMen @Wembley Pub (Frontignan -34)",
    "Frontignan - 34110",
    "ven. 12 oct. 2018",
    "https://www.facebook.com/events/488865864932382/",
  ],
  [
    "The SonarMen @Pignan Food Truck Festival",
    "",
    "dim. 30 sept. 2018",
    "https://www.facebook.com/events/172879473590696/",
  ],
  [
    "The SonarMen @Paddy Mullin's (Arles -13)",
    "Arles - 13200",
    "jeu. 27 sept. 2018",
    "https://www.facebook.com/events/341214596619780/",
  ],
  [
    "The SonarMen @Festival Les Divergentes (Montagnac)",
    "",
    "ven. 17 août 2018",
    "https://www.facebook.com/events/372338756605368/",
  ],
  [
    "The SonarMen @Bodega (Marseillan -34)",
    "",
    "mer. 15 août 2018",
    "https://www.facebook.com/events/252919648587417/",
  ],
  [
    "The SonarMen @Azureva (Grau du Roi -30)",
    "Le Grau-du-Roi - 30240",
    "mar. 14 août 2018",
    "https://www.facebook.com/events/586471745043748/",
  ],
  [
    "The SonarMen @Bodega (Marseillan -34)",
    "",
    "mer. 25 juil. 2018",
    "https://www.facebook.com/events/251816358718255/",
  ],
  [
    "The SonarMen @Azureva (Grau du Roi -30)",
    "Le Grau-du-Roi - 30240",
    "ven. 20 juil. 2018",
    "https://www.facebook.com/events/399608640515266/",
  ],
  [
    "The SonarMen @Food Truck Festival (Pignan -34)",
    "",
    "dim. 24 juin 2018",
    "https://www.facebook.com/events/160647497980950/",
  ],
  [
    "The SonarMen @Fête de la musique (Gignac -34)",
    "",
    "sam. 23 juin 2018",
    "https://www.facebook.com/events/1510740539055421/",
  ],
  [
    'Soirée "le Toro entre dans l\'arêne" #1',
    "Nîmes - 30320",
    "ven. 22 juin 2018",
    "https://www.facebook.com/events/2038871996379603/",
  ],
  [
    "The SonarMen @La Source (Ceret -66)",
    "Céret - 66400",
    "jeu. 21 juin 2018",
    "https://www.facebook.com/events/2051020521835378/",
  ],
  [
    "The SonarMen @Le Chaudron (Bages -66)",
    "Bages - 66670",
    "sam. 9 juin 2018",
    "https://www.facebook.com/events/170748700297362/",
  ],
  [
    "The SonarMen @Coop Live Festival",
    "Puilacher - 34230",
    "ven. 8 juin 2018",
    "https://www.facebook.com/events/1882378831803969/",
  ],
  [
    "Concert festival food truck Pignan",
    "",
    "dim. 3 juin 2018",
    "https://www.facebook.com/events/209513023180622/",
  ],
  [
    "The SonarMen @The Secret Place (Music City Tour)",
    "Saint-Jean-de-Védas - 34430",
    "ven. 25 mai 2018",
    "https://www.facebook.com/events/166570004032143/",
  ],
  [
    "The SonarMen @Azureva (Grau du Roi)",
    "Le Grau-du-Roi - 30240",
    "jeu. 10 mai 2018",
    "https://www.facebook.com/events/472702563158489/",
  ],
  [
    "The SonarMen @Festival Foodtruck de Leins Gardonnenque",
    "Saint-Géniès-de-Malgoirès - 30190",
    "dim. 29 avr. 2018",
    "https://www.facebook.com/events/278831529323337/",
  ],
  [
    "The SonarMen @Ôtroissept jam",
    "",
    "mer. 18 avr. 2018",
    "https://www.facebook.com/events/2091565624456937/",
  ],
  [
    "The SonarMen + Students Bands Battle @La Petite Scène",
    "Montpellier - 34000",
    "jeu. 5 avr. 2018",
    "https://www.facebook.com/events/212790716137006/",
  ],
  [
    "The SonarMen's Sonic St Patrick's @La Petite Scène",
    "Montpellier - 34000",
    "sam. 17 mars 2018",
    "https://www.facebook.com/events/1991415327554336/",
  ],
  [
    "The SonarMen @Festival Food Truck",
    "Simiane-Collongue - 13109",
    "dim. 11 mars 2018",
    "https://www.facebook.com/events/1121158458025797/",
  ],
  [
    "The SonarMen@Oliver Pub",
    "Lattes - 34970",
    "mar. 13 févr. 2018",
    "https://www.facebook.com/events/1850913368314354/",
  ],
  [
    "The SonarMen @La Petite Scène",
    "Montpellier - 34000",
    "jeu. 1 févr. 2018",
    "https://www.facebook.com/events/1836852339682963/",
  ],
  [
    "The SonarMen @The Forest (Edimbourg -Ecosse)",
    "Edinburgh - EH3 9JN",
    "dim. 10 déc. 2017",
    "https://www.facebook.com/events/173711999888235/",
  ],
  [
    "The SonarMen & Guests (ShupAgrup / Sysmik) @Black Out",
    "Montpellier - 34000",
    "mer. 6 déc. 2017",
    "https://www.facebook.com/events/346692972408441/",
  ],
  [
    "The SonarMen @La Petite Scène",
    "Montpellier - 34000",
    "jeu. 30 nov. 2017",
    "https://www.facebook.com/events/322756408206310/",
  ],
  [
    "The SonarMen @O'Sullivans",
    "Montpellier - 34000",
    "sam. 25 nov. 2017",
    "https://www.facebook.com/events/484285028623737/",
  ],
];
var str = '<div class="col-md-12" id="listEvents">';

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
    </div>`;
});
str += "</div>";
document.getElementById("listPastEvents").innerHTML = str;
