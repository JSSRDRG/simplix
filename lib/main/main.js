// Require modules.
const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

// Keep global reference of the mainWindow object.
let mainWindow

// When Electron has finished starting up the window will be created.
app.on('ready', () => {
  createWindow()

  // Open Dev Tools for debugging.
  mainWindow.webContents.openDevTools()
})

// Quit app when all windows are closed.
//  Except for MacOS, keep app in dock.
app.on('window-all-closed', () => {
  if (process.platform === 'darwin') return
  app.quit()
})

// For MacOS create new window when app is activated from dock.
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

// Create the window.
function createWindow () {
  // Set mainWindow to a new BrowserWindow class
  mainWindow = new BrowserWindow({
    width: 800,
    minWidth: 360,
    height: 600,
    minHeight: 83,
    frame: false,
    backgroundColor: '#ffffff',
    // Inset the MacOS traffic lights.
    titleBarStyle: 'hiddenInset'
  })

  // Load the main.html file into the window.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../../main.html'),
    protocol: 'file',
    slashes: true
  }))

  // Destroy window when closed.
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
