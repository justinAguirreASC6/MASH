

let livingSit = ["Mansion", "Apartment", "Shack", "House"];

//Gives arandom value of an index in LivingSit
function rand(){
    const decimal = Math.random();
    const times10 = decimal * livingSit.length;
    const final = Math.floor(times10)
    return final
}

//give a random element in LivingSit
function getHome(){
    livingSit.push(process.argv[2]);
    livingSit.push(process.argv[3]);
    let wht =  livingSit[rand()]; // call rand() to get the index to choose
    return wht; //send the element to get read
}


for(let i = 0; i < 8; i++){
    let home = getHome();
    if(home == "Mansion"){
        console.log("WHITE PRIVILEGE");
    }else if (home == "Shack"){
        console.log("Keep grinding!!")  
    }else{
        console.log("You regular, bruh")
    }

}

function getChildrenCount(){
    return Math.floor(Math.random()*100);
}
console.log(getChildrenCount());

function mash(){
    return "You will live in a(n) " + getHome() + ", and you will have " + getChildrenCount()

for(let i=0; i<7; i++){
    console.log(mash());
}

console.log(process.argv)


