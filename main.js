var menubar = require('menubar')

var mb = menubar({ width: 120, height: 100})

mb.on('ready', function ready () {
  console.log('app is ready')
})
