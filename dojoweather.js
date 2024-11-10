function makeAlert () {
    alert('Loading weather report... ');
}
function acceptCookies() {
    var element = document.querySelector('.main3');
    element.remove();
}
        function grades() {
            var select = document.getElementById('temperature');
            for (var i = 1; i<5; i++) {
                var element = document.getElementById('red-number' +i);
            if(select.value === "far"){
                var temperatureInCelsius = parseInt(element.innerHTML);
                var convertedTemp = Math.trunc(temperatureInCelsius*(9/5)+32);
                element.innerHTML = convertedTemp + '°'
                }
            else { select.value = "celsius";
                var temperatureInFareneheit = parseInt(element.innerHTML);
                var convertedTemp = Math.trunc((temperatureInFareneheit - 32) * (5 / 9));
                element.innerHTML = convertedTemp + '°';
            }
        }
            for (var j = 1; j<5; j++) {
                var element1 = document.getElementById('blue-number' +j);
            if(select.value === "far"){
                var temperatureInCelsius1 = parseInt(element1.innerHTML);
                var convertedTemp1 = Math.trunc(temperatureInCelsius1*(9/5)+32);
                element1.innerHTML = convertedTemp1 + '°';
            }
            else { select.value = "celsius";
                var temperatureInFareneheit = parseInt(element1.innerHTML);
                var convertedTemp = Math.trunc((temperatureInFareneheit - 32) * (5/9));
                element1.innerHTML = convertedTemp +  '°';
        }
    }
}
