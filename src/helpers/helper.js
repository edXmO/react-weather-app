const helper = {
    kelvinToCelsius : function(kelvin) { return kelvin - 273.15},
    decimalParser : function(num){ return num.toFixed(0)},
    parseToString : function(el){return el.toString()},
    parseUnixTime: function(time){
        let date = new Date(time * 1000);
        let hours = date.getHours();
        let minutes = '0' + date.getMinutes();
        let formattedTime = hours + ':' + minutes.substr(-2);
        return formattedTime;
    },
    parseUnixToLocaleTime: function(time){
        let date = new Date(time*1000)
        let day = date.toLocaleString('en-US',{weekday: 'long'});
        let dayNumeric = date.toLocaleString('en-US', {day: 'numeric'});
        let month = date.toLocaleString('en-US',{month: 'long'});
        let year = date.toLocaleString('en-US', {year: 'numeric'});
        return day + ', ' + month + ' ' + dayNumeric + ', ' + year;

    }
}

export default helper;