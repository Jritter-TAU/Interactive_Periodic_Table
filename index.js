const canvas = document.getElementById('canvas');
let info = document.getElementById('info');
const ctx = canvas.getContext('2d');
//number of electrons
let atomicNum = 7;
//electron in question
let electX = 1;
let electY = 1;

const electron = {
    x: electX,
    y: electY,
    radius: 6,
    color: 'pink'
}

//code for how the electron behaves
function makeElectObj(obj, r) {
    let theta = Math.random()*2*(Math.PI);
    obj.x = (r*Math.cos(theta)+160);
    obj.y = (r*Math.sin(theta)+160);
    ctx.fillStyle = obj.color;
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI*2);
    ctx.fill();

}
//code for making electrons
function makeShells(atomicNum){
    m = 2;
    s = 1;
    n = 0;
    for (let x = 0; x<atomicNum; x++){
    
        r =  (Math.random()*25)+(55*s);
        makeElectObj(electron, r);
        n++;

        if (n >= m) {
            m += 4;
            s += 1;
            n = 0;
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
    n = Math.floor(Math.random()*4);
    info.innerHTML = "Fun Fact: " + infoText[n];
}


//full animation loop
function drawLoop() {
    //Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Update objects

    makeShells(atomicNum);
    

    //Draw objects


    //Call drawLoop
    requestAnimationFrame(drawLoop);
}

// Iniitial call to loop to start program
makeInfo();
drawLoop();
