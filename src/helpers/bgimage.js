
export function getBgImage(label){

    switch (label) {
        case "clear sky": document.body.className = "clear"; break;

        case "few clouds": 
        case "scattered clouds": 
        case "broken clouds": 
        case "overcast clouds": document.body.className = "cloudy"; break;

        case "rain":
        case "light rain": 
        case "moderate rain":
        case "heavy intensity rain": 
        case "very heavy rain":
        case "extreme rain": 
        case "freezing rain": 
        case "light intensity shower rain": 
        case "shower rain": 
        case "heavy intensity shower rain": 
        case "ragged shower rain": document.body.className = "rain";break;

        case "thunderstorm with light rain":
        case "thunderstorm with rain":
        case "thunderstorm with heavy rain":
        case "light thunderstorm":
        case "heavy thunderstorm":
        case "ragged thunderstorm":
        case "thunderstorm with light drizzle":
        case "thunderstorm with drizzle":
        case "thunderstorm with heavy drizzle":
        case "thunderstorm":document.body.className = "storm"; break;

        case "light intensity drizzle":
        case "heavy intensity drizzle":
        case "light intensity drizzle rain":
        case "drizzle rain":
        case "heavy intensity drizzle rain":
        case "shower rain and drizzle":
        case "heavy shower rain and drizzle":
        case "shower drizzle":
        case "drizzle":document.body.className = "drizzle"; break;

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
        case "Snow": document.body.className = "snow"; break;

        case "Smoke":
        case "Haze":
        case "sand/ dust whirls":
        case "fog":
        case "sand":
        case "dust":
        case "volcanic ash":
        case "squalls":
        case "tornado":
        case "mist": document.body.className = "pic"; break;

        default : document.body.className = "pic";
    }
}

