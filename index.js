import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';

const firstQuestion = () => {
  const firstQuestion = [
    {
      name: 'Name',
      type: 'input',
      message: 'Insert name:'
    }
  ];
  console.log(chalk.blueBright('First settings:'));
  return inquirer.prompt(firstQuestion);
};

const generateReadmeFile = (...restData) => {
  console.log(restData);
};

const run = async () => {
  console.log(chalk.green(figlet.textSync('Readme\nGenerator')));

  const first = await firstQuestion();

  generateReadmeFile(first);
};

run();