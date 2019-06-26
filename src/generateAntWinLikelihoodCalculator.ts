export function generateAntWinLikelihoodCalculator() {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfAntWinning = Math.random();

  return function(callback: (arg0: number) => void) {
    setTimeout(function() {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}
