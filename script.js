function monPyramide() {
    var nb_etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
    if (nb_etage >= 1 && nb_etage <= 20) {
        console.log("Voici la pyramide :");
        var j = 0;
        var k = 0;
        var ch1;
        var ch2;
        var res = "";

        j = 1;
        k = nb_etage  - 1;
        console.log(res);
        for (i = 1; i <= nb_etage ; i++) {
            ch1 = "";
            ch2 = "";
            for (x = 1; x <= k; x++) {
                ch1 = ch1 + " ";
            }
            for (x = 1; x <= j; x++) {
                ch2 = ch2 + "#";
            }
            res = res + ch1 + ch2 + "\n";
            j = j + 2;
            k = k - 1;
        }
        console.log(res);
    }

}
monPyramide();
