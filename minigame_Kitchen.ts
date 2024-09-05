namespace KitchenGame {
    const Kind = {
        Projectile: SpriteKind.create(),
        Neutral: SpriteKind.create(),
        Oven: SpriteKind.create(),
        Processor: SpriteKind.create(),
        Mixer: SpriteKind.create(),
    }

    export const MAX_SUCCESS = 3
    const UPDATE_TIME_ADD_MIN_INTERVAL = 15000
    const UPDATE_TIME_ADD_MAX_INTERVAL = 10000
    const UPDATE_TIME_INTERVAL = 1000
    const SEND_NEXT_INGREDIENT_INTERVAL = 6000
    
    let _callback: (s: number) => void = (s: number) => game.gameOver(s > 0)
    let intervals: any[] = []
    let ovenCoords: number[] = [8, 6]
    let processorCoords: number[] = [1, 4]
    let mixerCoords: number[] = [8, 2]
    let oven: Sprite = null
    let processor: Sprite = null
    let mixer: Sprite = null
    let me: Sprite = null
    let mixerOn: boolean = false
    let processorOn: boolean = false
    let ovenOn: boolean = false
    let speed: number = 0
    let ingredience: number = 0
    let mixerTime: number = 0
    let processorTime: number = 0
    let ovenTime: number = 0
    let weight: number = 1
    let timeAddMax: number = 15
    let timeAddMin: number = 11
    let timeToNotify: number = 5

    function isOvenOutstanding(): boolean {
        return ovenTime > 0
            && ovenTime <= timeToNotify
    }

    function isProcessorOutstanding(): boolean {
        return processorTime > 0
            && processorTime <= timeToNotify
    }

    function isMixerOutstanding(): boolean {
        return mixerTime > 0
            && mixerTime <= timeToNotify
    }

    function hasOvenExpired(): boolean {
        return ovenTime <= 0
    }

    function hasProcessorExpired(): boolean {
        return processorTime <= 0
    }

    function hasMixerExpired(): boolean {
        return mixerTime <= 0
    }
    
    export function newConveyorBelt(
        start: number,
        len: number,
        row: number,
        time: number = 500,
    ): Sprite[] {
        let sprites: Sprite[] = []
        let sprite: Sprite = newConveyorEndLeft(time)
        tiles.placeOnTile(sprite, tiles.getTileLocation(start, row))
        sprites.push(sprite)
        let i: number

        for (i = 1; i < len - 1; ++i) {
            sprite = newConveyorBeltSegment(time)
            tiles.placeOnTile(sprite, tiles.getTileLocation(start + i, row))
            sprites.push(sprite)
        }

        sprite = newConveyorEndRight(time)
        tiles.placeOnTile(sprite, tiles.getTileLocation(start + i, row))
        sprites.push(sprite)
        return sprites
    }

    function newConveyorEndLeft(
        time: number = 500,
    ): Sprite {
        const sprite = sprites.create(
            Asset.Image.Kitchen.CONVEYOR_END_LEFT,
            SpriteKind.Neutral,
        )
        animation.runImageAnimation(
            sprite, [img`
                . . . . . . . . . . . . . . . .
                . . . f f f f f f f f f f f f f
                . . f f c b b f c b b f c b b f
                . f c f c b b f c b b f c b b f
                . f c f c b b f c b b f c b b f
                . f c f c b b f c b b f c b b f
                . f c f f f f f f f f f f f f f
                . f f c c c c c c c c c c c c c
                . f c c b b b b b b b b b b b b
                . f c b b f b b b f b b b f b b
                . f c b f f c b f f c b f f c b
                . f c b b c b b b c b b b c b b
                . f c c b b b b b b b b b b b b
                . . f c c c c c c c c c c c c c
                . . . f f f f f f f f f f f f f
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . f f f f f f f f f f f f f
                . . f b f c b b f c b b f c b b
                . f c b f c b b f c b b f c b b
                . f c b f c b b f c b b f c b b
                . f c b f c b b f c b b f c b b
                . f c f f f f f f f f f f f f f
                . f f c c c c c c c c c c c c c
                . f c c b b b b b b b b b b b b
                . f c b b f b b b f b b b f b b
                . f c b f f c b f f c b f f c b
                . f c b b c b b b c b b b c b b
                . f c c b b b b b b b b b b b b
                . . f c c c c c c c c c c c c c
                . . . f f f f f f f f f f f f f
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . f f f f f f f f f f f f f
                . . f b b f c b b f c b b f c b
                . f c b b f c b b f c b b f c b
                . f c b b f c b b f c b b f c b
                . f c b b f c b b f c b b f c b
                . f c f f f f f f f f f f f f f
                . f f c c c c c c c c c c c c c
                . f c c b b b b b b b b b b b b
                . f c b b f b b b f b b b f b b
                . f c b f f c b f f c b f f c b
                . f c b b c b b b c b b b c b b
                . f c c b b b b b b b b b b b b
                . . f c c c c c c c c c c c c c
                . . . f f f f f f f f f f f f f
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                . . . f f f f f f f f f f f f f
                . . f c b b f c b b f c b b f c
                . f f c b b f c b b f c b b f c
                . f f c b b f c b b f c b b f c
                . f f c b b f c b b f c b b f c
                . f f f f f f f f f f f f f f f
                . f f c c c c c c c c c c c c c
                . f c c b b b b b b b b b b b b
                . f c b b f b b b f b b b f b b
                . f c b f f c b f f c b f f c b
                . f c b b c b b b c b b b c b b
                . f c c b b b b b b b b b b b b
                . . f c c c c c c c c c c c c c
                . . . f f f f f f f f f f f f f
                . . . . . . . . . . . . . . . .
            `], time, true,
        )
        return sprite
    }
    
    function newConveyorBeltSegment(
        time: number = 500,
    ): Sprite {
        const sprite = sprites.create(
            Asset.Image.Kitchen.CONVEYOR_SEGMENT,
            SpriteKind.Neutral,
        )
        animation.runImageAnimation(
            sprite, [img`
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f f f f 
        c b b f c b b f c b b f c b b f 
        c b b f c b b f c b b f c b b f 
        c b b f c b b f c b b f c b b f 
        c b b f c b b f c b b f c b b f 
        f f f f f f f f f f f f f f f f 
        c c c c c c c c c c c c c c c c 
        b b b b b b b b b b b b b b b b 
        b f b b b f b b b f b b b f b b 
        f f c b f f c b f f c b f f c b 
        b c b b b c b b b c b b b c b b 
        b b b b b b b b b b b b b b b b 
        c c c c c c c c c c c c c c c c 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            f f f f f f f f f f f f f f f f 
            f c b b f c b b f c b b f c b b 
            f c b b f c b b f c b b f c b b 
            f c b b f c b b f c b b f c b b 
            f c b b f c b b f c b b f c b b 
            f f f f f f f f f f f f f f f f 
            c c c c c c c c c c c c c c c c 
            b b b b b b b b b b b b b b b b 
            b f b b b f b b b f b b b f b b 
            f f c b f f c b f f c b f f c b 
            b c b b b c b b b c b b b c b b 
            b b b b b b b b b b b b b b b b 
            c c c c c c c c c c c c c c c c 
            f f f f f f f f f f f f f f f f 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            f f f f f f f f f f f f f f f f 
            b f c b b f c b b f c b b f c b 
            b f c b b f c b b f c b b f c b 
            b f c b b f c b b f c b b f c b 
            b f c b b f c b b f c b b f c b 
            f f f f f f f f f f f f f f f f 
            c c c c c c c c c c c c c c c c 
            b b b b b b b b b b b b b b b b 
            b f b b b f b b b f b b b f b b 
            f f c b f f c b f f c b f f c b 
            b c b b b c b b b c b b b c b b 
            b b b b b b b b b b b b b b b b 
            c c c c c c c c c c c c c c c c 
            f f f f f f f f f f f f f f f f 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            f f f f f f f f f f f f f f f f 
            b b f c b b f c b b f c b b f c 
            b b f c b b f c b b f c b b f c 
            b b f c b b f c b b f c b b f c 
            b b f c b b f c b b f c b b f c 
            f f f f f f f f f f f f f f f f 
            c c c c c c c c c c c c c c c c 
            b b b b b b b b b b b b b b b b 
            b f b b b f b b b f b b b f b b 
            f f c b f f c b f f c b f f c b 
            b c b b b c b b b c b b b c b b 
            b b b b b b b b b b b b b b b b 
            c c c c c c c c c c c c c c c c 
            f f f f f f f f f f f f f f f f 
            . . . . . . . . . . . . . . . . 
            `], time, true,
        )
        return sprite
    }
    
    function newConveyorEndRight(
        time: number = 500,
    ): Sprite {
        const sprite = sprites.create(
            Asset.Image.Kitchen.CONVEYOR_END_RIGHT,
            SpriteKind.Neutral,
        )
        animation.runImageAnimation(
            sprite, [img`
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f . . . . 
        c b b f c b b f c b b f f . . . 
        c b b f c b b f c b b f c f . . 
        c b b f c b b f c b b f c f . . 
        c b b f c b b f c b b f c f . . 
        f f f f f f f f f f f f c f . . 
        c c c c c c c c c c c c f f . . 
        b b b b b b b b b b b c c f . . 
        b f b b b f b b b f b b c f . . 
        f f c b f f c b f f c b c f . . 
        b c b b b c b b b c b b c f . . 
        b b b b b b b b b b b c c f . . 
        c c c c c c c c c c c c f . . . 
        f f f f f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
            `, img`
                . . . . . . . . . . . . . . . .
                f f f f f f f f f f f f . . . .
                f c b b f c b b f c b b f . . .
                f c b b f c b b f c b b f f . .
                f c b b f c b b f c b b f f . .
                f c b b f c b b f c b b f f . .
                f f f f f f f f f f f f f f . .
                c c c c c c c c c c c c f f . .
                b b b b b b b b b b b c c f . .
                b f b b b f b b b f b b c f . .
                f f c b f f c b f f c b c f . .
                b c b b b c b b b c b b c f . .
                b b b b b b b b b b b c c f . .
                c c c c c c c c c c c c f . . .
                f f f f f f f f f f f f . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                f f f f f f f f f f f f . . . .
                b f c b b f c b b f c b f . . .
                b f c b b f c b b f c b c f . .
                b f c b b f c b b f c b c f . .
                b f c b b f c b b f c b c f . .
                f f f f f f f f f f f f c f . .
                c c c c c c c c c c c c f f . .
                b b b b b b b b b b b c c f . .
                b f b b b f b b b f b b c f . .
                f f c b f f c b f f c b c f . .
                b c b b b c b b b c b b c f . .
                b b b b b b b b b b b c c f . .
                c c c c c c c c c c c c f . . .
                f f f f f f f f f f f f . . . .
                . . . . . . . . . . . . . . . .
            `, img`
                . . . . . . . . . . . . . . . .
                f f f f f f f f f f f f . . . .
                b b f c b b f c b b f c f . . .
                b b f c b b f c b b f c c f . .
                b b f c b b f c b b f c c f . .
                b b f c b b f c b b f c c f . .
                f f f f f f f f f f f f c f . .
                c c c c c c c c c c c c f f . .
                b b b b b b b b b b b c c f . .
                b f b b b f b b b f b b c f . .
                f f c b f f c b f f c b c f . .
                b c b b b c b b b c b b c f . .
                b b b b b b b b b b b c c f . .
                c c c c c c c c c c c c f . . .
                f f f f f f f f f f f f . . . .
                . . . . . . . . . . . . . . . .
            `], time, true,
        )
        return sprite
    }

    function attendOven(sprite: Sprite) {
        reduceWeight()
        ovenTime += randint(timeAddMin, timeAddMax)
        ovenOn = ingredience > 0
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprite.sayText(":)", 500, false)

        if (ovenOn) {
            stopAnimMove(sprite)
        }
        else {
            stopAnimation(sprite)
            oven.setImage(assets.image`ovenOffFront`)
        }

        tiles.placeOnTile(oven, tiles.getTileLocation(
            ovenCoords[0],
            ovenCoords[1],
        ))
    }

    function attendProcessor(sprite: Sprite) {
        reduceWeight()
        processorTime += randint(timeAddMin, timeAddMax)
        processorOn = ingredience > 0
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprite.sayText(":)", 500, false);

        (processorOn
            ? stopAnimMove
            : stopAnimation)(sprite)

        tiles.placeOnTile(processor, tiles.getTileLocation(
            processorCoords[0],
            processorCoords[1],
        ))
    }

    function attendMixer(sprite: Sprite) {
        reduceWeight()
        mixerTime += randint(timeAddMin, timeAddMax)
        mixerOn = ingredience > 0
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprite.sayText(":)", 500, false);

        (mixerOn
            ? stopAnimMove
            : stopAnimation)(sprite)

        tiles.placeOnTile(mixer, tiles.getTileLocation(
            mixerCoords[0],
            mixerCoords[1],
        ))
    }

    function takeIngredience(sprite: Sprite) {
        increaseWeight()
        sprites.destroy(sprite)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    }

    function updateMySpeed() {
        speed = 100 / weight
        controller.moveSprite(me, speed, speed)
    }

    function increaseWeight() {
        weight++
        updateMySpeed()
    }

    function reduceWeight() {
        if (weight <= 1) {
            return
        }

        weight--
        updateMySpeed()
    }

    export function stop() {
        stopIntervals()

        for (const kind of [
            Kind.Projectile,
            Kind.Oven,
            Kind.Processor,
            Kind.Mixer,
            SpriteKind.Player,
        ]) {
            sprites.destroyAllSpritesOfKind(kind)
        }
    }

    export function start(
        value: number,
        newPlayer: () => Sprite,
        callback: (s: number) => void = null,
    ) {
        _callback = callback === null
            ? _callback
            : callback

        tiles.setCurrentTilemap(Asset.Tilemap.Kitchen.COURSE)
        newConveyorBelt(2, 6, 1, 100)

        tiles.placeOnTile(
            sprites.create(
                Asset.Image.Kitchen.WIRES,
                Kind.Neutral,
            ),
            tiles.getTileLocation(4, 4),
        )

        oven = sprites.create(
            Asset.Image.Kitchen.OVEN_ON,
            Kind.Oven,
        )

        processor = sprites.create(
            Asset.Image.Kitchen.PROCESSOR,
            Kind.Processor,
        )

        mixer = sprites.create(
            Asset.Image.Kitchen.MIXER,
            Kind.Mixer,
        )
        animation.runImageAnimation(
            mixer, [img`
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ..ffffffffff....
            .fbcbcbcbbbbf...
            .fbbbbbbbbbbbf..
            .fddddddddbbbf..
            ..ffffffffdbbf..
            ..fdbf...fffff..
            ..fdbf.....f....
            ..fdbf..fffffff.
            ..fdbf..fb1dddf.
            ..fdbf..fb1dddf.
            ..fdbf...fb1df..
            ..fdbf....fff...
            ..fdbbfffffff...
            ..fdbbbbbbbbbf..
            .fdbbbbbbbbbbbf.
            ffffffffffffffff
            fccccccccccccccf
            fccccccccccccccf
            ffffffffffffffff
            ff............ff
            `, img`
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ..ffffffffff....
            .fbcbcbcbbbbf...
            .fbbbbbbbbbbbf..
            .fddddddddbbbf..
            ..ffffffffdbbf..
            ..fdbf...fffff..
            ..fdbf....f.....
            ..fdbf...fffffff
            ..fdbf...fb1dddf
            ..fdbf...fb1dddf
            ..fdbf....fb1df.
            ..fdbf.....fff..
            ..fdbbfffffff...
            ..fdbbbbbbbbbf..
            .fdbbbbbbbbbbbf.
            ffffffffffffffff
            fccccccccccccccf
            fccccccccccccccf
            ffffffffffffffff
            ff............ff
            `, img`
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ..ffffffffff....
            .fbcbcbcbbbbf...
            .fbbbbbbbbbbbf..
            .fddddddddbbbf..
            ..ffffffffdbbf..
            ..fdbf...fffff..
            ..fdbf.....f....
            ..fdbf..fffffff.
            ..fdbf..fb1dddf.
            ..fdbf..fb1dddf.
            ..fdbf...fb1df..
            ..fdbf....fff...
            ..fdbbfffffff...
            ..fdbbbbbbbbbf..
            .fdbbbbbbbbbbbf.
            ffffffffffffffff
            fccccccccccccccf
            fccccccccccccccf
            ffffffffffffffff
            ff............ff
            `, img`
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ..ffffffffff....
            .fbcbcbcbbbbf...
            .fbbbbbbbbbbbf..
            .fddddddddbbbf..
            ..ffffffffdbbf..
            ..fdbf...fffff..
            ..fdbf......f...
            ..fdbf.fffffff..
            ..fdbf.fb1dddf..
            ..fdbf.fb1dddf..
            ..fdbf..fb1df...
            ..fdbf...fff....
            ..fdbbfffffff...
            ..fdbbbbbbbbbf..
            .fdbbbbbbbbbbbf.
            ffffffffffffffff
            fccccccccccccccf
            fccccccccccccccf
            ffffffffffffffff
            ff............ff
            `], 500, true,
        )

        const terminal = sprites.create(
            Asset.Image.Kitchen.TERMINAL_00,
            Kind.Neutral,
        )
        animation.runImageAnimation(
            terminal, [
                Asset.Image.Kitchen.TERMINAL_00,
                Asset.Image.Kitchen.TERMINAL_01,
            ], 500, true,
        )
        tiles.placeOnTile(terminal, tiles.getTileLocation(1, 1))

        tiles.placeOnTile(oven, tiles.getTileLocation(
            ovenCoords[0],
            ovenCoords[1],
        ))
        tiles.placeOnTile(processor, tiles.getTileLocation(
            processorCoords[0],
            processorCoords[1],
        ))
        tiles.placeOnTile(mixer, tiles.getTileLocation(
            mixerCoords[0],
            mixerCoords[1],
        ))

        oven.sayText("lol I'm           an oven", 2000, false)
        processor.sayText("lol I'm           a processor", 2000, false)
        mixer.sayText("lol I'm           a mixer", 2000, false)

        ingredience = value
        ovenOn = true
        processorOn = true
        mixerOn = true

        me = newPlayer()
        me.setStayInScreen(true)
        me.sayText(`${ingredience}`)
        controller.moveSprite(me, 100, 100)

        ovenTime = randint(timeAddMin, timeAddMax)
        processorTime = randint(timeAddMin, timeAddMax)
        mixerTime = randint(timeAddMin, timeAddMax)

        intervals.push(setInterval(
            updateTimeAddMin,
            UPDATE_TIME_ADD_MIN_INTERVAL,
        ))
        intervals.push(setInterval(
            updateTimeAddMax,
            UPDATE_TIME_ADD_MAX_INTERVAL,
        ))
        intervals.push(setInterval(
            updateTime,
            UPDATE_TIME_INTERVAL,
        ))
        intervals.push(setInterval(
            sendNextIngredient,
            SEND_NEXT_INGREDIENT_INTERVAL,
        ))

        sprites.onOverlap(SpriteKind.Player, Kind.Oven, (sprite, otherSprite) => {
            if (isOvenOutstanding()) {
                attendOven(otherSprite)
            }
        })
        sprites.onOverlap(SpriteKind.Player, Kind.Processor, (sprite, otherSprite) => {
            if (isProcessorOutstanding()) {
                attendProcessor(otherSprite)
            }
        })
        sprites.onOverlap(SpriteKind.Player, Kind.Mixer, (sprite, otherSprite) => {
            if (isMixerOutstanding()) {
                attendMixer(otherSprite)
            }
        })
        sprites.onOverlap(SpriteKind.Player, Kind.Projectile, (sprite, otherSprite) => {
            takeIngredience(otherSprite)
        })
        scene.onHitWall(Kind.Projectile, (sprite, location) => {
            timer.after(500, () => {
                stopIntervals()
                _callback(0)
            })
        })
    }

    function updateTimeAddMin() {
        if (timeAddMin > 1 && Math.percentChance(60)) {
            timeAddMin--
        }
    }

    function updateTimeAddMax() {
        if (timeAddMax > 3
            && timeAddMax > timeAddMin
            && Math.percentChance(50)
        ) {
            timeAddMax--
        }
    }

    function stopIntervals() {
        for (const interval of intervals) {
            clearInterval(interval)
        }
    }

    function startAnimShake(sprite: Sprite): void {
        animation.runMovementAnimation(
            sprite,
            animation.animationPresets(animation.shake),
            25, true,
        )
    }

    function stopAnimMove(sprite: Sprite): void {
        animation.stopAnimation(
            animation.AnimationTypes.MovementAnimation,
            sprite,
        )
    }

    export function stopAnimation(sprite: Sprite): void {
        stopAnimMove(sprite)

        animation.stopAnimation(
            animation.AnimationTypes.ImageAnimation,
            sprite,
        )
    }

    function alert(sprite: Sprite) {
        sprite.sayText("!")
        startAnimShake(sprite)
    }

    function fail(sprite: Sprite) {
        sprite.sayText(":(")
        stopAnimation(sprite)
    }

    function updateTime() {
        info.changeScoreBy(1)

        if (ovenOn) {
            ovenTime--
        }

        if (processorOn) {
            processorTime--
        }

        if (mixerOn) {
            mixerTime--
        }

        if (ovenTime <= 0) {
            ovenOn = false
            fail(oven)
            oven.setImage(Asset.Image.Kitchen.OVEN_OFF)
        }
        else if (ovenTime <= timeToNotify) {
            alert(oven)
        }

        if (processorTime <= 0) {
            processorOn = false
            fail(processor)
        }
        else if (processorTime <= timeToNotify) {
            alert(processor)
        }

        if (mixerTime <= 0) {
            mixerOn = false
            fail(mixer)
        }
        else if (mixerTime <= timeToNotify) {
            alert(mixer)
        }

        if (hasOvenExpired() && hasProcessorExpired() && hasMixerExpired()) {
            timer.after(500, () => {
                stopIntervals()
                _callback(0)
            })
        }
        else if (!ovenOn && !processorOn && !mixerOn) {
            timer.after(500, () => {
                stopIntervals()
                _callback(
                    +!hasOvenExpired()
                    + +!hasProcessorExpired()
                    + +!hasMixerExpired()
                )
            })
        }
    }

    function sendNextIngredient() {
        if (ingredience <= 0) {
            return
        }

        const projectile = sprites.createProjectileFromSide(
            Asset.Image.Kitchen.INGREDIENT, 15, 0,
        )

        projectile.setKind(Kind.Projectile)

        tiles.placeOnTile(
            projectile,
            tiles.getTileLocation(2, 1),
        )

        ingredience--
        me.sayText(ingredience)
    }
}
