# Helsinki City Bike App

Welcome to the Helsinki City Bike App, developed as a pre-assignment. Even if you're here out of curiosity, feel free to explore the idea and create your own city bike app just for the fun of it!

## Overview

This project aims to create a user interface and a backend service for displaying data from journeys made with city bikes in the Helsinki Capital area.

### Data Sources

- Journey Data:
  - [May 2021](https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv)
  - [June 2021](https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv)
  - [July 2021](https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv)
- Station Information: [Helsinki Region Transport's (HSL) City Bicycle Stations](https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv)

### Functions implemented

#### Data Import

- Import data from CSV files to a database or in-memory storage.
- Validate data before importing.
- Skip journeys that lasted for less than ten seconds or covered distances shorter than 10 meters.

#### Journey List View

- List journeys with departure and return stations, covered distance in kilometers, and duration in minutes.
- Implement pagination or use a hard-coded limit for the list length.

#### Station List

- List all the stations.
- Implement pagination and searching.

#### Single Station View

- Display station name, address, and total number of journeys starting from and ending at the station.
- Show station location on the map if available.
- Calculate the average distance of journeys starting from and ending at the station.
- Provide the top 5 most popular return and departure stations for journeys related to the selected station.
- Implement filtering for calculations per month.

#### Additional Features

- Endpoints to store new journey data or new bicycle stations.
- Running backend in Cloud.
- Implementing E2E tests.
- Create UI for adding journeys or bicycle stations.

### Instructions

- Clone the repository.
- Set up and run the backend service.
- Set up and run the frontend application.
- Access the application through the provided URL.
- Explore the functionalities and features.

### Technologies Used

- Backend: Express
- Frontend: React
- Database: MySQL

### Getting Started

  *  `git clone https://github.com/kravishan/Helsinki-city-bike-app.git`

 * Front End:
   * `npm start` to start 

* Back End:
   * `node server.js` to start back end
