function environmentIsDevelopment(params) {
    return localStorage.getItem("env") == "dev"
}

function getCharas() {
    return CHARAS.map(c => new Chara(c)).sort((a, b) => a.location - b.location)
}

function clearArrays(...arrays) {
    arrays.forEach(array => array.splice(0, array.length))
}
