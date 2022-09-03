const data = require("./../TestData.json");
const scoreList = data.scoresList;



//methods
function random(array, size) {
    let newArray = array.sort(() => Math.random() - Math.random()).slice(0, size);
    return newArray;
}

// function getRanks(arrayScores){
//     let ranks = []
//     for(let i = 0; i<arrayScores.length;i++){
//         let obj= {rank:0}
//         obj.rank = Math.round(scoreList.filter(score=>score<=arrayScores[i]).length/scoreList.length*100);
//         // obj.stdsnum = scoreList.filter(score=>score<=arrayScores[i]).length;
//         ranks.push(obj)
//     }
//     return ranks;
// }

//words endpoint
module.exports.getWords = (request, response) => {
    let practiceTest = random(data.wordList, 10);

    while (!practiceTest.some(a => a.pos === "adverb") && practiceTest.some(a => a.pos === "verb") && practiceTest.some(a => a.pos === "noun") && practiceTest.some(a => a.pos === "adjective")) {

        practiceTest = random(data.wordList, 10);
    }
    response.status(200).json({ message: "practice test", exam: practiceTest })


}
//rank endpoint
module.exports.getRank = (request, response) => {
    let studentScore = request.body.score;
    scoreList.push(studentScore);
    let rank = Math.round(scoreList.filter(score => score <= studentScore).length / scoreList.length * 100);
    response.status(201).json({ message: "your rank is", rank });
}

