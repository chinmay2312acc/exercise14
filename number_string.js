function number_check(word){

    let num_count  =0 ;
    let num_array = "0123456789"  ; 
    for(let count=0;count<word.length;count = count + 1){

        for(let count1 =0 ;count1<num_array.length;count1 = count1 + 1){
            if(word[count] ==num_array[count1]){

                num_count = num_count + 1 ;

            }
        }
    } 

    return num_count ; 
}

let result = number_check("hello123") ; 
console.log(result) ;