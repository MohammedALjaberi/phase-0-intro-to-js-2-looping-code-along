

function writeCards(name,event){
let Text = [] ; 
for (let i =0 ; i < name.length ; i++){
    Text[i] = `Thank you, ${name} for the wonderful ${event} gift!`
}
return Text ; 
}

function countDown(number){
    while(number>0){
        console.log(number);
        number--;
    }
    return number;
}
countDown(100);