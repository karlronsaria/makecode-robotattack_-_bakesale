namespace JumpGame {
    const JUMP_MAX: number = 5
    const GROUND: number = 6
    const FINAL_LEVEL: number = 49
    const TIMEOUT_MAX: number = 10

    let me: Sprite = null
    let jumps: number = JUMP_MAX
    let level: number = 0
    let timeout: number = 0
    let dying: boolean = false
    let attacking: boolean = true
    let testing: boolean = false
    let hasSpringBoots: boolean = false
    let hasMagicAxe: boolean = false
    let intervals: number[] = []

    const Kind = {
        _START: SpriteKind.create(),
        Player: SpriteKind.create(),
        Enemy: SpriteKind.create(),
        Projectile: SpriteKind.create(),
        Neutral: SpriteKind.create(),
        Goal: SpriteKind.create(),
        Sharks: SpriteKind.create(),
        MagicGear: SpriteKind.create(),
        MagicTools: SpriteKind.create(),
        Executives: SpriteKind.create(),
        Dark: SpriteKind.create(),
        _END: SpriteKind.create(),
    }

    let _onA: () => void
    let _onB: () => void
    let _onUp: () => void
    let _onDown: () => void
    let _onLeft: () => void
    let _onRight: () => void
    let _onCountdownEnd: () => void
    let _onLifeZero: () => void

    let prevLife: number
    let prevScore: number
    let prevBgImage: Image

    let stopped: boolean = false

    let _callback: (
        win: boolean,
        score: number,
        hp: number,
    ) => void

    function init() {
        jumps = JUMP_MAX
        level = 0
        timeout = 0
        dying = false
        attacking = true
        testing = false
        hasSpringBoots = false
        hasMagicAxe = false
        intervals = []
    }

    export function start(
        onA: () => void,
        onB: () => void,
        onUp: () => void,
        onDown: () => void,
        onLeft: () => void,
        onRight: () => void,
        onCountdownEnd: () => void,
        onLifeZero: () => void,
        callback: (
            win: boolean,
            score: number,
            hp: number,
        ) => void,
    ) {
        prevLife = info.life()
        prevScore = info.score()
        prevBgImage = scene.backgroundImage()
        init()

        _onA = onA
        _onB = onB
        _onUp = onUp
        _onDown = onDown
        _onLeft = onLeft
        _onRight = onRight
        _onCountdownEnd = onCountdownEnd
        _onLifeZero = onLifeZero
        _callback = callback

        for (const line of [
            "Jump the Shark!",
            "Survive",
            "50 levels!",
        ]) {
            game.splash(line)
        }

        info.setLife(2)
        info.setScore(0)
        scene.setBackgroundImage(sprites.background.forest2)
        firstLevel()
        intervals = startIntervals()

        controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
            if (dying) {
                return
            }

            if (attacking) {
                if (jumps === 0) {
                    me.sayText("Out of stamina!", 500, false)
                    return
                }

                jumps--
                me.sayText(`${jumps}`, 500, false)
            }

            me.vy = -200
        })

        controller.B.onEvent(ControllerButtonEvent.Pressed, () => {
            if (!hasMagicAxe || !me) {
                return
            }

            const loc = me.tilemapLocation()

            if (!loc) {
                return
            }
            
            const tileBelow = tiles.getTileLocation(loc.col, loc.row + 1)

            if (tileBelow.isWall()) {
                return
            }

            tiles.setWallAt(tileBelow, true)
            tiles.setTileAt(tileBelow, sprites.dungeon.stairLadder)

            if (Math.percentChance(5)) {
                tiles.setTileAt(tileBelow, sprites.builtin.cat2)

                music.play(
                    music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear),
                    music.PlaybackMode.InBackground,
                )
            }

            music.play(
                music.melodyPlayable(music.powerUp),
                music.PlaybackMode.InBackground,
            )

            hasMagicAxe = false

            timer.after(3000, () => {
                tiles.setWallAt(tileBelow, false)
                tiles.setTileAt(tileBelow, Asset.Image.EMPTY_TILE)

                music.play(
                    music.melodyPlayable(music.powerDown),
                    music.PlaybackMode.InBackground,
                )

                hasMagicAxe = true
            })
        })

        info.onCountdownEnd(() => {
            const sprite: Sprite = sprites.create(
                Asset.Image.VTAN_RAGE_FACE,
                Kind.Dark,
            )

            sprite.setFlag(SpriteFlag.GhostThroughWalls, true)

            tiles.placeOnTile(
                sprite,
                tiles.getTileLocation(-7, me.tilemapLocation().row - 3),
            )

            sprite.follow(me, 25)
        })
        info.onLifeZero(() => stop(false))
        scene.onOverlapTile(Kind.Player, sprites.dungeon.hazardLava0, (sprite, location) => {
            die(sprite)
        })
        scene.onOverlapTile(Kind.Player, sprites.dungeon.hazardLava1, (sprite, location) => {
            die(sprite)
        })
        scene.onOverlapTile(Kind.Player, Asset.Image.Jump.TILE_EXIT, (sprite: Sprite, location: tiles.Location) => {
            switch (level) {
                case 14:
                    interlude()
                    return
                case 24:
                    attainMagicBoots()
                    return
                case 34:
                    attainMagicAxe()
                    return
                case FINAL_LEVEL - 1:
                    finalLevel()
                    return
                default:
                    break
            }

            challengeLevel()
        })

        sprites.onOverlap(Kind.Player, Kind.Dark, (sprite, otherSprite) => {
            die(sprite)
        })
        sprites.onOverlap(Kind.Player, Kind.Executives, (sprite, otherSprite) => {
            const loc = otherSprite.tilemapLocation()

            tiles.placeOnTile(
                sprite,
                tiles.getTileLocation(loc.col - 1, loc.row),
            )

            for (const line of [
                "Look, I'm not going to beat around the bush.",
                "The development of this game",
                "was an unmitigated disaster.",
            ]) {
                game.showLongText(line, DialogLayout.Bottom)
            }
        })
        sprites.onOverlap(Kind.Player, Kind.MagicTools, (sprite, otherSprite) => {
            otherSprite.destroy()
            music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
            hasMagicAxe = true
            game.showLongText("You got the magic axe!", DialogLayout.Bottom)
            game.showLongText("Press 'B' to stand mid-air for 3 seconds.", DialogLayout.Bottom)
        })
        sprites.onOverlap(Kind.Player, Kind.MagicGear, (sprite, otherSprite) => {
            otherSprite.destroy()
            music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
            hasSpringBoots = true
            game.showLongText("You got the magic boots!", DialogLayout.Bottom)
            game.showLongText("Leap on your enemies to gain extra jumps.", DialogLayout.Bottom)
        })
        sprites.onOverlap(Kind.Player, Kind.Projectile, (sprite, otherSprite) => {
            hitAndPassThru(otherSprite)
        })
        sprites.onOverlap(Kind.Player, Kind.Sharks, (sprite, otherSprite) => {
            if (hasFootstool(sprite, otherSprite)) {
                footstool(sprite, otherSprite)
                return
            }

            hitAndPassThru(otherSprite)
        })
        sprites.onOverlap(Kind.Player, Kind.Enemy, (sprite, otherSprite) => {
            if (hasFootstool(sprite, otherSprite)) {
                footstool(sprite, otherSprite)
                otherSprite.sayText("Ow!", 500, false)
                return
            }

            otherSprite.sayText("Dude, personal space.", 500, false)
            info.changeScoreBy(-1)
        })
        sprites.onOverlap(Kind.Player, Kind.Goal, (sprite, otherSprite) => {
            stop(true)
        })
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
                    if (!attacking) {
                        return
                    }

                    for (const sprite of sprites.allOfKind(Kind.Enemy)) {
                        if (Math.percentChance(30)) {
                            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                            sprite.vy = -150
                        }
                    }
                },
                250,
            ),
            setInterval(
                () => {
                    timeout--

                    if (timeout === 0) {
                        info.startCountdown(5)
                    }

                    if (!attacking) {
                        return
                    }

                    info.changeScoreBy(1)

                    for (const sprite of sprites.allOfKind(Kind.Enemy)) {
                        const projectile = sprites.createProjectileFromSprite(
                            Asset.Image.PROTEST,
                            sprite,
                            randint(-75, -150), 0,
                        )
                        projectile.setKind(Kind.Projectile)
                    }
                },
                2000,
            ),
            setInterval(
                () => {
                    if (jumps === JUMP_MAX) {
                        return
                    }

                    jumps++
                    me.startEffect(effects.coolRadial, 250)
                },
                2000,
            ),
            setInterval(
                () => {
                    if (!attacking || testing) {
                        return
                    }

                    newShark(80, 20)
                },
                3000,
            ),
        ]
    }

    function resetButtonHandlers() {
        controller.A.onEvent(ControllerButtonEvent.Pressed, _onA)
        controller.B.onEvent(ControllerButtonEvent.Pressed, _onB)
        controller.up.onEvent(ControllerButtonEvent.Pressed, _onUp)
        controller.up.onEvent(ControllerButtonEvent.Repeated, _onUp)
        controller.down.onEvent(ControllerButtonEvent.Pressed, _onDown)
        controller.down.onEvent(ControllerButtonEvent.Repeated, _onDown)
        controller.left.onEvent(ControllerButtonEvent.Pressed, _onLeft)
        controller.left.onEvent(ControllerButtonEvent.Repeated, _onLeft)
        controller.right.onEvent(ControllerButtonEvent.Pressed, _onRight)
        controller.right.onEvent(ControllerButtonEvent.Repeated, _onRight)
        info.onCountdownEnd(_onCountdownEnd)
        info.onLifeZero(_onLifeZero)
    }

    function stop(win: boolean) {
        if (stopped) {
            return
        }

        stopped = true
        const score = info.score()
        const hp = info.life()

        info.setScore(prevScore)
        info.setLife(prevLife)
        scene.setBackgroundImage(prevBgImage)

        info.stopCountdown()
        stopIntervals()
        resetButtonHandlers()
        destroyAllSprites()
        _callback(win, score, hp)
    }

    function hitAndPassThru(sprite: Sprite) {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        info.changeLifeBy(-1)
        scene.cameraShake(8, 500)
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    }

    function hasFootstool(sprite: Sprite, otherSprite: Sprite): boolean {
        return hasSpringBoots && sprite.bottom - 8 <= otherSprite.top
    }

    function footstool(sprite: Sprite, otherSprite: Sprite) {
        sprite.vy = -200
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        info.changeScoreBy(200)
        sprite.sayText("+200", 500, false)
        hasSpringBoots = false
        timer.after(500, () => hasSpringBoots = true)
    }

    function setMagicUpgrade(sprite: Sprite) {
        tiles.placeOnTile(sprite, tiles.getTileLocation(15, 4))
        sprite.setFlag(SpriteFlag.GhostThroughWalls, true)

        animation.runMovementAnimation(
            sprite,
            animation.animationPresets(animation.bobbing),
            2000,
            true,
        )
    }

    function resetSprites() {
        for (const kind of [
            Kind.Player,
            Kind.Enemy,
            Kind.Neutral,
            Kind.Executives,
            Kind.Dark,
        ]) {
            sprites.destroyAllSpritesOfKind(kind)
        }
    }

    function nextLevel(attack: boolean = true) {
        attacking = attack
        info.stopCountdown()
        timeout = TIMEOUT_MAX
        level++
        resetSprites()
        info.changeLifeBy(1)
    }

    function firstLevel() {
        nextLevel()
        tiles.setCurrentTilemap(Asset.Tilemap.Jump.COURSE)
        tiles.placeOnTile(
            newPlot(),
            tiles.getTileLocation(8, GROUND - 1),
        )
        newMe()
    }

    function finalLevel() {
        nextLevel(false)
        tiles.setCurrentTilemap(Asset.Tilemap.Jump.GOAL)

        const pedestal = sprites.create(
            sprites.builtin.pedestal,
            Kind.Neutral,
        )
        const orb = sprites.create(
            sprites.projectile.bubble1,
            Kind.Goal,
        )

        tiles.placeOnTile(
            pedestal,
            tiles.getTileLocation(57, 23),
        )
        tiles.placeOnTile(
            orb,
            tiles.getTileLocation(57, 22)
        )

        pedestal.y -= 8
        orb.y -= 12
        newMe(1, 50)
    }

    function challengeLevel() {
        nextLevel()
        let obstacle: number = -1

        for (const tile of tiles.getTilesByType(Asset.Image.ARROW_RED)) {
            tiles.setTileAt(tile, Asset.Image.EMPTY_TILE)
        }

        tiles.setCurrentTilemap(Asset.Tilemap.Jump.COURSE)

        for (let i = 0; i < Math.max(18, level); ++i) {
            const tempGround = level > 4 && i > 8
                ? randint(GROUND, GROUND + (5 - level) % 5)
                : GROUND

            setGround(i, tempGround)

            if (obstacle < 0 && i > 8 && Math.percentChance(50 + i * 3)) {
                obstacle = i

                tiles.placeOnTile(
                    newPlot(),
                    tiles.getTileLocation(i, tempGround - 1),
                )
            }
        }

        for (let i = 8; i < Math.max(18, level); ++i) {
            if (i === obstacle) {
                continue
            }

            if (Math.percentChance(30 + i * 3)) {
                setHazard(i)
            }
        }

        let goal = randint(15, Math.max(18, level) - 1)

        if (goal === obstacle) {
            goal++
        }

        setGoal(goal)
        newMe()
        me.sayText(`Level ${level}`, 2000, false)
    }

    function interlude() {
        nextLevel()
        tiles.setCurrentTilemap(Asset.Tilemap.Jump.INTERLUDE)
        tiles.placeOnTile(
            newPlot(),
            tiles.getTileLocation(28, 28),
        )
        tiles.placeOnTile(
            newPlot(),
            tiles.getTileLocation(28, 42),
        )
        tiles.placeOnTile(
            sprites.create(
                Asset.Image.EXECUTIVE,
                Kind.Executives,
            ),
            tiles.getTileLocation(27, 14),
        )
        newMe(2, 42)
    }

    function attainMagicBoots() {
        nextLevel(false)
        tiles.setCurrentTilemap(Asset.Tilemap.Jump.ITEM_GET)

        setMagicUpgrade(sprites.create(
            Asset.Image.Jump.MAGIC_BOOTS,
            Kind.MagicGear,
        ))

        for (let i = 20; i <= 60; i += 8) {
            tiles.placeOnTile(
                newPlot(false),
                tiles.getTileLocation(i, 7),
            )
        }

        newMe()
    }

    function attainMagicAxe() {
        nextLevel(false)
        tiles.setCurrentTilemap(Asset.Tilemap.Jump.ITEM_GET)

        setMagicUpgrade(sprites.create(
            Asset.Image.Jump.MAGIC_AXE,
            Kind.MagicTools,
        ))

        newMe()
    }

    function die(sprite: Sprite) {
        dying = true
        sprites.destroy(sprite, effects.fire, 2000)
        scene.cameraShake(4, 500)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        sprite.sayText("AAAAAAAH!!")
        timer.after(1000, () => stop(false))
    }

    function newPlot(falling: boolean = true) {
        const thePlot = sprites.create(
            sprites.builtin.computer1,
            Kind.Enemy,
        )

        if (falling) {
            thePlot.ay = 300
        }

        return thePlot
    }

    function newMe(
        col: number | null = null,
        row: number | null = null,
    ) {
        if (col === null) {
            col = 1
        }

        if (row === null) {
            row = GROUND - 1
        }

        me = sprites.create(Asset.Image.Jump.PLAYER, Kind.Player)
        scene.cameraFollowSprite(me)
        controller.moveSprite(me, 100, 0)
        tiles.placeOnTile(me, tiles.getTileLocation(col, row))
        me.ay = 500
        jumps = JUMP_MAX
    }

    function newShark(minY: number, maxY: number) {
        const projectile: Sprite =
            sprites.createProjectileFromSide(
                sprites.builtin.sharkAttack1,
                -150, 0,
            )
        projectile.setKind(Kind.Sharks)
        projectile.sayText("GUESS WHO!")
        projectile.y = randint(minY, maxY)
        projectile.setFlag(SpriteFlag.GhostThroughTiles, true)
        projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
    }

    function removeTile(col: number, row: number) {
        tiles.setTileAt(
            tiles.getTileLocation(col, row),
            Asset.Image.EMPTY_TILE,
        )
        tiles.setWallAt(
            tiles.getTileLocation(col, row),
            false,
        )
    }

    function setGoal(col: number) {
        removeTile(col, GROUND - 3)

        tiles.setTileAt(
            tiles.getTileLocation(col, GROUND - 2),
            Asset.Image.Jump.TILE_EXIT_IMG,
        )
        tiles.setTileAt(
            tiles.getTileLocation(col, GROUND - 1),
            sprites.castle.tilePath2,
        )
        tiles.setTileAt(
            tiles.getTileLocation(col, GROUND),
            sprites.castle.tilePath5,
        )
        tiles.setTileAt(
            tiles.getTileLocation(col, GROUND + 1),
            sprites.castle.tilePath5,
        )

        tiles.setWallAt(
            tiles.getTileLocation(col, GROUND - 2),
            false,
        )
        tiles.setWallAt(
            tiles.getTileLocation(col, GROUND - 1),
            true,
        )
        tiles.setWallAt(
            tiles.getTileLocation(col, GROUND),
            true,
        )
        tiles.setWallAt(
            tiles.getTileLocation(col, GROUND + 1),
            true,
        )
    }

    function setGround(col: number, row: number | null = null) {
        if (row === null) {
            row = GROUND
        }

        let i: number

        for (i = GROUND + 1; i >= row + 1; --i) {
            tiles.setTileAt(
                tiles.getTileLocation(col, i),
                sprites.castle.tilePath5,
            )
            tiles.setWallAt(
                tiles.getTileLocation(col, i),
                true,
            )
        }

        tiles.setTileAt(
            tiles.getTileLocation(col, i),
            sprites.castle.tilePath2,
        )
        tiles.setWallAt(
            tiles.getTileLocation(col, i),
            true,
        )
        if (Math.percentChance(30)) {
            tiles.setTileAt(
                tiles.getTileLocation(col, i - 1),
                sprites.swamp.swampTile3,
            )
        }

        for (i = i - 1; i >= GROUND - 5; --i) {
            removeTile(col, i)
        }
    }

    function setHazard(col: number) {
        removeTile(col, GROUND - 2)
        removeTile(col, GROUND - 1)

        tiles.setTileAt(
            tiles.getTileLocation(col, GROUND),
            Math.percentChance(50)
                ? sprites.dungeon.hazardLava0
                : sprites.dungeon.hazardLava1,
        )
        tiles.setTileAt(
            tiles.getTileLocation(col, GROUND + 1),
            Math.percentChance(50)
                ? sprites.dungeon.hazardLava0
                : sprites.dungeon.hazardLava1,
        )

        tiles.setWallAt(
            tiles.getTileLocation(col, GROUND),
            false,
        )
        tiles.setWallAt(
            tiles.getTileLocation(col, GROUND + 1),
            true,
        )
    }
}
