let name = {
    Name : "Ankita",
    Address : "Chandigarh"
}

let details = function (number , age){

    console.log(this.Name + " " + this.Address + " " + number + " " + age)
}

Function.prototype.bind_polyfill = function(...args){
    let obj = this,
    params = args.slice(1);
    return function (...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
}

let print_det = details.bind_polyfill(name, "9999", "21");
print_det();