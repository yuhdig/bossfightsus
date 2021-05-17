namespace SpriteKind {
    export const ghost = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ..............ffffff....
        ..fc.........fccc2ff....
        ..f4c.....fffccc2ff.....
        ..f44ccccc22222222cc....
        ..f244ccc222224442b9c...
        ..cf24222222222244999c..
        .ccf2222222222222199b2c.
        fc22cc22222222b1111b222c
        f22ccccccc2222991222222f
        ffffffc222c22222222222f.
        ....ff222244c2222222ff..
        ...cf222244fffffffff....
        ...c222244ffc2f.........
        ...c2222cfffccf.........
        ...ffffffff2cf..........
        ........fff2c...........
        `, yuhdig, 50, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
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
})
function levelOne () {
    tiles.setTilemap(tilemap`level1`)
    tiles.placeOnTile(yuhdig, tiles.getTileLocation(29, 29))
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    levelTwo()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
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
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -10
    pause(2000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    levelOne()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
function levelTwo () {
    tiles.setTilemap(tilemap`level2`)
}
let projectile: Sprite = null
let mySprite: Sprite = null
let statusbar: StatusBarSprite = null
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
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(yuhdig)
statusbar.setBarBorder(1, 15)
statusbar.setLabel("HP", 15)
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    mySprite = sprites.create(img`
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
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite, value)
    tiles.setTileAt(value, sprites.dungeon.darkGroundCenter)
    animation.runImageAnimation(
    mySprite,
    [img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .....fffc1111111f.......
        ...fc111cd1111111f......
        ...f1b1b1b1111dddf......
        ...fbfbffcf11fcddf......
        ......fcf111111bbf......
        .......ccbdb1b1fcf......
        .......fffbfbfdff.......
        ........ffffffff........
        ........fffffffffff.....
        .........fffffc111cf....
        .........fffff1b1b1f....
        ..........ffffbfbfbf....
        ...........ffff.........
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ....7.fd11111111df......
        ...7..fd11111111df......
        ...7..fd11111111df......
        ...7..fddd1111dddff.....
        ...77.fbdbfddfbdbfcf....
        ...777fcdcf11fcdcfbf....
        ....77fffbdb1bdffcf.....
        ....fcb1bcffffff........
        ....f1c1c1ffffff........
        ....fdfdfdfffff.........
        .....f.f.f..............
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd111111111f......
        ......fd11111111df......
        ......fd11111111df......
        ......fcdd1111ddcff.....
        .......fbcf11fcbfbbf....
        .......ffbdb1bdffff.....
        ........fcbfbfdf........
        ........ffffffff........
        ......ffffffffff........
        .....fcb1bcffff.........
        ......ffbff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fdd111111ddf......
        ......fbdd1111dddf......
        ......fcdbfddfbdbf......
        .......fbcf11fcbfff.....
        .......ffb1111bcfbcf....
        ........fcdb1bdfbbbf....
        .......ffffffffffcf.....
        .....fcb1bcfffff........
        .....f1b1b1ffff.........
        ......ffbff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    500,
    true
    )
}
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (yuhdig.y < mySprite.y / 50 && yuhdig.x < mySprite.x / 50) {
            value.follow(yuhdig, 25)
        }
        if (yuhdig.y > mySprite.y - 50 && yuhdig.x > mySprite.x - 50) {
            value.follow(yuhdig, 25)
        }
    }
})
