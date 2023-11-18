let $ = document;
const PlaceNameInput = $.querySelector("#PlaceNameInput");

let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: '2944ca6cf5a32c9e9e6398dce1802ac4'
}

function GetAllData(){
    let placeValue = PlaceNameInput.value;
    fetch(`${apiData.url}${placeValue}&appid=${apiData.key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}


PlaceNameInput.addEventListener('keypress' , (e) => {
    if(e.keyCode === 13){
        GetAllData();
    }
});

