const NUM_SHOPPERS = 10
const QUOTA = 300
const COST_OF_MASTERY = 500
const COST_OF_TRAINING = 1000
const COOKIE_COST = 5
const PERFECT_CONFECTION_COST = 40
const GILDING_REVENUE = 30
const EXTRA_LIFE_COST = 200
const TRUE_ENDING_GOAL = 20000
const OUTSTANDING_GOAL = 400000
const MY_NAME = "Francie"
const MY_NAME_UPPER = "FRANCIE"


const SKIN_SHEDDING_ELEGY = assets.song`skinSheddingElegy`
const PEWTER_CITY = assets.song`pewterCity`
const FUNERAL_MARCH = assets.song`funeralMarch`
const DISCOVERY_FANFARE = assets.song`discoveryFanfare`
const SUPER_METROID_COUNTDOWN = assets.song`superMetroidCountdown`
const HYPER_THEME = assets.song`hyperTheme`
const WHAT = assets.song`What`
const POWERUP = assets.song`linksAwakeningPowerup`
const POWERUP_GET = assets.song`linksAwakeningPowerupGet`
const ELEVATOR = assets.song`elevator`
const DOPIC_TOWN_001 = assets.song`dopicTown1`
const DOPIC_TOWN_002 = assets.song`dopicTown2`
const DOPIC_TOWN_003 = assets.song`dopicTown3`
const DOPIC_TOWN_004 = assets.song`dopicTown4`
const SOFTLOCK_JAIL = assets.song`softlockJail`
const PC_BOOT = assets.song`pcBoot`
const RAGE_TREMOR = assets.song`rageTremor`
const UH_OH = assets.song`uhOh`


namespace SpriteKind {
    export const _MY_START = SpriteKind.create()

    export const Goal = SpriteKind.create()
    export const Employer = SpriteKind.create()
    export const Killer = SpriteKind.create()
    export const Neutral = SpriteKind.create()
    export const Antisocial = SpriteKind.create()
    export const HesperianOrb = SpriteKind.create()
    export const RedundantSphere = SpriteKind.create()
    export const Professional = SpriteKind.create()
    export const PerfectFood = SpriteKind.create()
    export const Unlocking = SpriteKind.create()
    export const ForbiddenPotable = SpriteKind.create()
    export const Dark = SpriteKind.create()
    export const Trader = SpriteKind.create()
    export const Volunteer = SpriteKind.create()
    export const FakePlayer = SpriteKind.create()
    export const Invulnerable = SpriteKind.create()
    export const MagicGrease = SpriteKind.create()
    export const Lucky = SpriteKind.create()
    export const ExtraLife = SpriteKind.create()
    export const Companion = SpriteKind.create()
    export const TransitCard = SpriteKind.create()
    export const TransitSign = SpriteKind.create()
    export const Managerial = SpriteKind.create()
    export const MagicIngredience = SpriteKind.create()
    export const ToiletDisposal = SpriteKind.create()
    export const Idling = SpriteKind.create()
    export const Disinterested = SpriteKind.create()
    export const BeetrootEnjoyer = SpriteKind.create()
    export const ComputerTerminal = SpriteKind.create()
    export const DeusExMachinaCard = SpriteKind.create()
    export const BlueEyesWhiteDragonCard = SpriteKind.create()
    export const RecipeCard = SpriteKind.create()
    export const JumpPlayer = SpriteKind.create()
    export const HaterHuntPlayer = SpriteKind.create()
    export const StrayCatsPlayer = SpriteKind.create()

    export const _LENGTH = SpriteKind.create()
}

// /*
//   1  [x] name: `beetroot`,
//   2  [x] name: `magicChips`,
//   3  [x] name: `magicIcing`,
//   4  [x] name: `magicVanillaExtract`,
//   5  [x] name: `magicFlour`,
//   6  [x] name: `magicSugar`,
//   8  [x] name: `magicBakingPowder`,
//   9  [x] name: `magicCocoa`,
//  10  [x] name: `magicGilding`,
//  11  [x] name: `magicMargarine`,
// */

// /*
// Cocoa and vanilla extract should have high synergy
// Cocoa and lemon zest should have negative synergy
// Chips and lemon zest should have negative synergy
// Beetroot should have negative synergy with
//     cocoa
//     lemon
// Cocoa should not need a high amount of synergy
// Lemon should need a high amount of synergy
// Margarine should not require synergy but just have a slim chance of success
// Sugar should require high synergy
// Shield and slowing should have negative synergy
// */

const advice: string[][] = [
    [
        "The skill trader is also an avid animal enthusiast on the side.",
        "She claims she can work with ANY animal she meets.",
    ],
    [
        "Magic cocoa and magic vanilla extract have high synergy.",
    ],
    [
        "Magic lemons have negative synergy with magic cocoa and magic chips.",
        "Don't combine these ingredients",
        "unless you want to ruin your recipe.",
    ],
    [
        "Magic flour allows you to compound your new recipe's ingredients with your previous recipe.",
        "Use magic flour only when you want to combine the effects of two recipes.",
    ],
    [
        "Never use too much baking powder.",
        "Adding more than one magic baking powder will negate your synergy.",
        "If you want to enchant your recipe with powder, use magic flour.",
    ],
    [
        "Never use too much vanilla extract.",
        "Adding more than one magic vanilla extract will negate your synergy.",
        "If you want to enchant your recipe with vanilla, use magic flour.",
    ],
    [
        "Robbery is often overlooked in this town.",
        "But if you intentionally feed someone hazardous materials,",
        "you might get arrested for assault and battery.",
    ],
    [
        "A little cocoa goes a long way.",
    ],
    [
        "Magic margarine and magic sugar have high synergy",
        "when given similar doses.",
    ],
    [
        "Magic chips are an easy way to increase revenue.",
    ],
    [
        "Some say the Magic Mart is forced to stock beetroot because one single customer complained endlessly that they need to have it.",
        "Others say they do it because the owner thinks it's funny.",
    ],
    [
        "Magic gilding adds magical gold leaves to your batch.",
        "It makes confections look pretty and appealing to the more high-end buyers."
    ],
    [
        "Don't mix icing with lemons.",
        "I'm warning you, don't mix icing with lemons!",
        "I know, I know. Just trust me.",
        "The Magic Mart icing is a prototype and doesn't work well with tart flavors.",
    ],
    [
        "You may have heard that your true goal is to have enough money to pay off this town's debts.",
        "But gold is the real standard.",
        "You should invest all that money in gold!",
    ],
    [
        "There are two separate minigames that you can only play if you have an active companion.",
    ],
]

type recipe_t = {
    poisoned: boolean

    // beetroot
    //   red frame
    beetroot: boolean

    // flour
    compound: boolean

    // baking powder
    //   heart symbol
    lifespan_add: number

    // chips
    //   sparkle symbol
    revenue_add: number

    // [ ] todo
    //   star symbol
    revenue_mult: number

    // gilding
    gilding: number

    // margarine/butter
    //   speed symbol
    speed: number

    // cocoa
    //   brown frame
    ricochet: boolean

        // depends on speed

    // sugar
    //   multishot symbol
    shots: number

        // depends on speed

    // vanilla extract
    //   shield symbol
    hits: number

    // icing
    //   snowflake symbol
    slowing: number

    // lemon
    //   yellow frame
    shield: number
}

function clone(recipe: recipe_t): recipe_t {
    return {
        poisoned: recipe.poisoned,
        beetroot: recipe.beetroot,
        compound: recipe.compound,
        lifespan_add: recipe.lifespan_add,
        revenue_add: recipe.revenue_add,
        revenue_mult: recipe.revenue_mult,
        gilding: recipe.gilding,
        speed: recipe.speed,
        ricochet: recipe.ricochet,
        shots: recipe.shots,
        hits: recipe.hits,
        slowing: recipe.slowing,
        shield: recipe.shield,
    }
}

let recipe: recipe_t = {
    poisoned: false,
    beetroot: false,
    compound: false,
    lifespan_add: 0,
    revenue_add: 0,
    revenue_mult: 1,
    gilding: 0,
    speed: 0,
    ricochet: false,
    shots: 1,
    hits: 1,
    slowing: 0,
    shield: 0,
}

// user
// - [ ] 2024_08_24_025137
//   - q: what starting tile?
//   - a:
//     - dialogue
//       - What are you waiting for? Do it, you coward. Eat your starting tile.
//       - What starting tile?
//       - The tile. The one you started on. That tile.
// issue
// - [x] 2024_09_04_011218
//   - actual: StrayCatsGame lags and spawns too many enemies on the second play
// - [x] 2024_08_23_010728
//   - actual: rage and completion endings conflict
// - [x] 2024_08_21_183202
//   - actual: skill trader trades wrong skill
// - [x] 2024_08_21_183130
//   - actual: Dark sprite stops following after Lag Police cutscene
// - [x] 2024_08_20_223531
//   - actual: magic grease music stacks
// - [ ] 2024_08_20_223536
//   - actual: giant confection moves in wrong direction
// todo
// - module
//   - [ ] preserve custom animations
// - minigame
//   - find the k-pop hater
//     - [x] hide lives
//     - ~~[x] reposition runner when first encounter him running~~
//       - cancel: nah
//     - [x] redesign bottle seller surroundings(lack of trees)
// - companion
//   - [ ] give different abilities
// - [ ] redesign Magic Mart tilemap
// - [ ] add a way to force the eat-starting-tile sequence
// - [ ] redesign toilet
// - [ ] consider: nerf skills
// - [x] jump the shark
//   - [x] turn companion into shark
// - [x] jump the shark failure-to-enter message
// - [x] find the k-pop hater
//   - [x] turn companion into k-pop stan
// - [x] police arrests
//   - [x] lag police
//   - [x] assault and battery for using feces in recipe
//   - [x] consider adding gbj
// - [x] wiseman
//   - [x] stylize model
//   - [x] make the advice system fair
// - [x] add a second bus stop
// - [x] furnish the humble home
// - [x] toilet
// - [X] kitchen minigame
// - [X] wandering customers
// - recipe
//   - [ ] recipe multiplier
//   - [ ] increase move speed
//   - [ ] more enemies
//   - [x] slow enemies?
//   - [x] increase revenue
//   - [x] multiply? revenue (gilding)
//   - [x] cookie multishot
//   - [x] cookie momentum
//   - [x] cookie ricochet off walls
//   - ~~[x] larger cookie hitbox~~
//     - cancel
//   - [x] cookie hits
//   - [x] cookie lifespan


function jail(col: number, row: number) {
    let rug = sprites.create(
        assets.image`gbjRug`,
        SpriteKind.Neutral,
    )

    voluntold.destroy()
    setPlayer()
    canTurn = true
    talking = false
    nearsighted = false
    buttonsActive = false
    pet.destroy()

    const jail = sprites.create(
        assets.image`gbj`,
        SpriteKind.Neutral,
    )

    const loc = tiles.getTileLocation(col, row)
    tiles.placeOnTile(rug, loc)

    tiles.placeOnTile(
        voluntold,
        tiles.getTileLocation(col, row + 1),
    )

    voluntold.x += 8
    tiles.placeOnTile(jail, loc)

    for (const pair of [
        [col, row - 1],
        [col + 1, row - 1],
        [col + 2, row],
        [col + 2, row + 1],
        [col + 1, row + 2],
        [col, row + 2],
        [col - 1, row + 1],
        [col - 1, row],
    ]) {
        tiles.setWallAt(tiles.getTileLocation(pair[0], pair[1]), true)
    }

    const rock: Sprite = sprites.create(
        assets.image`rockDown`,
        SpriteKind.Neutral,
    )

    const sanne: Sprite = sprites.create(
        assets.image`sanneDown`,
        SpriteKind.Neutral,
    )

    tiles.placeOnTile(
        sanne,
        tiles.getTileLocation(
            col - 1, row + 1,
        ),
    )

    sanne.x += 8
    sanne.y += 8

    tiles.placeOnTile(
        rock,
        tiles.getTileLocation(
            col + 2, row + 1,
        ),
    )

    rock.x -= 8
    rock.y += 8;

    time_sequence([
        [5000, () => jail.sayText("I need to think about what I've done.")],
        [10000, () => jail.sayText("Yes, this is a softlock.")],
        [5000, () => jail.sayText("This is a softlock.")],
        [5000, () => jail.sayText("You're softlocked.")],
        [5000, () => jail.sayText("No, this is a softlock.")],
        [5000, () => jail.sayText("You're being softlocked.")],
        [5000, () => jail.sayText(":|", 10000, false)],
        [20000, () => jail.sayText("Look. You're softlocked. Okay?")],
        [2000, () => jail.sayText("You're not getting your game back.", 10000, false)],
        [20000, () => jail.sayText("Shoutout to Simpleflips", 10000, false)],
        [20000, () => jail.sayText("Don't put feces in your cookies.", 10000, false)],
    ])
}
function cloneAdvice(list: string[][]): string[][] {
    let newList: string[][] = []

    for (const est of list) {
        let temp = []

        for (const uan of est) {
            temp.push(uan)
        }

        newList.push(temp)
    }

    return newList
}
function shopAdvice(sprite: Sprite) {
    if (!hasMetTheWiseman) {
        hasMetTheWiseman = true
        sayLongText("Hello, my friend!")
        sayLongText("I'm considered a street-smart guru in this town.")
        sayLongText("I know about many of the goings-on here.")
    }

    sayLongText("I'll offer you advice if you offer a confection.")

    if (info.score() <= 2 * itemCost) {
        sayLongText("But it looks like you don't have enough right now.")
        return
    }

    if (!game.ask(`Buy advice for $${itemCost}?`)) {
        sayLongText("Well, it was nice meeting you anyway.")
        return
    }

    takeMaterialCost()

    timer.after(250, function () {
        sayLongText("Alright, a word of advice:")

        if (myAdvice.length === 0) {
            myAdvice = cloneAdvice(advice)
        }

        for (const item of myAdvice.removeAt(randint(0, myAdvice.length - 1))) {
            sayLongText(item)
        }
    })
}
function hitFood(sprite: Sprite) {
    const status = statusbars.getStatusBarAttachedTo(
        StatusBarKind.Health,
        sprite,
    )

    if (!status) {
        sprites.destroy(sprite, effects.disintegrate, 500)
        return
    }

    status.value--
}
function makePurchase(customer: Sprite, confection: Sprite, removeCustomer: boolean) {
    if (recipe.poisoned) {
        freeze()
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        sprites.destroyAllSpritesOfKind(SpriteKind.Goal)
        pet.destroy()
        customer.sayText("!")
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)

        time_sequence([
            [2000, () => {
                music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
                customer.destroy(effects.disintegrate, 500)
            }],
            [3000, () => voluntold.sayText("Uh oh.", 500, false)],
            [2000, () => startSequenceArrestAndSoftlock()],
        ])

        return
    }

    const drop: Sprite = Math.percentChance(1)
        ? sprites.create(assets.image`hater-ade`, SpriteKind.MagicGrease)
        : (hasLuck && Math.percentChance(5)
            ? sprites.create(assets.image`extraLife`, SpriteKind.ExtraLife)
            : (busCardsActive && !hasBusCard && Math.percentChance(5)
                ? sprites.create(assets.image`busCard`, SpriteKind.TransitCard)
                : sprites.create(assets.image`money`, SpriteKind.Goal)
            )
        )

    tiles.placeOnTile(drop, customer.tilemapLocation())

    if (removeCustomer) {
        sprites.destroy(customer)

        if (respawnShoppers) {
            setWindowShoppers(1, sprites.dungeon.doorOpenNorth)
        }
    }

    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)

    if (giantCookiePowerup) {
        return
    }

    hitFood(confection)
}
function hasTooMuchGilding(cart: number[]): boolean {
    return cart[Magic.GILDING]
        * ingredience[Magic.GILDING].price
        >= OUTSTANDING_GOAL
}
function startTooMuchGildingSequence() {
    sayLongText("Something wrong.")
    sayLongText("Something...")
    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
    sayLongText("ERROR")
    sayLongText("System Overload")
    sayLongText("Ingredients could not be processed in time")
    sayLongText("Shutting dow")
    buttonsActive = false
    talking = false
    controller.moveSprite(voluntold, 0, 0)
    tiles.placeOnTile(voluntold, tiles.getTileLocation(1, 3))
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    inBasement = false
    terminal.setKind(SpriteKind.Neutral)

    for (let i = 0; i < 20; ++i) {
        const sprite = sprites.create(
            assets.image`magicGilding`,
            SpriteKind.Neutral,
        )

        tiles.placeOnTile(
            sprite,
            tiles.getTileLocation(2, 1),
        )

        sprite.vx = 50
        sprite.y -= 9
        sprite.lifespan = 1750
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        pause(250)
    }

    for (const sprite of animatedEnvironment) {
        KitchenGame.stopAnimation(sprite)
    }

    for (let i = 1; i < 10; ++i) {
        scene.cameraShake(i * 2, i < 5 ? 500: 750 + 50 * i)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
        pause(1000)
    }

    timer.after(2000, function () {
        const card = sprites.create(
            assets.image`blueEyesWhiteDragon`,
            SpriteKind.BlueEyesWhiteDragonCard,
        )

        const cardShineEffect = sprites.create(img`
    bbbbbbbbbbbbbbbb11111555
    b......................5
    b......................5
    b......................5
    b......................5
    b......................5
    b......................5
    b......................1
    b......................1
    b......................1
    b......................1
    b......................1
    b......................b
    b......................b
    b......................b
    b......................b
    b......................b
    b......................b
    b......................b
    b......................b
    b......................b
    b......................b
    1......................b
    1......................b
    1......................b
    1......................b
    1......................b
    5......................b
    5......................b
    5......................b
    5......................b
    5......................b
    5......................b
    55511111bbbbbbbbbbbbbbbb
            `, SpriteKind.BlueEyesWhiteDragonCard)

        animation.runImageAnimation(
            cardShineEffect,
            [img`
    bbbbbbbbbbbbbbbb11111555
    b......................5
    b......................5
    b......................5
    b......................5
    b......................5
    b......................5
    b......................1
    b......................1
    b......................1
    b......................1
    b......................1
    b......................b
    b......................b
    b......................b
    b......................b
    b......................b
    b......................b
    b......................b
    b......................b
    b......................b
    b......................b
    1......................b
    1......................b
    1......................b
    1......................b
    1......................b
    5......................b
    5......................b
    5......................b
    5......................b
    5......................b
    5......................b
    55511111bbbbbbbbbbbbbbbb
            `, img`
            bbbbbbbbbbbbbbbbbbbb1111
            b......................1
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................1
            b......................1
            b......................1
            b......................1
            b......................1
            b......................b
            b......................b
            1......................b
            1......................b
            1......................b
            1......................b
            1......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            1......................b
            1111bbbbbbbbbbbbbbbbbbbb
            `, img`
            bbbbbbbbbbbbbbbbbbbbbbbb
            b......................1
            b......................1
            b......................1
            b......................1
            b......................1
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            1......................5
            1......................1
            1......................1
            1......................1
            1......................1
            5......................1
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            1......................b
            1......................b
            1......................b
            1......................b
            1......................b
            bbbbbbbbbbbbbbbbbbbbbbbb
            `, img`
            bbbbbbbbbbbbbbbbbbbbbbbb
            b......................b
            b......................b
            b......................b
            b......................b
            b......................1
            b......................1
            b......................1
            b......................1
            b......................1
            1......................5
            1......................5
            1......................5
            1......................5
            1......................5
            5......................5
            5......................5
            5......................5
            5......................5
            5......................1
            5......................1
            5......................1
            5......................1
            5......................1
            1......................b
            1......................b
            1......................b
            1......................b
            1......................b
            b......................b
            b......................b
            b......................b
            b......................b
            bbbbbbbbbbbbbbbbbbbbbbbb
            `, img`
            bbbbbbbbbbbbbbbbbbbbbbbb
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            1......................b
            1......................b
            1......................b
            1......................1
            1......................1
            5......................1
            5......................1
            5......................1
            5......................5
            5......................5
            5......................5
            5......................5
            5......................5
            5......................5
            1......................5
            1......................5
            1......................5
            1......................1
            1......................1
            b......................1
            b......................1
            b......................1
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            bbbbbbbbbbbbbbbbbbbbbbbb
            `, img`
            bbbbbbbbbbbbbbbbbbbbbbbb
            b......................b
            1......................b
            1......................b
            1......................b
            1......................b
            1......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................1
            5......................1
            5......................1
            1......................1
            1......................1
            1......................5
            1......................5
            1......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................1
            b......................1
            b......................1
            b......................1
            b......................1
            b......................b
            bbbbbbbbbbbbbbbbbbbbbbbb
            `, img`
            111bbbbbbbbbbbbbbbbbbbbb
            1......................b
            1......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            1......................b
            1......................b
            1......................b
            1......................b
            1......................b
            b......................1
            b......................1
            b......................1
            b......................1
            b......................1
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................1
            b......................1
            bbbbbbbbbbbbbbbbbbbbb111
            `, img`
            5511111bbbbbbbbbbbbbbbbb
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            5......................b
            1......................b
            1......................b
            1......................b
            1......................b
            1......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................1
            b......................1
            b......................1
            b......................1
            b......................1
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            b......................5
            bbbbbbbbbbbbbbbbb1111155
            `, img`
            55555511111bbbbbbbbbbbbb
            5......................b
            5......................b
            5......................b
            1......................b
            1......................b
            1......................b
            1......................b
            1......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................1
            b......................1
            b......................1
            b......................1
            b......................1
            b......................5
            b......................5
            b......................5
            bbbbbbbbbbbbb11111555555
            `, img`
            155555555511111bbbbbbbbb
            1......................b
            1......................b
            1......................b
            1......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................1
            b......................1
            b......................1
            b......................1
            bbbbbbbbb111115555555551
            `, img`
            1111155555555511111bbbbb
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            bbbbb1111155555555511111
            `, img`
            bbbb1111155555555511111b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b1111155555555511111bbbb
            `, img`
            bbbbbbbb1111155555555511
            b......................1
            b......................1
            b......................1
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            1......................b
            1......................b
            1......................b
            1155555555511111bbbbbbbb
            `, img`
            bbbbbbbbbbbb111115555555
            b......................5
            b......................5
            b......................1
            b......................1
            b......................1
            b......................1
            b......................1
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            b......................b
            1......................b
            1......................b
            1......................b
            1......................b
            1......................b
            5......................b
            5......................b
            555555511111bbbbbbbbbbbb
            `],
            25,
            true,
        )

        animation.runMovementAnimation(
            card,
            animation.animationPresets(animation.bobbing),
            2000,
            true,
        )

        animation.runMovementAnimation(
            cardShineEffect,
            animation.animationPresets(animation.bobbing),
            2000,
            true,
        )

        music.play(music.createSong(assets.song`discoveryFanfare`), music.PlaybackMode.InBackground)
        buttonsActive = true
        talking = true
        controller.moveSprite(voluntold, moveSpeed, moveSpeed)
    })
}
function reward(x: number, b: number, r: number): number {
    return b - Math.exp(Math.log(b) - r * x)
}
function isCompoundable(cart: number[], synergy: number, rate: number): boolean {
    return synergy > 0
        && Math.percentChance(
            cart[Magic.FLOUR]
            * 100
            / (1 + KitchenGame.MAX_SUCCESS - rate)
        )
}
function getSynergy(cart: number[]): number {
    const synergy_margarine_sugar
        = (cart[Magic.SUGAR] === cart[Magic.MARGARINE]
            ? 1
            : cart[Magic.SUGAR] + cart[Magic.MARGARINE] > 0
                ? -1
                : 0
        ) * (cart[Magic.SUGAR] + cart[Magic.MARGARINE])

    const synergy_vanilla
        = cart[Magic.VANILLA] > 1
            ? -1
            : cart[Magic.VANILLA]

    const synergy_cocoa
        = cart[Magic.COCOA] > 1
            ? -1
            : cart[Magic.COCOA]

    const synergy_icing
        = (cart[Magic.LEMON] > 0 ? -1 : 1)
        * cart[Magic.ICING]

    const synergy_cocoa_vanilla
        = (cart[Magic.VANILLA] === cart[Magic.COCOA]
            ? 1
            : cart[Magic.VANILLA] + cart[Magic.COCOA] > 0
                ? -1
                : 0
        ) * (cart[Magic.VANILLA] + cart[Magic.COCOA])

    const synergy_beetroot
        = (cart[Magic.BEETROOT] > 0
            && cart[Magic.COCOA]
                + cart[Magic.LEMON] === 0
            ? 1
            : cart[Magic.BEETROOT] === 0
                ? 0
                : -1
        ) * cart[Magic.BEETROOT]

    const synergy_lemon
        = (cart[Magic.LEMON] > 0
            && cart[Magic.BEETROOT]
                + cart[Magic.CHIPS]
                + cart[Magic.ICING]
                + cart[Magic.COCOA] === 0
            ? 1
            : cart[Magic.LEMON] === 0
                ? 0
                : -1
        ) * cart[Magic.LEMON]

    const synergy_powder
        = cart[Magic.POWDER] > 1
            ? -1
            : cart[Magic.POWDER]

    const synergy =
        synergy_margarine_sugar
        + reward(synergy_vanilla, 10, 0.2)
        + reward(synergy_cocoa, 20, 0.1)
        + reward(synergy_icing, 10, 0.2)
        + reward(synergy_cocoa_vanilla, 20, 0.1)
        + reward(synergy_beetroot, 15, 1)
        + reward(synergy_lemon, 15, 1)
        + reward(synergy_powder, 15, 1)

    return Math.floor(synergy)
}
function tryActivate(
    cart: number[],
    ingredient: number,
    hasFeature: (r: recipe_t) => boolean,
    synergy: number,
    threshold: number,
    rate: number,
    recipe: recipe_t,
    compound: boolean,
): boolean {
    return (compound && hasFeature(recipe))
        || (
            synergy >= threshold
            || Math.percentChance(
                cart[ingredient]
                * 100
                / (1 + KitchenGame.MAX_SUCCESS - rate)
            )
        )
}
function tryUpgrade(
    cart: number[],
    ingredient: number,
    getFeature: (r: recipe_t) => number,
    synergy: number,
    rate: number,
    recipe: recipe_t,
    compound: boolean,
): number {
    const currentLevel = compound
        ? getFeature(recipe)
        : 0

    const threshold = currentLevel < 2
        ? 7 * (currentLevel + 1)
        : 21

    return currentLevel
        + +(
            synergy >= threshold
            || Math.percentChance(
                cart[ingredient]
                * 100
                / (1 + KitchenGame.MAX_SUCCESS - rate)
            )
        )
}
function bake(
    recipe: recipe_t,
    cart: number[],
    synergy: number,
    rate: number,
): recipe_t {
    const compound = isCompoundable(cart, synergy, rate)

    const newRecipe: recipe_t = {
        poisoned:
            cart[Magic.FECES] > 0,
        beetroot: tryActivate(
            cart,
            Magic.BEETROOT,
            r => r.beetroot,
            synergy,
            14,
            rate,
            recipe,
            compound,
        ),
        compound: compound,
        lifespan_add: tryUpgrade(
            cart,
            Magic.POWDER,
            r => r.lifespan_add,
            synergy,
            rate,
            recipe,
            compound,
        ),
        revenue_add: tryUpgrade(
            cart,
            Magic.CHIPS,
            r => r.revenue_add,
            synergy,
            rate,
            recipe,
            compound,
        ),
        revenue_mult: 1, // todo
        gilding: tryUpgrade(
            cart,
            Magic.GILDING,
            r => r.gilding,
            synergy,
            rate,
            recipe,
            compound,
        ),
        speed: tryUpgrade(
            cart,
            Magic.MARGARINE,
            r => r.speed,
            synergy,
            rate,
            recipe,
            compound,
        ),
        ricochet: tryActivate(
            cart,
            Magic.COCOA,
            r => r.ricochet,
            synergy,
            14,
            rate,
            recipe,
            compound,
        ),
        shots: 1 + tryUpgrade(
            cart,
            Magic.SUGAR,
            r => r.shots,
            synergy,
            rate,
            recipe,
            compound,
        ),
        hits: tryUpgrade(
            cart,
            Magic.VANILLA,
            r => r.shots,
            synergy,
            rate,
            recipe,
            compound,
        ),
        slowing: tryUpgrade(
            cart,
            Magic.ICING,
            r => r.slowing,
            synergy,
            rate,
            recipe,
            compound,
        ),
        shield: tryUpgrade(
            cart,
            Magic.LEMON,
            r => r.shield,
            synergy,
            rate,
            recipe,
            compound,
        ),
    }

    return newRecipe
}

