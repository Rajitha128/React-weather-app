
export function getWeatherIcon(label){
    var icons = ['wi-day-sunny','wi-day-cloudy', 'wi-cloudy', 'wi-day-rain', 'wi-day-thunderstorm', 'wi-rain', 'wi-day-snow-wind', 'wi-day-snow-wind', 'wi-day-snow-wind','wi-night-sprinkle','wi-fog','wi-snow'];

    var icon;
    switch (label) {
        case "clear sky": icon = icons[0]; break;

        case "overcast clouds": 
        case "scattered clouds": 
        case "broken clouds": 
        case "few clouds": icon = icons[1];break;
       
        case "light rain": 
        case "moderate rain":
        case "heavy intensity rain": 
        case "very heavy rain":
        case "extreme rain": 
        case "freezing rain": 
        case "light intensity shower rain": 
        case "ragged shower rain": 
        case "heavy intensity shower rain":
        case "shower rain": icon = icons[6];break;
        case "rain": icon = icons[5];break;

        case "thunderstorm with light rain":
        case "thunderstorm with rain":
        case "thunderstorm with heavy rain":
        case "light thunderstorm":
        case "heavy thunderstorm":
        case "ragged thunderstorm":
        case "thunderstorm with light drizzle":
        case "thunderstorm with drizzle":
        case "thunderstorm with heavy drizzle":
        case "thunderstorm": icon = icons[4];break;

        case "light snow":
        case "Heavy snow":
        case "Sleet":
        case "Light shower sleet":
        case "Shower sleet":
        case "Light rain and snow":
        case "Rain and snow":
        case "Light shower snow":
        case "Shower snow":
        case "Heavy shower snow":
        case "Snow": icon = icons[12];break;

        case "Smoke":
        case "Haze":
        case "sand/ dust whirls":
        case "fog":
        case "sand":
        case "dust":
        case "volcanic ash":
        case "squalls":
        case "tornado":
        case "mist": icon = icons[11];break;

        case "light intensity drizzle":
        case "heavy intensity drizzle":
        case "light intensity drizzle rain":
        case "drizzle rain":
        case "heavy intensity drizzle rain":
        case "shower rain and drizzle":
        case "heavy shower rain and drizzle":
        case "shower drizzle":
        case "drizzle": icon = icons[10];break;

        default : icon = icons[0];
    }
    return icon;
}

