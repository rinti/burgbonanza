import { KEY } from '../input'
import Bullet from './bullet'
import { entities } from '../gameloop'


class Player {
    constructor() {
        this.radius = 20
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

        if(keys.indexOf(KEY.SPACE) >-1) {
            entities.push(new Bullet(this.x, this.y, input.mouseX, input.mouseY))
        }
    }

    render(ctx) {
        const { x, y, radius } = this
        
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, 2*Math.PI)
        ctx.strokeStyle = '#bf11a0'
        ctx.stroke()
    }
}

export default Player
