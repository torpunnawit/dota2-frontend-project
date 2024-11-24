export interface itemList {
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
    dmg_type: string
    abilities: abilities[]
}
export interface abilities {
    description: string
}
export interface Attrib {
    key: string
    value: string
}

export interface Blink {
    abilities: Ability[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability {
    type: string
    title: string
    description: string
}



export interface OverwhelmingBlink {
    abilities: Ability2[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    dmg_type: string
    notes: string
    attrib: Attrib2[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability2 {
    type: string
    title: string
    description: string
}

export interface Attrib2 {
    key: string
    value: string
    display?: string
}

export interface SwiftBlink {
    abilities: Ability3[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib3[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability3 {
    type: string
    title: string
    description: string
}

export interface Attrib3 {
    key: string
    value: string
    display?: string
}

export interface ArcaneBlink {
    abilities: Ability4[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib4[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability4 {
    type: string
    title: string
    description: string
}

export interface Attrib4 {
    key: string
    value: string
    display?: string
}

export interface RecipeArcaneBlink {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface RecipeSwiftBlink {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface RecipeOverwhelmingBlink {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface BladesOfAttack {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib5[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib5 {
    key: string
    display: string
    value: string
}

export interface Broadsword {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib6[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib6 {
    key: string
    display: string
    value: string
}

export interface Chainmail {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib7[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib7 {
    key: string
    display: string
    value: string
}

export interface Claymore {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib8[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib8 {
    key: string
    display: string
    value: string
}

export interface HelmOfIronWill {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib9[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib9 {
    key: string
    display: string
    value: string
}

export interface Javelin {
    abilities: Ability5[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib10[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability5 {
    type: string
    title: string
    description: string
}

export interface Attrib10 {
    key: string
    value: string
}

export interface MithrilHammer {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib11[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib11 {
    key: string
    display: string
    value: string
}

export interface Platemail {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib12[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib12 {
    key: string
    display: string
    value: string
}

export interface Quarterstaff {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib13[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib13 {
    key: string
    display: string
    value: string
}

export interface QuellingBlade {
    abilities: Ability6[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: any[]
    target_type: string
    notes: string
    attrib: Attrib14[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability6 {
    type: string
    title: string
    description: string
}

export interface Attrib14 {
    key: string
    value: string
}

export interface FaerieFire {
    abilities: Ability7[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib15[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability7 {
    type: string
    title: string
    description: string
}

export interface Attrib15 {
    key: string
    display?: string
    value: string
}

export interface InfusedRaindrop {
    abilities: Ability8[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib16[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability8 {
    type: string
    title: string
    description: string
}

export interface Attrib16 {
    key: string
    display?: string
    value: string
}

export interface WindLace {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib17[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib17 {
    key: string
    display: string
    value: string
}

export interface RingOfProtection {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib18[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib18 {
    key: string
    display: string
    value: string
}

export interface StoutShield {
    abilities: Ability9[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib19[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability9 {
    type: string
    title: string
    description: string
}

export interface Attrib19 {
    key: string
    value: string
}

export interface MoonShard {
    abilities: Ability10[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib20[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability10 {
    type: string
    title: string
    description: string
}

export interface Attrib20 {
    key: string
    display?: string
    value: string
}

export interface Gauntlets {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib21[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib21 {
    key: string
    display: string
    value: string
}

export interface Slippers {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib22[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib22 {
    key: string
    display: string
    value: string
}

export interface Mantle {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib23[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib23 {
    key: string
    display: string
    value: string
}

export interface Branches {
    abilities: Ability11[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib24[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability11 {
    type: string
    title: string
    description: string
}

export interface Attrib24 {
    key: string
    display?: string
    value: string
}

export interface BeltOfStrength {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib25[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib25 {
    key: string
    display: string
    value: string
}

export interface BootsOfElves {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib26[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib26 {
    key: string
    display: string
    value: string
}

export interface Robe {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib27[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib27 {
    key: string
    display: string
    value: string
}

export interface Circlet {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib28[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib28 {
    key: string
    display: string
    value: string
}

export interface Crown {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib29[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib29 {
    key: string
    display: string
    value: string
}

export interface Diadem {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib30[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib30 {
    key: string
    display: string
    value: string
}

export interface OgreAxe {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib31[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib31 {
    key: string
    display: string
    value: string
}

export interface BladeOfAlacrity {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib32[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib32 {
    key: string
    display: string
    value: string
}

export interface StaffOfWizardry {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib33[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib33 {
    key: string
    display: string
    value: string
}

export interface UltimateOrb {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib34[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib34 {
    key: string
    display: string
    value: string
}

export interface Gloves {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib35[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib35 {
    key: string
    display: string
    value: string
}

export interface BlitzKnuckles {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib36[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib36 {
    key: string
    display: string
    value: string
}

export interface Lifesteal {
    abilities: Ability12[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib37[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability12 {
    type: string
    title: string
    description: string
}

export interface Attrib37 {
    key: string
    display?: string
    value: string
}

export interface VoodooMask {
    abilities: Ability13[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib38[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability13 {
    type: string
    title: string
    description: string
}

export interface Attrib38 {
    key: string
    display: string
    value: string
}

export interface RingOfRegen {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib39[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib39 {
    key: string
    display: string
    value: string
}

export interface SobiMask {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib40[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib40 {
    key: string
    display: string
    value: string
}

export interface Boots {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib41[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib41 {
    key: string
    display: string
    value: string
}

export interface Gem {
    abilities: Ability14[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib42[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability14 {
    type: string
    title: string
    description: string
}

export interface Attrib42 {
    key: string
    value: string
}

export interface Cloak {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib43[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib43 {
    key: string
    value: string
    display?: string
}

export interface TalismanOfEvasion {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib44[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib44 {
    key: string
    display: string
    value: string
}

export interface Cheese {
    abilities: Ability15[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib45[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability15 {
    type: string
    title: string
    description: string
}

export interface Attrib45 {
    key: string
    value: string
}

export interface MagicStick {
    abilities: Ability16[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib46[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability16 {
    type: string
    title: string
    description: string
}

export interface Attrib46 {
    key: string
    value: string
}

export interface RecipeMagicWand {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface MagicWand {
    abilities: Ability17[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib47[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability17 {
    type: string
    title: string
    description: string
}

export interface Attrib47 {
    key: string
    value: string
    display?: string
}

export interface Ghost {
    abilities: Ability18[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dispellable: string
    notes: string
    attrib: Attrib48[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability18 {
    type: string
    title: string
    description: string
}

export interface Attrib48 {
    key: string
    display?: string
    value: string
}

export interface Clarity {
    abilities: Ability19[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dispellable: string
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib49[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability19 {
    type: string
    title: string
    description: string
}

export interface Attrib49 {
    key: string
    value: string
}

export interface EnchantedMango {
    abilities: Ability20[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib50[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability20 {
    type: string
    title: string
    description: string
}

export interface Attrib50 {
    key: string
    display?: string
    value: string
}

export interface Famango {
    abilities: Ability21[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib51[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability21 {
    type: string
    title: string
    description: string
}

export interface Attrib51 {
    key: string
    value: string
}

export interface GreatFamango {
    abilities: Ability22[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib52[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: number
}

export interface Ability22 {
    type: string
    title: string
    description: string
}

export interface Attrib52 {
    key: string
    value: string
}

export interface GreaterFamango {
    abilities: Ability23[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib53[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: number
}

export interface Ability23 {
    type: string
    title: string
    description: string
}

export interface Attrib53 {
    key: string
    value: string
}

export interface BloodGrenade {
    abilities: Ability24[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib54[]
    mc: boolean
    hc: number
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability24 {
    type: string
    title: string
    description: string
}

export interface Attrib54 {
    key: string
    value: string
    display?: string
}

export interface RoyaleWithCheese {
    abilities: Ability25[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dispellable: string
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib55[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability25 {
    type: string
    title: string
    description: string
}

export interface Attrib55 {
    key: string
    value: string
}

export interface Flask {
    abilities: Ability26[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dispellable: string
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib56[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability26 {
    type: string
    title: string
    description: string
}

export interface Attrib56 {
    key: string
    value: string
}

export interface Dust {
    abilities: Ability27[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dispellable: string
    notes: string
    attrib: Attrib57[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability27 {
    type: string
    title: string
    description: string
}

export interface Attrib57 {
    key: string
    value: string
}

export interface Bottle {
    abilities: Ability28[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib58[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability28 {
    type: string
    title: string
    description: string
}

export interface Attrib58 {
    key: string
    value: string
}

export interface WardObserver {
    abilities: Ability29[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib59[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability29 {
    type: string
    title: string
    description: string
}

export interface Attrib59 {
    key: string
    value: string
}

export interface WardSentry {
    abilities: Ability30[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib60[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability30 {
    type: string
    title: string
    description: string
}

export interface Attrib60 {
    key: string
    value: string
}

export interface WardDispenser {
    abilities: Ability31[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib61[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability31 {
    type: string
    title: string
    description: string
}

export interface Attrib61 {
    key: string
    value: string
    display?: string
}

export interface Tango {
    abilities: Ability32[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: any[]
    target_type: string
    notes: string
    attrib: Attrib62[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability32 {
    type: string
    title: string
    description: string
}

export interface Attrib62 {
    key: string
    value: string
}

export interface TangoSingle {
    abilities: Ability33[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: any[]
    target_type: string
    notes: string
    attrib: Attrib63[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability33 {
    type: string
    title: string
    description: string
}

export interface Attrib63 {
    key: string
    value: string
}

export interface Courier {
    abilities: Ability34[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability34 {
    type: string
    title: string
    description: string
}

export interface FlyingCourier {
    abilities: Ability35[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability35 {
    type: string
    title: string
    description: string
}

export interface Tpscroll {
    abilities: Ability36[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib64[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability36 {
    type: string
    title: string
    description: string
}

export interface Attrib64 {
    key: string
    value: string
}

export interface RecipeTravelBoots {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface TravelBoots {
    abilities: Ability37[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib65[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability37 {
    type: string
    title: string
    description: string
}

export interface Attrib65 {
    key: string
    display?: string
    value: string
}

export interface TravelBoots2 {
    abilities: Ability38[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib66[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability38 {
    type: string
    title: string
    description: string
}

export interface Attrib66 {
    key: string
    display?: string
    value: string
}

export interface PhaseBoots {
    abilities: Ability39[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib67[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability39 {
    type: string
    title: string
    description: string
}

export interface Attrib67 {
    key: string
    display?: string
    value: string
}

export interface DemonEdge {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib68[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib68 {
    key: string
    display: string
    value: string
}

export interface Eagle {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib69[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib69 {
    key: string
    display: string
    value: string
}

export interface Reaver {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib70[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib70 {
    key: string
    display: string
    value: string
}

export interface Relic {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib71[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib71 {
    key: string
    display: string
    value: string
}

export interface Hyperstone {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib72[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib72 {
    key: string
    display: string
    value: string
}

export interface RingOfHealth {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib73[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib73 {
    key: string
    display: string
    value: string
}

export interface RingOfTarrasque {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib74[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib74 {
    key: string
    display: string
    value: string
}

export interface VoidStone {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib75[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib75 {
    key: string
    display: string
    value: string
}

export interface TiaraOfSelemene {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib76[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib76 {
    key: string
    display: string
    value: string
}

export interface MysticStaff {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib77[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib77 {
    key: string
    display: string
    value: string
}

export interface EnergyBooster {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib78[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib78 {
    key: string
    display: string
    value: string
}

export interface PointBooster {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib79[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib79 {
    key: string
    display: string
    value: string
}

export interface VitalityBooster {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib80[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib80 {
    key: string
    display: string
    value: string
}

export interface FluffyHat {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib81[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib81 {
    key: string
    display: string
    value: string
}

export interface PowerTreads {
    abilities: Ability40[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib82[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability40 {
    type: string
    title: string
    description: string
}

export interface Attrib82 {
    key: string
    display?: string
    value: string
}

export interface RecipeSamuraiTabi {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface SamuraiTabi {
    abilities: Ability41[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib83[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability41 {
    type: string
    title: string
    description: string
}

export interface Attrib83 {
    key: string
    display?: string
    value: string
}

export interface RecipeHermesSandals {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface HermesSandals {
    abilities: Ability42[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib84[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability42 {
    type: string
    title: string
    description: string
}

export interface Attrib84 {
    key: string
    display?: string
    value: string
}

export interface RecipeWitchesSwitch {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface WitchesSwitch {
    abilities: Ability43[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib85[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability43 {
    type: string
    title: string
    description: string
}

export interface Attrib85 {
    key: string
    display?: string
    value: string
}

export interface RecipeLunarCrest {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface LunarCrest {
    abilities: Ability44[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    bkbpierce: string
    dispellable: string
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib86[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability44 {
    type: string
    title: string
    description: string
}

export interface Attrib86 {
    key: string
    display?: string
    value: string
}

export interface RecipePhylactery {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Phylactery {
    abilities: Ability45[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib87[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability45 {
    type: string
    title: string
    description: string
}

export interface Attrib87 {
    key: string
    display?: string
    value: string
}

export interface RecipeAngelsDemise {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface AngelsDemise {
    abilities: Ability46[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib88[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability46 {
    type: string
    title: string
    description: string
}

export interface Attrib88 {
    key: string
    display?: string
    value: string
}

export interface GrandmastersGlaive {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib89[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib89 {
    key: string
    value: string
}

export interface RecipeHandOfMidas {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface HandOfMidas {
    abilities: Ability47[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: any[]
    notes: string
    attrib: Attrib90[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: number
}

export interface Ability47 {
    type: string
    title: string
    description: string
}

export interface Attrib90 {
    key: string
    display?: string
    value: string
}

export interface AetherialHalo {
    abilities: Ability48[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dmg_type: string
    bkbpierce: string
    notes: string
    attrib: Attrib91[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability48 {
    type: string
    title: string
    description: string
}

export interface Attrib91 {
    key: string
    display?: string
    value: string
}

export interface OblivionStaff {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib92[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib92 {
    key: string
    display: string
    value: string
}

export interface RecipeWitchBlade {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface WitchBlade {
    abilities: Ability49[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib93[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability49 {
    type: string
    title: string
    description: string
}

export interface Attrib93 {
    key: string
    display?: string
    value: string
}

export interface Pers {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib94[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib94 {
    key: string
    display: string
    value: string
}

export interface Cornucopia {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib95[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib95 {
    key: string
    display: string
    value: string
}

export interface PoorMansShield {
    abilities: Ability50[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib96[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability50 {
    type: string
    title: string
    description: string
}

export interface Attrib96 {
    key: string
    display?: string
    value: string
}

export interface Satchel {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib97[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib97 {
    key: string
    display?: string
    value: string
}

export interface RecipeBracer {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Bracer {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib98[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib98 {
    key: string
    display?: string
    value: string
}

export interface RecipeWraithBand {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface WraithBand {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib99[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib99 {
    key: string
    display?: string
    value: string
}

export interface RecipeNullTalisman {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface NullTalisman {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib100[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib100 {
    key: string
    display?: string
    value: string
}

export interface RecipeMekansm {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Mekansm {
    abilities: Ability51[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib101[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability51 {
    type: string
    title: string
    description: string
}

export interface Attrib101 {
    key: string
    display?: string
    value: string
}

export interface Vladmir {
    abilities: Ability52[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib102[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability52 {
    type: string
    title: string
    description: string
}

export interface Attrib102 {
    key: string
    display?: string
    value: string
}

export interface RecipeWraithPact {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface WraithPact {
    abilities: Ability53[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    dmg_type: string
    bkbpierce: string
    notes: string
    attrib: Attrib103[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability53 {
    type: string
    title: string
    description: string
}

export interface Attrib103 {
    key: string
    display?: string
    value: string
}

export interface RecipeBuckler {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    dispellable: string
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Buckler {
    abilities: Ability54[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib104[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability54 {
    type: string
    title: string
    description: string
}

export interface Attrib104 {
    key: string
    display?: string
    value: string
}

export interface RecipeRingOfBasilius {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface RingOfBasilius {
    abilities: Ability55[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib105[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability55 {
    type: string
    title: string
    description: string
}

export interface Attrib105 {
    key: string
    display?: string
    value: string
}

export interface RecipeHolyLocket {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface HolyLocket {
    abilities: Ability56[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib106[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: number
}

export interface Ability56 {
    type: string
    title: string
    description: string
}

export interface Attrib106 {
    key: string
    value: string
    display?: string
}

export interface RecipePipe {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Pipe {
    abilities: Ability57[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib107[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability57 {
    type: string
    title: string
    description: string
}

export interface Attrib107 {
    key: string
    display?: string
    value: string
}

export interface RecipeUrnOfShadows {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface UrnOfShadows {
    abilities: Ability58[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    dispellable: string
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib108[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability58 {
    type: string
    title: string
    description: string
}

export interface Attrib108 {
    key: string
    display?: string
    value: string
}

export interface RecipeHeaddress {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Headdress {
    abilities: Ability59[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib109[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability59 {
    type: string
    title: string
    description: string
}

export interface Attrib109 {
    key: string
    display?: string
    value: string
}

export interface RecipeSheepstick {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Sheepstick {
    abilities: Ability60[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib110[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability60 {
    type: string
    title: string
    description: string
}

export interface Attrib110 {
    key: string
    display?: string
    value: string
}

export interface CasterRapier {
    abilities: Ability61[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib111[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability61 {
    type: string
    title: string
    description: string
}

export interface Attrib111 {
    key: string
    display?: string
    value: string
}

export interface RecipeOrchid {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Orchid {
    abilities: Ability62[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib112[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability62 {
    type: string
    title: string
    description: string
}

export interface Attrib112 {
    key: string
    display?: string
    value: string
}

export interface RecipeBloodthorn {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Bloodthorn {
    abilities: Ability63[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    dmg_type: string
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib113[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability63 {
    type: string
    title: string
    description: string
}

export interface Attrib113 {
    key: string
    display?: string
    value: string
}

export interface EchoSabre {
    abilities: Ability64[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    dispellable: string
    notes: string
    attrib: Attrib114[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability64 {
    type: string
    title: string
    description: string
}

export interface Attrib114 {
    key: string
    display?: string
    value: string
}

export interface RecipeCyclone {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Cyclone {
    abilities: Ability65[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    dispellable: string
    target_team: any[]
    target_type: any[]
    notes: string
    attrib: Attrib115[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability65 {
    type: string
    title: string
    description: string
}

export interface Attrib115 {
    key: string
    display?: string
    value: string
}

export interface RecipeWindWaker {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface WindWaker {
    abilities: Ability66[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    dispellable: string
    target_team: any[]
    target_type: any[]
    notes: string
    attrib: Attrib116[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability66 {
    type: string
    title: string
    description: string
}

export interface Attrib116 {
    key: string
    display?: string
    value: string
}

export interface RecipeAetherLens {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface AetherLens {
    abilities: Ability67[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib117[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability67 {
    type: string
    title: string
    description: string
}

export interface Attrib117 {
    key: string
    display: string
    value: string
}

export interface RecipeForceStaff {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface ForceStaff {
    abilities: Ability68[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib118[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability68 {
    type: string
    title: string
    description: string
}

export interface Attrib118 {
    key: string
    display?: string
    value: string
}

export interface RecipeHurricanePike {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface HurricanePike {
    abilities: Ability69[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib119[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability69 {
    type: string
    title: string
    description: string
}

export interface Attrib119 {
    key: string
    display?: string
    value: string
}

export interface RecipeDagon {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Dagon {
    abilities: Ability70[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib120[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability70 {
    type: string
    title: string
    description: string
}

export interface Attrib120 {
    key: string
    display?: string
    value: string
}

export interface Dagon2 {
    abilities: Ability71[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib121[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    created: boolean
    charges: boolean
}

export interface Ability71 {
    type: string
    title: string
    description: string
}

export interface Attrib121 {
    key: string
    display?: string
    value: string
}

export interface Dagon3 {
    abilities: Ability72[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib122[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    created: boolean
    charges: boolean
}

export interface Ability72 {
    type: string
    title: string
    description: string
}

export interface Attrib122 {
    key: string
    display?: string
    value: string
}

export interface Dagon4 {
    abilities: Ability73[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib123[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    created: boolean
    charges: boolean
}

export interface Ability73 {
    type: string
    title: string
    description: string
}

export interface Attrib123 {
    key: string
    display?: string
    value: string
}

export interface Dagon5 {
    abilities: Ability74[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib124[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    created: boolean
    charges: boolean
}

export interface Ability74 {
    type: string
    title: string
    description: string
}

export interface Attrib124 {
    key: string
    display?: string
    value: string
}

export interface RecipeNecronomicon {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Necronomicon {
    abilities: Ability75[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib125[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability75 {
    type: string
    title: string
    description: string
}

export interface Attrib125 {
    key: string
    display?: string
    value: string
}

export interface Necronomicon2 {
    abilities: Ability76[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib126[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability76 {
    type: string
    title: string
    description: string
}

export interface Attrib126 {
    key: string
    display?: string
    value: string
}

export interface Necronomicon3 {
    abilities: Ability77[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib127[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability77 {
    type: string
    title: string
    description: string
}

export interface Attrib127 {
    key: string
    display?: string
    value: string
}

export interface UltimateScepter {
    abilities: Ability78[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib128[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability78 {
    type: string
    title: string
    description: string
}

export interface Attrib128 {
    key: string
    display: string
    value: string
}

export interface RecipeUltimateScepter2 {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface UltimateScepter2 {
    abilities: Ability79[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability79 {
    type: string
    title: string
    description: string
}

export interface UltimateScepterRoshan {
    abilities: Ability80[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability80 {
    type: string
    title: string
    description: string
}

export interface AghanimsShard {
    abilities: Ability81[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability81 {
    type: string
    title: string
    description: string
}

export interface AghanimsShardRoshan {
    abilities: Ability82[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability82 {
    type: string
    title: string
    description: string
}

export interface RecipeRefresher {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Refresher {
    abilities: Ability83[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib129[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability83 {
    type: string
    title: string
    description: string
}

export interface Attrib129 {
    key: string
    display: string
    value: string
}

export interface RecipeAssault {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Assault {
    abilities: Ability84[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    bkbpierce: string
    notes: string
    attrib: Attrib130[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability84 {
    type: string
    title: string
    description: string
}

export interface Attrib130 {
    key: string
    display?: string
    value: string
}

export interface RecipeHeart {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Heart {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib131[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib131 {
    key: string
    display: string
    value: string
}

export interface RecipeBlackKingBar {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface BlackKingBar {
    abilities: Ability85[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib132[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability85 {
    type: string
    title: string
    description: string
}

export interface Attrib132 {
    key: string
    display?: string
    value: string
}

export interface Aegis {
    abilities: Ability86[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib133[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability86 {
    type: string
    title: string
    description: string
}

export interface Attrib133 {
    key: string
    value: string
}

export interface RecipeShivasGuard {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface ShivasGuard {
    abilities: Ability87[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dispellable: string
    notes: string
    attrib: Attrib134[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability87 {
    type: string
    title: string
    description: string
}

export interface Attrib134 {
    key: string
    display?: string
    value: string
}

export interface Bloodstone {
    abilities: Ability88[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dmg_type: string
    notes: string
    attrib: Attrib135[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability88 {
    type: string
    title: string
    description: string
}

export interface Attrib135 {
    key: string
    display?: string
    value: string
}

export interface RecipeSphere {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Sphere {
    abilities: Ability89[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib136[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability89 {
    type: string
    title: string
    description: string
}

export interface Attrib136 {
    key: string
    display?: string
    value: string
}

export interface RecipeLotusOrb {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface LotusOrb {
    abilities: Ability90[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib137[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability90 {
    type: string
    title: string
    description: string
}

export interface Attrib137 {
    key: string
    display?: string
    value: string
}

export interface RecipeMeteorHammer {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface MeteorHammer {
    abilities: Ability91[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dmg_type: string
    bkbpierce: string
    notes: string
    attrib: Attrib138[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability91 {
    type: string
    title: string
    description: string
}

export interface Attrib138 {
    key: string
    display?: string
    value: string
}

export interface Nullifier {
    abilities: Ability92[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib139[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability92 {
    type: string
    title: string
    description: string
}

export interface Attrib139 {
    key: string
    display?: string
    value: string
}

export interface RecipeAeonDisk {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface AeonDisk {
    abilities: Ability93[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib140[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability93 {
    type: string
    title: string
    description: string
}

export interface Attrib140 {
    key: string
    display?: string
    value: string
}

export interface RecipeKaya {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Kaya {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib141[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib141 {
    key: string
    display: string
    value: string
}

export interface Trident {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib142[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib142 {
    key: string
    display: string
    value: string
}

export interface ComboBreaker {
    id: number
    img: string
    cost: any
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface RefresherShard {
    abilities: Ability94[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib143[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability94 {
    type: string
    title: string
    description: string
}

export interface Attrib143 {
    key: string
    display: string
    value: string
}

export interface RecipeSpiritVessel {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface SpiritVessel {
    abilities: Ability95[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib144[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability95 {
    type: string
    title: string
    description: string
}

export interface Attrib144 {
    key: string
    display?: string
    value: string
}

export interface Vanguard {
    abilities: Ability96[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib145[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability96 {
    type: string
    title: string
    description: string
}

export interface Attrib145 {
    key: string
    display?: string
    value: string
}

export interface RecipeCrimsonGuard {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface CrimsonGuard {
    abilities: Ability97[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dispellable: string
    notes: string
    attrib: Attrib146[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability97 {
    type: string
    title: string
    description: string
}

export interface Attrib146 {
    key: string
    display?: string
    value: string
}

export interface RecipeBladeMail {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface BladeMail {
    abilities: Ability98[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib147[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability98 {
    type: string
    title: string
    description: string
}

export interface Attrib147 {
    key: string
    display?: string
    value: string
}

export interface SoulBooster {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib148[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib148 {
    key: string
    display: string
    value: string
}

export interface HoodOfDefiance {
    abilities: Ability99[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib149[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability99 {
    type: string
    title: string
    description: string
}

export interface Attrib149 {
    key: string
    value: string
    display?: string
}

export interface RecipeEternalShroud {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface EternalShroud {
    abilities: Ability100[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib150[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability100 {
    type: string
    title: string
    description: string
}

export interface Attrib150 {
    key: string
    display?: string
    value: string
}

export interface Rapier {
    abilities: Ability101[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: any[]
    notes: string
    attrib: Attrib151[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability101 {
    type: string
    title: string
    description: string
}

export interface Attrib151 {
    key: string
    value: string
    display?: string
}

export interface RecipeMonkeyKingBar {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface MonkeyKingBar {
    abilities: Ability102[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib152[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability102 {
    type: string
    title: string
    description: string
}

export interface Attrib152 {
    key: string
    display?: string
    value: string
}

export interface Radiance {
    abilities: Ability103[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib153[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability103 {
    type: string
    title: string
    description: string
}

export interface Attrib153 {
    key: string
    display?: string
    value: string
}

export interface Butterfly {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib154[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib154 {
    key: string
    display: string
    value: string
}

export interface RecipeGreaterCrit {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface GreaterCrit {
    abilities: Ability104[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib155[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability104 {
    type: string
    title: string
    description: string
}

export interface Attrib155 {
    key: string
    display?: string
    value: string
}

export interface RecipeBasher {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Basher {
    abilities: Ability105[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    dmg_type: string
    bkbpierce: string
    dispellable: string
    notes: string
    attrib: Attrib156[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability105 {
    type: string
    title: string
    description: string
}

export interface Attrib156 {
    key: string
    display?: string
    value: string
}

export interface RecipeBfury {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Bfury {
    abilities: Ability106[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: any[]
    target_type: string
    notes: string
    attrib: Attrib157[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability106 {
    type: string
    title: string
    description: string
}

export interface Attrib157 {
    key: string
    display?: string
    value: string
}

export interface RecipeManta {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Manta {
    abilities: Ability107[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib158[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability107 {
    type: string
    title: string
    description: string
}

export interface Attrib158 {
    key: string
    display?: string
    value: string
}

export interface RecipeLesserCrit {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface LesserCrit {
    abilities: Ability108[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib159[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability108 {
    type: string
    title: string
    description: string
}

export interface Attrib159 {
    key: string
    display?: string
    value: string
}

export interface RecipeDragonLance {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface DragonLance {
    abilities: Ability109[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib160[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability109 {
    type: string
    title: string
    description: string
}

export interface Attrib160 {
    key: string
    display: string
    value: string
}

export interface RecipeArmlet {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Armlet {
    abilities: Ability110[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib161[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability110 {
    type: string
    title: string
    description: string
}

export interface Attrib161 {
    key: string
    display?: string
    value: string
}

export interface InvisSword {
    abilities: Ability111[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib162[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability111 {
    type: string
    title: string
    description: string
}

export interface Attrib162 {
    key: string
    display?: string
    value: string
}

export interface RecipeSilverEdge {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface SilverEdge {
    abilities: Ability112[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib163[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability112 {
    type: string
    title: string
    description: string
}

export interface Attrib163 {
    key: string
    display?: string
    value: string
}

export interface SangeAndYasha {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib164[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib164 {
    key: string
    display: string
    value: string
}

export interface KayaAndSange {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib165[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib165 {
    key: string
    display: string
    value: string
}

export interface YashaAndKaya {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib166[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib166 {
    key: string
    display: string
    value: string
}

export interface Satanic {
    abilities: Ability113[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dispellable: string
    notes: string
    attrib: Attrib167[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability113 {
    type: string
    title: string
    description: string
}

export interface Attrib167 {
    key: string
    display?: string
    value: string
}

export interface RecipeMjollnir {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Mjollnir {
    abilities: Ability114[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib168[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability114 {
    type: string
    title: string
    description: string
}

export interface Attrib168 {
    key: string
    display?: string
    value: string
}

export interface RecipeSkadi {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Skadi {
    abilities: Ability115[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib169[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability115 {
    type: string
    title: string
    description: string
}

export interface Attrib169 {
    key: string
    display?: string
    value: string
}

export interface RecipeSange {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Sange {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib170[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib170 {
    key: string
    display: string
    value: string
}

export interface RecipeHelmOfTheDominator {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface HelmOfTheDominator {
    abilities: Ability116[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: any[]
    notes: string
    attrib: Attrib171[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability116 {
    type: string
    title: string
    description: string
}

export interface Attrib171 {
    key: string
    display?: string
    value: string
}

export interface RecipeHelmOfTheOverlord {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface HelmOfTheOverlord {
    abilities: Ability117[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: any[]
    notes: string
    attrib: Attrib172[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability117 {
    type: string
    title: string
    description: string
}

export interface Attrib172 {
    key: string
    display?: string
    value: string
}

export interface Maelstrom {
    abilities: Ability118[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib173[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability118 {
    type: string
    title: string
    description: string
}

export interface Attrib173 {
    key: string
    display?: string
    value: string
}

export interface RecipeGungir {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Gungir {
    abilities: Ability119[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib174[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability119 {
    type: string
    title: string
    description: string
}

export interface Attrib174 {
    key: string
    display?: string
    value: string
}

export interface Desolator {
    abilities: Ability120[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    bkbpierce: string
    dispellable: string
    notes: string
    attrib: Attrib175[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability120 {
    type: string
    title: string
    description: string
}

export interface Attrib175 {
    key: string
    display?: string
    value: string
}

export interface RecipeYasha {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Yasha {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib176[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib176 {
    key: string
    display: string
    value: string
}

export interface MaskOfMadness {
    abilities: Ability121[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dispellable: string
    notes: string
    attrib: Attrib177[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability121 {
    type: string
    title: string
    description: string
}

export interface Attrib177 {
    key: string
    display?: string
    value: string
}

export interface RecipeDiffusalBlade {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface DiffusalBlade {
    abilities: Ability122[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib178[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability122 {
    type: string
    title: string
    description: string
}

export interface Attrib178 {
    key: string
    display?: string
    value: string
}

export interface RecipeDisperser {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Disperser {
    abilities: Ability123[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib179[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability123 {
    type: string
    title: string
    description: string
}

export interface Attrib179 {
    key: string
    display?: string
    value: string
}

export interface RecipeEtherealBlade {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface EtherealBlade {
    abilities: Ability124[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    dispellable: string
    target_team: string[]
    target_type: string
    notes: string
    attrib: Attrib180[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability124 {
    type: string
    title: string
    description: string
}

export interface Attrib180 {
    key: string
    display?: string
    value: string
}

export interface RecipeSoulRing {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface SoulRing {
    abilities: Ability125[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib181[]
    mc: boolean
    hc: number
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability125 {
    type: string
    title: string
    description: string
}

export interface Attrib181 {
    key: string
    display?: string
    value: string
}

export interface RecipeArcaneBoots {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface ArcaneBoots {
    abilities: Ability126[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib182[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability126 {
    type: string
    title: string
    description: string
}

export interface Attrib182 {
    key: string
    display?: string
    value: string
}

export interface OctarineCore {
    abilities: Ability127[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib183[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability127 {
    type: string
    title: string
    description: string
}

export interface Attrib183 {
    key: string
    display?: string
    value: string
}

export interface OrbOfVenom {
    abilities: Ability128[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    dispellable: string
    notes: string
    attrib: Attrib184[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability128 {
    type: string
    title: string
    description: string
}

export interface Attrib184 {
    key: string
    value: string
}

export interface BlightStone {
    abilities: Ability129[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    bkbpierce: string
    dispellable: string
    notes: string
    attrib: Attrib185[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability129 {
    type: string
    title: string
    description: string
}

export interface Attrib185 {
    key: string
    value: string
}

export interface OrbOfCorrosion {
    abilities: Ability130[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib186[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability130 {
    type: string
    title: string
    description: string
}

export interface Attrib186 {
    key: string
    display?: string
    value: string
}

export interface RecipeFalconBlade {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface FalconBlade {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib187[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Attrib187 {
    key: string
    display: string
    value: string
}

export interface RecipeMageSlayer {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface MageSlayer {
    abilities: Ability131[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    dmg_type: string
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib188[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability131 {
    type: string
    title: string
    description: string
}

export interface Attrib188 {
    key: string
    display?: string
    value: string
}

export interface RecipeAncientJanggo {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface AncientJanggo {
    abilities: Ability132[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib189[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: number
}

export interface Ability132 {
    type: string
    title: string
    description: string
}

export interface Attrib189 {
    key: string
    value: string
    display?: string
}

export interface RecipeBootsOfBearing {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface BootsOfBearing {
    abilities: Ability133[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib190[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability133 {
    type: string
    title: string
    description: string
}

export interface Attrib190 {
    key: string
    value: string
    display?: string
}

export interface MedallionOfCourage {
    abilities: Ability134[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    bkbpierce: string
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib191[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability134 {
    type: string
    title: string
    description: string
}

export interface Attrib191 {
    key: string
    display?: string
    value: string
}

export interface RecipeSolarCrest {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface SolarCrest {
    abilities: Ability135[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    bkbpierce: string
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib192[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability135 {
    type: string
    title: string
    description: string
}

export interface Attrib192 {
    key: string
    display?: string
    value: string
}

export interface RecipePavise {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Pavise {
    abilities: Ability136[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    bkbpierce: string
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib193[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability136 {
    type: string
    title: string
    description: string
}

export interface Attrib193 {
    key: string
    display?: string
    value: string
}

export interface SmokeOfDeceit {
    abilities: Ability137[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib194[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability137 {
    type: string
    title: string
    description: string
}

export interface Attrib194 {
    key: string
    value: string
}

export interface TomeOfKnowledge {
    abilities: Ability138[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib195[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability138 {
    type: string
    title: string
    description: string
}

export interface Attrib195 {
    key: string
    value: string
}

export interface RecipeVeilOfDiscord {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface VeilOfDiscord {
    abilities: Ability139[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dispellable: string
    notes: string
    attrib: Attrib196[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability139 {
    type: string
    title: string
    description: string
}

export interface Attrib196 {
    key: string
    display?: string
    value: string
}

export interface RecipeRevenantsBrooch {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface RevenantsBrooch {
    abilities: Ability140[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    bkbpierce: string
    notes: string
    attrib: Attrib197[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability140 {
    type: string
    title: string
    description: string
}

export interface Attrib197 {
    key: string
    display?: string
    value: string
}

export interface RecipeDevastator {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Devastator {
    abilities: Ability141[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    bkbpierce: string
    notes: string
    attrib: Attrib198[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability141 {
    type: string
    title: string
    description: string
}

export interface Attrib198 {
    key: string
    display?: string
    value: string
}

export interface RecipeGuardianGreaves {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface GuardianGreaves {
    abilities: Ability142[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib199[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability142 {
    type: string
    title: string
    description: string
}

export interface Attrib199 {
    key: string
    display?: string
    value: string
}

export interface RecipeRodOfAtos {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface RodOfAtos {
    abilities: Ability143[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib200[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability143 {
    type: string
    title: string
    description: string
}

export interface Attrib200 {
    key: string
    display?: string
    value: string
}

export interface RecipeIronTalon {
    id: number
    img: string
    dname: string
    cost: number
    desc: string
    notes: string
    attrib: any[]
    mc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
}

export interface IronTalon {
    abilities: Ability144[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: any[]
    target_type: string
    notes: string
    attrib: Attrib201[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability144 {
    type: string
    title: string
    description: string
}

export interface Attrib201 {
    key: string
    display?: string
    value: string
}

export interface RecipeAbyssalBlade {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface AbyssalBlade {
    abilities: Ability145[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib202[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability145 {
    type: string
    title: string
    description: string
}

export interface Attrib202 {
    key: string
    display?: string
    value: string
}

export interface RecipeHeavensHalberd {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface HeavensHalberd {
    abilities: Ability146[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib203[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability146 {
    type: string
    title: string
    description: string
}

export interface Attrib203 {
    key: string
    display?: string
    value: string
}

export interface RingOfAquila {
    abilities: Ability147[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: any
    behavior: string[]
    notes: string
    attrib: Attrib204[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability147 {
    type: string
    title: string
    description: string
}

export interface Attrib204 {
    key: string
    display?: string
    value: string
}

export interface TranquilBoots {
    abilities: Ability148[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    notes: string
    attrib: Attrib205[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability148 {
    type: string
    title: string
    description: string
}

export interface Attrib205 {
    key: string
    display?: string
    value: string
}

export interface ShadowAmulet {
    abilities: Ability149[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    dispellable: string
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib206[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability149 {
    type: string
    title: string
    description: string
}

export interface Attrib206 {
    key: string
    display?: string
    value: string
}

export interface RecipeGlimmerCape {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface GlimmerCape {
    abilities: Ability150[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib207[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability150 {
    type: string
    title: string
    description: string
}

export interface Attrib207 {
    key: string
    value: string
    display?: string
}

export interface RiverPainter {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib208[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib208 {
    key: string
    value: string
}

export interface RiverPainter2 {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib209[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib209 {
    key: string
    value: string
}

export interface RiverPainter3 {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib210[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib210 {
    key: string
    value: string
}

export interface RiverPainter4 {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib211[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib211 {
    key: string
    value: string
}

export interface RiverPainter5 {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib212[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib212 {
    key: string
    value: string
}

export interface RiverPainter6 {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib213[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib213 {
    key: string
    value: string
}

export interface RiverPainter7 {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib214[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib214 {
    key: string
    value: string
}

export interface MutationTombstone {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface SuperBlink {
    abilities: Ability151[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: any
    behavior: string
    notes: string
    attrib: Attrib215[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability151 {
    type: string
    title: string
    description: string
}

export interface Attrib215 {
    key: string
    value: string
}

export interface PocketTower {
    id: number
    img: string
    dname: string
    cost: any
    behavior: string
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface PocketRoshan {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib216[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib216 {
    key: string
    value: string
}

export interface KeenOptic {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib217[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib217 {
    key: string
    display: string
    value: string
}

export interface GroveBow {
    abilities: Ability152[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib218[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability152 {
    type: string
    title: string
    description: string
}

export interface Attrib218 {
    key: string
    display?: string
    value: string
}

export interface QuickeningCharm {
    abilities: Ability153[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib219[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability153 {
    type: string
    title: string
    description: string
}

export interface Attrib219 {
    key: string
    display: string
    value: string
}

export interface PhilosophersStone {
    abilities: Ability154[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib220[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
    tier: number
}

export interface Ability154 {
    type: string
    title: string
    description: string
}

export interface Attrib220 {
    key: string
    display?: string
    value: string
}

export interface ForceBoots {
    abilities: Ability155[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib221[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability155 {
    type: string
    title: string
    description: string
}

export interface Attrib221 {
    key: string
    display?: string
    value: string
}

export interface Desolator2 {
    abilities: Ability156[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    bkbpierce: string
    notes: string
    attrib: Attrib222[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability156 {
    type: string
    title: string
    description: string
}

export interface Attrib222 {
    key: string
    display?: string
    value: string
}

export interface PhoenixAsh {
    abilities: Ability157[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib223[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability157 {
    type: string
    title: string
    description: string
}

export interface Attrib223 {
    key: string
    value: string
}

export interface SeerStone {
    abilities: Ability158[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib224[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability158 {
    type: string
    title: string
    description: string
}

export interface Attrib224 {
    key: string
    display?: string
    value: string
}

export interface GreaterMango {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Elixer {
    abilities: Ability159[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    dispellable: string
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib225[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability159 {
    type: string
    title: string
    description: string
}

export interface Attrib225 {
    key: string
    value: string
}

export interface VampireFangs {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib226[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Attrib226 {
    key: string
    display: string
    value: string
}

export interface ForceField {
    abilities: Ability160[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib227[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability160 {
    type: string
    title: string
    description: string
}

export interface Attrib227 {
    key: string
    value: string
    display?: string
}

export interface BlackPowderBag {
    abilities: Ability161[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib228[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability161 {
    type: string
    title: string
    description: string
}

export interface Attrib228 {
    key: string
    display?: string
    value: string
}

export interface MechanicalArm {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib229[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib229 {
    key: string
    value: string
}

export interface CraggyCoat {
    abilities: Ability162[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib230[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability162 {
    type: string
    title: string
    description: string
}

export interface Attrib230 {
    key: string
    display?: string
    value: string
}

export interface GreaterFaerieFire {
    abilities: Ability163[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib231[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability163 {
    type: string
    title: string
    description: string
}

export interface Attrib231 {
    key: string
    display?: string
    value: string
}

export interface TimelessRelic {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib232[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Attrib232 {
    key: string
    display: string
    value: string
}

export interface MirrorShield {
    abilities: Ability164[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib233[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability164 {
    type: string
    title: string
    description: string
}

export interface Attrib233 {
    key: string
    value: string
    display?: string
}

export interface IronwoodTree {
    abilities: Ability165[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib234[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability165 {
    type: string
    title: string
    description: string
}

export interface Attrib234 {
    key: string
    display?: string
    value: string
}

export interface MangoTree {
    abilities: Ability166[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: any
    behavior: string
    notes: string
    attrib: Attrib235[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability166 {
    type: string
    title: string
    description: string
}

export interface Attrib235 {
    key: string
    value: string
}

export interface RoyalJelly {
    abilities: Ability167[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib236[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
    tier: number
}

export interface Ability167 {
    type: string
    title: string
    description: string
}

export interface Attrib236 {
    key: string
    display?: string
    value: string
}

export interface PupilsGift {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib237[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Attrib237 {
    key: string
    display: string
    value: string
}

export interface TomeOfAghanim {
    abilities: Ability168[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib238[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability168 {
    type: string
    title: string
    description: string
}

export interface Attrib238 {
    key: string
    value: string
}

export interface RepairKit {
    abilities: Ability169[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib239[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability169 {
    type: string
    title: string
    description: string
}

export interface Attrib239 {
    key: string
    value: string
    display?: string
}

export interface MindBreaker {
    abilities: Ability170[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib240[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability170 {
    type: string
    title: string
    description: string
}

export interface Attrib240 {
    key: string
    display?: string
    value: string
}

export interface ThirdEye {
    abilities: Ability171[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib241[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability171 {
    type: string
    title: string
    description: string
}

export interface Attrib241 {
    key: string
    value: string
    display?: string
}

export interface SpellPrism {
    abilities: Ability172[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib242[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability172 {
    type: string
    title: string
    description: string
}

export interface Attrib242 {
    key: string
    display: string
    value: string
}

export interface PrincesKnife {
    abilities: Ability173[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib243[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability173 {
    type: string
    title: string
    description: string
}

export interface Attrib243 {
    key: string
    value: string
    display?: string
}

export interface WitlessShako {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib244[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib244 {
    key: string
    display: string
    value: string
}

export interface ImpClaw {
    abilities: Ability174[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib245[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability174 {
    type: string
    title: string
    description: string
}

export interface Attrib245 {
    key: string
    value: string
    display?: string
}

export interface Flicker {
    abilities: Ability175[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib246[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability175 {
    type: string
    title: string
    description: string
}

export interface Attrib246 {
    key: string
    value: string
    display?: string
}

export interface SpyGadget {
    abilities: Ability176[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib247[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability176 {
    type: string
    title: string
    description: string
}

export interface Attrib247 {
    key: string
    display?: string
    value: string
}

export interface SpiderLegs {
    abilities: Ability177[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib248[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability177 {
    type: string
    title: string
    description: string
}

export interface Attrib248 {
    key: string
    display?: string
    value: string
}

export interface HelmOfTheUndying {
    abilities: Ability178[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib249[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability178 {
    type: string
    title: string
    description: string
}

export interface Attrib249 {
    key: string
    display?: string
    value: string
}

export interface Vambrace {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib250[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Attrib250 {
    key: string
    display?: string
    value: string
}

export interface Horizon {
    abilities: Ability179[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    bkbpierce: string
    target_team: any[]
    target_type: any[]
    notes: string
    attrib: Attrib251[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability179 {
    type: string
    title: string
    description: string
}

export interface Attrib251 {
    key: string
    value: string
}

export interface FusionRune {
    abilities: Ability180[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib252[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Ability180 {
    type: string
    title: string
    description: string
}

export interface Attrib252 {
    key: string
    value: string
}

export interface OceanHeart {
    abilities: Ability181[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib253[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability181 {
    type: string
    title: string
    description: string
}

export interface Attrib253 {
    key: string
    display?: string
    value: string
}

export interface SparkOfCourage {
    abilities: Ability182[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib254[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability182 {
    type: string
    title: string
    description: string
}

export interface Attrib254 {
    key: string
    value: string
}

export interface BroomHandle {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib255[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Attrib255 {
    key: string
    display: string
    value: string
}

export interface TrustyShovel {
    abilities: Ability183[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib256[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability183 {
    type: string
    title: string
    description: string
}

export interface Attrib256 {
    key: string
    display?: string
    value: string
}

export interface NetherShawl {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib257[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib257 {
    key: string
    display: string
    value: string
}

export interface DragonScale {
    abilities: Ability184[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib258[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability184 {
    type: string
    title: string
    description: string
}

export interface Attrib258 {
    key: string
    display?: string
    value: string
}

export interface EssenceRing {
    abilities: Ability185[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib259[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability185 {
    type: string
    title: string
    description: string
}

export interface Attrib259 {
    key: string
    display?: string
    value: string
}

export interface ClumsyNet {
    abilities: Ability186[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    bkbpierce: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib260[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability186 {
    type: string
    title: string
    description: string
}

export interface Attrib260 {
    key: string
    value: string
    display?: string
}

export interface EnchantedQuiver {
    abilities: Ability187[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib261[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability187 {
    type: string
    title: string
    description: string
}

export interface Attrib261 {
    key: string
    display?: string
    value: string
}

export interface NinjaGear {
    abilities: Ability188[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib262[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability188 {
    type: string
    title: string
    description: string
}

export interface Attrib262 {
    key: string
    display?: string
    value: string
}

export interface IllusionstsCape {
    abilities: Ability189[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib263[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability189 {
    type: string
    title: string
    description: string
}

export interface Attrib263 {
    key: string
    value: string
    display?: string
}

export interface HavocHammer {
    abilities: Ability190[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib264[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability190 {
    type: string
    title: string
    description: string
}

export interface Attrib264 {
    key: string
    display?: string
    value: string
}

export interface PanicButton {
    abilities: Ability191[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib265[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability191 {
    type: string
    title: string
    description: string
}

export interface Attrib265 {
    key: string
    display?: string
    value: string
}

export interface Apex {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib266[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Attrib266 {
    key: string
    display?: string
    value: string
}

export interface Ballista {
    abilities: Ability192[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib267[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability192 {
    type: string
    title: string
    description: string
}

export interface Attrib267 {
    key: string
    display?: string
    value: string
}

export interface WoodlandStriders {
    abilities: Ability193[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib268[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability193 {
    type: string
    title: string
    description: string
}

export interface Attrib268 {
    key: string
    display?: string
    value: string
}

export interface RecipeTrident {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Demonicon {
    abilities: Ability194[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib269[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability194 {
    type: string
    title: string
    description: string
}

export interface Attrib269 {
    key: string
    display?: string
    value: string
}

export interface FallenSky {
    abilities: Ability195[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib270[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability195 {
    type: string
    title: string
    description: string
}

export interface Attrib270 {
    key: string
    display?: string
    value: string
}

export interface PirateHat {
    abilities: Ability196[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib271[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability196 {
    type: string
    title: string
    description: string
}

export interface Attrib271 {
    key: string
    display: string
    value: string
}

export interface DimensionalDoorway {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface ExMachina {
    abilities: Ability197[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib272[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability197 {
    type: string
    title: string
    description: string
}

export interface Attrib272 {
    key: string
    display: string
    value: string
}

export interface FadedBroach {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib273[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Attrib273 {
    key: string
    display: string
    value: string
}

export interface PaladinSword {
    abilities: Ability198[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib274[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability198 {
    type: string
    title: string
    description: string
}

export interface Attrib274 {
    key: string
    display?: string
    value: string
}

export interface MinotaurHorn {
    abilities: Ability199[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib275[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability199 {
    type: string
    title: string
    description: string
}

export interface Attrib275 {
    key: string
    display?: string
    value: string
}

export interface OrbOfDestruction {
    abilities: Ability200[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib276[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability200 {
    type: string
    title: string
    description: string
}

export interface Attrib276 {
    key: string
    display: string
    value: string
}

export interface TheLeveller {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib277[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib277 {
    key: string
    display: string
    value: string
}

export interface ArcaneRing {
    abilities: Ability201[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib278[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability201 {
    type: string
    title: string
    description: string
}

export interface Attrib278 {
    key: string
    display?: string
    value: string
}

export interface TitanSliver {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib279[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib279 {
    key: string
    display: string
    value: string
}

export interface ChippedVest {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib280[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib280 {
    key: string
    display?: string
    value: string
}

export interface WizardGlass {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib281[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib281 {
    key: string
    display?: string
    value: string
}

export interface GlovesOfTravel {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib282[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib282 {
    key: string
    display?: string
    value: string
}

export interface ElvenTunic {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib283[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Attrib283 {
    key: string
    display: string
    value: string
}

export interface CloakOfFlames {
    abilities: Ability202[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib284[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability202 {
    type: string
    title: string
    description: string
}

export interface Attrib284 {
    key: string
    display?: string
    value: string
}

export interface VenomGland {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib285[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib285 {
    key: string
    display?: string
    value: string
}

export interface TricksterCloak {
    abilities: Ability203[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib286[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability203 {
    type: string
    title: string
    description: string
}

export interface Attrib286 {
    key: string
    display?: string
    value: string
}

export interface GladiatorHelm {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib287[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib287 {
    key: string
    value: string
}

export interface PossessedMask {
    abilities: Ability204[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib288[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability204 {
    type: string
    title: string
    description: string
}

export interface Attrib288 {
    key: string
    display?: string
    value: string
}

export interface AncientPerseverance {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib289[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib289 {
    key: string
    display: string
    value: string
}

export interface StarMace {
    abilities: Ability205[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib290[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability205 {
    type: string
    title: string
    description: string
}

export interface Attrib290 {
    key: string
    display?: string
    value: string
}

export interface PentaEdgedSword {
    abilities: Ability206[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib291[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability206 {
    type: string
    title: string
    description: string
}

export interface Attrib291 {
    key: string
    display?: string
    value: string
}

export interface Oakheart {
    abilities: Ability207[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib292[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability207 {
    type: string
    title: string
    description: string
}

export interface Attrib292 {
    key: string
    display?: string
    value: string
}

export interface Warhammer {
    abilities: Ability208[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib293[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability208 {
    type: string
    title: string
    description: string
}

export interface Attrib293 {
    key: string
    display?: string
    value: string
}

export interface Bullwhip {
    abilities: Ability209[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib294[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability209 {
    type: string
    title: string
    description: string
}

export interface Attrib294 {
    key: string
    display?: string
    value: string
}

export interface PsychicHeadband {
    abilities: Ability210[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib295[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability210 {
    type: string
    title: string
    description: string
}

export interface Attrib295 {
    key: string
    display?: string
    value: string
}

export interface CeremonialRobe {
    abilities: Ability211[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib296[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability211 {
    type: string
    title: string
    description: string
}

export interface Attrib296 {
    key: string
    display?: string
    value: string
}

export interface QuicksilverAmulet {
    abilities: Ability212[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib297[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability212 {
    type: string
    title: string
    description: string
}

export interface Attrib297 {
    key: string
    display?: string
    value: string
}

export interface BookOfShadows {
    abilities: Ability213[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib298[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability213 {
    type: string
    title: string
    description: string
}

export interface Attrib298 {
    key: string
    display?: string
    value: string
}

export interface GiantsRing {
    abilities: Ability214[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib299[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability214 {
    type: string
    title: string
    description: string
}

export interface Attrib299 {
    key: string
    display?: string
    value: string
}

export interface VengeancesShadow {
    abilities: Ability215[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib300[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability215 {
    type: string
    title: string
    description: string
}

export interface Attrib300 {
    key: string
    display?: string
    value: string
}

export interface Stormcrafter {
    abilities: Ability216[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib301[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability216 {
    type: string
    title: string
    description: string
}

export interface Attrib301 {
    key: string
    value: string
    display?: string
}

export interface OverflowingElixir {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib302[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib302 {
    key: string
    value: string
}

export interface MysteriousHat {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib303[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib303 {
    key: string
    display: string
    value: string
}

export interface AssassinsDagger {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib304[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib304 {
    key: string
    value: string
}

export interface AsceticCap {
    abilities: Ability217[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib305[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability217 {
    type: string
    title: string
    description: string
}

export interface Attrib305 {
    key: string
    value: string
    display?: string
}

export interface SamplePicker {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib306[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib306 {
    key: string
    value: string
}

export interface IcarusWings {
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib307[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib307 {
    key: string
    value: string
}

export interface Misericorde {
    abilities: Ability218[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib308[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability218 {
    type: string
    title: string
    description: string
}

export interface Attrib308 {
    key: string
    value: string
    display?: string
}

export interface LightRobes {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib309[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib309 {
    key: string
    value: string
}

export interface HeavyBlade {
    abilities: Ability219[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    bkbpierce: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib310[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability219 {
    type: string
    title: string
    description: string
}

export interface Attrib310 {
    key: string
    value: string
    display?: string
}

export interface UnstableWand {
    abilities: Ability220[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib311[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability220 {
    type: string
    title: string
    description: string
}

export interface Attrib311 {
    key: string
    value: string
    display?: string
}

export interface FortitudeRing {
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib312[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib312 {
    key: string
    value: string
}

export interface PogoStick {
    abilities: Ability221[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib313[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability221 {
    type: string
    title: string
    description: string
}

export interface Attrib313 {
    key: string
    value: string
    display?: string
}

export interface Paintball {
    abilities: Ability222[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib314[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability222 {
    type: string
    title: string
    description: string
}

export interface Attrib314 {
    key: string
    display?: string
    value: string
}

export interface SeedsOfSerenity {
    abilities: Ability223[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib315[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability223 {
    type: string
    title: string
    description: string
}

export interface Attrib315 {
    key: string
    display?: string
    value: string
}

export interface LanceOfPursuit {
    abilities: Ability224[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib316[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability224 {
    type: string
    title: string
    description: string
}

export interface Attrib316 {
    key: string
    display?: string
    value: string
}

export interface OccultBracelet {
    abilities: Ability225[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib317[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability225 {
    type: string
    title: string
    description: string
}

export interface Attrib317 {
    key: string
    display?: string
    value: string
}

export interface TomeOfOmniscience {
    id: number
    img: string
    cost: number
    notes: string
    attrib: Attrib318[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib318 {
    key: string
    value: string
}

export interface OgreSealTotem {
    abilities: Ability226[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib319[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability226 {
    type: string
    title: string
    description: string
}

export interface Attrib319 {
    key: string
    display?: string
    value: string
}

export interface WandOfTheBrine {
    id: number
    img: string
    cost: number
    behavior: string[]
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib320[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib320 {
    key: string
    value: string
}

export interface SlimeVial {
    id: number
    img: string
    cost: number
    behavior: string[]
    dispellable: string
    notes: string
    attrib: Attrib321[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib321 {
    key: string
    value: string
}

export interface RecipeHarpoon {
    id: number
    img: string
    dname: string
    cost: number
    behavior: boolean
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Harpoon {
    abilities: Ability227[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib322[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
    charges: boolean
}

export interface Ability227 {
    type: string
    title: string
    description: string
}

export interface Attrib322 {
    key: string
    display?: string
    value: string
}

export interface DefiantShell {
    abilities: Ability228[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib323[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability228 {
    type: string
    title: string
    description: string
}

export interface Attrib323 {
    key: string
    display?: string
    value: string
}

export interface ArcaneScout {
    id: number
    img: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib324[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib324 {
    key: string
    value: string
}

export interface Barricade {
    id: number
    img: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib325[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib325 {
    key: string
    value: string
}

export interface EyeOfTheVizier {
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib326[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Attrib326 {
    key: string
    display: string
    value: string
}

export interface ManaclesOfPower {
    id: number
    img: string
    cost: number
    behavior: string
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib327[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib327 {
    key: string
    value: string
}

export interface BottomlessChalice {
    id: number
    img: string
    cost: number
    behavior: string[]
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib328[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: number
}

export interface Attrib328 {
    key: string
    value: string
}

export interface WandOfSanctitude {
    id: number
    img: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib329[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib329 {
    key: string
    value: string
}

export interface SpecialistsArray {
    abilities: Ability229[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib330[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability229 {
    type: string
    title: string
    description: string
}

export interface Attrib330 {
    key: string
    display?: string
    value: string
}

export interface DaggerOfRistul {
    abilities: Ability230[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib331[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability230 {
    type: string
    title: string
    description: string
}

export interface Attrib331 {
    key: string
    display?: string
    value: string
}

export interface Ofrenda {
    abilities: Ability231[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    dmg_type: string
    target_team: string
    target_type: string
    notes: string
    attrib: Attrib332[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability231 {
    type: string
    title: string
    description: string
}

export interface Attrib332 {
    key: string
    value: string
}

export interface OfrendaShovel {
    abilities: Ability232[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability232 {
    type: string
    title: string
    description: string
}

export interface OfrendaPledge {
    abilities: Ability233[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib333[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability233 {
    type: string
    title: string
    description: string
}

export interface Attrib333 {
    key: string
    value: string
}

export interface MuertasGun {
    abilities: Ability234[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    dmg_type: string
    bkbpierce: string
    dispellable: string
    target_team: string
    target_type: string[]
    notes: string
    attrib: Attrib334[]
    mc: number
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability234 {
    type: string
    title: string
    description: string
}

export interface Attrib334 {
    key: string
    value: string
    display?: string
}

export interface Tier1Token {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: any
    behavior: string
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Tier2Token {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: any
    behavior: string
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Tier3Token {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: any
    behavior: string
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Tier4Token {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: any
    behavior: string
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Tier5Token {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: any
    behavior: string
    notes: string
    attrib: any[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface VindicatorsAxe {
    abilities: Ability235[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib335[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability235 {
    type: string
    title: string
    description: string
}

export interface Attrib335 {
    key: string
    display?: string
    value: string
}

export interface DuelistGloves {
    abilities: Ability236[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib336[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability236 {
    type: string
    title: string
    description: string
}

export interface Attrib336 {
    key: string
    value: string
    display?: string
}

export interface AncientGuardian {
    abilities: Ability237[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib337[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability237 {
    type: string
    title: string
    description: string
}

export interface Attrib337 {
    key: string
    value: string
    display?: string
}

export interface SafetyBubble {
    abilities: Ability238[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib338[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability238 {
    type: string
    title: string
    description: string
}

export interface Attrib338 {
    key: string
    value: string
    display?: string
}

export interface WhisperOfTheDread {
    abilities: Ability239[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib339[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability239 {
    type: string
    title: string
    description: string
}

export interface Attrib339 {
    key: string
    value: string
    display?: string
}

export interface NemesisCurse {
    abilities: Ability240[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib340[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability240 {
    type: string
    title: string
    description: string
}

export interface Attrib340 {
    key: string
    value: string
    display?: string
}

export interface AvianasFeather {
    abilities: Ability241[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib341[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability241 {
    type: string
    title: string
    description: string
}

export interface Attrib341 {
    key: string
    display?: string
    value: string
}

export interface UnwaveringCondition {
    abilities: Ability242[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib342[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability242 {
    type: string
    title: string
    description: string
}

export interface Attrib342 {
    key: string
    value: string
    display?: string
}

export interface HorizonsEquilibrium {
    abilities: Ability243[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib343[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability243 {
    type: string
    title: string
    description: string
}

export interface Attrib343 {
    key: string
    value: string
    display?: string
}

export interface BlightedSpirit {
    abilities: Ability244[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib344[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability244 {
    type: string
    title: string
    description: string
}

export interface Attrib344 {
    key: string
    display?: string
    value: string
}

export interface DandelionAmulet {
    abilities: Ability245[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib345[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability245 {
    type: string
    title: string
    description: string
}

export interface Attrib345 {
    key: string
    display?: string
    value: string
}

export interface TurtleShell {
    abilities: Ability246[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib346[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability246 {
    type: string
    title: string
    description: string
}

export interface Attrib346 {
    key: string
    value: string
    display?: string
}

export interface MartyrsPlate {
    abilities: Ability247[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib347[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability247 {
    type: string
    title: string
    description: string
}

export interface Attrib347 {
    key: string
    value: string
    display?: string
}

export interface GossamerCape {
    abilities: Ability248[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib348[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability248 {
    type: string
    title: string
    description: string
}

export interface Attrib348 {
    key: string
    display: string
    value: string
}

export interface LightCollector {
    id: number
    img: string
    dname: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib349[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Attrib349 {
    key: string
    value: string
}

export interface Rattlecage {
    abilities: Ability249[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib350[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability249 {
    type: string
    title: string
    description: string
}

export interface Attrib350 {
    key: string
    value: string
    display?: string
}

export interface Doubloon {
    abilities: Ability250[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    behavior: string
    notes: string
    attrib: Attrib351[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
    tier: number
}

export interface Ability250 {
    type: string
    title: string
    description: string
}

export interface Attrib351 {
    key: string
    value: string
    display?: string
}

export interface RoshansBanner {
    abilities: Ability251[]
    hint: any[]
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    behavior: string[]
    notes: string
    attrib: Attrib352[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability251 {
    type: string
    title: string
    description: string
}

export interface Attrib352 {
    key: string
    value: string
}

export interface BlackGrimoire {
    abilities: Ability252[]
    hint: any[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib353[]
    mc: boolean
    hc: boolean
    cd: number
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Ability252 {
    type: string
    title: string
    description: string
}

export interface Attrib353 {
    key: string
    value: string
}

export interface Grisgris {
    abilities: any[]
    hint: string[]
    id: number
    img: string
    dname: string
    cost: number
    notes: string
    attrib: Attrib354[]
    mc: boolean
    hc: boolean
    cd: boolean
    lore: string
    components: any
    created: boolean
    charges: boolean
}

export interface Attrib354 {
    key: string
    value: string
}

export interface DiffusalBlade2 {
    id: number
    img: string
    dname: string
    qual: string
    cost: number
    desc: string
    notes: string
    attrib: Attrib355[]
    mc: boolean
    cd: number
    lore: string
    components: string[]
    created: boolean
}

export interface Attrib355 {
    key: string
    header: string
    value: string
    footer?: string
    generated?: boolean
}
