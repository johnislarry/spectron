var app = require('app')
var BrowserWindow = require('browser-window')
var fs = require('fs')
var path = require('path')

var mainWindow = null

app.on('ready', function () {
  mainWindow = new BrowserWindow({
    x: 25,
    y: 35,
    width: 200,
    height: 100
  })
  mainWindow.loadUrl('file://' + __dirname + '/index.html')
  mainWindow.on('closed', function () { mainWindow = null })
})

app.on('will-quit', function () {
  if (fs.existsSync(process.env.SPECTRON_TEMP_DIR)) {
    fs.writeFileSync(path.join(process.env.SPECTRON_TEMP_DIR, 'quit.txt'), '')
  }
})
