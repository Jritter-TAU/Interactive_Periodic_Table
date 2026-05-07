const elementsText = `
Name,Number,Symbol,Mass,Boil,Melt,Density Vapour,Fusion,0,
Hydrogen,1,H,1.01,20.46,13.96,71,0.45,0.06,
Helium,2,He,4.00,4.26,3.46,126,0.08,0.02,
Lithium,3,Li,6.94,1603.16,453.66,530,136.01,3.02,
Beryllium,4,Be,9.01,3043.16,1550.16,1850,309.46,11.73,
Boron,5,B,10.81,2303.16,2340,536.01,22.19,0,
Carbon,6,C,12.01,5103.16,4000.16,2260,719.01,0,
Nitrogen,7,N,14.01,77.36,63.16,810,2.79,0.36,
Oxygen,8,O,16.00,90.16,54.36,1140,3.41,0.22,
Fluorine,9,F,19.00,84.96,53.56,1505,3.16,0.26,
Neon,10,Ne,20.18,27.16,24.56,1200,1.77,0.34,
Sodium,11,Na,22.99,1165.16,370.96,970,101.01,2.60,
Magnesium,12,Mg,24.31,1380.16,923.16,1740,136.17,8.96,
Aluminum,13,Al,26.98,2723.16,933.16,2700,284.34,10.68,
Silicon,14,Si,28.09,2953.16,1683.16,2330,170.02,46.48,
Phosphorus,15,P,30.98,553,317.2,0,0,0,
Sulfur,16,S,32.06,717.76,392.16,2070,12.60,1.42,
Chlorine,17,Cl,35.45,238.46,172.16,1560,10.22,3.22,
Argon,18,Ar,39.95,87.36,83.76,1400,6.53,1.18,
Potassium,19,K,39.10,1033.16,336.86,860,79.15,2.30,
Calcium,20,Ca,40.08,1713.16,1111.16,1550,153.85,8.79,
Scandium,21,Sc,44.96,3003.16,1812.16,3000,339.20,15.91,
Titanium,22,Ti,47.90,3533.16,1941.16,4510,445.98,15.49,
Vanadium,23,V,50.94,3723.16,2173.16,6100,443.89,17.59,
Chromium,24,Cr,52.00,2938.16,2148.16,7190,305.57,13.82,
Manganese,25,Mn,54.94,2423.16,1518.16,7430,224.87,14.66,
Iron,26,Fe,55.85,3273.16,1809.16,7860,354.27,15.37,
Cobalt,27,Co,58.93,3173.16,1768.16,8900,389.45,15.24,
Nickel,28,Ni,58.71,3003.16,1726.16,8900,381.07,17.63,
Copper,29,Cu,63.54,2868.16,1356.16,8960,304.86,13.02,
Zinc,30,Zn,65.37,1179.16,692.66,7140,114.74,7.37,
Gallium,31,Ga,69.72,2510.16,302.96,5910,,5.61,
Germanium,32,Ge,72.59,3103.16,1210.56,5320,284.76,31.83,
Arsenic,33,As,74.99,886.16,1090.16,5720,32.45,27.72,
Selenium,34,Se,78.96,958.16,490.16,4790,13.99,5.23,
Bromine,35,Br,79.91,331.16,265.96,3120,14.99,5.28,
Krypton,36,Kr,83.80,121.16,115.86,2600,9.05,1.63,
Rubidium,37,Rb,85.47,961.16,312.06,1530,75.80,2.30,
Strontium,38,Sr,87.62,1653.16,1041.16,2600,141.54,8.79,
Yttrium,39,Y,88.91,3611,1799.15,0,0,0,
Zirconium,40,Zr,91.22,3853.16,2125.16,6490,502.51,16.75,
Niobium,41,Nb,92.91,3573.16,2741.16,8400,,26.80,
Molybdenum,42,Mo,95.94,5833.16,2883.16,10200,536.01,27.64,
Technetium,43,Tc,96.91,4538,2477,0,0,0,
Ruthenium,44,Ru,101.07,5173.16,2773.16,12200,619.77,25.54,
Rhodium,45,Rh,102.90,4773.16,2239.16,12400,531.83,21.78,
Palladium,46,Pd,106.40,4253.16,1825.16,12000,376.88,16.75,
Silver,47,Ag,107.87,2483.16,1233.96,10500,254.19,11.31,
Cadmium,48,Cd,112.40,1038.16,594.06,8650,100.08,6.11,
Indium,49,In,114.82,2273.16,429.36,7310,224.87,3.27,
Tin,50,Sn,118.69,2543.16,505.06,7300,293.13,7.20,
Antimony,51,Sb,121.75,1653.16,903.66,6620,195.14,19.85,
Tellurium,52,Te,127.60,1261,722.66,0,0,0,
Iodine,53,I,126.90,456.16,386.86,4940,21.78,7.83,
Xenon,54,Xe,131.30,165.16,161.26,3060,12.65,2.30,
Cesium,55,Cs,132.90,963.16,301.86,1900,68.26,2.09,
Barium,56,Ba,137.34,1913.16,987.16,3500,149.50,7.66,
Lanthanum,57,La,138.91,3743.16,1193.16,6170,402.01,6.28,
Cerium,58,Ce,140.12,3741.16,1068.16,6670,397.82,5.03,
Praseodymium,59,Pr,140.91,3400.16,1208.16,6770,330.82,6.70,
Neodymium,60,Nd,144.24,3300.16,1297.16,7000,288.94,7.12,
Promethium,61,Pm,144.91,3273,1315,0,0,0,
Samarium,62,Sm,150.35,2173.16,1345.16,7540,192.63,8.79,
Europium,63,Eu,151.96,1712.16,1099.16,5260,175.88,9.21,
Gadolinium,64,Gd,157.25,3273.16,1585.16,7890,301.51,15.49,
Terbium,65,Tb,158.92,3073.16,1629.16,8270,293.13,16.33,
Dysprosium,66,Dy,162.50,2873.16,1680.16,8540,280.57,17.17,
Holmium,67,Ho,164.93,2873.16,1734.16,8800,280.57,17.17,
Erbium,68,Er,167.26,3173.16,1770.16,9050,280.57,17.17,
Thulium,69,Tm,168.93,2000.16,1818.16,9330,247.07,18.43,
Ytterbium,70,Yb,173.04,1700.16,1097.16,6980,159.13,7.54,
Lutetium,71,Lu,174.97,3600.16,1925.16,9840,376.88,19.26,
Hafnium,72,Hf,178.49,5673.16,2495.16,13100,649.08,21.78,
Tantalum,73,Ta,180.95,5698.16,3269.16,16600,753.77,28.48,
Tungsten,74,W,183.85,6203.16,3683.16,19300,774.71,33.71,
Rhenium,75,Re,186.20,6173.16,3453.16,21000,636.52,33.08,
Osmium,76,Os,190.20,5773.16,3273.16,22600,678.39,26.80,
Iridium,77,Ir,192.22,4701.15,2719.15,0,0,0,
Platinum,78,Pt,195.09,4803.16,2042.16,21400,510.89,19.68,
Gold,79,Au,196.97,3243.16,1336.16,19300,342.55,12.69,
Mercury,80,Hg,200.59,630.16,234.76,13600,58.21,2.35,
Thallium,81,Tl,204.37,1730.16,576.16,11850,162.48,4.27,
Lead,82,Pb,207.19,1998.16,600.56,11400,176.72,5.11,
Bismuth,83,Bi,208.98,1833.16,544.46,9800,178.81,10.89,
Polonium,84,Po,208.98,1235.15,527.15,0,0,0,
Astatine,85,At,209.99,610,575,0,0,0,
Radon,86,Rn,222.02,211.45,202.15,0,0,0,
Francium,87,Fr,223.02,950,300.15,0,0,0,
Radium,88,Ra,226.00,973.16,5000,114.74,10.05,0,
Actinium,89,Ac,227.03,3470,1323.15,0,0,0,
Thorium,90,Th,232.04,4123.16,2023.16,11700,19.26,0,
Protactinium,91,Pa,231.04,4273.15,1841.15,0,0,0,
Uranium,92,U,238.03,4091.16,1405.16,19070,460.64,11.31,
Neptunium,93,Np,237.00,910.16,19500,394.89,0,0,
Plutonium,94,Pu,242.00,3508.16,913.16,365.16,0,0,
Americium,95,Am,243.06,2880,1449.15,0,0,0,
Curium,96,Cm,247.07,3383,1620,0,0,0,
Berkelium,97,Bk,247.07,2900.15,1258,0,0,0,
Californium,98,Cf,251.08,1745.15,1172,,,,
Einsteinium,99,Es,254.09,N/A,N/A,,,,
Fermium,100,Fm,257.10,N/A,N/A,,,,
Mendelevium,101,Md,257.10,N/A,N/A,,,,
Nobelium,102,No,255.09,N/A,N/A,,,,
Lawrencium,103,Lr,256.10,N/A,N/A,,,,
Rutherfordium,104,Rf,261.11,N/A,N/A,,,,
Dubnium,105,Db,262.11,N/A,N/A,,,,
Seaborgium,106,Sg,266.12,N/A,N/A,,,,
Bohrium,107,Bh,264.12,N/A,N/A,,,,
Hassium,108,Hs,269.13,N/A,N/A,,,,
Meitnerium,109,Mt,268.13,N/A,N/A,,,,
Darmstadtium,110,Ds,271.13,N/A,N/A,,,,
Roentgenium,111,Rg,272.13,N/A,N/A,,,,
Copernicium,112,Cn,285.17,N/A,N/A,,,,
Nihonium,113,Nh,286.15,N/A,N/A,,,,
Flerovium,114,Fl,289.19,N/A,N/A,,,,
Moscovium,115,Mc,288.16,N/A,N/A,,,,
Livermorium,116,Lv,293.20,N/A,N/A,,,,
Tennessine,117,Ts,294.21,N/A,N/A,,,,
Oganesson,118,Og,294.21,N/A,N/A,,,,
`

const boil = document.getElementById('boil');
const electrons = document.getElementById('electrons');
const mass = document.getElementById('mass');
const melt = document.getElementById('melt');
const Name = document.getElementById('name');
const number = document.getElementById('number');
const protons = document.getElementById('protons');
const symbol = document.getElementById('symbol');
const Hydrogen = document.getElementById('Hydrogen');

const vals = elementsText.split(",");
const elementsObj = {};
for (let i=9; i<vals.length; i+=9){
    const NAME = vals[i];
    const number = vals[i+1];
    const symbol = vals[i+2];
    const mass = vals[i+3];
    const boil = vals[i+4];
    const melt = vals[i+5];
    const electrons = number;
    const protons = number;
    elementsObj[number] = {
        NAME, number, symbol, mass, boil, melt, electrons, protons
    }
}

function displayInfo(z) {
    Name.innerText = 'NAME: ';
    number.innerText = 'NUMBER: ';
    symbol.innerText = 'SYMBOL: ';
    mass.innerText = 'MASS: ';
    boil.innerText = 'BOIL: ';
    melt.innerText = 'MELT: ';
    electrons.innerText = 'ELECTRONS: ';
    protons.innerText = 'PROTONS: ';

    Name.textContent = Name.innerText + ' ' + z.NAME;
    number.textContent = number.innerText + ' ' + z.number;
    symbol.textContent = symbol.innerText + ' ' + z.symbol;
    mass.textContent = mass.innerText + ' ' + z.mass;
    boil.textContent = boil.innerText + ' ' + z.boil;
    melt.textContent = melt.innerText + ' ' + z.melt;
    electrons.textContent = electrons.innerText + ' ' + z.electrons;
    protons.textContent = protons.innerText + ' ' + z.protons;
}

//row 1

const H = {
    x: 10,
    y: 10,
    w: 40,
    h: 40,
    mass: 1.0078,
    num: 1,
    type: 'reactive nonmetal'
}
const He = {
    x: 775,
    y: 10,
    w: 40,
    h: 40,
    mass: 4.0026,
    num: 2,
    type: 'nobel gas'
}

//row 2

const Li = {
    x: 10,
    y: 55,
    w: 40,
    h: 40,
    mass: 6.9410,
    num: 3,
    type: 'alkali metal'

}
const Be = {
    x: 55,
    y: 55,
    w: 40,
    h: 40,
    mass: 9.0122,
    num: 4,
    type: 'alkaline earth metal'

}
const B = {
    x: 550,
    y: 55,
    w: 40,
    h: 40,
    mass: 10.811,
    num: 5,
    type: 'metalloid'

}
const C = {
    x: 595,
    y: 55,
    w: 40,
    h: 40,
    mass: 12.0107,
    num: 6,
    type: 'reactive nonmetal'

}
const N = {
    x: 640,
    y: 55,
    w: 40,
    h: 40,
    mass: 14.0067,
    num: 7,
    type: 'reactive nonmetal'

}
const O = {
    x: 685,
    y: 55,
    w: 40,
    h: 40,
    mass: 15.9994,
    num: 8,
    type: 'reactive nonmetal'

}
const F = {
    x: 730,
    y: 55,
    w: 40,
    h: 40,
    mass: 18.9984,
    num: 9,
    type: 'reactive nonmetal'

}
const Ne = {
    x: 775,
    y: 55,
    w: 40,
    h: 40,
    mass: 20.1797,
    num: 10,
    type: 'nobel gas'

}

//row 3

const Na = {
    x: 10,
    y: 100,
    w: 40,
    h: 40,
    mass: 22.9897,
    num: 11,
    type: 'alkali metal'

}
const Mg = {
    x: 55,
    y: 100,
    w: 40,
    h: 40,
    mass: 24.3050,
    num: 12,
    type: 'alkaline earth metal'

}
const Al = {
    x: 550,
    y: 100,
    w: 40,
    h: 40,
    mass: 26.9815,
    num: 13,
    type: 'post-transition metal'

}
const Si = {
    x: 595,
    y: 100,
    w: 40,
    h: 40,
    mass: 28.0855,
    num: 14,
    type: 'metaloid'

}
const P = {
    x: 640,
    y: 100,
    w: 40,
    h: 40,
    mass: 30.9738,
    num: 15,
    type: 'reactive nonmetal'

}
const S = {
    x: 685,
    y: 100,
    w: 40,
    h: 40,
    mass: 32.065,
    num: 16,
    type: 'reactive nonmetal'

}
const Cl = {
    x: 730,
    y: 100,
    w: 40,
    h: 40,
    mass: 35.453,
    num: 17,
    type: 'reactive nonmetal'

}
const Ar = {
    x: 775,
    y: 100,
    w: 40,
    h: 40,
    mass: 39.948,
    num: 18,
    type: 'nobel gas'

}

//row 4

const K = {
    x: 10,
    y: 145,
    w: 40,
    h: 40,
    mass: 39.0983,
    num: 19,
    type: 'alkali metal'

}
const Ca = {
    x: 55,
    y: 145,
    w: 40,
    h: 40,
    mass: 40.078,
    num: 20,
    type: 'alkaline earth metal'

}
const Sc = {
    x: 100,
    y: 145,
    w: 40,
    h: 40,
    mass: 44.9559,
    num: 21,
    type: 'transition metal'

}
const Ti = {
    x: 145,
    y: 145,
    w: 40,
    h: 40,
    mass: 47.867,
    num: 22,
    type: 'transition metal'

}
const V = {
    x: 190,
    y: 145,
    w: 40,
    h: 40,
    mass: 50.9415,
    num: 23,
    type: 'transition metal'

}
const Cr = {
    x: 235,
    y: 145,
    w: 40,
    h: 40,
    mass: 51.9961,
    num: 24,
    type: 'transition metal'

}
const Mn = {
    x: 280,
    y: 145,
    w: 40,
    h: 40,
    mass: 54.938,
    num: 25,
    type: 'transition metal'

}
const Fe = {
    x: 325,
    y: 145,
    w: 40,
    h: 40,
    mass: 55.845,
    num: 26,
    type: 'transition metal'

}
const Co = {
    x: 370,
    y: 145,
    w: 40,
    h: 40,
    mass: 58.9332,
    num: 27,
    type: 'transition metal'

}
const Ni = {
    x: 415,
    y: 145,
    w: 40,
    h: 40,
    mass: 58.6934,
    num: 28,
    type: 'transition metal'

}
const Cu = {
    x: 460,
    y: 145,
    w: 40,
    h: 40,
    mass: 63.546,
    num: 29,
    type: 'transition metal'

}
const Zn = {
    x: 505,
    y: 145,
    w: 40,
    h: 40,
    mass: 65.380,
    num: 30,
    type: 'transition metal'

}
const Ga = {
    x: 550,
    y: 145,
    w: 40,
    h: 40,
    mass: 69.723,
    num: 31,
    type: 'post-transition metal'

}
const Ge = {
    x: 595,
    y: 145,
    w: 40,
    h: 40,
    mass: 72.630,
    num: 32,
    type: 'metaloid'

}
const As = {
    x: 640,
    y: 145,
    w: 40,
    h: 40,
    mass: 74.992,
    num: 33,
    type: 'metaloid'

}
const Se = {
    x: 685,
    y: 145,
    w: 40,
    h: 40,
    mass: 78.963,
    num: 34,
    type: 'reactive nonmetal'

}
const Br = {
    x: 730,
    y: 145,
    w: 40,
    h: 40,
    mass: 79.904,
    num: 35,
    type: 'reactive nonmetal'

}
const Kr = {
    x: 775,
    y: 145,
    w: 40,
    h: 40,
    mass: 83.798,
    num: 36,
    type: 'nobel gas'
}

//row 5

const Rb = {
    x: 10,
    y: 190,
    w: 40,
    h: 40,
    mass: 85.4678,
    num: 37,
    type: 'alkali metal'

}
const Sr = {
    x: 55,
    y: 190,
    w: 40,
    h: 40,
    mass: 87.62,
    num: 38,
    type: 'alkaline earth metal'

}
const Y = {
    x: 100,
    y: 190,
    w: 40,
    h: 40,
    mass: 88.9059,
    num: 39,
    type: 'transition metal'

}
const Zr = {
    x: 145,
    y: 190,
    w: 40,
    h: 40,
    mass: 91.224,
    num: 40,
    type: 'transition metal'

}
const Nb = {
    x: 190,
    y: 190,
    w: 40,
    h: 40,
    mass: 92.9064,
    num: 41,
    type: 'transition metal'

}
const Mo = {
    x: 235,
    y: 190,
    w: 40,
    h: 40,
    mass: 95.95,
    num: 42,
    type: 'transition metal'

}
const Tc = {
    x: 280,
    y: 190,
    w: 40,
    h: 40,
    mass: 98.906,
    num: 43,
    type: 'transition metal'

}
const Ru = {
    x: 325,
    y: 190,
    w: 40,
    h: 40,
    mass: 101.07,
    num: 44,
    type: 'transition metal'

}
const Rh = {
    x: 370,
    y: 190,
    w: 40,
    h: 40,
    mass: 102.9055,
    num: 45,
    type: 'transition metal'

}
const Pd = {
    x: 415,
    y: 190,
    w: 40,
    h: 40,
    mass: 106.42,
    num: 46,
    type: 'transition metal'

}
const Ag = {
    x: 460,
    y: 190,
    w: 40,
    h: 40,
    mass: 107.8682,
    num: 47,
    type: 'transition metal'

}
const Cd = {
    x: 505,
    y: 190,
    w: 40,
    h: 40,
    mass: 112.414,
    num: 48,
    type: 'transition metal'

}
const In = {
    x: 550,
    y: 190,
    w: 40,
    h: 40,
    mass: 114.818,
    num: 49,
    type: 'post-transition metal'

}
const Sn = {
    x: 595,
    y: 190,
    w: 40,
    h: 40,
    mass: 118.710,
    num: 50,
    type: 'post-transition metal'

}
const Sb = {
    x: 640,
    y: 190,
    w: 40,
    h: 40,
    mass: 121.760,
    num: 51,
    type: 'metaloid'

}
const Te = {
    x: 685,
    y: 190,
    w: 40,
    h: 40,
    mass: 127.60,
    num: 52,
    type: 'metaloid'

}
const I = {
    x: 730,
    y: 190,
    w: 40,
    h: 40,
    mass: 126.9045,
    num: 53,
    type: 'reactive nonmetal'

}
const Xe = {
    x: 775,
    y: 190,
    w: 40,
    h: 40,
    mass: 131.293,
    num: 54,
    type: 'nobel gas'
}

//row 6

const Cs = {
    x: 10,
    y: 235,
    w: 40,
    h: 40,
    mass: 132.9055,
    num: 55,
    type: 'alkali metal'

}
const Ba = {
    x: 55,
    y: 235,
    w: 40,
    h: 40,
    mass: 137.327,
    num: 56,
    type: 'alkaline earth metal'

}
const La = {
    x: 100,
    y: 235,
    w: 40,
    h: 40,
    mass: 138.9055,
    num: 57,
    type: 'lanthanide'

}
const Hf = {
    x: 145,
    y: 235,
    w: 40,
    h: 40,
    mass: 178.49,
    num: 72,
    type: 'transition metal'

}
const Ta = {
    x: 190,
    y: 235,
    w: 40,
    h: 40,
    mass: 180.9479,
    num: 73,
    type: 'transition metal'

}
const W = {
    x: 235,
    y: 235,
    w: 40,
    h: 40,
    mass: 183.84,
    num: 74,
    type: 'transition metal'

}
const Re = {
    x: 280,
    y: 235,
    w: 40,
    h: 40,
    mass: 186.207,
    num: 75,
    type: 'transition metal'

}
const Os = {
    x: 325,
    y: 235,
    w: 40,
    h: 40,
    mass: 190.23,
    num: 76,
    type: 'transition metal'

}
const Ir = {
    x: 370,
    y: 235,
    w: 40,
    h: 40,
    mass: 192.217,
    num: 77,
    type: 'alkali metal'

}
const Pt = {
    x: 415,
    y: 235,
    w: 40,
    h: 40,
    mass: 195.084,
    num: 78,
    type: 'transition metal'

}
const Au = {
    x: 460,
    y: 235,
    w: 40,
    h: 40,
    mass: 196.9665,
    num: 79,
    type: 'transition metal'

}
const Hg = {
    x: 505,
    y: 235,
    w: 40,
    h: 40,
    mass: 200.59,
    num: 80,
    type: 'transition metal'

}
const Tl = {
    x: 550,
    y: 235,
    w: 40,
    h: 40,
    mass: 204.383,
    num: 81,
    type: 'post-transition metal'

}
const Pb = {
    x: 595,
    y: 235,
    w: 40,
    h: 40,
    mass: 207.2,
    num: 82,
    type: 'post-transition metal'

}
const Bi = {
    x: 640,
    y: 235,
    w: 40,
    h: 40,
    mass: 208.9804,
    num: 83,
    type: 'post-transition metal'

}
const Po = {
    x: 685,
    y: 235,
    w: 40,
    h: 40,
    mass: 209.9871,
    num: 84,
    type: 'post-transition metal'

}
const At = {
    x: 730,
    y: 235,
    w: 40,
    h: 40,
    mass: 209.9871,
    num: 85,
    type: 'post-transition metal'

}
const Rn = {
    x: 775,
    y: 235,
    w: 40,
    h: 40,
    mass: 222.018,
    num: 86,
    type: 'nobel gas'
}