// /*
//   1  name: `beetroot`
//   2  name: `magicChips`
//   3  name: `magicIcing`
//   4  name: `magicVanillaExtract`
//   5  name: `magicFlour`
//   6  name: `magicSugar`
//   7  name: `magicFeces`
//   8  name: `magicBakingPowder`
//   9  name: `magicCocoa`
//  10  name: `magicLemons`
//  11  name: `magicGilding`
//  12  name: `magicMargarine`
//  13  name: `magicDmcaTakedownNotice`
// */

const Magic = {
    BEETROOT: 0,
    CHIPS: 1,
    ICING: 2,
    VANILLA: 3,
    FLOUR: 4,
    GILDING: 5,
    SUGAR: 6,
    FECES: 7,
    POWDER: 8,
    COCOA: 9,
    LEMON: 10,
    MARGARINE: 11,
    DMCA_TAKEDOWN_NOTICE: 12,
    MISSINGNO: 13,
}

const RecipeColor = {
    GREY: 0,
    WHITE: 1,
    YELLOW: 2,
    RED: 3,
    BROWN: 4,
}

const Skill = {
    BUY_EXTRA_LIFE: 1,
    DELEGATE: 2,
    DECOY: 3,
}

const recipes = [
    {
        name: `grey`,
        image: assets.image`greyCard`,
    },
    {
        name: `white`,
        image: assets.image`whiteCard`,
    },
    {
        name: `yellow`,
        image: assets.image`yellowCard`,
    },
    {
        name: `red`,
        image: assets.image`redCard`,
    },
    {
        name: `brown`,
        image: assets.image`brownCard`,
    },
]

const ingredience = [
    {
        name: `beetroot`,
        prettyname: "beetroot",
        image: assets.image`beetroot`,
        price: 5,
        num: 1,
        chance: 5,
    },
    {
        name: `magicChips`,
        prettyname: "magic chips",
        image: assets.image`magicChips`,
        price: 5,
        num: 5,
        chance: 80,
    },
    {
        name: `magicIcing`,
        prettyname: "magic icing",
        image: assets.image`magicIcing`,
        price: 10,
        num: 1,
        chance: 30,
    },
    {
        name: `magicVanillaExtract`,
        prettyname: "magic vanilla extract",
        image: assets.image`magicVanillaExtract`,
        price: 25,
        num: 1,
        chance: 80,
    },
    {
        name: `magicFlour`,
        prettyname: "magic flour",
        image: assets.image`magicFlour`,
        price: 50,
        num: 2,
        chance: 80,
    },
    {
        name: `magicGilding`,
        prettyname: "magic gilding",
        image: assets.image`magicGilding`,
        price: 3000,
        num: 1,
        chance: 5,
    },
    {
        name: `magicSugar`,
        prettyname: "magic sugar",
        image: assets.image`magicSugar`,
        price: 25,
        num: 2,
        chance: 80,
    },
    {
        name: `magicFeces`,
        prettyname: "magic feces",
        image: assets.image`magicFeces`,
        price: 50,
        num: 1,
        chance: 100,
    },
    {
        name: `magicBakingPowder`,
        prettyname: "magic baking powder",
        image: assets.image`magicBakingPowder`,
        price: 25,
        num: 1,
        chance: 80,
    },
    {
        name: `magicCocoa`,
        prettyname: "magic cocoa",
        image: assets.image`magicCocoa`,
        price: 45,
        num: 1,
        chance: 80,
    },
    {
        name: `magicLemons`,
        prettyname: "magic lemons",
        image: assets.image`magicLemons`,
        price: 35,
        num: 1,
        chance: 20,
    },
    {
        name: `magicMargarine`,
        prettyname: "magic margarine",
        image: assets.image`magicMargarine`,
        price: 5,
        num: 3,
        chance: 80,
    },
    {
        name: `magicDmcaTakedownNotice`,
        prettyname: "magic DMCA takedown notice",
        image: assets.image`magicDmcaTakedownNotice`,
        price: 0,
        num: 1,
        chance: 10,
    },
    {
        name: `missingno`,
        prettyname: "Tooltip missing!",
        image: assets.image`missingno`,
        price: 400000,
        num: 1,
        chance: 100,
    },
]

type spriteData_t = {
    name: string
    directions: Image[]
    remarks: string[]
    longText: string[]
    animations: Image[][]
}

const Idler = {
    SHOPPER: 0,
    CUSTOMTER_MALE: 1,
    CUSTOMER_FEMALE: 2,
    WISEMAN: 3,
}

const Companion = {
    LUCKY_CAT: 0,
    KING_SHARK: 1,
    KPOP_STAN: 2,
}

const COMPANION_INDEX = 4

const Dir = {
    RIGHT: 0,
    UP: 1,
    LEFT: 2,
    DOWN: 3,
}

const spriteData: spriteData_t[] = [
    {
        name: "shopper",
        directions: [
            assets.image`shopperRight`,
            assets.image`shopperBack`,
            assets.image`shopperLeft`,
            assets.image`shopperFront`,
        ],
        remarks: [
        ],
        longText: [
            "What? \"Try a sample?\" But it's beetroot. I don't like beetroot.",
            "Cookies? Sorry, no, thanks.",
        ],
        animations: [],
    },
    {
        name: "customerMale",
        directions: [
            assets.image`customerMaleRight`,
            assets.image`customerMaleBack`,
            assets.image`customerMaleLeft`,
            assets.image`customerMaleFront`,
        ],
        remarks: [
            "Where's da cookies?",
        ],
        longText: [
        ],
        animations: [],
    },
    {
        name: "customerFemale",
        directions: [
            assets.image`customerFemaleRight`,
            assets.image`customerFemaleBack`,
            assets.image`customerFemaleLeft`,
            assets.image`customerFemaleFront`,
        ],
        remarks: [
            "Excuse me!",
        ],
        longText: [
            "Hey, do you know where I can find beetroot?",
        ],
        animations: [],
    },
    {
        name: "wiseman",
        directions: [
            assets.image`wisemanRight`,
            assets.image`wisemanUp`,
            assets.image`wisemanLeft`,
            assets.image`wisemanDown`,
        ],
        remarks: [
        ],
        longText: [
        ],
        animations: [],
    },
    {
        name: "luckycat",
        directions: [
            assets.image`luckyCat_FlipX`,
            assets.image`luckyCat`,
            assets.image`luckyCat`,
            assets.image`luckyCat`,
        ],
        remarks: [
            "lol I'm a cat",
        ],
        longText: [
        ],
        animations: [
            assets.animation`luckyCatJump_FlipX`,
            [],
            assets.animation`luckyCatJump`,
            [],
        ],
    },
    {
        name: "kingshark",
        directions: [
            assets.image`kingShark_FlipX`,
            assets.image`kingShark`,
            assets.image`kingShark`,
            assets.image`kingShark`,
        ],
        remarks: [
            "lol I'm a shark",
        ],
        longText: [
        ],
        animations: [
            assets.animation`kingSharkJump_FlipX`,
            [],
            assets.animation`kingSharkJump`,
            [],
        ],
    },
    {
        name: "stan",
        directions: [
            assets.image`stan`,
            assets.image`stan`,
            assets.image`stan`,
            assets.image`stan`,
        ],
        remarks: [
            "I love BTS!",
            "I <3 BTS!",
            "Your music taste is bad!",
        ],
        longText: [
        ],
        animations: [
            assets.animation`stanJump`,
            [],
            assets.animation`stanJump`,
            [],
        ],
    }
]

function newCompanionSprite(direction: number | null = null): Sprite {
    if (direction === null) {
        direction = Dir.LEFT
    }

    const sprite = sprites.create(
        spriteData[COMPANION_INDEX + companionType]
            .directions[direction],
        SpriteKind.Companion,
    )

    animation.runImageAnimation(
        sprite,
        spriteData[COMPANION_INDEX + companionType]
            .animations[direction],
        50, true,
    )

    return sprite
}

function turnCompanion(direction: number, sprite: Sprite | null = null) {
    if (sprite === null) {
        sprite = pet
    }

    sprite.setImage(spriteData[COMPANION_INDEX + companionType].directions[direction])

    animation.runImageAnimation(
        sprite,
        spriteData[COMPANION_INDEX + companionType]
            .animations[direction],
        50, true,
    )
}

function tryNewRingShield(
    sprite: Sprite,
    construct: () => Sprite,
    num: number,
    speed: number,
    radius: number = 0
): boolean {
    if (sprites.allOfKind(SpriteKind.Food).length > 0) {
        if (SatelliteSprite.radiusStep === 0) {
            SatelliteSprite.radiusStep = 2
            
            for (const sprite of SatelliteSprite.all) {
                sprite.lifespan = 3000
            }

            return false
        }

        sprite.sayText(":(", 750, false)
        return false
    }

    SatelliteSprite.nextAngle = 0
    SatelliteSprite.radiusStep = 0
    SatelliteSprite.max = num
    SatelliteSprite.radius = radius

    for (let i = 0; i < num; ++i) {
        SatelliteSprite.newSystem(sprite, construct, speed)
    }

    return true
}

function newAoeSprite(sprite: Sprite, lifespan: number) {
    if (sprites.allOfKind(ParticleSprite.StarKind).length > 91) {
        return
    }

    ParticleSprite.newAoeSprite(
        sprite,
        SpriteKind.Enemy,
        randint(3, 9) * 7,
        lifespan,
    )
}

ParticleSprite.startSlowEffect(
    SpriteKind.Enemy,
    () => 2 * recipe.slowing,
)

function freeze() {
    talking = false
    buttonsActive = false
    canTurn = false
    controller.moveSprite(voluntold, 0, 0)
    enemiesCanMove = false

    for (const sprite of sprites.allOfKind(SpriteKind.Dark)) {
        sprite.follow(null)
    }
}

function unfreeze(headstart: number) {
    talking = true
    buttonsActive = true
    canTurn = true
    controller.moveSprite(voluntold, moveSpeed, moveSpeed)
    
    timer.after(headstart, function () {
        enemiesCanMove = true

        for (const sprite of sprites.allOfKind(SpriteKind.Dark)) {
            sprite.follow(voluntold, sprites.readDataNumber(sprite, "followSpeed"))
        }
    })
}

function startSequenceArrestAndSoftlock() {
    if (CutsceneLagPolice.isRunning()) {
        return
    }

    freeze()
    resetSprites()

    timer.after(500, function() {
        CutsceneLagPolice.startArrestSequence(
            voluntold,
            imageUp(),
            () => {
                tiles.setTilemap(tilemap`level21`)
                scene.setBackgroundColor(12)
                jail(4, 4)

                timer.after(3000, () => {
                    music.play(music.createSong(SOFTLOCK_JAIL), music.PlaybackMode.LoopingInBackground)
                })
            },
        )
    })
}

function startSequenceLagPolice(
    script: string[],
) {
    if (CutsceneLagPolice.isRunning()) {
        return
    }

    freeze()
    sprites.destroyAllSpritesOfKind(SpriteKind.Companion)

    timer.after(500, function() {
        CutsceneLagPolice.startSequence(
            voluntold,
            imageUp(),
            imageRight(),
            imageLeft(),
            assets.image`voluntoldFallen`,
            script,
            (s: Sprite) => {
                info.changeLifeBy(-3)

                if (info.life() <= 0) {
                    return
                }

                loseMoney(info.score() / 2)
                pause(500)

                if (!hasCourtSummons) {
                    hasCourtSummons = true
                    sayLongText("You received a Court Summons!")
                    sayLongText("Congrats.")
                }

                unfreeze(2000)
                trySetPet()
            }
        )
    })
}

function findDisposableInventory(): number {
    if (getTotal(inventory) === 0) {
        return -1
    }

    const tempList = inventory
        .map((v, i) => v > 0 ? i : -1)
        .filter(i => i >= 0)

    return inventory[Magic.FECES] > 0
        ? Magic.FECES
        : tempList._pickRandom()
}
function endRage() {
    music.stopAllSounds()
    enraged = false
    hyper = false
    enemySay("Cookies!")
    buttonsActive = true
    talking = true
    info.stopCountdown()
    countdownType = 0
    controller.moveSprite(voluntold, moveSpeed, moveSpeed)

    face.setImage(
        forcedToEatStartingTile === 2
            ? assets.image`justALittleSick`
            : assets.image`voluntoldBetterModel`
    )
}
function knockBack(): number {
    const temp: number = 3
    const waitTime = 1000 * 8 / (temp * moveSpeed)

    let vx: number = 0
    let vy: number = 0

    switch (direction) {
        case Dir.RIGHT:
            vx = temp * -moveSpeed
            vy = 0
            break
        case Dir.UP:
            vx = 0
            vy = temp * moveSpeed
            break
        case Dir.LEFT:
            vx = temp * moveSpeed
            vy = 0
            break
        case Dir.DOWN:
            vx = 0
            vy = temp * -moveSpeed
            break
    }

    controller.moveSprite(voluntold, 0, 0)
    voluntold.setVelocity(vx, vy)

    timer.after(waitTime, function () {
        voluntold.setVelocity(0, 0)
        controller.moveSprite(voluntold, moveSpeed, moveSpeed)
    })

    return waitTime
}
function reverseDirection(num: number) {
    return [Dir.LEFT, Dir.DOWN, Dir.RIGHT, Dir.UP][num]
}
function getRevenue() {
    return (4 + 0.5 * recipe.revenue_mult)
        * (itemCost + recipe.revenue_add)
        + (recipe.gilding * GILDING_REVENUE)
}
function getValue(cart: number[]): number {
    let sum: number = 0

    for (let i = 0; i < cart.length; ++i) {
        sum += cart[i] * ingredience[i].price
    }

    return sum
}
function getGameTimeByValue(value: number): number {
    return (value - 4000) * 39 / 3995 + 40
}
function startIdleMove(sprite: Sprite) {
    const speed: number = 35
    const direction: number = randint(0, 3)

    let vx: number = 0
    let vy: number = 0

    switch (direction) {
        case Dir.RIGHT:
            vx = 1
            vy = 0
            break
        case Dir.UP:
            vx = 0
            vy = -1
            break
        case Dir.LEFT:
            vx = -1
            vy = 0
            break
        case Dir.DOWN:
            vx = 0
            vy = 1
            break
    }

    sprite.setVelocity(vx * speed, vy * speed)

    sprite.setImage(
        spriteData[sprites.readDataNumber(sprite, "type")]
            .directions[direction]
    )

    timer.after(1500, function () {
        sprite.setVelocity(0, 0)
    })
}
function getTotal(cart: number[]): number {
    return cart.reduce((acc, v) => acc + v, 0)
}
function showCartRow(prettyname: string, quantity: number, price: number) {
    sayLongText(`(x${quantity}) ${prettyname}: $${price}.00`)
}
function showNewTotal(prettyname: string, quantity: number, price: number, balance: number) {
    showCartRow(prettyname, quantity, price)
    balance += quantity * price
    return balance
}
function addToTotal(index: number, balance: number) {
    return showNewTotal(
        ingredience[index].prettyname,
        cart[index],
        ingredience[index].price,
        balance
    )
}
function pushFetchList(sprite: Sprite) {
    sprite.setFlag(SpriteFlag.Invisible, true)
    fetchable.push(sprite)
}
function popFetchList(fetcher: Sprite) {
    const sprite = fetchable.pop()
    tiles.placeOnTile(sprite, fetcher.tilemapLocation())
    sprite.setFlag(SpriteFlag.Invisible, false)
}
function nearestSprite(sprite: Sprite, kind: number) {
    let shortestDistance: number = Infinity
    let nearestSprite: Sprite = sprite
    let temp: number

    for (const value of sprites.allOfKind(kind)) {
        temp = spriteSquareDistance(sprite, value)

        if (temp < shortestDistance) {
            shortestDistance = temp
            nearestSprite = value
        }
    }

    return nearestSprite
}
function spriteSquareDistance(sprite: Sprite, otherSprite: Sprite) {
    return tileSquareDistance(
        sprite.tilemapLocation(),
        otherSprite.tilemapLocation(),
    )
}
function tileSquareDistance(a: tiles.Location, b: tiles.Location) {
    const x = a.col - b.col
    const y = a.row - b.row
    return x * x + y * y
}
function sayLongText(text: string, image: Image = null) {
    game.setDialogCursor(
        image
            ? image
            : assets.image`dialogButton`
    )
    game.showLongText(text, DialogLayout.Bottom)
    game.setDialogCursor(assets.image`dialogButton`)
}
function meSayLongText(text: string) {
    game.setDialogCursor(face.image)
    game.showLongText(text, DialogLayout.Top)
    game.setDialogCursor(assets.image`dialogButton`)
}
function empSayLongText(text: string) {
    sayLongText(text, assets.image`employerFront`)
}
function createStalker() {
    stalker = sprites.create(assets.image`stalker`, SpriteKind.Dark)
    tiles.placeOnTile(stalker, tiles.getTileLocation(37 * randint(0, 1), 37 * randint(0, 1)))
    stalker.setFlag(SpriteFlag.GhostThroughWalls, true)
    const speed: number = moveSpeed * 0.4
    stalker.follow(voluntold, speed)
    sprites.setDataNumber(stalker, "followSpeed", speed)
}
function consumeHyperPotion(otherSprite: Sprite) {
    buttonsActive = false
    talking = false
    sayLongText("\"Ritalin-X\", huh?")
    sayLongText("Don't mind if I do.")
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    pause(500)
    music.stopAllSounds()
    sayLongText("Uh oh.")
    pause(500)
    sayLongText("Oh, I'm feeling something.")
    pause(1000)
    sayLongText("I feel")
    sayLongText("I feeeeeel...")
    face.setImage(assets.image`tweeked`)
    voluntold.setImage(assets.image`tweeked`)
    sayLongText("Ooooooooah.")
    sayLongText("Gooooooooood.")
    sayLongText("Fantaaaaastic.")
    sayLongText("Superrrrrfluous.")
    sayLongText("Completely unNECEEESSARY.")
    music.play(music.createSong(assets.song`hyperTheme`), music.PlaybackMode.LoopingInBackground)
    music.play(music.melodyPlayable(music.siren), music.PlaybackMode.LoopingInBackground)
    enraged = true
    hyper = true
    hasUsedHaterade = true
    newCountdown(23, 3)
    controller.moveSprite(voluntold, 200, 200)
    enemySay("AAAH!")
}
function consumeHaterade(otherSprite: Sprite) {
    buttonsActive = false
    talking = false
    sayLongText("\"Hater-ade\"?")
    sayLongText("A strange name for an energy drink.")
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    pause(500)
    music.stopAllSounds()
    sayLongText("Uh oh.")
    pause(500)
    sayLongText("Oh, I'm feeling something.")
    pause(1000)
    sayLongText("I feel")
    sayLongText("rage.")
    sayLongText("RAGE.")
    face.setImage(assets.image`rage`)
    voluntold.setImage(assets.image`rage`)
    sayLongText("RAGE!!")
    sayLongText("AAAAAAGH!!")
    music.play(music.createSong(assets.song`superMetroidCountdown`), music.PlaybackMode.LoopingInBackground)
    music.play(music.melodyPlayable(music.siren), music.PlaybackMode.LoopingInBackground)
    enraged = true
    hasUsedHaterade = true
    newCountdown(23, 2)
    controller.moveSprite(voluntold, 100, 100)
    enemySay("AAAH!")
}
function newCountdown(time: number, cdType: number) {
    countdownType = cdType
    info.startCountdown(time)
}
function resetSprites() {
    let temp = itemCost
        * sprites.allOfKind(SpriteKind.Goal).length

    if (fetchState > 0) {
        temp++
        fetchState = 0
    }

    if (temp > 0) {
        info.changeScoreBy(temp)
        voluntold.sayText(`Retrieved $${temp}`, 500, false)
    }

    ParticleSprite.destroyAll()

    for (const kind of [
        SpriteKind.Projectile,
        SpriteKind.Food,
        SpriteKind.Enemy,
    ]) {
        sprites.destroyAllSpritesOfKind(kind)
    }

    for (let i: number = SpriteKind._MY_START; i < SpriteKind._LENGTH; ++i) {
        sprites.destroyAllSpritesOfKind(i)
    }

    fetchable = []
}
function exitMart() {
    busToMarket(7, 7)
    inMart = false
}
function busToMarket(col: number = 14, row: number = 13) {
    resetSprites()
    tiles.setCurrentTilemap(tilemap`publicLot`)

    const mart = sprites.create(assets.image`market`, SpriteKind.Neutral)
    tiles.placeOnTile(mart, tiles.getTileLocation(7, 4))

    const busStop = sprites.create(assets.image`busStopSign`, SpriteKind.TransitSign)
    tiles.placeOnTile(busStop, tiles.getTileLocation(14, 10))

    voluntold.destroy()
    setPlayer()
    placePlayer(tiles.getTileLocation(col, row))
}
function newList(len: number): number[] {
    let list = []

    for (let index = 0; index < len; ++index) {
        list.push(0)
    }

    return list
}
function newIngredients(): number[] {
    return newList(ingredience.length)
}
function newCart() {
    cart = newIngredients()
}
function setAvailableIngredience() {
    availIngredience = []
    cart = []

    for (let index = 0; index < ingredience.length; ++index) {
        cart.push(0)

        if (inventory.length < ingredience.length) {
            inventory.push(0)
        }

        switch (index) {
            case Magic.DMCA_TAKEDOWN_NOTICE:
                if (hasAcceptedCharge) {
                    continue
                }

                break
            case Magic.MISSINGNO:
                if (info.score() < OUTSTANDING_GOAL) {
                    continue
                }

                break
        }
        
        const item = ingredience[index]

        for (let inst = 0; inst < item.num; ++inst) {
            if (Math.percentChance(item.chance)) {
                const sprite = sprites.create(item.image, SpriteKind.MagicIngredience)
                tiles.placeOnRandomTile(sprite, sprites.dungeon.floorLight2)
                sprite.sayText(`$${item.price}.00`)

                availIngredience.push({
                    image: item.image,
                    index: index,
                })
            }
        }
    }
}
function addToList(myCart: number[], list: number[]) {
    for (let index = 0; index < myCart.length; ++index) {
        if (cart[index] !== 0) {
            list[index] += myCart[index]
        }
    }
}
function addToInventory(myCart: number[]) {
    addToList(myCart, inventory)
}
function newBeetrootEnjoyer(): Sprite {
    const sprite = sprites.create(
        assets.image`excitedShopper`,
        SpriteKind.BeetrootEnjoyer,
    )

    sprite.sayText("BEETROOT!!!")
    return sprite
}
function newIdlingSprite(num: number): Sprite {
    const sprite = sprites.create(
        spriteData[num].directions[3],
        SpriteKind.Idling,
    )

    sprites.setDataNumber(sprite, "type", num)
    return sprite
}

