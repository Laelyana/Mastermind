$(document).ready(function(){
    var couleurCourante = "white";
    var celullesTableauCourantes = ["tableau40", "tableau41", "tableau42", "tableau43"];
    var celullesAideCourantes = ["aide40", "aide41", "aide42", "aide43"];
    var ligneCourante = 11;
    var couleursPossibles = ["blue","green","red","yellow","orange","pink"];

    var couleurCell1, couleurCell2, couleurCell3, couleurCell4;

    var couleurs = {
        "rgb(0, 128, 0)" : "green",
        "rgb(255, 255, 0)" : "yellow",
        "rgb(255, 0, 0)" : "red",
        "rgb(0, 0, 255)" : "blue",
        "rgb(255, 192, 203)" : "pink",
        "rgb(255, 165, 0)" : "orange",
    }

    var code = [
        couleursPossibles[Math.floor(Math.random()*6)],
        couleursPossibles[Math.floor(Math.random()*6)],
        couleursPossibles[Math.floor(Math.random()*6)],
        couleursPossibles[Math.floor(Math.random()*6)],
    ];


    for (let i = 0; i <44; i++) {
        let cellule = "<div class=\"celluleTableau\" id=tableau"+i+"></div>";
        $(".tableau").append(cellule);        
    }

    for (let i = 0; i <44; i++) {
        let cellule = "<div class=\"celluleAide\" id=aide"+i+"></div>";
        $(".aide").append(cellule);        
    }

    $(".tableau").css("grid-template-rows", "repeat(11, 73.18px)");
    $(".tableau").css("grid-template-columns", "repeat(4, 73.18px)");
    $(".celluleTableau").css("border", "1px solid black");
    $(".celluleTableau").css("border-radius", "50%");
    $(".celluleTableau").css("background-color", "white");

    $(".aide").css("grid-template-rows", "repeat(22, 36.59px)");
    $(".aide").css("grid-template-columns", "repeat(2, 36.59px)");
    $(".celluleAide").css("border", "1px solid black");
    $(".celluleAide").css("border-radius", "50%");
    $(".celluleAide").css("background-color", "grey");

    $(".couleur").each(function(){
        let couleur = $(this).attr("id");
        $(this).css("background-color", couleur);
    });

    $(".couleur").click(function(){
        let couleur = $(this).attr("id");
        couleurCourante = couleur;
        $(".couleurCourante").css("background-color", couleur);
    });

    $(".celluleTableau").click(function(){
        var id = $(this).attr("id");

        if (isValid(id)) {
            $(this).css("background-color", couleurCourante)
        }
    });

    function changerLigneCourante() {
        ligneCourante -= 1;
        var mult = 4;

        celullesTableauCourantes = [
            "tableau" + (ligneCourante*mult-4),
            "tableau" + (ligneCourante*mult-3),
            "tableau" + (ligneCourante*mult-2),
            "tableau" + (ligneCourante*mult-1),
        ];

        celullesAideCourantes = [
            "aide" + (ligneCourante*mult-4),
            "aide" + (ligneCourante*mult-3),
            "aide" + (ligneCourante*mult-2),
            "aide" + (ligneCourante*mult-1),
        ];
    }

    function isValid(){
        if (celullesTableauCourantes.includes(id) && gagne === false) {
            return true;
        }
        return false;
    }

    function verifVictoire(){
        if (code[0] === couleurCell1 &&
            code[1] === couleurCell2 &&
            code[2] === couleurCell3 &&
            code[3]=== couleurCell4
            ) {
            gagne = true;
            alert('Bravo ! Tu as gagné =)');
            $('#couleurSecrete1').css("background-color", code[0]);
            $('#couleurSecrete2').css("background-color", code[1]);
            $('#couleurSecrete3').css("background-color", code[2]);
            $('#couleurSecrete4').css("background-color", code[3]);
        }
        return gagne;
    }
});