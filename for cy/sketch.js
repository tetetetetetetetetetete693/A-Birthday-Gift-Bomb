let h1, h2, h3, h4, h5;
let M1, M2, M3, M4, M5;
let offsetX, offsetY;

function setup() {
    
    createCanvas(300, 300);
    
    
    let canvasElt = document.querySelector('canvas');
    let canvasRect = canvasElt.getBoundingClientRect();
    offsetX = canvasRect.left;
    offsetY = canvasRect.top;
    
    
    h1 = createP("Happy Birthday!");
    h1.style('color', '#FFD700');
    M1 = new Position(h1, 50, 50, offsetX, offsetY);
    
    
    h2 = createP("生日快乐！");
    h2.style('color', '#FF7F50');
    M2 = new Position(h2, 150, 100, offsetX, offsetY);
    
   
    h3 = createP("誕生日おめでとう！");
    h3.style('color', '#6A5ACD');
    M3 = new Position(h3, 80, 200, offsetX, offsetY);
    
    
    h4 = createP("¡Feliz cumpleaños!");
    h4.style('color', '#CD5C5C');
    M4 = new Position(h4, 220, 250, offsetX, offsetY);
    
    
    h5 = createP("生日快楽！");
    h5.style('color', '#DB7093');
    M5 = new Position(h5, 300, 150, offsetX, offsetY);
}

function draw() {
    background('#FFFFF0');
    
    M1.moveWords();
    M2.moveWords();
    M3.moveWords();
    M4.moveWords();
    M5.moveWords();
}