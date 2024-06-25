// Crie uma variável para armazenar o nome e a quantidade de experiência
// (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
let nome = "Superman";
let xp = 8455;
let nivel = "";

// menor que 1000 - Ferro
//se 1001 a 2000 - Bronze
//se 2001 a 5000 - Prata
//se 5001 a 7000 - Ouro
//se 7001 a 8000 - Platina Diamante
//se 8001 a 9000 - Ascendente
//se 9001 a 10000 - Imortal
// Acima de 10001 - Radiante
switch (true) {
    case (xp <= 1000):
        nivel = "Ferro";
        break;
    case (xp >= 1001 && xp <= 2000):
        nivel = "Bronze";
        break;
    case (xp >= 2001 && xp <= 5000):
        nivel = "Prata";
        break;
    case (xp >= 5001 && xp <= 7000):
        nivel = "Ouro";
        break;
    case (xp >= 7001 && xp <= 8000):
        nivel = "Platina Diamante";
        break;
    case (xp >= 8001 && xp <= 9000):
        nivel = "Ascendente";
        break;
    case (xp >= 9001 && xp <= 10000):
        nivel = "Imortal";
        break;
    case (xp >= 10001):
        nivel = "Radiante";
        break;
    default:
        console.log("Valor inválido");
        break;
}

// Mostre a mensagem "O Herói de nome {nome} está no nível de {nível} "
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);