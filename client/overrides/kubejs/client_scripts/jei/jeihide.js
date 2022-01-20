onEvent('jei.hide.items', event => {
    const unsee = ['iceandfire:copper_ingot', 'iceandfire:copper_nugget', 'iceandfire:silver_ingot', 'iceandfire:silver_nugget', 'iceandfire:copper_ore', 'iceandfire:silver_ore',
        'iceandfire:silver_block', 'iceandfire:copperblock', 'thermal:copper_ore', 'thermal:copper_ingot', 'thermal:copper_nugget', 'thermal:copper_block', 'thermal:iron_plate', 'thermal:gold_plate', 'thermal:copper_plate',
        'immersiveengineering:stick_iron', 'immersiveposts:stick_gold', 'createaddition:copper_wire', 'tconstruct:copper_ore', 'tconstruct:copper_block', 'tconstruct:copper_ingot', 'tconstruct:copper_nugget', 'morecreatestuffs:crushed_cobalt_ore',
        'immersiveposts:stick_copper', 'steampowered:bronze_sheet', 'cyclic:heart', 'cyclic:heart_empty'    ]
    unsee.forEach(itemtohide => {
        event.hide(itemtohide)
    })

    const unseeImmersive = ['copper','lead','silver','nickel','constantan','electrum','iron','gold']
    unseeImmersive.forEach(material => {
        event.hide(`immersiveengineering:plate_${material}`)
        event.hide(`immersiveengineering:dust_${material}`)
        if (material == 'iron' || material == 'gold') { return }
        else {
            event.hide(`immersiveengineering:ore_${material}`)
            event.hide(`immersiveengineering:storage_${material}`)
            event.hide(`immersiveengineering:nugget_${material}`)
            event.hide(`immersiveengineering:ingot_${material}`)
        }
        if (material == 'copper' || material == 'lead' || material == 'silver') {
            event.hide(`better_diving:${material}_ingot`)
            event.hide(`better_diving:${material}_block`)
        }
    })

    const unseePedestals = ['iron','gold','copper','tin','osmium','uranium','lead','silver','aluminum','nickel']
    unseePedestals.forEach(material => {
        event.hide(`pedestals:dust${material}`)
    })
})