//row 7

const Fr = {
    x: 10,
    y: 280,
    w: 40,
    h: 40,
    mass: 223.0197,
    num: 87,
    type: 'alkali metal'

}
const Ra = {
    x: 55,
    y: 280,
    w: 40,
    h: 40,
    mass: 226.0254,
    num: 88,
    type: 'alkaline earth metal'

}
const Ac = {
    x: 100,
    y: 280,
    w: 40,
    h: 40,
    mass: 227.0278,
    num: 89,
    type: 'actinide'

}
const Rf = {
    x: 145,
    y: 280,
    w: 40,
    h: 40,
    mass: 267.000,
    num: 104,
    type: 'transition metal'

}
const Db = {
    x: 190,
    y: 280,
    w: 40,
    h: 40,
    mass: 262.000,
    num: 105,
    type: 'transition metal'

}
const Sg = {
    x: 235,
    y: 280,
    w: 40,
    h: 40,
    mass: 269.000,
    num: 106,
    type: 'transition metal'

}
const Bh = {
    x: 280,
    y: 280,
    w: 40,
    h: 40,
    mass: 264.000,
    num: 107,
    type: 'transition metal'

}
const Hs = {
    x: 325,
    y: 280,
    w: 40,
    h: 40,
    mass: 269.000,
    num: 108,
    type: 'transition metal'

}
const Mt = {
    x: 370,
    y: 280,
    w: 40,
    h: 40,
    mass: 268.000,
    num: 109,
    type: 'unknown'

}
const Ds = {
    x: 415,
    y: 280,
    w: 40,
    h: 40,
    mass: 281.000,
    num: 110,
    type: 'unknown'

}
const Rg = {
    x: 460,
    y: 280,
    w: 40,
    h: 40,
    mass: 282.000,
    num: 111,
    type: 'unknown'

}
const Cn = {
    x: 505,
    y: 280,
    w: 40,
    h: 40,
    mass: 285.000,
    num: 112,
    type: 'unknown'

}
const Nh = {
    x: 550,
    y: 280,
    w: 40,
    h: 40,
    mass: 286.000,
    num: 113,
    type: 'unknown'

}
const Fl = {
    x: 595,
    y: 280,
    w: 40,
    h: 40,
    mass: 289.000,
    num: 114,
    type: 'unknown'

}
const Mc = {
    x: 640,
    y: 280,
    w: 40,
    h: 40,
    mass: 289.000,
    num: 115,
    type: 'unknown'

}
const Lv = {
    x: 685,
    y: 280,
    w: 40,
    h: 40,
    mass: 293.000,
    num: 116,
    type: 'unknown'

}
const Ts = {
    x: 730,
    y: 280,
    w: 40,
    h: 40,
    mass: 294.000,
    num: 117,
    type: 'unknown'

}
const Og = {
    x: 775,
    y: 280,
    w: 40,
    h: 40,
    mass: 294.000,
    num: 118,
    type: 'unknown'
}

//row 8

const Ce = {
    x: 145,
    y: 345,
    w: 40,
    h: 40,
    mass: 140.116,
    num: 58,
    type: 'lanthanide'

}
const Pr = {
    x: 190,
    y: 345,
    w: 40,
    h: 40,
    mass: 140.9076,
    num: 59,
    type: 'lanthanide'

}
const Nd = {
    x: 235,
    y: 345,
    w: 40,
    h: 40,
    mass: 144.242,
    num: 60,
    type: 'lanthanide'

}
const Pm = {
    x: 280,
    y: 345,
    w: 40,
    h: 40,
    mass: 145.000,
    num: 61,
    type: 'lanthanide'

}
const Sm = {
    x: 325,
    y: 345,
    w: 40,
    h: 40,
    mass: 150.36,
    num: 62,
    type: 'lanthanide'

}
const Eu = {
    x: 370,
    y: 345,
    w: 40,
    h: 40,
    mass: 151.964,
    num: 63,
    type: 'lanthanide'

}
const Gd = {
    x: 370,
    y: 345,
    w: 40,
    h: 40,
    mass: 157.25,
    num: 64,
    type: 'lanthanide'

}
const Tb = {
    x: 415,
    y: 345,
    w: 40,
    h: 40,
    mass: 158.9253,
    num: 65,
    type: 'lanthanide'

}
const Dy = {
    x: 460,
    y: 345,
    w: 40,
    h: 40,
    mass: 162.500,
    num: 66,
    type: 'alkali metal'

}
const Ho = {
    x: 505,
    y: 345,
    w: 40,
    h: 40,
    mass: 164.9303,
    num: 67,
    type: 'lanthanide'

}
const Er = {
    x: 550,
    y: 345,
    w: 40,
    h: 40,
    mass: 167.259,
    num: 68,
    type: 'lanthanide'

}
const Tm = {
    x: 595,
    y: 345,
    w: 40,
    h: 40,
    mass: 168.9342,
    num: 69,
    type: 'lanthanide'

}
const Yb = {
    x: 640,
    y: 345,
    w: 40,
    h: 40,
    mass: 173.04,
    num: 70,
    type: 'lanthanide'

}
const Lu = {
    x: 685,
    y: 345,
    w: 40,
    h: 40,
    mass: 174.967,
    num: 71,
    type: 'lanthanide'

}

//row 9

const Th = {
    x: 145,
    y: 390,
    w: 40,
    h: 40,
    mass: 232.0381,
    num: 90,
    type: 'actinide'

}
const Pa = {
    x: 190,
    y: 390,
    w: 40,
    h: 40,
    mass: 231.0359,
    num: 91,
    type: 'actinide'

}
const U = {
    x: 235,
    y: 390,
    w: 40,
    h: 40,
    mass: 238.0289,
    num: 92,
    type: 'actinide'

}
const Np = {
    x: 280,
    y: 390,
    w: 40,
    h: 40,
    mass: 237.048,
    num: 93,
    type: 'actinide'

}
const Pu = {
    x: 325,
    y: 390,
    w: 40,
    h: 40,
    mass: 244.0642,
    num: 94,
    type: 'actinide'

}
const Am = {
    x: 370,
    y: 390,
    w: 40,
    h: 40,
    mass: 243.0614,
    num: 95,
    type: 'actinide'

}
const Cm = {
    x: 370,
    y: 390,
    w: 40,
    h: 40,
    mass: 247.0703,
    num: 96,
    type: 'actinide'

}
const Bk = {
    x: 415,
    y: 390,
    w: 40,
    h: 40,
    mass: 247.0703,
    num: 97,
    type: 'actinide'

}
const Cf = {
    x: 460,
    y: 390,
    w: 40,
    h: 40,
    mass: 251.0869,
    num: 98,
    type: 'actinide'

}
const Es = {
    x: 505,
    y: 390,
    w: 40,
    h: 40,
    mass: 252.0830,
    num: 99,
    type: 'actinide'

}
const Fm = {
    x: 550,
    y: 390,
    w: 40,
    h: 40,
    mass: 257.0951,
    num: 100,
    type: 'actinide'

}
const Md = {
    x: 595,
    y: 390,
    w: 40,
    h: 40,
    mass: 258.1000,
    num: 101,
    type: 'actinide'

}
const No = {
    x: 640,
    y: 390,
    w: 40,
    h: 40,
    mass: 259.1000,
    num: 102,
    type: 'actinide'

}
const Lr = {
    x: 685,
    y: 390,
    w: 40,
    h: 40,
    mass: 262.000,
    num: 103,
    type: 'actinide'

}

const canvas = document.getElementById('table');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'gray';
ctx.fillRect(850 , 0 , 220 , 450);

//drawing the table
{
//reactive nonmetals
const style1 = getComputedStyle(document.documentElement);
const reactive_nonmetal = style1.getPropertyValue('--reactive_nonmetal').trim();
ctx.fillStyle = reactive_nonmetal;
ctx.fillRect(H.x, H.y, H.w, H.h);
ctx.fillRect(C.x, C.y, C.w, C.h);
ctx.fillRect(N.x, N.y, N.w, N.h);
ctx.fillRect(O.x, O.y, O.w, O.h);
ctx.fillRect(F.x, F.y, F.w, F.h);
ctx.fillRect(P.x, P.y, P.w, P.h);
ctx.fillRect(S.x, S.y, S.w, S.h);
ctx.fillRect(Cl.x, Cl.y, Cl.w, Cl.h);
ctx.fillRect(Se.x, Se.y, Se.w, Se.h);
ctx.fillRect(Br.x, Br.y, Br.w, Br.h);
ctx.fillRect(I.x, I.y, I.w, I.h);

//alkali metals
const style2 = getComputedStyle(document.documentElement);
const alkalai_metal = style2.getPropertyValue('--alkalai_metal').trim();
ctx.fillStyle = alkalai_metal;
ctx.fillRect(Li.x, Li.y, Li.w, Li.h);
ctx.fillRect(Na.x, Na.y, Na.w, Na.h);
ctx.fillRect(K.x, K.y, K.w, K.h);
ctx.fillRect(Rb.x, Rb.y, Rb.w, Rb.h);
ctx.fillRect(Cs.x, Cs.y, Cs.w, Cs.h);
ctx.fillRect(Fr.x, Fr.y, Fr.w, Fr.h);

//nobel gases
const style3 = getComputedStyle(document.documentElement);
const nobel_gasses = style3.getPropertyValue('--nobel_gasses').trim();
ctx.fillStyle = nobel_gasses;
ctx.fillRect(He.x, He.y, He.w, He.h);
ctx.fillRect(Ne.x, Ne.y, Ne.w, Ne.h);
ctx.fillRect(Ar.x, Ar.y, Ar.w, Ar.h);
ctx.fillRect(Kr.x, Kr.y, Kr.w, Kr.h);
ctx.fillRect(Xe.x, Xe.y, Xe.w, Xe.h);
ctx.fillRect(Rn.x, Rn.y, Rn.w, Rn.h);

//metalloids
const style4 = getComputedStyle(document.documentElement);
const metalloid = style4.getPropertyValue('--metalloid').trim();
ctx.fillStyle = metalloid;
ctx.fillRect(B.x, B.y, B.w, B.h);
ctx.fillRect(Si.x, Si.y, Si.w, Si.h); 
ctx.fillRect(Ge.x, Ge.y, Ge.w, Ge.h);
ctx.fillRect(As.x, As.y, As.w, As.h);
ctx.fillRect(Sb.x, Sb.y, Sb.w, Sb.h);
ctx.fillRect(Te.x, Te.y, Te.w, Te.h);  

//post transition metals
const style5 = getComputedStyle(document.documentElement);
const post_transition_metal = style5.getPropertyValue('--post_transition_metal').trim();
ctx.fillStyle = post_transition_metal;
ctx.fillRect(Al.x, Al.y, Al.w, Al.h);
ctx.fillRect(Ga.x, Ga.y, Ga.w, Ga.h);
ctx.fillRect(In.x, In.y, In.w, In.h);
ctx.fillRect(Sn.x, Sn.y, Sn.w, Sn.h);
ctx.fillRect(Tl.x, Tl.y, Tl.w, Tl.h);
ctx.fillRect(Pb.x, Pb.y, Pb.w, Pb.h);
ctx.fillRect(Bi.x, Bi.y, Bi.w, Bi.h);
ctx.fillRect(Po.x, Po.y, Po.w, Po.h);
ctx.fillRect(At.x, At.y, At.w, At.h);

//transition metals
const style6 = getComputedStyle(document.documentElement);
const transition_metal = style6.getPropertyValue('--transition_metal').trim();
ctx.fillStyle = transition_metal ;
ctx.fillRect(Sc.x, Sc.y, Sc.w, Sc.h);
ctx.fillRect(Ti.x, Ti.y, Ti.w, Ti.h);
ctx.fillRect(V.x, V.y, V.w, V.h);
ctx.fillRect(Cr.x, Cr.y, Cr.w, Cr.h);
ctx.fillRect(Mn.x, Mn.y, Mn.w, Mn.h);
ctx.fillRect(Fe.x, Fe.y, Fe.w, Fe.h);
ctx.fillRect(Co.x, Co.y, Co.w, Co.h);
ctx.fillRect(Ni.x, Ni.y, Ni.w, Ni.h);
ctx.fillRect(Cu.x, Cu.y, Cu.w, Cu.h);
ctx.fillRect(Zn.x, Zn.y, Zn.w, Zn.h);
ctx.fillRect(Y.x, Y.y, Y.w, Y.h);
ctx.fillRect(Zr.x, Zr.y, Zr.w, Zr.h);
ctx.fillRect(Nb.x, Nb.y, Nb.w, Nb.h);
ctx.fillRect(Mo.x, Mo.y, Mo.w, Mo.h);
ctx.fillRect(Tc.x, Tc.y, Tc.w, Tc.h);
ctx.fillRect(Ru.x, Ru.y, Ru.w, Ru.h);
ctx.fillRect(Rh.x, Rh.y, Rh.w, Rh.h);
ctx.fillRect(Pd.x, Pd.y, Pd.w, Pd.h);
ctx.fillRect(Ag.x, Ag.y, Ag.w, Ag.h);
ctx.fillRect(Cd.x, Cd.y, Cd.w, Cd.h);
ctx.fillRect(Hf.x, Hf.y, Hf.w, Hf.h);
ctx.fillRect(Ta.x, Ta.y, Ta.w, Ta.h);
ctx.fillRect(W.x, W.y, W.w, W.h);
ctx.fillRect(Re.x, Re.y, Re.w, Re.h);
ctx.fillRect(Os.x, Os.y, Os.w, Os.h);
ctx.fillRect(Ir.x, Ir.y, Ir.w, Ir.h);
ctx.fillRect(Pt.x, Pt.y, Pt.w, Pt.h);
ctx.fillRect(Au.x, Au.y, Au.w, Au.h);
ctx.fillRect(Hg.x, Hg.y, Hg.w, Hg.h);
ctx.fillRect(Rf.x, Rf.y, Rf.w, Rf.h);
ctx.fillRect(Db.x, Db.y, Db.w, Db.h);
ctx.fillRect(Sg.x, Sg.y, Sg.w, Sg.h);
ctx.fillRect(Bh.x, Bh.y, Bh.w, Bh.h);
ctx.fillRect(Hs.x, Hs.y, Hs.w, Hs.h);

//alkeline earth metals
const style7 = getComputedStyle(document.documentElement);
const alkaline_earth_metal = style7.getPropertyValue('--alkaline_earth_metal').trim();
ctx.fillStyle = alkaline_earth_metal;
ctx.fillRect(Be.x, Be.y, Be.w, Be.h);
ctx.fillRect(Mg.x, Mg.y, Mg.w, Mg.h);
ctx.fillRect(Ca.x, Ca.y, Ca.w, Ca.h);
ctx.fillRect(Sr.x, Sr.y, Sr.w, Sr.h);
ctx.fillRect(Ba.x, Ba.y, Ba.w, Ba.h);
ctx.fillRect(Ra.x, Ra.y, Ra.w, Ra.h);

//unknown properties
const style8 = getComputedStyle(document.documentElement);
const unknown_properties = style8.getPropertyValue('--unknown_properties').trim();
ctx.fillStyle = unknown_properties;
ctx.fillRect(Mt.x, Mt.y, Mt.w, Mt.h);
ctx.fillRect(Ds.x, Ds.y, Ds.w, Ds.h);
ctx.fillRect(Rg.x, Rg.y, Rg.w, Rg.h);
ctx.fillRect(Cn.x, Cn.y, Cn.w, Cn.h);
ctx.fillRect(Nh.x, Nh.y, Nh.w, Nh.h);
ctx.fillRect(Fl.x, Fl.y, Fl.w, Fl.h);
ctx.fillRect(Mc.x, Mc.y, Mc.w, Mc.h);
ctx.fillRect(Lv.x, Lv.y, Lv.w, Lv.h);
ctx.fillRect(Ts.x, Ts.y, Ts.w, Ts.h);
ctx.fillRect(Og.x, Og.y, Og.w, Og.h);

//lanthanides
const style9 = getComputedStyle(document.documentElement);
const lanthanides = style9.getPropertyValue('--lanthanides').trim();
ctx.fillStyle = lanthanides;
ctx.fillRect(La.x, La.y, La.w, La.h);
ctx.fillRect(Ce.x, Ce.y, Ce.w, Ce.h);
ctx.fillRect(Pr.x, Pr.y, Pr.w, Pr.h);
ctx.fillRect(Nd.x, Nd.y, Nd.w, Nd.h);
ctx.fillRect(Pm.x, Pm.y, Pm.w, Pm.h);
ctx.fillRect(Sm.x, Sm.y, Sm.w, Sm.h);
ctx.fillRect(Eu.x, Eu.y, Eu.w, Eu.h);
ctx.fillRect(Gd.x, Gd.y, Gd.w, Gd.h);
ctx.fillRect(Tb.x, Tb.y, Tb.w, Tb.h);
ctx.fillRect(Dy.x, Dy.y, Dy.w, Dy.h);
ctx.fillRect(Ho.x, Ho.y, Ho.w, Ho.h);
ctx.fillRect(Er.x, Er.y, Er.w, Er.h);
ctx.fillRect(Tm.x, Tm.y, Tm.w, Tm.h);
ctx.fillRect(Yb.x, Yb.y, Yb.w, Yb.h);
ctx.fillRect(Lu.x, Lu.y, Lu.w, Lu.h);

//actinides
const style10 = getComputedStyle(document.documentElement);
const actinides = style10.getPropertyValue('--actinides').trim();
ctx.fillStyle = actinides;
ctx.fillRect(Ac.x, Ac.y, Ac.w, Ac.h);
ctx.fillRect(Th.x, Th.y, Th.w, Th.h);
ctx.fillRect(Pa.x, Pa.y, Pa.w, Pa.h);
ctx.fillRect(U.x, U.y, U.w, U.h);
ctx.fillRect(Np.x, Np.y, Np.w, Np.h);
ctx.fillRect(Pu.x, Pu.y, Pu.w, Pu.h);
ctx.fillRect(Am.x, Am.y, Am.w, Am.h);
ctx.fillRect(Cm.x, Cm.y, Cm.w, Cm.h);
ctx.fillRect(Bk.x, Bk.y, Bk.w, Bk.h);
ctx.fillRect(Cf.x, Cf.y, Cf.w, Cf.h);
ctx.fillRect(Es.x, Es.y, Es.w, Es.h);
ctx.fillRect(Fm.x, Fm.y, Fm.w, Fm.h);
ctx.fillRect(Md.x, Md.y, Md.w, Md.h);
ctx.fillRect(No.x, No.y, No.w, No.h);
ctx.fillRect(Lr.x, Lr.y, Lr.w, Lr.h);
}


//click detection
const style1 = getComputedStyle(document.documentElement);
const reactive_nonmetal = style1.getPropertyValue('--reactive_nonmetal').trim();
const style2 = getComputedStyle(document.documentElement);
const alkalai_metal = style2.getPropertyValue('--alkalai_metal').trim();
const style3 = getComputedStyle(document.documentElement);
const nobel_gasses = style3.getPropertyValue('--nobel_gasses').trim();
const style4 = getComputedStyle(document.documentElement);
const metalloid = style4.getPropertyValue('--metalloid').trim();
const style5 = getComputedStyle(document.documentElement);
const post_transition_metal = style5.getPropertyValue('--post_transition_metal').trim();
const style6 = getComputedStyle(document.documentElement);
const transition_metal = style6.getPropertyValue('--transition_metal').trim();
const style7 = getComputedStyle(document.documentElement);
const alkaline_earth_metal = style7.getPropertyValue('--alkaline_earth_metal').trim();
const style8 = getComputedStyle(document.documentElement);
const unknown_properties = style8.getPropertyValue('--unknown_properties').trim();
const style9 = getComputedStyle(document.documentElement);
const lanthanides = style9.getPropertyValue('--lanthanides').trim();
const style10 = getComputedStyle(document.documentElement);
const actinides = style10.getPropertyValue('--actinides').trim();
ctx.font = '20px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

