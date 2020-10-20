namespace SpriteKind {
    export const Boos = SpriteKind.create()
}
let Boos_life = 0
let big_boos: Sprite = null
let spaceship = sprites.create(img`
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 7 7 7 4 4 7 4 . . . . . 
    . . . 7 4 7 4 4 4 7 4 4 4 . . . 
    . . . 7 4 7 7 4 4 4 7 4 4 4 . . 
    . . . 7 7 4 4 4 4 7 7 7 7 7 . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . . 7 7 1 7 7 7 . . . . . . 
    . . . 7 7 7 1 7 7 1 7 7 7 . . . 
    . . 7 7 7 7 1 1 1 1 7 7 7 7 . . 
    . . 4 4 7 1 4 1 1 4 1 7 4 4 . . 
    . . 4 4 4 1 1 1 1 1 1 4 4 4 . . 
    . . 4 4 1 1 1 1 1 1 1 1 4 4 . . 
    . . . . 1 1 1 . . 1 1 1 . . . . 
    . . . 7 7 7 . . . . 7 7 7 . . . 
    . . 7 7 7 7 . . . . 7 7 7 7 . . 
    `, SpriteKind.Player)
spaceship.y = scene.screenHeight() - 10
controller.moveSprite(spaceship, 60, 10)
spaceship.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
info.setLife(3)
let astro_list = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    . . . . 3 3 . . 3 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . 3 . . . . . 3 3 3 . . . 
    . . . . 3 . 3 3 3 3 3 . 3 . . . 
    . . . 3 3 3 . . . . 3 . . 3 . . 
    . . . 3 3 3 3 . . . 3 . . 3 . . 
    . . . 3 . . . 3 3 3 3 . . 3 . . 
    . . . 3 . . . . . . . . . 3 . . 
    . . . . 3 3 3 3 . . . . . 3 . . 
    . . . . . . . . 3 3 . . . 3 . . 
    . . . . . . . . . . 3 3 3 3 . . 
    . . . . . . . . . . . . 3 3 . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 7 7 7 
    . . . . . . . . . . 7 7 7 . . 7 
    . . . . . . . 7 7 7 . . . . . 7 
    . . . . . . . . . . . . . . 7 . 
    . . . . . . . . . . . . . 7 . . 
    . . . . . . . . . . . . . 7 . . 
    . . . . . . . . . . . . 7 . . . 
    . . . . . . . . . . . 7 . . . . 
    . . . . . . . . . . 7 . . . . . 
    . . . . . . . . . 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . c . . . . . . . . . . . 
    . . . . c c . . . . . . . . . . 
    . . . c . c c c . . . . . . . . 
    . . . c . . . . c c c c c . . . 
    . . . . c . . . . . . . . c c c 
    . . . . c c . . . . . . . . . c 
    . . . . . c . . . . . . . . c . 
    . . . . . c . . c c . . . . c . 
    . . . . . c c c c c . . c c . . 
    . . . c c c c . c . c c . . . . 
    . . c . . . . . c c . . . . . . 
    . . c . c c c c . . . . . . . . 
    . . c c c . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
let astro_speed = 0
let astro_pos = 0
game.onUpdate(function () {
    if (true) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
game.onUpdateInterval(600000, function () {
    big_boos = sprites.create(img`
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        `, SpriteKind.Boos)
    Boos_life = 10
    big_boos.y = -16
    big_boos.vy = 20
})
