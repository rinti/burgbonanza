class Bullet {
    constructor(x, y, tx, ty) {
        this.radius = 5
        this.x = x 
        this.y = y
        this.tx = tx
        this.ty = ty
        this.speed = 10
        this.rot = Math.atan2(this.ty - this.y, this.tx - this.x)
    }

    update(input, delta) {
        this.x += 1 * Math.cos(this.rot) * this.speed
        this.y += 1 * Math.sin(this.rot) * this.speed
    }

    render(ctx) {
        const { x, y, radius } = this
        
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, 2*Math.PI)
        ctx.stroke()
    }
}

export default Bullet
