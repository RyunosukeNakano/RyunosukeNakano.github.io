const _BOARD_SIZE = 9;
const _FIRST_HAND = 0;
const _SECOND_HAND = 1;
const Lance1Dir = "Image/Shogi/Lance1.png";
const Lance2Dir = "Image/Shogi/Lance2.png";
const Pawn1Dir = "Image/Shogi/Pawn1.png";
const Pawn2Dir = "Image/Shogi/Pawn2.png";
const King1Dir = "Image/Shogi/King1.png";
const King2Dir = "Image/Shogi/King2.png";
const Knight1Dir = "Image/Shogi/Knight1.png";
const Knight2Dir = "Image/Shogi/Knight2.png";
const Silver1Dir = "Image/Shogi/Silver1.png";
const Silver2Dir = "Image/Shogi/Silver2.png";
const Gold1Dir = "Image/Shogi/Gold1.png";
const Gold2Dir = "Image/Shogi/Gold2.png";
const Rook1Dir = "Image/Shogi/Rook1.png";
const Rook2Dir = "Image/Shogi/Rook2.png";
const Bishop1Dir = "Image/Shogi/Bishop1.png";
const Bishop2Dir = "Image/Shogi/Bishop2.png";
const Pro_Pawn1Dir = "Image/Shogi/Pro-Pawn1.png";
const Pro_Pawn2Dir = "Image/Shogi/Pro-Pawn2.png";
const Pro_Lance1Dir = "Image/Shogi/Pro-Lance1.png";
const Pro_Lance2Dir = "Image/Shogi/Pro-Lance2.png";
const Pro_Knight1Dir = "Image/Shogi/Pro-Knight1.png";
const Pro_Knight2Dir = "Image/Shogi/Pro-Knight2.png";
const Pro_Silver1Dir = "Image/Shogi/Pro-Silver1.png";
const Pro_Silver2Dir = "Image/Shogi/Pro-Silver2.png";
const Pro_Bishop1Dir = "Image/Shogi/Pro-Bishop1.png";
const Pro_Bishop2Dir = "Image/Shogi/Pro-Bishop2.png";
const Pro_Rook1Dir = "Image/Shogi/Pro-Rook1.png";
const Pro_Rook2Dir = "Image/Shogi/Pro-Rook2.png";
const ClearDir = "Image/Shogi/Clear.png";
const Column = {
    1:"一",
    2:"二",
    3:"三",
    4:"四",
    5:"五",
    6:"六",
    7:"七",
    8:"八",
    9:"九"
}
const Piece = {
    "Pawn":"歩",
    "Lance":"香",
    "Knight":"桂",
    "Silver":"銀",
    "Gold":"金",
    "King":"玉",
    "Rook":"飛",
    "Bishop":"角"
}
let _turn  = 0;
let BOARD_ID;

let num_pawn1 = 0;
let num_lance1 = 0;
let num_knight1 = 0;
let num_Silver1 = 0;
let num_gold1 = 0;
let num_rook1 = 0;
let num_bishop1 = 0;
let num_king1 = 0;

let num_pawn2 = 0;
let num_lance2 = 0;
let num_knight2 = 0;
let num_Silver2 = 0;
let num_gold2 = 0;
let num_rook2 = 0;
let num_bishop2 = 0;
let num_king2 = 0;

