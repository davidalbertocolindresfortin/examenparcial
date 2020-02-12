const { app, BrowserWindow } = require('electron')

function createWindow() {
    // Crea la ventana del navegador.
    let win = new BrowserWindow({
        width: 900,
        height: 600,
        backgroundColor: "#F90",
        minHeight: 500,
        minWidth: 700,
        center: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // y carga el  index.html de la aplicación.
    win.loadFile('index.html')
}

app.on('ready', createWindow)