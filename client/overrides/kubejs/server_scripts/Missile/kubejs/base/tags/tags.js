onEvent('tags.items', event => {
    event.add('forge:rods/prismarine', 'outvoted:prismarine_rod')
    event.add('forge:rods', 'outvoted:prismarine_rod')
})

onEvent('tags.blocks', event => {
    event.add('minecraft:dragon_immune', 'betterendforge:flavolite')
    event.add('minecraft:dragon_immune', 'betterendforge:flavolite_wall')
    event.add('minecraft:dragon_immune', 'betterendforge:flavolite_stairs')
    event.add('minecraft:dragon_immune', 'betterendforge:flavolite_slab')
    event.add('minecraft:dragon_immune', 'betterendforge:thallasium_bars')
    event.remove('endergetic:ender_fire_base_blocks','minecraft:end_stone')
})