CREATE DATABASE journeys_db;

CREATE TABLE journeys (
  departure_time TIMESTAMP,
  return_time TIMESTAMP,
  departure_station_id INTEGER,
  departure_station_name TEXT,
  return_station_id INTEGER,
  return_station_name TEXT,
  covered_distance INTEGER,
  duration INTEGER
);

CREATE TABLE stations (
  FID INT,
  ID INT,
  Nimi VARCHAR(255),
  Namn VARCHAR(255),
  Name VARCHAR(255),
  Osoite VARCHAR(255),
  Adress VARCHAR(255),
  Kaupunki VARCHAR(255),
  Stad VARCHAR(255),
  Operaattor VARCHAR(255),
  Kapasiteet INT,
  x FLOAT,
  y FLOAT
);

