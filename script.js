const convertBtn = document.getElementById("convert-btn")
const inputToConvert = document.getElementById("input-convert")
const textLength = document.getElementById("p-len")
const textVolume = document.getElementById("p-vol")
const textMass = document.getElementById("p-mass")

convertBtn.addEventListener("click", function () {
    textLength.append(convertLength(inputToConvert.value))
    textVolume.append(convertVolume(inputToConvert.value))
    textMass.append(convertMass(inputToConvert.value))
})

function convertLength(num) {
    return `${num} meters = ${(num * 3.28084).toFixed(3)} feet | ${num} feet = ${(num * 0.3048).toFixed(3)} meters`
}

function convertVolume(num) {
    return `${num} liters = ${(num * 0.264172).toFixed(3)} gallons | ${num} gallons = ${(num * 3.78541).toFixed(3)} liters`
}

function convertMass(num) {
    return `${num} kilos = ${(num * 2.20462).toFixed(3)} pounds | ${num} pounds = ${(num * 0.453592).toFixed(3)} kilos`
}