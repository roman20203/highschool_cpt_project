var goodscore = document.createElement("img");
goodscore.src = "smile.png";

var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        score++	
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}

else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}

else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}

else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}

else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}

else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}

else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
	ans++; 
}
        

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="Which artist is Canadian? \na)Bruno Mars \nb)Micheal Jackson \nc)Billy Joel \nd)Justin Bieber";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who was the lead singer in the band, Queen? \na)Freddy Mercury \nb)Axl Rose\nc)Billy Joel  \nd)John Lennon";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which one of these songs did Ringo Starr write? \na)Oh Darling \nb)Hey Jude \nc)Julia \nd)Yellow Submarine";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who is names the king of pop? \na)Kanye West \nb)Bob Dylan \nc)Micheal Jackson \nd)Vanilla Ice";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="The Dark Side Of The Moon was an album by \na)Led Zeppelin \nb)Guns n' Roses \nc)AC/DC \nd)Pink Floyd";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="The Best Band in the world is considered to be? \na)The Beatles \nb)Led Zeppelin \nc)Queen  \nd)Radiohead";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which song did Billy Joel write? \na)God Only Knows \nb)Hey Jude \nc)Piano Man \nd)Blowin' in the Wind";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which Rolling Stones member died in a swimming pool in 1969? \na)Brian Jones \nb)Axl Rose \nc)Duff Mckagen \nd)Izzy Stradlin";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the title of the MC Hammers most famous hit song? \na)Here Comes the Hammer \nb)Pump it up \nc)Pumps and a Bump \nd)You Cant Touch This";
    document.view.qans.value=""
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which song is Queens most famous? \na)Killer Queen \nb)Bohemian Rhapsody \nc)We are the Champions \nd)We Will Rock You";
    document.view.qans.value=""
}
else if (i==11){
    endscore=score/10 * 100

document.write("You have scored a " + endscore +"% ") 
}

	i++; 
}




