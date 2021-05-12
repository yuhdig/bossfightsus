namespace SpriteKind {
    export const ghost = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        animation.runImageAnimation(
        yuhdig,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c c . 
            . c b b c 5 5 b b d d d d c d c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c . 
            . . c c c c c b 5 5 b c c c . . 
            . . c b b b c d 5 5 b c . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c c b 5 5 b d d d c . 
            . . . . . c d 5 5 b b c c c . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 5 5 5 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c b 5 5 b d d d c c . 
            . . . . c d 5 5 b b c c c . . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `,img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 5 5 5 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c . 
            . c c c c c b b d d d d d d c c 
            . . . c c 5 5 b 5 5 d d d d d c 
            . . . . c b 5 5 b b c c c c c c 
            . . . . c c c c c c . . . . . . 
            . . . . . c b b b c . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c c 3 3 b b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d d c c 
            . . . c b c c b 5 5 b c c c . . 
            . . . c c c d 5 5 b c . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . c c 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            c 5 5 5 5 5 1 f 5 5 5 c . . . . 
            c 5 5 5 5 5 f f 5 5 5 5 c . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . b 5 5 5 5 5 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . c c c c d 5 5 b d d c c . 
            . . c b b c c c 5 5 b c c . . . 
            . . c c c c c d 5 5 c . . . . . 
            `],
        100,
        true
        )
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, yuhdig)
    }
})
function levelOne () {
    tiles.setTilemap(tilemap`level1`)
    tiles.placeOnTile(yuhdig, tiles.getTileLocation(29, 29))
    g1 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.ghost)
    g2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.ghost)
    g3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.ghost)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    levelTwo()
})
sprites.onCreated(SpriteKind.ghost, function (sprite) {
    sprite.setImage(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `)
    sprite.setBounceOnWall(true)
    sprite.x = randint(1, 6)
    sprite.y = randint(1, 23)
    sprite.vy = 35
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        animation.runImageAnimation(
        yuhdig,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c 5 5 5 f 1 5 5 5 5 5 c 
            . . . c 5 5 5 5 f f 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
            . . c d 5 5 5 5 5 5 b 1 b b c c 
            . . c d d d 5 5 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 5 5 5 b . 
            . c c d d d d b 5 5 c b b c . . 
            c d c d d d d b b 5 5 c b b c . 
            c d d d d d d d d c c c c c c . 
            . c d d d b 5 5 d c c c c . . . 
            . . c c c b 5 5 b c c c c c . . 
            . . . . c b 5 5 d c b b b c . . 
            `,img`
            . . . . . . . c c c c c . . . . 
            . . . . . . c 5 5 5 5 5 c c . . 
            . . . . . c 5 5 f 1 5 5 5 5 c . 
            . . . . c 5 5 5 f f 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 b 1 b b c c 
            . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 b 5 5 5 5 c . 
            . . c d d d d b 5 5 c b b c . . 
            c c c d d d d b b 5 5 c b b c . 
            c d d d d d d d d c c c c c c . 
            . c d d d b 5 5 b c c c . . . . 
            . . c c c b b 5 5 d c . . . . . 
            . . . . . c c c c c c c . . . . 
            . . . . . . . c b b b c . . . . 
            `,img`
            . . . . . . . c c c c c . . . . 
            . . . . . . c 5 5 5 5 5 c c . . 
            . . . . . c 5 5 f 1 5 5 5 5 c . 
            . . . . c 5 5 5 f f 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 b 1 b b c c 
            . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 5 5 5 5 c 
            . . c d d d 5 5 5 b 5 5 5 5 c . 
            . . c d d d d b 5 5 c b b c . . 
            c c c d d d d b b 5 5 c b b c . 
            c d d d d d d d d c c c c c c . 
            . c c d d d b 5 5 b c c . . . . 
            . . . c c c b b 5 5 d c . . . . 
            . . . . . c c c c c c c . . . . 
            . . . . . . . c b b b c . . . . 
            `,img`
            . . . . . . . c c c c c . . . . 
            . . . . . . c 5 5 5 5 5 c c . . 
            . . . . . c 5 5 f 1 5 5 5 5 c . 
            . . . . c 5 5 5 f f 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 b 1 b b c c 
            . . c d 5 5 5 5 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 5 5 5 5 c 
            . . c d d d 5 5 5 b 5 5 5 5 c . 
            . . c d d d d b 5 5 c b b c . . 
            . c c d d d d b b 5 5 c b b c . 
            c c d d d d d d b b c c c c c . 
            c d d d d d 5 5 b 5 5 c c . . . 
            c c c c c c b b 5 5 b c . . . . 
            . . . . . . c c c c c c . . . . 
            . . . . . . c b b b c . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c 5 5 5 f 1 5 5 5 5 5 c 
            . . . c 5 5 5 5 f f 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 b 1 b b c c 
            . . c d 5 5 5 5 5 5 b b 3 3 c c 
            . . c d d d 5 5 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 5 5 5 b . 
            . . c d d d d b 5 5 c b b c . . 
            c c c d d d d b b 5 5 c b b c . 
            c d d d d d d d d c c c c c c . 
            c c d d d b 5 5 d c c c c . . . 
            . . c c c b 5 5 b c c b c . . . 
            . . . . . c b 5 5 d c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c 5 5 5 f 1 5 5 5 5 5 c 
            . . . c 5 5 5 5 f f 5 5 5 5 5 c 
            . . . c 5 5 5 5 5 5 5 5 5 5 5 c 
            . . c d 5 5 5 5 5 5 b 1 b b c c 
            . . c d d d 5 5 5 5 5 3 3 3 5 c 
            . . c d d d 5 5 5 5 5 5 5 5 b . 
            . . c d d d d b 5 5 c b b c . . 
            c c c d d d d b b 5 5 c b b c . 
            c d d d d d d d d c c c c c c . 
            . c c d d b 5 5 d c c c c . . . 
            . . . c c b 5 5 c c c b b c . . 
            . . . . . c 5 5 d c c c c c . . 
            `],
        100,
        true
        )
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, yuhdig)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    levelOne()
})
function levelTwo () {
    tiles.setTilemap(tilemap`level2`)
}
let g3: Sprite = null
let g2: Sprite = null
let g1: Sprite = null
let yuhdig: Sprite = null
game.showLongText("poop", DialogLayout.Bottom)
tiles.setTilemap(tilemap`level3`)
yuhdig = sprites.create(img`
    . . . . c c c c c . . . . . . . 
    . . c c 5 5 5 5 5 c . . . . . . 
    . c 5 5 5 5 1 f 5 5 c . . . . . 
    c 5 5 5 5 5 f f 5 5 5 c . . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 c . . . 
    c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . c 5 5 5 5 b 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c . . 
    . c b b c 5 5 b b d d d d c c c 
    . c c c c c c d d d d d d d d c 
    . . . . c c c b 5 5 b d d d c . 
    . . . . . c d 5 5 b b c c c . . 
    . . . . c c c c c c c . . . . . 
    . . . . c b b b c . . . . . . . 
    `, SpriteKind.Player)
levelOne()
controller.moveSprite(yuhdig, 70, 70)
scene.setBackgroundColor(9)
yuhdig.setStayInScreen(true)
scene.cameraFollowSprite(yuhdig)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(yuhdig)
statusbar.value = 1000
statusbar.setBarBorder(1, 15)
statusbar.setColor(7, 2)
statusbar.setLabel("HP", 15)
