let num = 0;
function OnButtonClick() {
    target = document.getElementById("output");
    target.innerHTML = ++num;
}

function OnFormButtonClick(){
    var hoge = form.textbox.value;
	target = document.getElementById("output2");
	target.innerHTML = Factorial(hoge);
}

function OnFormClick(){
    log = document.createElement("div");
    log.id = "form1";
    let num = Peano.textbox.value;
    log.innerHTML = GetPeano(num);
    document.body.appendChild(log);
}

function OnTextBox2Click(){
    log = document.createElement("div");
    log.id = "fact";
    let num = Factorial.textbox2.value;
    log.innerHTML = GetFactorial(num);
    document.body.appendChild(log);
}
function OnTextBox3Click(){
    log = document.createElement("div");
    log.id = "fact";
    let x = GCD.textbox3.value;
    let y = GCD.textbox4.value;
    log.innerHTML = GetGCD(x,y);
    document.body.appendChild(log);
}
function OnTextBox4Click(){
    log = document.createElement("div");
    log.id = "fact";
    let x = GCD.textbox3.value;
    let y = GCD.textbox4.value;
    log.innerHTML = GetLCM(x,y);
    document.body.appendChild(log);
}

function GetFactorial(num){
    if(num == 0)return 1;
    return num*GetFactorial(num-1);
}

function GetGCD(x,y){
    console.log(x==0 || y==0);
    console.log(x + " " + y);
    let p = x==0 || y==0;
    return  y == 0 ? x :GetGCD(y, x % y);
}

function GetLCM(x,y){
    return (x == 0 || y==0) ? 0:x*y/GetGCD(x,y);
}

function GetPeano(n){//int n
    let str = "";
    if(n==0){
        return "{}";
    }

    for(let i = 0;i<n;i++){
        if(i!=0){
            str += ",";
        }
        str += GetPeano(i);
    }
    return "{" + str +"}";
}