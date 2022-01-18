onEvent('recipes', (event) => {
    event.remove({ output: 'create:precision_mechanism' })
    event.remove({ output: 'thermal:machine_frame' })
    event.shaped('1x thermal:machine_frame', [
        'IGI',
        'GCG',
        'IGI'
    ], {
        I: '#forge:ingots/iron',
        G: '#forge:nuggets/steel',
        C: 'kubejs:thermal_mechanism'
    })
    event.replaceInput({ output: 'thermal:redstone_servo' }, '#forge:ingots/iron', 'createaddition:capacitor')

    ////vanilla ores
    //event.replaceOutput({}, '#forge:plates/iron', 'create:iron_sheet')
    //event.replaceOutput({}, '#forge:dusts/iron', 'thermal:iron_dust')
    //event.replaceOutput({}, '#forge:plates/gold', 'create:golden_sheet')
    //event.replaceOutput({}, '#forge:dusts/gold', 'thermal:gold_dust')
    //event.replaceOutput({}, '#forge:rods/iron', 'createaddition:iron_rod')
    //event.replaceOutput({}, '#forge:rods/gold', 'createaddition:gold_rod')
    //event.replaceOutput({}, '#forge:dusts/diamond', 'thermal:diamond_dust')
    //event.replaceOutput({}, 'morecreatestuffs:crushed_cobalt_ore', 'jaopca:create_crushed_ores.cobalt')
    //event.remove({ id: 'morecreatestuffs:main/crushing/tagged/cobalt_ore'})

    ////copper oredic
    //event.replaceOutput({}, '#forge:ingots/copper', 'create:copper_ingot')
    //event.replaceOutput({}, '#forge:storage_blocks/copper', 'create:copper_block')
    //event.replaceOutput({}, '#forge:nuggets/copper', 'create:copper_nugget')
    //event.replaceOutput({}, '#forge:plates/copper', 'create:copper_sheet')
    //event.replaceOutput({}, '#forge:dusts/copper', 'thermal:copper_dust')
    //event.replaceOutput({}, '#forge:rods/copper', 'createaddition:copper_rod')

    ////silver ordic
    //event.replaceOutput({}, '#forge:ingots/silver', 'thermal:silver_ingot')
    //event.replaceOutput({}, '#forge:storage_blocks/silver', 'thermal:silver_block')
    //event.replaceOutput({}, '#forge:nuggets/silver', 'thermal:silver_nugget')
    //event.replaceOutput({}, '#forge:plates/silver', 'thermal:silver_plate')
    //event.replaceOutput({}, '#forge:dusts/silver', 'thermal:silver_dust')

    ////lead ordic
    //event.replaceOutput({}, '#forge:ingots/lead', 'thermal:lead_ingot')
    //event.replaceOutput({}, '#forge:storage_blocks/lead', 'thermal:lead_block')
    //event.replaceOutput({}, '#forge:nuggets/lead', 'thermal:lead_nugget')
    //event.replaceOutput({}, '#forge:plates/lead', 'thermal:lead_plate')
    //event.replaceOutput({}, '#forge:dusts/lead', 'thermal:lead_dust')

    ////tin ordic
    //event.replaceOutput({}, '#forge:ingots/tin', 'thermal:tin_ingot')
    //event.replaceOutput({}, '#forge:storage_blocks/tin', 'thermal:tin_block')
    //event.replaceOutput({}, '#forge:nuggets/tin', 'thermal:tin_nugget')
    //event.replaceOutput({}, '#forge:plates/tin', 'thermal:tin_plate')
    //event.replaceOutput({}, '#forge:dusts/tin', 'thermal:tin_dust')

    ////electrum ordic
    //event.replaceOutput({}, '#forge:ingots/electrum', 'thermal:electrum_ingot')
    //event.replaceOutput({}, '#forge:storage_blocks/electrum', 'thermal:electrum_block')
    //event.replaceOutput({}, '#forge:nuggets/electrum', 'thermal:electrum_nugget')
    //event.replaceOutput({}, '#forge:plates/electrum', 'thermal:electrum_plate')
    //event.replaceOutput({}, '#forge:dusts/electrum', 'thermal:electrum_dust')

    ////nickel ordic
    //event.replaceOutput({}, '#forge:ingots/nickel', 'thermal:nickel_ingot')
    //event.replaceOutput({}, '#forge:storage_blocks/nickel', 'thermal:nickel_block')
    //event.replaceOutput({}, '#forge:nuggets/nickel', 'thermal:nickel_nugget')
    //event.replaceOutput({}, '#forge:plates/nickel', 'thermal:nickel_plate')
    //event.replaceOutput({}, '#forge:dusts/nickel', 'thermal:nickel_dust')

    ////constantan ordic
    //event.replaceOutput({}, '#forge:ingots/constantan', 'thermal:constantan_ingot')
    //event.replaceOutput({}, '#forge:storage_blocks/constantan', 'thermal:constantan_block')
    //event.replaceOutput({}, '#forge:nuggets/constantan', 'thermal:constantan_nugget')
    //event.replaceOutput({}, '#forge:plates/constantan', 'thermal:constantan_plate')
    //event.replaceOutput({}, '#forge:dusts/constantan', 'thermal:constantan_dust')

    //eidolon pewter
    event.recipes.createMixing('eidolon:pewter_ingot', ['#forge:ingots/lead', '#forge:ingots/iron']).superheated()
    event.recipes.thermal.smelter('eidolon:pewter_ingot', ['#forge:ingots/lead', '#forge:ingots/iron'])

    ////immersive dusts
    //event.replaceOutput({}, '#forge:dusts/uranium', 'immersiveengineering:dust_uranium')
    //event.replaceOutput({}, '#forge:dusts/aluminum', 'immersiveengineering:dust_aluminum')
    ////event.remove({ id: 'jaopca:thermal_expansion.material_to_dust.aluminum'})
    ////event.remove({ id: 'jaopca:thermal_expansion.material_to_dust.uranium' })
    //event.recipes.thermal.pulverizer('immersiveengineering:dust_aluminum','#forge:ingots/aluminum')
    //event.recipes.thermal.pulverizer('immersiveengineering:dust_uranium', '#forge:ingots/uranium')

    ////plate recipies
    //event.recipes.createPressing('thermal:netherite_plate', '#forge:ingots/netherite')
    //event.recipes.createPressing('thermal:tin_plate', '#forge:ingots/tin')
    //event.recipes.createPressing('thermal:bronze_plate', '#forge:ingots/bronze')
    //event.recipes.createPressing('thermal:invar_plate', '#forge:ingots/invar')
    //event.recipes.createPressing('thermal:signalum_plate', '#forge:ingots/signalum')
    //event.recipes.createPressing('thermal:lumium_plate', '#forge:ingots/lumium')
    //event.recipes.createPressing('thermal:enderium_plate', '#forge:ingots/enderium')
    //event.recipes.createPressing('thermal:electrum_plate', '#forge:ingots/electrum')
    //event.recipes.createPressing('thermal:silver_plate', '#forge:ingots/silver')
    //event.recipes.createPressing('thermal:lead_plate', '#forge:ingots/lead')
    //event.recipes.createPressing('thermal:nickel_plate', '#forge:ingots/nickel')
    //event.recipes.createPressing('immersiveengineering:plate_steel', '#forge:ingots/steel')
    //event.recipes.createPressing('immersiveengineering:plate_uranium', '#forge:ingots/uranium')
    //event.recipes.createPressing('immersiveengineering:plate_aluminum', '#forge:ingots/aluminum')
    //event.recipes.createPressing('thermal:constantan_plate', '#forge:ingots/constantan')
    //event.recipes.thermal.press('create:brass_sheet', '#forge:ingots/brass')
    //event.recipes.thermal.press('immersiveengineering:plate_steel', '#forge:ingots/steel')
    //event.recipes.thermal.press('immersiveengineering:plate_aluminum', '#forge:ingots/aluminum')

    //wires
    event.replaceOutput({}, 'createaddition:copper_wire', 'immersiveengineering:wire_copper')
    event.replaceInput({}, 'immersiveengineering:wire_copper', '#forge:wires/copper')

    //misc
    event.remove({ id: 'minecraft:trident' })
    event.remove({ id: 'upgrade_aquatic:trident' })
    event.remove({ id: 'outvoted:prismarine_rod'})
    event.shaped('1x minecraft:trident', [
        ' AA',
        ' BA',
        'B  '
    ], {
        A: 'upgrade_aquatic:thrasher_tooth',
        B: '#forge:rods/prismarine'
    })
    event.shaped('1x minecraft:trident', [
        ' AA',
        ' BA',
        'B  '
    ], {
        A: 'outvoted:barnacle_tooth',
        B: '#forge:rods/prismarine'
    })
    
    event.remove({ output: 'cgm:workbench' })
    event.shaped('1x cgm:workbench', [
        'CCC',
        'ABA',
        'A A'
    ], {
        A: "#forge:ingots/iron",
        B: "kubejs:thermal_mechanism",
        C: "#forge:nuggets/steel"
    })

    //ankh charm recipe change
    event.replaceInput({output: 'bountifulbaubles:ankh_charm'}, 'minecraft:gold_block', 'eidolon:arcane_gold_block')
    event.replaceInput({ output: 'bountifulbaubles:resplendent_token' }, 'minecraft:gold_ingot', 'eidolon:arcane_gold_ingot')
});