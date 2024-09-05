namespace StrayCatsGame {
    const FLOOR_TILE: Image = Asset.Image.EMPTY_TILE
    const NUM_CATS = 12
    const NUM_DOORS = 4
    const MAX_ANNOYANCES = 5
    const MY_SPEED = 50
    const ENEMY_SPEED = 35

    const Kind = {
        _START: SpriteKind.create(),
        Player: SpriteKind.create(),
        Enemy: SpriteKind.create(),
        Collectible: SpriteKind.create(),
        Attack: SpriteKind.create(),
        Employer: SpriteKind.create(),
        Neutral: SpriteKind.create(),
        _END: SpriteKind.create(),
    }

    let catReturnQueue: Sprite[] = []
    let intervals: number[] = []
    let melissa: Sprite = null
    let daddysTalking: boolean = false
    let annoyances: number = 0
    let catFriends: number = 0
    let gets: number = 0
    let running: boolean = false

    let prevLife: number = 0
    let prevScore: number = 0
    let prevBgColor: number = 0
    let prevBgImage: Image = null
    let _onAPressed: () => void
    let _onBPressed: () => void
    let _onLifeZero: () => void
    let _callback: (w: boolean, s: number, l: number) => void

    function nearestEnemy(sprite: Sprite): Sprite {
        let shortestDistance: number = Infinity
        let nearestSprite: Sprite = sprite

        for (const value of sprites.allOfKind(Kind.Enemy)) {
            const tempNum = squareDistance(sprite, value)

            if (tempNum < shortestDistance) {
                shortestDistance = tempNum
                nearestSprite = value
            }
        }

        return nearestSprite
    }

    function startAnnoyedSequence() {
        let sprite: Sprite = null

        time_sequence([
            [500, () => {
                daddysTalking = true
                controller.moveSprite(melissa, 0, 0)
                sprite = sprites.create(img`
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111f11bf.......
                ......fbd111ff11f.......
                ......fdd1111ff1df......
                ......fddd11f1ffdf......
                ......fddddf3fff2f......
                ......fddddf2f112f......
                ......fbdddf2f1f3f......
                ......ffbbdf2f1fdf......
                .......fcbbd2ff1bf......
                .......fffbddcfffff.....
                .......ffffcfbbb1bcf....
                ......ffffffffcd1b1f....
                ...ffffffffff..fdfdf....
                .....ffffff.....f.f.....
                ........................
                ........................
                ........................
                ........................
                ........................
                `, Kind.Neutral)
                sprite.setPosition(melissa.x - 20, melissa.y)
                melissa.setImage(img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 6 2 5 5 6 f . . . . . 
                . . . f 6 6 6 6 1 6 6 f . . . . 
                . . . f 6 6 6 6 6 1 6 f . . . . 
                . . . f d f d 6 6 6 1 f . . . . 
                . . . f d f d 6 6 6 6 f f . . . 
                . . . f d 3 d d 6 6 6 f 6 f . . 
                . . . . f d d d f f 6 f f . . . 
                . . . . . f f 5 3 f 6 6 6 f . . 
                . . . . f 5 3 3 f f f f f . . . 
                . . . . f 3 3 f d f . . . . . . 
                . . . . . f 3 f d f . . . . . . 
                . . . . f 3 5 3 f d f . . . . . 
                . . . . f f 3 3 f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `)
                game.showLongText("Listen, you little punk!", DialogLayout.Bottom)
                game.showLongText("You KNOW you're not supposed to do that.", DialogLayout.Bottom)
                game.showLongText("If the button didn't work the first time,", DialogLayout.Bottom)
                game.showLongText("then what made you think it would work THE NEXT FOUR TIMES!", DialogLayout.Bottom)
            }],
            [1000, () => {
                sprite.sayText("STOP", 1000, false)
                scene.cameraShake(8, 500)
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
            }],
            [1000, () => {
                sprite.sayText("PRESSING", 1000, false)
                scene.cameraShake(10, 500)
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
            }],
            [1000, () => {
                sprite.sayText("THE BUTTON!", 1000, false)
                scene.cameraShake(12, 500)
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
            }],
            [1000, () => {
                sprite.sayText("YOU", 1000, false)
                scene.cameraShake(14, 500)
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
            }],
            [1000, () => {
                sprite.sayText("USELESS", 1000, false)
                scene.cameraShake(16, 500)
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
            }],
            [1000, () => {
                sprite.sayText("TOOL!!!", 1000, false)
                scene.cameraShake(20, 2000)
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.LoopingInBackground)
            }],
            [3000, () => {
                music.stopAllSounds()
                sprites.destroy(sprite, effects.fire, 500)
                music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
                melissa.setImage(img`
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
                    `)
                controller.moveSprite(melissa, MY_SPEED, MY_SPEED)
            }],
            [500, () => daddysTalking = false],
        ])
    }

    function startIntro() {
        for (const value of [
            "Stray Cats!",
            `Collect all ${NUM_CATS} cats!`,
            "And sic them with 'A'",
            "Call them back with 'B'",
            "Only then",
            "can you leave",
            "the maze!",
        ]) {
            game.splash(value)
        }
    }

    function squareDistance(
        sprite: Sprite,
        otherSprite: Sprite,
    ): number {
        const x = sprite.tilemapLocation().column - otherSprite.tilemapLocation().column
        const y = sprite.tilemapLocation().row - otherSprite.tilemapLocation().row
        return x * x + y * y
    }

    function newEnemy() {
        tiles.placeOnRandomTile(sprites.create(img`
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
        `, Kind.Enemy), sprites.dungeon.doorOpenNorth)
    }

    export function isRunning() {
        return running
    }

    function init() {
        running = true
        intervals = []
        catReturnQueue = []
        melissa = null
        daddysTalking = false
        annoyances = 0
        catFriends = 0
        gets = 0
        info.setLife(3)
        info.setScore(0)
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
                    if (daddysTalking) {
                        for (const value of sprites.allOfKind(Kind.Enemy)) {
                            scene.followPath(value, [
                                value.tilemapLocation(),
                                value.tilemapLocation(),
                            ], 0)
                        }

                        return
                    }

                    for (const value of sprites.allOfKind(Kind.Enemy)) {
                        my.followPath(value, melissa.tilemapLocation(), ENEMY_SPEED)
                    }
                },
                1000,
            ),
            setInterval(
                () => {
                    if (catReturnQueue.length === 0) {
                        return
                    }

                    const sprite = catReturnQueue.shift()
                    sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                    sprite.setKind(Kind.Collectible)
                    sprite.follow(melissa, 100)
                },
                4000,
            ),
        ]
    }

    function setHandlers() {
        info.onLifeZero(() => stop(false))
        sprites.onDestroyed(Kind.Enemy, (sprite) => {
            if (!running) {
                return
            }

            newEnemy()
        })

        sprites.onOverlap(Kind.Player, Kind.Collectible, (sprite, otherSprite) => {
            sprites.destroy(otherSprite)
            info.changeScoreBy(1)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            const newCatFriends = info.score()

            if (newCatFriends > catFriends) {
                catFriends = newCatFriends
                newEnemy()
            }
        })
        sprites.onOverlap(Kind.Attack, Kind.Enemy, (sprite, otherSprite) => {
            sprites.destroy(otherSprite)
            sprite.setKind(Kind.Collectible)
            sprite.follow(melissa, 100)
            music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
            gets += 1
            annoyances = 0
        })
        sprites.onOverlap(Kind.Player, Kind.Employer, (sprite, otherSprite) => {
            if (info.score() < NUM_CATS) {
                game.showLongText("You haven't found enough cats.", DialogLayout.Bottom)
                game.showLongText("I'm sending you back.", DialogLayout.Bottom)
                tiles.placeOnRandomTile(melissa, sprites.dungeon.collectibleInsignia)
                return
            }

            game.showLongText("That's all the cats.", DialogLayout.Bottom)
            game.showLongText("I guess you're done.", DialogLayout.Bottom)
            info.setScore(gets)
            stop(true)
        })
        sprites.onOverlap(Kind.Player, Kind.Enemy, (sprite, otherSprite) => {
            tiles.placeOnRandomTile(sprite, sprites.dungeon.collectibleInsignia)
            info.changeLifeBy(-1)
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
            scene.cameraShake(4, 500)
        })
        scene.onHitWall(Kind.Player, (sprite, location) => {
            scene.cameraShake(12, 500)
            sprite.sayText("AARGH! A WALL!", 500, false)
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        })
        controller.B.onEvent(ControllerButtonEvent.Pressed, () => {
            animation.runMovementAnimation(
                melissa,
                animation.animationPresets(animation.shake),
                25, false,
            )
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            timer.after(250, () => melissa.sayText("Come back!", 500, true))

            while (catReturnQueue.length > 0) {
                const sprite = catReturnQueue.shift()
                sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                sprite.setKind(Kind.Collectible)
                sprite.follow(melissa, 100)
            }

            catReturnQueue = []

            for (const sprite of sprites.allOfKind(Kind.Attack)) {
                sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                sprite.setKind(Kind.Collectible)
                sprite.follow(melissa, 100)
            }
        })
        controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
            if (info.score() > 0) {
                const sprite = sprites.create(img`
                e e e . . . . e e e . . . . 
                c d d c . . c d d c . . . . 
                c b d d f f d d b c . . . . 
                c 3 b d d b d b 3 c . . . . 
                f b 3 d d d d 3 b f . . . . 
                e d d d d d d d d e . . . . 
                e d f d d d d f d e . b f b 
                f d d f d d f d d f . f d f 
                f b d d b b d d 2 f . f d f 
                . f 2 2 2 2 2 2 b b f f d f 
                . f b d d d d d d b b d b f 
                . f d d d d d b d d f f f . 
                . f d f f f d f f d f . . . 
                . f f . . f f . . f f . . . 
                `, Kind.Attack)
                tiles.placeOnTile(sprite, melissa.tilemapLocation())
                sprite.follow(nearestEnemy(melissa), 100)
                animation.runImageAnimation(
                    sprite,
                    [img`
                    e e e . . . . e e e . . . .
                    c d d c . . c d d c . . . .
                    c b d d f f d d b c . . . .
                    c 3 b d d b d b 3 c . . . .
                    f b 3 d d d d 3 b f . . . .
                    e d d d d d d d d e . . . .
                    e d f d d d d f d e . b f b
                    f d d f d d f d d f . f d f
                    f b d d b b d d 2 f . f d f
                    . f 2 2 2 2 2 2 b b f f d f
                    . f b d d d d d d b b d b f
                    . f d d d d d b d d f f f .
                    . f d f f f d f f d f . . .
                    . f f . . f f . . f f . . .
                    `, img`
                    . . . . . . . . . . . . . . 
                    e e e . . . . e e e . . . . 
                    c d d c . . c d d c . . . . 
                    c b d d f f d d b c . . . . 
                    c 3 b d d b d b 3 c . . . . 
                    f b 3 d d d d 3 b f . . . . 
                    e d d d d d d d d e . . . . 
                    e d f d d d d f d e b f b . 
                    f d d f d d f d d f f d f . 
                    f b d d b b d d 2 b f d f . 
                    . f 2 2 2 2 2 2 d b d b f . 
                    . f d d d d d d d f f f . . 
                    . f d b d f f f d f . . . . 
                    . . f f f f . . f f . . . . 
                    `, img`
                    . . . . . . . . . . . . . . 
                    e e e . . . . e e e . . . . 
                    c d d c . . c d d c . . . . 
                    c b d d f f d d b c . . . . 
                    c 3 b d d b d b 3 c . . . . 
                    f b 3 d d d d 3 b f . . . . 
                    e d d d d d d d d e . . . . 
                    e d f d d d d f d e . b f b 
                    f d d f d d f d d f . f d f 
                    f b d d b b d d 2 b f f d f 
                    . f 2 2 2 2 2 2 d b b d b f 
                    . f d d d d d d d f f f f . 
                    . . f d b d f d f . . . . . 
                    . . . f f f f f f . . . . . 
                    `],
                    100,
                    true,
                )
                music.play(
                    music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear),
                    music.PlaybackMode.InBackground,
                )
                info.changeScoreBy(-1)
                catReturnQueue.push(sprite)

                time_sequence([
                    [7000, () =>
                        sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
                    ],
                    [7000, () => {
                        sprite.setKind(Kind.Collectible)
                        sprite.follow(melissa, 100)
                    }],
                ])

                return
            }

            annoyances++
            scene.cameraShake(8, 200)
            music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)

            timer.after(500, () => {
                melissa.sayText([
                    "Ow! Quit it.",
                    "Ow! Stop!",
                    "OW! I can't do that!",
                ]._pickRandom(), 500, false)

                if (annoyances === MAX_ANNOYANCES) {
                    annoyances = 0
                    startAnnoyedSequence()
                }
            })
        })
    }

    function resetHandlers() {
        controller.A.onEvent(ControllerButtonEvent.Pressed, _onAPressed)
        controller.B.onEvent(ControllerButtonEvent.Pressed, _onBPressed)
        info.onLifeZero(_onLifeZero)
    }

    function stop(win: boolean) {
        running = false
        stopIntervals()
        resetHandlers()
        destroyAllSprites()

        const score = info.score()
        const life = info.life()

        info.setScore(prevScore)
        info.setLife(prevLife)

        _callback(win, score, life)

        scene.setBackgroundColor(prevBgColor)
        scene.setBackgroundImage(prevBgImage)
    }

    export function start(
        onAPressed: () => void,
        onBPressed: () => void,
        onLifeZero: () => void,
        callback: (w: boolean, s: number, l: number) => void,
    ): boolean {
        if (running) {
            return false
        }

        prevLife = info.life()
        prevScore = info.score()
        prevBgColor = scene.backgroundColor()
        prevBgImage = scene.backgroundImage()
        _onAPressed = onAPressed
        _onBPressed = onBPressed
        _onLifeZero = onLifeZero
        _callback = callback

        startIntro()
        init()

        const tilemaps = [
            tilemap`strayCats01`,
            tilemap`strayCats02`,
            tilemap`strayCats03`,
            tilemap`strayCats04`,
            tilemap`strayCats05`,
            tilemap`strayCats06`,
            tilemap`strayCats07`,
            tilemap`strayCats08`,
            tilemap`strayCats09`,
            tilemap`strayCats10`,
        ]

        tiles.setCurrentTilemap(tilemaps._pickRandom())

        for (let index = 0; index < NUM_DOORS; index++) {
            tiles.setTileAt(
                tiles
                    .getTilesByType(FLOOR_TILE)
                    ._pickRandom(),
                sprites
                    .dungeon
                    .doorOpenNorth,
            )
        }

        tiles.setTileAt(
            tiles
                .getTilesByType(FLOOR_TILE)
                ._pickRandom(),
            sprites
                .dungeon
                .collectibleInsignia,
        )

        tiles.placeOnRandomTile(
            sprites.create(
                Asset.Image.StrayCats.MANAGER,
                Kind.Employer,
            ),
            FLOOR_TILE,
        )
        
        melissa = sprites.create(img`
            . . . . . f f 4 4 f f . . . . .
            . . . . f 5 4 5 5 4 5 f . . . .
            . . . f e 4 5 5 5 5 4 e f . . .
            . . f b 3 e 4 4 4 4 e 3 b f . .
            . . f 3 3 3 3 3 3 3 3 3 3 f . .
            . f 3 3 e b 3 e e 3 b e 3 3 f .
            . f 3 3 f f e e e e f f 3 3 f .
            . f b b f b f e e f b f b b f .
            . f b b e 1 f 4 4 f 1 e b b f .
            f f b b f 4 4 4 4 4 4 f b b f f
            f b b f f f e e e e f f f b b f
            . f e e f b d d d d b f e e f .
            . . e 4 c d d d d d d c 4 e . .
            . . e f b d b d b d b b f e . .
            . . . f f 1 d 1 d 1 d f f . . .
            . . . . . f f b b f f . . . . .
        `, Kind.Player)
        controller.moveSprite(melissa, MY_SPEED, MY_SPEED)
        scene.cameraFollowSprite(melissa)
        tiles.placeOnRandomTile(melissa, sprites.dungeon.collectibleInsignia)

        for (const value of tiles.getTilesByType(sprites.dungeon.doorOpenNorth)) {
            tiles.placeOnTile(sprites.create(img`
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
            `, Kind.Enemy), value)
        }

        for (let index = 0; index < NUM_CATS; index++) {
            const sprite: Sprite = sprites.create(img`
                e e e . . . . e e e . . . .
                c d d c . . c d d c . . . .
                c b d d f f d d b c . . . .
                c 3 b d d b d b 3 c . . . .
                f b 3 d d d d 3 b f . . . .
                e d d d d d d d d e . . . .
                e d f d d d d f d e . b f b
                f d d f d d f d d f . f d f
                f b d d b b d d 2 f . f d f
                . f 2 2 2 2 2 2 b b f f d f
                . f b d d d d d d b b d b f
                . f d d d d d b d d f f f .
                . f d f f f d f f d f . . .
                . f f . . f f . . f f . . .
            `, Kind.Collectible)
            tiles.placeOnRandomTile(sprite, FLOOR_TILE)
            animation.runImageAnimation(
                sprite, [img`
                e e e . . . . e e e . . . . 
                c d d c . . c d d c . . . . 
                c b d d f f d d b c . . . . 
                c 3 b d d b d b 3 c . . . . 
                f b 3 d d d d 3 b f . . . . 
                e d d d d d d d d e . . . . 
                e d f d d d d f d e . b f b 
                f d d f d d f d d f . f d f 
                f b d d b b d d 2 f . f d f 
                . f 2 2 2 2 2 2 b b f f d f 
                . f b d d d d d d b b d b f 
                . f d d d d d b d d f f f . 
                . f d f f f d f f d f . . . 
                . f f . . f f . . f f . . . 
                `, img`
                . . . . . . . . . . . . . . 
                e e e . . . . e e e . . . . 
                c d d c . . c d d c . . . . 
                c b d d f f d d b c . . . . 
                c 3 b d d b d b 3 c . . . . 
                f b 3 d d d d 3 b f . . . . 
                e d d d d d d d d e . . . . 
                e d f d d d d f d e b f b . 
                f d d f d d f d d f f d f . 
                f b d d b b d d 2 b f d f . 
                . f 2 2 2 2 2 2 d b d b f . 
                . f d d d d d d d f f f . . 
                . f d b d f f f d f . . . . 
                . . f f f f . . f f . . . . 
                `, img`
                . . . . . . . . . . . . . . 
                e e e . . . . e e e . . . . 
                c d d c . . c d d c . . . . 
                c b d d f f d d b c . . . . 
                c 3 b d d b d b 3 c . . . . 
                f b 3 d d d d 3 b f . . . . 
                e d d d d d d d d e . . . . 
                e d f d d d d f d e . b f b 
                f d d f d d f d d f . f d f 
                f b d d b b d d 2 b f f d f 
                . f 2 2 2 2 2 2 d b b d b f 
                . f d d d d d d d f f f f . 
                . . f d b d f d f . . . . . 
                . . . f f f f f f . . . . . 
                `], 100, true,
            )
            sprite.setVelocity(randint(-15, 15), randint(-15, 15))
            sprite.setBounceOnWall(true)
        }

        setHandlers()
        intervals = startIntervals()
        return true
    }
}
