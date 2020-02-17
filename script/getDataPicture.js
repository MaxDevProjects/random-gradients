let colorsArr = [];
window.onload = function () {
    //   creation du canvas
    var c = document.getElementById("canvas");
    // creation du conntext 2d
    let ctx = c.getContext('2d');
    // recupération de l'image de référence
    let img = document.getElementById("img");
    // Définition de la taille du canvas par rapport à la taille de l'image
    c.width = img.clientWidth;
    c.height = img.clientHeight;

    // simple affichage de l'image pour tester les dimensions
    ctx.drawImage(img, 0, 0, img.clientWidth, img.clientHeight);

    // définition de la taille d'un pixel
    let pixel = 1;

    // parcours de chaque pixel de l'image
    // Lignes
    for (let l = 0; l < img.clientWidth * pixel; l++) {
        // colonnes
        for (let c = 0; c < img.clientHeight * pixel; c++) {
            // retourne la valeur des datas de l'image de chaque pixel
            let datas = ctx.getImageData([c][l], [c][l], pixel, pixel);
            let data = datas.data;

            // écriture de la couleur de chaque pixel
            let rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3]})`;
            colorsArr.push(rgba);
            // console.log(rgba);
        }
        let s = 0;
            for (let i = 0; i < colorsArr.length; i++) {
                const element = colorsArr[i];
                s = i + 1
                if (colorsArr[s] === colorsArr[i]) {
                    colorsArr.splice(s, 1);
                    console.log(colorsArr[s] + " => " + colorsArr[i]);
                }
            }
        }
        // let n = 0;
        // for (let m = 0; m < colorsArr.length; m++) {

        // }
    }


}