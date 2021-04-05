// Business logic for ListOfPlaces

function ListOfPlaces() {
  this.places = {};
  this.placeId = 0;
}

ListOfPlaces.prototype.assignId = function() {
  this.placeId += 1;
  return this.placeId;
}

ListOfPlaces.prototype.addPlace = function(place) {
  if (!place) {
    return false;
  }
  place.id = this.assignId();
  this.places[place.id] = place;
}

// Business logic for Place

function Place(location, landmarks, season) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
}

function Landmark(name, type) {
  this.name = name;
  this.type = type;
}

// Business logic for landmark

Place.prototype.addLandmark = function(landmark) {
  if (!landmark.name) {
    return false;
  }
  this.landmarks.push(landmark);
};

// User interface logic

// let landmarks = []
// const land1 = Landmark
// const land2 = Landmark

//landmarks.push(land1, land2)
//place.landmarks = landmarks;