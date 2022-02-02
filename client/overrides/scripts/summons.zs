import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import mods.zensummoning.SummoningDirector;
import mods.zensummoning.SummoningAttempt;
import mods.zensummoning.SummoningInfo;
import mods.zensummoning.MobInfo;

SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:paraglider:spirit_orb>)
        .setReagents([<item:bountifulbaubles:ender_dragon_scale>, <item:minecraft:diamond>*4,<item:minecraft:stone>*6])
        .addMob(MobInfo.create()
            .setMob(<entityType:pandoras_creatures:arachnon>)
            .setCount(1)
            .setOffset(0,4,0)
            .setSpread(3,3,3)
            .setData({"Health": 250, "Attributes":[{"Name":"generic.max_health","Base":250}]})
    )
);