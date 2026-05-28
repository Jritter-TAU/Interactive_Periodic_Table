const rep_canvas = document.getElementById('rep_canvas');
let info = document.getElementById('info');
const ctx_model = rep_canvas.getContext('2d');
// Set Particles
m = 12;
// m should = atomic mass
a = 6;
// a should = atomic number
const nr = 4;
const sr = 8;
let s = 1;
let x = 8;
let y = 8;
function drawShit(m) {
    let drawn_particles = 0
    while ( m > 0 ) {
    let n = Math.min (Math.floor (Math.PI * s * sr / nr), m) 
    let theta = 2 * Math.PI / n
    for (let i = 0; i < n; i++) {
    let x1 = 320 + s * sr * Math.cos(theta * i)
    let y1 = 320 + s * sr * Math.sin(theta * i) 
    
    const neutron = {
    x: x1, 
    y: y1,
    radius: 4,
    color: "blue"
}
let a1 = a;    
if (a1 > 0) {
        
        if (drawn_particles % 2 == 0) {
            neutron.color = 'red'
            a1 -= 1}
            else {
            neutron.color = 'blue' }
               }

    else {
        neutron.color = 'blue' 
         }
        drawCircleObj(neutron)
         drawn_particles += 1
}       
s += 1
m -= n
}

}
function drawCircleObj(obj) {
    ctx_model.fillStyle = obj.color;
    ctx_model.beginPath();
    ctx_model.arc(obj.x, obj.y, obj.radius, 0, Math.PI*2);
    ctx_model.fill();
}
//number of electrons
//electron in question
let electx = 1;
let electY = 1;

const electron = {
    x: electx,
    y: electY,
    radius: 1,
    color: 'pink'
}

//code for how the electron behaves
function makeElectObj(obj, r) {
    let theta = Math.random()*2*(Math.PI);
    obj.x = (r*Math.cos(theta)+320);
    obj.y = (r*Math.sin(theta)+320);
    ctx_model.fillStyle = obj.color;
    ctx_model.beginPath();
    ctx_model.arc(obj.x, obj.y, obj.radius, 0, Math.PI*2);
    ctx_model.arc(obj.x, obj.y, obj.radius, 0, Math.PI*2);
    ctx_model.fill();

}
//code for making electrons
function makeShells(a){
    m1 = 2;
    se = 1;
    n1 = 0;
    for (let x = 0; x<a; x++){
    
        r = ((Math.random() * 10 + (20*se)) + (s*10));
        makeElectObj(electron, r);
        n1++;

        if (n1 >= m1) {
            m1 += 4;
            se += 1;
            n1 = 0;
            electron.color = electron.color == 'pink' ? 'cyan' : 'pink';
        }

    }
    electron.color = 'pink';
}


//text info for each element, to be displayed when the page is loaded. Will be added to as more elements are added.
const infoText = [
    "This is not to scale, a real neucleus is about 100,000 times smaller than the atom. And electrons are 'point particles' with no size at all.",
    "The shells are not actually circular, they are more like clouds of probability. The electrons are not actually orbiting the nucleus, they are more like standing waves around the nucleus.",
    "The colors of the electrons are not actually pink and cyan, they are just a visual representation to help differentiate between the shells.",
    "This is a very simplified model of an atom, there are many more subatomic particles and interactions that are not represented here."
]
//function to display the text info for each element, to be called when the page is loaded. Will be added to as more elements are added.
function makeInfo(){
    n1 = Math.floor(Math.random()*4);
    info.innerHTML = "Fun Fact: " + infoText[n1];
}


//full animation loop
function drawLoop() {
    //Clear canvas
        ctx_model.clearRect(0, 0, rep_canvas.width, rep_canvas.height);

    //Update objects

    drawShit(m)
    makeShells(a);

    //Draw objects

    //Call drawLoop
    
    requestAnimationFrame(drawLoop);
    s = 1
    drawn_particles = 0
    const MassNum = sessionStorage.getItem('mass')
    const AtomicNum = sessionStorage.getItem('num')
    m = parseInt(MassNum)
    a = parseInt(AtomicNum)
}
function ShowAtom(a, m) {
    makeInfo();
    drawLoop(); 
}
// Iniitial call to loop to start program
//makeInfo();

//drawLoop();
ShowAtom(a, m)

