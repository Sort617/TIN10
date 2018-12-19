var tempConverter = require("./tempConvert");
var distConverter = require("./distConvert");

const celsiusId = "celsius-input";
const fahrenheitId = "fahrenheit-input";
const kelvinId = "kelvin-input";

const kilometersId = "kilometers-input";
const milesId = "miles-input";

window.onload = attachListeners;

function attachListeners() {
    // temperatures:
    document.getElementById(celsiusId).onchange = celsiusChangeListener;
    document.getElementById(celsiusId).oninput = celsiusChangeListener;
    document.getElementById(fahrenheitId).onchange = fahrenheitChangeListener;
    document.getElementById(fahrenheitId).oninput = fahrenheitChangeListener;
    document.getElementById(kelvinId).onchange = kelvinChangeListener;
    document.getElementById(kelvinId).oninput = kelvinChangeListener;
    // distances:
    document.getElementById(kilometersId).onchange = kilometersChangeListener;
    document.getElementById(kilometersId).oninput = kilometersChangeListener;
    document.getElementById(milesId).onchange = milesChangeListener;
    document.getElementById(milesId).oninput = milesChangeListener;
}

function celsiusChangeListener() {
    let convertedTemps = tempConverter.convertCelsius(Number(document.getElementById(celsiusId).value));
    document.getElementById(fahrenheitId).value = convertedTemps.fahrenheit;
    document.getElementById(kelvinId).value = convertedTemps.kelvin;
}

function fahrenheitChangeListener() {
    let convertedTemps = tempConverter.convertFahrenheit(Number(document.getElementById(fahrenheitId).value));
    document.getElementById(celsiusId).value = convertedTemps.celsius;
    document.getElementById(kelvinId).value = convertedTemps.kelvin;
}

function kelvinChangeListener() {
    let convertedTemps = tempConverter.convertKelvin(Number(document.getElementById(kelvinId).value));
    document.getElementById(celsiusId).value = convertedTemps.celsius;
    document.getElementById(fahrenheitId).value = convertedTemps.fahrenheit;
}

function kilometersChangeListener() {
    document.getElementById(milesId).value = distConverter.convertKilometersToMiles(Number(document.getElementById(kilometersId).value));
}

function milesChangeListener() {
    document.getElementById(kilometersId).value = distConverter.covnertMilesToKilometers(Number(document.getElementById(milesId).value));
}