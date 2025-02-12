import readlineSync from 'readline-sync';

const runGame = (gameEngine, gameDescripton) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n${gameDescripton}`);
  const gameRounds = 3;
  for (let i = 0; i < gameRounds; i += 1) {
    const [question, correctAnswer] = gameEngine();
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `,
    );
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
