const data = require("./../TestData.json");
const scoreList = data.scoresList;

// Array.prototype.sample = function(){
//     console.log(Math.floor(Math.random()*this.length), Math.random()*this.length, this.length)
//     return this[Math.floor(Math.random()*this.length)];
// }

//methods
function random(array, size){
    let newArray = array.sort(() => Math.random() - Math.random()).slice(0, size);
    return newArray;
}

function getRanks(arrayScores){
    let ranks = []
    for(let i = 0; i<arrayScores.length;i++){
        let obj= {rank:0}
        obj.rank = Math.ceil(scoreList.filter(score=>score<=arrayScores[i]).length/scoreList.length*100);
        // obj.stdsnum = scoreList.filter(score=>score<=arrayScores[i]).length;
        ranks.push(obj)
    }
    return ranks;
}

//words endpoint
module.exports.getWords = (request, response)=>{
    let practiceTest = random(data.wordList,10);
    // let e = practiceTest.map(a=>{})
    //to check if array include at least 1 adjective, 1 adverb, 1 noun, and 1 verb.
    // if(!practiceTest.some(a=>a.pos==="adverb")&&practiceTest.some(a=>a.pos==="verb")&&practiceTest.some(a=>a.pos==="noun")&&practiceTest.some(a=>a.pos==="adjective")){

    // }
    while(!practiceTest.some(a=>a.pos==="adverb")&&practiceTest.some(a=>a.pos==="verb")&&practiceTest.some(a=>a.pos==="noun")&&practiceTest.some(a=>a.pos==="adjective")){
        
        practiceTest = random(data.wordList,10);
    }
    response.status(200).json({message:"practice test", exam:practiceTest})
    // else{
    //     console.log("here")  
    // }
    // console.log(practiceTest.some(a=>a.pos==="adverb")&&practiceTest.some(a=>a.pos==="verb")&&practiceTest.some(a=>a.pos==="noun")&&practiceTest.some(a=>a.pos==="adjective"))
    // let test =practiceTest.includes("adverb") && practiceTest.includes("verb")&& practiceTest.includes("noun")&&practiceTest.includes("adjective");
    // console.log(practiceTest.some(a=>{a.pos==="adverb"&&a.pos.includes("verb")&&a.pos.includes("noun")&&a.pos.includes("adjective")}))
//    let n = data.wordList.sort(() => Math.random() - Math.random()).slice(0, n)
    // console.log(data.wordList.sort(() => Math.random() - Math.random()).slice(0, 10))

}
//rank endpoint
module.exports.getRank = (request, response)=>{
    console.log(request.body)
    let studentScore = request.body.score;
    scoreList.push(studentScore);
    let rank = Math.round(scoreList.filter(score=>score<=studentScore).length/scoreList.length*100);
    console.log(studentScore, rank, scoreList)
    let Ranks = getRanks(scoreList);
    response.status(201).json({message:"your rank is",rank, Ranks});
}

//get score
module.exports.getScore = (request, response)=>{
    let scores = request.body.scores;
}