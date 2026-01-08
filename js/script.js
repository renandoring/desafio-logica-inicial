
function calculateHeroLevel() {
    // Para conectar com o formulário, você precisa adicionar um evento
    document.getElementById('heroForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o recarregamento da página

        // Pega os valores do formulário em vez do prompt
        let getNameHero = document.getElementById('name').value;
        let getExperience = Number(document.getElementById('experience').value);

        //Logica de nivel do herói
        let nivel;

        if (getExperience < 1000) {
            nivel = "Ferro";
        } else if (getExperience >= 1000 && getExperience < 2000) {
            nivel = "Bronze";
        } else if (getExperience >= 2000 && getExperience < 5000) {
            nivel = "Prata";
        } else if (getExperience >= 5000 && getExperience < 7000) {
            nivel = "Ouro";
        } else if (getExperience >= 7000 && getExperience < 8000) {
            nivel = "Platina";
        } else if (getExperience >= 8000 && getExperience < 9000) {
            nivel = "Ascendente";
        } else if (getExperience >= 9000 && getExperience < 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Lendário";
        }

        //Exibe o resultado
        // Mostra resultado na tela (melhor que alert)
        document.getElementById('result').innerHTML =
            `<h2>Resultado:</h2>
             <p>O herói <strong>${getNameHero}</strong> está no nível <strong>${nivel}</strong></p>`;
    });

    // Função Resetar - CORRIGIDA DE VERDADE
    document.getElementById('resetBtn').addEventListener('click', function () {
        document.getElementById('heroForm').reset();
        document.getElementById('result').innerHTML = "";
    });
}

    //Call the function
    window.onload = calculateHeroLevel;