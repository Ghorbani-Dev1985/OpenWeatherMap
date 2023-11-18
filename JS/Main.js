let $ = document;
const PlaceNameInput = $.querySelector("#PlaceNameInput");
const PlaceName = $.querySelector("#PlaceName");
const ShowTemp = $.querySelector("#ShowTemp");
const MaxMinTemp = $.querySelector("#MaxMinTemp");
const ShowFullDate = $.querySelector("#ShowDate");
const ShowInfoContainer = $.querySelector(".flex-button-container");
// Api Info
let apiData = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "2944ca6cf5a32c9e9e6398dce1802ac4",
};

// Fetch All Data
function GetAllData() {
  let placeValue = PlaceNameInput.value;
  fetch(`${apiData.url}${placeValue}&appid=${apiData.key}`)
    .then((res) => res.json())
    .then((data) => {
      ShowData(data);
      console.log(data);
    })
    .catch((err) => {
        ShowError()
        console.log(err)
    })
    
    
    
}
// Date Function
function ShowDate() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let now = new Date();
  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let date = now.getDate();
  return `${day} ${date} ${month} ${year}`;
}

function ShowError(){
    PlaceName.style.backgroundColor = "#ffe4e6";
    PlaceName.style.color = "#f43f5e";
    PlaceName.innerHTML = `Data Unavailable`
}

