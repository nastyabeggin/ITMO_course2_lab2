function refreshSVG(){
    document.getElementById("graph").innerHTML += "";
}


function svgHandler(event) {
    const svg = document.querySelector('svg');
    const rect = svg.getBoundingClientRect();
    updateValidationPanel();
    if (isRValid()) {
        let r = getR();
        let x = ((event.clientX - rect.left - 150 * 1.2) * (r / 2) / (50 * 1.2)).toFixed(2);
        let y = (((-1) * (event.clientY - rect.top - 150 * 1.2)) * (r / 2) / (50 * 1.2)).toFixed(2);
        sendDataToServer(x, y, r);
    }
}


function makeDot(){
    let svgns = "http://www.w3.org/2000/svg",
        container = document.querySelector( 'svg' );
    let circle = document.createElementNS(svgns, 'circle');
    circle.setAttributeNS(null, 'class', 'shot' );
    circle.setAttributeNS(null, 'cx', 150 + 100 * x/r);
    circle.setAttributeNS(null, 'cy', 150 - 100 * y/r);
    circle.setAttributeNS(null, 'r', 3);
    circle.setAttributeNS(null, 'style', 'fill: red; stroke-width: 0;' );
    container.appendChild(circle);
}

function moveDots(){
    let cur = document.querySelector('option[name="value_R"]:checked').value;
    let shots = document.querySelectorAll( '.shot' );
    shots.forEach( (shot) => {
        let cx = shot.getAttribute('cx');
        let cy = shot.getAttribute('cy');
        shot.setAttributeNS(null, 'cx', (cx - 150)*prev/cur + 150);
        shot.setAttributeNS(null, 'cy', 150 - (150 - cy)*prev/cur);
    });
    prev = cur;
}

function moveDot(prev){
    let cur = 1;
    let shots = document.querySelectorAll(".shot")
    let cx = shots.item(shots.length-1).getAttribute('cx');
    let cy = shots.item(shots.length-1).getAttribute('cy');
    console.log(shots);
    console.log(cx, cy);
    shots.item(shots.length-1).setAttributeNS(null, 'cx', (cx - 150)*prev/cur + 150);
    shots.item(shots.length-1).setAttributeNS(null, 'cy', 150 - (150 - cy)*prev/cur);
}
