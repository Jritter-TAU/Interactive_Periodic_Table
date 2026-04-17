

const rep_canvas = document.getElementById('rep_canvas');
const ctx = rep_canvas.getContext('2d');
const MassNum = document.getElementById('MassNumValue');
    MassNumValue.onchange = ()=> {m = MassNumValue.value; 
    ctx.clearRect(0, 0, rep_canvas.width, rep_canvas.height);
    s = 1;
    a = 6;
    drawShit(m);
    }
/*    const AtomicNum = document.getElementById('AtomicNumValue');    
    AtmoicNumValue.onchange = ()=> {a = AtomicNumValue.value; 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    s = 1;
    drawShit(m);
    }
*/ 
const color_picker = document.getElementById("color_picker");
     color_picker.onchange = ()=> rep_canvas.style.backgroundColor = color_picker.value;

const color_picker_draw = document.getElementById("color_picker_draw");
     color_picker_draw.onchange = ()=> bouncing_circle.color = color_picker_draw.value;
//const circ_rad = document.getElementById('circ_rad');
//circ_rad.onchange = () => bouncing_circle.radius = circ_rad.value;

// Set Particles
m = 12;
// m should = atomic mass
a = 6;
// a should = atomic number
const nr = 8;
const sr = 16;
let s = 1;
let x = 8;
let y = 8;
function drawShit(m){
    let I = 0
    while ( m > 0 ) {
    let n = Math.min (Math.floor (Math.PI * s * sr / nr), m) 
    let theta = 2 * Math.PI / n
    for (let i = 0; i < n; i++) {
    let x1 = 320 + s * sr * Math.cos(theta * i)
    let y1 = 320 + s * sr * Math.sin(theta * i) 
    
    const neutron = {
    x: x1, 
    y: y1,
    radius: 8,
    color: "blue"
    }
    if (a > 0) {
        if (I % 2 == 0) {
            neutron.color = 'red'
            a -= 1}
            else {
            neutron.color = 'blue' }}
    else {
        neutron.color = 'blue' 
         }
        drawCircleObj(neutron)
         I += 1
    }       
s += 1
m -= n
}
}
function drawCircleObj(obj) {
    ctx.fillStyle = obj.color;
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI*2);
    ctx.fill();
}
drawCircleObj(x, y)
drawShit(m)