function ShowData(data) {
  PlaceNameInput.value = "";
  PlaceName.style.backgroundColor = "";
    PlaceName.style.color = "";
  PlaceName.style.display = "flex";
  ShowInfoContainer.style.display = "flex";
  ShowFullDate.style.display = "flex";
  PlaceName.innerHTML = `${data.name} , ${data.sys.country}`;
  ShowFullDate.innerHTML = ShowDate();
  ShowTemp.innerHTML = `${Math.floor(data.main.temp - 273.15)}&deg;C`;
  MaxMinTemp.innerHTML = `${Math.floor(
    data.main.temp_min - 273.15
  )}&deg;C / ${Math.floor(data.main.temp_max - 273.15)}&deg;C`;
  ShowInfoContainer.innerHTML = "";
  ShowInfoContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="button button-large">
    <img class="WeatherIcon" src="https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/${data.weather[0].icon}.png" />
   <span id="WeatherStatus">${data.weather[0].main}</span>
   <span class="WeatherDesc">${data.weather[0].description}</span>
  </div>
  <div class="button button-large">
  <?xml version="1.0" encoding="iso-8859-1"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg fill="countryColor" height="45px" width="45px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
       viewBox="0 0 328.611 328.611" xml:space="preserve">
  <g>
      <path d="M209.306,50.798c-2.452-3.337-7.147-4.055-10.485-1.602c-3.338,2.453-4.055,7.147-1.603,10.485
          c54.576,74.266,66.032,123.541,66.032,151.8c0,27.691-8.272,52.794-23.293,70.685c-17.519,20.866-42.972,31.446-75.651,31.446
          c-73.031,0-98.944-55.018-98.944-102.131c0-52.227,28.103-103.234,51.679-136.829c25.858-36.847,52.11-61.415,52.37-61.657
          c3.035-2.819,3.209-7.565,0.39-10.6c-2.819-3.034-7.565-3.209-10.599-0.39c-1.11,1.031-27.497,25.698-54.254,63.765
          c-24.901,35.428-54.586,89.465-54.586,145.71c0,31.062,9.673,59.599,27.236,80.353c20.361,24.061,50.345,36.779,86.708,36.779
          c36.794,0,66.926-12.726,87.139-36.801c17.286-20.588,26.806-49.117,26.806-80.33C278.25,156.216,240.758,93.597,209.306,50.798z"
          />
      <path d="M198.43,148.146l-95.162,95.162c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197
          s3.839-0.732,5.304-2.197l95.162-95.162c2.929-2.929,2.929-7.678,0-10.606C206.107,145.217,201.359,145.217,198.43,148.146z"/>
      <path d="M191.965,207.899c-13.292,0-24.106,10.814-24.106,24.106s10.814,24.106,24.106,24.106s24.106-10.814,24.106-24.106
          S205.257,207.899,191.965,207.899z M191.965,241.111c-5.021,0-9.106-4.085-9.106-9.106s4.085-9.106,9.106-9.106
          s9.106,4.085,9.106,9.106S196.986,241.111,191.965,241.111z"/>
      <path d="M125.178,194.162c13.292,0,24.106-10.814,24.106-24.106s-10.814-24.106-24.106-24.106s-24.106,10.814-24.106,24.106
          S111.886,194.162,125.178,194.162z M125.178,160.949c5.021,0,9.106,4.085,9.106,9.106s-4.085,9.106-9.106,9.106
          c-5.021,0-9.106-4.085-9.106-9.106S120.156,160.949,125.178,160.949z"/>
  </g>
  </svg>
  <span>${data.main.humidity}%</span>
  </div>
  <div class="button button-large">
  <?xml version="1.0" encoding="iso-8859-1"?>
  <?xml version="1.0" encoding="utf-8"?>
  <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.6933 17.3294C21.0506 15.9959 21.0964 14.5982 20.8271 13.2442C20.5577 11.8902 19.9806 10.6164 19.1402 9.52115C18.2998 8.42593 17.2187 7.53872 15.9806 6.92815C14.7425 6.31757 13.3805 6 12 6C10.6195 6 9.25752 6.31757 8.0194 6.92815C6.78128 7.53872 5.70021 8.42593 4.85982 9.52115C4.01943 10.6164 3.44225 11.8902 3.17293 13.2442C2.90361 14.5982 2.94937 15.9959 3.30667 17.3294" stroke="currentColor" stroke-linecap="round"/>
  <path d="M12.7657 15.5823C13.2532 16.2916 12.9104 17.3738 12 17.9994C11.0897 18.625 9.95652 18.5571 9.46906 17.8477C8.94955 17.0917 7.15616 12.8409 6.06713 10.2114C5.86203 9.71621 6.4677 9.3 6.85648 9.669C8.92077 11.6283 12.2462 14.8263 12.7657 15.5823Z" stroke="currentColor"/>
  <path d="M12 6V8" stroke="currentColor" stroke-linecap="round"/>
  <path d="M5.63599 8.63574L7.0502 10.05" stroke="currentColor" stroke-linecap="round"/>
  <path d="M18.364 8.63574L16.9498 10.05" stroke="currentColor" stroke-linecap="round"/>
  <path d="M20.6934 17.3291L18.7615 16.8115" stroke="currentColor" stroke-linecap="round"/>
  <path d="M3.30664 17.3291L5.23849 16.8115" stroke="currentColor" stroke-linecap="round"/>
  </svg>
  <span>${data.main.pressure}atm</span>
  </div>
  <div class="button button-large">
  <?xml version="1.0" encoding="iso-8859-1"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg fill="currentColor" height="45px" width="45px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
       viewBox="0 0 365.447 365.447" xml:space="preserve">
  <g>
      <g>
          <path d="M306.069,189.427H7.5c-4.143,0-7.5-3.358-7.5-7.5s3.357-7.5,7.5-7.5h297.119c0.469-0.092,0.954-0.14,1.45-0.14
              c24.47,0,44.378-19.908,44.378-44.378S330.539,85.53,306.069,85.53s-44.378,19.908-44.378,44.378c0,4.142-3.357,7.5-7.5,7.5
              s-7.5-3.358-7.5-7.5c0-32.741,26.637-59.378,59.378-59.378s59.378,26.637,59.378,59.378c0,32.224-25.801,58.535-57.829,59.358
              C307.118,189.372,306.601,189.427,306.069,189.427z"/>
      </g>
      <g>
          <path d="M152.283,137.479H7.5c-4.143,0-7.5-3.358-7.5-7.5s3.357-7.5,7.5-7.5h143.333c0.469-0.092,0.954-0.14,1.45-0.14
              c24.47,0,44.378-19.908,44.378-44.378s-19.908-44.378-44.378-44.378c-24.471,0-44.379,19.908-44.379,44.378
              c0,4.142-3.357,7.5-7.5,7.5s-7.5-3.358-7.5-7.5c0-32.741,26.638-59.378,59.379-59.378s59.378,26.637,59.378,59.378
              c0,32.224-25.801,58.535-57.829,59.358C153.332,137.423,152.814,137.479,152.283,137.479z"/>
      </g>
      <g>
          <path d="M244.186,346.866c-32.741,0-59.379-26.637-59.379-59.378c0-4.142,3.357-7.5,7.5-7.5s7.5,3.358,7.5,7.5
              c0,24.47,19.908,44.378,44.379,44.378c24.47,0,44.378-19.908,44.378-44.378s-19.908-44.378-44.378-44.378H7.5
              c-4.143,0-7.5-3.358-7.5-7.5s3.357-7.5,7.5-7.5h236.686c32.741,0,59.378,26.637,59.378,59.378S276.927,346.866,244.186,346.866z"
              />
      </g>
  </g>
  </svg>
  <span>${data.wind.speed}km/h</span>
  </div>
    `
  );
}

// AddEventListener
PlaceNameInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    GetAllData();
  }
});
