'use strict';

console.log('Mapty OOP Foundation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10); //unique identification
  clicks = 0; //track user interaction

  constructor(coords, distance, duration) {
    //store the coordinates as an array of lat and long
    this.coords = coords;
    //store distance in kilometers
    this.distance = distance;
    //store duration in minutes
    this.duration = duration;
  }

  //generate workout description
  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    //generate description
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} 
    on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

const testWorkout = new Workout([40.7128, -74.005], 5.2, 24);
console.log('Test workout: ', testWorkout);

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// ===== TESTING THE CLASS HIERARCHY =====

const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('=== RUNNING WORKOUT ===');
console.log('Distance:', run1.distance, 'km');
console.log('Duration:', run1.duration, 'min');
console.log('Cadence:', run1.cadence, 'spm');
console.log('Pace:', run1.pace.toFixed(1), 'min/km');
console.log('Description:', run1.description);
console.log('ID:', run1.id);

const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('=== CYCLING WORKOUT ===');
console.log('Distance:', cycling1.distance, 'km');
console.log('Duration:', cycling1.duration, 'min');
console.log('Elevation Gain:', cycling1.elevationGain, 'm');
console.log('Speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Description:', cycling1.description);
console.log('ID:', cycling1.id);

console.log('=== INHERITANCE TESTING ===');
console.log(
  'Both inherit from Workout:',
  run1 instanceof Workout,
  cycling1 instanceof Workout
);

console.log('=== TESTING GEOLOCATION API ===');

// Test the geolocation

// loadMap();

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    console.log('App starting');
    this._getPosition();
  }
  _getPosition() {
    if (navigator.geolocation) {
      console.log('🔍 Requesting user location...');
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        this._handleLocationError.bind(this),
        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 600000,
        }
      );
    } else {
      alert('❌ Geolocation is not supported by this browser');
    }
  }
  _handleLocationError(error) {
    console.error('Geolocation error:', error);

    let message = 'Could not get your position. ';

    switch (error.code) {
      case error.PERMISSION_DENIED:
        message +=
          'Location access was denied. Please enable location services and refresh the page.';
        break;
      case error.POSITION_UNAVAILABLE:
        message += 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        message += 'Location request timed out.';
        break;
      default:
        message += 'An unknown error occurred.';
        break;
    }

    alert(`📍 ${message}`);
  }
  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    console.log(`Loading map at corrdinates: ${latitude}, ${longitude}`);

    //coordinate array
    //VERY IMPORTANT!!!
    const coords = [latitude, longitude];

    //initialize map and center at users location
    this.#map = L.map('map').setView(coords, 13);

    //add open street map
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //add a marker to the user's location
    L.marker(coords).addTo(this.#map).bindPopup('You are here!').openPopup();

    this.#map.on('click', (mapEvent) => {
  console.log('Map clicked!', mapEvent);
  const { lat, lng } = mapEvent.latlng;

  L.marker([lat, lng])
    .addTo(this.#map)
    .bindPopup(`Workout location<br>Lat: ${lat.toFixed(4)}, ${lng.toFixed(4)}`)
    .openPopup();
});


    console.log('Map loaded successfully at user location');
  }
}

const app = new App();
console.log('Hour 2 complete!');
