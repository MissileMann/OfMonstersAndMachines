import mods.gamestages.StageHelper;

StageHelper.grantStageOnAdvancement("minecraft:end/kill_dragon", (player, advancement) => {
    player.sendMessage("The ancient spirits of light and dark have been released.");
    player.sendStatusMessage("The ancient spirits of light and dark have been released.", true);
}, "hardmode");

//StageHelper.grantStageOnAdvancement("minecraft:end/kill_dragon", "hardmode");