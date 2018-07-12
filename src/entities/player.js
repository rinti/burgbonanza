class Player {
    constructor() {
        this.width = 40
        this.height = 40
        this.x = 20
        this.y = 20
    }

    update(delta) {
        console.log("Updating playah!!", delta)
    }

    render(ctx) {
        const { x, y, width, height } = this
        
        ctx.rect(x, y, width, height)
        ctx.stroke()
    }
}

export default Player
