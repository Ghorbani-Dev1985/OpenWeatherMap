let $ = document;
const PlaceNameInput = $.querySelector("#PlaceNameInput");
const PlaceName = $.querySelector("#PlaceName");
const ShowTemp = $.querySelector("#ShowTemp");
const MaxMinTemp = $.querySelector("#MaxMinTemp");

// Api Info
let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: '2944ca6cf5a32c9e9e6398dce1802ac4'
}

// Fetch All Data
function GetAllData(){
    let placeValue = PlaceNameInput.value;
    fetch(`${apiData.url}${placeValue}&appid=${apiData.key}`)
    .then(res => res.json())
    .then(data => {
        ShowData(data)
    })
}

function ShowData(data){
    PlaceName.style.display = "flex"
    PlaceName.innerHTML = `${data.name} , ${data.sys.country}`;
    ShowTemp.innerHTML = `${Math.floor(data.main.temp - 273.15)}&deg;C`;
    MaxMinTemp.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}&deg;C / ${Math.floor(data.main.temp_max - 273.15)}&deg;C`
}

// AddEventListener
PlaceNameInput.addEventListener('keypress' , (e) => {
    if(e.keyCode === 13){
        GetAllData();
    }
});

