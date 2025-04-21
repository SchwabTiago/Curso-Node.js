import chalk from 'chalk';
import inquirer from 'inquirer';

let nome
let idade

try {
    nome = await inquirer.prompt([
        {
            type: 'input',
            name: 'nome',
            message: 'Qual é o seu nome?'
        }
    ]);
} catch (err) {
    console.log(err)
}

try {
    idade = await inquirer.prompt([
        {
            type: 'number',
            name: 'idade',
            message: 'Qual a sua idade?'
        }
    ]);
} catch (err) {
    console.log(err)
}


console.log(chalk.bgYellow.black(`Seu nome é ${nome.nome} e sua idade é ${idade.idade} anos`))