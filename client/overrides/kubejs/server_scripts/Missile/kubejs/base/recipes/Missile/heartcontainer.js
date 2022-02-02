onEvent('recipes', event => {
    event.shaped('paraglider:heart_container', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'scalinghealth:heart_crystal_shard',
        B: 'paraglider:spirit_orb'
    })
    event.remove({ output: 'scalinghealth:heart_crystal'})
})