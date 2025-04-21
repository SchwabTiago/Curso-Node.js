import chalk from 'chalk';

const nota = 6

if (nota >= 6) {
    console.log(chalk.greenBright("Você foi aprovado"))
} else {
    console.log(chalk.redBright("Você foi reprovado"))
}