namespace SatelliteSprite {
    export let all: Sprite[] = []
    export let numSatellites: number = 0
    export let nextAngle: number = 0
    export let radius: number = 0
    export let max: number = 1
    export let interval: number = 50
    export let delta: number = 0.01
    export let radiusStep: number = 0

    export function newSystem(
        sprite: Sprite,
        construct: () => Sprite,
        speed: number,
    ) {
        newSatellite(
            sprite,
            construct,
            radius,
            nextAngle
            % (max + 1)
            * 2
            / max,
            interval,
            delta,
            speed,
        )

        nextAngle++
    }

    function newSatellite(
        sprite: Sprite,
        construct: () => Sprite,
        radius: number,
        offsetAngle: number,
        interval: number,
        delta: number,
        speed: number = 1,
    ): Sprite {
        const satellite = construct()
        all.push(satellite)

        radius += 0.5 * (
            Math.max(sprite.width, sprite.height)
            + Math.max(satellite.width, satellite.height)
        )

        numSatellites++
        satellite.setFlag(SpriteFlag.Invisible, true)
        satellite.setFlag(SpriteFlag.GhostThroughSprites, true)
        satellite.setFlag(SpriteFlag.GhostThroughWalls, true)

        timer.after(interval, function () {
            satellite.setFlag(SpriteFlag.Invisible, false)
            satellite.setFlag(SpriteFlag.GhostThroughSprites, false)
        })

        sprites.setDataNumber(
            satellite,
            "angle",
            offsetAngle,
        )

        sprites.setDataNumber(
            satellite,
            "nextRadius",
            0,
        )

        const intervalId = setInterval(
            () => {
                let myAngle = sprites.readDataNumber(
                    satellite,
                    "angle",
                ) + speed / 64

                if (Math.abs(myAngle - 2) < delta) {
                    myAngle = 0
                }

                sprites.setDataNumber(
                    satellite,
                    "angle",
                    myAngle,
                )

                const nextRadius = sprites.readDataNumber(
                    satellite,
                    "nextRadius",
                )

                const newRadius = radius + radiusStep * nextRadius

                satellite.setPosition(
                    sprite.x + newRadius * Math.cos(Math.PI * myAngle),
                    sprite.y + newRadius * Math.sin(Math.PI * myAngle),
                )

                sprites.setDataNumber(
                    satellite,
                    "nextRadius",
                    radiusStep > 0
                        ? nextRadius + 1
                        : 0,
                )
            },
            interval,
        )

        sprites.onDestroyed(sprite.kind(), (sprite) => {
            satellite.destroy()
        })

        sprites.onDestroyed(satellite.kind(), (sprite) => {
            if (sprite.id === satellite.id) {
                clearInterval(intervalId)
                numSatellites--
            }
        })

        return satellite
    }

    function destroyAll() {
        for (const value of all) {
            value.destroy()
        }

        all = []
    }
}