var perguntas = [
    '1. Qual a sigla para Central Process Unit?',
    '2. Qual o componente que realiza operações lógicas e aritméticas?',
    '3. Tipo de memória que se encontra no topo da hierarquia de memória.',
    '4. Tipo de memória volátil que tem como nome Random Acess Memory. Qual é a sigla deste componente?',
    '5. Tipo de memória não volátil que oferece dados apenas para leitura',
    '6. Tipo de memória não volátil que precisa ter seu chip exposto a luz ultravioleta para apagar seu conteúdo',
    '7. Tipo particular de ROM, porém com o processo de gravação/regravação realizado por pulso de energia elétrica',
    '8. Tipo de memória que precisa ter seu conteúdo copiado na RAM para poder ser executado pela CPU',
    '9. Permite que periféricos acessem diretamente a RAM sem ocupar processamento',
    '10. Usado para selecionar um ou um conjunto de circuitos que estão conectados no computador',
    '11. Grupo de linhas ou trilhas usadas para se referir a um endereço físico na memória',
    '12. Também chamado de Memory Bus. É responsável para carregar os dados.',
    '13. Modelo de processador desenvolvido pela Intel que teve sua primeira versão lançada em setembro de 2009',
    '14. Modelo de processador desenvolvido pela Intel que teve sua primeira versão lançada em novembro de 2008',
    '15. Tipo de processador que possui dois núcleos',
    '16. Tipo de processador que possui quatro núcleos'
];

var respostas = [
    // Respostas 1  [0]- Correto 2 [1]
    ['CSS', 'CPU', 'PUC', 'UPC'],

    // Respostas 2  [1]- Correto 1 [0]
    ['ULA', 'OLA', 'ALU', 'Calculadora'],

    // Respostas 3  [2]- Correto 4 [3]
    ['RAM', 'Memory Bus', 'ROM', 'Registradores'],

    // Respostas 4  [3]- Correto 4 [3]
    ['EPROM', 'Cache', 'ARM', 'RAM'],

    // Respostas 5  [4]- Correto 1 [0]
    ['ROM', 'Data Bus', 'Memória de Massa', 'Slave Select (SS)'],

    // Respostas 6  [5]- Correto 3 [2]
    ['Memória de Massa', 'Memory Bus', 'EPROM', 'EEPROM'],

    // Respostas 7  [6]- Correto 2 [1]
    ['Memória de Massa', 'Flash', 'Slave Select (SS)', 'Cache'],

    // Respostas 8  [7]- Correto 4 [3]
    ['Cache', 'DMA', 'CPU', 'Memória de Massa'],

    // Respostas 9  [8]- Correto 3 [2]
    ['Address Bus', 'Memory Bus', 'DMA', 'Chip Select (CS)'],

    // Respostas 10 [9] - Correto 1 [0]
    ['Chip Select (CS)', 'Address Bus', 'USB', 'HDMI'],

    // Respostas 11 [10] - Correto 3 [2]
    ['Slave Select (SS)', 'SSD', 'Address Bus', 'Ônibus'],

    // Respostas 12 [11] - Correto 1 [0]
    ['Data Bus', 'CPU', 'PC', 'Internet'],

    // Respostas 13 [12] - Correto 3 [2]
    ['i3', 'i7', 'i5', 'i9'],

    // Respostas 14 [13] - Correto 4 [3]
    ['i9', 'i5', 'i3', 'i7'],

    // Respostas 15 [14] - Correto 1 [0]
    ['Dual Core', 'Double-Núcleo', 'Dois-Cores', '2-Núcleo-Dentro'],

    // Respostas 16 [15] - Correto 2 [1]
    ['Quarteto de Cores', 'Quad Core', 'Core ao Quadrado', '4']
]

var vez = 0;

var img_celso = 1;

var val_errar = 0;
var val_parar = 0;
var val_acertar = 1000;
var total_questoes = 0;

