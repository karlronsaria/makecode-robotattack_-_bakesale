namespace ParticleSprite {
    export const StarKind = SpriteKind.create()

    const starAnim = [
        [
            Asset.Image.SPARKLE_00,
            Asset.Image.SPARKLE_01,
        ],
        [
            Asset.Image.SPARKLE_01,
            Asset.Image.SPARKLE_00,
        ],
    ]

    export let lifespan: number = 7000
    export let slowFactor: number = 10

    export function squareDistance(x: number, y: number): number {
        return x * x + y * y
    }

    export function all(): Sprite[] {
        return sprites.allOfKind(ParticleSprite.StarKind)
    }

    export function newAoeSprite(
        orbit: Sprite,
        kind: number,
        particles: number,
        spriteLifespan: number | null = null,
    ): Sprite[] {
        const minSqrDist: number = 16
        const w: number = 2
        let mySprites: Sprite[] = []

        spriteLifespan = spriteLifespan === null
            ? lifespan
            : spriteLifespan

        for (let i = 0; i < particles; ++i) {
            const r = 40 * Math.cos(10 + w * Math.PI * i / 7)
            const x = r * Math.cos(w * Math.PI * i / particles)
            const y = r * Math.sin(w * Math.PI * i / particles)

            if (squareDistance(x, y) < minSqrDist) {
                continue
            }

            const star = sprites.create(
                assets.image`sparkle001`,
                StarKind,
            )

            mySprites.push(star)
            star.lifespan = lifespan
            star.setFlag(SpriteFlag.GhostThroughWalls, true)

            animation.runImageAnimation(
                star, starAnim._pickRandom(),
                100, true,
            )

            star.setPosition(
                orbit.x + x,
                orbit.y + y,
            )

            star.setVelocity(
                orbit.vx,
                orbit.vy,
            )
        }

        return mySprites
    }

    export function startSlowEffect(
        kind: number,
        getSlowFactor: () => number,
    ) {
        sprites.onOverlap(
            StarKind,
            kind,
            (sprite, otherSprite) =>
                sprites.setDataNumber(
                    otherSprite,
                    "slowing",
                    getSlowFactor(),
                ),
        )
    }

    export function destroyAll() {
        sprites.destroyAllSpritesOfKind(StarKind)
    }
}
