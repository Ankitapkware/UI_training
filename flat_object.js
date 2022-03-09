console.log("Flat nested object to single")
        let obj = {
            name : "ankita",
            obj2 : {
                college : "UIET",
                location : "Chandigarh"
            }
        };
        console.log(obj)

        const flatObj = (obj) => {
                let result = {};
                for (const i in obj){

                    if ((typeof obj[i]) === 'object' && !Array.isArray(obj[i])) {
            	const temp = flatObj(obj[i]);
			for (const j in temp) {
				result[i + '.' + j] = temp[j];
			}           
		}
		else {
			result[i] = obj[i];
		}
      }     
      return result;
                    }
    console.log(flatObj(obj));
