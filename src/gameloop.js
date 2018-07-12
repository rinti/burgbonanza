import Player from './entities/Player'
import { InputHandler } from './input'


let lastTime = (new Date()).getTime(),
    canvas = document.getElementById('game'),
    cw = canvas.width,
    ch = canvas.height,
    ctx = canvas.getContext("2d"),
    fps = 60,
    delta = 0,
    currentTime = 0,
    entities = [new Player()],
    input = new InputHandler()

const gameLoop = () => {
    window.requestAnimationFrame(gameLoop)

    ctx.clearRect(0, 0, cw, ch)
    ctx.beginPath()

    currentTime = (new Date()).getTime()
    delta = (currentTime - lastTime) / 1000

    entities.map(x => x.update(input, delta)) 

    entities.map(x => x.render(ctx)) 

    lastTime = currentTime
}

export default gameLoop
