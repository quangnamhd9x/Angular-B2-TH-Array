var ds:string[] = ["Nam", "Long", "Lien"];

console.log(ds[1]);
console.log(ds.length);

//duyet mang theo JS
for (var i = 0; i < ds.length; i++) {
    console.log(ds[i]);
}


//duyet mang: for in/off
for (var k in ds){
    console.log("IN " + k);
    // 0 1 2
}

for (var x of ds){
    console.log("OFF " + x);
    // N L  Lien
}