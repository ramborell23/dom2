let repeat = window.prompt('Whats your string')
let num = window.prompt('How many times')

function nameDub(num, repeat) {
    var str = ''
    for (var i = 0; i < num; i++) {
        str = str +repeat+' '
    
    }
    return str
}
window.alert(nameDub(num,repeat))