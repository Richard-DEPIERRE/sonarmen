// Get the list of events from the URL
fetch("https://us-central1-sonarmen-3bdf9.cloudfunctions.net/getEvents")
  .then((response) => response.json())
  .then((events) => {
    console.log(events);
    // Filter the events into future and passed events
    const futureEvents = events.future.sort((a, b) => {
        return new Date(a.start_time) - new Date(b.start_time);
      });
    const passedEvents = events.past.sort((a, b) => {
      return new Date(b.start_time) - new Date(a.start_time);
    });
    // Render the future events
    let futureEventsHtml = '<div class="col-md-12" id="listEvents">';
    futureEvents.forEach((event) => {
      futureEventsHtml += `<div class="schedrow wow animated fadeIn" style="display: flex;justify-content: space-evenly;">
      <div class="event">
        <span class="bold"><i class="fa fa-microphone"></i>${event.name}</span>
      </div>
      <div class="location">
        <span class="bold"><i class="fa fa-map-marker"></i>${event.location}
        </span>
        / ${event.date}
      </div>
      <div class="button-wrap">
        <a href="${event.link}" target="_blank" class="def-button">Plus d'informations</a>
          </div>
      </div>`;
    });
    futureEventsHtml += "</div>";
    console.log(futureEventsHtml);
    document.getElementById("listEvents").innerHTML = futureEventsHtml;
    // Render the passed events
    let passedEventsHtml = '<div class="col-md-12" id="listEvents">';
    passedEvents.forEach(function (event) {
      passedEventsHtml += `<div class="schedrow wow animated fadeIn" style="display: flex;justify-content: space-evenly;">
      <div class="event">
        <span class="bold"><i class="fa fa-microphone"></i>${event.name}</span>
      </div>
      <div class="location">
        <span class="bold"><i class="fa fa-map-marker"></i>${event.location}
        </span>
        / ${event.date}
      </div>
      <div class="button-wrap">
        <a href="${event.link}" target="_blank" class="def-button soldout">Déja passé</a>
          </div>
      </div>`;
    });
    passedEventsHtml += "</div>";
    document.getElementById("listPastEvents").innerHTML = passedEventsHtml;
  })
  .catch((error) => {
    console.error("Error fetching events:", error);
  });