function MIN(x,y){
    return x>y ? y:x;
}
function MAX(x,y){
    return x>y ? x:y;
}
function ABS(x){
    return x > 0?x:-x;
}
function Init(){
    GenerateTable();
    let img = document.createElement("img");
    img.alt = "";
    img.height = img.width = 50;
    for(let row = 0;row<_BOARD_SIZE;row++){
        for(let cell = 0;cell<_BOARD_SIZE;cell++){
            let str = row+""+cell;
            img.setAttribute("id","img:"+cell+""+row);
            switch(row){
                case 1-1:
                    if(cell == 1-1 || cell == 9-1){
                        img.src = Lance2Dir;
                    }
                    else if(cell == 2-1 || cell == 8-1){
                        img.src = Knight2Dir;
                    }
                    else if(cell == 3-1 || cell == 7-1){
                        img.src = Silver2Dir;
                    }
                    else if(cell == 4-1 || cell == 6-1){
                        img.src = Gold2Dir;
                    }
                    else{
                        img.src = King2Dir;
                    }
                    document.getElementById(str).appendChild(img.cloneNode(true));
                    break;

                case 2-1:
                    if(cell == 2-1){
                        img.src = Rook2Dir;
                    }
                    else if(cell == 8-1){
                        img.src = Bishop2Dir;
                    }
                    else{
                        img.src = ClearDir;
                    }
                    document.getElementById(str).appendChild(img.cloneNode(true));
                    break;

                case 3-1:
                    img.src = Pawn2Dir;
                    document.getElementById(str).appendChild(img.cloneNode(true));
                    break;

                case 9-1:
                    if(cell == 1-1 || cell == 9-1){
                        img.src = Lance1Dir;
                    }
                    else if(cell == 2-1 || cell == 8-1){
                        img.src = Knight1Dir;
                    }
                    else if(cell == 3-1 || cell == 7-1){
                        img.src = Silver1Dir;
                    }
                    else if(cell == 4-1 || cell == 6-1){
                        img.src = Gold1Dir;
                    }
                    else{
                        img.src = King1Dir;
                    }
                    document.getElementById(str).appendChild(img.cloneNode(true));
                    break;

                case 8-1:
                    if(cell == 8-1){
                        img.src = Rook1Dir;
                    }
                    else if(cell == 2-1){
                        img.src = Bishop1Dir;
                    }
                    else{
                        img.src = ClearDir;
                    }
                    document.getElementById(str).appendChild(img.cloneNode(true));
                    break;

                case 7-1:
                    img.src = Pawn1Dir;
                    document.getElementById(str).appendChild(img.cloneNode(true));
                    break;

                default:
                    img.src = ClearDir;
                    document.getElementById(str).appendChild(img.cloneNode(true));
                    break;
            }
        }
    }
}
function OnInitButtonClick(){
    document.getElementById("init_button").style.visibility = "hidden";
    document.getElementById("reload_button").style.visibility = "visible";
    document.getElementById("Coordinate").style.visibility = "visible";
    document.getElementById("Stand").style.visibility = "visible";
    document.getElementById("History").style.visibility = "hidden";
}
function GenerateTable(){
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");

    var tblBody = document.createElement("tbody");
    // creating all cells
    for (let i = 0; i < _BOARD_SIZE; i++) {
        // creates a table row
        let row = document.createElement("tr");
        for (let j = 0; j < _BOARD_SIZE; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            let cell = document.createElement("td");
            row.appendChild(cell);
            cell.setAttribute("id", i + "" + j);
            cell.setAttribute("align", "center");
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "1");
    tbl.setAttribute("id", "BOARD");

    BOARD_ID = document.getElementById(tbl.id);
    BOARD_ID.style.visibility = "hidden";

    let newRow = tbl.insertRow(0);
    //let newCell = newRow.insertCell(0);
    for(let i = 0;i<_BOARD_SIZE;i++){
        let newCell = newRow.insertCell(0);
        let text = document.createTextNode(i+1);
        newCell.appendChild(text);
        newCell.setAttribute("align","center");
    }
    let newCell = newRow.insertCell(-1);
    let text = document.createTextNode("/");
    newCell.appendChild(text);
    newCell.setAttribute("align","center");
    for(let i = 1;i-1<_BOARD_SIZE;i++){
        let cell = tbl.rows[i].insertCell(-1);
        cell.innerText = Column[i];
        cell.setAttribute("align","center");
    }
    newRow = tbl.insertRow(0);//後手の駒台
    for(let i = 0;i<9;i++){
        let newCell = newRow.insertCell(0);
        newCell.setAttribute("align","center");
        switch(i){
            case 0:
                newCell.innerText = "歩×" + num_pawn2;
                newCell.setAttribute("id","Pawn2");
                break;

            case 1:
                newCell.innerText = "香×" + num_lance2;
                newCell.setAttribute("id","Lance2");
                break;

            case 2:
                newCell.innerText = "桂×" + num_knight2;
                newCell.setAttribute("id","Knight2");
                break;

            case 3:
                newCell.innerText = "銀×" + num_Silver2;
                newCell.setAttribute("id","Silver2");
                break;

            case 4:
                newCell.innerText = "金×" + num_gold2;
                newCell.setAttribute("id","Gold2");
                break;

            case 5:
                newCell.innerText = "飛×" + num_rook2;
                newCell.setAttribute("id","Rook2");
                break;

            case 6:
                newCell.innerText = "角×" + num_bishop2;
                newCell.setAttribute("id","Bishop2");
                break;

            default:
                break;
        }
    }
    newRow = tbl.insertRow(tbl.rows.length);//先手の駒台
    for(let i = 0;i<9;i++){
        let newCell = newRow.insertCell(0);
        newCell.setAttribute("align","center");
        switch(9-1-i){
            case 0:
                newCell.innerText = "歩×" + num_pawn1;
                newCell.setAttribute("id","Pawn1");
                break;

            case 1:
                newCell.innerText = "香×" + num_lance1;
                newCell.setAttribute("id","Lance1");
                break;

            case 2:
                newCell.innerText = "桂×" + num_knight1;
                newCell.setAttribute("id","Knight1");
                break;

            case 3:
                newCell.innerText = "銀×" + num_Silver1;
                newCell.setAttribute("id","Silver1");
                break;

            case 4:
                newCell.innerText = "金×" + num_gold1;
                newCell.setAttribute("id","Gold1");
                break;

            case 5:
                newCell.innerText = "飛×" + num_rook1;
                newCell.setAttribute("id","Rook1");
                break;

            case 6:
                newCell.innerText = "角×" + num_bishop1;
                newCell.setAttribute("id","Bishop1");
                break;

            default:
                break;
        }
    }
}
function GetTurn(turn){
    return turn % 2;
}
function GetTurnById(id){
    let piece_src = document.getElementById(id);
    return piece_src[piece_src.length-1] + 1;
}
function OnCoordinateClick(){
    let coordinate = Coordinate.coordinate.value;
    let destination = Coordinate.destination.value;
    let x,y,fx,fy;
    if(!IsInBoard(coordinate) || !IsInBoard(destination)){
        alert ("座標を間違えています");
        return;
    }
    [x,y] = ConvertCoordinate(coordinate);
    [fx,fy] = ConvertCoordinate(destination);
    MovePiece(x,y,fx,fy);

}
function MovePiece(x,y,fx,fy){
    let piece_src = document.getElementById("img:" + x  + "" + y).getAttribute("src");
    let destination_src = document.getElementById("img:" + fx  + "" + fy).getAttribute("src");
    let name = GetPieceNameBySrc(piece_src);
    if(piece_src == ClearDir){
        alert("駒が無いです");
        return;
    }
    if(name[name.length-1] != GetTurn(_turn) + 1){
        alert("手番が違います");
        return;
    }
    if(piece_src == ClearDir){
        alert("駒がありません");
        return;
    }
    if(!Judge(x,y,fx,fy)){
        alert("合法手ではありません");
        return;
    }
    let temp = destination_src;
    destination_src = piece_src;
    piece_src = ClearDir;
    if(temp != ClearDir){
        MovePieceToStand(temp);
    }
    let p = IsInEnemy(x,y,fx,fy) && !destination_src.match(/Pro/);
    document.getElementById("img:"+x+""+y).src = piece_src;
    if(p){
        let flag = confirm("成りますか?");
        if(flag){
            document.getElementById("img:"+fx+""+fy).src = Promote(destination_src);
        }
        else{
            document.getElementById("img:"+fx+""+fy).src = destination_src;
        }
    }
    else{
        document.getElementById("img:"+fx+""+fy).src = destination_src;
    }
    _turn ++;

}
function OnStandClick(){
    let coordinate = Stand.coordinate.value;
    let piece_name = GetPieceNameByForm(Stand.piece_name.value);
    let x,y;
    [x,y] = GetCoordinate(coordinate);
    if(JudgeFromStand(x,y,piece_name)){
        MovePieceFromStand(coordinate,piece_name);
    }
}
function GetCoordinate(num){
    return [parseInt(num/10), parseInt(num%10)];
}
function ConvertCoordinate(x){
    let a,b;
    [a,b] = GetCoordinate(x);
    return [9 - a, b - 1];
}
function IsInBoard(coordinate){
    if(coordinate>99 || coordinate<11){
        return false;
    }
    return true;
}
function IsInEnemy(x,y,fx,fy){
    let piece_src = GetPieceDirectory("img:"+x+""+y);
    let piece_name = GetPieceNameBySrc(piece_src);
    if(!piece_name){
        return;
    }
    let end = piece_name[piece_name.length-1];


    if(end == '1'){
        if(y <= 3 - 1 || fy <= 3 - 1){
            return true;
        }
    }
    else{
        if(y >= 7 - 1 || fy >= 7 - 1){
            return true;
        }
    }
    return false;
}
function MovePieceToStand(piece_src){
    let name = GetPieceNameBySrc(piece_src);
    let end = name[name.length-1];
    switch(name[0]){
        case "P":
            if(end == '1'){
                num_pawn2++;
            }
            else{
                num_pawn1++;
            }
            break;
        case "L":
            if(end == '1'){
                num_lance2++;
            }
            else{
                num_lance1++;
            }
            break;
        case "K"://玉と桂馬の場合があることに注意
            if(name[1] == 'n'){
                if(end == '1'){
                    num_knight2++;
                }
                else{
                    num_knight1++;
                }
            }
            else{
                if(end == '1'){
                    num_king2++;
                }
                else{
                    num_king1++;
                }
            }
            break;
        case "S":
            if(end == '1'){
                num_Silver2++;
            }
            else{
                num_Silver1++;
            }
            break;
        case "G":
            if(end == '1'){
                num_gold2++;
            }
            else{
                num_gold1++;
            }
            break;
        case "R":
            if(end == '1'){
                num_rook2++;
            }
            else{
                num_rook1++;
            }
            break;
        case "B":
            if(end == '1'){
                num_bishop2++;
            }
            else{
                num_bishop1++;
            }
            break;

        default:
            break;
    }
    if(end == '1'){
        UpDateStand(name.replace(/1/,"2"));
    }
    else{
        UpDateStand(name.replace(/2/,"1"));
    }
    if(num_king1 != 0){
        let hoge = document.getElementById("WINNER");
        hoge.innerText = "後手の勝ち";
    }
    else if(num_king2 != 0){
        let hoge = document.getElementById("WINNER");
        hoge.innerText = "先手の勝ち";
    }
}
function MovePieceFromStand(coordinate, piece_name){
    let x,y;
    if(!IsInBoard(coordinate)){
        alert ("座標を間違えています");
        return;
    }
    [x,y] = ConvertCoordinate(coordinate);
    if(GetTurn(_turn) == 0){
        piece_name += "1";
    }
    else{
        piece_name += "2";
    }
    let destination_src = GetPieceDirectory("img:"+x+""+y);
    if(destination_src != ClearDir){
        alert ("駒があります");
        return;
    }

    let piece_src = GetDirByForm(piece_name.replace(/(1|2)/,""));
    let name = GetPieceNameBySrc(piece_src);
    if(!name){
        return;
    }
    let end = name[name.length-1];


    if(GetNumberOfPiece(piece_name) == 0){
        alert("その駒は手持ちにありません");
        return ;
    }

    switch(name[0]){
        case "P":
            if(end == '2'){
                num_pawn2--;
            }
            else{
                num_pawn1--;
            }
            break;
        case "L":
            if(end == '2'){
                num_lance2--;
            }
            else{
                num_lance1--;
            }
            break;
        case "K"://玉と桂馬の場合があることに注意
            if(name[1] == 'n'){
                if(end == '2'){
                    num_knight2--;
                }
                else{
                    num_knight1--;
                }
            }
            else{
                if(end == '2'){
                    num_king2--;
                }
                else{
                    num_king1--;
                }
            }
            break;
        case "S":
            if(end == '2'){
                num_Silver2--;
            }
            else{
                num_Silver1--;
            }
            break;
        case "G":
            if(end == '2'){
                num_gold2--;
            }
            else{
                num_gold1--;
            }
            break;
        case "R":
            if(end == '2'){
                num_rook2--;
            }
            else{
                num_rook1--;
            }
            break;
        case "B":
            if(end == '2'){
                num_bishop2--;
            }
            else{
                num_bishop1--;
            }
            break;

        default:
            break;
    }
    UpDateStand(name);
    document.getElementById("img:"+x+""+y).src = piece_src;
}
function GetNumberOfPiece(piece_name){
    let piece_src = GetDirByForm(piece_name.replace(/(1|2)/,""));
    let name = GetPieceNameBySrc(piece_src);
    let end = name[name.length-1];
    switch(name[0]){
        case "P":
            if(end == '2'){
                return num_pawn2;
            }
            else{
                return num_pawn1;
            }
        case "L":
            if(end == '2'){
                return num_lance2;
            }
            else{
                return num_lance1;
            }
        case "K"://玉と桂馬の場合があることに注意
            if(name[1] == 'n'){
                if(end == '2'){
                    return num_knight2;
                }
                else{
                    return num_knight1;
                }
            }
            else{
                if(end == '2'){
                    return num_king2;
                }
                else{
                    return num_king1;
                }
            }
        case "S":
            if(end == '2'){
                return num_Silver2;
            }
            else{
                return num_Silver1;
            }
        case "G":
            if(end == '2'){
                return num_gold2;
            }
            else{
                return num_gold1;
            }
        case "R":
            if(end == '2'){
                return num_rook2;
            }
            else{
                return num_rook1;
            }
        case "B":
            if(end == '2'){
                return num_bishop2;
            }
            else{
                return num_bishop1;
            }

        default:
            return -1;
    }
}
function GetPieceDirectory(id){
    return document.getElementById(id).src.replace(/(http:\/\/localhost\/HomePage\/|http:\/\/toppomath.starfree.jp\/)/, "");
}
function GetPieceNameByCoordinate(x,y){
    let piece_src = GetPieceDirectory("img:"+x+""+y);
    return GetPieceNameBySrc(piece_src);
}
function GetPieceNameBySrc(src){
    let name;
    switch(src){
        case Pawn1Dir:
            name = "Pawn1";
            break;
        case Lance1Dir:
            name = "Lance1";
            break;
        case Knight1Dir:
            name = "Knight1";
            break;
        case Silver1Dir:
            name = "Silver1";
            break;
        case Gold1Dir:
            name = "Gold1";
            break;
        case Rook1Dir:
            name = "Rook1";
            break;
        case Bishop1Dir:
            name = "Bishop1";
            break;
        case King1Dir:
            name = "King1";
            break;
        case Pro_Pawn1Dir:
            name = "Pro_Pawn1";
            break;
        case Pro_Lance1Dir:
            name = "Pro_Lance1";
            break;
        case Pro_Knight1Dir:
            name = "Pro_Knight1";
            break;
        case Pro_Silver1Dir:
            name = "Pro_Silver1";
            break;
        case Pro_Bishop1Dir:
            name = "Pro_Bishop1";
            break;
        case Pro_Rook1Dir:
            name = "Pro_Rook1";
            break;


        case Pawn2Dir:
            name = "Pawn2";
            break;
        case Lance2Dir:
            name = "Lance2";
            break;
        case Knight2Dir:
            name = "Knight2";
            break;
        case Silver2Dir:
            name = "Silver2";
            break;
        case Gold2Dir:
            name = "Gold2";
            break;
        case Rook2Dir:
            name = "Rook2";
            break;
        case Bishop2Dir:
            name = "Bishop2";
            break;
        case King2Dir:
            name = "King2";
            break;
        case Pro_Pawn2Dir:
            name = "Pro_Pawn2";
            break;
        case Pro_Lance2Dir:
            name = "Pro_Lance2";
            break;
        case Pro_Knight2Dir:
            name = "Pro_Knight2";
            break;
        case Pro_Silver2Dir:
            name = "Pro_Silver2";
            break;
        case Pro_Bishop2Dir:
            name = "Pro_Bishop2";
            break;
        case Pro_Rook2Dir:
            name = "Pro_Rook2";
            break;
        default:
            name = null;
            break;
    }

    return name;
}
function GetPieceNameByForm(str){
    let name;
    switch(str.toLowerCase()){
        case "歩":
        case "歩兵":
            name = "Pawn";
            break;
        case "香":
        case "香車":
            name = "Lance";
            break;
        case "桂":
        case "桂馬":
            name = "Knight"
            break;
        case "銀":
        case "銀将":
            name = "Silver";
            break;
        case "金":
        case "金将":
            name = "Gold";
            break;
        case "角":
        case "角将":
            name = "Bishop";
            break;
        case "飛車":
        case "飛":
            name = "Rook";
            break;

        case "pawn":
        case "lance":
        case "knight":
        case "Silver":
        case "gold":
        case "bishop":
        case "rook":
            break;
        default:
            name = null;
            break;
    }

    return name;
}
function GetDirByForm(str){
    let name;
    switch(str.toLowerCase()){
        case "歩":
        case "歩兵":
        case "pawn":
            name = Pawn1Dir;
            break;
        case "香":
        case "香車":
        case "lance":
            name = Lance1Dir;
            break;
        case "桂":
        case "桂馬":
        case "knight":
            name = Knight1Dir;
            break;
        case "銀":
        case "銀将":
        case "silver":
            name = Silver1Dir;
            break;
        case "金":
        case "金将":
        case "gold":
            name = Gold1Dir;
            break;
        case "角":
        case "角将":
        case "bishop":
            name = Bishop1Dir;
            break;
        case "飛車":
        case "飛":
        case "rook":
            name = Rook1Dir;
            break;

        default:
            name = null;
            break;
    }
    if(GetTurn(_turn) == 1){
        name = name.replace(/1/,'2');
    }

    return name;
}
function UpDateStand(piece_name){
    let stand = document.getElementById(piece_name);
    let end = piece_name[piece_name.length-1];
    let parameter;
    switch(piece_name[0]){
        case "P":
            if(end == '1'){
                parameter = num_pawn1;
            }
            else{
                parameter = num_pawn2;
            }
            break;
        case "L":
            if(end == '1'){
                parameter = num_lance1;
            }
            else{
                parameter = num_lance2;
            }
            break;
        case "K"://玉と桂馬の場合があることに注意
            if(piece_name[1] == 'n'){
                if(end == '1'){
                    parameter = num_knight1;
                }
                else{
                    parameter = num_knight2;
                }
            }
            break;
        case "S":
            if(end == '1'){
                parameter = num_Silver1;
            }
            else{
                parameter = num_Silver2;
            }
            break;
        case "G":
            if(end == '1'){
                parameter = num_gold1;
            }
            else{
                parameter = num_gold2;
            }
            break;
        case "R":
            if(end == '1'){
                parameter = num_rook1;
            }
            else{
                parameter = num_rook2;
            }
            break;
        case "B":
            if(end == '1'){
                parameter = num_bishop1;
            }
            else{
                parameter = num_bishop2;
            }
            break;
        default:
            parameter = null;
    }
    if(parameter){
        stand.innerHTML = Piece[piece_name.replace(/(1|2)/,"")] + "×" + parameter;
    }
}
function JudgePawn(x,y,fx,fy){
    if(x != fx){
        return false;
    }
    let piece_name = GetPieceNameByCoordinate(x,y);
    if(piece_name[piece_name.length-1] == '1'){
        if(y - 1!= fy){
            return false;
        }
    }
    else{
        if(y + 1!= fy){
            return false;
        }
    }
    return true;
}
function JudgeLance(x,y,fx,fy){
    if (x != fx)
    {
        return false;
    }
    let piece_name = GetPieceNameByCoordinate(x,y);
    if (piece_name[piece_name.length-1] == '1')
    {
        if (fy > y)//先手の香車が後退する手
        {
            return false;
        }
        for (let i = fy; i < y; i++)
        {
            if (i != fy && GetPieceNameByCoordinate(x,i) != null)//駒があるとthis.BOARD[x, i] != "" がtrueになるのでfalseが返ってくる
            {
                return false;//先手の香車の行き先の途中に駒がある場合
            }
        }
    }
    else
    {
        if (fy < y)
        {
            return false;//後手の香車が後退する手
        }
        for (let i = fy; i > y; i--)
        {
            if (i != fy && GetPieceNameByCoordinate(x,i) != null)
            {
                return false;//後手の香車の行き先の途中に駒がある場合
            }
        }
    }
    return true;
}
function JudgeKnight(x,y,fx,fy){
    let piece_name = GetPieceNameByCoordinate(x,y);
    if (piece_name[piece_name.length-1] == '1')//先手番
            {
                if (x != 9 - 1 && x != 1 - 1)//端とそれ以外で書く
                {
                    if (fy == y - 2 && (fx == x + 1 || fx == x - 1))
                    //右斜左右のみ通す
                    {
                        return true;
                    }
                }
                else if (x == 9 - 1)//右端
                {
                    //左に跳ねる手を通す
                    if (fy == y - 2 && fx == x - 1)
                    {
                        return true;
                    }
                }
                else if (x == 1 - 1)//左端
                {
                    //右に跳ねる手を通す
                    if (fy == y - 2 && fx == x + 1)
                    {
                        return true;
                    }
                }
            }
            else//後手番
            {
                if (fy == y + 2 && (fx == x + 1 || fx == x - 1))
                //先手番と同様
                //何故か上と書き方が違うからもしかしたらバグがあるかもしれないので要デバッグ
                //上下が変わることに注意
                {
                    if (x != 9 - 1 && x != 1 - 1)
                    {
                        return true;
                    }
                    else if (x == 9 - 1 && fx == x - 1)
                    {
                        return true;
                    }
                    else if (x == 1 - 1 && fx == x + 1)
                    {
                        return true;
                    }
                }

            }
            return false;
}
function JudgeSilver(x,y,fx,fy){
    //盤の縁とそれ以外で書いていく
    let piece_name = GetPieceNameByCoordinate(x,y);
    if (piece_name[piece_name.length-1] == '1')//先手番
    {
        if ((fy == y - 1) && (fx == x - 1 || fx == x || fx == x + 1))
        {
            return true;//前進
        }
        if ((fy == y + 1) && (fx == x - 1 || fx == x + 1))
        {
            return true;//後退
        }
    }
    else//後手番
    {
        if ((fy == y + 1) && (fx == x - 1 || fx == x || fx == x + 1))
        {
            return true;//前進
        }
        if ((fy == y - 1) && (fx == x - 1 || fx == x + 1))
        {
            return true;//後退
        }
    }
    return false;
}
function JudgeGold(x,y,fx,fy){
    //縁とそれ以外で書いていく
    let piece_name = GetPieceNameByCoordinate(x,y);
    if (piece_name[piece_name.length-1] == '1')//先手番
    {
        if ((fy == y - 1) && (fx == x - 1 || fx == x || fx == x + 1))
        {
            return true;//前進
        }
        if ((fy == y) && (fx == x - 1 || fx == x + 1))
        {
            return true;//横移動
        }
        if ((fy == y + 1) && fx == x)
        {
            return true;//後退
        }
    }
    else
    {
        if ((fy == y + 1) && (fx == x - 1 || fx == x || fx == x + 1))
        {
            return true;//前進
        }
        if ((fy == y) && (fx == x - 1 || fx == x + 1))
        {
            return true;//横移動
        }
        if ((fy == y - 1) && fx == x)
        {
            return true;//後退
        }
    }
    return false;
}
function JudgeKing(x,y,fx,fy){
    //玉
    if (fy == y + 1 || fy == y || fy == y - 1)
    {
        if (fx == x + 1 || fx == x || fx == x - 1)
        {
            return true;
        }
    }

    return false;
}
function JudgeRook(x,y,fx,fy){
    let miny = MIN(fy, y);
    let maxy = MAX(fy, y);
    let minx = MIN(fx, x);
    let maxx = MAX(fx, x);
    
    if (fx != x && fy != y)
    {
        return false;
    }

    if (fx == x)
    {
        for (let i = miny; i < maxy; i++)
        {
            if (i != miny && GetPieceNameByCoordinate(x, i) != null)
            {
                return false;//先手の香車の行き先の途中に駒がある場合
            }
        }
    }
    else
    {
        for (let i = minx; i < maxx; i++)
        {
            if (i != minx && GetPieceNameByCoordinate(i, y) != null)
            {
                return false;//先手の香車の行き先の途中に駒がある場合
            }
        }
    }

    return true;
}
function JudgeBishop(x,y,fx,fy){
    if (ABS(x - fx) != ABS(y - fy))
            {
                return false;
            }

            if (fx - x > 0)
            {
                for (let i = 1; i < ABS(fy - y); i++)
                {
                    if (fy - y > 0)//左斜め下
                    {
                        if (GetPieceNameByCoordinate(x + i, y + i) != null)
                        {
                            return false;
                        }
                    }
                    else//左斜め上
                    {
                        if (GetPieceNameByCoordinate(x + i, y - i) != null)
                        {
                            return false;
                        }
                    }
                }
            }
            else
            {
                for (let i = 1; i < ABS(fy - y); i++)
                {
                    if (fy - y > 0)//右斜め下
                    {
                        if (GetPieceNameByCoordinate(x - i, y + i) != null)
                        {
                            return false;
                        }
                    }
                    else//右斜め上
                    {
                        if (GetPieceNameByCoordinate(x - i, y - i) != null)
                        {
                            return false;
                        }
                    }
                }
            }
            return true;
}
function Judge(x,y,fx,fy){
    let piece_name = GetPieceNameByCoordinate(x,y);
    let destination_name = GetPieceNameByCoordinate(fx,fy);
    if(piece_name == null){
        return false;
    }
    if(destination_name != null && piece_name[piece_name.length-1] == destination_name[destination_name.length-1]){
        return false;
    }
    if(x == fx && y == fy){
        return false;
    }
    switch(piece_name.replace(/(1|2)/,"")){
        case "Pawn":
            return JudgePawn(x,y,fx,fy);
        case "Lance":
            return JudgeLance(x,y,fx,fy);
        case "Knight":
            return JudgeKnight(x,y,fx,fy);
        case "Silver":
            return JudgeSilver(x,y,fx,fy);
        case "Gold":
            return JudgeGold(x,y,fx,fy);
        case "King":
            return JudgeKing(x,y,fx,fy);
        case "Rook":
            return JudgeRook(x,y,fx,fy);
        case "Bishop":
            return JudgeBishop(x,y,fx,fy);
        case "Pro_Pawn":
        case "Pro_Lance":
        case "Pro_Knight":
        case "Pro_Silver":
            return JudgeKing(x,y,fx,fy);
        case "Pro_Bishop":
            return JudgeBishop(x,y,fx,fy) || JudgeKing(x,y,fx,fy);
        case "Pro_Rook":
            return JudgeRook(x,y,fx,fy) || JudgeKing(x,y,fx,fy);
        default:
            return false;
    }
}
function JudgeFromStand(x,y,piece_name){
    switch(piece_name.replace(/(1|2)/,"").toLowerCase()){
        case "pawn":
            return JudgePawnFromStand(x,y);
        case "lance":
            return JudgeLanceFromStand(x,y);
        case "knight":
            return JudgeKnightFromStand(x,y);
        default:
            return Boolean(GetPieceNameByCoordinate(x,y));
    }
}
function JudgePawnFromStand(x,y){
    //9段目に打とうとする or 駒がある場合falseを返す
    if ((GetTurn(_turn) == 1 && y == 9 - 1) || (GetTurn(_turn) == 0 && y == 1 - 1) || GetPieceNameByCoordinate(x,y))
    {
        return false;
    }

    let turn = GetTurn(_turn);
    for (let i = 0; i < _BOARD_SIZE; i++)
    {
        let name = GetPieceNameByCoordinate(x, i);
        if(!name){
            continue;
        }
        if ((turn==0 && name == "Pawn2") || (turn == 1 && name == "Pawn1"))
        {
            alert("二歩になります");
            return false;
        }
    }
    return true;
}
function JudgeLanceFromStand(x,y){
    let turn = GetTurn(_turn);
    if ((turn == _SECOND_HAND && y == 9 - 1) || (turn == _FIRST_HAND && y == 1 - 1) || GetPieceNameByCoordinate(x,y))
    {
        return false;
    }
    return true;
}
function JudgeKnightFromStand(x,y){
    let turn = GetTurn(_turn);
    if ((turn == _SECOND_HAND && y == 8 - 1) || (turn == _FIRST_HAND && y == 2 - 1) || GetPieceNameByCoordinate(x,y))
    {
        return false;
    }
    return true;
}
function Promote(piece_src){
    return piece_src.replace(/Shogi\//,"Shogi/Pro-");
}