onEvent('recipes', event => {
    //ingots
    const ingots = ['copper', 'aluminum', 'silver', 'lead', 'nickel', 'uranium', 'osmium', 'tin', 'zinc', 'cobalt', 'iridium', 'bronze', 'brass', 'constantan', 'electrum', 'steel', 'invar', 'signalum', 'lumium', 'enderium']
    ingots.forEach(ingot => {
        event.replaceOutput({}, `#forge:ingots/${ingot}`, `emendatusenigmatica:${ingot}_ingot`)
        event.replaceOutput({}, `#forge:nuggets/${ingot}`, `emendatusenigmatica:${ingot}_nuggets`)
        event.replaceOutput({}, `#forge:storage_blocks/${ingot}`, `emendatusenigmatica:${ingot}_block`)
    })
    //gems
    event.replaceOutput({}, `#forge:gems/mana`, `emendatusenigmatica:arcane_gem`)
    event.replaceOutput({}, `#forge:storage_blocks/mana`, `emendatusenigmatica:arcane_block`)
    event.replaceOutput({}, `#forge:storage_blocks/arcane`, `emendatusenigmatica:arcane_block`)
    event.replaceOutput({}, `#forge:gems/silicon`, `emendatusenigmatica:silicon_gem`)
    const gems = ['fluorite', 'bitumen', 'cinnabar', 'apatite', 'sulfur', 'potassium_nitrate', 'dimensional', 'ruby', 'sapphire', 'peridot', 'coke']
    gems.forEach(gem => {
        event.replaceOutput({}, `#forge:gems/${gem}`, `emendatusenigmatica:${gem}_gem`)
        event.replaceOutput({}, `#forge:storage_blocks/${gem}`, `emendatusenigmatica:${gem}_block`)
    })
    //plates and gears
    event.replaceOutput({}, `#forge:gears/quartz`, `emendatusenigmatica:quartz_gear`)
    const gearplate = ['iron', 'gold', 'diamond', 'emerald', 'lapis', 'copper', 'aluminum', 'silver', 'lead', 'nickel', 'uranium', 'osmium', 'tin', 'zinc', 'cobalt',
'iridium', 'ruby', 'sapphire', 'peridot', 'bronze', 'brass', 'constantan', 'electrum', 'steel', 'invar', 'signalum', 'lumium', 'enderium', 'cast_iron'    ]
    gearplate.forEach(material => {
        event.replaceOutput({}, `#forge:gears/${material}`, `emendatusenigmatica:${material}_gear`)
        event.replaceOutput({}, `#forge:plates/${material}`, `emendatusenigmatica:${material}_plate`)
        event.replaceOutput({}, `#forge:rods/${material}`, `emendatusenigmatica:${material}_rod`)
    })
})
