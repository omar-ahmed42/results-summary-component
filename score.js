fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);

    let summaryScores = document.getElementsByClassName('summary-scores')[0];
    json.forEach((element) => {
      let summaryScoreItem = document.createElement('div');
      summaryScoreItem.classList.add('summary-score-item');

      let summaryItemContentWrapper = document.createElement('div');
      summaryItemContentWrapper.classList.add('summary-item-content-wrapper');

      let summaryScoreIcon = document.createElement('div');
      summaryScoreIcon.classList.add('summary-score-icon');

      let scoreIconImg = document.createElement('img');
      scoreIconImg.setAttribute('src', element.icon);
      scoreIconImg.setAttribute('alt', element.category);

      summaryScoreIcon.appendChild(scoreIconImg);

      let scoreName = document.createElement('div');
      scoreName.classList.add('summary-score-name');
      scoreName.innerText = element.category;

      summaryItemContentWrapper.appendChild(summaryScoreIcon);
      summaryItemContentWrapper.appendChild(scoreName);

      let emptyDiv = document.createElement('div');
      emptyDiv.classList.add('empty');

      let summaryScoreItemResult = document.createElement('div');
      summaryScoreItemResult.classList.add('summary-score-item-result');

      let summaryValue = document.createElement('div');
      summaryValue.classList.add('summary-value');
      summaryValue.innerText = element.score;

      let summaryMaximumValue = document.createElement('div');
      summaryMaximumValue.classList.add('summary-maximum-value');
      summaryMaximumValue.innerText = '/ 100';

      summaryScoreItemResult.appendChild(summaryValue);
      summaryScoreItemResult.appendChild(summaryMaximumValue);

      summaryScoreItem.appendChild(summaryItemContentWrapper);
      summaryScoreItem.appendChild(emptyDiv);
      summaryScoreItem.appendChild(summaryScoreItemResult);

      summaryScores.appendChild(summaryScoreItem);
    });
  });
