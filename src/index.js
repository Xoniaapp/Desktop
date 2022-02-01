const { app, BrowserWindow } = require('electron')
const path = require('path')


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/logo.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.setOverlayIcon('./icons/logo.png', 'Xonia')
  win.loadURL("https://app.xoniaapp.com/channels/me")
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
