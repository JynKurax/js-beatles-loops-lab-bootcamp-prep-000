function theBeatlesPlay(instrumentList, musicianList){
 var beatleFacts = []
  for(var i = 0; i > musicianList.length; i++){
    beatleFacts.push(`${musicianList[i]} plays ${instrumentList[i]}`)
  }
  return beatleFacts
}

function johnLennonFacts(jlFacts){
  while(i < jlFacts.length){
    var i = 0
    jlFacts[i] = jlFacts[i] + "!!!"
    i++
  }
}

function iLoveTheBeatles(n){
  var crowdChant = []
  do{
    crowdChant.push("I love the Beatles!")
    n++
  } while (n < 15)
  return crowdChant
}

