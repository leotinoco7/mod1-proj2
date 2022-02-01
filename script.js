const prompt = require('prompt-sync')();

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
            break;
        }
    }
}

var rounds = 0;

console.log('Jokenpô Javascript v1.0');
sleep(250);
const name = prompt('Digite seu nome: ');
sleep(250);
do {
    do {
        var start = +prompt(
            'Digite 1 para começar a jogar ou 0 e eu lhe explicarei as regras: ',
        );
        sleep(250);
        while (start !== 0 && start !== 1) {
            console.log('Resposta inválida!');
            sleep(250);
            break;
        }
    } while (start !== 0 && start !== 1);

    if (start == 0) {
        console.log(
            'Jokenpô é o nome original do jogo conhecido como Pedra, papel ou tesoura.',
        );
        sleep(250);
        console.log('É um simples jogo que consiste em 3 opções.');
        sleep(250);
        console.log('Pedra: vence de tesoura mas perde para papel.');
        sleep(250);
        console.log('Papel: vence de pedra mas perde para tesoura.');
        sleep(250);
        console.log('Tesoura: vence de papel mas perde para pedra');
        sleep(250);
        console.log('Para jogar basta digita a quantidade de rodadas');
        sleep(250);
        console.log('E escolher uma das 3 opções!!');
        sleep(250);
    }

    do {
        var winUser = 0;
        var winPc = 0;
        var playP = 0;
        var rounds = +prompt(
            `${name}, digite a quantidade de rodadas que você deseja jogar (máximo de 100): `,
        );
        sleep(250);
        while (rounds < 0 || rounds > 100) {
            console.log('Quantidade de rodadas inválida!');
            sleep(250);
            break;
        }
    } while (rounds < 0 || rounds > 100);

    for (x = 0; x < rounds; x++) {
        do {
            var playU = prompt(
                `Rodada ${x + 1} - Pedra, papel ou tesoura?: `,
            ).toLowerCase();
            sleep(250);
            while (
                playU !== 'pedra' &&
                playU !== 'papel' &&
                playU !== 'tesoura'
            ) {
                console.log('Jogada inválida');
                sleep(250);
                break;
            }

            playP = Math.floor(Math.random() * 3) + 1;
            if (playU == 'pedra' && playP == 3) {
                console.log('Computador escolheu: tesoura');
                sleep(250);
                console.log(`${name} venceu a rodada`);
                sleep(250);
                winUser++;
            } else if (playU == 'pedra' && playP == 2) {
                console.log('Computador escolheu: papel');
                sleep(250);
                console.log(`${name} perdeu a rodada`);
                sleep(250);
                winPc++;
            } else if (playU == 'pedra' && playP == 1) {
                console.log('Computador escolheu: pedra');
                sleep(250);
                console.log('EMPATOU A RODADA!');
                sleep(250);
            }
            if (playU == 'papel' && playP == 1) {
                console.log('Computador escolheu: pedra');
                sleep(250);
                console.log(`${name} venceu a rodada`);
                sleep(250);
                winUser++;
            } else if (playU == 'papel' && playP == 3) {
                console.log('Computador escolheu: tesoura');
                sleep(250);
                console.log(`${name} perdeu a rodada`);
                sleep(250);
                winPc++;
            } else if (playU == 'papel' && playP == 2) {
                console.log('Computador escolheu: papel');
                sleep(250);
                console.log('EMPATOU A RODADA!');
                sleep(250);
            }

            if (playU == 'tesoura' && playP == 2) {
                console.log('Computador escolheu: papel');
                sleep(250);
                console.log(`${name} venceu a rodada`);
                sleep(250);
                winUser++;
            } else if (playU == 'tesoura' && playP == 1) {
                console.log('Computador escolheu: pedra');
                sleep(250);
                console.log(`${name} perdeu a rodada`);
                sleep(250);
                winPc++;
            } else if (playU == 'tesoura' && playP == 3) {
                console.log('Computador escolheu: tesoura');
                sleep(250);
                console.log('EMPATOU A RODADA!');
                sleep(250);
            }
        } while (playU !== 'pedra' && playU !== 'papel' && playU !== 'tesoura');
    }
    if (winUser > winPc) {
        console.log(
            `Suas vitórias: ${winUser} - Vitórias do computador: ${winPc}`,
        );
        sleep(250);
        console.log(`${name} VENCEU O JOGO!!`);
        sleep(250);
    } else if (winPc > winUser) {
        console.log(
            `Suas vitórias: ${winUser} - Vitórias do computador: ${winPc}`,
        );
        sleep(250);
        console.log(`${name} PERDEU O JOGO!!`);
        sleep(250);
    } else if (winPc == winUser) {
        console.log(
            `Suas vitórias: ${winUser} - Vitórias do computador: ${winPc}`,
        );
        sleep(250);
        console.log(`EMPATE!!`);
        sleep(250);
    }

    do {
        var replay = prompt('Deseja jogar novamente? ')
            .toLowerCase()
            .replace('ã', 'a');
        sleep(250);
        while (replay !== 'sim' && replay !== 'nao') {
            console.log('Resposta inválida');
            sleep(250);
            break;
        }
    } while (replay !== 'sim' && replay !== 'nao');
} while (replay == 'sim');
{
    console.log('Encerrando Jokenpô');
}
