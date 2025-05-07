const dictionary = [
    { name: "アメジストが破壊される", id: "block.amethyst_cluster.break", sounds: [["block/amethyst_cluster/break", 4]], genre: ["氷", "石・金属", "ダメージ"] },
    { name: "金床が落下する", id: "block.anvil.land", sounds: ["random/anvil_land"], genre: ["打撃・衝突", "ダメージ","石・金属"] },
    { name: "ビーコンが起動する", id: "block.beacon.activate", sounds: ["block/beacon/activate"], genre: ["魔法"] },
    { name: "ビーコンが唸る", id: "block.beacon.ambient", sounds: ["block/beacon/ambient"], genre: ["魔法"] },
    { name: "ビーコンが停止する", id: "block.beacon.deactivate", sounds: ["block/beacon/deactivate"], genre: ["魔法"] },
    { name: "ビーコンの効果が選択される", id: "block.beacon.power_select", sounds: [["block/beacon/power", 3]], genre: ["魔法"] },
    { name: "コンジットが起動する", id: "block.conduit.activate", sounds: ["block/conduit/activate"], genre: ["魔法", "水"] },
    { name: "コンジットが停止する", id: "block.conduit.deactivate", sounds: ["block/conduit/deactivate"], genre: ["魔法", "水"] },
    { name: "エンドポータルが開く", id: "block.end_portal.spawn", sounds: ["block/end_portal/endportal"], genre: ["魔法", "UI"] },
    { name: "エンダーアイが嵌まる", id: "block.end_portal_frame.fill", sounds: [["block/end_portal/eyeplace", 3]], genre: ["魔法"] },
    { name: "ガラスが破壊される音", id: "block.glass.break", sounds: [["random/glass", 3]], genre: ["氷", "石・金属", "ダメージ"] },
    { name: "砥石・金属が使用される", id: "block.grindstone.use", sounds: [["block/grindstone/grindstone", 3]], genre: ["石・金属"] },
    { name: "音符ブロックの電子音", id: "block.note_block.bit", sounds: ["note/bit"], genre: ["機械","UI"] },
    { name: "音符ブロックからでるスティックの音", id: "block.note_block.hat", sounds: ["note/hat"], genre: ["機械","UI"] },
    { name: "ピストンが伸びる", id: "block.piston.extend", sounds: ["tile/piston/out"], genre: ["機械", "石・金属"] },
    { name: "ピストンが元に戻る", id: "block.piston.contract", sounds: ["tile/piston/in"], genre: ["機械", "石・金属"] },
    { name: "リスポーンアンカーがチャージされる", id: "block.respawn_anchor.charge", sounds: [["block/respawn_anchor/charge", 3]], genre: ["魔法", "溜める"] },
    { name: "リスポーンアンカーが消耗する", id: "block.respawn_anchor.charge", sounds: [["block/respawn_anchor/deplete", 2]], genre: ["魔法", "発射"] },
    { name: "リスポーンアンカーが起動する", id: "block.respawn_anchor.set_spawn", sounds: [["block/respawn_anchor/set_spawn", 3]], genre: ["魔法", "発射"] },
    { name: "アレイが死ぬ", id: "entity.allay.death", sounds: [["mob/allay/death", 2]], genre: ["発射", "魔法"] },
    { name: "アレイがダメージを受ける", id: "entity.allay.hurt", sounds: [["mob/allay/hurt", 2]], genre: ["発射", "魔法", "ダメージ"] },
    { name: "アレイが探す", id: "entity.allay.ambient_with_item", sounds: [["mob/allay/idle_with_item", 4]], genre: ["魔法", "鳴き声"] },
    { name: "アレイがアイテムを欲しがる", id: "entity.allay.ambient_without_item", sounds: [["mob/allay/idle_without_item", 4]], genre: ["魔法"] },
    { name: "アレイがアイテムを投げる", id: "entity.allay.item_thrown", sounds: ["mob/allay/item_thrown1"], genre: ["魔法"] },
    { name: "ブリーズが攻撃を準備する", id: "entity.breeze.charge", sounds: [["mob/breeze/charge", 3]], genre: ["溜める", "魔法"] },
    { name: "ブリーズが死ぬ", id: "entity.breeze.death", sounds: [["mob/breeze/death", 2]], genre: ["風", "銃"] },
    { name: "ブリーズが飛ぶ", id: "entity.breeze.idle_air", sounds: [["mob/breeze/idle_air", 4]], genre: ["風"] },
    { name: "ブリーズが発射する", id: "entity.breeze.shoot", sounds: ["mob/breeze/shoot"], genre: ["風"] },
    { name: "ブリーズが...何してるんですか？()", id: "entity.breeze.wind_burst", sounds: [["mob/breeze/wind_burst", 3]], genre: ["風", "爆発"] },
    { name: "エンダードラゴンが死ぬ", id: "entity.ender_dragon.death", sounds: ["mob/enderdragon/end"], genre: ["鳴き声", "ダメージ"] },
    { name: "エンダードラゴンが羽ばたく", id: "entity.ender_dragon.flap", sounds: [["mob/enderdragon/wings", 6]], genre: ["風"] },
    { name: "エンダードラゴンが唸る", id: "entity.ender_dragon.growl", sounds: [["mob/enderdragon/growl", 4]], genre: ["鳴き声"] },
    { name: "エンダードラゴンがダメージを受ける", id: "entity.ender_dragon.hurt", sounds: [["mob/enderdragon/hit", 4]], genre: ["機械", "ダメージ"] },
    { name: "テレポート", id: "entity.enderman.teleport", sounds: ["mob/endermen/portal", "mob/endermen/portal2"], genre: ["魔法"] },
    { name: "エルダーガーディアンの呪い", id: "entity.elder_guardian.curse", sounds: ["mob/guardian/curse"], genre: ["魔法"] },
    { name: "ガーディアンがダメージを受ける", id: "entity.guardian.hurt", sounds: [["mob/guardian/guardian_hit",4]], genre: ["魔法","ダメージ"] },
    { name: "エヴォーカーが呪文を唱える", id: "entity.evoker.cast_spell", sounds: [["mob/evocation_illager/cast", 2]], genre: ["魔法"] },
    { name: "エヴォーカーが攻撃の準備を行う", id: "entity.evoker.prepare_attack", sounds: [["mob/evocation_illager/prepare_attack", 2]], genre: ["魔法"] },
    { name: "エヴォーカーが召喚の準備を行う", id: "entity.evoker.prepare_summon", sounds: ["mob/evocation_illager/prepare_summon"], genre: ["魔法"] },
    { name: "ファングが口を閉じる", id: "entity.evoker_fangs.attack", sounds: ["mob/evocation_illager/fangs"], genre: ["斬撃"] },
    { name: "経験値が増える", id: "entity.experience_orb.pickup", sounds: ["random/orb"], genre: ["UI"] },
    { name: "花火が爆発する", id: "entity.firework_rocket.blast", sounds: ["fireworks/blast1"], genre: ["爆発", "銃"] },
    { name: "大きな花火が爆発する", id: "entity.firework_rocket.large_blast", sounds: ["fireworks/largeblast1"], genre: ["爆発", "炎"] },
    { name: "花火がきらめく", id: "entity.firework_rocket.twinkle", sounds: ["fireworks/twinkle1"], genre: ["電気"] },
    { name: "花火がきらめく", id: "entity.firework_rocket.twinkle_far", sounds: ["fireworks/twinkle_far1"], genre: ["電気"] },
    { name: "イリュージョナーが分身する", id: "entity.illusioner.mirror_move", sounds: [["mob/illusion_illager/mirror_move", 2]], genre: ["魔法"] },
    { name: "イリュージョナーが盲目の準備を行う", id: "entity.illusioner.prepare_blindness", sounds: ["mob/illusion_illager/prepare_blind"], genre: ["魔法"] },
    { name: "イリュージョナーが分身の準備を行う", id: "entity.illusioner.prepare_mirror", sounds: ["mob/illusion_illager/prepare_mirror"], genre: ["魔法"] },
    { name: "ゴーレムにひびが入る", id: "entity.iron_golem.damage", sounds: [["mob/irongolem/damage",2]], genre: ["石・金属","ダメージ"] },
    { name: "ゴーレムが修繕される", id: "entity.iron_golem.repair", sounds: ["mob/irongolem/repair"], genre: ["石・金属","鳴き声"] },
    { name: "雷が鳴る", id: "entity.lightning_bolt.thunder", sounds: [["ambient/weather/thunder", 3]], genre: ["電気"] },
    { name: "クリティカル攻撃を繰り出す", id: "entity.player.attack.crit", sounds: [["entity/player/attack/crit", 3]], genre: ["打撃・衝突"] },
    { name: "ノックバック攻撃を繰り出す ", id: "entity.player.attack.knockback", sounds: [["entity/player/attack/knockback", 4]], genre: ["打撃・衝突"] },
    { name: "薙ぎ払い攻撃を繰り出す", id: "entity.player.attack.sweep", sounds: [["entity/player/attack/sweep", 7]], genre: ["斬撃", "風"] },
    { name: "プレイヤーがレベルアップする", id: "entity.player.levelup", sounds: ["random/levelup"], genre: ["UI"] },
    { name: "爆発", id: "entity.generic.explode", sounds: [["random/explode", 4]], genre: ["爆発"] },
    { name: "着水", id: "entity.generic.splash", sounds: ["liquid/splash", "liquid/splash2"], genre: ["水"] },
    { name: "勢いよく着水", id: "entity.player.splash.high_speed", sounds: ["liquid/heavy_splash"], genre: ["水"] },
    { name: "水泳", id: "entity.generic.swim", sounds: [["liquid/swim", 18]], genre: ["水"] },
    { name: "ウォーデンが出現", id: "entity.warden.emerge", sounds: ["mob/warden/emerge"], genre: ["UI", "鳴き声", "魔法"] },
    { name: "ウォーデンが攻撃を溜める", id: "entity.warden.sonic_charge", sounds: [["mob/warden/sonic_charge", 4]], genre: ["溜める", "魔法"] },
    { name: "ウォーデンがソニックブームを解き放つ", id: "entity.warden.sonic_boom", sounds: [["mob/warden/sonic_boom", 4]], genre: ["発射", "魔法"] },
    { name: "ウィンドチャージが炸裂する", id: "entity.wind_charge.wind_burst", sounds: [["entity/wind_charge/wind_burst", 3]], genre: ["風", "爆発"] },
    { name: "ウィザーの鳴き声", id: "entity.wither.ambient", sounds: [["mob/wither/idle", 4]], genre: ["鳴き声"] },
    { name: "ウィザーの死ぬ", id: "entity.wither.death", sounds: ["mob/wither/death"], genre: ["鳴き声"] },
    { name: "ウィザーが頭蓋骨を飛ばす", id: "entity.wither.shoot", sounds: ["mob/wither/shoot"], genre: ["銃", "魔法","風"] },
    { name: "ウィザーが召喚される", id: "entity.wither.spawn", sounds: ["mob/wither/spawn"], genre: ["魔法"] },
    //{ name: "ファイヤーチャージを使用", id: "item.firecharge.use", sounds: ["mob/wither/spawn"], genre: ["魔法"]},
    { name: "ゾンビが感染", id: "entity.zombie.infect", sounds: ["mob/zombie/infect"], genre: ["炎"] },
    { name: "ゾンビが木製のドアをたたく", id: "entity.zombie.attack_wooden_door", sounds: [["mob/zombie/wood", 4]], genre: ["打撃・衝突"] },
    { name: "ゾンビが鉄製のドアをたたく", id: "entity.zombie.attack_iron_door", sounds: [["mob/zombie/metal", 3]], genre: ["打撃・衝突","石・金属"] },
    { name: "ゾンビがドアを壊す", id: "entity.zombie.break_wooden_door", sounds: ["mob/zombie/woodbreak"], genre: ["爆発", "打撃・衝突"] },
    { name: "村人ゾンビが叫ぶ", id: "entity.zombie_villager.converted", sounds: ["mob/zombie/unfect"], genre: ["鳴き声", "魔法"] },
    { name: "村人ゾンビを治療", id: "entity.zombie_villager.cure", sounds: ["mob/zombie/remedy"], genre: ["爆発", "魔法"] },
    { name: "斧でこすり落とす音", id: "item.axe.scrape", sounds: [["item/axe/scrape", 3]], genre: ["打撃・衝突", "石・金属"] },
    { name: "クロスボウを発射", id: "item.axe.scrape", sounds: [["item/crossbow/shoot", 3]], genre: ["弓"] },
    { name: "トーテムを使用する音", id: "item.totem.use", sounds: ["item/totem/use_totem"], genre: ["魔法", "爆発"] },
    { name: "トライデントが命中する", id: "item.trident.hit", sounds: [["item/trident/pierce", 3]], genre: ["打撃・衝突", "石・金属"] },
    { name: "トライデントが戻ってくる", id: "item.trident.return", sounds: [["item/trident/return", 3]], genre: ["魔法", "石・金属"] },
    { name: "トライデントで突進する", id: "item.trident.riptide_3", sounds: ["item/trident/riptide3"], genre: ["打撃・衝突", "石・金属", "風"] },
    { name: "トライデントの雷が轟く", id: "item.trident.thunder", sounds: [["item/trident/thunder", 2]], genre: ["打撃・衝突", "電気"] },
    { name: "メイスが振り降ろされる", id: "item.mace.smash_air", sounds: [["item/mace/smash_air", 3]], genre: ["打撃・衝突", "石・金属"] },   
    { name: "メイスが振り降ろされる", id: "item.mace.smash_ground", sounds: [["item/mace/smash_ground", 4]], genre: ["打撃・衝突", "石・金属"] },
    { name: "メイスが振り降ろされる", id: "item.mace.smash_ground_heavy", sounds: ["item/mace/smash_ground_heavy"], genre: ["打撃・衝突", "石・金属"] },
    { name: "UIをクリックする", id: "ui.button.click", sounds: ["random/click"], genre: ["UI"] },
    { name: "地図が書かれる音", id: "ui.cartography_table.take_result", sounds: [["ui/cartography_table/drawmap",3]], genre: ["その他"] },
    { name: "進捗が達成される", id: "ui.toast.challenge_complete", sounds: ["ui/toast/challenge_complete"], genre: ["UI"] },
    { name: "トーストが出現する", id: "ui.toast.in", sounds: ["ui/toast/in"], genre: ["UI","風"] },
    { name: "トーストが画面外に出る", id: "ui.toast.out", sounds: ["ui/toast/out"], genre: ["UI","風"] }
];

