
//Thanks to imacropro.com

var unLikeNumber = 20;

var startingUrl;
startingUrl =  "CODE:";
startingUrl +=  "SET !TIMEOUT_PAGE 15" + "\n";
startingUrl +=  "URL GOTO=https://www.facebook.com/search/me/pages-liked" + "\n";
startingUrl +=  "WAIT SECONDS=2" + "\n";

var scrollDown;
scrollDown = "CODE:";
scrollDown += "URL GOTO=javascript:window.scrollBy(0,7000)" + "\n";
scrollDown += "WAIT SECONDS=2" + "\n"; 

var unLike;
unLike =  "CODE:";
unLike +=  "SET !TIMEOUT_STEP 0" + "\n";
unLike +=  "TAG POS={{I}} TYPE=BUTTON ATTR=CLASS:*PageLikeButton* CONTENT=EVENT:MOUSEOVER" + "\n";
unLike +=  "WAIT SECONDS=0.5" + "\n";
unLike +=  "TAG POS=1 TYPE=SPAN ATTR=TXT:Unlike" + "\n";
unLike +=  "WAIT SECONDS=1" + "\n";

var stopButton = "Macro stopped manually";
var error = "#EANF#";
var counter = 0;

iimPlay(startingUrl);

for(i = 1; i <= unLikeNumber; i++){
iimDisplay("Current loop: "+ i);
var unLikeExtract;
unLikeExtract =  "CODE:";
unLikeExtract +=  "SET !TIMEOUT_STEP 0" + "\n";
unLikeExtract +=  "TAG POS={{I}} TYPE=BUTTON ATTR=CLASS:*PageLikeButton* EXTRACT=TXT" + "\n";

iimSet("I", i);
iimPlay(unLikeExtract);
var unLikeExtract = iimGetLastExtract();

////Check for stopButton
var macroError = iimGetLastError();
if (macroError == stopButton){
break;}
//

if(unLikeExtract == error){
iimPlay(scrollDown);
counter++
}

if(counter > 1){
break;
}

iimSet("I", i);
iimPlay(unLike);

////Check for stopButton
var macroError = iimGetLastError();
if (macroError == stopButton){
break;}
//

}