const fs = require("fs");
const btnguardar = document.getElementById("btn-guardar");
const Numero_de_identidad = document.getElementById("identidada");
const Numero_Completo = document.getElementById("Nombre_completo");
const Numero_telefono = document.getElementById("Numero_telefono")
const Correo_electronico = document.getElementById("Correo_electronico")


btnguardar.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Mostrar mensajes en la consola");
    console.log(Numero_de_identidad.value);
    fs.open("./alumunos.csv", 'a', function (err, archivo) {
        if (err) {
            console.log("Error al abrir el archivo");
            console.log(err);
            return;
        }
        const linea = `\n${Numero_de_identidad.value}, ${Numero_Completo.value}, ${Correo_electronico.value}, ${Numero_telefono.value}; `
        fs.write(archivo, linea, function (err, written, string) {
            if (err) {
                console.log('Error del programa del Desarrollo');
                console.log(err);
            }
            console.log('Se escribieron los datos existosamente del programa de Desarrollo');
        })
    });

});