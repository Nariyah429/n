let mySprite: Sprite = null
let myEnemy: Sprite = null
let Nariyah = sprites.create(img`
    . . . . . . . . b b b b . . . . 
    . . . . b b b b 3 3 3 3 b . . . 
    . c c b b 1 1 3 3 3 3 3 b b . . 
    c c 3 3 1 1 3 3 3 3 3 1 1 b . . 
    c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
    f b b c c c 3 3 3 3 3 3 3 c . . 
    f b c c c b b b b 3 3 3 3 3 c . 
    f b c c d d d d d b b 3 3 3 3 c 
    . c c d c d d d d d d b c 3 3 c 
    . c b d c d d d c d d c c c 3 f 
    . f d d d d d c d d d c c c b f 
    . f d b b b d d d d d c c c b f 
    . . c d d d d d d d b c b b f f 
    . . f f d d d d c c b f f f f . 
    . f f b b f f c c b d d b f . . 
    . f b b b f f . . b d d d f . . 
    `, SpriteKind.Player)
Nariyah.setVelocity(50, 50)
Nariyah.sayText("hello", 500, false)
myEnemy.follow(mySprite)
