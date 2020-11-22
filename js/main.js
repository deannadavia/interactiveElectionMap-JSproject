var creatPolitician = function(name, partyColor)
{
  var politician ={};
  
  politician.name = name;
  
  politician.partyColor = partyColor;
  
  politician.electionResults = null; 
  
  politician.totalVotes = 0; 
  
  politician.totalVoteTally = function ()
  {
  this.totalVotes = 0; 
  
  for (var i =0; i< this.electionResults.length; i++)
    {
      this.totalVotes= this.totalVotes + this.electionResults[i]; 
    }
}; 
  
  return politician; 
}; 

var jane = creatPolitician("Jane",[132,17,11]); 

var betty = creatPolitician("Betty",[245,141,136]);

console.log("Jane's color is: " + jane.partyColor);
console.log("Betty's color is: " + betty.partyColor);


jane.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2]; 

betty.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1]; 

jane.electionResults[9] = 1; 
betty.electionResults[9] = 28; 

jane.electionResults[4] = 17; 
betty.electionResults[4] = 38; 

jane.electionResults[43] = 11; 
betty.electionResults[43] = 27;

console.log(jane.electionResults);
console.log(betty.electionResults);


var setStateResults = function (state)
  {
    theStates[state].winner = null; 
    
    if (jane.electionResults[state] > betty.electionResults[state])
      {
        theStates[state].winner = jane; //set to candidate object so color changes
      }
    else if (jane.electionResults[state] < betty.electionResults[state])
      {
        theStates[state].winner = betty;
      }
    
    var stateWinner = theStates[state].winner

    if (stateWinner !== null)
      {
        theStates[state].rgbColor = stateWinner.partyColor;
      }
    else 
      {
        theStates[state].rgbColor = [11, 32, 57];
      }
    
  stateName.innerText = theStates[state].nameFull; 
  stateAbbrev.innerText= "(" + theStates[state].nameAbbrev + ")";
    
  candidate1Name.innerText = jane.name;
  candidate2Name.innerText = betty.name; 
   
  candidate1Results.innerText = jane.electionResults[state]; 
  candidate2Results.innerText = betty.electionResults[state];
    
    if (theStates[state].winner === null)
      {
        winnersName.innerText = "DRAW";
      }
     else 
      {
        winnersName.innerText= theStates[state].winner.name
      }
    
}



jane.totalVoteTally();
betty.totalVoteTally();

console.log(jane.totalVotes);
console.log(betty.totalVotes);

var winner = "???";
      if (jane.totalVotes > betty.totalVotes)
      {
        winner = jane.name;
      }
      else if (jane.totalVotes < betty.totalVotes)
      {
        winner =  betty.name;
      }
      else 
      {
        winner = "DRAW"
      }

console.log ("And the winner is..." + winner);

var countryResultsTable = document.getElementById('countryResults'); //left as long children chain for visual example/learning
countryResultsTable.children[0].children[0].children[0].innerText = jane.name;
countryResultsTable.children[0].children[0].children[1].innerText = jane.totalVotes;
countryResultsTable.children[0].children[0].children[2].innerText = betty.name
countryResultsTable.children[0].children[0].children[3].innerText = betty.totalVotes;
countryResultsTable.children[0].children[0].children[5].innerText = winner;

var stateResultsTable = document.getElementById('stateResults');
var header = stateResultsTable.children[0];
var stateName = header.children[0].children[0];
var stateAbbrev = header.children[0].children[1]; 
var body = stateResultsTable.children[1]; 
var candidate1Name = body.children[0].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Name = body.children[1].children[0];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];
    




 








