function verificar(valor_btn) {
    var passar;

    if (pergunta_tela.innerHTML == perguntas[0]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[0][1]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[0][1]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[0][1]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[0][1]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[1]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[1][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[1][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[1][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[1][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[2]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[2][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[2][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[2][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[2][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[3]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[3][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[3][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[3][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[3][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[4]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[4][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[4][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[4][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[4][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[5]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[5][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[5][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[5][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[5][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[6]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[6][1]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[6][1]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[6][1]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[6][1]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[7]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[7][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[7][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[7][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[7][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[8]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[8][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[8][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[8][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[8][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[9]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[9][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[9][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[9][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[9][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[10]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[10][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[10][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[10][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[10][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[11]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[11][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[11][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[11][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[11][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[12]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[12][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[12][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[12][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[12][2]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[13]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[13][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[13][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[13][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[13][3]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[14]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[14][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[14][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[14][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[14][0]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }

    else if (pergunta_tela.innerHTML == perguntas[15]) {
        if (valor_btn == 1) {
            if (alt_1.innerHTML == respostas[15][1]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 2) {
            if (alt_2.innerHTML == respostas[15][1]) {
                passar = true;
                vez++;

            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 3) {
            if (alt_3.innerHTML == respostas[15][1]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
        if (valor_btn == 4) {
            if (alt_4.innerHTML == respostas[15][1]) {
                passar = true;
                vez++;
            }
            else {
                passar = false;
            }
        }
    }


    if (passar == true) {
        filtro.style.visibility = 'visible';
        resposta_certa.style.display = 'block';

        setTimeout(esconder, 1500);

        total_questoes++;

        if (pergunta_tela.innerHTML == perguntas[0]) {
            val_errar += 500;
            val_parar += 1000;
            val_acertar += 1000;
        }
        else if (pergunta_tela.innerHTML == perguntas[1]) {
            val_errar += 500;
            val_parar += 1000;
            val_acertar += 1000;
        }
        else if (pergunta_tela.innerHTML == perguntas[2]) {
            val_errar += 500;
            val_parar += 1000;
            val_acertar += 1000;
        }
        else if (pergunta_tela.innerHTML == perguntas[3]) {
            val_errar += 500;
            val_parar += 1000;
            val_acertar += 1000;
        }
        else if (pergunta_tela.innerHTML == perguntas[4]) {
            val_errar += 500;
            val_parar += 1000;
            val_acertar += 5000;
        }
        else if (pergunta_tela.innerHTML == perguntas[5]) {
            val_errar += 2500;
            val_parar += 5000;
            val_acertar += 10000;
        }
        else if (pergunta_tela.innerHTML == perguntas[6]) {
            val_errar += 5000;
            val_parar += 10000;
            val_acertar += 10000;
        }
        else if (pergunta_tela.innerHTML == perguntas[7]) {
            val_errar += 5000;
            val_parar += 10000;
            val_acertar += 10000;
        }
        else if (pergunta_tela.innerHTML == perguntas[8]) {
            val_errar += 5000;
            val_parar += 10000;
            val_acertar += 10000;
        }
        else if (pergunta_tela.innerHTML == perguntas[9]) {
            val_errar += 5000;
            val_parar += 10000;
            val_acertar += 50000;
        }
        else if (pergunta_tela.innerHTML == perguntas[10]) {
            val_errar += 25000;
            val_parar += 50000;
            val_acertar += 100000;
        }
        else if (pergunta_tela.innerHTML == perguntas[11]) {
            val_errar += 50000;
            val_parar += 100000;
            val_acertar += 100000;
        }
        else if (pergunta_tela.innerHTML == perguntas[12]) {
            val_errar += 100000;
            val_parar += 100000;
            val_acertar += 100000;
        }
        else if (pergunta_tela.innerHTML == perguntas[13]) {
            val_errar += 100000;
            val_parar += 100000;
            val_acertar += 100000;
        }
        else if (pergunta_tela.innerHTML == perguntas[14]) {
            val_errar += 100000;
            val_parar += 100000;
            val_acertar += 500000;
        }

        if (img_celso < 5) {
            img_celso++;
        }
        else {
            img_celso = 1;
        }

        if (val_errar >= 1000) {
            errar_tela.innerHTML = val_errar / 1000 + ' Mil';
        }
        else {
            errar_tela.innerHTML = val_errar;
        }
        if (val_parar >= 1000) {
            parar_tela.innerHTML = val_parar / 1000 + ' Mil';
        }
        else {
            parar_tela.innerHTML = val_parar;
        }
        if (val_acertar >= 1000) {
            if(val_acertar == 1000000){
                acertar_tela.innerHTML = '1 Milhão'; 
            }
            else {
                acertar_tela.innerHTML = val_acertar / 1000 + ' Mil';
            }
        }
        else {
            acertar_tela.innerHTML = val_acertar;
        }

        if (vez < 16) {
            celso.src = `imgs/celso${img_celso}.jpg`
            pergunta_tela.innerHTML = perguntas[vez];
            alt_1.innerHTML = respostas[vez][0];
            alt_2.innerHTML = respostas[vez][1];
            alt_3.innerHTML = respostas[vez][2];
            alt_4.innerHTML = respostas[vez][3];
        }
        else {
            setTimeout(resultado, 1500);
        }
    }
    if (passar == false) {
        filtro.style.visibility = 'visible';
        resposta_errada.style.display = 'block';

        setTimeout(esconder, 1500);
        setTimeout(errar, 1500);

    }


}
function esconder() {
    filtro.style.visibility = 'hidden';
    resposta_certa.style.display = 'none';
    resposta_errada.style.display = 'none';
}

function resultado() {
    filtro.style.visibility = 'visible';
    resultado_final.style.display = 'block';
    questoes.innerHTML = total_questoes + '/16';
    if (total_questoes == 16) {
        if (val_acertar >= 1000) {
            if(val_acertar == 1000000){
                dinheiro.innerHTML = '1 Milhão'; 
            }
            else {
                dinheiro.innerHTML = val_acertar / 1000 + ' Mil';
            }
        } else {
            dinheiro.innerHTML = val_acertar;
        }
    } else {
        if (val_parar >= 1000) {
            dinheiro.innerHTML = val_parar / 1000 + ' Mil';
        } else {
            dinheiro.innerHTML = val_parar;
        }
    }
}

function errar() {
    filtro.style.visibility = 'visible';
    resultado_final.style.display = 'block';
    questoes.innerHTML = total_questoes + '/16';

    if (val_errar >= 1000) {
        dinheiro.innerHTML = val_errar / 1000 + 'Mil';
    } else {
        dinheiro.innerHTML = val_errar;
    }
}

