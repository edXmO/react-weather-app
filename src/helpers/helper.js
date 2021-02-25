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
    }
}

export default helper;