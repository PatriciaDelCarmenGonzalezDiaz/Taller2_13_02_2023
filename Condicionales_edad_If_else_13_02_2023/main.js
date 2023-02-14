let edad = Number(prompt("EDigite una edad"));

if (edad >= 18) {
    console.warn(`Digitó ${edad}, Es mayor de edad`);
} else {
    console.warn(`Digitó ${edad}, La edad ingresada no cumple con los parámetros`);
}