let martCountdownInterval: number = -1

function setMartCountdownInterval(interval: number) {
    martCountdownInterval = interval
}

function getMartCountdownInterval() {
    return martCountdownInterval
}

function enterMart() {
    resetSprites()
    respawnShoppers = false
    tiles.setCurrentTilemap(tilemap`level18`)

    inMart = true
    leaveAttempts = 0
    cart = []

    setAvailableIngredience()
    manager = sprites.create(assets.image`manager`, SpriteKind.Managerial)
    tiles.placeOnTile(manager, tiles.getTileLocation(72, 6))

    for (let i = 0; i < 5; ++i) {
        tiles.placeOnRandomTile(
            newIdlingSprite(randint(1, 2)),
            assets.image`martTile`,
        )
    }

    voluntold.destroy()
    setPlayer()
    placePlayer(tiles.getTileLocation(74, 7))

    timer.after(100, () => {
        eventBasedMusic = true
        music.stopAllSounds()

        if (inMart && !hasAcceptedCharge)
            music.play(music.createSong(assets.song`dopicTown1`), music.PlaybackMode.InBackground)

        pause(2000)

        if (inMart && !hasAcceptedCharge)
            music.play(music.createSong(assets.song`dopicTown2`), music.PlaybackMode.LoopingInBackground)

        pause(4000)
        music.stopAllSounds()

        if (inMart && !hasAcceptedCharge)
            music.play(music.createSong(assets.song`dopicTown3`), music.PlaybackMode.LoopingInBackground)

        let countdown = 12 * randint(1, 4)

        setMartCountdownInterval(setInterval(
            () => {
                if (!enemiesCanMove) {
                    return
                }

                countdown--

                if (countdown !== 0) {
                    return
                }

                clearInterval(getMartCountdownInterval())
                music.stopAllSounds()

                if (!inMart) {
                    return
                }

                if (!hasAcceptedCharge)
                    music.play(music.createSong(assets.song`dopicTown4`), music.PlaybackMode.LoopingInBackground)

                countdownType = 0
                info.startCountdown(10)
                const awUgonDehhUgonGitKiww = sprites.create(assets.image`vTanRageFace`, SpriteKind.Dark)
                awUgonDehhUgonGitKiww.setFlag(SpriteFlag.GhostThroughWalls, true)
                awUgonDehhUgonGitKiww.setScale(2)
                tiles.placeOnTile(awUgonDehhUgonGitKiww, tiles.getTileLocation(12, 19))
                const followSpeed = moveSpeed / 1.5
                awUgonDehhUgonGitKiww.follow(voluntold, followSpeed)
                sprites.setDataNumber(awUgonDehhUgonGitKiww, "followSpeed", followSpeed)
            },
            1000,
        ))
    })
}
function enterTopFloor(col: number, row: number) {
    resetSprites()

    if (inMart) {
        inMart = false
        info.stopCountdown()
    }

    tiles.setCurrentTilemap(tilemap`level2`)
    goalSprite = sprites.create(assets.image`employerFront`, SpriteKind.Employer)
    tiles.placeOnTile(goalSprite, tiles.getTileLocation(4, 5))
    killer = sprites.create(img`
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
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbfbf1b1b1f....
        ....f1b1b1ffffbfbfbf....
        ....fbfbfffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Killer)
    tiles.placeOnTile(killer, tiles.getTileLocation(26, 16))

    let busStop = sprites.create(assets.image`busStopSign`, SpriteKind.TransitSign)
    tiles.placeOnTile(busStop, tiles.getTileLocation(23, 35))

    busStop = sprites.create(assets.image`busStopSign`, SpriteKind.TransitSign)
    tiles.placeOnTile(busStop, tiles.getTileLocation(36, 14))

    respawnShoppers = true

    if (recipe.beetroot) {
        tiles.placeOnRandomTile(
            newBeetrootEnjoyer(),
            assets.image`topFloorDoor`
        )
    }
    else {
        setWindowShoppers(NUM_SHOPPERS, sprites.dungeon.doorOpenNorth)
    }

    placePlayer(
        col < 0 || row < 0
            ? tiles.getTilesByType(startingTile.image)._pickRandom()
            : tiles.getTileLocation(col, row)
    )

    if (hasConfectioneryMastery) {
        createStalker()
    }
}
function createDecoy() {
    if (decoyExists) {
        return
    }

    hasUsedDecoy = true
    music.play(music.createSong(assets.song`skinSheddingElegy`), music.PlaybackMode.InBackground)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    decoy = sprites.create(assets.image`decoy`, SpriteKind.FakePlayer)
    tiles.placeOnTile(decoy, voluntold.tilemapLocation())
    decoy.lifespan = 7000
    decoy.sayText(`${Math.floor(decoy.lifespan / 1000)} seconds`, 1000, false)
    decoyExists = true

    if (recipe.beetroot) {
        timer.after(4000, function() {
            decoy.sayText([
                "I don't think it's working.",
                "Huh.",
                "Hm, about that...",
                "Well, good luck with this one.",
                "Sorry. Can't help much.",
                "Well that's just...",
                "Well, I tried. I think.",
                "Don't look at me. It's not my fault.",
                "Believe in yourself!",
            ]._pickRandom())
        })
    }
}
function placePlayer(loc: tiles.Location) {
    tiles.placeOnTile(voluntold, loc)
    trySetPet()
}
function setPlayer() {
    face.setImage(
        forcedToEatStartingTile === 2
            ? assets.image`justALittleSick`
            : assets.image`voluntoldBetterModel`
    )
    voluntold = sprites.create(face.image, SpriteKind.Player)
    controller.moveSprite(voluntold, moveSpeed, moveSpeed)
    scene.cameraFollowSprite(voluntold)
}
function trySetPet() {
    if (companionState < 2) {
        return
    }

    // link: crown pixel art
    // - url
    //   - <https://www.vecteezy.com/vector-art/25560519-crown-pixel-8-bit-isolated-on-white-background>
    //   - <https://www.shutterstock.com/image-vector/medieval-crown-pixel-art-set-golden-2184560679>
    //   - <https://www.dreamstime.com/crown-pixel-art-icon-pixel-illustration-crown-pixel-art-icon-pixel-color-illustration-image183751092>
    //   - <https://www.vecteezy.com/vector-art/4829248-crown-collection-in-pixel-art-style>
    //   - <https://www.pinterest.com/pin/pixel-art-crown--516014069784983746/>
    //   - <https://www.freepik.com/premium-vector/pixel-art-king-crown-icon-bit-game_11812813.htm>
    // - retrieved: 2024_08_23

    pet = newCompanionSprite()
    pet.setFlag(SpriteFlag.GhostThroughTiles, true)
    pet.setFlag(SpriteFlag.GhostThroughWalls, true)
    tiles.placeOnTile(
        pet,
        tiles.getTileLocation(
            voluntold.tilemapLocation().col + (randint(0, 1) * 2 - 1),
            voluntold.tilemapLocation().row + (randint(0, 1) * 2 - 1)
        )
    )
}
function newExit(col: number, row: number) {
    const exitKind = SpriteKind.create()

    const exit = sprites.create(
        assets.image`exitDoor`,
        exitKind,
    )

    tiles.placeOnTile(
        exit,
        tiles.getTileLocation(col, row)
    )

    const sign = sprites.create(
        assets.image`exitSign`,
        SpriteKind.Neutral,
    )
    animation.runImageAnimation(
        sign,
        [img`
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 . . . . . . . . . . . . . . . 7
            7 . 7 7 7 . 7 . 7 . 7 . 7 7 7 . 7
            7 . 7 . . . 7 . 7 . 7 . . 7 . . 7
            7 . 7 7 . . . 7 . . 7 . . 7 . . 7
            7 . 7 . . . 7 . 7 . 7 . . 7 . . 7
            7 . 7 7 7 . 7 . 7 . 7 . . 7 . . 7
            7 . . . . . . . . . . . . . . . 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        `, img`
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
            6 . . . . . . . . . . . . . . . 6
            6 . 6 6 6 . 6 . 6 . 6 . 6 6 6 . 6
            6 . 6 . . . 6 . 6 . 6 . . 6 . . 6
            6 . 6 6 . . . 6 . . 6 . . 6 . . 6
            6 . 6 . . . 6 . 6 . 6 . . 6 . . 6
            6 . 6 6 6 . 6 . 6 . 6 . . 6 . . 6
            6 . . . . . . . . . . . . . . . 6
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
            . . . . . . . . . . . . . . . . .
        `, img`
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            b b b b b b b b b b b b b b b b b
            b . . . . . . . . . . . . . . . b
            b . b b b . b . b . b . b b b . b
            b . b . . . b . b . b . . b . . b
            b . b b . . . b . . b . . b . . b
            b . b . . . b . b . b . . b . . b
            b . b b b . b . b . b . . b . . b
            b . . . . . . . . . . . . . . . b
            b b b b b b b b b b b b b b b b b
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
        `, img`
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
            6 . . . . . . . . . . . . . . . 6
            6 . 6 6 6 . 6 . 6 . 6 . 6 6 6 . 6
            6 . 6 . . . 6 . 6 . 6 . . 6 . . 6
            6 . 6 6 . . . 6 . . 6 . . 6 . . 6
            6 . 6 . . . 6 . 6 . 6 . . 6 . . 6
            6 . 6 6 6 . 6 . 6 . 6 . . 6 . . 6
            6 . . . . . . . . . . . . . . . 6
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
            . . . . . . . . . . . . . . . . .
        `, img`
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . .
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 . . . . . . . . . . . . . . . 7
            7 . 7 7 7 . 7 . 7 . 7 . 7 7 7 . 7
            7 . 7 . . . 7 . 7 . 7 . . 7 . . 7
            7 . 7 7 . . . 7 . . 7 . . 7 . . 7
            7 . 7 . . . 7 . 7 . 7 . . 7 . . 7
            7 . 7 7 7 . 7 . 7 . 7 . . 7 . . 7
            7 . . . . . . . . . . . . . . . 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        `],
        100,
        true,
    )

    tiles.placeOnTile(
        sign,
        tiles.getTileLocation(col, row - 1)
    )

    buttonsActive = false
    talking = false
    nearsighted = false
    forcedToEatStartingTile = 0
    voluntold.destroy()
    setPlayer()
    voluntold.setStayInScreen(true)

    tiles.placeOnTile(
        voluntold,
        tiles.getTileLocation(4, 4)
    )

    sprites.onOverlap(SpriteKind.Player, exitKind, function (sprite, otherSprite) {
        if (game.ask("Exit the game?")) {
            game.gameOver(true)
        }

        tiles.placeOnTile(
            sprite,
            tiles.getTileLocation(
                otherSprite.tilemapLocation().col - 2,
                otherSprite.tilemapLocation().row,
            ),
        )
    })
}
function startGallery(
    callback: () => void,
) {
    showCollection(
        getCollection(),
        getCards(),
        getIngredience(),
        getRecipeCards(),
        callback,
    )
}
function showCollection(
    collection: Image[],
    cards: Image[],
    ingredients: Image[],
    recipeCards: Image[],
    callback: () => void,
) {
    const COLS = 7
    const START_COL = 1
    const START_R0W = 1

    if (hasBlueEyes) {
        info.changeScoreBy(OUTSTANDING_GOAL)
    }

    voluntold.destroy()
    resetSprites()
    tiles.setCurrentTilemap(tilemap`level16`)
    scene.centerCameraAt(0, 0)

    for (let index = 0; index < collection.length; index++) {
        const sprite = sprites.create(
            collection[index],
            SpriteKind.Neutral
        )

        tiles.placeOnTile(
            sprite,
            tiles.getTileLocation(
                Math.trunc(index % COLS) + START_COL,
                Math.trunc(index / COLS) + START_R0W,
            ),
        )

        animation.runMovementAnimation(
            sprite,
            animation.animationPresets(animation.bobbing),
            2000,
            true
        )
    }

    for (let index = 0; index < cards.length; index++) {
        const sprite = sprites.create(
            cards[index],
            SpriteKind.Neutral,
        )

        tiles.placeOnTile(
            sprite,
            tiles.getTileLocation(
                Math.trunc((2 * index) % COLS) + START_COL,
                Math.trunc(collection.length / COLS) + 2 + START_R0W,
            ),
        )

        animation.runMovementAnimation(
            sprite,
            animation.animationPresets(animation.bobbing),
            2000,
            true
        )
    }

    for (let index = 0; index < ingredients.length; index++) {
        const sprite = sprites.create(
            ingredients[index],
            SpriteKind.Neutral,
        )

        tiles.placeOnTile(
            sprite,
            tiles.getTileLocation(
                Math.trunc(index % COLS) + START_COL,
                Math.trunc(index / COLS) + 6 + START_R0W,
            ),
        )

        animation.runMovementAnimation(
            sprite,
            animation.animationPresets(animation.bobbing),
            2000,
            true
        )
    }

    for (let index = 0; index < recipeCards.length; ++index) {
        const sprite = sprites.create(
            recipeCards[index],
            SpriteKind.Neutral,
        )

        tiles.placeOnTile(
            sprite,
            tiles.getTileLocation(
                Math.trunc((2 * index) % COLS) + START_COL,
                Math.trunc(index / COLS) + 10 + START_R0W,
            ),
        )

        animation.runMovementAnimation(
            sprite,
            animation.animationPresets(animation.bobbing),
            2000,
            true
        )
    }

    timer.after(1000, function() {
        sayLongText(`You collected: ${collection.length + cards.length}/14`)
        sayLongText(`You rammed your head ${arghAWall} times.`)
        sayLongText(`You found: ${ingredients.length}/${ingredience.length} ingredients.`)
        sayLongText(`You found: ${recipeCards.length}/${recipes.length - 1} recipes.`)

        callback()
    })
}
function loseMoney(amount: number) {
    info.changeScoreBy(-amount)
    voluntold.sayText(`-$${amount}`, 500, false)
}
function hitPlayer(
    sprite: Sprite,
    hits: number = 1,
    robAmount: number | null = null
) {
    if (eventBasedMusic) {
        music.stopAllSounds()
    }

    if (inMart) {
        music.stopAllSounds()
        inMart = false
    }

    if (robAmount === null) {
        robAmount = 3 * itemCost
    }

    info.changeLifeBy(-hits)
    loseMoney(robAmount)

    music.play(
        music.melodyPlayable(music.bigCrash),
        music.PlaybackMode.InBackground,
    )

    if (respawnShoppers) {
        // // karlr: Do not reset the companion. Do not do this.
        // placePlayer(tiles.getTileLocation(startCol, startRow))

        tiles.placeOnTile(
            sprite,
            tiles.getTileLocation(startCol, startRow),
        )
    } else {
        enterTopFloor(-1, -1)
    }
}
function testCollection() {
    hasConfectioneryMastery = true
    hasRedundantSphere = true
    hasHesperianSanctuary = true
    hasKey = true
    hasUsedDecoy = true
    hasUsedDelegate = true
    hasUsedHaterade = true
    hasLuck = true
    forcedToEatStartingTile = 2
    info.setScore(TRUE_ENDING_GOAL)
}
function playTrueEnding() {
    headOfSalesDecision =
        hasMetSkillTrader && Math.percentChance(10)
            ? Madlib.MELISSA :
        hasUsedDecoy && Math.percentChance(10)
            ? Madlib.DECOY :
        hasHesperianSanctuary && Math.percentChance(5)
            ? Madlib.MAGIC_ORB
            : Madlib.PROFESSOR

    controller.moveSprite(voluntold, 0, 0)
    buttonsActive = false
    talking = false
    music.stopAllSounds()
    pause(1000)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Dark)
    music.play(music.createSong(assets.song`pewterCity`), music.PlaybackMode.LoopingInBackground)
    sayLongText(`???: ${MY_NAME}!`)
    goalSprite.setImage(assets.image`employerFront`)
    voluntold.setImage(face.image)
    headOfSales = sprites.create(
        madlibsHeadOfSales[headOfSalesDecision].back,
        SpriteKind.Neutral
    )
    headOfSales.setFlag(SpriteFlag.GhostThroughSprites, true)
    headOfSales.setFlag(SpriteFlag.GhostThroughTiles, true)
    headOfSales.setFlag(SpriteFlag.GhostThroughWalls, true)
    deactivateTopFloorWalls()
    const myCol = voluntold.tilemapLocation().column
    const myRow = voluntold.tilemapLocation().row
    tiles.placeOnTile(headOfSales, tiles.getTileLocation(myCol + 1, myRow + 4))

    paths = [
        scene.aStar(
            tiles.getTileLocation(myCol + 1, myRow + 4),
            tiles.getTileLocation(myCol + 1, myRow - 1)
        ),
        scene.aStar(
            tiles.getTileLocation(myCol + 1, myRow - 1),
            tiles.getTileLocation(myCol, myRow - 1)
        )
    ]
}
function buyExtraLife() {
    if (info.score() >= EXTRA_LIFE_COST + itemCost) {
        info.changeLifeBy(1)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        loseMoney(EXTRA_LIFE_COST)
    } else {
        voluntold.sayText("Not enough sales!", 500, false)
    }
}
function dieOfRage() {
    sprites.destroy(voluntold, effects.fire, 1000)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    enraged = false
    hyper = false

    timer.after(2000, function () {
        setPlayer()
        hitPlayer(voluntold)
        enemySay("Cookies!")
        buttonsActive = true
        talking = true
        countdownType = 0
    })
}
function setAnyShoppers(num: number, tile: Image) {
    (recipe.beetroot
        ? setIdlingShoppers
        : setWindowShoppers)(num, tile)
}
function setIdlingShoppers(num: number, tile: Image) {
    let max: number = num

    if (num > 4) {
        max = num - 2

        tiles.placeOnRandomTile(
            sprites.create(
                assets.image`disinterestedShoppers001`,
                SpriteKind.Disinterested,
            ),
            tile,
        )
    }

    for (let index = 0; index < max; index++) {
        tiles.placeOnRandomTile(
            newIdlingSprite(Idler.SHOPPER),
            tile,
        )
    }
}
function setWindowShoppers(num: number, tile: Image) {
    for (let index = 0; index < num; index++) {
        const windowShopper = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fdd111111ddf......
            ......fbdd1111dddf......
            ......fcdbfddfbdbf......
            .......fbcf11fcbfff.....
            .......ffb1111bcfbcf....
            ........fcdb1bdfbbbf....
            .......ffffffffffcf.....
            .....fcb1bcfffff........
            .....f1b1b1ffff.........
            ......ffbff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(windowShopper, tile)

        windowShopper.sayText(
            enraged
                ? "AAAH!"
                : "Cookies!"
        )

        sprites.setDataNumber(
            windowShopper,
            "slowing",
            0,
        )
    }
}
function enemySay(text: string) {
    for (const value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.sayText(text)
    }
}
function tryAddWiseman() {
    if (Math.percentChance(30)) {
        tiles.placeOnRandomTile(
            newIdlingSprite(Idler.WISEMAN),
            assets.tile`alternateGreyscale`,
        )
    }
}
function enterSkillTraderHideout() {
    resetSprites()
    respawnShoppers = false
    tiles.setCurrentTilemap(tilemap`level10`)

    skillTrader = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f 4 4 f f f f . . . . . . 
        . . f 4 5 5 4 5 f b f f . . . . 
        . . f 5 5 5 5 4 e 3 3 b f . . . 
        . . f e 4 4 4 e 3 3 3 3 b f . . 
        . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e e 3 b e 3 3 3 3 f . . 
        . f 3 3 e e e f f 3 3 3 3 f . . 
        . . f e e e f b f b b b b f f . 
        . . . e 4 4 f 1 e b b b b b f . 
        . . . f 4 4 4 4 f b b b b b f . 
        . . . f d d d e 4 4 b b b f . . 
        . . . f d d d e 4 4 f f f . . . 
        . . f d d d b b e e b b f . . . 
        . . f b d 1 d 1 d d b f . . . . 
        . . . f f f b b f f f . . . . . 
        `, SpriteKind.Trader)
    tiles.placeOnTile(skillTrader, tiles.getTileLocation(13, 12))
    const powerup = sprites.create(assets.image`hater-ade`, SpriteKind.MagicGrease)
    tiles.placeOnTile(powerup, tiles.getTileLocation(4, 10))
    animation.runMovementAnimation(
        powerup,
        animation.animationPresets(animation.bobbing),
        500,
        true
    )
    setAnyShoppers(3, assets.tile`alternateGreyscale`)
    tryAddWiseman()
    placePlayer(tiles.getTileLocation(7, 6))
}
function getRecipeCards(): Image[] {
    let list: Image[] = []
    for (let i = 1; i < recipeEncounters.length; ++i) {
        if (recipeEncounters[i] <= 0) {
            continue
        }
        list.push(recipes[i].image)
    }
    return list
}
function getIngredience(): Image[] {
    let list: Image[] = []
    for (let i = 0; i < ingredientEncounters.length; ++i) {
        if (ingredientEncounters[i] <= 0) {
            continue
        }
        list.push(ingredience[i].image)
    }
    return list
}
function getCards(): Image[] {
    let cards: Image[] = []
    if (hasBlueEyes) {
        cards.push(assets.image`blueEyesWhiteDragon`)
    }
    if (hasAshBlossom) {
        cards.push(assets.image`ashBlossomAndJoyousSpringBulleted`)
    }
    return cards
}
function getCollection(): Image[] {
    let collection: Image[] = []
    if (hasKey) {
        collection.push(assets.image`key`)
    }
    if (hasLuck) {
        collection.push(assets.image`luckyCat`)
    }
    if (hasRedundantSphere) {
        collection.push(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (hasHesperianSanctuary) {
        collection.push(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (hasConfectioneryMastery) {
        collection.push(img`
            . . . . . . . . . . b b b . . . 
            . . . . . . . . b e e 3 3 b . . 
            . . . . . . b b e 3 2 e 3 a . . 
            . . . . b b 3 3 e 2 2 e 3 3 a . 
            . . b b 3 3 3 3 3 e e 3 3 3 a . 
            b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
            b 3 3 3 d d d d 3 3 3 3 3 d d a 
            b b b b b b b 3 d d d d d d 3 a 
            b d 5 5 5 5 d b b b a a a a a a 
            b 3 d d 5 5 5 5 5 5 5 d d d d a 
            b 3 3 3 3 3 3 d 5 5 5 d d d d a 
            b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
            b b b 3 d 5 5 5 5 5 5 5 d d b a 
            . . . b b b 3 d 5 5 5 5 d d 3 a 
            . . . . . . b b b b 3 d d d b a 
            . . . . . . . . . . b b b a a . 
            `)
    }
    if (hasUsedDelegate) {
        collection.push(img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f f e f f 4 4 f f e f f 
            f 4 f 1 1 f f 1 1 f 4 f 
            f e 4 f f d d f f 4 e f 
            . f e d d b b d 4 e f e 
            f f f e 4 4 4 4 d d 4 e 
            e 4 f 1 1 3 3 e d d e . 
            . . f 3 3 3 3 f e e . . 
            . . f f f f f f f . . . 
            . . f f f . . . . . . . 
            `)
    }
    if (hasUsedDecoy) {
        collection.push(assets.image`decoy`)
    }
    if (hasUsedHaterade) {
        collection.push(assets.image`hater-ade`)
    }
    if (busCardsActive) {
        collection.push(assets.image`busCard`)
    }
    if (hasBlueEyes || info.score() >= TRUE_ENDING_GOAL) {
        collection.push(assets.image`money`)
    }
    if (forcedToEatStartingTile === 2) {
        collection.push(assets.image`justALittleSick`)
    }
    if (hasCourtSummons) {
        collection.push(assets.image`scale`)
    }
    return collection
}
function enterConfectionersHome() {
    resetSprites()
    respawnShoppers = false
    tiles.setCurrentTilemap(tilemap`level6`)

    confectioner = sprites.create(assets.image`witchGhost`, SpriteKind.Professional)
    cauldron = sprites.create(assets.image`cauldron`, SpriteKind.Neutral)
    animation.runImageAnimation(cauldron, assets.animation`cauldronGreenEffluence`, 500, true)
    tiles.placeOnTile(confectioner, tiles.getTileLocation(2, 2))
    tiles.placeOnTile(cauldron, tiles.getTileLocation(1, 2))
    const powerup = sprites.create(assets.image`hater-ade`, SpriteKind.MagicGrease)
    tiles.placeOnTile(powerup, tiles.getTileLocation(13, 13))
    animation.runMovementAnimation(
        powerup,
        animation.animationPresets(animation.bobbing),
        500,
        true,
    )
    if (!hasRedundantSphere) {
        sphereOfRedundancy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.RedundantSphere)
        tiles.placeOnTile(sphereOfRedundancy, tiles.getTileLocation(9, 14))
    }
    if (hasKey) {
        for (const value of tiles.getTilesByType(sprites.dungeon.doorLockedNorth)) {
            tiles.setWallAt(value, false)
        }
    }
    setAnyShoppers(5, assets.tile`alternateGreyscale`)
    tryAddWiseman()
    placePlayer(tiles.getTileLocation(11, 2))
}
function displayIngredience(
    start: number,
    len: number,
    col: number,
    row: number,
    colDist: number,
    rowDist: number,
    rowLen: number,
) {
    for (let index = 0; index < len; index++) {
        displayIngredient(
            start + index,
            colDist * Math.trunc(index % rowLen) + col,
            rowDist * Math.trunc(index / rowLen) + row,
        )
    }
}
function displayIngredient(index: number, col: number, row: number) {
    const quantity = inventory[index]

    if (quantity === 0) {
        return
    }

    const sprite = sprites.create(
        ingredience[index].image,
        SpriteKind.MagicIngredience,
    )

    sprites.setDataNumber(sprite, "type", index)
    sprites.setDataNumber(sprite, "quantity", quantity)
    tiles.placeOnTile(sprite, tiles.getTileLocation(col, row))

    if (quantity === 1) {
        return
    }

    sprite.sayText(quantity)
}
function selectIngredience() {
    resetSprites()
    tiles.setCurrentTilemap(tilemap`level20`)

    let sprite = sprites.create(
        assets.image`confirmSign`,
        SpriteKind.Neutral,
    )
    animation.runImageAnimation(
        sprite,
        [img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            .77777777777777777777777777777..
            .7...........................7..
            .7.77..77.77..77.7.77..7777..7..
            .7.7..7.7.7.7.7..7.7.7.7.7.7.7..
            .7.7..7.7.7.7.77.7.77..7.7.7.7..
            .7.7..7.7.7.7.7..7.7.7.7.7.7.7..
            .7.77.77..7.7.7..7.7.7.7.7.7.7..
            .7...........................7..
            .77777777777777777777777777777..
        `, img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            .66666666666666666666666666666..
            .6...........................6..
            .6.66..66.66..66.6.66..6666..6..
            .6.6..6.6.6.6.6..6.6.6.6.6.6.6..
            .6.6..6.6.6.6.66.6.66..6.6.6.6..
            .6.6..6.6.6.6.6..6.6.6.6.6.6.6..
            .6.66.66..6.6.6..6.6.6.6.6.6.6..
            .6...........................6..
            .66666666666666666666666666666..
            ................................
        `, img`
            ................................
            ................................
            ................................
            ................................
            ................................
            .bbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
            .b...........................b..
            .b.bb..bb.bb..bb.b.bb..bbbb..b..
            .b.b..b.b.b.b.b..b.b.b.b.b.b.b..
            .b.b..b.b.b.b.bb.b.bb..b.b.b.b..
            .b.b..b.b.b.b.b..b.b.b.b.b.b.b..
            .b.bb.bb..b.b.b..b.b.b.b.b.b.b..
            .b...........................b..
            .bbbbbbbbbbbbbbbbbbbbbbbbbbbbb..
            ................................
            ................................
        `, img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            .66666666666666666666666666666..
            .6...........................6..
            .6.66..66.66..66.6.66..6666..6..
            .6.6..6.6.6.6.6..6.6.6.6.6.6.6..
            .6.6..6.6.6.6.66.6.66..6.6.6.6..
            .6.6..6.6.6.6.6..6.6.6.6.6.6.6..
            .6.66.66..6.6.6..6.6.6.6.6.6.6..
            .6...........................6..
            .66666666666666666666666666666..
            ................................
        `, img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            .77777777777777777777777777777..
            .7...........................7..
            .7.77..77.77..77.7.77..7777..7..
            .7.7..7.7.7.7.7..7.7.7.7.7.7.7..
            .7.7..7.7.7.7.77.7.77..7.7.7.7..
            .7.7..7.7.7.7.7..7.7.7.7.7.7.7..
            .7.77.77..7.7.7..7.7.7.7.7.7.7..
            .7...........................7..
            .77777777777777777777777777777..
        `],
        100,
        true,
    )
    tiles.placeOnTile(sprite, tiles.getTileLocation(13, 6))

    sprite = sprites.create(
        assets.image`cancelSign`,
        SpriteKind.Neutral,
    )
    animation.runImageAnimation(
        sprite,
        [img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ....22222222222222222222222.....
            ....2.....................2.....
            ....2.22..2..22..22.22.2..2.....
            ....2.2..2.2.2.2.2..2..2..2.....
            ....2.2..222.2.2.2..22.2..2.....
            ....2.2..2.2.2.2.2..2..2..2.....
            ....2.22.2.2.2.2.22.22.22.2.....
            ....2.....................2.....
            ....22222222222222222222222.....
        `, img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ....bbbbbbbbbbbbbbbbbbbbbbb.....
            ....b.....................b.....
            ....b.bb..b..bb..bb.bb.b..b.....
            ....b.b..b.b.b.b.b..b..b..b.....
            ....b.b..bbb.b.b.b..bb.b..b.....
            ....b.b..b.b.b.b.b..b..b..b.....
            ....b.bb.b.b.b.b.bb.bb.bb.b.....
            ....b.....................b.....
            ....bbbbbbbbbbbbbbbbbbbbbbb.....
            ................................
        `, img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ....bbbbbbbbbbbbbbbbbbbbbbb.....
            ....b.....................b.....
            ....b.bb..b..bb..bb.bb.b..b.....
            ....b.b..b.b.b.b.b..b..b..b.....
            ....b.b..bbb.b.b.b..bb.b..b.....
            ....b.b..b.b.b.b.b..b..b..b.....
            ....b.bb.b.b.b.b.bb.bb.bb.b.....
            ....b.....................b.....
            ....bbbbbbbbbbbbbbbbbbbbbbb.....
            ................................
            ................................
        `, img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ....22222222222222222222222.....
            ....2.....................2.....
            ....2.22..2..22..22.22.2..2.....
            ....2.2..2.2.2.2.2..2..2..2.....
            ....2.2..222.2.2.2..22.2..2.....
            ....2.2..2.2.2.2.2..2..2..2.....
            ....2.22.2.2.2.2.22.22.22.2.....
            ....2.....................2.....
            ....22222222222222222222222.....
            ................................
        `, img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ....22222222222222222222222.....
            ....2.....................2.....
            ....2.22..2..22..22.22.2..2.....
            ....2.2..2.2.2.2.2..2..2..2.....
            ....2.2..222.2.2.2..22.2..2.....
            ....2.2..2.2.2.2.2..2..2..2.....
            ....2.22.2.2.2.2.22.22.22.2.....
            ....2.....................2.....
            ....22222222222222222222222.....
        `],
        100,
        true,
    )
    tiles.placeOnTile(sprite, tiles.getTileLocation(13, 10))

    sprite = sprites.create(
        assets.image`retrySign`,
        SpriteKind.Neutral,
    )
    animation.runImageAnimation(
        sprite,
        [img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            .....5555555555555555555555.....
            .....5....................5.....
            .....5.55..55.555.55..5.5.5.....
            .....5.5.5.5...5..5.5.5.5.5.....
            .....5.55..55..5..55..555.5.....
            .....5.5.5.5...5..5.5..5..5.....
            .....5.5.5.55..5..5.5..5..5.....
            .....5....................5.....
            .....5555555555555555555555.....
        `, img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            .....b....................b.....
            .....b.bb..bb.bbb.bb..b.b.b.....
            .....b.b.b.b...b..b.b.b.b.b.....
            .....b.bb..bb..b..bb..bbb.b.....
            .....b.b.b.b...b..b.b..b..b.....
            .....b.b.b.bb..b..b.b..b..b.....
            .....b....................b.....
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            ................................
        `, img`
            ................................
            ................................
            ................................
            ................................
            ................................
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            .....b....................b.....
            .....b.bb..bb.bbb.bb..b.b.b.....
            .....b.b.b.b...b..b.b.b.b.b.....
            .....b.bb..bb..b..bb..bbb.b.....
            .....b.b.b.b...b..b.b..b..b.....
            .....b.b.b.bb..b..b.b..b..b.....
            .....b....................b.....
            .....bbbbbbbbbbbbbbbbbbbbbb.....
            ................................
            ................................
        `, img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            .....5555555555555555555555.....
            .....5....................5.....
            .....5.55..55.555.55..5.5.5.....
            .....5.5.5.5...5..5.5.5.5.5.....
            .....5.55..55..5..55..555.5.....
            .....5.5.5.5...5..5.5..5..5.....
            .....5.5.5.55..5..5.5..5..5.....
            .....5....................5.....
            .....5555555555555555555555.....
            ................................
        `, img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            .....5555555555555555555555.....
            .....5....................5.....
            .....5.55..55.555.55..5.5.5.....
            .....5.5.5.5...5..5.5.5.5.5.....
            .....5.55..55..5..55..555.5.....
            .....5.5.5.5...5..5.5..5..5.....
            .....5.5.5.55..5..5.5..5..5.....
            .....5....................5.....
            .....5555555555555555555555.....
        `],
        100,
        true,
    )
    tiles.placeOnTile(sprite, tiles.getTileLocation(13, 8))

    displayIngredience(0, 12, 3, 8, 3, 3, 3)
    // displayIngredience(7, 4, 4, 14, 4, 3, 2)
    // displayIngredient(6, 12, 17)

    newCart()
    inRecipeSelect = true
    inBasement = false
    respawnShoppers = false
    voluntold.destroy()
    pet.destroy()
    setPlayer()
    tiles.placeOnRandomTile(voluntold, assets.tile`greenEventTile0`)
    trySetPet()

    pause(100)
    sayLongText("Select your ingredients.")
}
function enterAttic() {
    resetSprites()
    respawnShoppers = false
    tiles.setCurrentTilemap(tilemap`level14`)

    const luckyCat = sprites.create(assets.image`luckyCat`, SpriteKind.Lucky)
    tiles.placeOnTile(luckyCat, tiles.getTileLocation(2, 7))
    animation.runMovementAnimation(
        luckyCat,
        animation.animationPresets(animation.bobbing),
        500,
        true,
    )
    setAnyShoppers(4, assets.tile`alternateGreyscaleDarker`)
    placePlayer(tiles.getTileLocation(8, 6))
}
function enterBasement(col: number = 7, row: number = 9) {
    resetSprites()
    respawnShoppers = false
    tiles.setCurrentTilemap(tilemap`level19`)

    inBasement = true
    animatedEnvironment = []

    const wires = sprites.create(
        assets.image`wires`,
        SpriteKind.Neutral,
    )
    tiles.placeOnTile(wires, tiles.getTileLocation(4, 4))
    
    const vortex = sprites.create(
        assets.image`vortex001`,
        SpriteKind.Neutral,
    )
    tiles.placeOnTile(vortex, tiles.getTileLocation(8, 1))

    animation.runImageAnimation(
        vortex,
        [
            assets.image`vortex001`,
            assets.image`vortex002`
        ],
        50, true,
    )

    const oven = sprites.create(
        assets.image`ovenOffFront`,
        SpriteKind.Neutral,
    )
    oven.setImage(assets.image`ovenOnFront`)
    tiles.placeOnTile(oven, tiles.getTileLocation(8, 6))

    terminal = sprites.create(
        assets.image`terminal`,
        SpriteKind.ComputerTerminal,
    )
    animation.runImageAnimation(
        terminal, [
            assets.image`terminal`,
            assets.image`terminal001`,
        ], 500, true,
    )
    tiles.placeOnTile(terminal, tiles.getTileLocation(1, 1))

    const processor = sprites.create(
        assets.image`processor`,
        SpriteKind.Neutral,
    )
    tiles.placeOnTile(processor, tiles.getTileLocation(1, 4))

    const mixer = sprites.create(
        assets.image`mixer`,
        SpriteKind.Neutral,
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
    tiles.placeOnTile(mixer, tiles.getTileLocation(8, 2))

    animatedEnvironment = [
        vortex,
        terminal,
        mixer,
    ]

    for (const sprite of KitchenGame.newConveyorBelt(2, 6, 1, 100)) {
        animatedEnvironment.push(sprite)
    }

    voluntold.destroy()
    setPlayer()
    placePlayer(tiles.getTileLocation(col, row))
}
function sendDelegate() {
    if (sprites.allOfKind(SpriteKind.Volunteer).length > 0) {
        return
    }

    hasUsedDelegate = true
    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
    delegate = sprites.create(img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f f e f f 4 4 f f e f f 
        f 4 f 1 1 f f 1 1 f 4 f 
        f e 4 f f d d f f 4 e f 
        . f e d d b b d 4 e f e 
        f f f e 4 4 4 4 d d 4 e 
        e 4 f 1 1 3 3 e d d e . 
        . . f 3 3 3 3 f e e . . 
        . . f f f f f f f . . . 
        . . f f f . . . . . . . 
        `, SpriteKind.Volunteer)
    tiles.placeOnTile(delegate, voluntold.tilemapLocation())
    delegate.setFlag(SpriteFlag.GhostThroughWalls, true)
    delegate.lifespan = 10000

    const nearestEnemy = nearestSprite(delegate, SpriteKind.Enemy)

    if (nearestEnemy === delegate) {
        delegate.setImage(assets.image`professorPink`)
        delegate.sayText([
            "Nope.",
            "Nuh uh.",
            "Not doin' 'at",
            "I can't.",
            "I, don't, think so...",
            "You know what...",
            "I'll let you handle this one.",
            "Now this is just silly.",
            "Mmm. Not okay.",
            "Impossible.",
            "Look. Some customers...",
        ]._pickRandom(), 1000, false)
        return
    }

    delegate.follow(nearestEnemy, 45)
    delegate.sayText([
        "I'm here to help!",
        "Can I entice you, sir?",
        "You're not getting away.",
        "Get over here!",
        "I'm helping!",
        "Take this!",
        "CHOCOLATE!",
        "Excuse me!",
        "The pleasure is all mine!",
        "Confections aweigh!",
    ]._pickRandom())
}

let headOfSalesDecision: number = 0

const Madlib = {
    PROFESSOR: 0,
    MELISSA: 1,
    DECOY: 2,
    MAGIC_ORB: 3,
}

type madlib_head_of_sales_t = {
    name: string,
    prettyname: string,
    back: Image,
    front: Image,
    parttime: string,
    recognized_as: string,
    first_meeting: string,
}

const madlibsHeadOfSales: madlib_head_of_sales_t[] = [
    {
        name: "profRizzotto",
        prettyname: "Professor Rizzotto",
        front: assets.image`professorPink`,
        back: assets.image`professorPinkBack`,
        parttime: "volunteer",
        recognized_as: "It's the volunteer!",
        first_meeting: "culinary art school",
    },
    {
        name: "melissa",
        prettyname: "Melissa",
        front: img`
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
                `,
        back: img`
                . . . . . f f 4 4 f f . . . . . 
                . . . . f 5 4 5 5 4 5 f . . . . 
                . . . f e 3 3 3 3 3 3 e f . . . 
                . . f b 3 3 3 3 3 3 3 3 b f . . 
                . . f 3 3 3 3 3 3 3 3 3 3 f . . 
                . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
                . f b 3 3 3 3 3 3 3 3 3 3 b f . 
                . f b b 3 3 3 3 3 3 3 3 b b f . 
                . f b b b b b b b b b b b b f . 
                f c b b b b b b b b b b b b c f 
                f b b b b b b b b b b b b b b f 
                . f c c b b b b b b b b c c f . 
                . . e 4 c f f f f f f c 4 e . . 
                . . e f b d b d b d b b f e . . 
                . . . f f 1 d 1 d 1 d f f . . . 
                . . . . . f f b b f f . . . . . 
                `,
        parttime: "Hesperian skill trader",
        recognized_as: "It's you!",
        first_meeting: "the time you found my hiding place",
    },
    {
        name: "decoy",
        prettyname: "a decoy",
        front: assets.image`decoy`,
        back: assets.image`decoyBack`,
        parttime: "a decoy",
        recognized_as: "It's the decoy!",
        first_meeting: "you first used me as a decoy",
    },
    {
        name: "orbOfHesperianSanctuary",
        prettyname: "the Orb of Hesperian Sanctuary",
        front: img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . 4 4 4 5 5 4 4 4 . . . . 
                . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                . . . . 4 4 2 2 2 2 4 4 . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
        back: img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . 4 4 4 5 5 4 4 4 . . . . 
                . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                . . . . 4 4 2 2 2 2 4 4 . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
        parttime: "talking magical orb. Whaddup",
        recognized_as: "The Orb of Hesperian Sanctuary?",
        first_meeting: "you first tried to pick me up",
    },
]

function setIntro() {
    game.splash("BAKE SALE!")
    goalSprite = sprites.create(assets.image`employerFront`, SpriteKind.Employer)
    goalSprite.setPosition(80, 30)

    for (const value of [
        "Make money!",
        "Sell cookies with 'A'!",
        "Only then",
        "can you leave",
        "the Maze!!!",
        "(Don't get robbed",
        "on the way!)",
    ]) {
        game.splash(value)
    }

    sprites.destroy(goalSprite)
}
function enterSomewhere() {
    resetSprites()
    respawnShoppers = false
    tiles.setCurrentTilemap(tilemap`level8`)

    if (!hasKey) {
        const key = sprites.create(assets.image`key`, SpriteKind.Unlocking)
        tiles.placeOnTile(key, tiles.getTileLocation(16, 16))
        animation.runMovementAnimation(
            key,
            animation.animationPresets(animation.bobbing),
            500,
            true,
        )
    }

    const haterade = sprites.create(assets.image`hater-ade`, SpriteKind.ForbiddenPotable)
    tiles.placeOnTile(haterade, tiles.getTileLocation(27, 3))
    const warningSign = sprites.create(assets.image`warningSign`, SpriteKind.Neutral)
    tiles.placeOnTile(warningSign, tiles.getTileLocation(27, 1))
    const powerup = sprites.create(assets.image`hater-ade`, SpriteKind.MagicGrease)
    tiles.placeOnTile(powerup, tiles.getTileLocation(3, 16))
    const extra = sprites.create(assets.image`extraLife`, SpriteKind.ExtraLife)
    tiles.placeOnTile(extra, tiles.getTileLocation(25, 6))
    animation.runMovementAnimation(
        powerup,
        animation.animationPresets(animation.bobbing),
        500,
        true,
    )
    setAnyShoppers(5, assets.tile`alternateGreyscale`)
    tryAddWiseman()
    placePlayer(tiles.getTileLocation(6, 6))
}
function getGiantCookiePowerup() {
    voluntold.sayText("Magic grease powerup!", 1000, false)
    controller.moveSprite(voluntold, moveSpeed * 2, moveSpeed * 2)

    if (!giantCookiePowerup) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`linksAwakeningPowerupGet`), music.PlaybackMode.UntilDone)

        timer.after(500, function () {
            music.play(music.createSong(assets.song`linksAwakeningPowerup`), music.PlaybackMode.LoopingInBackground)
        })
    }

    giantCookiePowerup = true
    newCountdown(15, 1)
}
function deactivateTopFloorWalls() {
    for (const cat of [
        sprites.dungeon.purpleOuterSouth1,
        sprites.dungeon.purpleOuterNorth1,
        sprites.dungeon.purpleOuterEast1,
        sprites.dungeon.purpleOuterWest1,
        sprites.dungeon.purpleOuterSouthEast,
        sprites.dungeon.purpleOuterSouthWest,
        sprites.dungeon.purpleOuterNorthEast,
        sprites.dungeon.purpleOuterNorthWest,
        sprites.dungeon.purpleInnerSouthEast,
        sprites.dungeon.purpleInnerSouthWest,
        sprites.dungeon.purpleInnerNorthEast,
        sprites.dungeon.purpleInnerNorthWest,
    ]) {
        for (const value of tiles.getTilesByType(cat)) {
            tiles.setWallAt(value, false)
        }
    }
}
function enterHomeOfBox() {
    resetSprites()
    respawnShoppers = false
    tiles.setCurrentTilemap(tilemap`level4`)

    const homelessBox = sprites.create(img`
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
        `, SpriteKind.Antisocial)
    tiles.placeOnTile(homelessBox, tiles.getTileLocation(6, 14))

    if (companionState === 2 && !busCardsActive) {
        fetchable = [homelessBox]
        fetchState = 0
        pet.follow(homelessBox, 2 * moveSpeed)
    }

    if (!hasHesperianSanctuary) {
        const orb = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.HesperianOrb)
        tiles.placeOnTile(orb, tiles.getTileLocation(3, 6))
    }

    if (companionState !== 2 || busCardsActive) {
        setAnyShoppers(5, assets.tile`alternateGreyscale`)
    }

    tryAddWiseman()
    placePlayer(tiles.getTileLocation(11, 2))
}
function enterHumbleHome(col: number = 10, row: number = 2) {
    resetSprites()
    respawnShoppers = false
    tiles.setCurrentTilemap(tilemap`level12`)

    cauldron = sprites.create(assets.image`cauldron`, SpriteKind.Neutral)
    tiles.placeOnTile(cauldron, tiles.getTileLocation(14, 5))

    let sprite: Sprite = null
    
    sprite = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
    `, SpriteKind.StrayCatsPlayer)
    tiles.placeOnTile(sprite, tiles.getTileLocation(7, 14))

    sprite = sprites.create(assets.image`crtWithStandProfile`, SpriteKind.Neutral)
    tiles.placeOnTile(sprite, tiles.getTileLocation(9, 14))

    sprite = sprites.create(img`
            ..cccc.........
            .c7776c........
            c67776ccccccc..
            c67776c677777c.
            c67776c7777766c
            c67776c6666666c
            c67776cccccc66c
            c67776c77776ccc
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67766c777776c.
            c66666cccccccc.
            c66666c677777c.
            c66666c7777766c
            c66666c6666666c
            c66666c6666666c
            c66666c6666666c
            .cccccccccccccc
            .cbbc.....cbbc.
        `, SpriteKind.Neutral)
    tiles.placeOnTile(sprite, tiles.getTileLocation(1, 3))

    sprite = sprites.create(img`
            ..cccc.........
            .c7776c........
            c67776ccccccc..
            c67776c677777c.
            c67776c7777766c
            c67776c6666666c
            c67776cccccc66c
            c67776c77776ccc
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67776c777776c.
            c67766c777776c.
            c66666cccccccc.
            c66666c677777c.
            c66666c7777766c
            c66666c6666666c
            c66666c6666666c
            c66666c6666666c
            .cccccccccccccc
            .cbbc.....cbbc.
        `, SpriteKind.Neutral)
    tiles.placeOnTile(sprite, tiles.getTileLocation(1, 5))

    sprite = sprites.create(img`
        ...bbbbbbbbbb...
        ..b1111111111b..
        .b111111111111b.
        .b111111111111b.
        .bddccccccccddb.
        .bdc66666666cdb.
        .bdc61d66666cdb.
        .bdc6d666666cdb.
        .bdc66666666cdb.
        .bdc66666666cdb.
        .bdc66666666cdb.
        .bddccccccccddb.
        .cbbbbbbbbbbbbc.
        fccccccccccccccf
        fbbbbbbbbbbbbbbf
        fbcdddddddddddbf
        fbcbbbbbbbbbbcbf
        fbcbbbbbbbbbbcbf
        fbccccccccccccbf
        fbbbbbbbbbbbbbbf
        fbffffffffffffbf
        ffffffffffffffff
    `, SpriteKind.Neutral)
    tiles.placeOnTile(sprite, tiles.getTileLocation(5, 1))
    sprite.y -= 10

    sprite = sprites.create(img`
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
    `, SpriteKind.Neutral)
    tiles.placeOnTile(sprite, tiles.getTileLocation(2, 1))
    sprite.y -= 10

    sprite = sprites.create(img`
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
    `, SpriteKind.Neutral)
    tiles.placeOnTile(sprite, tiles.getTileLocation(3, 14))

    sprite = sprites.create(img`
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
    `, SpriteKind.Neutral)
    tiles.placeOnTile(sprite, tiles.getTileLocation(13, 14))

    sprite = sprites.create(assets.image`toilet15x22`, SpriteKind.ToiletDisposal)
    tiles.placeOnTile(sprite, tiles.getTileLocation(1, 10))

    sprite = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
    `, SpriteKind.JumpPlayer)
    tiles.placeOnTile(sprite, tiles.getTileLocation(11, 14))

    sprite = sprites.create(assets.image`crtWithStandProfile`, SpriteKind.Neutral)
    tiles.placeOnTile(sprite, tiles.getTileLocation(14, 14))

    sprite = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
    `, SpriteKind.HaterHuntPlayer)
    tiles.placeOnTile(sprite, tiles.getTileLocation(2, 14))

    sprite = sprites.create(assets.image`crtWithStandProfile`, SpriteKind.Neutral)
    tiles.placeOnTile(sprite, tiles.getTileLocation(5, 14))

    const powerup = sprites.create(assets.image`hater-ade`, SpriteKind.MagicGrease)
    tiles.placeOnTile(powerup, tiles.getTileLocation(1, 1))
    animation.runMovementAnimation(
        powerup,
        animation.animationPresets(animation.bobbing),
        500,
        true,
    )

    voluntold.destroy()
    setPlayer()
    placePlayer(tiles.getTileLocation(col, row))
}
function newStatus(
    sprite: Sprite,
    capacity: number,
    kind: number | null = null,
) {
    if (kind === null) {
        kind = StatusBarKind.Health
    }

    const statusbar
        = statusbars.create(20, 4, kind)

    statusbar.value
        = statusbar.max
        = capacity

    statusbar.attachToSprite(sprite)
}

statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(status.spriteAttachedTo())
})

function newConfection(i: number = 0): Sprite {
    const cookie: Sprite = sprites.create(
        hasConfectioneryMastery
            ? img`
                . . . . . . . . . . b b b . . . 
                . . . . . . . . b e e 3 3 b . . 
                . . . . . . b b e 3 2 e 3 a . . 
                . . . . b b 3 3 e 2 2 e 3 3 a . 
                . . b b 3 3 3 3 3 e e 3 3 3 a . 
                b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
                b 3 3 3 d d d d 3 3 3 3 3 d d a 
                b b b b b b b 3 d d d d d d 3 a 
                b d 5 5 5 5 d b b b a a a a a a 
                b 3 d d 5 5 5 5 5 5 5 d d d d a 
                b 3 3 3 3 3 3 d 5 5 5 d d d d a 
                b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
                b b b 3 d 5 5 5 5 5 5 5 d d b a 
                . . . b b b 3 d 5 5 5 5 d d 3 a 
                . . . . . . b b b b 3 d d d b a 
                . . . . . . . . . . b b b a a . 
                `
            : img`
                . . . f f f f f f f . . . . . . 
                . . f e e 3 e e e e f . . . . . 
                . f e e e e e e 3 e e f . . . . 
                f e e f e e f e e e e e f . . . 
                f e e e e f e e e 3 e e f . . . 
                f e e f e e e e 3 e e 3 f . . . 
                f e f e e e e e e e e e f . . . 
                f e e e e e f e e e 3 e f . . . 
                f 3 e e e f e e e e e e f . . . 
                f e e f e e e e 3 e e 3 f . . . 
                . f e e e e e 3 e e e f . . . . 
                . . f e 3 e e e e e f . . . . . 
                . . . f f f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,
        SpriteKind.Food,
    )

    const lifespan = cookie.lifespan = 10000 + 3000 * recipe.lifespan_add
    const vx = -0.2 * moveSpeed * recipe.speed * (Math.cos(Math.PI * (i * 2 / recipe.shots + direction / 2)))
    const vy = 0.2 * moveSpeed * recipe.speed * (Math.sin(Math.PI * (i * 2 / recipe.shots + direction / 2)))

    tiles.placeOnTile(cookie, voluntold.tilemapLocation())
    cookie.setVelocity(vx, vy)

    if (giantCookiePowerup) {
        cookie.setKind(SpriteKind.Neutral)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        cookie.setKind(SpriteKind.Food)

        cookie.setImage(
            hasConfectioneryMastery
                ? assets.image`tiramisu`
                : assets.image`giantCookie`
        )
    }
    else {
        if (recipe.ricochet) {
            cookie.setBounceOnWall(true)
        }

        if (recipe.hits > 1) {
            newStatus(cookie, recipe.hits)
        }

        if (recipe.slowing > 0) {
            newAoeSprite(cookie, lifespan / 2)
        }
    }

    cookie.lifespan = lifespan
    return cookie
}

function takeMaterialCost() {
    loseMoney(itemCost)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
}

function onAButtonPressed() {
    if (inMart) {
        music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)

        sayLongText(
            [
                `PROF RIZZOTTO: ${MY_NAME}, now isn't the time to use that!`,
                "???: Keep your stuff off the floor please!",
                "???: You better not be selling cookies here!",
            ]._pickRandom()
        )

        return
    }

    if (!buttonsActive) {
        return
    }

    itemCost = COOKIE_COST

    if (hasConfectioneryMastery) {
        itemCost = PERFECT_CONFECTION_COST
    }

    if (info.score() <= itemCost) {
        voluntold.sayText("I'm broke.", 500, false)
        return
    }

    if (recipe.shield > 0) {
        if (tryNewRingShield(
            voluntold,
            newConfection,
            recipe.shots,
            recipe.speed,
            recipe.shield * 10,
        )) {
            takeMaterialCost()
        }

        return
    }

    for (let i = 0; i < recipe.shots; ++i) {
        newConfection(i)
    }

    takeMaterialCost()

    // todo
    if (sprites.allOfKind(SpriteKind.Food).length > 200) {
        ParticleSprite.destroyAll()
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        startSequenceLagPolice([
            "BOTTOM TEXT",
            "BOTTOM TEXT",
            "I'm not a big fan of paperwork.",
            "Let's get this over with.",
            "Stop",
            "lagging",
            "the",
            "game",
            "you",
            "fuzzbag",
        ])
    }
}
function onBButtonPressed() {
    if (!buttonsActive) {
        return
    }

    switch (skillNum) {
        case Skill.BUY_EXTRA_LIFE:
            buyExtraLife()
            break
        case Skill.DELEGATE:
            sendDelegate()
            break
        case Skill.DECOY:
            createDecoy()
            break
        default:
            break
    }
}

