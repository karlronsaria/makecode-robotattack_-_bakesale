namespace CutsceneLagPolice {
    export const Kind = {
        Story: SpriteKind.create(),
        Temp: SpriteKind.create(),
    }

    let sequence_running: boolean = false
    let prev_background: Image = null
    let prev_sprite_kind: number | null = null

    export function isRunning() {
        return sequence_running
    }

    export function knockBackX(
        sprite: Sprite,
        velocity: number,
        time: number,
    ) {
        scene.cameraShake(8, 200)
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
        sprite.vx = velocity
        timer.after(time, () => sprite.vx = 0)
    }

    function newStorySprite(image: Image) {
        const sprite: Sprite = sprites.create(image, Kind.Story)
        sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        sprite.setFlag(SpriteFlag.GhostThroughTiles, true)
        sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        return sprite
    }

    function placeBy(
        sprite: Sprite,
        location: tiles.Location,
        deltaCol: number,
        deltaRow: number,
    ) {
        tiles.placeOnTile(
            sprite,
            tiles.getTileLocation(
                location.col + deltaCol,
                location.row + deltaRow,
            ),
        )
    }

    export function startArrestSequence(
        sprite: Sprite,
        back: Image,
        callback: () => void | null = null,
    ) {
        if (sequence_running) {
            return
        }

        if (callback === null) {
            callback = () => { }
        }

        sequence_running = true
        sprite.setKind(Kind.Temp)
        const interval: number = 800
        const unit: Sprite = newStorySprite(Asset.Image.LagPolice.UNIT)
        unit.setPosition(sprite.x - 120, sprite.y - 20)
        music.play(music.melodyPlayable(music.siren), music.PlaybackMode.LoopingInBackground)

        let sanne: Sprite
        let rock: Sprite

        time_sequence([
            [250, () => {
                unit.vx = 200
            }],
            [100, () => {
                unit.ax = -200
            }],
            [150 + interval, () => {
                music.stopAllSounds()
                sprite.setImage(back)
                unit.vx = 0
                unit.ax = 0
            }],
            [250, () => {
                sanne = newStorySprite(Asset.Image.LagPolice.SANNE_DOWN)
                sanne.setPosition(unit.x - 16, unit.y)
            }],
            [100, () => {
                rock = newStorySprite(Asset.Image.LagPolice.ROCK_DOWN)
                rock.setPosition(unit.x + 16, unit.y)
            }],
            [100, () => {
                game.showLongText("You've done it now, missie.", DialogLayout.Bottom)
                game.showLongText("Feeding people poisoned cookies.", DialogLayout.Bottom)
            }],
            [500, () => {
                sanne.vy = 100
                timer.after(200, () => {
                    sanne.vy = 0
                    sanne.setImage(Asset.Image.LagPolice.SANNE_RIGHT)
                })
            }],
            [100, () => {
                rock.vy = 100
            }],
            [200, () => {
                rock.vy = 0
                rock.setImage(Asset.Image.LagPolice.ROCK_LEFT)
            }],
            [100, () => {
                game.showLongText("You're under arrest for assault and battery.", DialogLayout.Bottom)
            }],
            [100, () => {
                sanne.setImage(Asset.Image.LagPolice.SANNE_UP)
                rock.setImage(Asset.Image.LagPolice.ROCK_UP)
                sanne.vy = -100
                rock.vy = -100
                sprite.vy = -100
            }],
            [200, () => {
                sprites.destroy(sanne)
                sprites.destroy(rock)
                sprites.destroy(sprite)
            }],
            [300, () => {
                music.play(music.melodyPlayable(music.siren), music.PlaybackMode.LoopingInBackground)
                unit.ax = 500
                unit.setFlag(SpriteFlag.AutoDestroy, true)
            }],
            [1500, () => {
                music.stopAllSounds()
            }],
            [1600, () => {
                sequence_running = false
                callback()
            }],
        ])
    }

    export function startSequence(
        sprite: Sprite,
        back: Image,
        right: Image,
        left: Image,
        fallen: Image,
        script: string[],
        callback: (s: Sprite) => void | null = null,
    ) {
        if (sequence_running) {
            return
        }

        const scriptLen = 10

        if (script.length < scriptLen) {
            console.log(`Cutscene: Script error: ${scriptLen} lines expected`)
            return
        }

        sequence_running = true
        prev_background = scene.backgroundImage()
        prev_sprite_kind = sprite.kind()
        const loc = sprite.tilemapLocation()

        sprite.setKind(Kind.Temp)
        const office: Sprite = newStorySprite(Asset.Image.LagPolice.BG_OFFICE)
        office.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
        const rock: Sprite = newStorySprite(Asset.Image.LagPolice.ROCK_LEFT)
        rock.setPosition(scene.cameraProperty(CameraProperty.X + 3), scene.cameraProperty(CameraProperty.Y))
        rock.vx = -100
        const sanne: Sprite = newStorySprite(Asset.Image.LagPolice.SANNE_LEFT)
        sanne.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
        const blackBars: Sprite = newStorySprite(Asset.Image.LagPolice.BG_BLACK_BARS)
        blackBars.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
        rock.setFlag(SpriteFlag.AutoDestroy, true)
        sanne.setFlag(SpriteFlag.AutoDestroy, true)

        time_sequence([
            [500, () => {
                rock.setVelocity(0, 0)
                game.showLongText(script[0], DialogLayout.Bottom)
            }],
            [250, () => {
                sanne.setImage(Asset.Image.LagPolice.SANNE_RIGHT)
            }],
            [500, () => {
                game.showLongText(script[1], DialogLayout.Bottom)
            }],
            [250, () => {
                rock.setImage(Asset.Image.LagPolice.ROCK_RIGHT)
                rock.vx = 100
            }],
            [500, () => {
                sanne.vx = 100
            }],
            [1000, () => {
                scene.setBackgroundImage(prev_background)
                sprites.destroyAllSpritesOfKind(Kind.Story)
                showPoliceConfront(
                    sprite,
                    back,
                    right,
                    left,
                    fallen,
                    script,
                    callback === null
                        ? (s: Sprite) => { }
                        : callback,
                )
            }]
        ])
    }

    export function showPoliceConfront(
        sprite: Sprite,
        back: Image,
        right: Image,
        left: Image,
        fallen: Image,
        script: string[],
        callback: (s: Sprite) => void,
    ) {
        const prev_loc: tiles.Location = sprite.tilemapLocation()
        const prev_image: Image = sprite.image
        const interval: number = 800
        const unit: Sprite = newStorySprite(Asset.Image.LagPolice.UNIT)
        unit.setPosition(sprite.x - 120, sprite.y - 20)
        music.play(music.melodyPlayable(music.siren), music.PlaybackMode.LoopingInBackground)

        let sanne: Sprite
        let rock: Sprite

        time_sequence([
            [250, () => {
                unit.vx = 200
            }],
            [100, () => {
                unit.ax = -200
            }],
            [150 + interval, () => {
                music.stopAllSounds()
                sprite.setImage(back)
                unit.vx = 0
                unit.ax = 0
            }],
            [250, () => {
                sanne = newStorySprite(Asset.Image.LagPolice.SANNE_DOWN)
                sanne.setPosition(unit.x - 16, unit.y)
            }],
            [100, () => {
                rock = newStorySprite(Asset.Image.LagPolice.ROCK_DOWN)
                rock.setPosition(unit.x + 16, unit.y)
            }],
            [100, () => {
                game.showLongText(script[2], DialogLayout.Bottom)
            }],
            [500, () => {
                game.showLongText(script[3], DialogLayout.Bottom)
            }],
            [500, () => {
                sanne.vy = 100
                sanne.sayText(script[4], 500, false)
                timer.after(200, () => {
                    sanne.vy = 0
                    sanne.setImage(Asset.Image.LagPolice.SANNE_RIGHT)
                })
            }],
            [100, () => {
                rock.vy = 100
                rock.sayText(script[5], 500, false)
            }],
            [200, () => {
                rock.vy = 0
                rock.setImage(Asset.Image.LagPolice.ROCK_LEFT)
            }],
            [300, () => {
                sanne.sayText(script[6], 250, false)
                sprite.setImage(left)
                knockBackX(sprite, 200, 50)
            }],
            [500, () => {
                rock.sayText(script[7], 250, false)
                sprite.setImage(right)
                knockBackX(sprite, -200, 100)
            }],
            [500, () => {
                sanne.sayText(script[8], 250, false)
                sprite.setImage(left)
                knockBackX(sprite, 200, 50)
            }],
            [500, () => {
                rock.sayText(script[9], 250, false)
                sprite.setImage(fallen)
                knockBackX(sprite, -200, 100)
            }],
            [1000, () => {
                sanne.setImage(Asset.Image.LagPolice.SANNE_UP)
                rock.setImage(Asset.Image.LagPolice.ROCK_UP)
                sanne.vy = -100
                rock.vy = -100
            }],
            [200, () => {
                sprites.destroy(sanne)
                sprites.destroy(rock)
            }],
            [300, () => {
                music.play(music.melodyPlayable(music.siren), music.PlaybackMode.LoopingInBackground)
                unit.ax = 500
                unit.setFlag(SpriteFlag.AutoDestroy, true)
            }],
            [1500, () => {
                music.stopAllSounds()
            }],
            [2000, () => {
                callback(sprite)
                sequence_running = false
                sprite.setImage(prev_image)
                sprite.setKind(prev_sprite_kind)
                tiles.placeOnTile(sprite, prev_loc)
            }],
        ])
    }
}
