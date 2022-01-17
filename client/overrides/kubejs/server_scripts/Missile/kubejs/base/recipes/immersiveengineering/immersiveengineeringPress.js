onEvent('recipes', (event) => {
    const recipes_mold_plate = [
        { output: 'thermal:signalum_plate', input: '#forge:ingots/signalum' },
        { output: 'thermal:lumium_plate', input: '#forge:ingots/lumium' },
        { output: 'thermal:enderium_plate', input: '#forge:ingots/enderium' },
        { output: 'thermal:netherite_plate', input: '#forge:ingots/netherite' },
        { output: 'create:brass_sheet', input: '#forge:ingots/brass' }
    ];

    recipes_mold_plate.forEach((recipe) => {
        event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, 'immersiveengineering:mold_plate');
    });
});