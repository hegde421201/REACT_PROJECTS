import { LoremIpsum } from "react-lorem-ipsum";
import React from "react";

const Lorem = (totWords, totSentences) => {
  return (
    <LoremIpsum
      avgWordsPerSentence={totWords.toString()}
      avgSentencesPerParagraph={totSentences.toString()}
      random={true}
      startWithLoremIpsum={false}
    />
  );
};

export default Lorem;
