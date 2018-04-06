> small script to play messenger game `Basketball Against Friends`

# motivation
Just for fun.

Thinking out a convenient way of scripting amused me more than swiping on phones everyday.

# requirements
- node.js

I run the script on `v9.11.1`.

But I believe it will works on most patches of node.

# intro
The script is nothing more than simulating the swiping gesture.

This is what it does for you:
1. move mouse to certain position
2. mouse down
3. drag up to certain position
4. mouse up

press 0-9 to shoot with different strength

# instructions

- clone this repo then run:
  ```sh
  node index.js
  ```
- open up `Basketball Against Friends` on [messenger](https://messenger.com)
- press `0-9` to shoot (strength from min to max)
- press `Q` to quit

# **you may need to customize**
The script will behave differently due to various sizes of screen.

You may need to adjust the mouse position by changing these lines in `index.js` to fit your condition:

```javascript
const { width: SCREEN_WIDTH } = robot.getScreenSize()

// customize your mouse position here
const X = SCREEN_WIDTH / 2
const Y_FROM = 350
const Y_TO = 300
const STRENGTH_DIFFERENCE = 10
```

- `X`: axis X of mouse position (center of your screen by default)
- `Y_FROM`: axis Y of mouse down position
- `Y_TO`: axis Y of mouse up position
- `STRENGTH_DIFFERENCE`: the default strength difference

pressing key `0-9` trigger swiping mouse from `[X, Y_FROM + key * STRENGTH_DIFFERENCE]` to `[X, Y_TO]`

---

happy scripting :tada: