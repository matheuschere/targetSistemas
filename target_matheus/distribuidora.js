let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros =  19849.53;
let total = sp+mg+rj+es+outros;

sp = (sp/total) * 100; 
rj = (rj/total) * 100; 
mg = (mg/total) * 100; 
es = (es/total) * 100; 
outros = (outros/total) * 100; 
console.log(parseInt(sp) + "%");
console.log(parseInt(rj)+ "%");
console.log(parseInt(mg)+ "%");
console.log(parseInt(es)+ "%");
console.log(parseInt(outros)+ "%");