function imageRight(): Image {
    return hyper
        ? assets.image`tweekedRight`
        : img`
            . . . . . . . 5 . 5 . . . . . .
            . . . . . . f 5 5 5 f . . . . .
            . . . . . f 6 5 5 2 6 f . . . .
            . . . . f 6 6 1 6 6 6 6 f . . .
            . . . . f 6 1 6 6 6 6 6 f . . .
            . . . . f 1 6 6 6 d f d f . . .
            . . . f f 6 6 6 6 d f d f . . .
            . . f 6 f 6 6 6 d d 3 d f . . .
            . . . f f 6 f f d d d f . . . .
            . . f 6 6 6 f 3 5 f f . . . . .
            . . . f f f f f 3 3 5 f . . . .
            . . . . . . f d f 3 3 f . . . .
            . . . . . . f d f 3 f . . . . .
            . . . . . f d f 3 5 3 f . . . .
            . . . . . . f f 3 3 f f . . . .
            . . . . . . . f f f . . . . . .
        `
}

function imageLeft(): Image {
    return hyper
        ? assets.image`tweekedLeft`
        : img`
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
            `
}

function imageDown(): Image {
    return face.image
}

function imageUp(): Image {
    return assets.image`voluntoldBack`
}

function down() {
    if (!canTurn) {
        return
    }

    direction = Dir.DOWN
    voluntold.setImage(imageDown())
}
function up() {
    if (!canTurn) {
        return
    }

    direction = Dir.UP
    voluntold.setImage(imageUp())
}
function left() {
    if (!canTurn) {
        return
    }

    direction = Dir.LEFT
    voluntold.setImage(imageLeft())
}
function right() {
    if (!canTurn) {
        return
    }

    direction = Dir.RIGHT
    voluntold.setImage(imageRight())
}

