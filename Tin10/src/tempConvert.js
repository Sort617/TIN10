function convertCelsius(celsius) {
    let result = {};
    result.fahrenheit = celsius * 1.8 + 32;
    result.kelvin = celsius + 273.15;
    return result;
}

function convertFahrenheit(fahrenheit) {
    let result = {};
    result.celsius = (fahrenheit - 32) * 1.8;
    result.kelvin = (fahrenheit - 32) / 1.8 + 273.15;
    return result;
}

function convertKelvin(kelvin) {
    let result = {};
    result.celsius = kelvin - 273.15;
    result.fahrenheit = (kelvin - 273.15) * 1.8 + 32;
    return result;
}

module.exports = {
    convertCelsius,
    convertFahrenheit,
    convertKelvin
};