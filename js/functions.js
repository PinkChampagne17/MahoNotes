function environmentIsDevelopment(params) {
    return localStorage.getItem("env") == "dev"
}

function clearArrays(...arrays) {
    arrays.forEach(array => array.splice(0, array.length))
}
