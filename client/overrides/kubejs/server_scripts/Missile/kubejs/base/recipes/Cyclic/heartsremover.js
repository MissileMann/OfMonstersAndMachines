onEvent('recipes', (event) => {
    event.remove({ output: 'cyclic:heart' })
    event.remove({ output: 'cyclic:heart_empty' })
})