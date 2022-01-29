var prompt = require('prompt-sync')();

// SLEEP FUNCTION
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
            break;
        }
    }
}

// DECLARED VARIABLES
var rounds = 0;
var winUser = 0;
var winPc = 0;
var playP = 0;

// CODE START

// INTRO

console.log('Jokenpô Javascript v1.0');
const name = prompt('Digite seu nome: ');
do {
    do {
        var start = +prompt(
            'Digite 1 para começar a jogar ou 0 e eu lhe explicarei as regras: ',
        );
        while (start !== 0 && start !== 1) {
            console.log('Resposta inválida!');
            break;
        }
    } while (start !== 0 && start !== 1);

    if (start == 0) {
        console.log(
            'Jokenpô é o nome original do jogo conhecido como Pedra, papel ou tesoura.',
        );
        console.log('É um simples jogo que consiste em 3 opções.');
        console.log('Pedra: vence de tesoura mas perde para papel.');
        console.log('Papel: vence de pedra mas perde para tesoura.');
        console.log('Tesoura: vence de papel mas perde para pedra');
        console.log('Para jogar basta digita a quantidade de rodadas');
        console.log('E decidir sua jogada');
    }

    do {
        var rounds = +prompt(
            `${name}, digite a quantidade de rodadas que você deseja jogar (máximo de 100): `,
        );
        while (rounds < 0 || rounds > 100) {
            console.log('Quantidade de rodadas inválida!');
            break;
        }
    } while (rounds < 0 || rounds > 100);

    for (x = 0; x < rounds; x++) {
        do {
            var playU = prompt(`Rodada ${x + 1} - Pedra, papel ou tesoura?: `);
            var playU = playU.toLowerCase();
            while (
                playU !== 'pedra' &&
                playU !== 'papel' &&
                playU !== 'tesoura'
            ) {
                console.log('Jogada inválida');
                break;
            }

            playP = Math.floor(Math.random() * 3) + 1;
            // JOGOU PEDRA
            if (playU == 'pedra' && playP == 3) {
                console.log('Computador escolheu: tesoura');
                console.log(`${name} venceu a rodada`);
                winUser++;
            } else if (playU == 'pedra' && playP == 2) {
                console.log('Computador escolheu: papel');
                console.log(`${name} perdeu a rodada`);
                winPc++;
            } else if (playU == 'pedra' && playP == 1) {
                console.log('Computador escolheu: pedra');
                console.log('EMPATOU A RODADA!');
            }
            // JOGOU PAPEL
            if (playU == 'papel' && playP == 1) {
                console.log('Computador escolheu: pedra');
                console.log(`${name} venceu a rodada`);
                winUser++;
            } else if (playU == 'papel' && playP == 3) {
                console.log('Computador escolheu: tesoura');
                console.log(`${name} perdeu a rodada`);
                winPc++;
            } else if (playU == 'papel' && playP == 2) {
                console.log('Computador escolheu: papel');
                console.log('EMPATOU A RODADA!');
            }

            // JOGOU TESOURA
            if (playU == 'tesoura' && playP == 2) {
                console.log('Computador escolheu: papel');
                console.log(`${name} venceu a rodada`);
                winUser++;
            } else if (playU == 'tesoura' && playP == 1) {
                console.log('Computador escolheu: pedra');
                console.log(`${name} perdeu a rodada`);
                winPc++;
            } else if (playU == 'tesoura' && playP == 3) {
                console.log('Computador escolheu: tesoura');
                console.log('EMPATOU A RODADA!');
            }
        } while (playU !== 'pedra' && playU !== 'papel' && playU !== 'tesoura');
    }
    if (winUser > winPc) {
        console.log(
            `Suas vitórias: ${winUser} - Vitórias do computador: ${winPc}`,
        );
        console.log(`VOCÊ VENCEU O JOGO!!`);
    } else if (winPc > winUser) {
        console.log(
            `Suas vitórias: ${winUser} - Vitórias do computador: ${winPc}`,
        );
        console.log(`VOCÊ PERDEU O JOGO`);
    } else if (winPc == winUser) {
        console.log(
            `Suas vitórias: ${winUser} - Vitórias do computador: ${winPc}`,
        );
        console.log(`EMPATE!!`);
    }

    do {
        var replay = prompt('Deseja jogar novamente? ');
        var replay = replay.toLowerCase();
        var replay = replay.replace('ã', 'a');
        while (replay !== 'sim' && replay !== 'nao') {
            console.log('Resposta inválida');
            break;
        }
    } while (replay !== 'sim' && replay !== 'nao');
} while (replay == 'sim');
{
    console.log('Encerrando Jokenpô');
}
