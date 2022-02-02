onEvent('recipes', (event) => {
    event.shaped('buddycards:pack.6', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'minecraft:pufferfish',
        B: '#forge:raw_fishes',
        C: '#buddycards:packs',
        D: 'buddycards:buddysteel_nugget'
    })
})