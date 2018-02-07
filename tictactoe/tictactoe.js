var turn='o';
var grids=document.querySelectorAll(".grid");
var reset=document.querySelector("button");
for( var i=0;i<grids.length;i++)
{
	grids[i].addEventListener("click", function(){
		if(turn=='o')
            {
        	this.textContent='x';
        	turn='x';
        }
        else if(turn=='x')
        {
        	this.textContent='o';
        	turn='o';
        }
           
 		if((grids[0].textContent==turn && grids[1].textContent==turn && grids[2].textContent==turn) || (grids[0].textContent==turn && grids[3].textContent==turn && grids[6].textContent==turn)
 			||(grids[0].textContent==turn && grids[4].textContent==turn && grids[8].textContent==turn)||(grids[1].textContent==turn && grids[4].textContent==turn && grids[7].textContent==turn)
 			||(grids[2].textContent==turn && grids[5].textContent==turn && grids[8].textContent==turn)||(grids[2].textContent==turn && grids[4].textContent==turn && grids[6].textContent==turn)
 			||(grids[3].textContent==turn && grids[4].textContent==turn && grids[5].textContent==turn)||(grids[7].textContent==turn && grids[6].textContent==turn && grids[8].textContent==turn))
 		{
 			if(turn=='x')
 			alert("player1 wins");
 			else
 				alert("player2 wins");
 		}
	});
}

