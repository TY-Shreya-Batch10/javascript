var vege=["tomato","capsicum","potato",".carrot","beans"];
console.log(vege);
console.log(typeof vege);

var isArray= Array.isArray(vege);
console.log(isArray);

vege.push("bitterguard");
console.log(vege);

console.log(vege.pop());
console.log(vege);

vege.shift();
console.log(vege);

vege.unshift("chilli");
console.log(vege);

vege.splice(2,"cabage");
console.log(vege);

console.log(vege.includes("capsicum",1));

var citrus=vege.slice(0,4);
console.log(citrus);
