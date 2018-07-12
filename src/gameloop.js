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


const isNotOutOfBounds = (e) => {
    if (e.x > 600 || e.x < 0) {
        return false
    }
    if (e.y > 800 || e.y < 0) {
        return false;
    }

    return true
}


const gameLoop = () => {
    window.requestAnimationFrame(gameLoop)

    ctx.clearRect(0, 0, 640, 480)


    currentTime = (new Date()).getTime()
    delta = (currentTime - lastTime) / 1000

    entities.map(x => x.update(input, delta)) 
    entities.map(x => x.render(ctx)) 
    entities = entities.filter(x => isNotOutOfBounds(x))
    console.log(entities.length)


    lastTime = currentTime
}

export { gameLoop, entities }
