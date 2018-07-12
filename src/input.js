var KEY = {
    BACKSPACE: 8,
    TAB:       9,
    RETURN:   13,
    ESC:      27,
    SPACE:    32,
    PAGEUP:   33,
    PAGEDOWN: 34,
    END:      35,
    HOME:     36,
    LEFT:     37,
    UP:       38,
    RIGHT:    39,
    DOWN:     40,
    INSERT:   45,
    DELETE:   46,
    TILDA:    192
};

class InputHandler {
    constructor() {
        this.pressed = [
        ]
        this.mouseX = 0
        this.mouseY = 0

        document.addEventListener('keydown', this.keyDown.bind(this))
        document.addEventListener('keyup', this.keyUp.bind(this))
        document.addEventListener('mousemove', this.mouseMove.bind(this))
    }

    getPressedKeys() {
        return this.pressed;
    }

    mouseMove(evt) {
        this.mouseX = evt.clientX
        this.mouseY = evt.clientY
    }

    keyDown(evt) {
        if(this.pressed.indexOf(evt.keyCode) > -1) {
            return
        }

        this.pressed.push(evt.keyCode)
    }

    keyUp(evt) {
        const index = this.pressed.indexOf(evt.keyCode)
        if(index > -1) {
            this.pressed.splice(index, 1)
        }
    }
}

export { InputHandler, KEY }
