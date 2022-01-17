onEvent('recipes', event => {
    event.shaped('4x kubejs:thermal_mechanism', [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'create:electron_tube',
        C: 'steampowered:cast_iron_cogwheel',
        D: '#forge:plates/brass'
    })
})