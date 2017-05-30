var tempoNum = 200

var timeSigByDenom = [["2/2","3/2"],["4/4","3/4","5/4"],["8/8","6/8","7/8"]]

var timeSigList = ["2/2","4/4","3/4","8/8","6/8","7/8"]
var keyList = ["C","Csharp","D","Dsharp","E","F","Fsharp","G","A","Asharp","B"]
var chordList = [
	[
		"Major","Minor","Diminished","Augmented"
	],
	[
		"Triad ", "7","6","Dom7","Maj7"
	]
]

var randomizer= function(x){
	//find a random item in an array
	if(Number.isInteger(x) == true ){
		return Math.floor((Math.random()* x)+0)
	}else{
		return x[Math.floor((Math.random() * (x.length-1))+0)]
	}
}

var timeSignature = randomizer(timeSigList)
var key = randomizer(keyList)
var chord = randomizer(chordList[0]) + " " + randomizer(chordList[1])
var tempo = randomizer(tempoNum)

console.log(tempo + "bpm " + timeSignature + " " + key + " " + chord)

