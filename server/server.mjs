import alt from 'alt'
let SPAWN = {
    x: -1291.7142333984375,
    y: 83.43296813964844,
    z: 54.8916015625
}
alt.on('playerConnect', (player) => {
    player.spawn(SPAWN.x, SPAWN.y, SPAWN.z, 0)
    player.model = 'mp_f_freemode_01'
    alt.emitClient(player, 'atachObject')
})
