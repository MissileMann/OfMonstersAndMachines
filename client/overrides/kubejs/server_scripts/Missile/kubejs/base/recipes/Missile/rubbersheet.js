onEvent('recipes', event => {
    event.shapeless('kubejs:rubber_sheet', ['thermal:cured_rubber', 'emendatusenigmatica:enigmatic_hammer'])
    event.shapeless('kubejs:rubber_sheet', ['thermal:cured_rubber', 'immersiveengineering:hammer'])
    event.recipes.createPressing('kubejs:rubber_sheet', 'thermal:cured_rubber')
    event.recipes.thermal.press('kubejs:rubber_sheet', 'thermal:cured_rubber')
    event.recipes.immersiveengineering.metal_press('kubejs:rubber_sheet', 'thermal:cured_rubber', 'immersiveengineering:mold_plate')
    event.replaceInput({}, 'industrialforegoing:plastic', 'kubejs:rubber_sheet')
    event.replaceOutput({}, 'industrialforegoing:dryrubber', 'thermal:rubber')
})