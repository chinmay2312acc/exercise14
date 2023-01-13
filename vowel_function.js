function vowel_check(letter){ 

    let vowels = ["a","e","i","o","u","A","E","I","O","U"]

    for(let count =0 ;count<vowels.length; count = count + 1){

        if(vowels[count]==letter){

            return true  ; 
            break ; 
        }
    }
}

function vowel_count(string){ 

    let len = string.length; 
    let vowelcount  = 0 ;
    for ( let count=0;count<len;count = count + 1 ){
         if(vowel_check(string[count])==true){
            vowelcount=vowelcount+1 ;
         }
    } 

    return vowelcount ; 
} 

let result = vowel_count("helloOA") ; 
console.log(result) ;