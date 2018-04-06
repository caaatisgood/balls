const ioHook = require('iohook')
const robot = require('robotjs')

robot.setMouseDelay(2)

const { width: SCREEN_WIDTH } = robot.getScreenSize()

const X = SCREEN_WIDTH / 2
const DEFAULT_FROM_Y = 350
const DEFAULT_TO_Y = 300
const DEFAULT_STRENGTH_DIFFERENCE = 10

const shoot = ({ strength }) => {
  const fromY = DEFAULT_FROM_Y + strength * DEFAULT_STRENGTH_DIFFERENCE
  robot.moveMouse(X, fromY)
  robot.mouseToggle('down')
  robot.dragMouse(X, DEFAULT_TO_Y)
  robot.mouseToggle('up')
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
      process.exit()
  }
})

ioHook.start()