controller.A.onEvent(ControllerButtonEvent.Pressed, onAButtonPressed)
controller.B.onEvent(ControllerButtonEvent.Pressed, onBButtonPressed)
controller.down.onEvent(ControllerButtonEvent.Pressed, down)
controller.down.onEvent(ControllerButtonEvent.Repeated, down)
controller.up.onEvent(ControllerButtonEvent.Pressed, up)
controller.up.onEvent(ControllerButtonEvent.Repeated, up)
controller.left.onEvent(ControllerButtonEvent.Pressed, left)
controller.left.onEvent(ControllerButtonEvent.Repeated, left)
controller.right.onEvent(ControllerButtonEvent.Pressed, right)
controller.right.onEvent(ControllerButtonEvent.Repeated, right)

scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, sprites.dungeon.stairNorth)) {
        sprite.sayText("Let me out!", 500, true)
        scene.cameraShake(4, 250)
        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
        tiles.placeOnTile(sprite, tiles.getTileLocation(location.col - 2, location.row))
        leaveAttempts++

        if (leaveAttempts < 5) {
            return
        }

        sayLongText("Oh, is the door stuck? Let me get that for you.", manager.image)
        const prevManagerImage = manager.image

        tiles.placeOnTile(
            voluntold,
            tiles.getTileLocation(
                voluntold.tilemapLocation().col,
                manager.tilemapLocation().row + 2
            )
        )

        manager.setImage(assets.image`managerRight`)
        manager.vx = 75

        timer.after(1000, function () {
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)

            for (const tile of tiles.getTilesByType(sprites.dungeon.stairNorth)) {
                tiles.setWallAt(tile, false)
            }

            if (inMart) {
                manager.setImage(prevManagerImage)
                sayLongText("And it's open! Have a good night!", manager.image)
            }
        })

        return
    }

    if (!nearsighted) {
        return
    }

    arghAWall += 1

    if (!hyper) {
        sprite.sayText("AARGH! A WALL!", 500, true)
    }

    scene.cameraShake(8, 500)
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    if (!inMart) {
        return
    }

    music.stopAllSounds()
    hasBusCard = false
    enterTopFloor(enterCol, enterRow)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    enterMart()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    if (!hasKey) {
        return
    }

    tiles.setTileAt(location, assets.tile`alternateGreyscale`)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (forcedToEatStartingTile != 1) {
        return
    }

    forcedToEatStartingTile = 2

    timer.after(500, function () {
        sayLongText("Well, I guess it can't be that bad.")
        sayLongText("Here goes nothing...")
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
        face.setImage(assets.image`justALittleSick`)
        sprite.setImage(face.image)
        startingTile.setImage(assets.image`hazardStartingTileMissing`)
        tiles.setTileAt(location, startingTile.image)
        sayLongText("Oh, it hurts.")
        sayLongText("It hurts.")
        sayLongText("It really really hurts.")
        sayLongText("This is awful.")
        sayLongText("I think I'm gonna be sick.")
    })
})
scene.onOverlapTile(SpriteKind.Goal, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(location.column, location.row + 1))
})
scene.onOverlapTile(SpriteKind.ExtraLife, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(location.column, location.row + 1))
})
scene.onOverlapTile(SpriteKind.MagicGrease, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(location.column, location.row + 1))
})

let mutex: boolean = false

