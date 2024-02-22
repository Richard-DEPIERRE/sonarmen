const functions = require("firebase-functions");
const axios = require("axios");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();

// HTTP function to retrieve events from Firestore
exports.getEvents = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      // Reference to events collection in Firestore
      const eventsRef = admin.firestore().collection("events");
      const allevents = await eventsRef.get();
      const all = allevents.docs.map((doc) => {
        const event = doc.data();
        return {
          location: event.location,
          date: event.date,
          link: event.link,
          name: event.name,
          start_time: event.start_time,
        };
      });

      const futureEvents = allevents.docs
        .filter((dox) => {
          const event = dox.data();
          return new Date(event.start_time) >= new Date();
        })
        .map((doc) => {
          const event = doc.data();
          return {
            location: event.location,
            date: event.date,
            link: event.link,
            name: event.name,
            start_time: event.start_time,
          };
        });
      const pastEvents = allevents.docs
        .filter((dox) => {
          const event = dox.data();
          return new Date(event.start_time) < new Date();
        })
        .map((doc) => {
          const event = doc.data();
          return {
            location: event.location,
            date: event.date,
            link: event.link,
            name: event.name,
            start_time: event.start_time,
          };
        });

      // Combine future and past events into a single response object
      const events = {
        all: all,
        future: futureEvents,
        past: pastEvents,
      };

      // Send events data as JSON response
      res.json(events);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving events data from Firestore");
    }
  });
});

const db = admin.firestore();

// Replace YOUR_ACCESS_TOKEN with your actual Facebook access token
const ACCESS_TOKEN =
"acess-token";
const PAGE_ID = "The.SonarMen";

exports.getFacebookEvents = functions.pubsub
  .schedule("every 24 hours")
  .onRun(async (context) => {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/${PAGE_ID}/events?fields=id,name,start_time,description,place&access_token=${ACCESS_TOKEN}&limit=600`
      );

      const events = response.data.data;

      // Transform the events data as desired
      const transformedEvents = transformEvents(events);

      // Store the events in Firestore
      const batch = db.batch();
      transformedEvents.forEach((event) => {
        const eventRef = db.collection("events").doc(event.id);
        batch.set(eventRef, event, { merge: true });
      });
      await batch.commit();

      console.log("Events updated successfully");
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  });

exports.getFacebookEventsManualy = functions.https.onRequest(
  async (req, res) => {
    try {
      const response = await axios.get(
        `https://graph.facebook.com/${PAGE_ID}/events?fields=id,name,start_time,description,place&access_token=${ACCESS_TOKEN}&limit=300`
      );

      const events = response.data.data;

      // Transform the events data as desired
      const transformedEvents = transformEvents(events);

      // Store the events in Firestore
      const batch = db.batch();
      transformedEvents.forEach((event) => {
        const eventRef = db.collection("events").doc(event.id);
        batch.set(eventRef, event, { merge: true });
      });
      await batch.commit();

      console.log("Events updated successfully");
      res.json(transformedEvents);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
);

// Function to transform events data as desired
function transformEvents(events) {
  const transformedEvents = events.map((event) => {
    const id = event.id;
    const name = event.name;
    const date = new Date(event.start_time).toLocaleDateString("fr-FR", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const start_time = event.start_time;
    const location = event.place?.location?.city ?? event.place?.name ?? "";
    const link = `https://www.facebook.com/events/${event.id}/`;

    return {
      id: id,
      name: name,
      location: location,
      date: date,
      link: link,
      start_time: start_time,
    };
  });

  return transformedEvents;
}