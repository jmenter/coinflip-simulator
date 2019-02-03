
function simulate() {
    let coinFlipCount = parseInt(document.getElementById("flipCount"));
    let subsequenceLength = parseInt(document.getElementById("subsequenceLength"));
    var simulation = runSimulation(coinFlipCount, subsequenceLength);
    let resultSet = simulation.toString();
    document.getElementById("results").innerText = resultSet;
}

function runSimulation(coinCount, targetSequenceLength) {
    var coins = createCoins(coinCount);
    var candidateCount = 0;
    var subsequentHeads = 0;
    var subsequentTails = 0;
    for (i = 0; i < coins.length - targetSequenceLength; i++) {
        var foundCandidate = true;
        for (j = i + 1; j < targetSequenceLength; j++) {
            if (coins[j] === 1) {
                foundCandidate = false;
                break;
            }
        }
        if (foundCandidate) {
            candidateCount++;
            if (coins[i + targetSequenceLength] === 0) {
                subsequentHeads++;
            } else {
                subsequentTails++;
            }
            i += targetSequenceLength;
        }
    }
    return {
        totalCoins: coins.length,
        headCount: coins.filter(coin => coin === 0).length,
        tailCount: coins.filter(coin => coin === 1).length,
        candidateCount: candidateCount,
        subsequentHeads: subsequentHeads,
        subsequentTails: subsequentTails
    }
}

function createCoins(count) {
    var coins = new Array();
    for (i = 0; i < count; i++) {
        coins.push(Math.round(Math.random()));
    }
    return coins;
}