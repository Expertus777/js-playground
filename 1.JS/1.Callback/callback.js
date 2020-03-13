
// Adding Script Function
function addScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}

addScript('./files/hello.js', function (script) {
    console.log(`Script ${script.src} is loaded! Woohoo!`);
    console.log(script);
    sayHello('Ruslan');
});

(function() {
    console.log('I\'m anonymous self invoke function!');
    return null;
}());