scene.onOverlapTile(SpriteKind.Player, assets.tile`greenRug1`, function (sprite, location) {
    if (mutex || companionState === 2) {
        return
    }

    mutex = true

    timer.after(500, function () {
        game.showLongText("Get out of my room! I'm playing Minecraft!", DialogLayout.Top)
        pause(100)
        enterTopFloor(enterCol, enterRow)
        mutex = false
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`lovingHusband`, function (sprite, location) {
    if (enraged || talkedToHusband) {
        return
    }

    talkedToHusband = true
    buttonsActive = false
    tiles.placeOnTile(sprite, tiles.getTileLocation(location.column - 1, location.row))
    sayLongText(`${MY_NAME}, you're back. Welcome home, dear.`, assets.image`lovingHusband`)
    meSayLongText("Hey, honey. How's my adorable family?")
    sayLongText("You missed dinner again.", assets.image`lovingHusband`)
    meSayLongText("I know.")

    time_sequence([
        [1000, () => {
            sayLongText("How's the bake sale going?", assets.image`lovingHusband`)
            meSayLongText("We're close to finishing.")
            meSayLongText("If we reach the end goal, they might make me the new Head of the Committee.")
            sayLongText("How much?", assets.image`lovingHusband`)
            meSayLongText(`$${TRUE_ENDING_GOAL}`)
            sayLongText("And what was wrong with your old job?", assets.image`lovingHusband`)
            sayLongText("Your family misses you.", assets.image`lovingHusband`)
            sayLongText("I miss you.", assets.image`lovingHusband`)
            sayLongText("Junior misses you.", assets.image`lovingHusband`)
            meSayLongText("Please, I need you to trust me on this.")
            meSayLongText("Please just trust me.")
        }],
        [2000, () => {
            sayLongText("Y'okay. :)", assets.image`lovingHusband`)
            meSayLongText("Really?")
            sayLongText("Yeah, of course.", assets.image`lovingHusband`)
        }],
        [3000, () => {
            sayLongText("By the way, you have company.", assets.image`lovingHusband`)
            meSayLongText("Wait, what?")
            buttonsActive = true
            setAnyShoppers(8, assets.tile`alternateGreyscaleDarker`)
            sprite.sayText("AAAAAAH!!", 5000, false)

            cauldron.sayText(Math.percentChance(15)
                ? "I stole this gag from the Carol Burnett Show."
                : "There's magic grease in the other room!",
                5000,
                false
            )
        }],
    ])
})
scene.onPathCompletion(SpriteKind.Neutral, function (sprite, location) {
    const madlib = madlibsHeadOfSales[headOfSalesDecision]
    sprite.setImage(madlib.front)
    paths.shift()

    if (paths.length > 0) {
        return
    }

    goalSprite.setImage(assets.image`princessGertBack`)
    voluntold.setImage(img`
        . . . . . . . 5 5 . . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 1 1 1 6 1 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . f f 6 6 6 6 6 6 6 6 f f . . 
        . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
        . . f f f 3 f f f f 3 f f f . . 
        . . . f d 5 3 3 3 3 5 d f . . . 
        . . f d d f 3 3 3 3 f d d f . . 
        . . . f f f 5 3 3 5 f f f . . . 
        . . . . f 3 3 5 5 3 3 f . . . . 
        . . . . f 3 3 3 3 3 3 f . . . . 
        . . . . . f f f f f f . . . . . 
        `)
    meSayLongText(madlib.recognized_as)
    sayLongText(`(Hi, I'm ${madlib.prettyname}, Head of Sales. I'm also a part-time ${madlib.parttime}.)`)
    sayLongText("So, you won the bake sale challenge! Congratulations!")
    sayLongText("You've single-handedly raised enough money")
    sayLongText("to pay off the community's debts.")
    sayLongText("You're the new Head of the Committee!")
    sayLongText(`You've grown up so much since ${madlib.first_meeting}.`)
    empSayLongText("Wait, what?")
    sayLongText("Princess Gert, with due respect, I'm disappointed.")
    sayLongText("Do you understand why you failed this community?")
    sayLongText("You have forgotten to treat your cookies, and staff, with trust and love!")
    sayLongText("Without them, you will never be respected as a leader in this town.")
    empSayLongText("(Grumble)")
    sayLongText(`${MY_NAME}! You understand that your victory was not just your own doing.`)
    sayLongText("The bond you share with your cookies is marvelous!")
    sayLongText("Welcome to the team, mistress!")

    if (arghAWall > 10) {
        pause(2000)
        meSayLongText("Can I go see a doctor?")
    }

    music.stopAllSounds()
    startGallery(() => newExit(10, 3))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    goalSprite.sayText("You're doing great, hun!", 2000, false)
})
function newRecipeCard(
    cart: number[],
    rate: number,
) {
    buttonsActive = false
    talking = false
    controller.moveSprite(voluntold, 0, 0)
    tiles.placeOnTile(voluntold, tiles.getTileLocation(1, 3))
    pause(500)
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.LoopingInBackground)
    const synergy = getSynergy(cart)
    recipe = bake(recipe, cart, synergy, rate)

    timer.after(2000, function() {
        music.stopAllSounds()
        let image: Image
        let sound: music.Melody = music.jumpUp

        if (synergy <= 0) {
            recipeEncounters[RecipeColor.GREY]++
            image = assets.image`greyCard`
            sound = music.smallCrash
        }
        else {
            if (recipe.beetroot) {
                recipeEncounters[RecipeColor.RED]++
                image = assets.image`redCard`
            }
            else if (recipe.shield) {
                recipeEncounters[RecipeColor.YELLOW]++
                image = assets.image`yellowCard`
            }
            else if (recipe.ricochet) {
                recipeEncounters[RecipeColor.BROWN]++
                image = assets.image`brownCard`
            }
            else {
                recipeEncounters[RecipeColor.WHITE]++
                image = assets.image`whiteCard`
            }
        }

        const card = sprites.create(
            image,
            SpriteKind.RecipeCard,
        )
        animation.runMovementAnimation(card, animation.animationPresets(animation.bobbing), 2000, true)

        if (synergy > 0) {
            const cardEffect = sprites.create(
                assets.image`whiteCard`,
                SpriteKind.RecipeCard,
            )
            animation.runImageAnimation(
                cardEffect,
                [img`
    .1115555..............
    1.....................
    1.....................
    1.....................
    5.....................
    5.....................
    5.....................
    5.....................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    ......................
    .....................5
    .....................5
    .....................5
    .....................5
    .....................1
    .....................1
    .....................1
    ..............5555111.
                `, img`
                .551111115555.........
                5.....................
                5.....................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                .....................5
                .....................5
                .........555511111155.
                `, img`
                ....55551111115555....
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ....55551111115555....
                `, img`
                .........555511111155.
                .....................5
                .....................5
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                5.....................
                5.....................
                .551111115555.........
                `, img`
                ..............5555111.
                .....................1
                .....................1
                .....................1
                .....................5
                .....................5
                .....................5
                .....................5
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                5.....................
                5.....................
                5.....................
                5.....................
                1.....................
                1.....................
                1.....................
                .1115555..............
                `, img`
                ...................55.
                .....................5
                .....................5
                .....................1
                .....................1
                .....................1
                .....................1
                .....................1
                .....................1
                .....................5
                .....................5
                .....................5
                .....................5
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                5.....................
                5.....................
                5.....................
                5.....................
                1.....................
                1.....................
                1.....................
                1.....................
                1.....................
                1.....................
                5.....................
                5.....................
                .55...................
                `, img`
                ......................
                ......................
                ......................
                ......................
                .....................5
                .....................5
                .....................5
                .....................5
                .....................1
                .....................1
                .....................1
                .....................1
                .....................1
                .....................1
                5....................5
                5....................5
                5....................5
                5....................5
                1.....................
                1.....................
                1.....................
                1.....................
                1.....................
                1.....................
                5.....................
                5.....................
                5.....................
                5.....................
                ......................
                ......................
                ......................
                ......................
                `, img`
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                5....................5
                5....................5
                5....................5
                5....................5
                1....................1
                1....................1
                1....................1
                1....................1
                1....................1
                1....................1
                5....................5
                5....................5
                5....................5
                5....................5
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                `, img`
                ......................
                ......................
                ......................
                ......................
                5.....................
                5.....................
                5.....................
                5.....................
                1.....................
                1.....................
                1.....................
                1.....................
                1.....................
                1.....................
                5....................5
                5....................5
                5....................5
                5....................5
                .....................1
                .....................1
                .....................1
                .....................1
                .....................1
                .....................1
                .....................5
                .....................5
                .....................5
                .....................5
                ......................
                ......................
                ......................
                ......................
                `, img`
                .55...................
                5.....................
                5.....................
                1.....................
                1.....................
                1.....................
                1.....................
                1.....................
                1.....................
                5.....................
                5.....................
                5.....................
                5.....................
                ......................
                ......................
                ......................
                ......................
                ......................
                ......................
                .....................5
                .....................5
                .....................5
                .....................5
                .....................1
                .....................1
                .....................1
                .....................1
                .....................1
                .....................1
                .....................5
                .....................5
                ...................55.
                `],
                25,
                true,
            )
            animation.runMovementAnimation(cardEffect, animation.animationPresets(animation.bobbing), 2000, true)
        }

        music.play(music.melodyPlayable(sound), music.PlaybackMode.InBackground)
        buttonsActive = true
        talking = true
        controller.moveSprite(voluntold, moveSpeed, moveSpeed)
    })
}
function startKitchenGame() {
    inRecipeSelect = false
    enterBasement(4, 3)
    pause(100)
    sayLongText("Starting new batch...")
    sayLongText("Recalibrating motors...")
    sayLongText("Objective: Don't let the ingredients fall.")
    sayLongText("Begin!")
    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
    const MIN_GAME_TIME = 5
    const value = getValue(cart)
    const currentBalance = info.score()
    let chances = 0
    let gameScore = 0
    info.setScore(0)
    resetSprites()
    inBasement = false

    KitchenGame.start(
        MIN_GAME_TIME
            + Math.floor(getGameTimeByValue(value)),
        (): Sprite => {
            respawnShoppers = false
            talking = false
            nearsighted = false
            voluntold.destroy()
            setPlayer()
            return voluntold
        },
        (s: number): void => {
            chances = s
            pause(500)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
            sayLongText("Finished!")
            gameScore = info.score()
            info.setScore(currentBalance)

            voluntold.sayText(null)
            talking = true
            nearsighted = true

            sayLongText(`New recipe value: ${chances * (value + gameScore)}`)
            newRecipeCard(cart, s)
        }
    )
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`decisionDoor0`, function (sprite, location) {
    switch (1000 * location.column + location.row) {
        case 13007:
            startKitchenGame()
            break
        case 13009:
            selectIngredience()
            break
        case 13011:
            inRecipeSelect = false
            enterBasement(4, 3)
            pause(100)
            sayLongText("Canceling new recipe...")
            break
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`downstairs`, function (sprite, location) {
    switch (1000 * location.column + location.row) {
        case 14010:
            enterBasement()
            break
        case 9007:
            enterHumbleHome(12, 8)
            break
        default:
            break
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    switch (1000 * location.column + location.row) {
        case 14008:
            enterAttic()
            break
        case 5009:
            inBasement = false
            enterHumbleHome(12, 10)
            break
        default:
            break
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    switch (1000 * location.column + location.row) {
        case 17020:
            enterCol = 15
            enterRow = 20
            entrances[0]()
            break
        case 29029:
            enterCol = 27
            enterRow = 29
            entrances[1]()
            break
        case 24005:
            enterCol = 26
            enterRow = 5
            entrances[2]()
            break
        case 33023:
            enterCol = 33
            enterRow = 21
            entrances[3]()
            break
        case 13005:
            enterCol = 13
            enterRow = 7
            entrances[4]()
            break
        default:
            enterTopFloor(enterCol, enterRow)
            break
    }
})

sprites.onDestroyed(SpriteKind.Volunteer, function (sprite) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
sprites.onDestroyed(SpriteKind.FakePlayer, function (sprite) {
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    decoyExists = false
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.StrayCatsPlayer, function (sprite, otherSprite) {
    if (companionState < 2) {
        return
    }

    const loc = otherSprite.tilemapLocation()
    const placeHere = tiles.getTileLocation(loc.col, loc.row - 1)
    tiles.placeOnTile(sprite, placeHere)

    if (!game.ask("Want to play 'Stray Cats'?")) {
        return
    }

    voluntold.destroy()
    pet.destroy()
    resetSprites()

    StrayCatsGame.start(
        onAButtonPressed,
        onBButtonPressed,
        lifeZero,
        (w, s, h) => {
            if (w) {
                companionType = Companion.LUCKY_CAT
            }

            enterHumbleHome(placeHere.col, placeHere.row)

            if (w) {
                timer.after(100, () => {
                    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
                    sayLongText("Your companion turned into Lucky Cat!")
                })
            }
        },
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HaterHuntPlayer, function (sprite, otherSprite) {
    const loc = otherSprite.tilemapLocation()
    const placeHere = tiles.getTileLocation(loc.col, loc.row - 1)
    tiles.placeOnTile(sprite, placeHere)

    if (companionState < 2) {
        sayLongText("Hi mom! I'm playing \"Find the K-Pop Hater\", a weird indie game.")
        sayLongText("I don't think you'd like it.")
        return
    }

    if (!game.ask("Want to play 'Find the K-Pop Hater'?")) {
        return
    }

    voluntold.destroy()
    pet.destroy()
    resetSprites()

    const exitMinigame = () => enterHumbleHome(placeHere.col, placeHere.row)

    HaterHuntGame.start(
        onAButtonPressed,
        onBButtonPressed,
        countdownEnd,
        (w, s) => {
            if (!w) {
                exitMinigame()
                return
            }

            ILikeBooksGame.start(
                onAButtonPressed,
                lifeZero,
                (w: boolean) => {
                    if (w) {
                        companionType = Companion.KPOP_STAN
                    }

                    exitMinigame()

                    if (w) {
                        timer.after(100, () => {
                            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
                            sayLongText("Your companion turned into a K-Pop Stan!")
                        })
                    }
                }
            )
        },
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.JumpPlayer, function (sprite, otherSprite) {
    const loc = otherSprite.tilemapLocation()
    const placeHere = tiles.getTileLocation(loc.col, loc.row - 1)
    tiles.placeOnTile(sprite, placeHere)

    if (companionState < 2) {
        sayLongText("Hi mom! I'm playing \"Jump the Shark\", a weird indie game.")
        sayLongText("I don't think you'd like it.")
        return
    }

    if (!game.ask("Want to play 'Jump the Shark'?")) {
        return
    }

    voluntold.destroy()
    pet.destroy()
    resetSprites()

    JumpGame.start(
        onAButtonPressed,
        onBButtonPressed,
        up, down, left, right,
        countdownEnd,
        lifeZero,
        (w, s, h) => {
            if (w) {
                companionType = Companion.KING_SHARK
            }

            enterHumbleHome(placeHere.col, placeHere.row)

            if (w) {
                timer.after(100, () => {
                    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
                    sayLongText("Your companion turned into King Shark!")
                })
            }
        },
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.RecipeCard, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.RecipeCard)
    music.play(music.createSong(assets.song`linksAwakeningPowerupGet`), music.PlaybackMode.UntilDone)
    // todo: display new recipe specs
    KitchenGame.stop()
    enterBasement(4, 3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BlueEyesWhiteDragonCard, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.BlueEyesWhiteDragonCard)
    hasBlueEyes = true
    const gildingCost = Math.ceil(
        OUTSTANDING_GOAL / ingredience[Magic.GILDING].price
    )
    inventory[Magic.GILDING] -= gildingCost
    voluntold.sayText(`-(${gildingCost}) magic gilding`, 1000)
    music.play(music.createSong(assets.song`linksAwakeningPowerupGet`), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.DeusExMachinaCard, function (sprite, otherSprite) {
    hasAshBlossom = true
    otherSprite.destroy()
    music.play(music.createSong(assets.song`linksAwakeningPowerupGet`), music.PlaybackMode.UntilDone)
    sayLongText("Amazing!")
    sayLongText("Ash Blossom and Joyous Spring has been obtained!")
    sayLongText("The world trembles under your feet!")

    timer.after(500, function () {
        scene.cameraShake(50, 5000)
        music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.LoopingInBackground)
        pause(5000)
        music.stopAllSounds()
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ComputerTerminal, function(sprite, otherSprite) {
    const loc = otherSprite.tilemapLocation()

    tiles.placeOnTile(
        sprite,
        tiles.getTileLocation(
            loc.row,
            loc.col + 1
        )
    )

    sayLongText("Receiving input...")
    sayLongText(`Hello, ${MY_NAME}!`)
    sayLongText("Yes, the Magic Maker Oven System is operating at full capacity.")
    const hasInventory = getTotal(inventory)

    const say = hasInventory
        ? [
            "Did you want to add a new recipe?",
            "(You will have to start a new batch if you do.)",
        ]
        : [
            "Did you want to start a new batch?",
        ]

    const ask = hasInventory
        ? "Start a new batch?"
        : "Start a new recipe?"

    for (const value of say) {
        sayLongText(value)
    }

    if (!game.ask(ask)) {
        tiles.placeOnTile(
            sprite,
            tiles.getTileLocation(
                loc.row,
                loc.col + 2
            )
        )

        return
    }

    sayLongText("Preheating oven...")

    if (hasInventory) {
        if (hasTooMuchGilding(inventory)) {
            startTooMuchGildingSequence()
        }
        else {
            selectIngredience()
        }
    }
    else {
        startKitchenGame()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Disinterested, function (sprite, otherSprite) {
    pause(knockBack() + 100)

    if (hasDiscoveredDisinterest) {
        sayLongText("Got any queens?", assets.image`shopperFront`)
        sayLongText("No. Go fish.", assets.image`shopperFront`)
        return
    }

    talking = false
    buttonsActive = false
    hasDiscoveredDisinterest = true
    meSayLongText("Heeeeey, guys!")
    pause(500)
    sayLongText("Hey you.", assets.image`shopperFront`)
    meSayLongText("You guys want, some, cookies?")
    pause(500)
    sayLongText("No, thanks.", assets.image`shopperFront`)
    meSayLongText("What!? They're cookies!")
    meSayLongText("You know. Run around screaming and trying to catch me?")
    pause(500)
    sayLongText("They're beetroot. You made beetroot cookies.", assets.image`shopperFront`)
    sayLongText("No one here likes beetroot.", assets.image`shopperFront`)
    sayLongText("Except for one of us.", assets.image`shopperFront`)
    meSayLongText("Oh.")
    sayLongText("He'll probably find you.", assets.image`shopperFront`)
    meSayLongText("I'll be sure to look out for him.")
    talking = true
    buttonsActive = true
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Idling, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    pause(knockBack() + 100)
    const idlerType = sprites.readDataNumber(otherSprite, "type")

    if (idlerType === Idler.WISEMAN) {
        otherSprite.setImage(
            spriteData[idlerType]
                .directions[reverseDirection(direction)]
        )

        shopAdvice(sprite)
        return
    }

    if (Math.percentChance(30)) {
        const tempText = spriteData[idlerType]
            .longText
            ._pickRandom()

        if (tempText === undefined) {
            return
        }

        otherSprite.setImage(
            spriteData[idlerType]
                .directions[reverseDirection(direction)]
        )

        sayLongText(tempText)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ToiletDisposal, function (sprite, otherSprite) {
    const loc = otherSprite.tilemapLocation()

    if (enraged) {
        endRage()
        tiles.placeOnTile(sprite, tiles.getTileLocation(loc.col + 1, loc.row))
        music.play(music.melodyPlayable(music.jumpDown), music.PlaybackMode.InBackground)
        meSayLongText("Ahhhhh, glad that's over.")
        return
    }

    const disposeIndex = findDisposableInventory()

    if (disposeIndex < 0) {
        return
    }

    tiles.placeOnTile(sprite, tiles.getTileLocation(loc.col + 1, loc.row))
    sayLongText(`Flushed (1) ${ingredience[disposeIndex].prettyname} down the toilet.`)
    inventory[disposeIndex]--
    music.play(music.melodyPlayable(music.jumpDown), music.PlaybackMode.InBackground)

    if (hasAshBlossom || ingredience[disposeIndex].name !== "magicFeces") {
        return
    }

    tiles.placeOnTile(
        sprite,
        tiles.getTileLocation(
            loc.col + 2,
            loc.row,
        ),
    )

    animation.runMovementAnimation(
        otherSprite,
        animation.animationPresets(animation.shake),
        25,
        true,
    )

    timer.after(2000, function() {
        animation.stopAnimation(
            animation.AnimationTypes.MovementAnimation,
            otherSprite,
        )

        tiles.placeOnTile(
            otherSprite,
            loc,
        )

        music.play(
            music.melodyPlayable(music.magicWand),
            music.PlaybackMode.InBackground,
        )

        pause(500)

        const card = sprites.create(
            assets.image`ashBlossomAndJoyousSpringBulleted`,
            SpriteKind.Neutral,
        )

        tiles.placeOnTile(card, tiles.getTileLocation(loc.col + 1, loc.row - 2))
        animation.runMovementAnimation(card, animation.animationPresets(animation.bobbing), 2000, true)
        pause(1000)

        animation.stopAnimation(
            animation.AnimationTypes.MovementAnimation,
            card,
        )

        pause(500)
        card.vx = 15
        card.vy = -25
        pause(3000)
        card.vx = 0
        card.vy = 0
        card.setKind(SpriteKind.DeusExMachinaCard)
        animation.runMovementAnimation(card, animation.animationPresets(animation.bobbing), 2000, true)
    })
})
sprites.onOverlap(SpriteKind.Dark, SpriteKind.Idling, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Managerial, function (sprite, otherSprite) {
    enemiesCanMove = false
    const loc = otherSprite.tilemapLocation()
    tiles.placeOnTile(sprite, tiles.getTileLocation(loc.col, loc.row + 2))

    if (getTotal(cart) === 0) {
        sayLongText("Hi! Welcome to Magic Mart.")
        sayLongText("Talk to me when you're ready to check out.")
        enemiesCanMove = true
        return
    }

    sayLongText("Ready?", otherSprite.image)
    let balance = 0

    for (let index = 0; index < cart.length; ++index) {
        if (cart[index] === 0) {
            continue
        }

        otherSprite.sayText(`$${balance}.00`)
        const item = ingredience[index]

        switch (index) {
            case Magic.BEETROOT: 
                sayLongText("Is that beetroot?", otherSprite.image)
                sayLongText("You want beetroot!?", otherSprite.image)
                sayLongText("What are you gonna do with a beetroot?", otherSprite.image)

                if (game.ask("Add beetroot?")) {
                    balance = addToTotal(index, balance)
                }
                else {
                    sayLongText("\"No\" to the beetroot.", otherSprite.image)
                }

                break
            case Magic.FECES:
                if (hasFoundTheFeces) {
                    sayLongText("Magic feces. Why? Why again?", otherSprite.image)
                }
                else {
                    hasFoundTheFeces = true
                    sayLongText("Magic, feces!? Why would you even want this?", otherSprite.image)
                    sayLongText("Why is it in our store?", otherSprite.image)
                    meSayLongText("Something tells me I'll know when the time is right.")
                }

                if (game.ask("Add magic feces?")) {
                    sayLongText("Ugh.", otherSprite.image)
                    balance = addToTotal(index, balance)
                }
                else {
                    sayLongText("\"No\" to the feces.", otherSprite.image)
                }

                break
            case Magic.DMCA_TAKEDOWN_NOTICE:
                sayLongText("A magic DMCA takedown notice?", otherSprite.image)
                sayLongText("\"Free of charge?\"", otherSprite.image)
                sayLongText("Who gave this to you?", otherSprite.image)
                sayLongText("Are you being served?", otherSprite.image)

                if (game.ask("Cease and desist.")) {
                    sayLongText("Hope that works out for you.", otherSprite.image)
                    music.stopAllSounds()
                    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
                    hasAcceptedCharge = true
                }
                else {
                    sayLongText("Rebuff and counter. Well okay then.", otherSprite.image)
                }

                break
            case Magic.MISSINGNO:
                sayLongText(`One magic\n${item.prettyname}`, otherSprite.image)
                sayLongText("Once purchased, has the effect of maxing out the sixth item of your inventory,", otherSprite.image)
                sayLongText("which is:\nmagic gilding.", otherSprite.image)

                if (game.ask("Convert cash to gold?")) {
                    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
                    cart[Magic.GILDING] = 255
                    balance += 400000
                    showCartRow(ingredience[index].prettyname, cart[index], ingredience[index].price)
                    otherSprite.setImage(assets.image`managerGlitched`)
                }
                else {
                    sayLongText("Well okay then.", otherSprite.image)
                }

                break
            default:
                balance = addToTotal(index, balance)
                break
        }
    }

    otherSprite.sayText(`$${balance}.00`)
    sayLongText(`Your total is: $${balance}.00`)

    if (balance < info.score() + itemCost) {
        if (!game.ask("Pay for the items in cart?")) {
            enemiesCanMove = true
            return
        }

        addToList(cart, ingredientEncounters)
        addToInventory(cart)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        loseMoney(balance)

        timer.after(500, function () {
            manager.sayText("Come again!")
        })
    }
    else {
        sayLongText("You don't have enough. You'll have to put some of this back.")
        music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
        // todo: consider the option to put items back without randomizing again
        setAvailableIngredience()
        sprite.sayText("+1 cart", 500, false)

        timer.after(500, function () {
            manager.sayText(null)
        })
    }

    enemiesCanMove = true
})

const recipePlacement = [
    [12, 4],
    [2, 2],
    [4, 2],
    [6, 2],
    [8, 2],
    [10, 2],

    [10, 4],
    [2, 4],
    [4, 4],
    [6, 4],
    [8, 4],
    [12, 2],
]

sprites.onOverlap(SpriteKind.Player, SpriteKind.MagicIngredience, function (sprite, otherSprite) {
    if (inRecipeSelect) {
        const tempSprite = sprites.create(
            otherSprite.image,
            SpriteKind.Neutral
        )

        const index = sprites.readDataNumber(otherSprite, "type")
        const pair = recipePlacement[index]

        tiles.placeOnTile(tempSprite, tiles.getTileLocation(pair[0], pair[1]))
        tiles.placeOnRandomTile(voluntold, assets.tile`greenEventTile0`)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        let quantity = sprites.readDataNumber(otherSprite, "quantity")

        quantity--
        cart[index]++

        if (quantity === 0) {
            otherSprite.destroy()
        }
        else {
            sprites.setDataNumber(otherSprite, "quantity", quantity)
        }

        otherSprite.sayText(quantity === 1 ? null : quantity)
        tempSprite.sayText(cart[index] === 1 ? null : cart[index])
        return
    }

    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)

    const needle = availIngredience.find((o, i): boolean => {
        return o.image.equals(otherSprite.image)
    })

    if (needle === undefined) {
        return
    }

    cart[needle.index]++
    sprite.sayText("+1 cart", 500, false)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TransitSign, function (sprite, otherSprite) {
    if (!hasBusCard) {
        return
    }

    const loc = otherSprite.tilemapLocation()
    let gotoCol = enterCol
    let gotoRow = enterRow

    if (!game.ask("Take the bus?")) {
        switch (loc.col * 1000 + loc.row) {
            case 23035:
                gotoCol = loc.col - 2
                gotoRow = loc.row
                break
            case 36014:
                gotoCol = loc.col - 1
                gotoRow = loc.row - 2
                break
            case 14010:
                gotoCol = loc.col,
                gotoRow = loc.row + 2
                break
            default:
                break
        }

        tiles.placeOnTile(
            voluntold,
            tiles.getTileLocation(
                gotoCol,
                gotoRow,
            ),
        )

        return
    }

    switch (loc.col * 1000 + loc.row) {
        case 23035:
            enterCol = 21
            enterRow = 35
            busToMarket()
            break
        case 36014:
            enterCol = 35
            enterRow = 12
            busToMarket()
            break
        case 14010:
            enterTopFloor(enterCol, enterRow)
            break
        default:
            break
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.TransitCard, function (sprite, otherSprite) {
    if (!busCardsActive) {
        meSayLongText("What's this? A bus card?")
        busCardsActive = true
    }

    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
    otherSprite.destroy()
    hasBusCard = true
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ForbiddenPotable, function (sprite, otherSprite) {
    if (giantCookiePowerup) {
        return
    }

    (Math.percentChance(20)
        ? consumeHyperPotion
        : consumeHaterade)(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Professional, function (sprite, otherSprite) {
    const placeMeHere = tiles.getTileLocation(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row + 2)

    if (hasConfectioneryMastery) {
        sayLongText("Go quickly. You're being followed.", assets.image`witchGhost`)
        tiles.placeOnTile(sprite, placeMeHere)
        return
    }

    if (info.score() < COST_OF_MASTERY + PERFECT_CONFECTION_COST) {
        sayLongText("I can't give credit. Come back when you're a little richer.", assets.image`witchGhost`)
        tiles.placeOnTile(sprite, placeMeHere)
        return
    }

    sayLongText("The cookies you hold are powerful,", assets.image`witchGhost`)
    sayLongText("able to entice every monster in this town.", assets.image`witchGhost`)
    sayLongText("But magic royalty will never be impressed by mere cookies.", assets.image`witchGhost`)
    sayLongText("You need a confectioner's magic", assets.image`witchGhost`)
    sayLongText("in order to sell for a noble price.", assets.image`witchGhost`)
    meSayLongText("How can I obtain this magic?")
    sayLongText("True confectionery mastery comes at a price you cannot afford.", assets.image`witchGhost`)
    meSayLongText("Are you telling me it's cursed!?")
    sayLongText("It's simply not for the unprepared.", assets.image`witchGhost`)

    if (game.ask(`Buy Confectionery Mastery for $${COST_OF_MASTERY}?`)) {
        hasConfectioneryMastery = true
        music.play(music.createSong(assets.song`funeralMarch`), music.PlaybackMode.InBackground)
        loseMoney(COST_OF_MASTERY)
        sayLongText("Go quickly. You're being followed.", assets.image`witchGhost`)
    }

    tiles.placeOnTile(sprite, placeMeHere)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.ExtraLife, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprite.sayText("+1 life", 2000, true)
    info.changeLifeBy(1)
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.RedundantSphere, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprite.sayText("I'll get through this.", 2000, true)
    info.changeLifeBy(3)
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
    hasRedundantSphere = true
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Killer, function (sprite, otherSprite) {
    const loc = otherSprite.tilemapLocation()

    tiles.placeOnTile(
        sprite,
        tiles.getTileLocation(
            loc.col,
            loc.row + 1
        )
    )

    if (enraged) {
        sayLongText("Uh oh. Psycho alert.")
        return
    }

    sayLongText(
        Math.percentChance(15)
            ? "I don't eat cookies. I just kill."
            : "Choose. Your money or your life."
    )

    if (game.ask("Trade life for $200?")) {
        sprite.startEffect(effects.spray, 1000)
        scene.cameraShake(4, 500)
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
        info.changeScoreBy(200)
        info.changeLifeBy(-1)
    }

    if (Math.percentChance(15)) {
        otherSprite.sayText("Come again!", 2000, false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Lucky, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.hearts, 500)

    sprite.sayText([
        "Lucky!",
        "That's a lucky cat!",
        "Good kitty!",
        "My luck has just changed.",
        "Am I glad to see you."
    ]._pickRandom(), 2000, false)
    
    hasLuck = true
    moveSpeed += 10
    controller.moveSprite(voluntold, moveSpeed, moveSpeed)
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Antisocial, function (sprite, otherSprite) {
    if (busCardsActive) {
        otherSprite.sayText("Just take the card. I don't need it.", 1000, false)
        return
    }

    otherSprite.sayText("Leave me alone.", 1000, false)
    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Unlocking, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.rings, 500)
    hasKey = true
    music.play(music.createSong(assets.song`discoveryFanfare`), music.PlaybackMode.InBackground)

    timer.after(1500, function() {
        sayLongText("doors lol", assets.image`key`)
    })
})
sprites.onOverlap(SpriteKind.BeetrootEnjoyer, SpriteKind.Food, function (sprite, otherSprite) {
    makePurchase(sprite, otherSprite, false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    makePurchase(sprite, otherSprite, true)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Food, function (sprite, otherSprite) {
    if (giantCookiePowerup || recipe.speed > 0 || (sprite.lifespan >= 9000 && otherSprite.lifespan >= 9000)) {
        return
    }

    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    info.changeScoreBy(2 * itemCost)
    voluntold.sayText("Yoink.", 500, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BeetrootEnjoyer, function (sprite, otherSprite) {
    hitPlayer(sprite, 3, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Dark, function (sprite, otherSprite) {
    if (inMart) {
        hasBusCard = false
    }

    hitPlayer(sprite)
})
sprites.onOverlap(SpriteKind.Volunteer, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    info.changeScoreBy(getRevenue() - itemCost)
    voluntold.sayText(`+$${getRevenue() - itemCost}`, 500, false)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)

    if (respawnShoppers) {
        setWindowShoppers(1, sprites.dungeon.doorOpenNorth)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.MagicGrease, function (sprite, otherSprite) {
    if (enraged) {
        return
    }

    sprites.destroy(otherSprite)
    getGiantCookiePowerup()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(getRevenue())
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    voluntold.sayText(`+$${getRevenue()}`, 500, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (giantCookiePowerup || recipe.speed > 0 || otherSprite.lifespan >= 9000) {
        return
    }

    voluntold.sayText("I can pick this up.", 500, false)
})
function negateEffect(sprite: Sprite, newImage: Image) {
    const effectSprite = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Neutral)
    tiles.placeOnTile(effectSprite, sprite.tilemapLocation())
    effectSprite.setPosition(sprite.x, sprite.y)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
        effectSprite,
        [img`
        ....1.........111.....11
        ....1........11.11...11.
        ....11......11...11.11..
        .....11......1....111..1
        ..11111......111....1..1
        .11....1111........1...1
        11........11.......1...1
        1...........111...11....
        ..1...........1111.1....
        ...11.......11..1..1....
        ....1111.1111...1..11..1
        ...1....11......1.111..1
        ..11.........11.1.111..1
        .11........111..1.11.111
        .1....1....1...11.11....
        .11..11....11..1.1.11...
        ..1..1......111..1..1...
        .....1...........1..11..
        .....11.........11...111
        ......11.......11....111
        ..1111111....111......1.
        .11.....111111....1...1.
        .1.........11....11...1.
        .1.........11....11...1.
        .1.........1......11.11.
        .1111......1.......111..
        ...........1.......11...
        ...........1......11....
        ....11111..1......1.....
        ...11......11.....1...1.
        ...1.......11......1111.
        ..1........111......11..
        ..1.........1.111.......
        ..1.........1..11.......
        `, img`
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        `, img`
        ....1.........111.....11
        ....1........11.11...11.
        ....11......11...11.11..
        .....11......1....111..1
        ..11111......111....1..1
        .11....1111........1...1
        11........11.......1...1
        1...........111...11....
        ..1...........1111.1....
        ...11.......11..1..1....
        ....1111.1111...1..11..1
        ...1....11......1.111..1
        ..11.........11.1.111..1
        .11........111..1.11.111
        .1....1....1...11.11....
        .11..11....11..1.1.11...
        ..1..1......111..1..1...
        .....1...........1..11..
        .....11.........11...111
        ......11.......11....111
        ..1111111....111......1.
        .11.....111111....1...1.
        .1.........11....11...1.
        .1.........11....11...1.
        .1.........1......11.11.
        .1111......1.......111..
        ...........1.......11...
        ...........1......11....
        ....11111..1......1.....
        ...11......11.....1...1.
        ...1.......11......1111.
        ..1........111......11..
        ..1.........1.111.......
        ..1.........1..11.......
        `, img`
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        111111111111111111111111
        `],
        50,
        true
    )
    pause(500)
    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, effectSprite)
    sprites.destroy(effectSprite)
    sprite.setImage(newImage)
}
function cardGameEnding() {
    for (const kind of [
        SpriteKind.Dark,
        SpriteKind.Enemy,
        SpriteKind.BeetrootEnjoyer,
    ]) {
        sprites.destroyAllSpritesOfKind(kind)
    }

    talking = false
    buttonsActive = false
    controller.moveSprite(voluntold, 0, 0)

    goalSprite.setImage(assets.image`employerSideView`)
    voluntold.setImage(img`
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
    pause(2000)
    pet.destroy()
    empSayLongText(`${MY_NAME}, what is this? What are you doing?`)
    meSayLongText("Princess Gert, I'm afraid our partnership must respectfully come to a close.")

    let cards: Sprite[] = []

    const blueEyes = sprites.create(
        assets.image`blueEyesWhiteDragon`,
        SpriteKind.Neutral,
    )
    blueEyes.setPosition(voluntold.x, voluntold.y - 30)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    cards.push(blueEyes)

    let card: Sprite = null

    timer.after(3000, function() {
        meSayLongText("I have found my destiny, and I see a new life for me elsewhere, free from your confectionery cult.")
        meSayLongText("And with this new power I possess, that destiny is within my grasp.")
        empSayLongText("Darling, did you drop your fetterlocks in a fairy pond?")
        empSayLongText("What on earth are you talking about?")
        meSayLongText("It's over, Your Highness. I have the Blue Eyes White Dragon.")
        empSayLongText("...")
        empSayLongText("Darling. You can't be serious.")
        empSayLongText("That old thing?")
        empSayLongText("Darling, you haven't been in the game as long as I have.")
        goalSprite.setImage(assets.image`princessGertBack`)

        timer.after(1000, function () {
            card = sprites.create(
                assets.image`exodiaLeftArm`,
                SpriteKind.Neutral,
            )
            card.setPosition(goalSprite.x - 20, goalSprite.y - 20)
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
            cards.push(card)
        })
        timer.after(2000, function () {
            card = sprites.create(
                assets.image`exodiaRightArm`,
                SpriteKind.Neutral,
            )
            card.setPosition(goalSprite.x + 20, goalSprite.y - 20)
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
            cards.push(card)
        })
        timer.after(3000, function () {
            card = sprites.create(
                assets.image`exodiaLeftLeg`,
                SpriteKind.Neutral,
            )
            card.setPosition(goalSprite.x - 20, goalSprite.y + 20)
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
            cards.push(card)
        })
        timer.after(4000, function () {
            card = sprites.create(
                assets.image`exodiaRightLeg`,
                SpriteKind.Neutral,
            )
            card.setPosition(goalSprite.x + 20, goalSprite.y + 20)
            music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
            cards.push(card)
        })

        timer.after(5000, function () {
            if (hasAshBlossom) {
                meSayLongText("Now hold on.")
                empSayLongText("What?")
                meSayLongText("I still have...")

                const ashBlossom = sprites.create(
                    assets.image`ashBlossomAndJoyousSpringBulleted`,
                    SpriteKind.Neutral,
                )
                ashBlossom.setPosition(voluntold.x + 40, voluntold.y - 30)
                music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                cards.push(ashBlossom)

                timer.after(500, function () {
                    card = sprites.create(
                        assets.image`sangan`,
                        SpriteKind.Neutral,
                    )
                    card.setPosition(goalSprite.x, goalSprite.y - 40)
                    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
                    cards.push(card)
                })

                timer.after(1500, function () {
                    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
                    const resolveEffect = sprites.create(
                        assets.image`resolveSign`,
                        SpriteKind.Neutral,
                    )
                    animation.runImageAnimation(
                        resolveEffect,
                        [img`
    11111............1111..................................
    11..11..........11..11.................................
    11...11........11......................................
    11...11........111.....................................
    11..11..........11111..................................
    11111.............1111.................................
    11..11..............111................................
    11...11........1.....11................................
    11...11........1.....11................................
    11...11........11....11................................
    11...11.........11..11.................................
    11...11..........1111..................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    ........1111111...........1111.........11....11........
    ........11...............11..11........11....11........
    ........11..............11....11.......11....11........
    ........11..............11....11.......11....11........
    ........11..............11....11........11...1.........
    ........11111...........11....11........11..11.........
    ........11..............11....11........11..11.........
    ........11..............11....11.........11.1..........
    ........11..............11....11.........11.1..........
    ........11..............11....11.........11.1..........
    ........11...............11..11..........1111..........
    ........1111111...........1111............11...........
                        `, img`
                        .................1111..................................
                        ................11..11.................................
                        11111..........11......................................
                        11..11.........111.....................................
                        11...11.........11111..................................
                        11...11...........1111.................................
                        11..11..............111................................
                        11111..........1.....11................................
                        11..11.........1.....11................................
                        11...11........11....11................................
                        11...11.........11..11.................................
                        11...11..........1111..................................
                        11...11................................................
                        11...11................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        ........1111111........................................
                        ........11................1111.........11....11........
                        ........11...............11..11........11....11........
                        ........11..............11....11.......11....11........
                        ........11..............11....11.......11....11........
                        ........11111...........11....11........11...1.........
                        ........11..............11....11........11..11.........
                        ........11..............11....11........11..11.........
                        ........11..............11....11.........11.1..........
                        ........11..............11....11.........11.1..........
                        ........11..............11....11.........11.1..........
                        ........1111111..........11..11..........1111..........
                        ..........................1111............11...........
                        `, img`
                        .......................................................
                        .................1111..................................
                        ................11..11.................................
                        ...............11......................................
                        11111..........111.....................................
                        11..11..........11111..................................
                        11...11...........1111.................................
                        11...11.............111................................
                        11..11.........1.....11................................
                        11111..........1.....11................................
                        11..11.........11....11................................
                        11...11.........11..11.................................
                        11...11..........1111..................................
                        11...11................................................
                        11...11................................................
                        11...11................................................
                        .......................................................
                        ........1111111........................................
                        ........11.............................................
                        ........11.............................................
                        ........11................1111.........11....11........
                        ........11...............11..11........11....11........
                        ........11111...........11....11.......11....11........
                        ........11..............11....11.......11....11........
                        ........11..............11....11........11...1.........
                        ........11..............11....11........11..11.........
                        ........11..............11....11........11..11.........
                        ........11..............11....11.........11.1..........
                        ........1111111.........11....11.........11.1..........
                        ........................11....11.........11.1..........
                        .........................11..11..........1111..........
                        ..........................1111............11...........
                        `, img`
                        .................................11....................
                        .................................11....................
                        .................................11....................
                        .................1111............11....................
                        ................11..11...........11....................
                        ...............11................11....................
                        11111..........111...............11....................
                        11..11..........11111............11....................
                        11...11...........1111...........11....................
                        11...11.............111..........11....................
                        11..11.........1.....11..........11....................
                        11111..........1.....11..........1111111...............
                        11..11.........11....11................................
                        11...11.........11..11.................................
                        11...11..........1111..................................
                        11...11.1111111........................................
                        11...11.11.............................................
                        11...11.11.............................................
                        ........11.............................................
                        ........11................1111.........................
                        ........11111............11..11........11....11........
                        ........11..............11....11.......11....11........
                        ........11..............11....11.......11....11........
                        ........11..............11....11.......11....11........
                        ........11..............11....11........11...1.........
                        ........11..............11....11........11..11.........
                        ........1111111.........11....11........11..11.........
                        ........................11....11.........11.1..........
                        ........................11....11.........11.1..........
                        .........................11..11..........11.1..........
                        ..........................1111...........1111..........
                        ..........................................11...........
                        `, img`
                        ................................................1111111
                        .................................11.............11.....
                        .................................11.............11.....
                        .................................11.............11.....
                        .................................11.............11.....
                        .................1111............11.............11111..
                        ................11..11...........11.............11.....
                        ...............11................11.............11.....
                        11111..........111...............11.............11.....
                        11..11..........11111............11.............11.....
                        11...11...........1111...........11.............11.....
                        11...11.............111..........11.............1111111
                        11..11.........1.....11..........1111111...............
                        11111...11111111.....11................................
                        11..11..11.....11....11................................
                        11...11.11......11..11.................................
                        11...11.11.......1111..................................
                        11...11.11................1111.........................
                        11...11.11111............11..11........................
                        11...11.11..............11....11.......................
                        ........11..............11....11.......11....11........
                        ........11..............11....11.......11....11........
                        ........11..............11....11.......11....11........
                        ........11..............11....11.......11....11........
                        ........1111111.........11....11........11...1.........
                        ........................11....11........11..11.........
                        ........................11....11........11..11.........
                        .........................11..11..........11.1..........
                        ..........................1111...........11.1..........
                        .........................................11.1..........
                        .........................................1111..........
                        ..........................................11...........
                        `, img`
                        ................................................1111111
                        ................................................11.....
                        ................................................11.....
                        .................................11.............11.....
                        .................................11.............11.....
                        .................................11.............11111..
                        .................................11.............11.....
                        .................1111............11.............11.....
                        ................11..11...........11.............11.....
                        11111..........11................11.............11.....
                        11..11.........111...............11.............11.....
                        11...11.1111111.11111............11.............1111111
                        11...11.11........1111...........11....................
                        11..11..11..........111..........11....................
                        11111...11.....1.....11..........1111111...............
                        11..11..11.....1.....11...1111.........................
                        11...11.11111..11....11..11..11........................
                        11...11.11......11..11..11....11.......................
                        11...11.11.......1111...11....11.......................
                        11...11.11..............11....11.......11....11........
                        11...11.11..............11....11.......11....11........
                        ........11..............11....11.......11....11........
                        ........1111111.........11....11.......11....11........
                        ........................11....11........11...1.........
                        ........................11....11........11..11.........
                        .........................11..11.........11..11.........
                        ..........................1111...........11.1..........
                        .........................................11.1..........
                        .........................................11.1..........
                        .........................................1111..........
                        ..........................................11...........
                        .......................................................
                        `, img`
                        .......................................................
                        ................................................1111111
                        ................................................11.....
                        ................................................11.....
                        ................................................11.....
                        .................................11.............11.....
                        .................................11.............11111..
                        .................................11.............11.....
                        .................................11.............11.....
                        .................1111............11.............11.....
                        11111...1111111.11..11...........11.............11.....
                        11..11..11.....11................11.............11.....
                        11...11.11.....111...............11.............1111111
                        11...11.11......11111.....1111...11....................
                        11..11..11........1111...11..11..11....................
                        11111...11111.......111.11....11.11....................
                        11..11..11.....1.....11.11....11.1111111...............
                        11...11.11.....1.....11.11....11.......11....11........
                        11...11.11.....11....11.11....11.......11....11........
                        11...11.11......11..11..11....11.......11....11........
                        11...11.11.......1111...11....11.......11....11........
                        11...11.1111111.........11....11........11...1.........
                        ........................11....11........11..11.........
                        .........................11..11.........11..11.........
                        ..........................1111...........11.1..........
                        .........................................11.1..........
                        .........................................11.1..........
                        .........................................1111..........
                        ..........................................11...........
                        .......................................................
                        .......................................................
                        .......................................................
                        `, img`
                        .......................................................
                        .......................................................
                        .......................................................
                        ................................................1111111
                        ................................................11.....
                        ................................................11.....
                        ................................................11.....
                        .................................11.............11.....
                        .................................11.............11111..
                        .................................11.............11.....
                        11111...1111111..1111............11.............11.....
                        11..11..11......11..11....1111...11.............11.....
                        11...11.11.....11........11..11..11.............11.....
                        11...11.11.....111......11....11.11.............11.....
                        11..11..11......11111...11....11.11.............1111111
                        11111...11111.....1111..11....11.11....11....11........
                        11..11..11..........111.11....11.11....11....11........
                        11...11.11.....1.....11.11....11.11....11....11........
                        11...11.11.....1.....11.11....11.11111111....11........
                        11...11.11.....11....11.11....11........11...1.........
                        11...11.11......11..11..11....11........11..11.........
                        11...11.1111111..1111....11..11.........11..11.........
                        ..........................1111...........11.1..........
                        .........................................11.1..........
                        .........................................11.1..........
                        .........................................1111..........
                        ..........................................11...........
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        `, img`
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        ................................................1111111
                        ................................................11.....
                        ................................................11.....
                        ................................................11.....
                        .................................11.............11.....
                        11111...1111111..1111.....1111...11.............11111..
                        11..11..11......11..11...11..11..11.............11.....
                        11...11.11.....11.......11....11.11.............11.....
                        11...11.11.....111......11....11.11....11....11.11.....
                        11..11..11......11111...11....11.11....11....11.11.....
                        11111...11111.....1111..11....11.11....11....11.11.....
                        11..11..11..........111.11....11.11....11....11.1111111
                        11...11.11.....1.....11.11....11.11.....11...1.........
                        11...11.11.....1.....11.11....11.11.....11..11.........
                        11...11.11.....11....11.11....11.11.....11..11.........
                        11...11.11......11..11...11..11..1111111.11.1..........
                        11...11.1111111..1111.....1111...........11.1..........
                        .........................................11.1..........
                        .........................................1111..........
                        ..........................................11...........
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        `, img`
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        ................................................1111111
                        ................................................11.....
                        ................................................11.....
                        11111...1111111..1111.....1111...11.............11.....
                        11..11..11......11..11...11..11..11....11....11.11.....
                        11...11.11.....11.......11....11.11....11....11.11111..
                        11...11.11.....111......11....11.11....11....11.11.....
                        11..11..11......11111...11....11.11....11....11.11.....
                        11111...11111.....1111..11....11.11.....11...1..11.....
                        11..11..11..........111.11....11.11.....11..11..11.....
                        11...11.11.....1.....11.11....11.11.....11..11..11.....
                        11...11.11.....1.....11.11....11.11......11.1...1111111
                        11...11.11.....11....11.11....11.11......11.1..........
                        11...11.11......11..11...11..11..11......11.1..........
                        11...11.1111111..1111.....1111...1111111.1111..........
                        ..........................................11...........
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        `, img`
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        ................................................1111111
                        11111...1111111..1111.....1111...11....11....11.11.....
                        11..11..11......11..11...11..11..11....11....11.11.....
                        11...11.11.....11.......11....11.11....11....11.11.....
                        11...11.11.....111......11....11.11....11....11.11.....
                        11..11..11......11111...11....11.11.....11...1..11111..
                        11111...11111.....1111..11....11.11.....11..11..11.....
                        11..11..11..........111.11....11.11.....11..11..11.....
                        11...11.11.....1.....11.11....11.11......11.1...11.....
                        11...11.11.....1.....11.11....11.11......11.1...11.....
                        11...11.11.....11....11.11....11.11......11.1...11.....
                        11...11.11......11..11...11..11..11......1111...1111111
                        11...11.1111111..1111.....1111...1111111..11...........
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        `, img`
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        11111...1111111..1111.....1111...11....11....11.1111111
                        11..11..11......11..11...11..11..11....11....11.11.....
                        11...11.11.....11.......11....11.11....11....11.11.....
                        11...11.11.....111......11....11.11....11....11.11.....
                        11..11..11......11111...11....11.11.....11...1..11.....
                        11111...11111.....1111..11....11.11.....11..11..11111..
                        11..11..11..........111.11....11.11.....11..11..11.....
                        11...11.11.....1.....11.11....11.11......11.1...11.....
                        11...11.11.....1.....11.11....11.11......11.1...11.....
                        11...11.11.....11....11.11....11.11......11.1...11.....
                        11...11.11......11..11...11..11..11......1111...11.....
                        11...11.1111111..1111.....1111...1111111..11....1111111
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        `, img`
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        11111...1111111..1111.....1111...11....11....11.1111111
                        11..11..11......11..11...11..11..11....11....11.11.....
                        11...11.11.....11.......11....11.11....11....11.11.....
                        11...11.11.....111......11....11.11....11....11.11.....
                        11..11..11......11111...11....11.11.....11...1..11.....
                        11111...11111.....1111..11....11.11.....11..11..11111..
                        11..11..11..........111.11....11.11.....11..11..11.....
                        11...11.11.....1.....11.11....11.11......11.1...11.....
                        11...11.11.....1.....11.11....11.11......11.1...11.....
                        11...11.11.....11....11.11....11.11......11.1...11.....
                        11...11.11......11..11...11..11..11......1111...11.....
                        11...11.1111111..1111.....1111...1111111..11....1111111
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        `, img`
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        11111...1111111..1111.....1111...11....11....11.1111111
                        11..11..11......11..11...11..11..11....11....11.11.....
                        11...11.11.....11.......11....11.11....11....11.11.....
                        11...11.11.....111......11....11.11....11....11.11.....
                        11..11..11......11111...11....11.11.....11...1..11.....
                        11111...11111.....1111..11....11.11.....11..11..11111..
                        11..11..11..........111.11....11.11.....11..11..11.....
                        11...11.11.....1.....11.11....11.11......11.1...11.....
                        11...11.11.....1.....11.11....11.11......11.1...11.....
                        11...11.11.....11....11.11....11.11......11.1...11.....
                        11...11.11......11..11...11..11..11......1111...11.....
                        11...11.1111111..1111.....1111...1111111..11....1111111
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        `, img`
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        11111...1111111..1111.....1111...11....11....11.1111111
                        11..11..11......11..11...11..11..11....11....11.11.....
                        11...11.11.....11.......11....11.11....11....11.11.....
                        11...11.11.....111......11....11.11....11....11.11.....
                        11..11..11......11111...11....11.11.....11...1..11.....
                        11111...11111.....1111..11....11.11.....11..11..11111..
                        11..11..11..........111.11....11.11.....11..11..11.....
                        11...11.11.....1.....11.11....11.11......11.1...11.....
                        11...11.11.....1.....11.11....11.11......11.1...11.....
                        11...11.11.....11....11.11....11.11......11.1...11.....
                        11...11.11......11..11...11..11..11......1111...11.....
                        11...11.1111111..1111.....1111...1111111..11....1111111
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        `, img`
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        11111...1111111..1111.....1111...11....11....11.1111111
                        11..11..11......11..11...11..11..11....11....11.11.....
                        11...11.11.....11.......11....11.11....11....11.11.....
                        11...11.11.....111......11....11.11....11....11.11.....
                        11..11..11......11111...11....11.11.....11...1..11.....
                        11111...11111.....1111..11....11.11.....11..11..11111..
                        11..11..11..........111.11....11.11.....11..11..11.....
                        11...11.11.....1.....11.11....11.11......11.1...11.....
                        11...11.11.....1.....11.11....11.11......11.1...11.....
                        11...11.11.....11....11.11....11.11......11.1...11.....
                        11...11.11......11..11...11..11..11......1111...11.....
                        11...11.1111111..1111.....1111...1111111..11....1111111
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        `, img`
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        11111...1111111..1111.....1111...11....11....11.1111111
                        11..11..11......11..11...11..11..11....11....11.11.....
                        11...11.11.....11.......11....11.11....11....11.11.....
                        11...11.11.....111......11....11.11....11....11.11.....
                        11..11..11......11111...11....11.11.....11...1..11.....
                        11111...11111.....1111..11....11.11.....11..11..11111..
                        11..11..11..........111.11....11.11.....11..11..11.....
                        11...11.11.....1.....11.11....11.11......11.1...11.....
                        11...11.11.....1.....11.11....11.11......11.1...11.....
                        11...11.11.....11....11.11....11.11......11.1...11.....
                        11...11.11......11..11...11..11..11......1111...11.....
                        11...11.1111111..1111.....1111...1111111..11....1111111
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        .......................................................
                        `],
                        100,
                        false
                    )

                    timer.after(2000, function () {
                        resolveEffect.destroy()
                        negateEffect(card, assets.image`sanganNegated`)
                    })

                    timer.after(3000, function() {
                        for (const sprite of cards) {
                            sprite.destroy(effects.halo)
                        }

                        timer.after(2500, function() {
                            goalSprite.setImage(assets.image`employerSideView`)
                            goalSprite.sayText(`${MY_NAME}, how did you`, 2000)
                        })

                        timer.after(4500, function () {
                            goalSprite.setImage(assets.image`employerLeftView`)
                        })

                        timer.after(6500, function () {
                            goalSprite.setImage(assets.image`employerSideView`)
                            goalSprite.sayText("Did you just hand-trap me!?", 2000)
                        })

                        timer.after(8500, function () {
                            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
                            voluntold.sayText("Clever, huh?", 1000)
                        })

                        timer.after(9500, function () {
                            goalSprite.setImage(assets.image`employerSideView`)
                            goalSprite.sayText(`${MY_NAME}, this`, 2000)
                        })

                        timer.after(11500, function () {
                            goalSprite.setImage(assets.image`employerLeftView`)
                        })

                        timer.after(13500, function() {
                            goalSprite.setImage(assets.image`princessGertBack`)
                            goalSprite.sayText("This is an outrage.", 2000)
                        })

                        timer.after(15500, function () {
                            goalSprite.setImage(assets.image`employerSideView`)
                            goalSprite.sayText("How gauche.", 2000)
                        })

                        timer.after(17500, function () {
                            goalSprite.setImage(assets.image`employerFront`)
                            goalSprite.sayText("I'm leaving.", 2000)
                        })

                        timer.after(19500, function() {
                            goalSprite.vy = 25
                            goalSprite.setFlag(SpriteFlag.AutoDestroy, true)
                        })

                        timer.after(20500, function() {
                            voluntold.setImage(face.image)
                        })

                        timer.after(23000, function() {
                            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                            voluntold.sayText("Cool.", 2500)
                        })

                        timer.after(24500, function () {
                            music.stopAllSounds()
                            startGallery(() => newExit(10, 3))
                        })
                    })
                })
            }
            else {
                card = sprites.create(
                    assets.image`exodia`,
                    SpriteKind.Neutral,
                )
                card.setPosition(goalSprite.x, goalSprite.y - 40)
                music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)

                timer.after(3000, function () {
                    scene.cameraShake(32, 4000)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.LoopingInBackground)
                })
                timer.after(7000, function () {
                    music.stopAllSounds()
                })
                timer.after(9000, function () {
                    voluntold.destroy(effects.fire, 1000)
                    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
                })
                timer.after(11000, function () {
                    music.stopAllSounds()
                    startGallery(() => newExit(10, 3))
                })
            }
        })
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Employer, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    const loc = otherSprite.tilemapLocation()

    tiles.placeOnTile(
        sprite,
        tiles.getTileLocation(
            loc.col + 1, loc.row
        )
    )

    if (hasBlueEyes) {
        if (enraged) {
            endRage()
        }

        cardGameEnding()
        return
    }

    if (enraged) {
        info.stopCountdown()
        meSayLongText("PRINCESS GERT, WITH ALL DUE RESPECT!!!")
        empSayLongText(`Oh. Oh, hi ${MY_NAME}. What are you-`)
        meSayLongText("I'M CLOCKING OUT!!!")
        empSayLongText("Um, sure! Yes. Go right ahead.")
        music.stopAllSounds()

        timer.after(2000, function () {
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
            sprites.destroy(sprite, effects.fire, 500)

            timer.after(2000, function () {
                game.gameOver(true)
            })
        })
    } else if (forcedToEatStartingTile === 2 && info.score() >= QUOTA) {
        goalSprite.setImage(assets.image`employerSideView`)
        empSayLongText(`${MY_NAME}!! What in the world!?`)
        meSayLongText("I know. I've seen better days, right?")
        empSayLongText(`${MY_NAME}! What did you, did you...`)
        empSayLongText("Did you EAT, the starting tile!?")
        empSayLongText("Are you insane!?")
        meSayLongText("The Orb of Hesperian Sanctuary told me to do it.")
        empSayLongText("What!?")

        if (info.score() >= TRUE_ENDING_GOAL) {
            playTrueEnding()
        } else {
            game.gameOver(true)
        }
    } else if (info.score() >= TRUE_ENDING_GOAL) {
        empSayLongText(`Hello, ${MY_NAME}! What's that you're holding?`)
        empSayLongText("You made what!?")
        empSayLongText(`$${info.score()}!?`)
        empSayLongText("It's not possible!")
        playTrueEnding()
    } else {
        if (arghAWall >= 10) {
            empSayLongText("Darling, you look terrible.")
            empSayLongText(`Did you ram your face into a wall ${arghAWall} times?`)
        }

        if (info.score() < QUOTA) {
            empSayLongText(`You need to have earned at least ${QUOTA} before you can leave.`)
            music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
            empSayLongText("I'm sending you back. Sorry, hun! :)")
            tiles.placeOnRandomTile(sprite, startingTile.image)
            setWindowShoppers(NUM_SHOPPERS, sprites.dungeon.doorOpenNorth)
        } else {
            empSayLongText(`Hmm. You made $${info.score()}. That's it?`)
            music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
            empSayLongText("Alright. I guess you can clock out now.")
            game.gameOver(true)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Trader, function (sprite, otherSprite) {
    const loc: tiles.Location = otherSprite.tilemapLocation()

    tiles.placeOnTile(
        sprite,
        tiles.getTileLocation(
            loc.column - 1,
            loc.row,
        ),
    )

    const image: Image = otherSprite.image

    if (enraged) {
        sayLongText("")
        sayLongText("I, don't")
        sayLongText("associate, with")

        timer.after(100, function () {
            otherSprite.setImage(assets.image`melissaInverted`)
            sayLongText("substance abusers.")
            sayLongText("I don't know anypony who would.")
            otherSprite.setImage(image)
        })

        return
    }

    hasMetSkillTrader = true

    if (!hasHesperianSanctuary) {
        sayLongText("Sorry, I'm kind of in a rut right now. I only deal with Hesperians.")
    }

    if (hasLuck && companionState < 2) {
        switch (companionState) {
            case 0:
                sayLongText("Hey, is that a cat? You have a cat?", skillTrader.image)
                meSayLongText("Yes, this is my cat.")
                sayLongText("You have a cat!", skillTrader.image)
                sayLongText("I can train your cat. Want me to train your cat?", skillTrader.image)
                meSayLongText("You can train cats?")
                sayLongText("I'll train your cat. Let me train your cat.", skillTrader.image)
                companionState++
                break
            case 1:
                sayLongText("Want me to train your cat for you?", skillTrader.image)
                break
        }

        if (info.score() < COST_OF_TRAINING + itemCost) {
            sayLongText(`It costs a bit, though. You have $${COST_OF_TRAINING} on you?`, skillTrader.image)
        }
        else if (game.ask("Buy Companion Training?")) {
            companionState = 2
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
            info.changeScoreBy(-COST_OF_TRAINING)
            sayLongText("Yay! That was fun!", skillTrader.image)
            trySetPet()
            return
        }
    }

    sayLongText(
        hasLuck && companionState < 2
            ? "Oh well. Want to trade your skill for a new one?"
            : "Ah, a fellow Hesperian. I'll trade you a skill for whatever you have."
    )

    const prevSkillNum = skillNum
    skillNum = game.askForNumber("(1) Buy life. (2) Delegate. (3) Decoy. (Other to cancel.)", 1)

    switch (skillNum) {
        case Skill.BUY_EXTRA_LIFE:
            sayLongText("Press 'B' to buy an extra life.")
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
            break
        case Skill.DELEGATE:
            sayLongText("Press 'B' to send out a delegate to sell for you.")
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
            break
        case Skill.DECOY:
            sayLongText("Press 'B' to create a decoy.")
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
            break
        default:
            skillNum = prevSkillNum
            break
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HesperianOrb, function (sprite, otherSprite) {
    const image: Image = otherSprite.image

    if (forcedToEatStartingTile === 0) {
        meSayLongText("Could it be?")
        meSayLongText("It's the Orb of Hesperian Sanctuary!")

        if (Math.percentChance(15)) {
            sayLongText("Eat your starting tile.", image)
            sayLongText("THEN I'll help you.", image)
            meSayLongText("...Wait, what?")
            sayLongText("You heard me.", image)
            forcedToEatStartingTile = 1
        } else {
            sprites.destroy(otherSprite)
            meSayLongText("No one will ever threaten our way of life again.")
            hasHesperianSanctuary = true
        }
    } else if (forcedToEatStartingTile === 1) {
        sayLongText("What are you waiting for? Go. Do it.", image)
        meSayLongText("...")
    } else {
        sayLongText("Wow. I can't believe you actually did it.", image)
        sayLongText("The whole thing, too.", image)
        sayLongText("You're crazy.", image)
        sayLongText("Okay, I'll help you now.", image)
        sprites.destroy(otherSprite)
        hasHesperianSanctuary = true
    }

    tiles.placeOnTile(sprite, tiles.getTileLocation(otherSprite.tilemapLocation().column, otherSprite.tilemapLocation().row + 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (!enraged) {
        hitPlayer(sprite)
        return
    }

    sprites.destroy(otherSprite, effects.spray, 500)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)

    if (respawnShoppers) {
        setWindowShoppers(1, sprites.dungeon.doorOpenNorth)
    }

    info.changeScoreBy(100)

    if (!hyper) {
        voluntold.sayText("+$100", 500, false)
        return
    }

    voluntold.sayText(
        [
            "I CAN DO THIS",
            "I FEEL GREAT",
            "I'M A LOVING MOTHER",
            "I TAKE CARE OF MY FAMILY",
            "I CAN TAKE ON THE WORLD",
            "WAHAHAHAHAHA",
            "OUT OF MY WAY",
            "have some COOOKIES!",
            "I'M SOOO EXCIIITED",
        ]._pickRandom(),
        1000,
        false
    )
})
sprites.onOverlap(SpriteKind.Companion, SpriteKind.Goal, function (sprite, otherSprite) {
    if (fetchState != 1) {
        return
    }

    pushFetchList(otherSprite)
    fetchState = 2
    sprite.follow(null)
})
sprites.onOverlap(SpriteKind.Companion, SpriteKind.Antisocial, function (sprite, otherSprite) {
    if (busCardsActive) {
        return
    }

    fetchState = 2
    fetchable.pop()
    pet.follow(null)
    const loc = otherSprite.tilemapLocation()
    tiles.placeOnTile(sprite, tiles.getTileLocation(loc.col, loc.row - 5))
    sayLongText("???: Hey! Get off me, you stupid cat!")
    otherSprite.setImage(assets.image`openChest`)
    pushFetchList(sprites.create(assets.image`busCard`, SpriteKind.TransitCard))
})

function countdownEnd() {
    switch (countdownType) {
        case 1:
            music.stopAllSounds()
            controller.moveSprite(voluntold, moveSpeed, moveSpeed)
            giantCookiePowerup = false
            countdownType = 0
            break
        case 2:
            music.stopAllSounds()

            timer.after(1000, function () {
                dieOfRage()
            })

            break
        case 3:
            music.stopAllSounds()
            sayLongText(`???: ${MY_NAME}!`)
            voluntold.setImage(assets.image`tweekedLeft`)
            controller.moveSprite(voluntold, 0, 0)
            killer.setFlag(SpriteFlag.Invisible, true)

            const killerTemp = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........fffff.........
                ........ff11111f........
                .......fb111111bf.......
                ......fbd1111111f.......
                ......fddd111111df......
                ......fdddd11111df......
                ......fddddddd11df......
                ......fddddddd111f......
                ......fddddddcf11f......
                .......fbdddb1111bf.....
                ........fffcfdb1b1f.....
                .......ffffffffbfbf.....
                ....ff.fffffffffff......
                .....ffffffff...........
                .....ffffffb1b1f........
                ......ffffffbfbf........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Neutral)
            killerTemp.setFlag(SpriteFlag.GhostThroughWalls, true)

            const loc = voluntold.tilemapLocation()

            tiles.placeOnTile(
                killerTemp,
                tiles.getTileLocation(
                    loc.col - 5,
                    loc.row,
                ),
            )

            killerTemp.vx = 15

            timer.after(3000, function () {
                killerTemp.vx = 0
                meSayLongText("AHOY, ME BUCKO! Are you ready to SET SAIL ON A GRAND ADVENTURE!?")
                sayLongText(`Give me the pills, ${MY_NAME}.`, killer.image)
                meSayLongText("What? No.")
                sayLongText("GIVE ME the pills.", killer.image)
                pause(1000)
                meSayLongText("Okay.")
                killerTemp.setImage(img`
                    ........................
                    ........................
                    ........................
                    ........................
                    .........fffff..........
                    ........f11111ff........
                    .......fb111111bf.......
                    .......f1111111dbf......
                    ......fd111111dddf......
                    ......fd11111ddddf......
                    ......fd11dddddddf......
                    ......f111dddddddf......
                    ......f11fcddddddf......
                    .....fb1111bdddbf.......
                    .....f1b1bdfcfff........
                    .....fbfbffffffff.......
                    ......fffffffffff.ff....
                    ...........ffffffff.....
                    ........f1b1bffffff.....
                    ........fbfbffffff......
                    ........................
                    ........................
                    ........................
                    ........................
                `)
                pause(1000)
                sayLongText("Go lie down or something.", killer.image)
                killerTemp.vx = -15
                pause(3000)

                timer.after(1000, function () {
                    dieOfRage()
                    sprites.destroy(killerTemp)
                    killer.setFlag(SpriteFlag.Invisible, false)
                })
            })
            break
        default:
            break
    }
}

function lifeZero() {
    info.setScore(0)
    game.gameOver(false)
}

info.onLifeZero(lifeZero)
info.onCountdownEnd(countdownEnd)

const entrances = [
    enterHomeOfBox,
    enterConfectionersHome,
    enterSomewhere,
    enterSkillTraderHideout,
    enterHumbleHome,
]

type image_number_pair = {
    image: Image
    index: number
}

let myAdvice: string[][] = []
let ingredientEncounters: number[] = newIngredients()
let recipeEncounters: number[] = newList(5)
let animatedEnvironment: Sprite[] = []
let fetchable: Sprite[] = []
let paths: tiles.Location[][] = []
let availIngredience: image_number_pair[] = []
let cart: number[] = []
let inventory: number[] = []

let headOfSales: Sprite = null
let decoy: Sprite = null
let killer: Sprite = null
let goalSprite: Sprite = null
let voluntold: Sprite = null
let stalker: Sprite = null
let startingTile: Sprite = null
let face: Sprite = null
let cauldron: Sprite = null
let pet: Sprite = null
let skillTrader: Sprite = null
let confectioner: Sprite = null
let sphereOfRedundancy: Sprite = null
let delegate: Sprite = null
let manager: Sprite = null
let terminal: Sprite = null

let direction: number = Dir.DOWN
let moveSpeed: number = 0
let enterRow: number = 0
let enterCol: number = 0
let startRow: number = 0
let startCol: number = 0
let arghAWall: number = 0
let leaveAttempts: number = 0
let countdownType: number = 0
let skillNum: number = 0
let itemCost: number = 0
let forcedToEatStartingTile: number = 0
let companionState: number = 0
let fetchState: number = 0
let minSpeed: number = 0
let maxSpeed: number = 0
let companionType: number = Companion.LUCKY_CAT

face = sprites.create(assets.image`voluntoldBetterModel`, SpriteKind.Invulnerable)
tiles.placeOnTile(face, tiles.getTileLocation(0, 0))
face.setFlag(SpriteFlag.Invisible, true)

startingTile = sprites.create(assets.image`startingTile`, SpriteKind.Invulnerable)
tiles.placeOnTile(startingTile, tiles.getTileLocation(0, 0))
startingTile.setFlag(SpriteFlag.Invisible, true)

let giantCookiePowerup = false
let respawnShoppers = false
let busCardsActive = false
let eventBasedMusic = false
let hasConfectioneryMastery = false
let hasRedundantSphere = false
let hasHesperianSanctuary = false
let hasKey = false
let hasUsedDecoy = false
let hasUsedDelegate = false
let hasMetSkillTrader = false
let hasMetTheWiseman = false
let hasUsedHaterade = false
let hasAcceptedCharge = false
let hasFoundTheFeces = false
let hasDiscoveredDisinterest = false
let hasAshBlossom = false
let hasBlueEyes = false
let hasCourtSummons = false
let decoyExists = false
let buttonsActive = true
let canTurn = true
let enraged = false
let hyper = false
let nearsighted = true
let talkedToHusband = false
let hasLuck = false
let hasBusCard = false
let talking = true
let enemiesCanMove = true
let inMart = false
let inBasement = false
let inRecipeSelect = false

// // todo: disable for testing
// moveSpeed = 25
moveSpeed = 75
forcedToEatStartingTile = 0
itemCost = COOKIE_COST
skillNum = 1
countdownType = 0
// todo: disable for testing
setIntro()
info.setScore(55)
arghAWall = 0
leaveAttempts = 0
setPlayer()
startCol = 4
startRow = 33
enterCol = startCol
enterRow = startRow
fetchState = 0
minSpeed = 15
maxSpeed = 24
companionState = 0
direction = Dir.DOWN
enterTopFloor(enterCol, enterRow)

// // todo: disable for testing
// entrances.sort((a, b) => { return randint(0, 1) })

game.onUpdateInterval(250, function () {
    if (companionState < 2 || fetchState === 1 || !pet || !voluntold) {
        return
    }

    if (Math.percentChance(1)) {
        pet.sayText(
            spriteData[COMPANION_INDEX + companionType]
                .remarks
                ._pickRandom(),
            500,
            false,
        )
    }

    let g: tiles.Location = pet.tilemapLocation()
    let h: tiles.Location = voluntold.tilemapLocation()

    if (fetchState === 0) {
        for (const value of fetchable.concat(sprites.allOfKind(SpriteKind.Goal))) {
            if (tileSquareDistance(h, value.tilemapLocation()) > 4) {
                fetchState = 1
                pet.follow(value, 2 * moveSpeed)
            }
        }
    }

    let dist = tileSquareDistance(g, h)

    if (fetchState === 2 && dist <= 1 && !g.isWall()) {
        popFetchList(pet)
        fetchState = 0
        return
    }

    if (dist <= 4) {
        pet.vx = randint(-moveSpeed, moveSpeed)
        pet.vy = randint(-moveSpeed, moveSpeed)
        return
    }

    // todo a

    if (g.col < h.col) {
        pet.vx = 1.5 * moveSpeed
        turnCompanion(Dir.RIGHT, pet)
    }

    if (g.col > h.col) {
        pet.vx = -1.5 * moveSpeed
        turnCompanion(Dir.LEFT, pet)
    }

    if (g.row < h.row) {
        pet.vy = 1.5 * moveSpeed
    }

    if (g.row > h.row) {
        pet.vy = -1.5 * moveSpeed
    }
})
game.onUpdateInterval(5000, function () {
    if (!talking) {
        return
    }

    if (Math.percentChance(20)) {
        voluntold.sayText("I am over- burdened.", 2000, true)
    }
    else if (buttonsActive && skillNum === 1 && info.score() >= EXTRA_LIFE_COST + itemCost) {
        voluntold.sayText("Press 'B'!", 2000)
    }

    timer.after(randint(1, 3) * 1000, function () {
        if (Math.percentChance(1)) {
            for (const value of sprites.allOfKind(SpriteKind.Lucky)) {
                value.sayText("lol I'm a cat", 500, false)
            }
        }
    })
})
game.onUpdateInterval(1000, function () {
    for (const value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (enraged) {
            value.setVelocity(
                +enemiesCanMove * (randint(0, 1) * 2 - 1) * randint(50, 100),
                +enemiesCanMove * (randint(0, 1) * 2 - 1) * randint(50, 100),
            )

            continue
        }

        if (!enemiesCanMove) {
            scene.followPath(value, null, 0)
            continue
        }

        my.followPath(
            value,
            (decoyExists ? decoy : voluntold).tilemapLocation(),
            (randint(minSpeed, maxSpeed)
                - (companionState === 2
                    && pet !== null
                    && value.overlapsWith(pet) ? 3 : 0
                ))
                / (sprites.readDataNumber(value, "slowing") + 1),
        )
    }

    for (const value of sprites.allOfKind(SpriteKind.BeetrootEnjoyer)) {
        my.followPath(
            value,
            voluntold.tilemapLocation(),
            +enemiesCanMove * 0.85 * moveSpeed,
        )
    }

    if (paths.length > 0) {
        scene.followPath(headOfSales, paths[0], 30)
    }

    if (giantCookiePowerup) {
        for (const value of sprites.allOfKind(SpriteKind.Food)) {
            value.sayText(Math.floor(value.lifespan / 1000))
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (inBasement) {
        const sprite = sprites.create(
            assets.image`ingredience`,
            SpriteKind.Neutral
        )

        tiles.placeOnTile(sprite, tiles.getTileLocation(2, 1))
        sprite.vx = 25
        sprite.lifespan = 3750
    }

    for (const sprite of sprites.allOfKind(SpriteKind.Idling)) {
        if (Math.percentChance(40)) {
            startIdleMove(sprite)
        }

        if (Math.percentChance(20)) {
            spriteData[
                sprites.readDataNumber(sprite, "type")
            ]
            .remarks
            ._pickRandom()
        }
    }
})

// // todo: testing
companionState = 2
hasLuck = true
busCardsActive = true
hasBlueEyes = true
trySetPet()

hasBusCard = true
// enterMart()
// info.setScore(100)

enterHumbleHome()

inventory = [
    1, 5, 4, 11, 11, 11 + 255, 2, 11, 11, 1, 1, 1, 0,
]

/*
  1  name: `beetroot`,
  2  name: `magicChips`,
  3  name: `magicIcing`,
  4  name: `magicVanillaExtract`,
  5  name: `magicFlour`,
  6  name: `magicSugar`,
  7  name: `magicFeces`,
  8  name: `magicBakingPowder`,
  9  name: `magicCocoa`,
 10  name: `magicLemons`,
 11  name: `magicGilding`,
 12  name: `magicMargarine`,
 13  name: `magicDmcaTakedownNotice`,
*/

// todo a
function drawingboard_2024_07_29() {
    recipe = {
        poisoned: true,
        beetroot: false,
        compound: false,
        ricochet: true,
        revenue_add: 5,
        revenue_mult: 3,
        lifespan_add: 2,
        shots: 3,
        speed: 3,
        hits: 3,
        slowing: 1,
        gilding: 0,
        shield: 0,
    }

    hasBusCard = true
    hasLuck = true
    hasRedundantSphere = true
    hasUsedDecoy = true
    hasUsedDelegate = true
    hasUsedHaterade = true
    hasHesperianSanctuary = true
    hasKey = false
    hasConfectioneryMastery = true
    hasAshBlossom = true
    forcedToEatStartingTile = 0
    busCardsActive = true
    info.setScore(600000)

    // ingredientEncounters = [
    //     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    // ]

    // recipeEncounters = [
    //     1, 1, 1, 1, 1,
    // ]

    // startGallery(() => { newExit(10, 3) })

    // newIdlingSprite(Idler.WISEMAN)
    info.setLife(5)
}

drawingboard_2024_07_29()
