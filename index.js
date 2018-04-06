const ioHook = require('iohook')
const robot = require('robotjs')

robot.setMouseDelay(2)

const { width: SCREEN_WIDTH } = robot.getScreenSize()

// customize your mouse position here
const X = SCREEN_WIDTH / 2
const Y_FROM = 350
const Y_TO = 300
const STRENGTH_DIFFERENCE = 10

const shoot = ({ strength }) => {
  const yFrom = Y_FROM + strength * STRENGTH_DIFFERENCE
  robot.moveMouse(X, yFrom)
  robot.mouseToggle('down')
  robot.dragMouse(X, Y_TO)
  robot.mouseToggle('up')
  console.log(`${Date.now()} - shoot ${strength}`)
}

ioHook.on('keydown', ({ keycode }) => {
  switch (keycode) {
    // keycode 2 is keychar 1 and so on
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      shoot({ strength: keycode - 1 })
      break
    case 16:
      console.log('quit')
      process.exit()
  }
})

ioHook.start()
