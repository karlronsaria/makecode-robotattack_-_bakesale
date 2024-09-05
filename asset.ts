namespace Asset {
export namespace Tilemap {

export const EMPTY_LEVEL = assets.tilemap`emptyLevel`
export const HEALTHY_LIVING_01 = assets.tilemap`healthyLiving01`

export namespace Kitchen {
    export const COURSE = tilemap`kitchen`
}
export namespace HaterHunt {
    export const BOTTLE_SELLER = tilemap`haterHuntBottleSeller`
    export const ZEN_PUZZLE = tilemap`haterHuntZen`
    export const STEADFAST_PUZZLE = tilemap`haterHuntSteadfast`
    export const RAGE_PUZZLE = tilemap`haterHuntStanRage`
}
export namespace Jump {
    export const COURSE = tilemap`JumpGameCourse`
    export const GOAL = tilemap`JumpGameGoal`
    export const INTERLUDE = tilemap`JumpGameInterlude`
    export const ITEM_GET = tilemap`JumpGameMagicItemCourse000`
}

}
export namespace Image {

export const EMPTY_TILE: Image = assets.image`emptyTile`
export const ZEN_EMOTE: Image = assets.image`zenEmote`
export const HUFF_EMOTE: Image = assets.image`harumphEmote`
export const RAGE_EMOTE: Image = assets.image`rageEmote`
export const RUDE_SIGN: Image = assets.image`rudeSign`
export const GUY_IN_GLASSES: Image = assets.image`kPopHater`
export const TILE_DIRT_ROT180: Image = assets.tile`dirtTileRotate180`
export const PROTEST: Image = assets.image`protest`
export const VTAN_RAGE_FACE: Image = assets.image`vTanRageFace`
export const ARROW_RED: Image = assets.image`redArrow`
export const EXECUTIVE: Image = assets.image`executive`
export const SPARKLE_00: Image = assets.image`sparkle001`
export const SPARKLE_01: Image = assets.image`sparkle002`

export namespace Kitchen {
    export const CONVEYOR_END_LEFT = assets.image`conveyorEndLeft`
    export const CONVEYOR_END_RIGHT = assets.image`conveyorEndRight`
    export const CONVEYOR_SEGMENT = assets.image`conveyorBelt001`
    export const OVEN_ON = assets.image`ovenOnFront`
    export const OVEN_OFF = assets.image`ovenOffFront`
    export const PROCESSOR = assets.image`processor`
    export const MIXER = assets.image`mixer`
    export const WIRES = assets.image`wires`
    export const TERMINAL_00 = assets.image`terminal`
    export const TERMINAL_01 = assets.image`terminal001`
    export const INGREDIENT = assets.image`ingredience`
}
export namespace HaterHunt {
    export const KPOP_STAN_ENRAGED = assets.image`kPopStanEnraged`
    export const KPOP_STAN_ENRAGED_LEFT = assets.image`kPopStanEnragedLeft`
    export const TILE_NEXT_COURSE_DOOR = assets.tile`nextCourseDoor`
    export const HATERADE = assets.image`hater-ade`
}
export namespace Jump {
    export const TILE_EXIT = assets.tile`JumpGameExitTile`
    export const TILE_EXIT_IMG =assets.image`JumpGameExit`
    export const MAGIC_BOOTS = assets.image`magicBoots`
    export const MAGIC_AXE = assets.image`magicAxe`
    export const PLAYER = assets.image`yellowHatTrimmed`
}
export namespace StrayCats {
    export const MANAGER = assets.image`strayCatsManager`
}
export namespace ToddHoward {
    export const BG_SITTING_ACROSS = assets.image`toddHowardSittingAcross`
    export const BG_JUMPSCARE = assets.image`toddHowardJumpscare`
    export const TILE_ICON = assets.tile`toddHoward16_000`
}
export namespace TileUtil {
    export const OBJECT_01 = assets.tile`tileUtilobject1`
    export const OBJECT_02 = assets.tile`tileUtilobject2`
    export const OBJECT_03 = assets.tile`tileUtilobject3`
    export const OBJECT_04 = assets.tile`tileUtilobject4`
    export const OBJECT_09 = assets.tile`tileUtilobject9`
}
export namespace LagPolice {
    export const UNIT = assets.image`policeUnit`
    export const SANNE_DOWN = assets.image`sanneDown`
    export const SANNE_UP = assets.image`sanneForward`
    export const SANNE_LEFT = assets.image`sanneLeft`
    export const SANNE_RIGHT = assets.image`sanneRight`
    export const ROCK_DOWN = assets.image`rockDown`
    export const ROCK_UP = assets.image`rockForward`
    export const ROCK_LEFT = assets.image`rockLeft`
    export const ROCK_RIGHT = assets.image`rockRight`
    export const BG_OFFICE = assets.image`office`
    export const BG_BLACK_BARS = assets.image`blackBars`
    export const SOFTLOCK_JAIL = assets.image`gbj`
    export const SOFTLOCK_JAIL_FLOOR = assets.image`gbjRug`
}

}
export namespace Track {

export const PC_BOOT = assets.song`pcBoot`
export const RAGE_TREMOR = assets.song`rageTremor`
export const UH_OH =assets.song`uhOh`

}
}
