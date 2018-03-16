const { app, BrowserWindow,ipcMain } = require('electron');
path = require('path');
url = require('url');
const { autoUpdater } = require("electron-updater");
app.on('ready', function () {
    console.log('Starting application!');
    mainWindow = new BrowserWindow({ width: 1280, height: 960 });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'build', 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Opens dev tools
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    autoUpdater.checkForUpdates();

});

app.on('window-all-closed', function () {
    app.quit();
});

autoUpdater.on('update-downloaded', (info) => {
    win.webContents.send('updateReady')
});
ipcMain.on("quitAndInstall", (event, arg) => {
    autoUpdater.quitAndInstall();
})
