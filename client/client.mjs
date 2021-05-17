import * as alt from 'alt-client';
import * as native from 'natives'
let SPAWN = {
    x: -1290.7142333984375,
    y: 83.43296813964844,
    z: 54.8916015625
}
alt.onServer('attachObject', functionAttachObject)
function functionAttachObject() {
    let player = alt.Player.local
    let girya = native.createObject(alt.hash('prop_barbell_60kg'), SPAWN.x, SPAWN.y, SPAWN.z, false, false, false)
    let bone = native.getPedBoneIndex(player.scriptID, 28422);
    native.attachEntityToEntity(girya, player.scriptID, bone, player.pos.x, player.pos.y, player.pos.z, 0, 0, 0, false, false, false, false, 0, true)
}
