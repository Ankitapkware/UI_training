console.log("Flatten array");
        var array = [0, 1, 2, [3, 4], 5];
        console.log(array)

        const flatArray = (arr) => {
            farr = arr.reduce((acc, val) => {
                if(Array.isArray(val) ){
                acc = acc.concat(flatArray(val));
                }
        
        else{
            acc.push(val);
        }
        return acc;
    },[])
    return farr;
        }
        console.log(flatArray(array));