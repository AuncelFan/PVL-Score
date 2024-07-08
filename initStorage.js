let score1 = 0
let score2 = 0
let score3 = 0
let game = 0
let name1 = '玩家1'
let name2 = '玩家2'
let name3 = '玩家3'
let record = []
if (load_info() == 'error') {
    let info = {
        score1: 0,
        score2: 0,
        score3: 0,
        game: 0,
        name1: '玩家1',
        name2: '玩家2',
        name3: '玩家3',
        record: []
    }
    localStorage.setItem("info", JSON.stringify(info))
}

function save_info() {
    let info = {
        score1: score1,
        score2: score2,
        score3: score3,
        game: game,
        name1: name1,
        name2: name2,
        name3: name3,
        record: record
    }
    localStorage.setItem("info", JSON.stringify(info))
}

function load_info() {
    let info = JSON.parse(localStorage.getItem("info"))
    if (info && 'score1' in info && 'score2' in info && 'score3' in info &&
        'game' in info && 'name1' in info && 'name2' in info &&
        'name3' in info && 'record' in info) {
        score1 = info.score1
        score2 = info.score2
        score3 = info.score3
        game = info.game
        name1 = info.name1
        name2 = info.name2
        name3 = info.name3
        record = info.record
        return 'ok'
    }
    else return 'error'
}

/**
 * @param {Object} newRecord
 * @param {number} newRecord.score1
 * @param {number} newRecord.score2
 * @param {number} newRecord.score3
 * @param {number} newRecord.lastscore1
 * @param {number} newRecord.lastscore2
 * @param {number} newRecord.lastscore3
 */
function add_record(newRecord) {
    record.push(JSON.parse(JSON.stringify(newRecord)))
}