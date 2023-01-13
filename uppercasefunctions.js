/*function upper_check(word){


    let Upper_caseletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] ;

    let len = Upper_caseletters.length ;
    let upp_count  = 0  ; 



    for(let count1 = 0;count1<word.length;count1  = count1 +1) {   

        let letter = word[count1] ;
        for(let count = 0;count<Upper_caseletters.length;count = count +1){

            if(letter=Upper_caseletters[count]){
               upp_count =upp_count+1 ;
            } 
        }  

        count =0 ;

    }  

    return upp_count ;
}

 /* function word_input(word){

    let len = word.length ; 
    let upper_letterscount =  0; 

    for(count = 0 ; count <len;count = count +1 ){

        if( upper_check(word[count])==true ){

            upper_letterscount = upper_letterscount + 1 ;

        }
    }

    return upper_letterscount  ;
} */ 


function string_input(word){

    let Upper_caseletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] ;
    let upp_count = 0 ;

    for(let count =0;count<word.length;count=count +1){

      //console.log(word[count]) ; 

      for(let count1=0;count1<Upper_caseletters.length;count1 = count1 + 1){
        if(word[count]==Upper_caseletters[count1]){
            upp_count = upp_count + 1 ;
        }
      }
    } 

    return upp_count ;
}

let result  = string_input("Hello WAorld") 


 console.log(result) ;

 //let x = "H" 
