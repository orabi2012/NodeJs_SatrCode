//console.log("Hello Node Js");
function sum(n1 , n2){

return n1+n2 ;

}

function sub(n1 , n2){

    return n1-n2 ;
    
    }


    let op = process.argv[2] ;
    let n1 = process.argv[3]*1;
    let n2 = process.argv[4]*1;

console.log(`${n1} + ${n2} = ${sum (n1,n2)}`);


console.log(`${n1} - ${n2} = ${sub (n1,n2)}`);



