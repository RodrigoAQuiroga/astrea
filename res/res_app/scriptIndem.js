//Función de Calculadora Indemnizatoria


function indemnizacionGeneral() {
    //Indemnización 245
    let yearInicial = parseInt(document.querySelector('.iniYear').value);
    let mesInicial = parseInt(document.querySelector('.iniMonth').value);
    let diaInicial = parseInt(document.querySelector('.iniDay').value);

    let yearFinal = parseInt(document.querySelector('.endYear').value);
    let mesFinal = parseInt(document.querySelector('.endMonth').value);
    let diaFinal = parseInt(document.querySelector('.endDay').value);

    const diffYear = yearFinal - yearInicial;
    const diffYearMinus = diffYear - 1;



    let salario = parseInt(document.querySelector('.sueldo').value);

    if (mesInicial <= mesFinal) {

        let rubroA = document.createElement("p");
        rubroA.setAttribute("id", "indeGeneral")

        rubroA.innerHTML = "<b>INDEMNIZACIÓN POR ANTIGÜEDAD:</b> Según su salario de $" + salario + ", y por sus " + diffYear + " años de relación, le corresponde una indemnización aproximada de $" + diffYear * salario + " de acuerdo al art. 245 LCT";

        document.getElementById("showRubro").appendChild(rubroA);

    } else {
        let rubroB = document.createElement("p");
        rubroB.setAttribute("id", "indeGeneral")

        rubroB.innerHTML = "<b>INDEMNIZACIÓN POR ANTIGÜEDAD:</b> Según su salario de $" + salario + ", y por sus " + diffYearMinus + " años de relación, le corresponde una indemnización aproximada de $" + diffYearMinus * salario + " de acuerdo al art. 245 LCT";

        document.getElementById("showRubro").appendChild(rubroB);
    }

    //Fin de Indemnización General

    //Inicio Indemnizacion Integración del Mes

    let claseMeses = [31, 30, 28, 29]

    if (diaFinal >= 1 && diaFinal < 31 && mesFinal == 1 || mesFinal == 3 || mesFinal == 5 || mesFinal == 7 || mesFinal == 8 || mesFinal == 10 || mesFinal == 12) {

        let rubroC = document.createElement("p");
        rubroC.setAttribute("id", "indeIntegra")

        rubroC.innerHTML = "<b>INTEGRACIÓN MES DE DESPIDO:</b> Por intergración del mes de despido, debido a que le faltaban " + (claseMeses[0] - diaFinal) + " días para que concluya el mes, y su sueldo proporcional era de $" + (salario / claseMeses[0]) + ", le corresponde aproximadamente de acuerdo al art. 233 LCT $" + (salario / claseMeses[0]) * (claseMeses[0] - diaFinal) + " y por los dias trabajados $" + (salario / claseMeses[0]) * diaFinal;

        document.getElementById("showRubro").appendChild(rubroC);

    } else if (diaFinal >= 1 && diaFinal < 31 && mesFinal == 4 || mesFinal == 6 || mesFinal == 9 || mesFinal == 11) {

        let rubroC = document.createElement("p");
        rubroC.setAttribute("id", "indeIntegra")

        rubroC.innerHTML = "<b>INTEGRACIÓN MES DE DESPIDO:</b> Por intergración del mes de despido, debido a que le faltaban " + (claseMeses[1] - diaFinal) + " días para que concluya el mes, y su sueldo proporcional era de $" + (salario / claseMeses[1]) + ", le corresponde aproximadamente de acuerdo al art. 233 LCT $" + (salario / claseMeses[1]) * (claseMeses[1] - diaFinal) + " y por los dias trabajados $" + (salario / claseMeses[1]) * diaFinal;

        document.getElementById("showRubro").appendChild(rubroC);

    } else if (diaFinal >= 1 && diaFinal < 31 && mesFinal == 2 && (yearFinal % 4) === 0) {

        let rubroC = document.createElement("p");
        rubroC.setAttribute("id", "indeIntegra")

        rubroC.innerHTML = "<b>INTEGRACIÓN MES DE DESPIDO:</b> Por intergración del mes de despido, debido a que le faltaban " + (29 - diaFinal) + " días para que concluya el mes, y su sueldo proporcional era de $" + (salario / 29) + ", le corresponde aproximadamente de acuerdo al art. 233 LCT $" + (salario / 29) * (29 - diaFinal) + " y por los dias trabajados $" + (salario / 29) * diaFinal;

        document.getElementById("showRubro").appendChild(rubroC);

    } else if (diaFinal >= 1 && diaFinal < 31 && mesFinal == 2) {

        let rubroC = document.createElement("p");
        rubroC.setAttribute("id", "indeIntegra")

        rubroC.innerHTML = "<b>INTEGRACIÓN MES DE DESPIDO:</b> Por intergración del mes de despido, debido a que le faltaban " + (claseMeses[2] - diaFinal) + " días para que concluya el mes, y su sueldo proporcional era de $" + (salario / claseMeses[2]) + ", le corresponde aproximadamente de acuerdo al art. 233 LCT $" + (salario / claseMeses[2]) * (claseMeses[2] - diaFinal) + " y por los dias trabajados $" + (salario / claseMeses[2]) * diaFinal;

        document.getElementById("showRubro").appendChild(rubroC);

    }
    //FIN INTEGRA

    //INICIO PREAVISO


    let mesMinus = mesInicial <= mesFinal;

    if (mesMinus && diffYear > 5) {
        console.log("funciona " + diffYear)


        let rubroD = document.createElement("p");
        rubroD.setAttribute("id", "indePRE")

        rubroD.innerHTML = "<b>PREAVISO:</b> Según su salario de $" + salario + ", y por sus " + diffYear + " años de relación, le corresponde una indemnización por preaviso aproximada de $" + (salario * 2) + " de acuerdo al art. 232 LCT";

        document.getElementById("showRubro").appendChild(rubroD);



    } else if (mesMinus && diffYear <= 5) {

        console.log(diffYear + "menor 5")

        let rubroE = document.createElement("p");
        rubroE.setAttribute("id", "indePRE")

        rubroE.innerHTML = "<b>PREAVISO:</b> Según su salario de $" + salario + ", y por sus " + diffYear + " años de relación, le corresponde una indemnización por preaviso aproximada de $" + salario + " de acuerdo al art. 232 LCT";

        document.getElementById("showRubro").appendChild(rubroE);

    }




    if (!mesMinus && diffYearMinus > 5) {

        console.log("funciona" + diffYearMinus)

        let rubroF = document.createElement("p");
        rubroF.setAttribute("id", "indePRE")

        rubroF.innerHTML = "<b>PREAVISO:</b> Según su salario de $" + salario + ", y por sus " + diffYearMinus + " años de relación, le corresponde una indemnización por preaviso aproximada de $" + (salario * 2) + " de acuerdo al art. 232 LCT";

        document.getElementById("showRubro").appendChild(rubroF);

    } else if (!mesMinus && diffYearMinus <= 5) {

        console.log(diffYearMinus + "menor 5")

        let rubroG = document.createElement("p");
        rubroG.setAttribute("id", "indePRE")

        rubroG.innerHTML = "<b>PREAVISO:</b> Según su salario de $" + salario + ", y por sus " + diffYearMinus + " años de relación, le corresponde una indemnización por preaviso aproximada de $" + salario + " de acuerdo al art. 232 LCT";

        document.getElementById("showRubro").appendChild(rubroG);

    }
    //FIN PREAVISO




    //Vacaciones no gozadas

    let diasMonths = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
    let diasRest = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let diasPropor = ((diasMonths[mesFinal - 1] - diasRest[mesFinal - 1]) + diaFinal - 1) / 365;

    console.log(diasPropor + " " + (salario / 25) + "x " + ((diasMonths[mesFinal - 1] - diasRest[mesFinal - 1]) + diaFinal - 1));



    if (mesMinus && diffYear < 5 || !mesMinus && diffYearMinus < 5) {

        console.log("corresponde 14")

        let rubroH = document.createElement("p");
        rubroH.setAttribute("id", "indeVaca")

        rubroH.innerHTML = "<b>INDEMNIZACIÓN POR VACACIONES NO GOZADAS:</b> La indemnización por vacaciones no gozadas entre el periodo de Octubre del año anterior y Abril del corriente año, consistiria aproximadamente en: $" + (salario / 25) * (14 * diasPropor);

        document.getElementById("showRubro").appendChild(rubroH);

    } else if (mesMinus && diffYear >= 5 && diffYear <= 10 || !mesMinus && diffYearMinus >= 5 && diffYearMinus <= 10) {
        console.log("corresponde 21")

        let rubroH = document.createElement("p");
        rubroH.setAttribute("id", "indeVaca")



        rubroH.innerHTML = "<b>INDEMNIZACIÓN POR VACACIONES NO GOZADAS:</b> La indemnización por vacaciones no gozadas entre el periodo de Octubre del año anterior y Abril del corriente año, consistiria aproximadamente en: $" + (salario / 25) * (21 * diasPropor);

        document.getElementById("showRubro").appendChild(rubroH);

    } else if (mesMinus && diffYear >= 10 && diffYear <= 20 || !mesMinus && diffYearMinus >= 10 && diffYearMinus <= 20) {
        console.log("corresponde 28")

        let rubroH = document.createElement("p");
        rubroH.setAttribute("id", "indeVaca")



        rubroH.innerHTML = "<b>INDEMNIZACIÓN POR VACACIONES NO GOZADAS:</b> La indemnización por vacaciones no gozadas entre el periodo de Octubre del año anterior y Abril del corriente año, consistiria aproximadamente en: $ " + (salario / 25) * (28 * diasPropor);

        document.getElementById("showRubro").appendChild(rubroH);

    } else if (mesMinus && diffYear > 20 || !mesMinus && diffYearMinus > 20) {

        console.log("corresponde 35")

        let rubroH = document.createElement("p");
        rubroH.setAttribute("id", "indeVaca")



        rubroH.innerHTML = "<b>INDEMNIZACIÓN POR VACACIONES NO GOZADAS:</b> La indemnización por vacaciones no gozadas entre el periodo de Octubre del año anterior y Abril del corriente año, consistiria aproximadamente en: $ " + (salario / 25) * (35 * diasPropor);

        document.getElementById("showRubro").appendChild(rubroH);

    }


    //PROPORCIONAL SAC
    let day = (diasMonths[mesFinal - 1] - diasRest[mesFinal - 1]) + (diaFinal - 1);
    let diasProporSAC = day / 181;

    console.log(diasProporSAC);

    let sac = salario / 2;

    let rubroI = document.createElement("p");
    rubroI.setAttribute("id", "indeSAC")

    rubroI.innerHTML = "<b>SAC PROPORCIONAL:</b> La indemnización por SAC proporcional corresponderia a: $ " + (sac * diasProporSAC);

    document.getElementById("showRubro").appendChild(rubroI);


}

function erase() {

    document.getElementById('showRubro').innerHTML = " ";

}



