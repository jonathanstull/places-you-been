// Business logic for ListOfPlaces

function ListOfPlaces() {
  this.places = {};
  this.placeId = 0;
}

ListOfPlaces.prototype.assignId = function () {
  this.placeId += 1;
  return this.placeId;
}

ListOfPlaces.prototype.addPlace = function (place) {
  if (!place) {
    return false;
  }
  place.id = this.assignId();
  this.places[place.id] = place;
}

ListOfPlaces.prototype.findPlace = function (id) {
  if (this.places[id] != undefined) {
    return this.places[id];
  }
  return false;
}

ListOfPlaces.prototype.deletePlace = function (id) {
  if (this.places[id] === undefined) {
    return false;
  }
  delete this.places[id];
  return true;
}

// Business logic for Place

function Place(name, location, landmarks, season, time) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.time = time;
}

function Landmark(name, type) {
  this.name = name;
  this.type = type;
}

// Business logic for landmark

Place.prototype.addLandmark = function (landmark) {
  if (!landmark.name && this.landmarks[landmark.name] != undefined) {
    return false;
  }
  this.landmarks[landmark.name] = landmark;
};

Place.prototype.deleteLandmark = function (landmark) {
  if (landmark.name === undefined) {
    return false;
  }
  delete this.landmarks[landmark.name];
  return true;
};

// User interface logic

// let landmarks = []
// const land1 = Landmark
// const land2 = Landmark

//landmarks.push(land1, land2)
//place.landmarks = landmarks;