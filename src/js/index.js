$(document).ready(() =>{

    $("#btnEnviar").click(() => {
       retornaBrother(); 
    });
});

function retornaBrother() {
    const enums = {
        fumaDuranteSemana: "fumaDuranteSemana",
        ponto9: "ponto9",
        doce: "doce",
        po: "po",
        sensivel: "sensivel",
        violao: "violao",
        praca: "praca",
        pastel: "pastel",
        ninjutsu: "ninjutsu",
        dirige: "dirige",
        estuprador: "estuprador",
        levaMinaNoRole: "levaMinaNoRole"
    }
    
    const kevin = [enums.fumaDuranteSemana, enums.ponto9, enums.dirige, enums.doce, enums.po];
    const busca = [enums.pastel, enums.dirige, enums.doce];
    const ivan = [enums.fumaDuranteSemana, enums.doce, enums.violao, enums.dirige];
    const marimbindo = [enums.fumaDuranteSemana, enums.violao, enums.doce];
    const willzao = [enums.fumaDuranteSemana, enums.doce, enums.ninjutsu, enums.dirige];
    const bomCara = [enums.sensivel, enums.doce, enums.estuprador];
    const nicker = [enums.praca, enums.doce, enums.fumaDuranteSemana];
    const leo = [enums.po, enums.dirige];
    const pokemon = [enums.fumaDuranteSemana, enums.sensivel, enums.po, enums.doce, enums.levaMinaNoRole];
    
    const checks = [];
    $('.form-check-input').each(function() {
        if($(this).is(":checked")){
            checks.push($(this).val());
        }
    });

    sw
    if(checks.includes(enums.po)) {
        alert("Kevin");
    }

    if(checks.includes(enums.pastel)) {
        alert("busca");
    }
}
