export function getLanguage() {
  // The repository currently contains the English data set.
  // Keep the app on that complete data set until translated files are added.
  return 'en';
}

export function isTouchEnabled() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export function getMaxPoints(point, questions) {
  const maxPoints = {};
  for (const nature of Object.keys(point)) maxPoints[nature] = 0;
  for (const question of questions || []) {
    for (const response of question.responses || []) {
      for (const score of response.scores || []) {
        maxPoints[score.nature] = (maxPoints[score.nature] || 0) + Number(score.points || 0);
      }
    }
  }
  return maxPoints;
}
