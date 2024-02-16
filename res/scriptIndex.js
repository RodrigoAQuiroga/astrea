
function createElements_a(idContainer, ref, texto) {
    let container = document.querySelector(idContainer);
    let text = document.createTextNode(texto)
    let link = document.createElement("a");

    link.setAttribute("href", ref);
    link.appendChild(text)

    container.appendChild(link);
}

function loadCreatedElements() {


    let firstInv = ["https://drive.google.com/file/d/1q0Ah2P3CvcX9f7xQKb02gqOwChNsM5kO/view?usp=drive_link", "Ensayo de respuesta al delito - 26/09/2017"];
    let secondInv = ["https://drive.google.com/file/d/1i8xF9AFIhN2lA9e7CQmIlpyzm9srZhqN/view?usp=drive_link", "Critica al Sistema Penal - 15 /09 / 2021"]

    //constituciones
    let cn = ["res/res_lex/cn.html", "Constitución Nacional"];
    let cpMdz = ["res/res_lex/cpmdz.html", "Constitución de Mendoza"];

    //tratados
    let dadh = ["res/res_lex/dadh.html", "Declaración Americana de los Derechos y Deberes del Hombre"];
    let dudh = ["res/res_lex/dudh.html", "Declaración Universal de Derechos Humanos"];
    let cadh = ["res/res_lex/cadh.html", "Convención Americana sobre Derechos Humanos"];
    let pidces = ["res/res_lex/pidces.html", "Pacto Internacional de Derechos Económicos, Sociales y Culturales"];
    let pidcyp = ["res/res_lex/pidcyp.html", "Pacto Internacional de Derechos Civiles y Políticos y su Protocolo Facultativo"];
    let cpesg = ["res/res_lex/cpesg.html", "Convención sobre la Prevención y la Sanción del Delito de Genocidio"];
    let cdr = ["res/res_lex/cdr.html", "Convención Internacional sobre la Eliminación de todas las Formas de Discriminación Racial"];
    let cedm = ["res/res_lex/cedm.html", "Convención sobre la Eliminación de todas las Formas de Discriminación contra la Mujer"];
    let ccptti = ["res/res_lex/ccptti.html", "Convención contra la Tortura y otros Tratos o Penas Crueles, Inhumanos o Degradantes"];
    let cudn = ["res/res_lex/cudn.html", "Convención sobre los Derechos del Niño"];

    //códigos
    let ccyc = ["res/res_lex/ccyc.html", "Código Civil y Comercial"];
    let cp = ["res/res_lex/cpn.html", "Código Penal Nacional"];
    let cpcct = ["res/res_lex/cpcct.html", "Código Procesal Civil, Comercial y Tributario - Mdz"];
    let cppmdz = ["res/res_lex/cppmdz.html", "Código Procesal Penal - Mdz"];
    let cpl = ["res/res_lex/cpl.html", "Código Procesal Laboral - Mdz"];

    //leyNac
    let ldc = ["res/res_lex/ldc.html", "Ley de Defensa del Consumidor"];
    let concursos = ["res/res_lex/concursos.html", "Ley de Concursos y Quiebras"];
    let lct = ["res/res_lex/lct.html", "Ley de Contrato de Trabajo"];
    let etica = ["https://drive.google.com/file/d/1SwC8S1ukabx7iUuDZg2yVGr1Pn_xOZik/view?usp=drive_link", "Ética Profesional Concordada PDF"]

    //leyesProv 
    let lpamdz = ["res/res_lex/lpamdz.html", "Ley de Procedimiento Administrativo - Mdz"]


    //Shortcuts
    createElements_a("#shortcuts", cn[0], cn[1]);
    createElements_a("#shortcuts", cpMdz[0], cpMdz[1]);
    createElements_a("#shortcuts", ccyc[0], ccyc[1]);
    createElements_a("#shortcuts", cp[0], cp[1]);
    createElements_a("#shortcuts", cpcct[0], cpcct[1]);
    createElements_a("#shortcuts", cppmdz[0], cppmdz[1]);
    createElements_a("#shortcuts", firstInv[0], firstInv[1]);
    createElements_a("#shortcuts", secondInv[0], secondInv[1]);
    //Constituciones
    createElements_a("#constituciones", cn[0], cn[1]);
    createElements_a("#constituciones", cpMdz[0], cpMdz[1]);
    //Tratados
    createElements_a("#tratados", dadh[0], dadh[1]);
    createElements_a("#tratados", dudh[0], dudh[1]);
    createElements_a("#tratados", cadh[0], cadh[1]);
    createElements_a("#tratados", pidces[0], pidces[1]);
    createElements_a("#tratados", pidcyp[0], pidcyp[1]);
    createElements_a("#tratados", cpesg[0], cpesg[1]);
    createElements_a("#tratados", cdr[0], cdr[1]);
    createElements_a("#tratados", cedm[0], cedm[1]);
    createElements_a("#tratados", ccptti[0], ccptti[1]);
    createElements_a("#tratados", cudn[0], cudn[1]);
    //Códigos     
    createElements_a("#codigos", ccyc[0], ccyc[1]);
    createElements_a("#codigos", cp[0], cp[1]);
    createElements_a("#codigos", cpcct[0], cpcct[1]);
    createElements_a("#codigos", cppmdz[0], cppmdz[1]);
    createElements_a("#codigos", cpl[0], cpl[1])
    //LeyesNac
    createElements_a("#leyesNac", ldc[0], ldc[1]);
    createElements_a("#leyesNac", concursos[0], concursos[1]);
    createElements_a("#leyesNac", lct[0], lct[1]);
    createElements_a("#leyesNac", etica[0], etica[1]);
    //LeyesProv
    createElements_a("#leyesProv", lpamdz[0], lpamdz[1]);
}