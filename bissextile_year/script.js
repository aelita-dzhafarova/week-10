function isBissextile(year) {
    if(year % 4 === 0) {
        if(year % 100 === 0) {
            if(year % 400 === 0) {
                console.log("Год НЕ високосный");
            }
            else console.log("Год НЕ високосный");  
        } 
        else console.log("Год високосный");  
    } 
    else console.log("Год НЕ високосный");
}

isBissextile(2025);