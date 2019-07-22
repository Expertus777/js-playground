function generateField() {
    let field = document.createElement('div');
    let clientHeight = document.documentElement.clientHeight;
    let clientWidth = document.documentElement.clientWidth;

    // let fieldHeight = clientHeight - 300;
    // let fieldWidth = clientWidth - 200;
    let fieldHeight = clientHeight;
    let fieldWidth = clientWidth;

    field.setAttribute('id', 'play-field');
    field.style.height = fieldHeight + 'px';
    field.style.width = fieldWidth + 'px';
    // field.style.border = '1px dashed black';
    field.style.background = 'white';
    field.style.position = 'absolute';
    field.style.top = clientHeight/2 - fieldHeight/2 + 'px';
    console.log('element.style.top: ', field.style.top);
    field.style.left = clientWidth/2 - fieldWidth/2 + 'px';

    document.body.appendChild(field);

    return {
        height: fieldHeight,
        width: fieldWidth
    };
}

let field = generateField();

function generateSquareElement(field) {
    let element = document.createElement('div');
    let fieldHeight = field.height;
    let fieldWidth = field.width;

    let elementHeight = Math.floor(Math.random() * fieldHeight + 1) / 2;
    let elementWidth = Math.floor(Math.random() * fieldWidth + 1) / 2;

    element.style.height = elementHeight + 'px';
    element.style.width = elementWidth + 'px';

    let color = 'rgba(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ', 0.5)';
    // element.style.background = 'rgba(255, 0, 0, 0.5)';
    element.style.background = color;
    // element.style.border = '2px solid yellow';

    element.style.position = 'absolute';

    // calculate figure vertical position
    let elementVerticalPosition = Math.floor(Math.random() * fieldHeight + 1);
    if (elementVerticalPosition + elementHeight > fieldHeight) {
        element.style.bottom = fieldHeight - elementVerticalPosition + 'px';
    } else {
        element.style.top = elementVerticalPosition + 'px';
    }

    // calculate figure horizontal position
    let elementHorizontalPosition = Math.floor(Math.random() * fieldWidth + 1);
    if (elementHorizontalPosition + elementWidth > fieldWidth) {
        element.style.right = fieldWidth - elementHorizontalPosition + 'px';
    } else {
        element.style.left = elementHorizontalPosition + 'px';
    }
    return element;
}

function appendFigure() {
    let fieldElement = document.querySelector('#play-field');
    fieldElement.appendChild(generateSquareElement(field));
}

let iterator = 0;
while (iterator < 3000) {
    setTimeout(() => {
        appendFigure();
    }, 10 * iterator);
    iterator++;
}
