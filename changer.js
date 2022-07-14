exports.changer = function (house, token) {
    const request = require('request'); // npm i request
    var CasaAleatória = [1, 2, 3];

    request({
        method: "POST",
        url: "https://discord.com/api/v8/bhypesquad/online",
        body: {
            "house_id": house == "Bravery" ? 1 : // casa roxa
                        house == "Brilliance" ? 2 : // casa laranja
                        house == "Balance" ? 3 : // casa verde-água
                        house == "Random" ? CasaAleatória[
                            Math.floor(Math.random() * CasaAleatória.length) // aleatorizar a casa
                        ] : undefined
        },
        json: true,
        headers: {
            "Authorization": token // token da conta
        }
    }, (error) => {
        error ? console.log(error) : console.log("HypeSquad alterado.")
    })
}

// rodar o script (exemplo)

// const hypesquad = require("hypesquad-changer");
// console.log(hypesquad.changer("casa", "token da conta"));
