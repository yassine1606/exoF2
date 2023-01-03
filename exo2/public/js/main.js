// exo 1
function reverseNumber(n1) {
    return n1.toString().split('').reverse().join('');

}
console.log(reverseNumber(456));

// exo 2

function divPar2(nb1) {
    switch (true) {
        case nb1 % 2 == 0:
            console.log(`${nb1} est divisible par 2 // ${nb1}/2 = ${nb1/2}`);
            break;
        case nb1 % 2 == 1:
            console.log(`${nb1} n'est pas divisible par 2`);
            break;

        default:
            break;
    }
}
console.log(divPar2(20));

// exo 3


function logIn() {
    while (true) {
        let motdepasse = prompt(`Entrez un mot de passe`)
        if (motdepasse==="mdp") {
            alert(`Vous êtes connectés`);
            break;
        }
    }
}
console.log(logIn());