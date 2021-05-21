import axios from "axios";


// A mock function to mimic making an async request for data
export const fetchCurrentLocationWeather = async () => {
    return axios.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=civillight&output=json').then(response => response.data);
}
