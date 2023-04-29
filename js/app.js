var exitGame = []
window._open = window.open;
window._close = window.close;

window.open = function(url,name,params) {

}

window.close = function() {
    while ( w = openedWindows.shift());
}