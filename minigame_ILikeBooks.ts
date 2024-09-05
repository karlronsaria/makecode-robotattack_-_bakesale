namespace ILikeBooksGame {
    const NUM_ENEMIES = 4

    const Kind = {
        _START: SpriteKind.create(),
        Player: SpriteKind.create(),
        Enemy: SpriteKind.create(),
        Projectile: SpriteKind.create(),
        Neutral: SpriteKind.create(),
        Missile: SpriteKind.create(),
        _END: SpriteKind.create(),
    }

    let intervals: number[] = null
    let mySprite: Sprite = null
    let freakouts: number = 0

    let _onA: () => void
    let _onLifeZero: () => void
    let _callback: (w: boolean) => void

    function nonZeroRand(num: number) {
        return num * (2 * randint(0, 1) - 1)
    }

    function intro() {
        game.splash("Lesson Time!", "Healty Living")
        game.splash("Internet chungoids", "have entered the domicile")
        game.splash("Press 'A'")
        game.splash("And tell them to", "read a book!")
    }

    function furnishHouse() {
        tiles.placeOnTile(sprites.create(img`
            .........cccc..
            ........c3555c.
            ..ccccccc35553c
            .c555553c35553c
            c3355555c35553c
            c3333333c35553c
            c33cccccc35553c
            ccc35555c35553c
            .c355555c35553c
            .c355555c35553c
            .c355555c35553c
            .c355555c35553c
            .c355555c35553c
            .c355555c35553c
            .c355555c35553c
            .c355555c33553c
            .cccccccc33333c
            .c555553c33333c
            c3355555c33333c
            c3333333c33333c
            c3333333c33333c
            c3333333c33333c
            cccccccccccccc.
            .cbbc.....cbbc.
            `, Kind.Neutral), tiles.getTileLocation(9, 3))
        tiles.placeOnTile(sprites.create(img`
            .........cccc..
            ........c3555c.
            ..ccccccc35553c
            .c555553c35553c
            c3355555c35553c
            c3333333c35553c
            c33cccccc35553c
            ccc35555c35553c
            .c355555c35553c
            .c355555c35553c
            .c355555c35553c
            .c355555c35553c
            .c355555c35553c
            .c355555c35553c
            .c355555c35553c
            .c355555c33553c
            .cccccccc33333c
            .c555553c33333c
            c3355555c33333c
            c3333333c33333c
            c3333333c33333c
            c3333333c33333c
            cccccccccccccc.
            .cbbc.....cbbc.
            `, Kind.Neutral), tiles.getTileLocation(9, 5))
        tiles.placeOnTile(sprites.create(img`
            ..3b3b3b3b3b3b3b3b3b3b3b3b3b3b..
            .3dd3b3b3b3b3b3b3b3b3b3b3b3bdd3.
            bbdd3dddddddddddddddddddddd3ddbb
            b333dd33333333333333333333dd333b
            bbbdd3333333333333333333333ddbbb
            b33d333d3333333d3333333d3333d33b
            bbbd333333333333333333333333dbbb
            b33d333333333333333333333333d33b
            bbbd333333333333333333333333dbbb
            b33d3333333d3333333d33333333d33b
            bbbd333333333333333333333333dbbb
            b33d333333333333333333333333d33b
            bbbd333333333333333333333333dbbb
            b33d333d3333333d3333333d3333d33b
            bbbd333333333333333333333333dbbb
            b33d333333333333333333333333d33b
            bbbd333333333333333333333333dbbb
            b33d3333333d33333333d3333333d33b
            bbbdd3333333333333333333333ddbbb
            b333dd33333333333333333333dd333b
            bbdd3dddddddddddddddddddddd3ddbb
            b3dd3b3b3b3b3b3b3b3b3b3b3b3bdd3b
            .bbb3b3b3b3b3b3b3b3b3b3b3b3b3bb.
            ...bbbbbbbbbbbbbbbbbbbbbbbbbb...
            `, Kind.Neutral), tiles.getTileLocation(6, 4))
        tiles.placeOnTile(sprites.create(img`
            .cccccccccccccc.
            cb777777777777bc
            c77777777777777c
            c77777777777777c
            c77777777777777c
            c77777777777777c
            c77777777777777c
            c77777777777777c
            c76666666666667c
            c66666666666666c
            c67777777777776c
            c6c666c66c666c6c
            f6c666cddc666c6f
            f6c6666cc6666c6f
            f6cccccccccccc6f
            f66666666666666f
            f67777777777776f
            f6c666c66c666c6f
            f6c666cddc666c6f
            f6c6666cc6666c6f
            f6cccccccccccc6f
            f66666666666666f
            f6ffffffffffff6f
            ffffffffffffffff
            `, Kind.Neutral), tiles.getTileLocation(7, 1))
        tiles.placeOnTile(sprites.create(img`
            .cccccccccccccccccccccc.
            cbddddddddddddddddddddbc
            cddddddddddddddddddddddc
            cddddddddddddddddddddddc
            cddddddddddddddddddddddc
            cddddddddddddddddddddddc
            cddddddddddddddddddddddc
            cbddddddddddddddddddddbc
            ccbbbbbbbbbbbbbbbbbbbbcc
            ccffffffffffffffffffffcc
            cbcc33c6c44c3c7c66c3ccbc
            cbcc33c6c44c3c7c66c3ccbc
            fbcc33c6c44ccc7c66c3ccbf
            fdccccccccccccccccccccdf
            fdcbbddddddddddddddbbcdf
            fdffffffffffffffffffffdf
            fdccc6c33c4c6c44c3c7ccdf
            fdccc6c33c4c6c44c3c7ccdf
            fdccc6c33ccc6c44ccc7ccdf
            fdccccccccccccccccccccdf
            fdcbbddddddddddddddbbcdf
            fdcbbddddddddddddddbbcdf
            fdffffffffffffffffffffdf
            ffffffffffffffffffffffff
            `, Kind.Neutral), tiles.getTileLocation(5, 1))
    }

    function throwMissile(sprite: Sprite) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Magic, sprite).value = 0
        const missile = sprites.createProjectileFromSprite([img`
            .cccccccccccccc.
            cbddddddddddddbc
            cddddddddddddddc
            cddddddddddddddc
            cddddddddddddddc
            cddddddddddddddc
            cddddddddddddddc
            cbddddddddddddbc
            ccbbbbbbbbbbbbcc
            ccffffffffffffcc
            cbc44c7c66c3ccbc
            cbc44c7c66c3ccbc
            fbc44c7c66c3ccbf
            fdccccccccccccdf
            fdcbbddddddbbcdf
            fdffffffffffffdf
            fdcc4c44c3c7ccdf
            fdcc4c44c3c7ccdf
            fdcccc44ccc7ccdf
            fdccccccccccccdf
            fdcbbddddddbbcdf
            fdcbbddddddbbcdf
            fdffffffffffffdf
            ffffffffffffffff
            `, img`
            .cccccccccccccccccccccc.
            cbddddddddddddddddddddbc
            cddddddddddddddddddddddc
            cddddddddddddddddddddddc
            cddddddddddddddddddddddc
            cddddddddddddddddddddddc
            cddddddddddddddddddddddc
            cbddddddddddddddddddddbc
            ccbbbbbbbbbbbbbbbbbbbbcc
            ccffffffffffffffffffffcc
            cbcc33c6c44c3c7c66c3ccbc
            cbcc33c6c44c3c7c66c3ccbc
            fbcc33c6c44ccc7c66c3ccbf
            fdccccccccccccccccccccdf
            fdcbbddddddddddddddbbcdf
            fdffffffffffffffffffffdf
            fdccc6c33c4c6c44c3c7ccdf
            fdccc6c33c4c6c44c3c7ccdf
            fdccc6c33ccc6c44ccc7ccdf
            fdccccccccccccccccccccdf
            fdcbbddddddddddddddbbcdf
            fdcbbddddddddddddddbbcdf
            fdffffffffffffffffffffdf
            ffffffffffffffffffffffff
            `]._pickRandom(), sprite, 60, -150)
        missile.setKind(Kind.Missile)
        missile.ay = 150
        missile.setFlag(SpriteFlag.GhostThroughWalls, true)
        missile.setFlag(SpriteFlag.AutoDestroy, false)
        sprite.sayText([
            "GET              READ!!",
            "HEALTHY          LIVING!!",
            "READ A           BOOK!!",
            "HAVE                 SOME           DIGESTS!!",
        ]._pickRandom(), 2000, false)
        animation.runMovementAnimation(
            sprite,
            animation.animationPresets(animation.shake),
            200,
            false,
        )
        timer.after(1000, function () {
            startFreakout()
        })
        timer.after(2000, function () {
            sprites.destroy(missile, effects.ashes, 500)
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
            scene.cameraShake(32, 500)
        })
    }

    function newEnemy() {
        const myEnemy = sprites.create(img`
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
            `, Kind.Enemy)
        tiles.placeOnTile(myEnemy, tiles.getTileLocation(randint(6, 9), randint(3, 7)))
        myEnemy.setStayInScreen(true)
    }

    function startFreakout() {
        freakouts++

        for (const value of sprites.allOfKind(Kind.Enemy)) {
            value.setVelocity(randint(75, 100), nonZeroRand(100))
            value.sayText("AAAAAH!", 500, false)
            timer.after(1000, function () {
                value.setVelocity(0, 0)
            })
        }
        timer.after(2000, function () {
            sprites.allOfKind(Kind.Enemy)._pickRandom().sayText([
                "ARE YOU                    INSANE!?",
                "WHAT                       IS WRONG                      WITH YOU!?",
                "THIS                       IS NUTS!",
                "I DON'T                    WANT TO                       DIE!"
            ]._pickRandom(), 2000, false)
        })
        if (freakouts >= 3) {
            timer.after(3000, function () {
                game.showLongText("Stop!", DialogLayout.Bottom)
                game.showLongText("Okay. You like books. Haha. Umm.", DialogLayout.Bottom)
                game.showLongText("Lesson over.", DialogLayout.Bottom)
                game.showLongText("Please leave.", DialogLayout.Bottom)
                stop(true)
            })
        }
    }

    function init() {
        freakouts = 0
        intervals = null
    }

    function newPlayer(): Sprite {
        const sprite = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, Kind.Player)
        sprite.setStayInScreen(true)
        controller.moveSprite(sprite, 0, 100)
        tiles.placeOnTile(sprite, tiles.getTileLocation(1, 4))
        const statusbar: StatusBarSprite
            = statusbars.create(20, 4, StatusBarKind.Magic)
        statusbar.attachToSprite(sprite)
        statusbar.max = 5
        statusbar.value = 0
        return sprite
    }

    function destroyAllSprites() {
        for (let kind = Kind._START; kind <= Kind._END; ++kind) {
            sprites.destroyAllSpritesOfKind(kind)
        }
    }

    function stopIntervals() {
        for (const interval of intervals) {
            clearInterval(interval)
        }
    }

    function startIntervals(): number[] {
        return [
            setInterval(
                () => {
                    const temp: StatusBarSprite =
                        statusbars.getStatusBarAttachedTo(
                            StatusBarKind.Magic,
                            mySprite,
                        )

                    if (temp && temp.value < temp.max) {
                        temp.value += 1
                    }

                    if (freakouts >= 1) {
                        return
                    }

                    for (const value of sprites.allOfKind(Kind.Enemy)) {
                        if (Math.percentChance(30)) {
                            value.setVelocity(
                                nonZeroRand(35),
                                nonZeroRand(35),
                            )

                            timer.after(1000, function () {
                                value.setVelocity(0, 0)
                            })
                        }
                    }
                },
                1000,
            ),
            setInterval(
                () => {
                    if (freakouts >= 1) {
                        return
                    }

                    for (const value of sprites.allOfKind(Kind.Enemy)) {
                        if (Math.percentChance(80)) {
                            continue
                        }

                        const projectile: Sprite =
                            sprites.createProjectileFromSprite([
                                img`
                            ........................
                            ........................
                            ffffffffffffffffffffff..
                            f11111111111111111111f..
                            f1f1f11f111f1f11f11f1f..
                            f1f1f1f1f11f1f1f1f1f1f..
                            f1fff1fff11fff1fff1f1f..
                            f1f1f1f1f11f1f1f1f1f1f..
                            f1f1f1f1f11f1f1f1f111f..
                            f1f1f1f1f11f1f1f1f1f1f..
                            f11111111111111111111f..
                            ffffffffffffffffffffff..
                            ........................
                            ........................
                            ........................
                            ........................
                            `,
                                img`
                            ........................
                            ........................
                            fffffffffffffffff.......
                            f111111111111111f.......
                            f1f111ff11f111f1f.......
                            f1f111f1f1f111f1f.......
                            f1f111f1f1f111f1f.......
                            f1f111f1f1f111f1f.......
                            f1f111f1f1f11111f.......
                            f1fff11ff1fff1f1f.......
                            f111111111111111f.......
                            fffffffffffffffff.......
                            ........................
                            ........................
                            ........................
                            ........................
                            `,
                                img`
                            ..................................
                            ..................................
                            fffffffffffffffffffffffffffffffff.
                            f1111111111111111111111111111111f.
                            f11ff1f1f1f1f1ff111ff1f1f11ff1f1f.
                            f1f111f1f1f1f1f1f1f111f1f1f111f1f.
                            f1f111fff1f1f1f1f1f111f1f1ff11f1f.
                            f1f111f1f1f1f1f1f1f1f1f1f11ff1f1f.
                            f1f111f1f1f1f1f1f1f1f1f1f111f111f.
                            f11ff1f1f11ff1f1f11ff11ff1ff11f1f.
                            f1111111111111111111111111111111f.
                            fffffffffffffffffffffffffffffffff.
                            ..................................
                            ..................................
                            ..................................
                            ..................................
                            `,
                                img`
                            ........................
                            ........................
                            fffffffffffffffffffff...
                            f1111111111111111111f...
                            f1f111f1fff1fff1ff11f...
                            f1f111f1f111f111f1f1f...
                            f1f111f1ff11ff11ff11f...
                            f1f1f1f1f111f111f1f1f...
                            f1f1f1f1f111f111f1f1f...
                            f11ffff1fff1fff1ff11f...
                            f1111111111111111111f...
                            fffffffffffffffffffff...
                            ........................
                            ........................
                            ........................
                            ........................
                            `
                            ]._pickRandom(), value, -50, 0)
                        projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
                        projectile.setFlag(SpriteFlag.AutoDestroy, true)
                        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                        value.sayText("Haha!", 200, false)
                    }
                },
                500,
            ),
        ]
    }

    function resetHandlers() {
        controller.A.onEvent(ControllerButtonEvent.Pressed, _onA)
        info.onLifeZero(_onLifeZero)
    }

    function stop(win: boolean) {
        stopIntervals()
        destroyAllSprites()
        resetHandlers()
        _callback(win)
    }

    export function start(
        onA: () => void,
        onLifeZero: () => void,
        callback: (w: boolean) => void,
    ) {
        _onA = onA
        _onLifeZero = onLifeZero
        _callback = callback

        scene.setBackgroundColor(0)
        tiles.setCurrentTilemap(Asset.Tilemap.EMPTY_LEVEL)
        intro()
        info.setLife(10)
        tiles.setCurrentTilemap(Asset.Tilemap.HEALTHY_LIVING_01)
        mySprite = newPlayer()
        furnishHouse()

        for (let index = 0; index < NUM_ENEMIES; index++) {
            newEnemy()
        }

        intervals = startIntervals()

        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            const temp: StatusBarSprite =
                statusbars.getStatusBarAttachedTo(
                    StatusBarKind.Magic,
                    mySprite,
                )

            if (temp.value == temp.max) {
                throwMissile(mySprite)
            }
        })

        info.onLifeZero(() => stop(false))

        sprites.onOverlap(Kind.Player, Kind.Projectile, function (sprite, otherSprite) {
            sprites.destroy(otherSprite, effects.smiles, 200)
            info.changeLifeBy(-1)
            music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
        })
    }
}
