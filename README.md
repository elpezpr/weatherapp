# Weather App
A simple web application that allows users to search for the current temperature of any city using the wttr.in weather API.

## Overview
**Purpose**: This app provides users with the ability to get the current temperature of a city by entering its name and clicking the search button. It uses the wttr.in API to fetch temperature data in a user-friendly format.

**Design**: The app features a clean, minimalist design with a centered layout. It includes an input field for entering the city name, a search button, and a display area for showing the current temperature.

**Functionality**: Fetches the current temperature for the specified city using an API and displays it in the app. The app also handles input validation and error cases if the city name is invalid or the API request fails.

## Test the App
You can test the app directly on CodePen using the following link:  
[Live Demo](https://codepen.io/elpezpr/pen/NWQgRed)

## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **wttr.in API**: Used to fetch real-time weather data.

## Project Structure
- **index.html**: Contains the HTML structure of the application.
- **styles.css**: Provides all the styling for the layout and the input elements.
- **app.js**: Handles the logic for fetching the weather data, updating the DOM, and managing user input.

## Notes
- The app uses the wttr.in weather service to fetch temperature data in a simplified format (`%t`), displaying the temperature in Celsius by default.
- The app includes basic error handling, displaying a message if the API request fails or if an invalid city is entered.
- Users can either click the search button or press the "Enter" key to submit the city name.
- The design is responsive, and the app is easy to use on both desktop and mobile devices.

## Credits
- **Weather API**: [wttr.in](https://wttr.in/)
- Developed by: Gabriel