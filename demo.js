var ds = ["Nam", "Long", "Lien"];
console.log(ds[1]);
console.log(ds.length);
//duyet mang theo JS
for (var i = 0; i < ds.length; i++) {
    console.log(ds[i]);
}
//duyet mang: for in/off
for (var k in ds) {
    console.log("IN " + k);
}
for (var _i = 0, ds_1 = ds; _i < ds_1.length; _i++) {
    var x = ds_1[_i];
    console.log("OFF " + x);
}
