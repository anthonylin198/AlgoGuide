function codingScoreReportPercent(scores) {
  // create a cache, that will store poor, fair good excellent elite
  const cache = {
    Poor: 0,
    Fair: 0,
    Good: 0,
    Excellent: 0,
    Elite: 0,
  };
  let total = 0;
  // iterate throgh the scores array
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 300 && scores[i] <= 599) {
      cache["Poor"]++;
      total++;
    }
    if (scores[i] >= 600 && scores[i] <= 699) {
      cache["Fair"]++;
      total++;
    }
    if (scores[i] >= 700 && scores[i] <= 749) {
      cache["Good"]++;
      total++;
    }
    if (scores[i] >= 750 && scores[i] <= 799) {
      cache["Excellent"]++;
      total++;
    }
    if (scores[i] >= 800) {
      cache["Elite"]++;
      total++;
    }
  }

  const sorted = [];
  for (let key in cache) {
    sorted.push([key, cache[key]]);
  }

  sorted.sort((a, b) => {
    console.log(b[1]);
    return b[1] - a[1];
  });

  const distribution = [];

  // create arr that will store the percentages
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i][1]) {
      let str = sorted[i][0];
      const percentage = parseFloat((sorted[i][1] / total) * 100).toFixed(2);
      str += ": " + percentage + "%";
      distribution.push(str);
    }
  }

  return distribution;
}

console.log(codingScoreReportPercent([330, 723, 730, 825]));
