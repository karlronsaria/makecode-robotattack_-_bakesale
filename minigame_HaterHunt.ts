namespace HaterHuntGame {
    const HATER_HUNT_LEVEL: number = 1
    const CONFRONT_SELLER_LEVEL: number = 4
    const ZEN_POWERUP_LEVEL: number = 5
    const STEADFAST_POWERUP_LEVEL: number = 6
    const RAGE_POWERUP_LEVEL: number = 7
    const FIRST_LABYRINTH_LEVEL: number = 8

    const Kind = {
        _START: SpriteKind.create(),
        Player: SpriteKind.create(),
        Enemy: SpriteKind.create(),
        Neutral: SpriteKind.create(),
        Device: SpriteKind.create(),
        HomelessBox: SpriteKind.create(),
        Objective: SpriteKind.create(),
        Competitor: SpriteKind.create(),
        Helpful: SpriteKind.create(),
        Unhelpful: SpriteKind.create(),
        Collectible: SpriteKind.create(),
        BottleSeller: SpriteKind.create(),
        _END: SpriteKind.create(),
    }

    let mySprite: Sprite = null
    let someGuy: Sprite = null
    let rudeSign: Sprite = null
    let bystander: Sprite = null
    let intervals: number[] = []
    let courseIntervals: number[] = []
    let interval_rageTremor: number = -1
    let tilemaps: tiles.TileMapData[]
    let haterHuntTilemaps: tiles.TileMapData[] = []
    let chestMutex: boolean = false
    let doorSignal: number = 0
    let racing: boolean = false
    let gameStart: boolean = false
    let gameEnded: boolean = false
    let nextCourseMutex: boolean = false
    let interactMutex: boolean = false
    let hasHaterAde: boolean = false
    let urTooSlow: boolean = false
    let zen: boolean = false
    let steadfast: boolean = false
    let hasStanRage: boolean = false
    let uncontrolledRage: boolean = false
    let mySpeed: number = 0

    let prevLife: number
    let prevScore: number
    let prevBgImage: Image
    let prevBgColor: number
    let _onA: () => void
    let _onB: () => void
    let _onCountdownEnd: () => void
    let _callback: (w: boolean, s: number) => void

    function newGuy() {
        rudeSign = sprites.create(Asset.Image.RUDE_SIGN, Kind.Neutral)
        rudeSign.setFlag(SpriteFlag.GhostThroughWalls, true)
        someGuy = sprites.create(Asset.Image.GUY_IN_GLASSES, Kind.Neutral)
    }

    function newRacer(headStart: boolean) {
        controller.moveSprite(mySprite, 0, 0)
        newGuy()
        tiles.placeOnRandomTile(someGuy, sprites.dungeon.collectibleInsignia)

        if (urTooSlow) {
            const path = scene.aStar(
                someGuy.tilemapLocation(),
                tiles.getTilesByType(sprites.castle.tileDarkGrass3)._pickRandom(),
            )

            tiles.placeOnTile(
                someGuy,
                path[Math.floor(path.length * 0.2)],
            )
        }

        followRacePath(someGuy, sprites.castle.tileDarkGrass3, 0.75)
        tiles.placeOnTile(
            rudeSign,
            tiles.getTileLocation(
                someGuy
                    .tilemapLocation()
                    .column + 1,
                someGuy
                    .tilemapLocation()
                    .row - 0,
            ),
        )
        racing = true
        info.startCountdown(headStart ? 5 : 0.5)
    }

    function followRacePath(
        sprite: Sprite,
        endTile: Image,
        speedFactor: number,
    ): boolean {
        const path = scene.aStar(
            sprite.tilemapLocation(),
            tiles.getTilesByType(endTile)._pickRandom(),
        )

        if (!path) {
            return false
        }

        if (path.length > 2 && Math.abs(path[0].col - path[1].col) + Math.abs(path[0].row - path[1].row) !== 2) {
            path.removeAt(0)
        }

        if (path.length === 0) {
            return false
        }

        scene._followPath(sprite, path, speedFactor * mySpeed)
        return true
    }

    function newPlayer(
        startingTile: Image,
        neutral: boolean = true,
    ) {
        const sprite = sprites.create(img`
            . f f f . f f f f . f f f .
            f f f f f c c c c f f f f f
            f f f f b c c c c b f f f f
            f f f c 3 c c c c 3 c f f f
            . f 3 3 c c c c c c 3 3 f .
            . f c c c c 4 4 c c c c f .
            . f f c c 4 4 4 4 c c f f .
            . f f f b f 4 4 f b f f f .
            . f f 4 1 f d d f 1 4 f f .
            . . f f d d d d d d f f . .
            . . e f e 4 4 4 4 e f e . .
            . e 4 f b 3 3 3 3 b f 4 e .
            . 4 d f 3 3 3 3 3 3 c d 4 .
            . 4 4 f 6 6 6 6 6 6 f 4 4 .
            . . . . f f f f f f . . . .
            . . . . f f . . f f . . . .
        `,
        neutral
            ? Kind.Neutral
            : Kind.Player,
        )
        sprite.setImage(Asset.Image.HaterHunt.KPOP_STAN_ENRAGED)
        scene.cameraFollowSprite(sprite)
        tiles.placeOnRandomTile(sprite, startingTile)

        if (hasStanRage) {
            attachStanRageMagic(sprite)
        }

        controller.moveSprite(sprite, mySpeed, mySpeed)
        return sprite
    }

    function destroyEnemy() {
        if (someGuy)
            someGuy.destroy()

        if (rudeSign)
            rudeSign.destroy()
    }

    function labyrinthIntro() {
        timer.after(100, () => {
            game.showLongText("RUN!", DialogLayout.Bottom)
            game.showLongText("WHILE YOU STILL CAN!", DialogLayout.Bottom)
            game.showLongText("EVERY MAN", DialogLayout.Bottom)
            game.showLongText("FOR HIMSEEEEEEEEEEEEEEEELF!", DialogLayout.Bottom)
        })
    }

    function init() {
        scene.setBackgroundColor(13)
        scene.setBackgroundImage(null)
        gameStart = false
        gameEnded = false
        racing = false
        chestMutex = false
        nextCourseMutex = false
        interactMutex = false
        hasHaterAde = false
        urTooSlow = false
        zen = false
        steadfast = false
        hasStanRage = false
        uncontrolledRage = false
        doorSignal = 0
        mySpeed = 100
        info.setLife(1)
        info.setScore(0)
    }

    function stopIntervals() {
        for (const interval of intervals) {
            clearInterval(interval)
        }
    }

    function attachRudeSign(sprite: Sprite, sign: Sprite) {
        const loc = sprite.tilemapLocation()

        if (!loc) {
            return
        }

        tiles.placeOnTile(
            sign,
            tiles.getTileLocation(loc.col + 1, loc.row)
        )
    }

    function shortIntervalProcess() {
        if (info.score() < ZEN_POWERUP_LEVEL) {
            return
        }

        if (!rudeSign || !someGuy) {
            return
        }

        attachRudeSign(someGuy, rudeSign)

        rudeSign.vx = someGuy.vx
        rudeSign.vy = someGuy.vy

        rudeSign.x = someGuy.x + 16
        rudeSign.y = someGuy.y

        if (sprites.allOfKind(Kind.Player).length > 0) {
            return
        }

        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    }

    function startLabyrinthIntervals() {
        return [
            setInterval(
                () => {
                    if (!gameStart || sprites.allOfKind(Kind.Player).length + sprites.allOfKind(Kind.Competitor).length > 0) {
                        return
                    }

                    tryCollapseGround(tiles
                        .getTilesByType(Asset.Image.EMPTY_TILE)
                        ._pickRandom()
                    )
                },
                50,
            ),
            setInterval(
                () => {
                    if (!someGuy) {
                        return
                    }

                    followRacePath(someGuy, sprites.castle.tileDarkGrass3, 0.75)
                },
                1000,
            ),
        ]
    }

    function knockAway(
        sprite: Sprite,
        location: tiles.Location,
        say: string,
    ) {
        const dummySprite = sprites.create(
            Asset.Image.EMPTY_TILE,
            Kind.Neutral,
        )

        tiles.placeOnTile(dummySprite, location)
        dummySprite.sayText(say, 2000, false)
        scene.cameraShake(16, 2000)

        timer.after(1000, () => {
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)

            for (let i = 0; i <= 5; ++i) {
                sprite.setVelocity(
                    randint(150, 200) * (randint(0, 1) * 2 - 1),
                    randint(150, 200) * (randint(0, 1) * 2 - 1),
                )

                pause(500)
            }
        })
    }

    function tryCollapseGround(location: tiles.Location) {
        if (!location || tiles.tileAtLocationEquals(location, sprites.dungeon.hazardLava1)) {
            return
        }

        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
        tiles.setTileAt(location, sprites.dungeon.hazardLava1)
        const dummySprite = sprites.create(
            Asset.Image.EMPTY_TILE,
            Kind.Neutral,
        )
        dummySprite.lifespan = 1000
        tiles.placeOnTile(dummySprite, location)
        dummySprite.sayText("Run!")
    }

    function tunnelRandom(
        sprite: Sprite,
        location: tiles.Location,
    ) {
        tiles.setTileAt(location, Asset.Image.EMPTY_TILE)
        tiles.placeOnRandomTile(sprite, sprites.dungeon.doorOpenNorth)
        tiles.setTileAt(location, sprites.dungeon.doorOpenNorth)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
    }

    function tunnelPuzzle(
        sprite: Sprite,
        location: tiles.Location,
    ) {
        if (info.score() !== ZEN_POWERUP_LEVEL) {
            return
        }

        const start: tiles.Location = tiles.getTilesByType(sprites.dungeon.collectibleInsignia)[0]
        let pair = [start.col, start.row]

        switch (location.col * 1000 + location.row) {
            case 13004:
                pair = [2, 18]
                break
            case 2018:
                pair = [13, 4]
                break
            case 17021:
                pair = [1, 10]
                break
            case 21002:
                pair = [21, 8]
                break
            case 1010:
                pair = [17, 21]
                break
            case 6019:
                pair = [11, 16]
                break
            case 11016:
                pair = [6, 19]
                break
            case 21008:
                pair = [21, 2]
                break
            case 21021:
                pair = [3, 6]
                break
            case 3006:
                pair = [21, 21]
                break
            default:
                break
        }

        const first = pair[0]
        const secnd = pair[1]
        const first0 = pair.get(0)

        tiles.placeOnTile(sprite, tiles.getTileLocation(pair[0], pair[1]))
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
    }

    function destroyAllSprites() {
        for (let i = Kind._START; i <= Kind._END; ++i) {
            sprites.destroyAllSpritesOfKind(i)
        }
    }

    function setCourse(
        tilemap: tiles.TileMapData,
        headStart: boolean,
    ) {
        gameStart = false
        doorSignal = 0
        info.changeScoreBy(1)
        destroyAllSprites()
        tiles.setCurrentTilemap(tilemap)
        info.stopCountdown()

        // todo: consider removing
        if (Math.percentChance(0.01))
            scene.setBackgroundImage(
                Asset.Image.ToddHoward.BG_SITTING_ACROSS,
            )

        scene.setBackgroundImage(null)

        if (Math.percentChance(1)) {
            scene.setBackgroundImage(
                Asset.Image.ToddHoward.BG_JUMPSCARE,
            )

            for (const tile of tiles.getTilesByType(sprites.builtin.forestTiles0)) {
                tiles.setTileAt(tile, Asset.Image.ToddHoward.TILE_ICON)
            }
        }

        scene.setBackgroundColor(13)
        newComputer()
        newHomelessBox()
        mySprite = newPlayer(sprites.dungeon.collectibleInsignia)
        newRacer(headStart)
    }

    function stopCourseIntervals() {
        for (const interval of courseIntervals) {
            clearInterval(interval)
        }
    }

    function nextCourse() {
        stopCourseIntervals()

        if (gameEnded) {
            return
        }

        if (tilemaps.length === 0) {
            gameEnded = true
            stopIntervals()
            destroyAllSprites()
            scene.cameraShake(null, 0)
            effects.confetti.endScreenEffect()
            stop(true)
            return
        }

        if (haterHuntTilemaps.length > 0) {
            startCourseHaterHunt(haterHuntTilemaps.shift())
            return
        }

        if (info.score() === CONFRONT_SELLER_LEVEL - 1) {
            startCourseConfrontBottleSeller()
            return
        }

        if (info.score() === ZEN_POWERUP_LEVEL - 1) {
            startCourseZenChallenge()
            return
        }

        if (info.score() === STEADFAST_POWERUP_LEVEL - 1) {
            startCourseSteadfastChallenge()
            return
        }

        if (info.score() === RAGE_POWERUP_LEVEL - 1) {
            startCourseRageChallenge()
            return
        }

        setCourse(tilemaps.shift(), info.score() === 0)

        if (tilemaps.length > 0) {
            for (const tile of tiles.getTilesByType(sprites.castle.tileDarkGrass3)) {
                tiles.setTileAt(tile, Asset.Image.HaterHunt.TILE_NEXT_COURSE_DOOR)
            }
        }

        if (info.score() === FIRST_LABYRINTH_LEVEL) {
            labyrinthIntro()

            for (const interval of startLabyrinthIntervals()) {
                intervals.push(interval)
            }

            scene.onOverlapTile(Kind.Competitor, Asset.Image.HaterHunt.TILE_NEXT_COURSE_DOOR, (sprite, location) => {
                timer.after(100, () => {
                    destroyEnemy()
                    urTooSlow = true
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                })
            })
            scene.onOverlapTile(Kind.Competitor, Asset.Image.EMPTY_TILE, (sprite, location) => {
                const currentLevel = info.score()

                timer.after(7000, () => {
                    if (currentLevel !== info.score()) {
                        return
                    }

                    tryCollapseGround(location)
                })
            })

            return
        }
    }

    function newComputer() {
        for (const location of tiles.getTilesByType(sprites.swamp.swampTile16)) {
            tiles.placeOnTile(sprites.create(img`
                . . . b b b b b b b b b . . . .
                . . b 1 d d d d d d d 1 b . . .
                . b 1 1 1 1 1 1 1 1 1 1 1 b . .
                . b d b c c c c c c c b d b . .
                . b d c 6 6 6 6 6 6 6 c d b . .
                . b d c 6 d 6 6 6 6 6 c d b . .
                . b d c 6 6 6 6 6 6 6 c d b . .
                . b d c 6 6 6 6 6 6 6 c d b . .
                . b d c 6 6 6 6 6 6 6 c d b . .
                . b d c c c c c c c c c d b . .
                . c b b b b b b b b b b b c . .
                c b c c c c c c c c c c c b c .
                c 1 d d d d d d d d d d d 1 c .
                c 1 d 1 1 d 1 1 d 1 1 d 1 1 c .
                c b b b b b b b b b b b b b c .
                c c c c c c c c c c c c c c c .
            `, Kind.Device), location)
            tiles.setTileAt(location, Asset.Image.EMPTY_TILE)
        }
    }

    function newHomelessBox() {
        tiles.placeOnRandomTile(sprites.create(img`
            . . b b b b b b b b b b b b . .
            . b e 4 4 4 4 4 4 4 4 4 4 e b .
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
            b e e 4 4 4 4 4 4 4 4 4 4 e e b
            b e e e e e e e e e e e e e e b
            b e e e e e e e e e e e e e e b
            b b b b b b b d d b b b b b b b
            c b b b b b b c c b b b b b b c
            c c c c c c b c c b c c c c c c
            b e e e e e c b b c e e e e e b
            b e e e e e e e e e e e e e e b
            b c e e e e e e e e e e e e c b
            b b b b b b b b b b b b b b b b
            . b b . . . . . . . . . . b b .
        `, Kind.HomelessBox), sprites.dungeon.chestClosed)
    }

    function startCourseHaterHunt(tilemap: tiles.TileMapData) {
        gameStart = false
        destroyAllSprites()
        tiles.setCurrentTilemap(tilemap)

        info.stopCountdown()
        info.changeScoreBy(1)
        scene.setBackgroundColor(13)
        newComputer()
        newHomelessBox()
        mySprite = newPlayer(sprites.dungeon.collectibleInsignia, false)
        newGuy()
        someGuy.setKind(Kind.Objective)
        tiles.placeOnRandomTile(someGuy, Asset.Image.TileUtil.OBJECT_04)
        attachRudeSign(someGuy, rudeSign)
        bystander = sprites.create(img`
            . . . . f f f f . . . .
            . . f f e e e e f f . .
            . f f e e e e e e f f .
            f f f f 4 e e e f f f f
            f f f 4 4 4 e e f f f f
            f f f 4 4 4 4 e e f f f
            f 4 e 4 4 4 4 4 4 e 4 f
            f 4 4 f f 4 4 f f 4 4 f
            f e 4 d d d d d d 4 e f
            . f e d d b b d d e f .
            . f f e 4 4 4 4 e f f .
            e 4 f b 1 1 1 1 b f 4 e
            4 d f 1 1 1 1 1 1 f d 4
            4 4 f 6 6 6 6 6 6 f 4 4
            . . . f f f f f f . . .
            . . . f f . . f f . . .
        `, Kind.Unhelpful)
        tiles.placeOnRandomTile(bystander, Asset.Image.TileUtil.OBJECT_01)

        for (const image of [
            Asset.Image.TileUtil.OBJECT_01,
            Asset.Image.TileUtil.OBJECT_04,
        ]) {
            for (const tile of tiles.getTilesByType(image)) {
                tiles.setTileAt(tile, Asset.Image.EMPTY_TILE)
            }
        }

        courseIntervals = [
            setInterval(
                () => {
                    const sprite = sprites.create(
                        Asset.Image.HaterHunt.HATERADE,
                        Kind.Collectible,
                    )
                    tiles.placeOnRandomTile(sprite, Asset.Image.EMPTY_TILE)
                    sprite.sayText("Peekaboo!", 1000, false)
                    sprite.lifespan = 4000
                },
                3000,
            ),
            setInterval(
                () => {
                    bystander.setVelocity(0, 50)
                    timer.after(1000, () => bystander.setVelocity(0, -50))
                },
                2000,
            ),
        ]

        if (followRacePath(someGuy, Asset.Image.HaterHunt.TILE_NEXT_COURSE_DOOR, 0.75)) {
            courseIntervals.push(setInterval(() => attachRudeSign(someGuy, rudeSign), 2))
        }
        else {
            animation.runMovementAnimation(
                rudeSign,
                animation.animationPresets(animation.bobbing),
                500,
                true,
            )
        }

        const currentLevel = info.score()

        sprites.onOverlap(Kind.Player, Kind.Collectible, (sprite, otherSprite) => {
            if (currentLevel !== info.score()) {
                return
            }

            hasHaterAde = true
            sprite.sayText("Hater-Ade Powerup!", 2000, false)
            sprites.destroy(otherSprite)
            controller.moveSprite(sprite, 200, 200)
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
            info.startCountdown(15)
        })

        scene.onOverlapTile(Kind.Player, Asset.Image.TILE_DIRT_ROT180, (sprite, location) => {
            if (currentLevel !== info.score()) {
                return
            }

            tiles.setTileAt(location, Asset.Image.EMPTY_TILE)
            mySprite.sayText("There he is!", 1000, false)
            someGuy.sayText("Uh oh!", 1000, false)
        })

        scene.onOverlapTile(Kind.Player, sprites.castle.tilePath5, (sprite, location) => {
            if (currentLevel !== info.score()) {
                return
            }

            tiles.setTileAt(location, Asset.Image.EMPTY_TILE)
            bystander.sayText("He's up there. Get'im.", 1000, false)
        })

        sprites.onOverlap(Kind.Player, Kind.Objective, (sprite, otherSprite) => {
            if (nextCourseMutex) {
                return
            }

            nextCourseMutex = true
            controller.moveSprite(sprite, 0, 0)
            const loc = otherSprite.tilemapLocation()
            tiles.placeOnTile(sprite, tiles.getTileLocation(loc.col - 1, loc.row))
            sprite.sayText("Listen, you little punk!")

            timer.after(500, () => {
                game.showLongText("Please don't hurt me!", DialogLayout.Bottom)
                music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)

                timer.after(1000, () => {
                    nextCourseMutex = false
                    nextCourse()
                })
            })
        })

        sprites.onOverlap(Kind.Player, Kind.Unhelpful, (sprite, otherSprite) => {
            scene.cameraShake(4, 500)
            sprite.startEffect(effects.fire, 2000)
            sprite.destroy(effects.disintegrate, 2000)
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
            timer.after(500, () => otherSprite.sayText("Uh oh. Don't do that.", 500, false))

            timer.after(2000, () => {
                effects.clearParticles(sprite)
                mySprite = newPlayer(sprites.dungeon.collectibleInsignia, false)
            })
        })
    }

    function startCourseConfrontBottleSeller() {
        gameStart = false
        destroyAllSprites()
        tiles.setCurrentTilemap(Asset.Tilemap.HaterHunt.BOTTLE_SELLER)

        info.changeScoreBy(1)
        scene.setBackgroundColor(13)
        newComputer()
        newHomelessBox()

        for (const tile of tiles.getTilesByType(Asset.Image.TileUtil.OBJECT_09)) {
            tiles.placeOnTile(
                sprites.create(img`
                    . . . f f f c c c . . . . .
                    . f f 5 5 5 5 5 5 f f . . .
                    . f 5 5 5 5 5 5 5 5 5 f . .
                    f 5 5 5 5 5 5 5 5 5 5 5 c .
                    f 5 5 b d 5 5 5 5 5 5 5 c .
                    f 5 d 4 4 b 5 5 5 5 5 5 5 f
                    f 5 b 4 4 4 c c 5 5 5 5 5 f
                    f f f 4 4 c b c b 5 5 5 b f
                    . f f d d c 1 e b b b b b c
                    . . f d d d d 4 f b b b b c
                    . . f 4 4 4 e e e 4 b b c .
                    . . f 9 9 9 e d d 4 f f . .
                    . . f 9 9 9 e d d e f . . .
                    . f 3 3 b 3 b e e b f . . .
                    . f f 3 b 3 b 3 b f f . . .
                    . . . f f b b f f . . . . .
                `, Kind.BottleSeller),
                tile,
            )
            tiles.setTileAt(tile, Asset.Image.EMPTY_TILE)
        }

        for (const tile of tiles.getTilesByType(Asset.Image.TileUtil.OBJECT_02)) {
            tiles.placeOnTile(
                sprites.create(
                    Asset.Image.HaterHunt.HATERADE,
                    Kind.Neutral,
                ),
                tile,
            )
            tiles.setTileAt(tile, Asset.Image.EMPTY_TILE)
        }

        mySprite = newPlayer(sprites.dungeon.collectibleInsignia, false)

        sprites.onOverlap(Kind.Player, Kind.BottleSeller, (sprite, otherSprite) => {
            if (interactMutex) {
                return
            }

            interactMutex = true
            controller.moveSprite(sprite, 0, 0)
            const loc = otherSprite.tilemapLocation()
            tiles.placeOnTile(
                sprite,
                tiles.getTileLocation(loc.col + 1, loc.row),
            )

            sprite.setImage(Asset.Image.HaterHunt.KPOP_STAN_ENRAGED_LEFT)

            timer.after(100, () => {
                game.showLongText("You!", DialogLayout.Top)

                timer.after(100, () => {
                    otherSprite.setImage(img`
                        . . . . . c c c f f f . . .
                        . . . f f 5 5 5 5 5 5 f f .
                        . . f 5 5 5 5 5 5 5 5 5 f .
                        . c 5 5 5 5 5 5 5 5 5 5 5 f
                        . c 5 5 5 5 5 5 5 d b 5 5 f
                        f 5 5 5 5 5 5 5 b 4 4 d 5 f
                        f 5 5 5 5 5 c c 4 4 4 b 5 f
                        f b 5 5 5 b c b c 4 4 f f f
                        c b b b b b e 1 c d d f f .
                        c b b b b f 4 d d d d f . .
                        . c b b 4 e e e 4 4 4 f . .
                        . . f f 4 d d e 9 9 9 f . .
                        . . . f e d d e 9 9 9 f . .
                        . . . f b e e b 3 b 3 3 f .
                        . . . f f b 3 b 3 b 3 f f .
                        . . . . . f f b b f f . . .
                    `)

                    game.showLongText("Oh, hello. Want to try a free sample?", DialogLayout.Bottom)
                    game.showLongText("Stop leaving your stupid bottles everywhere!", DialogLayout.Top)
                    game.showLongText("Uhh.", DialogLayout.Bottom)
                    game.showLongText("They aren't mine.", DialogLayout.Bottom)

                    timer.after(100, () => {
                        sprite.setImage(Asset.Image.HaterHunt.KPOP_STAN_ENRAGED_LEFT)
                        controller.moveSprite(sprite, mySpeed, mySpeed)
                        tiles.setTileAt(
                            tiles.getTileLocation(9, 14),
                            Asset.Image.HaterHunt.TILE_NEXT_COURSE_DOOR,
                        )
                        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                        interactMutex = false
                    })
                })
            })
        })
    }

    function startCourseZenChallenge() {
        gameStart = false
        destroyAllSprites()
        tiles.setCurrentTilemap(Asset.Tilemap.HaterHunt.ZEN_PUZZLE)

        info.changeScoreBy(1)
        scene.setBackgroundColor(13)
        newComputer()
        newHomelessBox()
        mySprite = newPlayer(sprites.dungeon.collectibleInsignia, false)

        const collectible = sprites.create(
            Asset.Image.ZEN_EMOTE,
            Kind.Collectible,
        )

        tiles.placeOnRandomTile(collectible, sprites.dungeon.darkGroundCenter)
        animation.runMovementAnimation(collectible, animation.animationPresets(animation.bobbing), 2000, true)

        const currentLevel = info.score()

        sprites.onOverlap(Kind.Player, Kind.Collectible, (sprite, otherSprite) => {
            if (currentLevel !== info.score()) {
                return
            }

            otherSprite.destroy(effects.smiles, 500)
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
            clearInterval(interval_rageTremor)

            timer.after(500, () => {
                game.showLongText("Zen", DialogLayout.Bottom)
                game.showLongText("Be still, my child.", DialogLayout.Bottom)
                game.showLongText("Let the calm waves wash over you.", DialogLayout.Bottom)
                game.showLongText("No more tremors.", DialogLayout.Bottom)
                zen = true
            })
        })
    }

    function startCourseSteadfastChallenge() {
        gameStart = false
        destroyAllSprites()
        tiles.setCurrentTilemap(Asset.Tilemap.HaterHunt.STEADFAST_PUZZLE)

        info.changeScoreBy(1)
        scene.setBackgroundColor(13)
        newComputer()
        newHomelessBox()
        mySprite = newPlayer(sprites.dungeon.collectibleInsignia, false)
        newGuy()
        someGuy.setKind(Kind.Competitor)
        tiles.placeOnTile(someGuy, tiles.getTileLocation(12, 12))
        followRacePath(someGuy, Asset.Image.HaterHunt.TILE_NEXT_COURSE_DOOR, 0.75)

        tiles.placeOnTile(sprites.create(
            img`
                . . . . f f f f . . . .
                . . f f e e e e f f . .
                . f f e e e e e e f f .
                f f f f 4 e e e f f f f
                f f f 4 4 4 e e f f f f
                f f f 4 4 4 4 e e f f f
                f 4 e 4 4 4 4 4 4 e 4 f
                f 4 4 f f 4 4 f f 4 4 f
                f e 4 d d d d d d 4 e f
                . f e d d b b d d e f .
                . f f e 4 4 4 4 e f f .
                e 4 f b 1 1 1 1 b f 4 e
                4 d f 1 1 1 1 1 1 f d 4
                4 4 f 6 6 6 6 6 6 f 4 4
                . . . f f f f f f . . .
                . . . f f . . f f . . .
            `, Kind.Helpful,
        ), tiles.getTileLocation(14, 27))

        const collectible = sprites.create(
            Asset.Image.HUFF_EMOTE,
            Kind.Collectible,
        )

        tiles.placeOnRandomTile(collectible, sprites.dungeon.darkGroundCenter)
        animation.runMovementAnimation(collectible, animation.animationPresets(animation.bobbing), 2000, true)

        const currentLevel = info.score()

        sprites.onOverlap(Kind.Player, Kind.Helpful, (sprite, otherSprite) => {
            if (currentLevel !== info.score()) {
                return
            }

            tiles.placeOnTile(
                sprite,
                tiles.getTileLocation(
                    otherSprite.tilemapLocation().col + 1,
                    otherSprite.tilemapLocation().row,
                ),
            )

            controller.moveSprite(sprite, 0, 0)

            timer.after(100, () => {
                game.showLongText("That guy?", DialogLayout.Bottom)
                game.showLongText("He was just here a few minutes ago.", DialogLayout.Bottom)
                game.showLongText("What's your problem with him anyway?", DialogLayout.Bottom)
                controller.moveSprite(sprite, mySpeed, mySpeed)
            })
        })

        sprites.onOverlap(Kind.Player, Kind.Collectible, (sprite, otherSprite) => {
            if (currentLevel !== info.score()) {
                return
            }

            otherSprite.destroy(effects.smiles, 500)
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)

            timer.after(500, () => {
                game.showLongText("Steadfastness", DialogLayout.Bottom)
                game.showLongText("You're steadfast now.", DialogLayout.Bottom)
                game.showLongText("That means you're impervious to trees.", DialogLayout.Bottom)
                game.showLongText("So you can stop going back to the computer.", DialogLayout.Bottom)
                game.showLongText("Just stop freaking out about trees.", DialogLayout.Bottom)
                game.showLongText("They're just trees.", DialogLayout.Bottom)
                steadfast = true
            })
        })

        scene.onOverlapTile(Kind.Competitor, Asset.Image.HaterHunt.TILE_NEXT_COURSE_DOOR, (sprite, location) => {
            if (currentLevel !== info.score()) {
                return
            }

            timer.after(100, destroyEnemy)
        })
    }

    function startCourseRageChallenge() {
        gameStart = false
        destroyAllSprites()
        tiles.setCurrentTilemap(Asset.Tilemap.HaterHunt.RAGE_PUZZLE)

        info.changeScoreBy(1)
        scene.setBackgroundColor(13)
        newComputer()
        newHomelessBox()
        mySprite = newPlayer(sprites.dungeon.collectibleInsignia, false)

        tiles.placeOnTile(sprites.create(
            img`
                . . . . f f f f . . . .
                . . f f e e e e f f . .
                . f f e e e e e e f f .
                f f f f 4 e e e f f f f
                f f f 4 4 4 e e f f f f
                f f f 4 4 4 4 e e f f f
                f 4 e 4 4 4 4 4 4 e 4 f
                f 4 4 f f 4 4 f f 4 4 f
                f e 4 d d d d d d 4 e f
                . f e d d b b d d e f .
                . f f e 4 4 4 4 e f f .
                e 4 f b 1 1 1 1 b f 4 e
                4 d f 1 1 1 1 1 1 f d 4
                4 4 f 6 6 6 6 6 6 f 4 4
                . . . f f f f f f . . .
                . . . f f . . f f . . .
            `, Kind.Helpful,
        ), tiles.getTileLocation(13, 15))

        const collectible = sprites.create(
            Asset.Image.RAGE_EMOTE,
            Kind.Collectible,
        )

        tiles.placeOnRandomTile(collectible, sprites.dungeon.darkGroundCenter)
        animation.runMovementAnimation(collectible, animation.animationPresets(animation.bobbing), 2000, true)

        const currentLevel = info.score()

        sprites.onOverlap(Kind.Player, Kind.Helpful, (sprite, otherSprite) => {
            if (currentLevel !== info.score()) {
                return
            }

            tiles.placeOnTile(
                sprite,
                tiles.getTileLocation(
                    otherSprite.tilemapLocation().col + 1,
                    otherSprite.tilemapLocation().row,
                ),
            )

            controller.moveSprite(sprite, 0, 0)

            timer.after(100, () => {
                game.showLongText("He went that way.", DialogLayout.Bottom)
                game.showLongText("THAT way. I'm pointing.", DialogLayout.Bottom)
                controller.moveSprite(sprite, mySpeed, mySpeed)
            })
        })

        sprites.onOverlap(Kind.Player, Kind.Collectible, (sprite, otherSprite) => {
            if (currentLevel !== info.score()) {
                return
            }

            otherSprite.destroy(effects.smiles, 500)
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)

            timer.after(500, () => {
                game.showLongText("You have Stan Rage Power!", DialogLayout.Bottom)
                game.showLongText("Prove you are a true stan!", DialogLayout.Bottom)
                game.showLongText("Press 'B' when the meter is full to destroy obstacles in your way!", DialogLayout.Bottom)
                attainStanRagePower(mySprite)
            })
        })
    }

    function setHandlers() {
        // todo: preserve
        scene.onHitWall(Kind.Player, (sprite, location) => {
            sprite.sayText("AAAAGH! A TREE!", 500, true)

            if (steadfast) {
                scene.cameraShake(Math.percentChance(30) ? 32 : 8, 500)
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                controller.moveSprite(sprite, mySpeed / 2, mySpeed / 2)
                timer.after(500, () => controller.moveSprite(sprite, mySpeed, mySpeed))
                return
            }

            tiles.placeOnRandomTile(sprite, sprites.dungeon.collectibleInsignia)
            scene.cameraShake(4, 500)
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        })

        controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
            if (doorSignal === 0) {
                return
            }

            doorSignal = 2
        })

        info.onCountdownEnd(() => {
            if (hasHaterAde) {
                controller.moveSprite(mySprite, 100, 100)
                hasHaterAde = false
                return
            }

            if (!racing) {
                game.setGameOverMessage(false, "You did it!")
                return
            }

            someGuy.setKind(Kind.Competitor)
            mySprite.setKind(Kind.Player)
            controller.moveSprite(mySprite, mySpeed, mySpeed)
            racing = false
            gameStart = true
            info.startCountdown(70)
        })

        scene.onOverlapTile(Kind.Objective, Asset.Image.HaterHunt.TILE_NEXT_COURSE_DOOR, (sprite, location) => {
            timer.after(100, destroyEnemy)
        })

        scene.onOverlapTile(Kind.Player, Asset.Image.HaterHunt.TILE_NEXT_COURSE_DOOR, (sprite, location) => {
            sprite.setKind(Kind.Neutral)

            if (info.score() === FIRST_LABYRINTH_LEVEL - 1) {
                labyrinthSplash(nextCourse)
                return
            }

            timer.after(100, nextCourse)
        })

        scene.onOverlapTile(Kind.Player, sprites.castle.tileDarkGrass3, (sprite, location) => {
            touchGrass(sprite, location)
        })

        scene.onOverlapTile(Kind.Player, sprites.dungeon.chestClosed, (sprite, location) => {
            if (chestMutex) {
                return
            }

            if (Math.percentChance(20)) {
                knockAway(sprite, location, "GET OFF ME, YOU IDIOT!")
                return
            }

            chestMutex = true
            timer.after(2000, () => chestMutex = false)
        })

        scene.onOverlapTile(Kind.Player, sprites.dungeon.hazardLava1, (sprite, location) => {
            sprites.destroy(sprite, effects.disintegrate, 500)
            sprite.sayText("AAAAAAAH!")
            timer.after(1000, () => stop(false))
        })

        scene.onOverlapTile(Kind.Player, sprites.dungeon.floorLight5, (sprite, location) => {
            if (uncontrolledRage) {
                return
            }

            uncontrolledRage = true

            time_sequence([
                [500, () => controller.moveSprite(mySprite, 0, 0)],
                [500, () => mySprite.sayText("!", 500, false)],
                [500, () => {
                    scene.cameraShake(16, 1000)
                    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)

                    for (let col = 16; col <= 22; ++col) {
                        const tile = tiles.getTileLocation(col, 31)
                        tiles.setTileAt(tile, sprites.dungeon.hazardLava1)
                        tiles.setWallAt(tile, true)
                    }
                }],
                [500, () => {
                    mySprite.sayText("Uh oh.", 500, false)
                    controller.moveSprite(mySprite, mySpeed, mySpeed)

                    scene.onOverlapTile(Kind.Player, Asset.Image.EMPTY_TILE, (sprite, location) => {
                        const currentLevel = info.score()

                        timer.after(2000, () => {
                            if (currentLevel !== info.score()) {
                                return
                            }

                            tryCollapseGround(location)
                        })
                    })
                    scene.onOverlapTile(Kind.Player, sprites.dungeon.collectibleInsignia, (sprite, location) => {
                        const currentLevel = info.score()

                        timer.after(2000, () => {
                            if (currentLevel !== info.score()) {
                                return
                            }

                            tryCollapseGround(location)
                        })
                    })
                }],
            ])
        })

        scene.onOverlapTile(Kind.Competitor, sprites.castle.tileDarkGrass3, (sprite, location) => {
            if (sprites.allOfKind(Kind.Player).length > 0) {
                return
            }

            time_sequence([
                [750, () => sprite.sayText("Ahh. Finally.", 1000, false)],
                [1500, () => {
                    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
                    sprite.destroy(effects.disintegrate, 1000)
                    rudeSign.destroy(effects.disintegrate, 1000)
                }],
                [1500, nextCourse],
            ])
        })

        scene.onOverlapTile(Kind.Player, sprites.dungeon.doorOpenNorth, (sprite, location) => {
            if (doorSignal == 2) {
                (info.score() === ZEN_POWERUP_LEVEL
                    ? tunnelPuzzle
                    : tunnelRandom)(sprite, location);

                doorSignal = 0
                return
            }

            doorSignal = 1
            sprite.sayText("Press 'A' to tunnel", 500, false)
        })

        sprites.onOverlap(Kind.Player, Kind.Device, (sprite, otherSprite) => {
            const loc = otherSprite.tilemapLocation()
            tiles.placeOnTile(sprite, tiles.getTileLocation(loc.col, loc.row + 1))
            music.play(music.createSong(Asset.Track.PC_BOOT), music.PlaybackMode.InBackground)
        })

        sprites.onOverlap(Kind.Player, Kind.Competitor, (sprite, otherSprite) => {
            otherSprite.sayText("AAAAAAH!", 500, false)
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
            scene.cameraShake(8, 500)
            controller.moveSprite(sprite, 0, 0)
            sprite.startEffect(effects.spray)
            timer.after(1000, () => {
                controller.moveSprite(sprite, mySpeed, mySpeed)
                effects.clearParticles(sprite)
            })
        })

        sprites.onOverlap(Kind.Player, Kind.HomelessBox, (sprite, otherSprite) => {
            otherSprite.sayText("Leave me alone.", 500, false)
            music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
        })

        sprites.onOverlap(Kind.Player, Kind.Enemy, (sprite, otherSprite) => {
            tiles.placeOnRandomTile(sprite, sprites.dungeon.collectibleInsignia)
            tiles.placeOnRandomTile(otherSprite, sprites.dungeon.doorOpenNorth)
        })
    }

    function resetHandlers() {
        controller.A.onEvent(ControllerButtonEvent.Pressed, _onA)
        controller.B.onEvent(ControllerButtonEvent.Pressed, _onB)
        info.onCountdownEnd(_onCountdownEnd)
    }

    function stop(win: boolean) {
        const endingScore = info.score() - 1
        info.setLife(prevLife)
        info.setScore(prevScore)
        scene.setBackgroundImage(prevBgImage)
        scene.setBackgroundColor(prevBgColor)
        info.stopCountdown()
        stopIntervals()
        stopCourseIntervals()
        destroyAllSprites()
        resetHandlers()
        _callback(win, endingScore)
    }

    export function start(
        onA: () => void,
        onB: () => void,
        onCountdownEnd: () => void,
        callback: (w: boolean, s: number) => void,
    ) {
        prevLife = info.life()
        prevScore = info.score()
        prevBgImage = scene.backgroundImage()
        prevBgColor = scene.backgroundColor()
        _onA = onA
        _onB = onB
        _onCountdownEnd = onCountdownEnd
        _callback = callback
        init()

        tilemaps = [
            tilemap`haterHunt06`,
            tilemap`haterHunt07`,
            tilemap`haterHunt08`,
            tilemap`haterHunt09`,
            tilemap`haterHunt10`,
            tilemap`haterHunt11`,
        ]

        haterHuntTilemaps = [
            tilemap`haterHunt01`,
            tilemap`haterHunt02`,
            tilemap`haterHunt03`,
        ]

        tilemaps.sort((a, b) => randint(-1, 1))
        interval_rageTremor = setInterval(rageTremor, 10000)
        intervals = [
            setInterval(shortIntervalProcess, 2),
        ]

        setHandlers()
        haterHuntSplash(nextCourse)
    }

    function rageTremor() {
        if (!mySprite) {
            return
        }

        mySprite.sayText([
            "Oh, he's gonna get it!",
            "Threaten MY pastime!?",
            "RAAAGE!",
            "Who does he think he is?",
            "Just wait til I get over there.",
            "I'm gonna find him.",
            "That punk...",
            "I stan. I STAN! I STAAN!! RAAGH!!"
        ]._pickRandom(), 1000, true)
        music.play(music.createSong(Asset.Track.RAGE_TREMOR), music.PlaybackMode.InBackground)
        animation.runMovementAnimation(
            mySprite,
            animation.animationPresets(animation.shake),
            200,
            false,
        )
    }

    function attachStanRageMagic(sprite: Sprite) {
        const statusbar = statusbars.create(20, 4, StatusBarKind.Magic)
        statusbar.max = 10
        statusbar.value = 0
        statusbar.attachToSprite(sprite)
    }

    function attainStanRagePower(sprite: Sprite) {
        hasStanRage = true
        attachStanRageMagic(sprite)

        const status = statusbars.getStatusBarAttachedTo(StatusBarKind.Magic, sprite)

        if (status) {
            status.value = Math.floor(status.max / 2)
        }

        intervals.push(setInterval(
            () => {
                if (!mySprite) {
                    return
                }

                const status = statusbars.getStatusBarAttachedTo(StatusBarKind.Magic, mySprite)

                if (!status || status.value >= status.max) {
                    return
                }

                status.value++
            },
            1000,
        ))

        controller.B.onEvent(ControllerButtonEvent.Pressed, () => {
            const status = statusbars.getStatusBarAttachedTo(StatusBarKind.Magic, mySprite)

            if (!status || status.value < status.max) {
                return
            }

            mySprite.sayText("Stan rage!", 1500, false)

            timer.after(1000, () => {
                music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                scene.cameraShake(16, 500)
                status.value = 0
                const loc = mySprite.tilemapLocation()

                if (!loc) {
                    return
                }

                for (const pair of [
                    [loc.col, loc.row - 1],
                    [loc.col + 1, loc.row - 1],
                    [loc.col + 1, loc.row],
                    [loc.col + 1, loc.row + 1],
                    [loc.col, loc.row + 1],
                    [loc.col - 1, loc.row + 1],
                    [loc.col - 1, loc.row],
                    [loc.col - 1, loc.row - 1],
                ]) {
                    const tile = tiles.getTileLocation(pair[0], pair[1])

                    if ([
                        sprites.dungeon.chestClosed,
                        sprites.dungeon.doorOpenNorth,
                        sprites.dungeon.floorLight5,
                        sprites.castle.tileDarkGrass3,
                        Asset.Image.HaterHunt.TILE_NEXT_COURSE_DOOR,
                    ].indexOf(tile.getImage()) < 0) {
                        tiles.setWallAt(tile, false)
                        tiles.setTileAt(tile, Asset.Image.EMPTY_TILE)
                    }
                }
            })
        })
    }

    function touchGrass(sprite: Sprite, location: tiles.Location) {
        const spriteLoc = someGuy.tilemapLocation()
        const spriteLocCode = spriteLoc.col * 1000 + spriteLoc.row
        const locCode = location.col * 1000 + location.row

        if (spriteLocCode === locCode) {
            scene.cameraFollowSprite(null)
            knockAway(sprite, location, "FIND YOUR OWN GRASS, YOU FUDNUGGLER!")
            return
        }

        scene.cameraFollowSprite(null)
        game.showLongText("What!? GRASS!? GRASS!!!?", DialogLayout.Bottom)
        game.showLongText("NOOOO! NOOOOO!! NOOOOOOOOO!!!", DialogLayout.Bottom)
        game.showLongText("NOOOO! I CAN'T TOUCH GRAAAAAAAAAAAAAAAAAAAAAAA", DialogLayout.Bottom)
        sprite.destroy(effects.disintegrate, 2000)
        sprite.sayText("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        effects.confetti.startScreenEffect()
        info.stopCountdown()
        scene.cameraShake(16, 1000000)
    }

    function haterHuntSplash(callback: () => void) {
        tiles.setCurrentTilemap(Asset.Tilemap.EMPTY_LEVEL)
        scene.setBackgroundColor(0)
        destroyAllSprites()

        timer.after(100, () => {
            game.splash("Find the K-Pop hater!")
            game.splash("Someone just", "insulted K-Pop!")
            game.splash("Go tell him off!")
            timer.after(100, callback)
        })
    }

    function labyrinthSplash(callback: () => void) {
        tiles.setCurrentTilemap(Asset.Tilemap.EMPTY_LEVEL)
        scene.setBackgroundColor(0)
        destroyAllSprites()

        timer.after(100, () => {
            music.play(music.createSong(Asset.Track.UH_OH), music.PlaybackMode.InBackground)
            game.splash("The world cannot contain", "your rage")
            game.splash("Reality is collapsing", "around you")
            game.splash("You need to run")
            timer.after(100, callback)
        })
    }
}