//row 1
function draw_H() {
    if (event.clientX > H.x && event.clientX < H.x + H.w && event.clientY > H.y && event.clientY < H.y + H.h) {
        H.w = 45;
        H.h = 45;
        H.x = 7.5;
        H.y = 7.5;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(H.x, H.y, H.w, H.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('H', H.x + 25, H.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('1', H.x + 5, H.y + 10);
        console.log('hovered: H');

    } 
    else {
        ctx.clearRect(H.x, H.y, H.w + 1, H.h + 1);
        H.w = 40;
        H.h = 40;
        H.x = 10;
        H.y = 10;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(H.x, H.y, H.w, H.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('H', H.x + 22.5, H.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('1', H.x + 5, H.y + 10);
}
}
function draw_He() {
    if (event.clientX > He.x && event.clientX < He.x + He.w && event.clientY > He.y && event.clientY < He.y + He.h) {
        He.w = 45;
        He.h = 45;
        He.x = 772.5;
        He.y = 7.5;
        ctx.fillStyle = nobel_gasses;
        ctx.fillRect(He.x, He.y, He.w, He.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('He', He.x + 25, He.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('2', He.x + 5, He.y + 10);
        console.log('hovered: He');

    } 
    else {
        ctx.clearRect(He.x, He.y, He.w + 1, He.h + 1);
        He.w = 40;
        He.h = 40;
        He.x = 775;
        He.y = 10;
        ctx.fillStyle = nobel_gasses;
        ctx.fillRect(He.x, He.y, He.w, He.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('He', He.x + 22.5, He.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('2', He.x + 5, He.y + 10);
}
}
//row 2
function draw_Li() {
    if (event.clientX > Li.x && event.clientX < Li.x + Li.w && event.clientY > Li.y && event.clientY < Li.y + Li.h) {
        Li.w = 45;
        Li.h = 45;
        Li.x = 7.5;
        Li.y = 52.5;
        ctx.fillStyle = alkalai_metal;
        ctx.fillRect(Li.x, Li.y, Li.w, Li.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Li', Li.x + 25, Li.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('3', Li.x + 5, Li.y + 10);
        console.log('hovered: Li');

    } 
    else {
        ctx.clearRect(Li.x, Li.y, Li.w + 1, Li.h + 1);
        Li.w = 40;
        Li.h = 40;
        Li.x = 10;
        Li.y = 55;
        ctx.fillStyle = alkalai_metal;
        ctx.fillRect(Li.x, Li.y, Li.w, Li.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Li', Li.x + 22.5, Li.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('3', Li.x + 5, Li.y + 10);

}
}
function draw_Be() {
    if (event.clientX > Be.x && event.clientX < Be.x + Be.w && event.clientY > Be.y && event.clientY < Be.y + Be.h) {
        Be.w = 45;
        Be.h = 45;
        Be.x = 52.5;
        Be.y = 52.5;
        ctx.fillStyle = alkaline_earth_metal;
        ctx.fillRect(Be.x, Be.y, Be.w, Be.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Be', Be.x + 22.5, Be.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('4', Be.x + 5, Be.y + 10);
        console.log('hovered: Be');
    } 
    else {
        ctx.clearRect(Be.x, Be.y, Be.w + 1, Be.h + 1);
        Be.w = 40;
        Be.h = 40;
        Be.x = 55;
        Be.y = 55;
        ctx.fillStyle = alkaline_earth_metal;
        ctx.fillRect(Be.x, Be.y, Be.w, Be.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Be', Be.x + 22.5, Be.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('4', Be.x + 5, Be.y + 10);
}
}
function draw_B() {
    if (event.clientX > B.x && event.clientX < B.x + B.w && event.clientY > B.y && event.clientY < B.y + B.h) {
        B.w = 45;
        B.h = 45;
        B.x = 547.5;
        B.y = 52.5;
        ctx.fillStyle = metalloid;
        ctx.fillRect(B.x, B.y, B.w, B.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('B', B.x + 25, B.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('5', B.x + 5, B.y + 10);
        console.log('hovered: B');
    } 
    else {
        ctx.clearRect(B.x, B.y, B.w + 1, B.h + 1);
        B.w = 40;
        B.h = 40;
        B.x = 550;
        B.y = 55;
        ctx.fillStyle = metalloid;
        ctx.fillRect(B.x, B.y, B.w, B.h);   
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('B', B.x + 22.5, B.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('5', B.x + 5, B.y + 10);
}
}
function draw_C() {
    if (event.clientX > C.x && event.clientX < C.x + C.w && event.clientY > C.y && event.clientY < C.y + C.h) {
        C.w = 45;
        C.h = 45;
        C.x = 592.5;
        C.y = 52.5;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(C.x, C.y, C.w, C.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('C', C.x + 25, C.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('6', C.x + 5, C.y + 10);
        console.log('hovered: C');
    } 
    else {
        ctx.clearRect(C.x, C.y, C.w + 1, C.h + 1);
        C.w = 40;
        C.h = 40;
        C.x = 595;
        C.y = 55;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(C.x, C.y, C.w, C.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('C', C.x + 22.5, C.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('6', C.x + 5, C.y + 10);
}
}
function draw_N() {
    if (event.clientX > N.x && event.clientX < N.x + N.w && event.clientY > N.y && event.clientY < N.y + N.h) {
        N.w = 45;
        N.h = 45;
        N.x = 637.5;
        N.y = 52.5;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(N.x, N.y, N.w, N.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('N', N.x + 25, N.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('7', N.x + 5, N.y + 10);
        console.log('hovered: N');
    } 
    else {
        ctx.clearRect(N.x, N.y, N.w + 1, N.h + 1);
        N.w = 40;
        N.h = 40;
        N.x = 640;
        N.y = 55;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(N.x, N.y, N.w, N.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('N', N.x + 22.5, N.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('7', N.x + 5, N.y + 10);
}
}
function draw_O() {
    if (event.clientX > O.x && event.clientX < O.x + O.w && event.clientY > O.y && event.clientY < O.y + O.h) {
        O.w = 45;
        O.h = 45;
        O.x = 682.5;
        O.y = 52.5;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(O.x, O.y, O.w, O.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('O', O.x + 25, O.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('8', O.x + 5, O.y + 10);
        console.log('hovered: O');
    } 
    else {
        ctx.clearRect(O.x, O.y, O.w + 1, O.h + 1);
        O.w = 40;
        O.h = 40;
        O.x = 685;
        O.y = 55;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(O.x, O.y, O.w, O.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('O', O.x + 22.5, O.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('8', O.x + 5, O.y + 10);
}
}
function draw_F() {
    if (event.clientX > F.x && event.clientX < F.x + F.w && event.clientY > F.y && event.clientY < F.y + F.h) {
        F.w = 45;
        F.h = 45;
        F.x = 727.5;
        F.y = 52.5;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(F.x, F.y, F.w, F.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('F', F.x + 25, F.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('9', F.x + 5, F.y + 10);
        console.log('hovered: F');
    } 
    else {
        ctx.clearRect(F.x, F.y, F.w + 1, F.h + 1);
        F.w = 40;
        F.h = 40;
        F.x = 730;
        F.y = 55;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(F.x, F.y, F.w, F.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('F', F.x + 22.5, F.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('9', F.x + 5, F.y + 10);
}
}
function draw_Ne() {
    if (event.clientX > Ne.x && event.clientX < Ne.x + Ne.w && event.clientY > Ne.y && event.clientY < Ne.y + Ne.h) {
        Ne.w = 45;
        Ne.h = 45;
        Ne.x = 772.5;
        Ne.y = 52.5;
        ctx.fillStyle = nobel_gasses;
        ctx.fillRect(Ne.x, Ne.y, Ne.w, Ne.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ne', Ne.x + 25, Ne.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('10', Ne.x + 6, Ne.y + 10);
        console.log('hovered: Ne');
    } 
    else {
        ctx.clearRect(Ne.x, Ne.y, Ne.w + 1, Ne.h + 1);
        Ne.w = 40;
        Ne.h = 40;
        Ne.x = 775;
        Ne.y = 55;
        ctx.fillStyle = nobel_gasses;
        ctx.fillRect(Ne.x, Ne.y, Ne.w, Ne.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ne', Ne.x + 22.5, Ne.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('10', Ne.x + 6, Ne.y + 10);
}
}
//row 3
function draw_Na() {
    if (event.clientX > Na.x && event.clientX < Na.x + Na.w && event.clientY > Na.y && event.clientY < Na.y + Na.h) {
        Na.w = 45;
        Na.h = 45;
        Na.x = 7.5;
        Na.y = 97.5;
        ctx.fillStyle = alkalai_metal;
        ctx.fillRect(Na.x, Na.y, Na.w, Na.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Na', Na.x + 25, Na.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('11', Na.x + 6, Na.y + 10);
        console.log('hovered: Na');
    } 
    else {
        ctx.clearRect(Na.x, Na.y, Na.w + 1, Na.h + 1);
        Na.w = 40;
        Na.h = 40;
        Na.x = 10;
        Na.y = 100;
        ctx.fillStyle = alkalai_metal;
        ctx.fillRect(Na.x, Na.y, Na.w, Na.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Na', Na.x + 22.5, Na.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('11', Na.x + 6, Na.y + 10);
}
}
function draw_Mg() {
    if (event.clientX > Mg.x && event.clientX < Mg.x + Mg.w && event.clientY > Mg.y && event.clientY < Mg.y + Mg.h) {
        Mg.w = 45;
        Mg.h = 45;
        Mg.x = 52.5;
        Mg.y = 97.5;
        ctx.fillStyle = alkaline_earth_metal;
        ctx.fillRect(Mg.x, Mg.y, Mg.w, Mg.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Mg', Mg.x + 25, Mg.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('12', Mg.x + 6, Mg.y + 10);
        console.log('hovered: Mg');
    } 
    else {
        ctx.clearRect(Mg.x, Mg.y, Mg.w + 1, Mg.h + 1);
        Mg.w = 40;
        Mg.h = 40;
        Mg.x = 55;
        Mg.y = 100;
        ctx.fillStyle = alkaline_earth_metal;
        ctx.fillRect(Mg.x, Mg.y, Mg.w, Mg.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Mg', Mg.x + 22.5, Mg.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('12', Mg.x + 6, Mg.y + 10);
}
}
function draw_Al() {
    if (event.clientX > Al.x && event.clientX < Al.x + Al.w && event.clientY > Al.y && event.clientY < Al.y + Al.h) {
        Al.w = 45;
        Al.h = 45;
        Al.x = 547.5;
        Al.y = 97.5;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(Al.x, Al.y, Al.w, Al.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Al', Al.x + 25, Al.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('13', Al.x + 6, Al.y + 10);
        console.log('hovered: Al');
    } 
    else {
        ctx.clearRect(Al.x, Al.y, Al.w + 1, Al.h + 1);
        Al.w = 40;
        Al.h = 40;
        Al.x = 550;
        Al.y = 100;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(Al.x, Al.y, Al.w, Al.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Al', Al.x + 22.5, Al.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('13', Al.x + 6, Al.y + 10);
}
}
function draw_Si() {
    if (event.clientX > Si.x && event.clientX < Si.x + Si.w && event.clientY > Si.y && event.clientY < Si.y + Si.h) {
        Si.w = 45;
        Si.h = 45;
        Si.x = 592.5;
        Si.y = 97.5;
        ctx.fillStyle = metalloid;
        ctx.fillRect(Si.x, Si.y, Si.w, Si.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Si', Si.x + 25, Si.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('14', Si.x + 6, Si.y + 10);
        console.log('hovered: Si');
    } 
    else {
        ctx.clearRect(Si.x, Si.y, Si.w + 1, Si.h + 1);
        Si.w = 40;
        Si.h = 40;
        Si.x = 595;
        Si.y = 100;
        ctx.fillStyle = metalloid;
        ctx.fillRect(Si.x, Si.y, Si.w, Si.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Si', Si.x + 22.5, Si.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('14', Si.x + 6, Si.y + 10);
}
}
function draw_P() {
    if (event.clientX > P.x && event.clientX < P.x + P.w && event.clientY > P.y && event.clientY < P.y + P.h) {
        P.w = 45;
        P.h = 45;
        P.x = 637.5;
        P.y = 97.5;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(P.x, P.y, P.w, P.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('P', P.x + 25, P.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('15', P.x + 6, P.y + 10);
        console.log('hovered: P');
    } 
    else {
        ctx.clearRect(P.x, P.y, P.w + 1, P.h + 1);
        P.w = 40;
        P.h = 40;
        P.x = 640;
        P.y = 100;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(P.x, P.y, P.w, P.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('P', P.x + 22.5, P.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('15', P.x + 6, P.y + 10);
}
}
function draw_S() {
    if (event.clientX > S.x && event.clientX < S.x + S.w && event.clientY > S.y && event.clientY < S.y + S.h) {
        S.w = 45;
        S.h = 45;
        S.x = 682.5;
        S.y = 97.5;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(S.x, S.y, S.w, S.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('S', S.x + 25, S.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('16', S.x + 6, S.y + 10);
        console.log('hovered: S');
    } 
    else {
        ctx.clearRect(S.x, S.y, S.w + 1, S.h + 1);
        S.w = 40;
        S.h = 40;
        S.x = 685;
        S.y = 100;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(S.x, S.y, S.w, S.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('S', S.x + 22.5, S.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('16', S.x + 6, S.y + 10);
}
}
function draw_Cl() {
    if (event.clientX > Cl.x && event.clientX < Cl.x + Cl.w && event.clientY > Cl.y && event.clientY < Cl.y + Cl.h) {
        Cl.w = 45;
        Cl.h = 45;
        Cl.x = 727.5;
        Cl.y = 97.5;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(Cl.x, Cl.y, Cl.w, Cl.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Cl', Cl.x + 25, Cl.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('17', Cl.x + 6, Cl.y + 10);
        console.log('hovered: Cl');
    } 
    else {
        ctx.clearRect(Cl.x, Cl.y, Cl.w + 1, Cl.h + 1);
        Cl.w = 40;
        Cl.h = 40;
        Cl.x = 730;
        Cl.y = 100;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(Cl.x, Cl.y, Cl.w, Cl.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Cl', Cl.x + 22.5, Cl.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('17', Cl.x + 6, Cl.y + 10);
}
}
function draw_Ar() {
    if (event.clientX > Ar.x && event.clientX < Ar.x + Ar.w && event.clientY > Ar.y && event.clientY < Ar.y + Ar.h) {
        Ar.w = 45;
        Ar.h = 45;
        Ar.x = 772.5;
        Ar.y = 97.5;
        ctx.fillStyle = nobel_gasses;
        ctx.fillRect(Ar.x, Ar.y, Ar.w, Ar.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ar', Ar.x + 25, Ar.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('18', Ar.x + 6, Ar.y + 10);
        console.log('hovered: Ar');
    } 
    else {
        ctx.clearRect(Ar.x, Ar.y, Ar.w + 1, Ar.h + 1);
        Ar.w = 40;
        Ar.h = 40;
        Ar.x = 775;
        Ar.y = 100;
        ctx.fillStyle = nobel_gasses;
        ctx.fillRect(Ar.x, Ar.y, Ar.w, Ar.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ar', Ar.x + 22.5, Ar.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('18', Ar.x + 6, Ar.y + 10);
}
}
//row 4
function draw_K() {
    if (event.clientX > K.x && event.clientX < K.x + K.w && event.clientY > K.y && event.clientY < K.y + K.h) {
        K.w = 45;
        K.h = 45;
        K.x = 7.5;
        K.y = 142.5;
        ctx.fillStyle = alkalai_metal;
        ctx.fillRect(K.x, K.y, K.w, K.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('K', K.x + 25, K.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('19', K.x + 6, K.y + 10);
        console.log('hovered: K');
    } 
    else {
        ctx.clearRect(K.x, K.y, K.w + 1, K.h + 1);
        K.w = 40;
        K.h = 40;
        K.x = 10;
        K.y = 145;
        ctx.fillStyle = alkalai_metal;
        ctx.fillRect(K.x, K.y, K.w, K.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('K', K.x + 22.5, K.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('19', K.x + 6, K.y + 10);
}
}
function draw_Ca() {
    if (event.clientX > Ca.x && event.clientX < Ca.x + Ca.w && event.clientY > Ca.y && event.clientY < Ca.y + Ca.h) {
        Ca.w = 45;
        Ca.h = 45;
        Ca.x = 52.5;
        Ca.y = 142.5;
        ctx.fillStyle = alkaline_earth_metal;
        ctx.fillRect(Ca.x, Ca.y, Ca.w, Ca.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ca', Ca.x + 25, Ca.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('20', Ca.x + 6, Ca.y + 10);
        console.log('hovered: Ca');
    } 
    else {
        ctx.clearRect(Ca.x, Ca.y, Ca.w + 1, Ca.h + 1);
        Ca.w = 40;
        Ca.h = 40;
        Ca.x = 55;
        Ca.y = 145;
        ctx.fillStyle = alkaline_earth_metal;
        ctx.fillRect(Ca.x, Ca.y, Ca.w, Ca.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ca', Ca.x + 22.5, Ca.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('20', Ca.x + 6, Ca.y + 10);
}
}
function draw_Sc() {
    if (event.clientX > Sc.x && event.clientX < Sc.x + Sc.w && event.clientY > Sc.y && event.clientY < Sc.y + Sc.h) {
        Sc.w = 45;
        Sc.h = 45;
        Sc.x = 97.5;
        Sc.y = 142.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Sc.x, Sc.y, Sc.w, Sc.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Sc', Sc.x + 25, Sc.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('21', Sc.x + 6, Sc.y + 10);
        console.log('hovered: Sc');
    } 
    else {
        ctx.clearRect(Sc.x, Sc.y, Sc.w + 1, Sc.h + 1);
        Sc.w = 40;
        Sc.h = 40;
        Sc.x = 100;
        Sc.y = 145;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Sc.x, Sc.y, Sc.w, Sc.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Sc', Sc.x + 22.5, Sc.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('21', Sc.x + 6, Sc.y + 10);
}
}
function draw_Ti() {
    if (event.clientX > Ti.x && event.clientX < Ti.x + Ti.w && event.clientY > Ti.y && event.clientY < Ti.y + Ti.h) {
        Ti.w = 45;
        Ti.h = 45;
        Ti.x = 142.5;
        Ti.y = 142.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Ti.x, Ti.y, Ti.w, Ti.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ti', Ti.x + 25, Ti.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('22', Ti.x + 6, Ti.y + 10);
        console.log('hovered: Ti');
    } 
    else {
        ctx.clearRect(Ti.x, Ti.y, Ti.w + 1, Ti.h + 1);
        Ti.w = 40;
        Ti.h = 40;
        Ti.x = 145;
        Ti.y = 145;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Ti.x, Ti.y, Ti.w, Ti.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ti', Ti.x + 22.5, Ti.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('22', Ti.x + 6, Ti.y + 10);
}
}
function draw_V() {
    if (event.clientX > V.x && event.clientX < V.x + V.w && event.clientY > V.y && event.clientY < V.y + V.h) {
        V.w = 45;
        V.h = 45;
        V.x = 187.5;
        V.y = 142.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(V.x, V.y, V.w, V.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('V', V.x + 25, V.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('23', V.x + 6, V.y + 10);
        console.log('hovered: V');
    } 
    else {
        ctx.clearRect(V.x, V.y, V.w + 1, V.h + 1);
        V.w = 40;
        V.h = 40;
        V.x = 190;
        V.y = 145;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(V.x, V.y, V.w, V.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('V', V.x + 22.5, V.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('23', V.x + 6, V.y + 10);
}
}
function draw_Cr() {
    if (event.clientX > Cr.x && event.clientX < Cr.x + Cr.w && event.clientY > Cr.y && event.clientY < Cr.y + Cr.h) {
        Cr.w = 45;
        Cr.h = 45;
        Cr.x = 232.5;
        Cr.y = 142.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Cr.x, Cr.y, Cr.w, Cr.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Cr', Cr.x + 25, Cr.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('24', Cr.x + 6, Cr.y + 10);
        console.log('hovered: Cr');
    } 
    else {
        ctx.clearRect(Cr.x, Cr.y, Cr.w + 1, Cr.h + 1);
        Cr.w = 40;
        Cr.h = 40;
        Cr.x = 235;
        Cr.y = 145;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Cr.x, Cr.y, Cr.w, Cr.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Cr', Cr.x + 22.5, Cr.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('24', Cr.x + 6, Cr.y + 10);
}
}
function draw_Mn() {
    if (event.clientX > Mn.x && event.clientX < Mn.x + Mn.w && event.clientY > Mn.y && event.clientY < Mn.y + Mn.h) {
        Mn.w = 45;
        Mn.h = 45;
        Mn.x = 277.5;
        Mn.y = 142.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Mn.x, Mn.y, Mn.w, Mn.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Mn', Mn.x + 25, Mn.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('25', Mn.x + 6, Mn.y + 10);
        console.log('hovered: Mn');
    } 
    else {
        ctx.clearRect(Mn.x, Mn.y, Mn.w + 1, Mn.h + 1);
        Mn.w = 40;
        Mn.h = 40;
        Mn.x = 280;
        Mn.y = 145;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Mn.x, Mn.y, Mn.w, Mn.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Mn', Mn.x + 22.5, Mn.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('25', Mn.x + 6, Mn.y + 10);
}
}
function draw_Fe() {
    if (event.clientX > Fe.x && event.clientX < Fe.x + Fe.w && event.clientY > Fe.y && event.clientY < Fe.y + Fe.h) {
        Fe.w = 45;
        Fe.h = 45;
        Fe.x = 322.5;
        Fe.y = 142.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Fe.x, Fe.y, Fe.w, Fe.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Fe', Fe.x + 25, Fe.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('26', Fe.x + 6, Fe.y + 10);
        console.log('hovered: Fe');
    } 
    else {
        ctx.clearRect(Fe.x, Fe.y, Fe.w + 1, Fe.h + 1);
        Fe.w = 40;
        Fe.h = 40;
        Fe.x = 325;
        Fe.y = 145;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Fe.x, Fe.y, Fe.w, Fe.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Fe', Fe.x + 22.5, Fe.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('26', Fe.x + 6, Fe.y + 10);
}
}
function draw_Co() {
    if (event.clientX > Co.x && event.clientX < Co.x + Co.w && event.clientY > Co.y && event.clientY < Co.y + Co.h) {
        Co.w = 45;
        Co.h = 45;
        Co.x = 367.5;
        Co.y = 142.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Co.x, Co.y, Co.w, Co.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Co', Co.x + 25, Co.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('27', Co.x + 6, Co.y + 10);
        console.log('hovered: Co');
    } 
    else {
        ctx.clearRect(Co.x, Co.y, Co.w + 1, Co.h + 1);
        Co.w = 40;
        Co.h = 40;
        Co.x = 370;
        Co.y = 145;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Co.x, Co.y, Co.w, Co.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Co', Co.x + 22.5, Co.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('27', Co.x + 6, Co.y + 10);
}
}
function draw_Ni() {
    if (event.clientX > Ni.x && event.clientX < Ni.x + Ni.w && event.clientY > Ni.y && event.clientY < Ni.y + Ni.h) {
        Ni.w = 45;
        Ni.h = 45;
        Ni.x = 412.5;
        Ni.y = 142.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Ni.x, Ni.y, Ni.w, Ni.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ni', Ni.x + 25, Ni.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('28', Ni.x + 6, Ni.y + 10);
        console.log('hovered: Ni');
    } 
    else {
        ctx.clearRect(Ni.x, Ni.y, Ni.w + 1, Ni.h + 1);
        Ni.w = 40;
        Ni.h = 40;
        Ni.x = 415;
        Ni.y = 145;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Ni.x, Ni.y, Ni.w, Ni.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ni', Ni.x + 22.5, Ni.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('28', Ni.x + 6, Ni.y + 10);
}
}
function draw_Cu() {
    if (event.clientX > Cu.x && event.clientX < Cu.x + Cu.w && event.clientY > Cu.y && event.clientY < Cu.y + Cu.h) {
        Cu.w = 45;
        Cu.h = 45;
        Cu.x = 457.5;
        Cu.y = 142.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Cu.x, Cu.y, Cu.w, Cu.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Cu', Cu.x + 25, Cu.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('29', Cu.x + 6, Cu.y + 10);
        console.log('hovered: Cu');
    } 
    else {
        ctx.clearRect(Cu.x, Cu.y, Cu.w + 1, Cu.h + 1);
        Cu.w = 40;
        Cu.h = 40;
        Cu.x = 460;
        Cu.y = 145;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Cu.x, Cu.y, Cu.w, Cu.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Cu', Cu.x + 22.5, Cu.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('29', Cu.x + 6, Cu.y + 10);
}
}
function draw_Zn() {
    if (event.clientX > Zn.x && event.clientX < Zn.x + Zn.w && event.clientY > Zn.y && event.clientY < Zn.y + Zn.h) {
        Zn.w = 45;
        Zn.h = 45;
        Zn.x = 502.5;
        Zn.y = 142.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Zn.x, Zn.y, Zn.w, Zn.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Zn', Zn.x + 25, Zn.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('30', Zn.x + 6, Zn.y + 10);
        console.log('hovered: Zn');
    } 
    else {
        ctx.clearRect(Zn.x, Zn.y, Zn.w + 1, Zn.h + 1);
        Zn.w = 40;
        Zn.h = 40;
        Zn.x = 505;
        Zn.y = 145;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Zn.x, Zn.y, Zn.w, Zn.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Zn', Zn.x + 22.5, Zn.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('30', Zn.x + 6, Zn.y + 10);
}
}
function draw_Ga() {
    if (event.clientX > Ga.x && event.clientX < Ga.x + Ga.w && event.clientY > Ga.y && event.clientY < Ga.y + Ga.h) {
        Ga.w = 45;
        Ga.h = 45;
        Ga.x = 547.5;
        Ga.y = 142.5;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(Ga.x, Ga.y, Ga.w, Ga.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ga', Ga.x + 25, Ga.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('31', Ga.x + 6, Ga.y + 10);
        console.log('hovered: Ga');
    } 
    else {
        ctx.clearRect(Ga.x, Ga.y, Ga.w + 1, Ga.h + 1);
        Ga.w = 40;
        Ga.h = 40;
        Ga.x = 550;
        Ga.y = 145;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(Ga.x, Ga.y, Ga.w, Ga.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ga', Ga.x + 22.5, Ga.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('31', Ga.x + 6, Ga.y + 10);
}
}
function draw_Ge() {
    if (event.clientX > Ge.x && event.clientX < Ge.x + Ge.w && event.clientY > Ge.y && event.clientY < Ge.y + Ge.h) {
        Ge.w = 45;
        Ge.h = 45;
        Ge.x = 592.5;
        Ge.y = 142.5;
        ctx.fillStyle = metalloid;
        ctx.fillRect(Ge.x, Ge.y, Ge.w, Ge.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ge', Ge.x + 22.5, Ge.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('32', Ge.x + 6, Ge.y + 10);
        console.log('hovered: Ge');
    } 
    else {
        ctx.clearRect(Ge.x, Ge.y, Ge.w + 1, Ge.h + 1);
        Ge.w = 40;
        Ge.h = 40;
        Ge.x = 595;
        Ge.y = 145;
        ctx.fillStyle = metalloid;
        ctx.fillRect(Ge.x, Ge.y, Ge.w, Ge.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ge', Ge.x + 22.5, Ge.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('32', Ge.x + 6, Ge.y + 10);
}
}
function draw_As() {
    if (event.clientX > As.x && event.clientX < As.x + As.w && event.clientY > As.y && event.clientY < As.y + As.h) {
        As.w = 45;
        As.h = 45;
        As.x = 637.5;
        As.y = 142.5;
        ctx.fillStyle = metalloid;
        ctx.fillRect(As.x, As.y, As.w, As.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('As', As.x + 22.5, As.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('33', As.x + 6, As.y + 10);
        console.log('hovered: As');
    } 
    else {
        ctx.clearRect(As.x, As.y, As.w + 1, As.h + 1);
        As.w = 40;
        As.h = 40;
        As.x = 640;
        As.y = 145;
        ctx.fillStyle = metalloid;
        ctx.fillRect(As.x, As.y, As.w, As.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('As', As.x + 22.5, As.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('33', As.x + 6, As.y + 10);
}
}
function draw_Se() {
    if (event.clientX > Se.x && event.clientX < Se.x + Se.w && event.clientY > Se.y && event.clientY < Se.y + Se.h) {
        Se.w = 45;
        Se.h = 45;
        Se.x = 682.5;
        Se.y = 142.5;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(Se.x, Se.y, Se.w, Se.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Se', Se.x + 22.5, Se.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('34', Se.x + 6, Se.y + 10);
        console.log('hovered: Se');
    } 
    else {
        ctx.clearRect(Se.x, Se.y, Se.w + 1, Se.h + 1);
        Se.w = 40;
        Se.h = 40;
        Se.x = 685;
        Se.y = 145;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(Se.x, Se.y, Se.w, Se.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Se', Se.x + 22.5, Se.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('34', Se.x + 6, Se.y + 10);
}
}
function draw_Br() {
    if (event.clientX > Br.x && event.clientX < Br.x + Br.w && event.clientY > Br.y && event.clientY < Br.y + Br.h) {
        Br.w = 45;
        Br.h = 45;
        Br.x = 727.5;
        Br.y = 142.5;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(Br.x, Br.y, Br.w, Br.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Br', Br.x + 22.5, Br.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('35', Br.x + 6, Br.y + 10);
        console.log('hovered: Br');
    } 
    else {
        ctx.clearRect(Br.x, Br.y, Br.w + 1, Br.h + 1);
        Br.w = 40;
        Br.h = 40;
        Br.x = 730;
        Br.y = 145;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(Br.x, Br.y, Br.w, Br.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Br', Br.x + 22.5, Br.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('35', Br.x + 6, Br.y + 10);
}
}
function draw_Kr() {
    if (event.clientX > Kr.x && event.clientX < Kr.x + Kr.w && event.clientY > Kr.y && event.clientY < Kr.y + Kr.h) {
        Kr.w = 45;
        Kr.h = 45;
        Kr.x = 772.5;
        Kr.y = 142.5;
        ctx.fillStyle = nobel_gasses;
        ctx.fillRect(Kr.x, Kr.y, Kr.w, Kr.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Kr', Kr.x + 22.5, Kr.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('36', Kr.x + 6, Kr.y + 10);
        console.log('hovered: Kr');
    } 
    else {
        ctx.clearRect(Kr.x, Kr.y, Kr.w + 1, Kr.h + 1);
        Kr.w = 40;
        Kr.h = 40;
        Kr.x = 775;
        Kr.y = 145;
        ctx.fillStyle = nobel_gasses;
        ctx.fillRect(Kr.x, Kr.y, Kr.w, Kr.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Kr', Kr.x + 22.5, Kr.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('36', Kr.x + 6, Kr.y + 10);
}
}
//row 5
function draw_Rb() {
    if (event.clientX > Rb.x && event.clientX < Rb.x + Rb.w && event.clientY > Rb.y && event.clientY < Rb.y + Rb.h) {
        Rb.w = 45;
        Rb.h = 45;
        Rb.x = 7.5;
        Rb.y = 187.5;
        ctx.fillStyle = alkalai_metal;
        ctx.fillRect(Rb.x, Rb.y, Rb.w, Rb.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Rb', Rb.x + 25, Rb.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('37', Rb.x + 6, Rb.y + 10);
        console.log('hovered: Rb');
    } 
    else {
        ctx.clearRect(Rb.x, Rb.y, Rb.w + 1, Rb.h + 1);
        Rb.w = 40;
        Rb.h = 40;
        Rb.x = 10;
        Rb.y = 190;
        ctx.fillStyle = alkalai_metal;
        ctx.fillRect(Rb.x, Rb.y, Rb.w, Rb.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Rb', Rb.x + 22.5, Rb.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('37', Rb.x + 6, Rb.y + 10);
}
}
function draw_Sr() {
    if (event.clientX > Sr.x && event.clientX < Sr.x + Sr.w && event.clientY > Sr.y && event.clientY < Sr.y + Sr.h) {
        Sr.w = 45;
        Sr.h = 45;
        Sr.x = 52.5;
        Sr.y = 187.5;
        ctx.fillStyle = alkaline_earth_metal;
        ctx.fillRect(Sr.x, Sr.y, Sr.w, Sr.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Sr', Sr.x + 25, Sr.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('38', Sr.x + 6, Sr.y + 10);
        console.log('hovered: Sr');
    } 
    else {
        ctx.clearRect(Sr.x, Sr.y, Sr.w + 1, Sr.h + 1);
        Sr.w = 40;
        Sr.h = 40;
        Sr.x = 55;
        Sr.y = 190;
        ctx.fillStyle = alkaline_earth_metal;
        ctx.fillRect(Sr.x, Sr.y, Sr.w, Sr.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Sr', Sr.x + 22.5, Sr.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('38', Sr.x + 6, Sr.y + 10);
}
}
function draw_Y() {
    if (event.clientX > Y.x && event.clientX < Y.x + Y.w && event.clientY > Y.y && event.clientY < Y.y + Y.h) {
        Y.w = 45;
        Y.h = 45;
        Y.x = 97.5;
        Y.y = 187.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Y.x, Y.y, Y.w, Y.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Y', Y.x + 25, Y.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('39', Y.x + 6, Y.y + 10);
        console.log('hovered: Y');
    } 
    else {
        ctx.clearRect(Y.x, Y.y, Y.w + 1, Y.h + 1);
        Y.w = 40;
        Y.h = 40;
        Y.x = 100;
        Y.y = 190;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Y.x, Y.y, Y.w, Y.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Y', Y.x + 22.5, Y.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('39', Y.x + 6, Y.y + 10);
}
}
function draw_Zr() {
    if (event.clientX > Zr.x && event.clientX < Zr.x + Zr.w && event.clientY > Zr.y && event.clientY < Zr.y + Zr.h) {
        Zr.w = 45;
        Zr.h = 45;
        Zr.x = 142.5;
        Zr.y = 187.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Zr.x, Zr.y, Zr.w, Zr.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Zr', Zr.x + 25, Zr.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('40', Zr.x + 6, Zr.y + 10);
        console.log('hovered: Zr');
    } 
    else {
        ctx.clearRect(Zr.x, Zr.y, Zr.w + 1, Zr.h + 1);
        Zr.w = 40;
        Zr.h = 40;
        Zr.x = 145;
        Zr.y = 190;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Zr.x, Zr.y, Zr.w, Zr.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Zr', Zr.x + 22.5, Zr.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('40', Zr.x + 6, Zr.y + 10);
}
}
function draw_Nb() {
    if (event.clientX > Nb.x && event.clientX < Nb.x + Nb.w && event.clientY > Nb.y && event.clientY < Nb.y + Nb.h) {
        Nb.w = 45;
        Nb.h = 45;
        Nb.x = 187.5;
        Nb.y = 187.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Nb.x, Nb.y, Nb.w, Nb.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Nb', Nb.x + 25, Nb.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('41', Nb.x + 6, Nb.y + 10);
        console.log('hovered: Nb');
    } 
    else {
        ctx.clearRect(Nb.x, Nb.y, Nb.w + 1, Nb.h + 1);
        Nb.w = 40;
        Nb.h = 40;
        Nb.x = 190;
        Nb.y = 190;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Nb.x, Nb.y, Nb.w, Nb.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Nb', Nb.x + 22.5, Nb.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('41', Nb.x + 6, Nb.y + 10);
}
}
function draw_Mo() {
    if (event.clientX > Mo.x && event.clientX < Mo.x + Mo.w && event.clientY > Mo.y && event.clientY < Mo.y + Mo.h) {
        Mo.w = 45;
        Mo.h = 45;
        Mo.x = 232.5;
        Mo.y = 187.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Mo.x, Mo.y, Mo.w, Mo.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Mo', Mo.x + 25, Mo.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('42', Mo.x + 6, Mo.y + 10);
        console.log('hovered: Mo');
    } 
    else {
        ctx.clearRect(Mo.x, Mo.y, Mo.w + 1, Mo.h + 1);
        Mo.w = 40;
        Mo.h = 40;
        Mo.x = 235;
        Mo.y = 190;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Mo.x, Mo.y, Mo.w, Mo.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Mo', Mo.x + 22.5, Mo.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('42', Mo.x + 6, Mo.y + 10);
}
}
function draw_Tc() {
    if (event.clientX > Tc.x && event.clientX < Tc.x + Tc.w && event.clientY > Tc.y && event.clientY < Tc.y + Tc.h) {
        Tc.w = 45;
        Tc.h = 45;
        Tc.x = 277.5;
        Tc.y = 187.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Tc.x, Tc.y, Tc.w, Tc.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Tc', Tc.x + 25, Tc.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('43', Tc.x + 6, Tc.y + 10);
        console.log('hovered: Tc');
    } 
    else {
        ctx.clearRect(Tc.x, Tc.y, Tc.w + 1, Tc.h + 1);
        Tc.w = 40;
        Tc.h = 40;
        Tc.x = 280;
        Tc.y = 190;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Tc.x, Tc.y, Tc.w, Tc.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Tc', Tc.x + 22.5, Tc.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('43', Tc.x + 6, Tc.y + 10);
}
}
function draw_Ru() {
    if (event.clientX > Ru.x && event.clientX < Ru.x + Ru.w && event.clientY > Ru.y && event.clientY < Ru.y + Ru.h) {
        Ru.w = 45;
        Ru.h = 45;
        Ru.x = 322.5;
        Ru.y = 187.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Ru.x, Ru.y, Ru.w, Ru.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ru', Ru.x + 25, Ru.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('44', Ru.x + 6, Ru.y + 10);
        console.log('hovered: Ru');
    } 
    else {
        ctx.clearRect(Ru.x, Ru.y, Ru.w + 1, Ru.h + 1);
        Ru.w = 40;
        Ru.h = 40;
        Ru.x = 325;
        Ru.y = 190;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Ru.x, Ru.y, Ru.w, Ru.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ru', Ru.x + 22.5, Ru.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('44', Ru.x + 6, Ru.y + 10);
}
}
function draw_Rh() {
    if (event.clientX > Rh.x && event.clientX < Rh.x + Rh.w && event.clientY > Rh.y && event.clientY < Rh.y + Rh.h) {
        Rh.w = 45;
        Rh.h = 45;
        Rh.x = 367.5;
        Rh.y = 187.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Rh.x, Rh.y, Rh.w, Rh.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Rh', Rh.x + 25, Rh.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('45', Rh.x + 6, Rh.y + 10);
        console.log('hovered: Rh');
    } 
    else {
        ctx.clearRect(Rh.x, Rh.y, Rh.w + 1, Rh.h + 1);
        Rh.w = 40;
        Rh.h = 40;
        Rh.x = 370;
        Rh.y = 190;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Rh.x, Rh.y, Rh.w, Rh.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Rh', Rh.x + 22.5, Rh.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('45', Rh.x + 6, Rh.y + 10);
}
}
function draw_Pd() {
    if (event.clientX > Pd.x && event.clientX < Pd.x + Pd.w && event.clientY > Pd.y && event.clientY < Pd.y + Pd.h) {
        Pd.w = 45;
        Pd.h = 45;
        Pd.x = 412.5;
        Pd.y = 187.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Pd.x, Pd.y, Pd.w, Pd.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Pd', Pd.x + 25, Pd.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('46', Pd.x + 6, Pd.y + 10);
        console.log('hovered: Pd');
    } 
    else {
        ctx.clearRect(Pd.x, Pd.y, Pd.w + 1, Pd.h + 1);
        Pd.w = 40;
        Pd.h = 40;
        Pd.x = 415;
        Pd.y = 190;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Pd.x, Pd.y, Pd.w, Pd.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Pd', Pd.x + 22.5, Pd.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('46', Pd.x + 6, Pd.y + 10);
}
}
function draw_Ag() {
    if (event.clientX > Ag.x && event.clientX < Ag.x + Ag.w && event.clientY > Ag.y && event.clientY < Ag.y + Ag.h) {
        Ag.w = 45;
        Ag.h = 45;
        Ag.x = 457.5;
        Ag.y = 187.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Ag.x, Ag.y, Ag.w, Ag.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ag', Ag.x + 25, Ag.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('47', Ag.x + 6, Ag.y + 10);
        console.log('hovered: Ag');
    } 
    else {
        ctx.clearRect(Ag.x, Ag.y, Ag.w + 1, Ag.h + 1);
        Ag.w = 40;
        Ag.h = 40;
        Ag.x = 460;
        Ag.y = 190;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Ag.x, Ag.y, Ag.w, Ag.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ag', Ag.x + 22.5, Ag.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('47', Ag.x + 6, Ag.y + 10);
}
}
function draw_Cd() {
    if (event.clientX > Cd.x && event.clientX < Cd.x + Cd.w && event.clientY > Cd.y && event.clientY < Cd.y + Cd.h) {
        Cd.w = 45;
        Cd.h = 45;
        Cd.x = 502.5;
        Cd.y = 187.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Cd.x, Cd.y, Cd.w, Cd.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Cd', Cd.x + 25, Cd.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('48', Cd.x + 6, Cd.y + 10);
        console.log('hovered: Cd');
    } 
    else {
        ctx.clearRect(Cd.x, Cd.y, Cd.w + 1, Cd.h + 1);
        Cd.w = 40;
        Cd.h = 40;
        Cd.x = 505;
        Cd.y = 190;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Cd.x, Cd.y, Cd.w, Cd.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Cd', Cd.x + 22.5, Cd.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('48', Cd.x + 6, Cd.y + 10);
}
}
function draw_In() {
    if (event.clientX > In.x && event.clientX < In.x + In.w && event.clientY > In.y && event.clientY < In.y + In.h) {
        In.w = 45;
        In.h = 45;
        In.x = 547.5;
        In.y = 187.5;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(In.x, In.y, In.w, In.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('In', In.x + 25, In.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('49', In.x + 6, In.y + 10);
        console.log('hovered: In');
    } 
    else {
        ctx.clearRect(In.x, In.y, In.w + 1, In.h + 1);
        In.w = 40;
        In.h = 40;
        In.x = 550;
        In.y = 190;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(In.x, In.y, In.w, In.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('In', In.x + 22.5, In.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('49', In.x + 6, In.y + 10);
}
}
function draw_Sn() {
    if (event.clientX > Sn.x && event.clientX < Sn.x + Sn.w && event.clientY > Sn.y && event.clientY < Sn.y + Sn.h) {
        Sn.w = 45;
        Sn.h = 45;
        Sn.x = 592.5;
        Sn.y = 187.5;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(Sn.x, Sn.y, Sn.w, Sn.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Sn', Sn.x + 25, Sn.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('50', Sn.x + 6, Sn.y + 10);
        console.log('hovered: Sn');
    } 
    else {
        ctx.clearRect(Sn.x, Sn.y, Sn.w + 1, Sn.h + 1);
        Sn.w = 40;
        Sn.h = 40;
        Sn.x = 595;
        Sn.y = 190;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(Sn.x, Sn.y, Sn.w, Sn.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Sn', Sn.x + 22.5, Sn.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('50', Sn.x + 6, Sn.y + 10);
}
}
function draw_Sb() {
    if (event.clientX > Sb.x && event.clientX < Sb.x + Sb.w && event.clientY > Sb.y && event.clientY < Sb.y + Sb.h) {
        Sb.w = 45;
        Sb.h = 45;
        Sb.x = 637.5;
        Sb.y = 187.5;
        ctx.fillStyle = metalloid;
        ctx.fillRect(Sb.x, Sb.y, Sb.w, Sb.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Sb', Sb.x + 22.5, Sb.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('51', Sb.x + 6, Sb.y + 10);
        console.log('hovered: Sb');
    } 
    else {
        ctx.clearRect(Sb.x, Sb.y, Sb.w + 1, Sb.h + 1);
        Sb.w = 40;
        Sb.h = 40;
        Sb.x = 640;
        Sb.y = 190;
        ctx.fillStyle = metalloid;
        ctx.fillRect(Sb.x, Sb.y, Sb.w, Sb.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Sb', Sb.x + 22.5, Sb.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('51', Sb.x + 6, Sb.y + 10);
}
}
function draw_Te() {
    if (event.clientX > Te.x && event.clientX < Te.x + Te.w && event.clientY > Te.y && event.clientY < Te.y + Te.h) {
        Te.w = 45;
        Te.h = 45;
        Te.x = 682.5;
        Te.y = 187.5;
        ctx.fillStyle = metalloid;
        ctx.fillRect(Te.x, Te.y, Te.w, Te.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Te', Te.x + 25, Te.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('52', Te.x + 6, Te.y + 10);
        console.log('hovered: Te');
    } 
    else {
        ctx.clearRect(Te.x, Te.y, Te.w + 1, Te.h + 1);
        Te.w = 40;
        Te.h = 40;
        Te.x = 685;
        Te.y = 190;
        ctx.fillStyle = metalloid;
        ctx.fillRect(Te.x, Te.y, Te.w, Te.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Te', Te.x + 22.5, Te.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('52', Te.x + 6, Te.y + 10);
}
}
function draw_I() {
    if (event.clientX > I.x && event.clientX < I.x + I.w && event.clientY > I.y && event.clientY < I.y + I.h) {
        I.w = 45;
        I.h = 45;
        I.x = 727.5;
        I.y = 187.5;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(I.x, I.y, I.w, I.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('I', I.x + 25, I.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('53', I.x + 6, I.y + 10);
        console.log('hovered: I');
    } 
    else {
        ctx.clearRect(I.x, I.y, I.w + 1, I.h + 1);
        I.w = 40;
        I.h = 40;
        I.x = 730;
        I.y = 190;
        ctx.fillStyle = reactive_nonmetal;
        ctx.fillRect(I.x, I.y, I.w, I.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('I', I.x + 22.5, I.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('53', I.x + 6, I.y + 10);
}
}
function draw_Xe() {
    if (event.clientX > Xe.x && event.clientX < Xe.x + Xe.w && event.clientY > Xe.y && event.clientY < Xe.y + Xe.h) {
        Xe.w = 45;
        Xe.h = 45;
        Xe.x = 772.5;
        Xe.y = 187.5;
        ctx.fillStyle = nobel_gasses;
        ctx.fillRect(Xe.x, Xe.y, Xe.w, Xe.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Xe', Xe.x + 25, Xe.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('54', Xe.x + 6, Xe.y + 10);
        console.log('hovered: Xe');
    } 
    else {
        ctx.clearRect(Xe.x, Xe.y, Xe.w + 1, Xe.h + 1);
        Xe.w = 40;
        Xe.h = 40;
        Xe.x = 775;
        Xe.y = 190;
        ctx.fillStyle = nobel_gasses;
        ctx.fillRect(Xe.x, Xe.y, Xe.w, Xe.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Xe', Xe.x + 22.5, Xe.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('54', Xe.x + 6, Xe.y + 10);
}
}

//row 6

function draw_Cs() {
    if (event.clientX > Cs.x && event.clientX < Cs.x + Cs.w && event.clientY > Cs.y && event.clientY < Cs.y + Cs.h) {
        Cs.w = 45;
        Cs.h = 45;
        Cs.x = 7.5;
        Cs.y = 232.5;
        ctx.fillStyle = alkalai_metal;
        ctx.fillRect(Cs.x, Cs.y, Cs.w, Cs.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Cs', Cs.x + 25, Cs.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('55', Cs.x + 6, Cs.y + 10);
        console.log('hovered: Cs');
    } 
    else {
        ctx.clearRect(Cs.x, Cs.y, Cs.w + 1, Cs.h + 1);
        Cs.w = 40;
        Cs.h = 40;
        Cs.x = 10;
        Cs.y = 235;
        ctx.fillStyle = alkalai_metal;
        ctx.fillRect(Cs.x, Cs.y, Cs.w, Cs.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Cs', Cs.x + 22.5, Cs.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('55', Cs.x + 6, Cs.y + 10);
}
}
function draw_Ba() {
    if (event.clientX > Ba.x && event.clientX < Ba.x + Ba.w && event.clientY > Ba.y && event.clientY < Ba.y + Ba.h) {
        Ba.w = 45;
        Ba.h = 45;
        Ba.x = 52.5;
        Ba.y = 232.5;
        ctx.fillStyle = alkaline_earth_metal;
        ctx.fillRect(Ba.x, Ba.y, Ba.w, Ba.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ba', Ba.x + 25, Ba.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('56', Ba.x + 6, Ba.y + 10);
        console.log('hovered: Ba');
    } 
    else {
        ctx.clearRect(Ba.x, Ba.y, Ba.w + 1, Ba.h + 1);
        Ba.w = 40;
        Ba.h = 40;
        Ba.x = 55;
        Ba.y = 235;
        ctx.fillStyle = alkaline_earth_metal;
        ctx.fillRect(Ba.x, Ba.y, Ba.w, Ba.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ba', Ba.x + 22.5, Ba.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('56', Ba.x + 6, Ba.y + 10);
}
}
function draw_La() {
    if (event.clientX > La.x && event.clientX < La.x + La.w && event.clientY > La.y && event.clientY < La.y + La.h) {
        La.w = 45;
        La.h = 45;
        La.x = 97.5;
        La.y = 232.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(La.x, La.y, La.w, La.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('La', La.x + 25, La.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('57', La.x + 6, La.y + 10);
        console.log('hovered: La');
    } 
    else {
        ctx.clearRect(La.x, La.y, La.w + 1, La.h + 1);
        La.w = 40;
        La.h = 40;
        La.x = 100;
        La.y = 235;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(La.x, La.y, La.w, La.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('La', La.x + 22.5, La.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('57', La.x + 6, La.y + 10);
}
}
function draw_Hf() {
    if (event.clientX > Hf.x && event.clientX < Hf.x + Hf.w && event.clientY > Hf.y && event.clientY < Hf.y + Hf.h) {
        Hf.w = 45;
        Hf.h = 45;
        Hf.x = 142.5;
        Hf.y = 232.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Hf.x, Hf.y, Hf.w, Hf.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Hf', Hf.x + 25, Hf.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('72', Hf.x + 6, Hf.y + 10);
        console.log('hovered: Hf');
    } 
    else {
        ctx.clearRect(Hf.x, Hf.y, Hf.w + 1, Hf.h + 1);
        Hf.w = 40;
        Hf.h = 40;
        Hf.x = 145;
        Hf.y = 235;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Hf.x, Hf.y, Hf.w, Hf.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Hf', Hf.x + 22.5, Hf.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('72', Hf.x + 6, Hf.y + 10);
}
}
function draw_Ta() {
    if (event.clientX > Ta.x && event.clientX < Ta.x + Ta.w && event.clientY > Ta.y && event.clientY < Ta.y + Ta.h) {
        Ta.w = 45;
        Ta.h = 45;
        Ta.x = 187.5;
        Ta.y = 232.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Ta.x, Ta.y, Ta.w, Ta.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ta', Ta.x + 25, Ta.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('73', Ta.x + 6, Ta.y + 10);
        console.log('hovered: Ta');
    } 
    else {
        ctx.clearRect(Ta.x, Ta.y, Ta.w + 1, Ta.h + 1);
        Ta.w = 40;
        Ta.h = 40;
        Ta.x = 190;
        Ta.y = 235;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Ta.x, Ta.y, Ta.w, Ta.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ta', Ta.x + 22.5, Ta.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('73', Ta.x + 6, Ta.y + 10);
}
}
function draw_W() {
    if (event.clientX > W.x && event.clientX < W.x + W.w && event.clientY > W.y && event.clientY < W.y + W.h) {
        W.w = 45;
        W.h = 45;
        W.x = 232.5;
        W.y = 232.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(W.x, W.y, W.w, W.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('W', W.x + 25, W.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('74', W.x + 6, W.y + 10);
        console.log('hovered: W');
    } 
    else {
        ctx.clearRect(W.x, W.y, W.w + 1, W.h + 1);
        W.w = 40;
        W.h = 40;
        W.x = 235;
        W.y = 235;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(W.x, W.y, W.w, W.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('W', W.x + 22.5, W.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('74', W.x + 6, W.y + 10);
}
}
function draw_Re() {
    if (event.clientX > Re.x && event.clientX < Re.x + Re.w && event.clientY > Re.y && event.clientY < Re.y + Re.h) {
        Re.w = 45;
        Re.h = 45;
        Re.x = 277.5;
        Re.y = 232.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Re.x, Re.y, Re.w, Re.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Re', Re.x + 25, Re.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('75', Re.x + 6, Re.y + 10);
        console.log('hovered: Re');
    } 
    else {
        ctx.clearRect(Re.x, Re.y, Re.w + 1, Re.h + 1);
        Re.w = 40;
        Re.h = 40;
        Re.x = 280;
        Re.y = 235;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Re.x, Re.y, Re.w, Re.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Re', Re.x + 22.5, Re.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('75', Re.x + 6, Re.y + 10);
}
}
function draw_Os() {
    if (event.clientX > Os.x && event.clientX < Os.x + Os.w && event.clientY > Os.y && event.clientY < Os.y + Os.h) {
        Os.w = 45;
        Os.h = 45;
        Os.x = 322.5;
        Os.y = 232.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Os.x, Os.y, Os.w, Os.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Os', Os.x + 25, Os.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('76', Os.x + 6, Os.y + 10);
        console.log('hovered: Os');
    } 
    else {
        ctx.clearRect(Os.x, Os.y, Os.w + 1, Os.h + 1);
        Os.w = 40;
        Os.h = 40;
        Os.x = 325;
        Os.y = 235;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Os.x, Os.y, Os.w, Os.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Os', Os.x + 22.5, Os.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('76', Os.x + 6, Os.y + 10);
}
}
function draw_Ir() {
    if (event.clientX > Ir.x && event.clientX < Ir.x + Ir.w && event.clientY > Ir.y && event.clientY < Ir.y + Ir.h) {
        Ir.w = 45;
        Ir.h = 45;
        Ir.x = 367.5;
        Ir.y = 232.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Ir.x, Ir.y, Ir.w, Ir.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ir', Ir.x + 25, Ir.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('77', Ir.x + 6, Ir.y + 10);
        console.log('hovered: Ir');
    } 
    else {
        ctx.clearRect(Ir.x, Ir.y, Ir.w + 1, Ir.h + 1);
        Ir.w = 40;
        Ir.h = 40;
        Ir.x = 370;
        Ir.y = 235;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Ir.x, Ir.y, Ir.w, Ir.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ir', Ir.x + 22.5, Ir.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('77', Ir.x + 6, Ir.y + 10);
}
}
function draw_Pt() {
    if (event.clientX > Pt.x && event.clientX < Pt.x + Pt.w && event.clientY > Pt.y && event.clientY < Pt.y + Pt.h) {
        Pt.w = 45;
        Pt.h = 45;
        Pt.x = 412.5;
        Pt.y = 232.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Pt.x, Pt.y, Pt.w, Pt.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Pt', Pt.x + 25, Pt.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('78', Pt.x + 6, Pt.y + 10);
        console.log('hovered: Pt');
    } 
    else {
        ctx.clearRect(Pt.x, Pt.y, Pt.w + 1, Pt.h + 1);
        Pt.w = 40;
        Pt.h = 40;
        Pt.x = 415;
        Pt.y = 235;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Pt.x, Pt.y, Pt.w, Pt.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Pt', Pt.x + 22.5, Pt.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('78', Pt.x + 6, Pt.y + 10);
}
}
function draw_Au() {
    if (event.clientX > Au.x && event.clientX < Au.x + Au.w && event.clientY > Au.y && event.clientY < Au.y + Au.h) {
        Au.w = 45;
        Au.h = 45;
        Au.x = 457.5;
        Au.y = 232.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Au.x, Au.y, Au.w, Au.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Au', Au.x + 25, Au.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('79', Au.x + 6, Au.y + 10);
        console.log('hovered: Au');
    } 
    else {
        ctx.clearRect(Au.x, Au.y, Au.w + 1, Au.h + 1);
        Au.w = 40;
        Au.h = 40;
        Au.x = 460;
        Au.y = 235;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Au.x, Au.y, Au.w, Au.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Au', Au.x + 22.5, Au.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('79', Au.x + 6, Au.y + 10);
}
}
function draw_Hg() {
    if (event.clientX > Hg.x && event.clientX < Hg.x + Hg.w && event.clientY > Hg.y && event.clientY < Hg.y + Hg.h) {
        Hg.w = 45;
        Hg.h = 45;
        Hg.x = 502.5;
        Hg.y = 232.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Hg.x, Hg.y, Hg.w, Hg.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Hg', Hg.x + 25, Hg.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('80', Hg.x + 6, Hg.y + 10);
        console.log('hovered: Hg');
    } 
    else {
        ctx.clearRect(Hg.x, Hg.y, Hg.w + 1, Hg.h + 1);
        Hg.w = 40;
        Hg.h = 40;
        Hg.x = 505;
        Hg.y = 235;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Hg.x, Hg.y, Hg.w, Hg.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Hg', Hg.x + 22.5, Hg.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('80', Hg.x + 6, Hg.y + 10);
}
}
function draw_Tl() {
    if (event.clientX > Tl.x && event.clientX < Tl.x + Tl.w && event.clientY > Tl.y && event.clientY < Tl.y + Tl.h) {
        Tl.w = 45;
        Tl.h = 45;
        Tl.x = 547.5;
        Tl.y = 232.5;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(Tl.x, Tl.y, Tl.w, Tl.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Tl', Tl.x + 25, Tl.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('81', Tl.x + 6, Tl.y + 10);
        console.log('hovered: Tl');
    } 
    else {
        ctx.clearRect(Tl.x, Tl.y, Tl.w + 1, Tl.h + 1);
        Tl.w = 40;
        Tl.h = 40;
        Tl.x = 550;
        Tl.y = 235;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(Tl.x, Tl.y, Tl.w, Tl.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Tl', Tl.x + 22.5, Tl.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('81', Tl.x + 6, Tl.y + 10);
}
}
function draw_Pb() {
    if (event.clientX > Pb.x && event.clientX < Pb.x + Pb.w && event.clientY > Pb.y && event.clientY < Pb.y + Pb.h) {
        Pb.w = 45;
        Pb.h = 45;
        Pb.x = 592.5;
        Pb.y = 232.5;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(Pb.x, Pb.y, Pb.w, Pb.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Pb', Pb.x + 25, Pb.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('82', Pb.x + 6, Pb.y + 10);
        console.log('hovered: Pb');
    } 
    else {
        ctx.clearRect(Pb.x, Pb.y, Pb.w + 1, Pb.h + 1);
        Pb.w = 40;
        Pb.h = 40;
        Pb.x = 595;
        Pb.y = 235;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(Pb.x, Pb.y, Pb.w, Pb.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Pb', Pb.x + 22.5, Pb.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('82', Pb.x + 6, Pb.y + 10);
}
}
function draw_Bi() {
    if (event.clientX > Bi.x && event.clientX < Bi.x + Bi.w && event.clientY > Bi.y && event.clientY < Bi.y + Bi.h) {
        Bi.w = 45;
        Bi.h = 45;
        Bi.x = 637.5;
        Bi.y = 232.5;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(Bi.x, Bi.y, Bi.w, Bi.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Bi', Bi.x + 25, Bi.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('83', Bi.x + 6, Bi.y + 10);
        console.log('hovered: Bi');
    } 
    else {
        ctx.clearRect(Bi.x, Bi.y, Bi.w + 1, Bi.h + 1);
        Bi.w = 40;
        Bi.h = 40;
        Bi.x = 640;
        Bi.y = 235;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(Bi.x, Bi.y, Bi.w, Bi.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Bi', Bi.x + 22.5, Bi.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('83', Bi.x + 6, Bi.y + 10);
}
}
function draw_Po() {
    if (event.clientX > Po.x && event.clientX < Po.x + Po.w && event.clientY > Po.y && event.clientY < Po.y + Po.h) {
        Po.w = 45;
        Po.h = 45;
        Po.x = 682.5;
        Po.y = 232.5;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(Po.x, Po.y, Po.w, Po.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Po', Po.x + 25, Po.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('84', Po.x + 6, Po.y + 10);
        console.log('hovered: Po');
    } 
    else {
        ctx.clearRect(Po.x, Po.y, Po.w + 1, Po.h + 1);
        Po.w = 40;
        Po.h = 40;
        Po.x = 685;
        Po.y = 235;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(Po.x, Po.y, Po.w, Po.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Po', Po.x + 22.5, Po.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('84', Po.x + 6, Po.y + 10);
}
}
function draw_At() {
    if (event.clientX > At.x && event.clientX < At.x + At.w && event.clientY > At.y && event.clientY < At.y + At.h) {
        At.w = 45;
        At.h = 45;
        At.x = 727.5;
        At.y = 232.5;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(At.x, At.y, At.w, At.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('At', At.x + 25, At.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('85', At.x + 6, At.y + 10);
        console.log('hovered: At');
    } 
    else {
        ctx.clearRect(At.x, At.y, At.w + 1, At.h + 1);
        At.w = 40;
        At.h = 40;
        At.x = 730;
        At.y = 235;
        ctx.fillStyle = post_transition_metal;
        ctx.fillRect(At.x, At.y, At.w, At.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('At', At.x + 22.5, At.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('85', At.x + 6, At.y + 10);
}
}
function draw_Rn() {
    if (event.clientX > Rn.x && event.clientX < Rn.x + Rn.w && event.clientY > Rn.y && event.clientY < Rn.y + Rn.h) {
        Rn.w = 45;
        Rn.h = 45;
        Rn.x = 772.5;
        Rn.y = 232.5;
        ctx.fillStyle = nobel_gasses;
        ctx.fillRect(Rn.x, Rn.y, Rn.w, Rn.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Rn', Rn.x + 25, Rn.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('86', Rn.x + 6, Rn.y + 10);
        console.log('hovered: Rn');
    } 
    else {
        ctx.clearRect(Rn.x, Rn.y, Rn.w + 1, Rn.h + 1);
        Rn.w = 40;
        Rn.h = 40;
        Rn.x = 775;
        Rn.y = 235;
        ctx.fillStyle = nobel_gasses;
        ctx.fillRect(Rn.x, Rn.y, Rn.w, Rn.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Rn', Rn.x + 22.5, Rn.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('86', Rn.x + 6, Rn.y + 10);
}
}
//row 7
function draw_Fr() {
    if (event.clientX > Fr.x && event.clientX < Fr.x + Fr.w && event.clientY > Fr.y && event.clientY < Fr.y + Fr.h) {
        Fr.w = 45;
        Fr.h = 45;
        Fr.x = 7.5;
        Fr.y = 277.5;
        ctx.fillStyle = alkalai_metal;
        ctx.fillRect(Fr.x, Fr.y, Fr.w, Fr.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Fr', Fr.x + 25, Fr.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('87', Fr.x + 6, Fr.y + 10);
        console.log('hovered: Fr');
        
    } 
    else {
        ctx.clearRect(Fr.x, Fr.y, Fr.w + 1, Fr.h + 1);
        Fr.w = 40;
        Fr.h = 40;
        Fr.x = 10;
        Fr.y = 280;
        ctx.fillStyle = alkalai_metal;
        ctx.fillRect(Fr.x, Fr.y, Fr.w, Fr.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Fr', Fr.x + 22.5, Fr.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('87', Fr.x + 6, Fr.y + 10);
}
}
function draw_Ra() {
    if (event.clientX > Ra.x && event.clientX < Ra.x + Ra.w && event.clientY > Ra.y && event.clientY < Ra.y + Ra.h) {
        Ra.w = 45;
        Ra.h = 45;
        Ra.x = 52.5;
        Ra.y = 277.5;
        ctx.fillStyle = alkaline_earth_metal;
        ctx.fillRect(Ra.x, Ra.y, Ra.w, Ra.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ra', Ra.x + 25, Ra.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('88', Ra.x + 6, Ra.y + 10);
        console.log('hovered: Ra');
    } 
    else {
        ctx.clearRect(Ra.x, Ra.y, Ra.w + 1, Ra.h + 1);
        Ra.w = 40;
        Ra.h = 40;
        Ra.x = 55;
        Ra.y = 280;
        ctx.fillStyle = alkaline_earth_metal;
        ctx.fillRect(Ra.x, Ra.y, Ra.w, Ra.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ra', Ra.x + 22.5, Ra.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('88', Ra.x + 6, Ra.y + 10);
}
}
function draw_Ac() {
    if (event.clientX > Ac.x && event.clientX < Ac.x + Ac.w && event.clientY > Ac.y && event.clientY < Ac.y + Ac.h) {
        Ac.w = 45;
        Ac.h = 45;
        Ac.x = 97.5;
        Ac.y = 277.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(Ac.x, Ac.y, Ac.w, Ac.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ac', Ac.x + 25, Ac.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('89', Ac.x + 6, Ac.y + 10);
        console.log('hovered: Ac');
    } 
    else {
        ctx.clearRect(Ac.x, Ac.y, Ac.w + 1, Ac.h + 1);
        Ac.w = 40;
        Ac.h = 40;
        Ac.x = 100;
        Ac.y = 280;
        ctx.fillStyle = actinides;
        ctx.fillRect(Ac.x, Ac.y, Ac.w, Ac.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ac', Ac.x + 22.5, Ac.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('89', Ac.x + 6, Ac.y + 10);
}
}
function draw_Rf() {
    if (event.clientX > Rf.x && event.clientX < Rf.x + Rf.w && event.clientY > Rf.y && event.clientY < Rf.y + Rf.h) {
        Rf.w = 45;
        Rf.h = 45;
        Rf.x = 142.5;
        Rf.y = 277.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Rf.x, Rf.y, Rf.w, Rf.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Rf', Rf.x + 25, Rf.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('104', Rf.x + 8, Rf.y + 10);
        console.log('hovered: Rf');
    } 
    else {
        ctx.clearRect(Rf.x, Rf.y, Rf.w + 1, Rf.h + 1);
        Rf.w = 40;
        Rf.h = 40;
        Rf.x = 145;
        Rf.y = 280;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Rf.x, Rf.y, Rf.w, Rf.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Rf', Rf.x + 22.5, Rf.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('104', Rf.x + 8, Rf.y + 10);
}
}
function draw_Db() {
    if (event.clientX > Db.x && event.clientX < Db.x + Db.w && event.clientY > Db.y && event.clientY < Db.y + Db.h) {
        Db.w = 45;
        Db.h = 45;
        Db.x = 187.5;
        Db.y = 277.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Db.x, Db.y, Db.w, Db.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Db', Db.x + 25, Db.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('105', Db.x + 8, Db.y + 10);
        console.log('hovered: Db');
    } 
    else {
        ctx.clearRect(Db.x, Db.y, Db.w + 1, Db.h + 1);
        Db.w = 40;
        Db.h = 40;
        Db.x = 190;
        Db.y = 280;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Db.x, Db.y, Db.w, Db.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Db', Db.x + 22.5, Db.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('105', Db.x + 8, Db.y + 10);
}
}
function draw_Sg() {
    if (event.clientX > Sg.x && event.clientX < Sg.x + Sg.w && event.clientY > Sg.y && event.clientY < Sg.y + Sg.h) {
        Sg.w = 45;
        Sg.h = 45;
        Sg.x = 232.5;
        Sg.y = 277.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Sg.x, Sg.y, Sg.w, Sg.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Sg', Sg.x + 25, Sg.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('106', Sg.x + 8, Sg.y + 10);
        console.log('hovered: Sg');
    } 
    else {
        ctx.clearRect(Sg.x, Sg.y, Sg.w + 1, Sg.h + 1);
        Sg.w = 40;
        Sg.h = 40;
        Sg.x = 235;
        Sg.y = 280;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Sg.x, Sg.y, Sg.w, Sg.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Sg', Sg.x + 22.5, Sg.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('106', Sg.x + 8, Sg.y + 10);
}
}
function draw_Bh() {
    if (event.clientX > Bh.x && event.clientX < Bh.x + Bh.w && event.clientY > Bh.y && event.clientY < Bh.y + Bh.h) {
        Bh.w = 45;
        Bh.h = 45;
        Bh.x = 277.5;
        Bh.y = 277.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Bh.x, Bh.y, Bh.w, Bh.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Bh', Bh.x + 25, Bh.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('107', Bh.x + 8, Bh.y + 10);
        console.log('hovered: Bh');
    } 
    else {
        ctx.clearRect(Bh.x, Bh.y, Bh.w + 1, Bh.h + 1);
        Bh.w = 40;
        Bh.h = 40;
        Bh.x = 280;
        Bh.y = 280;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Bh.x, Bh.y, Bh.w, Bh.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Bh', Bh.x + 22.5, Bh.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('107', Bh.x + 8, Bh.y + 10);
}
}
function draw_Hs() {
    if (event.clientX > Hs.x && event.clientX < Hs.x + Hs.w && event.clientY > Hs.y && event.clientY < Hs.y + Hs.h) {
        Hs.w = 45;
        Hs.h = 45;
        Hs.x = 322.5;
        Hs.y = 277.5;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Hs.x, Hs.y, Hs.w, Hs.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Hs', Hs.x + 25, Hs.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('108', Hs.x + 8, Hs.y + 10);
        console.log('hovered: Hs');
    } 
    else {
        ctx.clearRect(Hs.x, Hs.y, Hs.w + 1, Hs.h + 1);
        Hs.w = 40;
        Hs.h = 40;
        Hs.x = 325;
        Hs.y = 280;
        ctx.fillStyle = transition_metal;
        ctx.fillRect(Hs.x, Hs.y, Hs.w, Hs.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Hs', Hs.x + 22.5, Hs.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('108', Hs.x + 8, Hs.y + 10);
}
}
function draw_Mt() {
    if (event.clientX > Mt.x && event.clientX < Mt.x + Mt.w && event.clientY > Mt.y && event.clientY < Mt.y + Mt.h) {
        Mt.w = 45;
        Mt.h = 45;
        Mt.x = 367.5;
        Mt.y = 277.5;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Mt.x, Mt.y, Mt.w, Mt.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Mt', Mt.x + 25, Mt.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('109', Mt.x + 8, Mt.y + 10);
        console.log('hovered: Mt');
    } 
    else {
        ctx.clearRect(Mt.x, Mt.y, Mt.w + 1, Mt.h + 1);
        Mt.w = 40;
        Mt.h = 40;
        Mt.x = 370;
        Mt.y = 280;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Mt.x, Mt.y, Mt.w, Mt.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Mt', Mt.x + 22.5, Mt.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('109', Mt.x + 8, Mt.y + 10);
}
}
function draw_Ds() {
    if (event.clientX > Ds.x && event.clientX < Ds.x + Ds.w && event.clientY > Ds.y && event.clientY < Ds.y + Ds.h) {
        Ds.w = 45;
        Ds.h = 45;
        Ds.x = 412.5;
        Ds.y = 277.5;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Ds.x, Ds.y, Ds.w, Ds.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ds', Ds.x + 25, Ds.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('110', Ds.x + 8, Ds.y + 10);
        console.log('hovered: Ds');
    } 
    else {
        ctx.clearRect(Ds.x, Ds.y, Ds.w + 1, Ds.h + 1);
        Ds.w = 40;
        Ds.h = 40;
        Ds.x = 415;
        Ds.y = 280;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Ds.x, Ds.y, Ds.w, Ds.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ds', Ds.x + 22.5, Ds.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('110', Ds.x + 8, Ds.y + 10);
}
}
function draw_Rg() {
    if (event.clientX > Rg.x && event.clientX < Rg.x + Rg.w && event.clientY > Rg.y && event.clientY < Rg.y + Rg.h) {
        Rg.w = 45;
        Rg.h = 45;
        Rg.x = 457.5;
        Rg.y = 277.5;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Rg.x, Rg.y, Rg.w, Rg.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Rg', Rg.x + 25, Rg.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('111', Rg.x + 8, Rg.y + 10);
        console.log('hovered: Rg');
    } 
    else {
        ctx.clearRect(Rg.x, Rg.y, Rg.w + 1, Rg.h + 1);
        Rg.w = 40;
        Rg.h = 40;
        Rg.x = 460;
        Rg.y = 280;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Rg.x, Rg.y, Rg.w, Rg.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Rg', Rg.x + 22.5, Rg.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('111', Rg.x + 8, Rg.y + 10);
}
}
function draw_Cn() {
    if (event.clientX > Cn.x && event.clientX < Cn.x + Cn.w && event.clientY > Cn.y && event.clientY < Cn.y + Cn.h) {
        Cn.w = 45;
        Cn.h = 45;
        Cn.x = 502.5;
        Cn.y = 277.5;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Cn.x, Cn.y, Cn.w, Cn.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Cn', Cn.x + 25, Cn.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('112', Cn.x + 8, Cn.y + 10);
        console.log('hovered: Cn');
    } 
    else {
        ctx.clearRect(Cn.x, Cn.y, Cn.w + 1, Cn.h + 1);
        Cn.w = 40;
        Cn.h = 40;
        Cn.x = 505;
        Cn.y = 280;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Cn.x, Cn.y, Cn.w, Cn.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Cn', Cn.x + 22.5, Cn.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('112', Cn.x + 8, Cn.y + 10);
}
}
function draw_Nh() {
    if (event.clientX > Nh.x && event.clientX < Nh.x + Nh.w && event.clientY > Nh.y && event.clientY < Nh.y + Nh.h) {
        Nh.w = 45;
        Nh.h = 45;
        Nh.x = 547.5;
        Nh.y = 277.5;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Nh.x, Nh.y, Nh.w, Nh.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Nh', Nh.x + 25, Nh.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('113', Nh.x + 8, Nh.y + 10);
        console.log('hovered: Nh');
    } 
    else {
        ctx.clearRect(Nh.x, Nh.y, Nh.w + 1, Nh.h + 1);
        Nh.w = 40;
        Nh.h = 40;
        Nh.x = 550;
        Nh.y = 280;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Nh.x, Nh.y, Nh.w, Nh.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Nh', Nh.x + 22.5, Nh.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('113', Nh.x + 8, Nh.y + 10);
}
}
function draw_Fl() {
    if (event.clientX > Fl.x && event.clientX < Fl.x + Fl.w && event.clientY > Fl.y && event.clientY < Fl.y + Fl.h) {
        Fl.w = 45;
        Fl.h = 45;
        Fl.x = 592.5;
        Fl.y = 277.5;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Fl.x, Fl.y, Fl.w, Fl.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Fl', Fl.x + 25, Fl.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('114', Fl.x + 8, Fl.y + 10);
        console.log('hovered: Fl');
    } 
    else {
        ctx.clearRect(Fl.x, Fl.y, Fl.w + 1, Fl.h + 1);
        Fl.w = 40;
        Fl.h = 40;
        Fl.x = 595;
        Fl.y = 280;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Fl.x, Fl.y, Fl.w, Fl.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Fl', Fl.x + 22.5, Fl.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('114', Fl.x + 8, Fl.y + 10);
}
}
function draw_Mc() {
    if (event.clientX > Mc.x && event.clientX < Mc.x + Mc.w && event.clientY > Mc.y && event.clientY < Mc.y + Mc.h) {
        Mc.w = 45;
        Mc.h = 45;
        Mc.x = 637.5;
        Mc.y = 277.5;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Mc.x, Mc.y, Mc.w, Mc.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Mc', Mc.x + 25, Mc.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('115', Mc.x + 8, Mc.y + 10);
        console.log('hovered: Mc');
    } 
    else {
        ctx.clearRect(Mc.x, Mc.y, Mc.w + 1, Mc.h + 1);
        Mc.w = 40;
        Mc.h = 40;
        Mc.x = 640;
        Mc.y = 280;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Mc.x, Mc.y, Mc.w, Mc.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Mc', Mc.x + 22.5, Mc.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('115', Mc.x + 8, Mc.y + 10);
}
}
function draw_Lv() {
    if (event.clientX > Lv.x && event.clientX < Lv.x + Lv.w && event.clientY > Lv.y && event.clientY < Lv.y + Lv.h) {
        Lv.w = 45;
        Lv.h = 45;
        Lv.x = 682.5;
        Lv.y = 277.5;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Lv.x, Lv.y, Lv.w, Lv.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Lv', Lv.x + 25, Lv.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('116', Lv.x + 8, Lv.y + 10);
        console.log('hovered: Lv');
    } 
    else {
        ctx.clearRect(Lv.x, Lv.y, Lv.w + 1, Lv.h + 1);
        Lv.w = 40;
        Lv.h = 40;
        Lv.x = 685;
        Lv.y = 280;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Lv.x, Lv.y, Lv.w, Lv.h);
        ctx.fillStyle = 'black';   
        ctx.font = '20px Arial';
        ctx.fillText('Lv', Lv.x + 22.5, Lv.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('116', Lv.x + 8, Lv.y + 10);
}
}
function draw_Ts() {
    if (event.clientX > Ts.x && event.clientX < Ts.x + Ts.w && event.clientY > Ts.y && event.clientY < Ts.y + Ts.h) {
        Ts.w = 45;
        Ts.h = 45;
        Ts.x = 727.5;
        Ts.y = 277.5;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Ts.x, Ts.y, Ts.w, Ts.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ts', Ts.x + 25, Ts.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('117', Ts.x + 8, Ts.y + 10);
        console.log('hovered: Ts');
    } 
    else {
        ctx.clearRect(Ts.x, Ts.y, Ts.w + 1, Ts.h + 1);
        Ts.w = 40;
        Ts.h = 40;
        Ts.x = 730;
        Ts.y = 280;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Ts.x, Ts.y, Ts.w, Ts.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ts', Ts.x + 22.5, Ts.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('117', Ts.x + 8, Ts.y + 10);
}
}
function draw_Og() {
    if (event.clientX > Og.x && event.clientX < Og.x + Og.w && event.clientY > Og.y && event.clientY < Og.y + Og.h) {
        Og.w = 45;
        Og.h = 45;
        Og.x = 772.5;
        Og.y = 277.5;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Og.x, Og.y, Og.w, Og.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Og', Og.x + 25, Og.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('118', Og.x + 8, Og.y + 10);
        console.log('hovered: Og');
    } 
    else {
        ctx.clearRect(Og.x, Og.y, Og.w + 1, Og.h + 1);
        Og.w = 40;
        Og.h = 40;
        Og.x = 775;
        Og.y = 280;
        ctx.fillStyle = unknown_properties;
        ctx.fillRect(Og.x, Og.y, Og.w, Og.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Og', Og.x + 22.5, Og.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('118', Og.x + 8, Og.y + 10);
}
}
//row 8
function draw_Ce() {
    if (event.clientX > Ce.x && event.clientX < Ce.x + Ce.w && event.clientY > Ce.y && event.clientY < Ce.y + Ce.h) {
        Ce.w = 45;
        Ce.h = 45;
        Ce.x = 142.5;
        Ce.y = 342.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Ce.x, Ce.y, Ce.w, Ce.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ce', Ce.x + 25, Ce.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('58', Ce.x + 6, Ce.y + 10);
        console.log('hovered: Ce');
    } 
    else {
        ctx.clearRect(Ce.x, Ce.y, Ce.w + 1, Ce.h + 1);
        Ce.w = 40;
        Ce.h = 40;
        Ce.x = 145;
        Ce.y = 345;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Ce.x, Ce.y, Ce.w, Ce.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ce', Ce.x + 22.5, Ce.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('58', Ce.x + 6, Ce.y + 10);
}
}
function draw_Pr() {
    if (event.clientX > Pr.x && event.clientX < Pr.x + Pr.w && event.clientY > Pr.y && event.clientY < Pr.y + Pr.h) {
        Pr.w = 45;
        Pr.h = 45;
        Pr.x = 187.5;
        Pr.y = 342.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Pr.x, Pr.y, Pr.w, Pr.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Pr', Pr.x + 25, Pr.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('59', Pr.x + 6, Pr.y + 10);
        console.log('hovered: Pr');
    } 
    else {
        ctx.clearRect(Pr.x, Pr.y, Pr.w + 1, Pr.h + 1);
        Pr.w = 40;
        Pr.h = 40;
        Pr.x = 190;
        Pr.y = 345;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Pr.x, Pr.y, Pr.w, Pr.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Pr', Pr.x + 22.5, Pr.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('59', Pr.x + 6, Pr.y + 10);
}
}
function draw_Nd() {
    if (event.clientX > Nd.x && event.clientX < Nd.x + Nd.w && event.clientY > Nd.y && event.clientY < Nd.y + Nd.h) {
        Nd.w = 45;
        Nd.h = 45;
        Nd.x = 232.5;
        Nd.y = 342.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Nd.x, Nd.y, Nd.w, Nd.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Nd', Nd.x + 25, Nd.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('60', Nd.x + 6, Nd.y + 10);
        console.log('hovered: Nd');
    } 
    else {
        ctx.clearRect(Nd.x, Nd.y, Nd.w + 1, Nd.h + 1);
        Nd.w = 40;
        Nd.h = 40;
        Nd.x = 235;
        Nd.y = 345;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Nd.x, Nd.y, Nd.w, Nd.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Nd', Nd.x + 22.5, Nd.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('60', Nd.x + 6, Nd.y + 10);
}
}
function draw_Pm() {
    if (event.clientX > Pm.x && event.clientX < Pm.x + Pm.w && event.clientY > Pm.y && event.clientY < Pm.y + Pm.h) {
        Pm.w = 45;
        Pm.h = 45;
        Pm.x = 277.5;
        Pm.y = 342.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Pm.x, Pm.y, Pm.w, Pm.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Pm', Pm.x + 25, Pm.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('61', Pm.x + 6, Pm.y + 10);
        console.log('hovered: Pm');
    } 
    else {
        ctx.clearRect(Pm.x, Pm.y, Pm.w + 1, Pm.h + 1);
        Pm.w = 40;
        Pm.h = 40;
        Pm.x = 280;
        Pm.y = 345;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Pm.x, Pm.y, Pm.w, Pm.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Pm', Pm.x + 22.5, Pm.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('61', Pm.x + 6, Pm.y + 10);
}
}
function draw_Sm() {
    if (event.clientX > Sm.x && event.clientX < Sm.x + Sm.w && event.clientY > Sm.y && event.clientY < Sm.y + Sm.h) {
        Sm.w = 45;
        Sm.h = 45;
        Sm.x = 322.5;
        Sm.y = 342.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Sm.x, Sm.y, Sm.w, Sm.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Sm', Sm.x + 25, Sm.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('62', Sm.x + 6, Sm.y + 10);
        console.log('hovered: Sm');
    } 
    else {
        ctx.clearRect(Sm.x, Sm.y, Sm.w + 1, Sm.h + 1);
        Sm.w = 40;
        Sm.h = 40;
        Sm.x = 325;
        Sm.y = 345;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Sm.x, Sm.y, Sm.w, Sm.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Sm', Sm.x + 22.5, Sm.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('62', Sm.x + 6, Sm.y + 10);
}
}
function draw_Eu() {
    if (event.clientX > Eu.x && event.clientX < Eu.x + Eu.w && event.clientY > Eu.y && event.clientY < Eu.y + Eu.h) {
        Eu.w = 45;
        Eu.h = 45;
        Eu.x = 367.5;
        Eu.y = 342.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Eu.x, Eu.y, Eu.w, Eu.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Eu', Eu.x + 25, Eu.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('63', Eu.x + 6, Eu.y + 10);
        console.log('hovered: Eu');
    } 
    else {
        ctx.clearRect(Eu.x, Eu.y, Eu.w + 1, Eu.h + 1);
        Eu.w = 40;
        Eu.h = 40;
        Eu.x = 370;
        Eu.y = 345;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Eu.x, Eu.y, Eu.w, Eu.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Eu', Eu.x + 22.5, Eu.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('63', Eu.x + 6, Eu.y + 10);
}
}
function draw_Gd() {
    if (event.clientX > Gd.x && event.clientX < Gd.x + Gd.w && event.clientY > Gd.y && event.clientY < Gd.y + Gd.h) {
        Gd.w = 45;
        Gd.h = 45;
        Gd.x = 412.5;
        Gd.y = 342.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Gd.x, Gd.y, Gd.w, Gd.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Gd', Gd.x + 25, Gd.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('64', Gd.x + 6, Gd.y + 10);
        console.log('hovered: Gd');
    } 
    else {
        ctx.clearRect(Gd.x, Gd.y, Gd.w + 1, Gd.h + 1);
        Gd.w = 40;
        Gd.h = 40;
        Gd.x = 415;
        Gd.y = 345;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Gd.x, Gd.y, Gd.w, Gd.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Gd', Gd.x + 22.5, Gd.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('64', Gd.x + 6, Gd.y + 10);
}
}
function draw_Tb() {
    if (event.clientX > Tb.x && event.clientX < Tb.x + Tb.w && event.clientY > Tb.y && event.clientY < Tb.y + Tb.h) {
        Tb.w = 45;
        Tb.h = 45;
        Tb.x = 457.5;
        Tb.y = 342.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Tb.x, Tb.y, Tb.w, Tb.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Tb', Tb.x + 25, Tb.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('65', Tb.x + 6, Tb.y + 10);
        console.log('hovered: Tb');
    } 
    else {
        ctx.clearRect(Tb.x, Tb.y, Tb.w + 1, Tb.h + 1);
        Tb.w = 40;
        Tb.h = 40;
        Tb.x = 460;
        Tb.y = 345;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Tb.x, Tb.y, Tb.w, Tb.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Tb', Tb.x + 22.5, Tb.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('65', Tb.x + 6, Tb.y + 10);
}
}
function draw_Dy() {
    if (event.clientX > Dy.x && event.clientX < Dy.x + Dy.w && event.clientY > Dy.y && event.clientY < Dy.y + Dy.h) {
        Dy.w = 45;
        Dy.h = 45;
        Dy.x = 502.5;
        Dy.y = 342.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Dy.x, Dy.y, Dy.w, Dy.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Dy', Dy.x + 25, Dy.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('66', Dy.x + 6, Dy.y + 10);
        console.log('hovered: Dy');
    } 
    else {
        ctx.clearRect(Dy.x, Dy.y, Dy.w + 1, Dy.h + 1);
        Dy.w = 40;
        Dy.h = 40;
        Dy.x = 505;
        Dy.y = 345;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Dy.x, Dy.y, Dy.w, Dy.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Dy', Dy.x + 22.5, Dy.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('66', Dy.x + 6, Dy.y + 10);
}
}
function draw_Ho() {
    if (event.clientX > Ho.x && event.clientX < Ho.x + Ho.w && event.clientY > Ho.y && event.clientY < Ho.y + Ho.h) {
        Ho.w = 45;
        Ho.h = 45;
        Ho.x = 547.5;
        Ho.y = 342.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Ho.x, Ho.y, Ho.w, Ho.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Ho', Ho.x + 25, Ho.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('67', Ho.x + 6, Ho.y + 10);
        console.log('hovered: Ho');
    } 
    else {
        ctx.clearRect(Ho.x, Ho.y, Ho.w + 1, Ho.h + 1);
        Ho.w = 40;
        Ho.h = 40;
        Ho.x = 550;
        Ho.y = 345;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Ho.x, Ho.y, Ho.w, Ho.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Ho', Ho.x + 22.5, Ho.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('67', Ho.x + 6, Ho.y + 10);
}
}
function draw_Er() {
    if (event.clientX > Er.x && event.clientX < Er.x + Er.w && event.clientY > Er.y && event.clientY < Er.y + Er.h) {
        Er.w = 45;
        Er.h = 45;
        Er.x = 592.5;
        Er.y = 342.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Er.x, Er.y, Er.w, Er.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Er', Er.x + 25, Er.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('68', Er.x + 6, Er.y + 10);
        console.log('hovered: Er');
    } 
    else {
        ctx.clearRect(Er.x, Er.y, Er.w + 1, Er.h + 1);
        Er.w = 40;
        Er.h = 40;
        Er.x = 595;
        Er.y = 345;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Er.x, Er.y, Er.w, Er.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Er', Er.x + 22.5, Er.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('68', Er.x + 6, Er.y + 10);
}
}
function draw_Tm() {
    if (event.clientX > Tm.x && event.clientX < Tm.x + Tm.w && event.clientY > Tm.y && event.clientY < Tm.y + Tm.h) {
        Tm.w = 45;
        Tm.h = 45;
        Tm.x = 637.5;
        Tm.y = 342.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Tm.x, Tm.y, Tm.w, Tm.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Tm', Tm.x + 25, Tm.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('69', Tm.x + 6, Tm.y + 10);
        console.log('hovered: Tm');
    } 
    else {
        ctx.clearRect(Tm.x, Tm.y, Tm.w + 1, Tm.h + 1);
        Tm.w = 40;
        Tm.h = 40;
        Tm.x = 640;
        Tm.y = 345;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Tm.x, Tm.y, Tm.w, Tm.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Tm', Tm.x + 22.5, Tm.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('69', Tm.x + 6, Tm.y + 10);
}
}
function draw_Yb() {
    if (event.clientX > Yb.x && event.clientX < Yb.x + Yb.w && event.clientY > Yb.y && event.clientY < Yb.y + Yb.h) {
        Yb.w = 45;
        Yb.h = 45;
        Yb.x = 682.5;
        Yb.y = 342.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Yb.x, Yb.y, Yb.w, Yb.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Yb', Yb.x + 25, Yb.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('70', Yb.x + 6, Yb.y + 10);
        console.log('hovered: Yb');
    } 
    else {
        ctx.clearRect(Yb.x, Yb.y, Yb.w + 1, Yb.h + 1);
        Yb.w = 40;
        Yb.h = 40;
        Yb.x = 685;
        Yb.y = 345;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Yb.x, Yb.y, Yb.w, Yb.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Yb', Yb.x + 22.5, Yb.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('70', Yb.x + 6, Yb.y + 10);
}
}
function draw_Lu() {
    if (event.clientX > Lu.x && event.clientX < Lu.x + Lu.w && event.clientY > Lu.y && event.clientY < Lu.y + Lu.h) {
        Lu.w = 45;
        Lu.h = 45;
        Lu.x = 727.5;
        Lu.y = 342.5;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Lu.x, Lu.y, Lu.w, Lu.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Lu', Lu.x + 25, Lu.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('71', Lu.x + 6, Lu.y + 10);
        console.log('hovered: Lu');
    } 
    else {
        ctx.clearRect(Lu.x, Lu.y, Lu.w + 1, Lu.h + 1);
        Lu.w = 40;
        Lu.h = 40;
        Lu.x = 730;
        Lu.y = 345;
        ctx.fillStyle = lanthanides;
        ctx.fillRect(Lu.x, Lu.y, Lu.w, Lu.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Lu', Lu.x + 22.5, Lu.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('71', Lu.x + 6, Lu.y + 10);
}
}
//row 9
function draw_Th() {
    if (event.clientX > Th.x && event.clientX < Th.x + Th.w && event.clientY > Th.y && event.clientY < Th.y + Th.h) {
        Th.w = 45;
        Th.h = 45;
        Th.x = 142.5;
        Th.y = 387.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(Th.x, Th.y, Th.w, Th.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Th', Th.x + 25, Th.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('90', Th.x + 6, Th.y + 10);
        console.log('hovered: Th');
    } 
    else {
        ctx.clearRect(Th.x, Th.y, Th.w + 1, Th.h + 1);
        Th.w = 40;
        Th.h = 40;
        Th.x = 145;
        Th.y = 390;
        ctx.fillStyle = actinides;
        ctx.fillRect(Th.x, Th.y, Th.w, Th.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Th', Th.x + 22.5, Th.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('90', Th.x + 6, Th.y + 10);
}
}
function draw_Pa() {
    if (event.clientX > Pa.x && event.clientX < Pa.x + Pa.w && event.clientY > Pa.y && event.clientY < Pa.y + Pa.h) {
        Pa.w = 45;
        Pa.h = 45;
        Pa.x = 187.5;
        Pa.y = 387.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(Pa.x, Pa.y, Pa.w, Pa.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Pa', Pa.x + 25, Pa.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('91', Pa.x + 6, Pa.y + 10);
        console.log('hovered: Pa');
    } 
    else {
        ctx.clearRect(Pa.x, Pa.y, Pa.w + 1, Pa.h + 1);
        Pa.w = 40;
        Pa.h = 40;
        Pa.x = 190;
        Pa.y = 390;
        ctx.fillStyle = actinides;
        ctx.fillRect(Pa.x, Pa.y, Pa.w, Pa.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Pa', Pa.x + 22.5, Pa.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('91', Pa.x + 6, Pa.y + 10);
}
}
function draw_U() {
    if (event.clientX > U.x && event.clientX < U.x + U.w && event.clientY > U.y && event.clientY < U.y + U.h) {
        U.w = 45;
        U.h = 45;
        U.x = 232.5;
        U.y = 387.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(U.x, U.y, U.w, U.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('U', U.x + 25, U.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('92', U.x + 6, U.y + 10);
        console.log('hovered: U');
    } 
    else {
        ctx.clearRect(U.x, U.y, U.w + 1, U.h + 1);
        U.w = 40;
        U.h = 40;
        U.x = 235;
        U.y = 390;
        ctx.fillStyle = actinides;
        ctx.fillRect(U.x, U.y, U.w, U.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('U', U.x + 22.5, U.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('92', U.x + 6, U.y + 10);
}
}
function draw_Np() {
    if (event.clientX > Np.x && event.clientX < Np.x + Np.w && event.clientY > Np.y && event.clientY < Np.y + Np.h) {
        Np.w = 45;
        Np.h = 45;
        Np.x = 277.5;
        Np.y = 387.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(Np.x, Np.y, Np.w, Np.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Np', Np.x + 25, Np.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('93', Np.x + 6, Np.y + 10);
        console.log('hovered: Np');
    } 
    else {
        ctx.clearRect(Np.x, Np.y, Np.w + 1, Np.h + 1);
        Np.w = 40;
        Np.h = 40;
        Np.x = 280;
        Np.y = 390;
        ctx.fillStyle = actinides;
        ctx.fillRect(Np.x, Np.y, Np.w, Np.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Np', Np.x + 22.5, Np.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('93', Np.x + 6, Np.y + 10);
}
}
function draw_Pu() {
    if (event.clientX > Pu.x && event.clientX < Pu.x + Pu.w && event.clientY > Pu.y && event.clientY < Pu.y + Pu.h) {
        Pu.w = 45;
        Pu.h = 45;
        Pu.x = 322.5;
        Pu.y = 387.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(Pu.x, Pu.y, Pu.w, Pu.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Pu', Pu.x + 25, Pu.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('94', Pu.x + 6, Pu.y + 10);
        console.log('hovered: Pu');
    } 
    else {
        ctx.clearRect(Pu.x, Pu.y, Pu.w + 1, Pu.h + 1);
        Pu.w = 40;
        Pu.h = 40;
        Pu.x = 325;
        Pu.y = 390;
        ctx.fillStyle = actinides;
        ctx.fillRect(Pu.x, Pu.y, Pu.w, Pu.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Pu', Pu.x + 22.5, Pu.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('94', Pu.x + 6, Pu.y + 10);
}
}
function draw_Am() {
    if (event.clientX > Am.x && event.clientX < Am.x + Am.w && event.clientY > Am.y && event.clientY < Am.y + Am.h) {
        Am.w = 45;
        Am.h = 45;
        Am.x = 367.5;
        Am.y = 387.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(Am.x, Am.y, Am.w, Am.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Am', Am.x + 25, Am.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('95', Am.x + 6, Am.y + 10);
        console.log('hovered: Am');
    } 
    else {
        ctx.clearRect(Am.x, Am.y, Am.w + 1, Am.h + 1);
        Am.w = 40;
        Am.h = 40;
        Am.x = 370;
        Am.y = 390;
        ctx.fillStyle = actinides;
        ctx.fillRect(Am.x, Am.y, Am.w, Am.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Am', Am.x + 22.5, Am.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('95', Am.x + 6, Am.y + 10);
}
}
function draw_Cm() {
    if (event.clientX > Cm.x && event.clientX < Cm.x + Cm.w && event.clientY > Cm.y && event.clientY < Cm.y + Cm.h) {
        Cm.w = 45;
        Cm.h = 45;
        Cm.x = 412.5;
        Cm.y = 387.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(Cm.x, Cm.y, Cm.w, Cm.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Cm', Cm.x + 25, Cm.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('96', Cm.x + 6, Cm.y + 10);
        console.log('hovered: Cm');
    } 
    else {
        ctx.clearRect(Cm.x, Cm.y, Cm.w + 1, Cm.h + 1);
        Cm.w = 40;
        Cm.h = 40;
        Cm.x = 415;
        Cm.y = 390;
        ctx.fillStyle = actinides;
        ctx.fillRect(Cm.x, Cm.y, Cm.w, Cm.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Cm', Cm.x + 22.5, Cm.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('96', Cm.x + 6, Cm.y + 10);
}
}
function draw_Bk() {
    if (event.clientX > Bk.x && event.clientX < Bk.x + Bk.w && event.clientY > Bk.y && event.clientY < Bk.y + Bk.h) {
        Bk.w = 45;
        Bk.h = 45;
        Bk.x = 457.5;
        Bk.y = 387.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(Bk.x, Bk.y, Bk.w, Bk.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Bk', Bk.x + 25, Bk.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('97', Bk.x + 6, Bk.y + 10);
        console.log('hovered: Bk');
    } 
    else {
        ctx.clearRect(Bk.x, Bk.y, Bk.w + 1, Bk.h + 1);
        Bk.w = 40;
        Bk.h = 40;
        Bk.x = 460;
        Bk.y = 390;
        ctx.fillStyle = actinides;
        ctx.fillRect(Bk.x, Bk.y, Bk.w, Bk.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Bk', Bk.x + 22.5, Bk.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('97', Bk.x + 6, Bk.y + 10);
}
}
function draw_Cf() {
    if (event.clientX > Cf.x && event.clientX < Cf.x + Cf.w && event.clientY > Cf.y && event.clientY < Cf.y + Cf.h) {
        Cf.w = 45;
        Cf.h = 45;
        Cf.x = 502.5;
        Cf.y = 387.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(Cf.x, Cf.y, Cf.w, Cf.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Cf', Cf.x + 25, Cf.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('98', Cf.x + 6, Cf.y + 10);
        console.log('hovered: Cf');
    } 
    else {
        ctx.clearRect(Cf.x, Cf.y, Cf.w + 1, Cf.h + 1);
        Cf.w = 40;
        Cf.h = 40;
        Cf.x = 505;
        Cf.y = 390;
        ctx.fillStyle = actinides;
        ctx.fillRect(Cf.x, Cf.y, Cf.w, Cf.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Cf', Cf.x + 22.5, Cf.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('98', Cf.x + 6, Cf.y + 10);
}
}
function draw_Es() {
    if (event.clientX > Es.x && event.clientX < Es.x + Es.w && event.clientY > Es.y && event.clientY < Es.y + Es.h) {
        Es.w = 45;
        Es.h = 45;
        Es.x = 547.5;
        Es.y = 387.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(Es.x, Es.y, Es.w, Es.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Es', Es.x + 25, Es.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('99', Es.x + 6, Es.y + 10);
        console.log('hovered: Es');
    } 
    else {
        ctx.clearRect(Es.x, Es.y, Es.w + 1, Es.h + 1);
        Es.w = 40;
        Es.h = 40;
        Es.x = 550;
        Es.y = 390;
        ctx.fillStyle = actinides;
        ctx.fillRect(Es.x, Es.y, Es.w, Es.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Es', Es.x + 22.5, Es.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('99', Es.x + 6, Es.y + 10);
}
}
function draw_Fm() {
    if (event.clientX > Fm.x && event.clientX < Fm.x + Fm.w && event.clientY > Fm.y && event.clientY < Fm.y + Fm.h) {
        Fm.w = 45;
        Fm.h = 45;
        Fm.x = 592.5;
        Fm.y = 387.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(Fm.x, Fm.y, Fm.w, Fm.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Fm', Fm.x + 25, Fm.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('100', Fm.x + 8, Fm.y + 10);
        console.log('hovered: Fm');
    } 
    else {
        ctx.clearRect(Fm.x, Fm.y, Fm.w + 1, Fm.h + 1);
        Fm.w = 40;
        Fm.h = 40;
        Fm.x = 595;
        Fm.y = 390;
        ctx.fillStyle = actinides;
        ctx.fillRect(Fm.x, Fm.y, Fm.w, Fm.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Fm', Fm.x + 22.5, Fm.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('100', Fm.x + 8, Fm.y + 10);
}
}
function draw_Md() {
    if (event.clientX > Md.x && event.clientX < Md.x + Md.w && event.clientY > Md.y && event.clientY < Md.y + Md.h) {
        Md.w = 45;
        Md.h = 45;
        Md.x = 637.5;
        Md.y = 387.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(Md.x, Md.y, Md.w, Md.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Md', Md.x + 25, Md.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('101', Md.x + 8, Md.y + 10);
        console.log('hovered: Md');
    } 
    else {
        ctx.clearRect(Md.x, Md.y, Md.w + 1, Md.h + 1);
        Md.w = 40;
        Md.h = 40;
        Md.x = 640;
        Md.y = 390;
        ctx.fillStyle = actinides;
        ctx.fillRect(Md.x, Md.y, Md.w, Md.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Md', Md.x + 22.5, Md.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('101', Md.x + 8, Md.y + 10);
}
}
function draw_No() {
    if (event.clientX > No.x && event.clientX < No.x + No.w && event.clientY > No.y && event.clientY < No.y + No.h) {
        No.w = 45;
        No.h = 45;
        No.x = 682.5;
        No.y = 387.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(No.x, No.y, No.w, No.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('No', No.x + 25, No.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('102', No.x + 8, No.y + 10);
        console.log('hovered: No');
    } 
    else {
        ctx.clearRect(No.x, No.y, No.w + 1, No.h + 1);
        No.w = 40;
        No.h = 40;
        No.x = 685;
        No.y = 390;
        ctx.fillStyle = actinides;
        ctx.fillRect(No.x, No.y, No.w, No.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('No', No.x + 22.5, No.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('102', No.x + 8, No.y + 10);
}
}
function draw_Lr() {
    if (event.clientX > Lr.x && event.clientX < Lr.x + Lr.w && event.clientY > Lr.y && event.clientY < Lr.y + Lr.h) {
        Lr.w = 45;
        Lr.h = 45;
        Lr.x = 727.5;
        Lr.y = 387.5;
        ctx.fillStyle = actinides;
        ctx.fillRect(Lr.x, Lr.y, Lr.w, Lr.h);
        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText('Lr', Lr.x + 25, Lr.y + 25);
        ctx.font = '10px Arial';
        ctx.fillText('103', Lr.x + 8, Lr.y + 10);
        console.log('hovered: Lr');
    } 
    else {
        ctx.clearRect(Lr.x, Lr.y, Lr.w + 1, Lr.h + 1);
        Lr.w = 40;
        Lr.h = 40;
        Lr.x = 730;
        Lr.y = 390;
        ctx.fillStyle = actinides;
        ctx.fillRect(Lr.x, Lr.y, Lr.w, Lr.h);
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText('Lr', Lr.x + 22.5, Lr.y + 22.5);
        ctx.font = '10px Arial';
        ctx.fillText('103', Lr.x + 8, Lr.y + 10);
}
}


addEventListener('mousemove', function() {
    //row 1
    draw_H();
    draw_He();
    //row 2
    draw_Li();
    draw_Be();
    draw_B();
    draw_C();
    draw_N();
    draw_O();
    draw_F();
    draw_Ne();
    //row 3
    draw_Na();
    draw_Mg();
    draw_Al();
    draw_Si();
    draw_P();
    draw_S();
    draw_Cl();
    draw_Ar();
    //row 4
    draw_K();
    draw_Ca();
    draw_Sc();
    draw_Ti();
    draw_V();
    draw_Cr();
    draw_Mn();
    draw_Fe();
    draw_Co();
    draw_Ni();
    draw_Cu();
    draw_Zn();
    draw_Ga();
    draw_Ge();
    draw_As();
    draw_Se();
    draw_Br();
    draw_Kr();
    //row 5
    draw_Rb();
    draw_Sr(); 
    draw_Y();
    draw_Zr();
    draw_Nb();
    draw_Mo();
    draw_Tc();
    draw_Ru();
    draw_Rh();
    draw_Pd();
    draw_Ag();
    draw_Cd();
    draw_In();
    draw_Sn();
    draw_Sb();
    draw_Te();
    draw_I();
    draw_Xe();
    //row 6
    draw_Cs();
    draw_Ba();
    draw_La();
    draw_Hf();
    draw_Ta();
    draw_W();
    draw_Re();
    draw_Os();
    draw_Ir();
    draw_Pt();
    draw_Au();
    draw_Hg();
    draw_Tl();
    draw_Pb();
    draw_Bi();
    draw_Po();
    draw_At();
    draw_Rn();
    //row 7
    draw_Fr();
    draw_Ra();
    draw_Ac();
    draw_Rf();
    draw_Db();
    draw_Sg();
    draw_Bh();
    draw_Hs();
    draw_Mt();
    draw_Ds();
    draw_Rg();
    draw_Cn();
    draw_Nh();
    draw_Fl();
    draw_Mc();
    draw_Lv();
    draw_Ts();
    draw_Og();
    //row 8
    draw_Ce();
    draw_Pr();
    draw_Nd();
    draw_Pm();
    draw_Sm();
    draw_Eu();
    draw_Gd();
    draw_Tb();
    draw_Dy();
    draw_Ho();
    draw_Er();
    draw_Tm();
    draw_Yb();
    draw_Lu();
    //row 9
    draw_Th();
    draw_Pa();
    draw_U();
    draw_Np();
    draw_Pu();
    draw_Am();
    draw_Cm();
    draw_Bk();
    draw_Cf();
    draw_Es();
    draw_Fm();
    draw_Md();
    draw_No();
    draw_Lr();

    

});

addEventListener('click', function() {
    if (event.clientX > H.x && event.clientX < H.x + H.w && event.clientY > H.y && event.clientY < H.y + H.h){
        console.log('clicked H');
        displayInfo(elementsObj[1]);
        
    }
        if (event.clientX > He.x && event.clientX < He.x + He.w && event.clientY > He.y && event.clientY < He.y + He.h){
        console.log('clicked He');
        displayInfo(elementsObj[2]);

    }
    //row 2
    if (event.clientX > Li.x && event.clientX < Li.x + Li.w && event.clientY > Li.y && event.clientY < Li.y + Li.h){
        console.log('clicked Li');
        displayInfo(elementsObj[3]);

    }
        if (event.clientX > Be.x && event.clientX < Be.x + Be.w && event.clientY > Be.y && event.clientY < Be.y + Be.h){
        console.log('clicked Be'); 
        displayInfo(elementsObj[4]);

    }
        if (event.clientX > B.x && event.clientX < B.x + B.w && event.clientY > B.y && event.clientY < B.y + B.h){
        console.log('clicked B');
        displayInfo(elementsObj[5]);

    }
        if (event.clientX > C.x && event.clientX < C.x + C.w && event.clientY > C.y && event.clientY < C.y + C.h){
        console.log('clicked C');
        displayInfo(elementsObj[6]);

    }
        if (event.clientX > N.x && event.clientX < N.x + N.w && event.clientY > N.y && event.clientY < N.y + N.h){
        console.log('clicked N');
        displayInfo(elementsObj[7]);

    }
        if (event.clientX > O.x && event.clientX < O.x + O.w && event.clientY > O.y && event.clientY < O.y + O.h){
        console.log('clicked O');
        displayInfo(elementsObj[8]);

    }   
        if (event.clientX > F.x && event.clientX < F.x + F.w && event.clientY > F.y && event.clientY < F.y + F.h){
        console.log('clicked F');
        displayInfo(elementsObj[9]);

    }
        if (event.clientX > Ne.x && event.clientX < Ne.x + Ne.w && event.clientY > Ne.y && event.clientY < Ne.y + Ne.h){
        console.log('clicked Ne');
        displayInfo(elementsObj[10]);

    }
    //row 3
    if (event.clientX > Na.x && event.clientX < Na.x + Na.w && event.clientY > Na.y && event.clientY < Na.y + Na.h){
        console.log('clicked Na');
        displayInfo(elementsObj[11]);

    }
        if (event.clientX > Mg.x && event.clientX < Mg.x + Mg.w && event.clientY > Mg.y && event.clientY < Mg.y + Mg.h){
        console.log('clicked Mg');
        displayInfo(elementsObj[12]);


    }
        if (event.clientX > Al.x && event.clientX < Al.x + Al.w && event.clientY > Al.y && event.clientY < Al.y + Al.h){
        console.log('clicked Al');
        displayInfo(elementsObj[13]);

    }
        if (event.clientX > Si.x && event.clientX < Si.x + Si.w && event.clientY > Si.y && event.clientY < Si.y + Si.h){    
        console.log('clicked Si');
        displayInfo(elementsObj[14]);

    }
        if (event.clientX > P.x && event.clientX < P.x + P.w && event.clientY > P.y && event.clientY < P.y + P.h){
        console.log('clicked P');
        displayInfo(elementsObj[15]);

    }
        if (event.clientX > S.x && event.clientX < S.x + S.w && event.clientY > S.y && event.clientY < S.y + S.h){
        console.log('clicked S');
        displayInfo(elementsObj[16]);

    }
        if (event.clientX > Cl.x && event.clientX < Cl.x + Cl.w && event.clientY > Cl.y && event.clientY < Cl.y + Cl.h){
        console.log('clicked Cl');
        displayInfo(elementsObj[17]);

    }
        if (event.clientX > Ar.x && event.clientX < Ar.x + Ar.w && event.clientY > Ar.y && event.clientY < Ar.y + Ar.h){
        console.log('clicked Ar');
        displayInfo(elementsObj[18]);

    }
    //row 4
        if (event.clientX > K.x && event.clientX < K.x + K.w && event.clientY > K.y && event.clientY < K.y + K.h){
        console.log('clicked K');
        displayInfo(elementsObj[19]);

    }
        if (event.clientX > Ca.x && event.clientX < Ca.x + Ca.w && event.clientY > Ca.y && event.clientY < Ca.y + Ca.h){
        console.log('clicked Ca');
        displayInfo(elementsObj[20]);

    }
        if (event.clientX > Sc.x && event.clientX < Sc.x + Sc.w && event.clientY > Sc.y && event.clientY < Sc.y + Sc.h){
        console.log('clicked Sc');
        displayInfo(elementsObj[21]);

    }
        if (event.clientX > Ti.x && event.clientX < Ti.x + Ti.w && event.clientY > Ti.y && event.clientY < Ti.y + Ti.h){
        console.log('clicked Ti');
        displayInfo(elementsObj[22]);
    
    }
        if (event.clientX > V.x && event.clientX < V.x + V.w && event.clientY > V.y && event.clientY < V.y + V.h){
        console.log('clicked V');
        displayInfo(elementsObj[23]);
    }
        if (event.clientX > Cr.x && event.clientX < Cr.x + Cr.w && event.clientY > Cr.y && event.clientY < Cr.y + Cr.h){
        console.log('clicked Cr');
        displayInfo(elementsObj[24]);
    }
        if (event.clientX > Mn.x && event.clientX < Mn.x + Mn.w && event.clientY > Mn.y && event.clientY < Mn.y + Mn.h){
        console.log('clicked Mn');
        displayInfo(elementsObj[25]);
    }
        if (event.clientX > Fe.x && event.clientX < Fe.x + Fe.w && event.clientY > Fe.y && event.clientY < Fe.y + Fe.h){
        console.log('clicked Fe');
        displayInfo(elementsObj[26]);
    }
        if (event.clientX > Co.x && event.clientX < Co.x + Co.w && event.clientY > Co.y && event.clientY < Co.y + Co.h){
        console.log('clicked Co');
        displayInfo(elementsObj[27]);
    }
        if (event.clientX > Ni.x && event.clientX < Ni.x + Ni.w && event.clientY > Ni.y && event.clientY < Ni.y + Ni.h){
        console.log('clicked Ni');
        displayInfo(elementsObj[28]);

    }
        if (event.clientX > Cu.x && event.clientX < Cu.x + Cu.w && event.clientY > Cu.y && event.clientY < Cu.y + Cu.h){
        console.log('clicked Cu');
        displayInfo(elementsObj[29]);

    }
        if (event.clientX > Zn.x && event.clientX < Zn.x + Zn.w && event.clientY > Zn.y && event.clientY < Zn.y + Zn.h){
        console.log('clicked Zn');
        displayInfo(elementsObj[30]);

    }
        if (event.clientX > Ga.x && event.clientX < Ga.x + Ga.w && event.clientY > Ga.y && event.clientY < Ga.y + Ga.h){
        console.log('clicked Ga');
        displayInfo(elementsObj[31]);

    }
        if (event.clientX > Ge.x && event.clientX < Ge.x + Ge.w && event.clientY > Ge.y && event.clientY < Ge.y + Ge.h){
        console.log('clicked Ge');
        displayInfo(elementsObj[32]);

    }       
        if (event.clientX > As.x && event.clientX < As.x + As.w && event.clientY > As.y && event.clientY < As.y + As.h){
        console.log('clicked As');
        displayInfo(elementsObj[33]);

    }
        if (event.clientX > Se.x && event.clientX < Se.x + Se.w && event.clientY > Se.y && event.clientY < Se.y + Se.h){
        console.log('clicked Se');
        displayInfo(elementsObj[34]);

    }
        if (event.clientX > Br.x && event.clientX < Br.x + Br.w && event.clientY > Br.y && event.clientY < Br.y + Br.h){
        console.log('clicked Br');
        displayInfo(elementsObj[35]);

    }
        if (event.clientX > Kr.x && event.clientX < Kr.x + Kr.w && event.clientY > Kr.y && event.clientY < Kr.y + Kr.h){
        console.log('clicked Kr');
        displayInfo(elementsObj[36]);

    }
    //row 5
            if (event.clientX > Rb.x && event.clientX < Rb.x + Rb.w && event.clientY > Rb.y && event.clientY < Rb.y + Rb.h){
        console.log('clicked Rb');
        displayInfo(elementsObj[37]);

    }
        if (event.clientX > Sr.x && event.clientX < Sr.x + Sr.w && event.clientY > Sr.y && event.clientY < Sr.y + Sr.h){
        console.log('clicked Sr');
        displayInfo(elementsObj[38]);

    }
        if (event.clientX > Y.x && event.clientX < Y.x + Y.w && event.clientY > Y.y && event.clientY < Y.y + Y.h){
        console.log('clicked Y');
        displayInfo(elementsObj[39]);

    }
        if (event.clientX > Zr.x && event.clientX < Zr.x + Zr.w && event.clientY > Zr.y && event.clientY < Zr.y + Zr.h){
        console.log('clicked Zr');
        displayInfo(elementsObj[40]);

    }
        if (event.clientX > Nb.x && event.clientX < Nb.x + Nb.w && event.clientY > Nb.y && event.clientY < Nb.y + Nb.h){
        console.log('clicked Nb');
        displayInfo(elementsObj[41]);

    }
        if (event.clientX > Mo.x && event.clientX < Mo.x + Mo.w && event.clientY > Mo.y && event.clientY < Mo.y + Mo.h){
        console.log('clicked Mo');
        displayInfo(elementsObj[42]);

    }
        if (event.clientX > Tc.x && event.clientX < Tc.x + Tc.w && event.clientY > Tc.y && event.clientY < Tc.y + Tc.h){
        console.log('clicked Tc');
        displayInfo(elementsObj[43]);

    }
        if (event.clientX > Ru.x && event.clientX < Ru.x + Ru.w && event.clientY > Ru.y && event.clientY < Ru.y + Ru.h){
        console.log('clicked Ru');
        displayInfo(elementsObj[44]);

    }
        if (event.clientX > Rh.x && event.clientX < Rh.x + Rh.w && event.clientY > Rh.y && event.clientY < Rh.y + Rh.h){
        console.log('clicked Rh');
        displayInfo(elementsObj[45]);

    }
        if (event.clientX > Pd.x && event.clientX < Pd.x + Pd.w && event.clientY > Pd.y && event.clientY < Pd.y + Pd.h){
        console.log('clicked Pd');
        displayInfo(elementsObj[46]);

    }
        if (event.clientX > Ag.x && event.clientX < Ag.x + Ag.w && event.clientY > Ag.y && event.clientY < Ag.y + Ag.h){
        console.log('clicked Ag');
        displayInfo(elementsObj[47]);

    }
        if (event.clientX > Cd.x && event.clientX < Cd.x + Cd.w && event.clientY > Cd.y && event.clientY < Cd.y + Cd.h){
        console.log('clicked Cd');
        displayInfo(elementsObj[48]);

    }
        if (event.clientX > In.x && event.clientX < In.x + In.w && event.clientY > In.y && event.clientY < In.y + In.h){
        console.log('clicked In');
        displayInfo(elementsObj[49]);

    }
        if (event.clientX > Sn.x && event.clientX < Sn.x + Sn.w && event.clientY > Sn.y && event.clientY < Sn.y + Sn.h){
        console.log('clicked Sn');
        displayInfo(elementsObj[50]);

    }
        if (event.clientX > Sb.x && event.clientX < Sb.x + Sb.w && event.clientY > Sb.y && event.clientY < Sb.y + Sb.h){
        console.log('clicked Sb');
        displayInfo(elementsObj[51]);

    }
        if (event.clientX > Te.x && event.clientX < Te.x + Te.w && event.clientY > Te.y && event.clientY < Te.y + Te.h){
        console.log('clicked Te');
        displayInfo(elementsObj[52]);

    }       
        if (event.clientX > I.x && event.clientX < I.x + I.w && event.clientY > I.y && event.clientY < I.y + I.h){
        console.log('clicked I');
        displayInfo(elementsObj[53]);

    }
        if (event.clientX > Xe.x && event.clientX < Xe.x + Xe.w && event.clientY > Xe.y && event.clientY < Xe.y + Xe.h){
        console.log('clicked Xe');
        displayInfo(elementsObj[54]);
    }
        if (event.clientX > Cs.x && event.clientX < Cs.x + Cs.w && event.clientY > Cs.y && event.clientY < Cs.y + Cs.h){
        console.log('clicked Cs');
        displayInfo(elementsObj[55]);
    }
        if (event.clientX > Ba.x && event.clientX < Ba.x + Ba.w && event.clientY > Ba.y && event.clientY < Ba.y + Ba.h){
        console.log('clicked Ba');
        displayInfo(elementsObj[56]);
    }
        if (event.clientX > La.x && event.clientX < La.x + La.w && event.clientY > La.y && event.clientY < La.y + La.h){
        console.log('clicked La');
        displayInfo(elementsObj[57]);

    }
        if (event.clientX > Hf.x && event.clientX < Hf.x + Hf.w && event.clientY > Hf.y && event.clientY < Hf.y + Hf.h){
        console.log('clicked Hf');
        displayInfo(elementsObj[72]);
    }
        if (event.clientX > Ta.x && event.clientX < Ta.x + Ta.w && event.clientY > Ta.y && event.clientY < Ta.y + Ta.h){
        console.log('clicked Ta');
        displayInfo(elementsObj[73]);
    }
        if (event.clientX > W.x && event.clientX < W.x + W.w && event.clientY > W.y && event.clientY < W.y + W.h){
        console.log('clicked W');
        displayInfo(elementsObj[74]);
    }
        if (event.clientX > Re.x && event.clientX < Re.x + Re.w && event.clientY > Re.y && event.clientY < Re.y + Re.h){
        console.log('clicked Re');
        displayInfo(elementsObj[75]);
    }
        if (event.clientX > Os.x && event.clientX < Os.x + Os.w && event.clientY > Os.y && event.clientY < Os.y + Os.h){
        console.log('clicked Os');
        displayInfo(elementsObj[76]);
    }
        if (event.clientX > Ir.x && event.clientX < Ir.x + Ir.w && event.clientY > Ir.y && event.clientY < Ir.y + Ir.h){
        console.log('clicked Ir');
        displayInfo(elementsObj[77]);
    }
        if (event.clientX > Pt.x && event.clientX < Pt.x + Pt.w && event.clientY > Pt.y && event.clientY < Pt.y + Pt.h){
        console.log('clicked Pt');
        displayInfo(elementsObj[78]);
    }
        if (event.clientX > Au.x && event.clientX < Au.x + Au.w && event.clientY > Au.y && event.clientY < Au.y + Au.h){
        console.log('clicked Au');
        displayInfo(elementsObj[79]);
    }
        if (event.clientX > Hg.x && event.clientX < Hg.x + Hg.w && event.clientY > Hg.y && event.clientY < Hg.y + Hg.h){
        console.log('clicked Hg');
        displayInfo(elementsObj[80]);
    }
        if (event.clientX > Tl.x && event.clientX < Tl.x + Tl.w && event.clientY > Tl.y && event.clientY < Tl.y + Tl.h){
        console.log('clicked Tl');
        displayInfo(elementsObj[81]);
    }
        if (event.clientX > Pb.x && event.clientX < Pb.x + Pb.w && event.clientY > Pb.y && event.clientY < Pb.y + Pb.h){
        console.log('clicked Pb');
        displayInfo(elementsObj[82]);
    }
        if (event.clientX > Bi.x && event.clientX < Bi.x + Bi.w && event.clientY > Bi.y && event.clientY < Bi.y + Bi.h){
        console.log('clicked Bi');
        displayInfo(elementsObj[83]);
    }
        if (event.clientX > Po.x && event.clientX < Po.x + Po.w && event.clientY > Po.y && event.clientY < Po.y + Po.h){
        console.log('clicked Po');
        displayInfo(elementsObj[84]);
    }
        if (event.clientX > At.x && event.clientX < At.x + At.w && event.clientY > At.y && event.clientY < At.y + At.h){
        console.log('clicked At');
        displayInfo(elementsObj[85]);
    }
        if (event.clientX > Rn.x && event.clientX < Rn.x + Rn.w && event.clientY > Rn.y && event.clientY < Rn.y + Rn.h){
        console.log('clicked Rn');
        displayInfo(elementsObj[86]);
    }
    //row 7
        if (event.clientX > Fr.x && event.clientX < Fr.x + Fr.w && event.clientY > Fr.y && event.clientY < Fr.y + Fr.h){
        console.log('clicked Fr');
        displayInfo(elementsObj[87]);

    }
        if (event.clientX > Ra.x && event.clientX < Ra.x + Ra.w && event.clientY > Ra.y && event.clientY < Ra.y + Ra.h){
        console.log('clicked Ra');
        displayInfo(elementsObj[88]);

    }
        if (event.clientX > Ac.x && event.clientX < Ac.x + Ac.w && event.clientY > Ac.y && event.clientY < Ac.y + Ac.h){
        console.log('clicked Ac');
        displayInfo(elementsObj[89]);

    }
        if (event.clientX > Rf.x && event.clientX < Rf.x + Rf.w && event.clientY > Rf.y && event.clientY < Rf.y + Rf.h){
        console.log('clicked Rf');
        displayInfo(elementsObj[104]);

    }
        if (event.clientX > Db.x && event.clientX < Db.x + Db.w && event.clientY > Db.y && event.clientY < Db.y + Db.h){
        console.log('clicked Db');
        displayInfo(elementsObj[105]);
    }
        if (event.clientX > Sg.x && event.clientX < Sg.x + Sg.w && event.clientY > Sg.y && event.clientY < Sg.y + Sg.h){
        console.log('clicked Sg');  
        displayInfo(elementsObj[106]);

    }
        if (event.clientX > Bh.x && event.clientX < Bh.x + Bh.w && event.clientY > Bh.y && event.clientY < Bh.y + Bh.h){
        console.log('clicked Bh');
        displayInfo(elementsObj[107]);

    }
        if (event.clientX > Hs.x && event.clientX < Hs.x + Hs.w && event.clientY > Hs.y && event.clientY < Hs.y + Hs.h){
        console.log('clicked Hs');
        displayInfo(elementsObj[108]);
    }
        if (event.clientX > Mt.x && event.clientX < Mt.x + Mt.w && event.clientY > Mt.y && event.clientY < Mt.y + Mt.h){
        console.log('clicked Mt');
        displayInfo(elementsObj[109]);

    }
        if (event.clientX > Ds.x && event.clientX < Ds.x + Ds.w && event.clientY > Ds.y && event.clientY < Ds.y + Ds.h){
        console.log('clicked Ds');
        displayInfo(elementsObj[110]);
    }
        if (event.clientX > Rg.x && event.clientX < Rg.x + Rg.w && event.clientY > Rg.y && event.clientY < Rg.y + Rg.h){
        console.log('clicked Rg');
        displayInfo(elementsObj[111]);
    }
        if (event.clientX > Cn.x && event.clientX < Cn.x + Cn.w && event.clientY > Cn.y && event.clientY < Cn.y + Cn.h){
        console.log('clicked Cn');
        displayInfo(elementsObj[112]);
    }
        if (event.clientX > Nh.x && event.clientX < Nh.x + Nh.w && event.clientY > Nh.y && event.clientY < Nh.y + Nh.h){
        console.log('clicked Nh');
        displayInfo(elementsObj[113]);
    }
        if (event.clientX > Fl.x && event.clientX < Fl.x + Fl.w && event.clientY > Fl.y && event.clientY < Fl.y + Fl.h){
        console.log('clicked Fl');
        displayInfo(elementsObj[114]);
    }
        if (event.clientX > Mc.x && event.clientX < Mc.x + Mc.w && event.clientY > Mc.y && event.clientY < Mc.y + Mc.h){
        console.log('clicked Mc');
        displayInfo(elementsObj[115]);
    }
        if (event.clientX > Lv.x && event.clientX < Lv.x + Lv.w && event.clientY > Lv.y && event.clientY < Lv.y + Lv.h){
        console.log('clicked Lv');
        displayInfo(elementsObj[116]);
    }
        if (event.clientX > Ts.x && event.clientX < Ts.x + Ts.w && event.clientY > Ts.y && event.clientY < Ts.y + Ts.h){
        console.log('clicked Ts');
        displayInfo(elementsObj[117]);
    }
        if (event.clientX > Og.x && event.clientX < Og.x + Og.w && event.clientY > Og.y && event.clientY < Og.y + Og.h){
        console.log('clicked Og');
        displayInfo(elementsObj[118]);
    }
    //row 8
        if (event.clientX > Ce.x && event.clientX < Ce.x + Ce.w && event.clientY > Ce.y && event.clientY < Ce.y + Ce.h){
        console.log('clicked Ce');
        displayInfo(elementsObj[58]);
    }
        if (event.clientX > Pr.x && event.clientX < Pr.x + Pr.w && event.clientY > Pr.y && event.clientY < Pr.y + Pr.h){
        console.log('clicked Pr');
        displayInfo(elementsObj[59]);
    }
        if (event.clientX > Nd.x && event.clientX < Nd.x + Nd.w && event.clientY > Nd.y && event.clientY < Nd.y + Nd.h){
        console.log('clicked Nd');
        displayInfo(elementsObj[60]);
    }
        if (event.clientX > Pm.x && event.clientX < Pm.x + Pm.w && event.clientY > Pm.y && event.clientY < Pm.y + Pm.h){
        console.log('clicked Pm');
        displayInfo(elementsObj[61]);
    }
        if (event.clientX > Sm.x && event.clientX < Sm.x + Sm.w && event.clientY > Sm.y && event.clientY < Sm.y + Sm.h){
        console.log('clicked Sm');
        displayInfo(elementsObj[62]);
    }
        if (event.clientX > Eu.x && event.clientX < Eu.x + Eu.w && event.clientY > Eu.y && event.clientY < Eu.y + Eu.h){
        console.log('clicked Eu');
        displayInfo(elementsObj[63]);
    }
        if (event.clientX > Gd.x && event.clientX < Gd.x + Gd.w && event.clientY > Gd.y && event.clientY < Gd.y + Gd.h){
        console.log('clicked Gd');
        displayInfo(elementsObj[64]);

    }
        if (event.clientX > Tb.x && event.clientX < Tb.x + Tb.w && event.clientY > Tb.y && event.clientY < Tb.y + Tb.h){
        console.log('clicked Tb');
        displayInfo(elementsObj[65]);

    }
        if (event.clientX > Dy.x && event.clientX < Dy.x + Dy.w && event.clientY > Dy.y && event.clientY < Dy.y + Dy.h){
        console.log('clicked Dy');
        displayInfo(elementsObj[66]);

    }
        if (event.clientX > Ho.x && event.clientX < Ho.x + Ho.w && event.clientY > Ho.y && event.clientY < Ho.y + Ho.h){
        console.log('clicked Ho');
        displayInfo(elementsObj[67]);

    }
        if (event.clientX > Er.x && event.clientX < Er.x + Er.w && event.clientY > Er.y && event.clientY < Er.y + Er.h){
        console.log('clicked Er');
        displayInfo(elementsObj[68]);

    }
        if (event.clientX > Tm.x && event.clientX < Tm.x + Tm.w && event.clientY > Tm.y && event.clientY < Tm.y + Tm.h){
        console.log('clicked Tm');
        displayInfo(elementsObj[69]);

    }
        if (event.clientX > Yb.x && event.clientX < Yb.x + Yb.w && event.clientY > Yb.y && event.clientY < Yb.y + Yb.h){
        console.log('clicked Yb');
        displayInfo(elementsObj[70]);

    }
        if (event.clientX > Lu.x && event.clientX < Lu.x + Lu.w && event.clientY > Lu.y && event.clientY < Lu.y + Lu.h){
        console.log('clicked Lu');
        displayInfo(elementsObj[71]);

    }
    //row 9
        if (event.clientX > Th.x && event.clientX < Th.x + Th.w && event.clientY > Th.y && event.clientY < Th.y + Th.h){
        console.log('clicked Th');
        displayInfo(elementsObj[90]);
    }
        if (event.clientX > Pa.x && event.clientX < Pa.x + Pa.w && event.clientY > Pa.y && event.clientY < Pa.y + Pa.h){
        console.log('clicked Pa');
        displayInfo(elementsObj[91]);
    }
        if (event.clientX > U.x && event.clientX < U.x + U.w && event.clientY > U.y && event.clientY < U.y + U.h){
        console.log('clicked U');
        displayInfo(elementsObj[92]);

    }
        if (event.clientX > Np.x && event.clientX < Np.x + Np.w && event.clientY > Np.y && event.clientY < Np.y + Np.h){
        console.log('clicked Np');
        displayInfo(elementsObj[93]);

    }
        if (event.clientX > Pu.x && event.clientX < Pu.x + Pu.w && event.clientY > Pu.y && event.clientY < Pu.y + Pu.h){
        console.log('clicked Pu');
        displayInfo(elementsObj[94]);
    }   
        if (event.clientX > Am.x && event.clientX < Am.x + Am.w && event.clientY > Am.y && event.clientY < Am.y + Am.h){
        console.log('clicked Am');
        displayInfo(elementsObj[95]);
    }
        if (event.clientX > Cm.x && event.clientX < Cm.x + Cm.w && event.clientY > Cm.y && event.clientY < Cm.y + Cm.h){
        console.log('clicked Cm');
        displayInfo(elementsObj[96]);

    }
        if (event.clientX > Bk.x && event.clientX < Bk.x + Bk.w && event.clientY > Bk.y && event.clientY < Bk.y + Bk.h){
        console.log('clicked Bk');
        displayInfo(elementsObj[97]);

    }
        if (event.clientX > Cf.x && event.clientX < Cf.x + Cf.w && event.clientY > Cf.y && event.clientY < Cf.y + Cf.h){
        console.log('clicked Cf');
        displayInfo(elementsObj[98]);

    }
        if (event.clientX > Es.x && event.clientX < Es.x + Es.w && event.clientY > Es.y && event.clientY < Es.y + Es.h){
        console.log('clicked Es');
        displayInfo(elementsObj[99]);

    }
        if (event.clientX > Fm.x && event.clientX < Fm.x + Fm.w && event.clientY > Fm.y && event.clientY < Fm.y + Fm.h){
        console.log('clicked Fm');
        displayInfo(elementsObj[100]);

    }
        if (event.clientX > Md.x && event.clientX < Md.x + Md.w && event.clientY > Md.y && event.clientY < Md.y + Md.h){
        console.log('clicked Md');
        displayInfo(elementsObj[101]);

    }
        if (event.clientX > No.x && event.clientX < No.x + No.w && event.clientY > No.y && event.clientY < No.y + No.h){
        console.log('clicked No');
        displayInfo(elementsObj[102]);

    }
        if (event.clientX > Lr.x && event.clientX < Lr.x + Lr.w && event.clientY > Lr.y && event.clientY < Lr.y + Lr.h){
        console.log('clicked Lr');
        displayInfo(elementsObj[103]);

    }

    console.log(event.clientX, event.clientY);
});
