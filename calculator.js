const buttons=document.getElementsByTagName("button")
var k=0;
var l=0;
function parenthese(){
    k=0;
    l=0;
    if ( marksList.includes(laValeuraAfficher.charAt(laValeuraAfficher.length-1))){
        laValeuraCalculee=laValeuraCalculee.slice(0,laValeuraCalculee.length-1);
        }
        for(var j=0; j<laValeuraAfficher.length; j++){
            if(("("==(laValeuraAfficher.charAt(laValeuraAfficher.length-1-j)))){
                k=k+1;
            }
            else if(")"==(laValeuraAfficher.charAt(laValeuraAfficher.length-1-j))){
                l=l+1;
            } 
        }
            if(k!=l){
                for (c=0; c<(k-l); c++){
                    laValeuraCalculee=laValeuraCalculee + ")";
                }
            }
            console.log((laValeuraCalculee).toString());

}
function egalite(){
    laValeuraCalculee=laValeuraAfficher;
}

laValeuraCalculee = "";
var laValeuraAfficher = "";
const marksList = ["+","-","/","x","."];
const numbers = ["0","1","2","3","4","5","6","7","8","9"] ;
for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click" , handleButtonClick);

    function handleButtonClick(){
        try{
        if (this.id=="mark="){
            if ( marksList.includes(laValeuraAfficher.charAt(laValeuraAfficher.length-1))){
            laValeuraCalculee=laValeuraCalculee.slice(0,laValeuraCalculee.length-1);
            }
            parenthese();

            console.log((laValeuraCalculee).toString());
            laValeuraAfficher=eval(laValeuraCalculee).toString();
            egalite();

        }
        else if((marksList.includes(this.innerHTML)) && (marksList.includes(laValeuraAfficher.charAt(laValeuraAfficher.length-1)))){
        laValeuraCalculee=laValeuraCalculee.slice(0,laValeuraCalculee.length-1)
        }
        else if((laValeuraAfficher.length==0)&&(marksList.includes(this.innerHTML))){
            if (this.innerHTML=="x"){
            laValeuraCalculee="0"+"*";
                laValeuraAfficher="0"+this.innerHTML;
            }
            else{
                laValeuraCalculee="0"+this.innerHTML;
                laValeuraAfficher="0"+this.innerHTML;
            }
        }
       
        else if (this.id=="reset"){
            laValeuraCalculee="";
            laValeuraAfficher="";
        }
        else if (this.id=="del"){
            laValeuraCalculee=laValeuraCalculee.slice(0,laValeuraCalculee.length-1);
            laValeuraAfficher=laValeuraAfficher.slice(0,laValeuraAfficher.length-1);
        }
        
        else if (this.id=="markx"){
            laValeuraCalculee= laValeuraCalculee+"*";
            laValeuraAfficher = laValeuraAfficher+this.innerHTML;
        }
       
        else if (this.id == "negate") {
            laValeuraAfficher += "-";
            laValeuraCalculee += "-";
        }
        else if (this.id == "abs") {
            
            laValeuraAfficher=Math.abs(eval(laValeuraCalculee)).toString();
            egalite();
        }
        else if (this.id == "square") {
            parenthese();
            laValeuraAfficher=Math.pow(eval(laValeuraCalculee), 2).toString();
            egalite();
        }
        else if (this.id == "racine") {
            parenthese();
            laValeuraAfficher=Math.sqrt(eval(laValeuraCalculee)).toString();
            egalite();
        }
        else if (this.id == "sin") {
            parenthese();
            let angle = eval(laValeuraCalculee) * Math.PI / 180;
            laValeuraAfficher = Math.sin(angle).toString();
            egalite();
        }
        else if (this.id == "cos") {
            parenthese();
            let angle = eval(laValeuraCalculee) * Math.PI / 180;
            laValeuraAfficher = Math.cos(angle).toString();
            egalite();
        }
        else if (this.id == "tan") {
            parenthese();
            let angle = eval(laValeuraCalculee) * Math.PI / 180;
            laValeuraAfficher = Math.tan(angle).toString();
            egalite();
        }
        else if((this.innerHTML=="(") && (numbers.includes(laValeuraAfficher.charAt(laValeuraAfficher.length-1)))){
            laValeuraCalculee= laValeuraCalculee+"*"+this.innerHTML;
            laValeuraAfficher= laValeuraAfficher+"x"+this.innerHTML;
        }
        else {
            laValeuraCalculee =laValeuraCalculee+this.innerHTML ;
            laValeuraAfficher = laValeuraAfficher+this.innerHTML ;
        }
        document.getElementById("screen").innerHTML=laValeuraAfficher;
    }
    catch{
        laValeuraCalculee="";
        laValeuraAfficher="";
        document.getElementById("screen").innerHTML="NaN";
    }
    }
}