// 検索関数（ジャンルフィルターのみ）
function searchDictionary() {
    const genreSelect = document.getElementById('genreSelect');
    const selectedGenres = Array.from(genreSelect.selectedOptions).map(option => option.value);
    const resultDiv = document.getElementById('result');

    if (selectedGenres.length === 0) {
        resultDiv.innerHTML = "";
        return;
    }

    const results = dictionary.filter(entry =>
        entry.genre.some(genre => selectedGenres.includes(genre))
    );

    if (results.length > 0) {
        resultDiv.innerHTML = results.map(entry => {
            const expandedSounds = entry.sounds.flatMap(sound => {
                if (Array.isArray(sound) && typeof sound[0] === "string" && typeof sound[1] === "number") {
                    // プレフィックス + 連番展開
                    return Array.from({ length: sound[1] }, (_, i) => `${sound[0]}${i + 1}`);
                } else if (typeof sound === "string") {
                    return [sound];
                } else {
                    return []; // 想定外の形式は無視
                }
            });

            const audioTags = expandedSounds.map(sound =>
                `<audio controls src="sounds/${sound}.mp3"></audio>`
            ).join("<br>");

            const copyButtonId = `copy-${entry.id}`;

            return `
                <div class="entry">
                    <span>${entry.name} (<code id="${copyButtonId}-text">${entry.id}</code>) 
                        <button onclick="copyToClipboard('${entry.id}')">コピー</button>
                    </span><br>
                    ${audioTags}<br>
                    <font size="2">ジャンル: ${entry.genre.join(", ")}</font>
                </div>
            `;
        }).join('<br>');
    } else {
        resultDiv.innerHTML = "該当する音が見つかりませんでした。";
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const buttons = document.querySelectorAll(`button`);
        buttons.forEach(btn => {
            if (btn.innerText === "コピー" && btn.onclick.toString().includes(text)) {
                btn.innerText = "コピー完了！";
                setTimeout(() => btn.innerText = "コピー", 1500);
            }
        });
    }).catch(console.error);
}
