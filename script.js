const temperatureInfo = document.getElementById('temperature-info');
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

// Function to fetch temperature for a specific city
const fetchTemperature = (city) => {
    const apiUrl = `https://wttr.in/${city}?format=%t&u`;

    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            // Display the temperature
            temperatureInfo.textContent = `Temperature in ${city}: ${data}`;
        })
        .catch(error => {
            temperatureInfo.textContent = `Failed to fetch temperature: ${error.message}`;
        });
};

// Event listener for the search button click
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchTemperature(city); // Fetch temperature for entered city
    } else {
        temperatureInfo.textContent = 'Please enter a valid city name.';
    }
});

// Event listener for the "Enter" key press in the input field
cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            fetchTemperature(city); // Fetch temperature for entered city
        } else {
            temperatureInfo.textContent = 'Please enter a valid city name.';
        }
    }
});
