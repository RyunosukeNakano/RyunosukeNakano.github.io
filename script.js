function onclickForm(){
    log = document.createElement("div");
    log.id = "form1";
    let num = Factorial.textbox.value;
    log.innerHTML = Peano(num);
    document.body.appendChild(log);
}

function GetFactorial(num){
    if(num == 0)return 1;
    return num*GetFactorial(num-1);
}

function GetGCD(x,y){
    return y == 0 ? x : GetGCD(y, x % y);
}

function Peano(n){//int n
    let str = "";
    if(n==0){
        return "0";
    }
    if(n==1){
        return "{0,{0}}";
    }

    for(let i = 0;i<n;i++){
        if(i!=0){
            str += ",";
        }
        str += Peano(i);
        console.log(i);
        console.log(Peano(i));
    }
    return "{" + str +"}";
}