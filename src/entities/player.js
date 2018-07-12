import { KEY } from '../input'


class Player {
    constructor() {
        this.width = 40
        this.height = 40
        this.x = 20
        this.y = 20
        this.speed = 3
    }

    update(input, delta) {
        let keys = input.getPressedKeys()

        if(keys.indexOf(KEY.RIGHT) >-1) {
            this.x += 1 * this.speed
        }

        if(keys.indexOf(KEY.LEFT) >-1) {
            this.x -= 1 * this.speed
        }

        if(keys.indexOf(KEY.UP) >-1) {
            this.y -= 1 * this.speed
        }

        if(keys.indexOf(KEY.DOWN) >-1) {
            this.y += 1 * this.speed
        }

        console.log("Updating playah!!", input.getPressedKeys())
    }

    render(ctx) {
        const { x, y, width, height } = this
        
        ctx.rect(x, y, width, height)
        ctx.stroke()
    }
}

export default Player
