onEvent('recipes', event => {
    event.shaped('4x kubejs:gun_part', [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'minecraft:gold_ingot',
        B: 'thermal:redstone_servo',
        C: 'steampowered:steel_cogwheel',
        D: '#forge:plates/gold'
    })
})