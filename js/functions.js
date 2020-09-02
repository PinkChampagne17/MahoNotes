function getCharas() {
    return CHARAS.map(c => new Chara(c)).sort((a, b) => a.position - b.position)
}

function clearArrays(...arrays) {
    arrays.forEach(array => array.splice(0, array.length))
}
