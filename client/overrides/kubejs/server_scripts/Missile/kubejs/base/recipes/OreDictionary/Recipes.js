onEvent('recipes', event => {
    const plates = ['iron', 'gold', 'copper', 'aluminum', 'silver', 'lead', 'nickel', 'uranium', 'osmium', 'tin', 'zinc', 'cobalt',
        'iridium', 'bronze', 'brass', 'constantan', 'electrum', 'steel', 'invar', 'signalum', 'lumium', 'enderium', 'cast_iron']
    plates.forEach(material => {
        event.remove({ output: `#forge:rods/${material}` })
        event.remove({ output: `#forge:plates/${material}` })
        event.remove({ output: `#forge:gears/${material}` })
        event.remove({ output: `emendatusenigmatica:${material}_rod` })
        event.remove({ output: `emendatusenigmatica:${material}_plate` })
        event.remove({ output: `emendatusenigmatica:${material}_gear` })
        //plates
        event.shapeless(`emendatusenigmatica:${material}_plate`, [`#forge:ingots/${material}`, 'emendatusenigmatica:enigmatic_hammer'])
        event.shapeless(`emendatusenigmatica:${material}_plate`, [`#forge:ingots/${material}`, 'immersiveengineering:hammer'])
        event.recipes.createPressing(`emendatusenigmatica:${material}_plate`, `#forge:ingots/${material}`)
        event.recipes.thermal.press(`emendatusenigmatica:${material}_plate`, `#forge:ingots/${material}`)
        event.recipes.immersiveengineering.metal_press(`emendatusenigmatica:${material}_plate`, `#forge:ingots/${material}`, 'immersiveengineering:mold_plate')
        //gear
        event.shaped(`emendatusenigmatica:${material}_gear`, [' A ', 'ABA', ' A '], { A: `#forge:ingots/${material}`, B: '#forge:nuggets/iron' })
        event.recipes.thermal.press([`emendatusenigmatica:${material}_gear`], [Item.of(`4x #forge:ingots/${material}`), 'thermal:press_gear_die'])
        event.recipes.immersiveengineering.metal_press(`emendatusenigmatica:${material}_gear`, `4x #forge:ingots/${material}`, 'immersiveengineering:mold_gear')
        //rods
        event.shaped(`2x emendatusenigmatica:${material}_rod`, ['A  ', 'A  ', '   '], { A: `#forge:ingots/${material}` })
        event.recipes.thermal.press([`2x emendatusenigmatica:${material}_rod`], [Item.of(`#forge:ingots/${material}`), 'immersiveengineering:mold_rod'])
        event.recipes.immersiveengineering.metal_press(`2x emendatusenigmatica:${material}_rod`, `#forge:ingots/${material}`, 'immersiveengineering:mold_rod')
    })

    const plateGem = ['diamond', 'emerald', 'lapis', 'ruby', 'sapphire', 'peridot']
    plateGem.forEach(material => {
        event.remove({ output: `#forge:rods/${material}` })
        event.remove({ output: `#forge:plates/${material}` })
        event.remove({ output: `#forge:gears/${material}` })
        event.remove({ output: `emendatusenigmatica:${material}_rod` })
        event.remove({ output: `emendatusenigmatica:${material}_plate` })
        event.remove({ output: `emendatusenigmatica:${material}_gear` })
        //plates
        event.shapeless(`emendatusenigmatica:${material}_plate`, [`#forge:gems/${material}`, 'emendatusenigmatica:enigmatic_hammer'])
        event.shapeless(`emendatusenigmatica:${material}_plate`, [`#forge:gems/${material}`, 'immersiveengineering:hammer'])
        event.recipes.createPressing(`emendatusenigmatica:${material}_plate`, `#forge:gems/${material}`)
        event.recipes.thermal.press(`emendatusenigmatica:${material}_plate`, `#forge:gems/${material}`)
        event.recipes.immersiveengineering.metal_press(`emendatusenigmatica:${material}_plate`, `#forge:gems/${material}`, 'immersiveengineering:mold_plate')
        //gear
        event.shaped(`emendatusenigmatica:${material}_gear`, [' A ', 'ABA', ' A '], { A: `#forge:gems/${material}`, B: '#forge:nuggets/iron' })
        event.recipes.thermal.press([`emendatusenigmatica:${material}_gear`], [Item.of(`4x #forge:gems/${material}`), 'thermal:press_gear_die'])
        event.recipes.immersiveengineering.metal_press(`emendatusenigmatica:${material}_gear`, `4x #forge:gems/${material}`, 'immersiveengineering:mold_gear')
        //rods
        event.shaped(`2x emendatusenigmatica:${material}_rod`, ['A  ', 'A  ', '   '], { A: `#forge:gems/${material}` })
        event.recipes.thermal.press([`2x emendatusenigmatica:${material}_rod`], [Item.of(`#forge:gems/${material}`), 'immersiveengineering:mold_rod'])
        event.recipes.immersiveengineering.metal_press(`2x emendatusenigmatica:${material}_rod`, `#forge:gems/${material}`, 'immersiveengineering:mold_rod')
    })
})