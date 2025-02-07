/* HW: Create below methods,
/* Створити метод price(), який обчислює та повертає загальну вартість наданих послуг.
/* Створити метод minPrice(), який повертає мінімальну ціну.
/* Створити метод maxPrice(), який повертає максимальну ціну.
*/

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "price" : function () {
        let sum = 0;

        /* ver1
        // const allThisObjectItems = Object.keys(services).filter(key => typeof services[key] !== "function");
        */

        for(const item in services){
            let currentPrice = Number.parseInt(services[item]);
            if(Number.isNaN(currentPrice) == false){
            sum += currentPrice;
        }

        /* ver1
        // for(let i = 0; i < allThisObjectItems.length; i++){
        //         sum += Number.parseInt(services[allThisObjectItems[i]]);
        //     }
        */
        
        /* Alternative way of calculating sum
        // allThisObjectItems.forEach((element) => sum += Number.parseInt(services[element]));
        */
        }
        return sum;
    },
    "minPrice" : function () {
        let min = +Infinity;
        
        /* ver1
        // const allThisObjectItems = Object.keys(services).filter(key => typeof services[key] !== "function");
        */

        for(const item in services){
            let currentPrice = Number.parseInt(services[item]);
            
            if(Number.isNaN(currentPrice) === false)
            {
                if(min > currentPrice){
                    min = currentPrice;
                }
            }
        /* ver1
        // for(let i = 0; i < allThisObjectItems.length; i++){
        //     let currentPrice = Number.parseInt(services[allThisObjectItems[i]]);
        //     if(Number.isNaN(currentPrice) === false)
        //     {
        //         if(i == 0){min = currentPrice}
        //         else if(min > currentPrice)
        //         {
        //             min = currentPrice;
        //         }
        //     }
        */

        /* Alternative way of calculating sum
        // allThisObjectItems.forEach((element) => sum += Number.parseInt(services[element]));
        */
        }
        return min;
    },
    "maxPrice" : function () {
        let max = -Infinity;
        
        /* ver1
        // const allThisObjectItems = Object.keys(services).filter(key => typeof services[key] !== "function");
        */

        for(const item in services){
            let currentPrice = Number.parseInt(services[item]);
            
            if(Number.isNaN(currentPrice) === false)
            {
                if(max < currentPrice){
                    max = currentPrice;
                }
            }
        
        /* ver1
        // for(let i = 0; i < allThisObjectItems.length; i++){
        //     let currentPrice = Number.parseInt(services[allThisObjectItems[i]]);
        //     if(Number.isNaN(currentPrice) === false)
        //     {
        //         if(i == 0){max = currentPrice}
        //         else if(max < currentPrice)
        //         {
        //             max = currentPrice;
        //         }
        //     }
        */

        /* Alternative way of calculating sum
        // allThisObjectItems.forEach((element) => sum += Number.parseInt(services[element]));
        */
        }
        return max;
    }
}


// Examples of Object 'services' methods calling:
console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());


/* Additional comments: For new methods I used Object 'filter' method to sort out only items (NOT methods). 
/* Solution #2 is skip this filtering as it was't discussed on the lesson and use Number.isNaN() method during 'for' loop (lines 16, 29, 47). 
/* It'll helps us skip adding/overwriting sum/min/max values if value of Object item will be an method (than get NaN from parseInt). 
*/

/* Additional comments #2: Instead of name 'services' inside of object 'services' possibly to use 'this'. Was checked and works the same)
*/ 
