namespace my {
    export function followPath(
        sprite: Sprite,
        location: tiles.Location,
        speed: number,
    ) {
        let path = scene.aStar(
            sprite.tilemapLocation(),
            location,
        )

        if (!path) {
            return
        }

        path.removeAt(0)

        if (path.length === 0) {
            return
        }

        scene._followPath(sprite, path, speed)
    }

    export function plus(
        vec1: tiles.Location,
        vec2: number[],
    ): tiles.Location {
        return tiles.getTileLocation(
            vec1.col + vec2[0],
            vec1.row + vec2[1],
        )
    }
}
