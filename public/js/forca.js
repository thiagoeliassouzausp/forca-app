let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let palavras = [];
let jogoAutomatico = true;

let somErro     = document.querySelector('#somErro');
let somAplausos = document.querySelector('#somAplausos');


carregaListaAutomatica();

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome.toUpperCase();
    palavraSecretaCategoria = palavras[indexPalavra].categoria.toUpperCase();

    // console.log(palavraSecretaSorteada);
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";
    
    for(i = 0; i < palavraSecretaSorteada.length; i++){  
        if(listaDinamica[i] == undefined){
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }     
        }
        else{
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }    
        }
    }   
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra, false);
        comparalistas(letra);
        montarPalavraNaTela();
    }    
}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false)
    {
        document.getElementById(tecla).style.background = "#C71585";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }

    
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    
    if(pos < 0){
        tentativas--
        carregaImagemForca();
    
        if(tentativas == 0){
            //somErro.play();
            abreModal("Fim das tentativas!", "Faça outra tentativa. A palavra secreta era <br>" + palavraSecretaSorteada);
            piscarBotaoJogarNovamente(true);
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true)
    {
        //somAplausos.play();
        abreModal("PARABÉNS, você acertou!");
        tentativas = 0;
        piscarBotaoJogarNovamente(true);
    }
}

// async function piscarBotaoJogarNovamente(){
//     while (jogarNovamente == true) {
//         document.getElementById("btnReiniciar").style.backgroundColor = 'red';
//         document.getElementById("btnReiniciar").style.scale = 1.3;
//         await atraso(500)
//         document.getElementById("btnReiniciar").style.backgroundColor = 'yellow';
//         document.getElementById("btnReiniciar").style.scale = 1;
//         await atraso(500)
//     }
// }

async function atraso(tempo){
    return new Promise(x => setTimeout(x, tempo))     
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background  = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background  = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background  = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background  = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background  = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background  = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background  = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    jogarNovamente = false;
    location.reload();
});

function listaAutomatica(){ // ativa o modo manual
    if (jogoAutomatico == true) {
        document.getElementById("jogarAutomatico").innerHTML = "<i class='bx bx-play-circle'></i>"
        palavras = [];
        jogoAutomatico = false;

        document.getElementById("abreModalAddPalavra").style.display = "block";
        document.getElementById("status").innerHTML = "Modo Manual";
    }
    else if(jogoAutomatico == false){ // ativa o modo automático
        document.getElementById("jogarAutomatico").innerHTML = "<i class='bx bx-pause-circle'></i>"
        jogoAutomatico = true;

        document.getElementById("abreModalAddPalavra").style.display = "none";
        document.getElementById("status").innerHTML = "Modo Automático";
        
    }
}

const modal = document.getElementById("modal-alerta");

const btnAbreModal = document.getElementById("abreModalAddPalavra");
btnAbreModal.onclick = function(){
    modal.style.display = "block";
}

const btnFechaModal = document.getElementById("fechaModal");
btnFechaModal.onclick = function(){ 
    modal.style.display = "none";
    document.getElementById("addPalavra").value = "";
    document.getElementById("addCategoria").value = ""; 
}

window.onclick = function(){ 
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("addPalavra").value = "";
        document.getElementById("addCategoria").value = ""; 
    }  
}

function carregaListaAutomatica(){
   
    palavras = [
        palavra001 = {nome: "abstêmio", categoria: "Que não consome bebidas alcoólicas."},
        palavra001	=   {nome: "nepotismo", categoria: "Prática de favorecer parentes em cargos públicos."},
        palavra002	=   {nome: "ostracismo", categoria: "Exclusão ou isolamento social."},
        palavra003	=   {nome: "perfunctório", categoria: "Feito de maneira superficial ou descuidada."},
        palavra004	=   {nome: "quixotismo", categoria: "Atitude ou comportamento idealista e extravagante."},
        palavra005	=   {nome: "retrocesso", categoria: "Ato de voltar atrás, regressão."},
        palavra006	=   {nome: "sublime", categoria: "Elevado, grandioso, nobre."},
        palavra007	=   {nome: "teologia", categoria: "Estudo sobre as divindades e as crenças religiosas."},
        palavra008	=   {nome: "usurpar", categoria: "Tomar posse ilegalmente, apropriar-se indevidamente."},
        palavra009	=   {nome: "vocábulo", categoria: "Palavra ou termo de um idioma."},
        palavra010	=   {nome: "whisky", categoria: "Bebida alcoólica destilada."},
        palavra011	=   {nome: "xenófobo", categoria: "Que tem aversão a estrangeiros."},
        palavra012	=   {nome: "yeoman", categoria: "Antigo trabalhador agrícola inglês."},
        palavra013	=   {nome: "zarpar", categoria: "Iniciar uma viagem de navio."},
        palavra014	=   {nome: "abstêmio", categoria: "Que não consome bebidas alcoólicas."},
        palavra015	=   {nome: "cáustico", categoria: "Que queima ou corroí."},
        palavra016	=   {nome: "dissensão", categoria: "Desacordo, discordância."},
        palavra017	=   {nome: "epifania", categoria: "Revelação súbita ou compreensão profunda."},
        palavra018	=   {nome: "fissura", categoria: "Rachadura estreita em uma superfície."},
        palavra019	=   {nome: "garrulidade", categoria: "Qualidade de falar muito ou de forma inconsequente."},
        palavra020	=   {nome: "herético", categoria: "Que vai contra os princípios aceitos ou a ortodoxia religiosa."},
        palavra021	=   {nome: "ignóbil", categoria: "Que é vergonhoso ou desprezível."},
        palavra022	=   {nome: "jactância", categoria: "Exibição excessiva de orgulho ou vaidade."},
        palavra023	=   {nome: "languidecer", categoria: "Perder força ou vitalidade."},
        palavra024	=   {nome: "maledicência", categoria: "Ato de difamar ou falar mal de alguém."},
        palavra025	=   {nome: "nefando", categoria: "Que é abominável ou execrável."},
        palavra026	=   {nome: "obsequioso", categoria: "Que age com excessiva cortesia ou submissão."},
        palavra027	=   {nome: "pérfido", categoria: "Que age com traição ou falsidade."},
        palavra028	=   {nome: "quimérico", categoria: "Que é fantasioso ou irreal."},
        palavra029	=   {nome: "reticente", categoria: "Que hesita em expressar seus pensamentos ou sentimentos."},
        palavra030	=   {nome: "sagacidade", categoria: "Perspicácia, astúcia."},
        palavra031	=   {nome: "tácito", categoria: "Que é subentendido, implícito."},
        palavra032	=   {nome: "ubíquo", categoria: "Que está presente em todos os lugares ao mesmo tempo."},
        palavra033	=   {nome: "versátil", categoria: "Que tem muitas habilidades ou aplicações."},
        palavra034	=   {nome: "xenofobia", categoria: "Aversão ou hostilidade a estrangeiros."},
        palavra035	=   {nome: "yatagã", categoria: "Tipo de adaga de lâmina curva."},
        palavra036	=   {nome: "zigurate", categoria: "Torre de forma escalonada da antiga Mesopotâmia."},
        palavra037	=   {nome: "abissal", categoria: "Relativo a abismo, muito profundo."},
        palavra038	=   {nome: "cibernética", categoria: "Ciência que estuda sistemas de controle e comunicação em seres vivos e máquinas."},
        palavra039	=   {nome: "deletere", categoria: "Que causa dano ou prejuízo."},
        palavra040	=   {nome: "enigma", categoria: "Questão ou problema difícil de entender ou resolver."},
        palavra041	=   {nome: "fátuo", categoria: "Vaidoso, presunçoso, sem importância real."},
        palavra042	=   {nome: "glauber", categoria: "Tipo de sal."},
        palavra043	=   {nome: "heterogêneo", categoria: "Composto por elementos diferentes."},
        palavra044	=   {nome: "incólume", categoria: "Que saiu ileso, sem dano."},
        palavra045	=   {nome: "jonquil", categoria: "Tipo de flor."},
        palavra046	=   {nome: "kinema", categoria: "Dispositivo precursor do cinema."},
        palavra047	=   {nome: "lúgubre", categoria: "Que inspira tristeza ou melancolia."},
        palavra048	=   {nome: "mundano", categoria: "Relativo a assuntos terrenos ou materiais."},
        palavra049	=   {nome: "nepotismo", categoria: "Prática de favorecer parentes em cargos públicos."},
        palavra050	=   {nome: "ostracismo", categoria: "Exclusão ou isolamento social."},
        palavra051	=   {nome: "perfunctório", categoria: "Feito de maneira superficial ou descuidada."},
        palavra052	=   {nome: "quixotismo", categoria: "Atitude ou comportamento idealista e extravagante."},
        palavra053	=   {nome: "retrocesso", categoria: "Ato de voltar atrás, regressão."},
        palavra054	=   {nome: "sublime", categoria: "Elevado, grandioso, nobre."},
        palavra055	=   {nome: "teologia", categoria: "Estudo sobre as divindades e as crenças religiosas."},
        palavra056	=   {nome: "usurpar", categoria: "Tomar posse ilegalmente, apropriar-se indevidamente."},
        palavra057	=   {nome: "vocábulo", categoria: "Palavra ou termo de um idioma."},
        palavra058	=   {nome: "whisky", categoria: "Bebida alcoólica destilada."},
        palavra059	=	{nome: "tomate", categoria: "Parece legume mas é fruta"},
        palavra060	=   {nome: "ostracismo", categoria: "Exclusão ou isolamento social."},
        palavra061	=   {nome: "perfunctório", categoria: "Feito de maneira superficial ou descuidada."},
        palavra062	=   {nome: "quixotismo", categoria: "Atitude ou comportamento idealista e extravagante."},
        palavra063	=   {nome: "retrocesso", categoria: "Ato de voltar atrás, regressão."},
        palavra064	=   {nome: "sublime", categoria: "Elevado, grandioso, nobre."},
        palavra065	=   {nome: "teologia", categoria: "Estudo sobre as divindades e as crenças religiosas."},
        palavra066	=   {nome: "usurpar", categoria: "Tomar posse ilegalmente, apropriar-se indevidamente."},
        palavra067	=   {nome: "vocábulo", categoria: "Palavra ou termo de um idioma."},
        palavra068	=   {nome: "whisky", categoria: "Bebida alcoólica destilada."},
        palavra069	=   {nome: "xenófobo", categoria: "Que tem aversão a estrangeiros."},
        palavra070	=   {nome: "yeoman", categoria: "Antigo trabalhador agrícola inglês."},
        palavra071	=   {nome: "zarpar", categoria: "Iniciar uma viagem de navio."},
        palavra072	=   {nome: "abstêmio", categoria: "Que não consome bebidas alcoólicas."},
        palavra073	=   {nome: "cáustico", categoria: "Que queima ou corroí."},
        palavra074	=   {nome: "dissensão", categoria: "Desacordo, discordância."},
        palavra075	=   {nome: "epifania", categoria: "Revelação súbita ou compreensão profunda."},
        palavra076	=   {nome: "fissura", categoria: "Rachadura estreita em uma superfície."},
        palavra077	=   {nome: "garrulidade", categoria: "Qualidade de falar muito ou de forma inconsequente."},
        palavra078	=   {nome: "herético", categoria: "Que vai contra os princípios aceitos ou a ortodoxia religiosa."},
        palavra079	=   {nome: "ignóbil", categoria: "Que é vergonhoso ou desprezível."},
        palavra080	=   {nome: "jactância", categoria: "Exibição excessiva de orgulho ou vaidade."},
        palavra081	=   {nome: "languidecer", categoria: "Perder força ou vitalidade."},
        palavra082	=   {nome: "maledicência", categoria: "Ato de difamar ou falar mal de alguém."},
        palavra083	=   {nome: "nefando", categoria: "Que é abominável ou execrável."},
        palavra084	=   {nome: "obsequioso", categoria: "Que age com excessiva cortesia ou submissão."},
        palavra085	=   {nome: "pérfido", categoria: "Que age com traição ou falsidade."},
        palavra086	=   {nome: "quimérico", categoria: "Que é fantasioso ou irreal."},
        palavra087	=   {nome: "reticente", categoria: "Que hesita em expressar seus pensamentos ou sentimentos."},
        palavra088	=   {nome: "sagacidade", categoria: "Perspicácia, astúcia."},
        palavra089	=   {nome: "tácito", categoria: "Que é subentendido, implícito."},
        palavra090	=   {nome: "ubíquo", categoria: "Que está presente em todos os lugares ao mesmo tempo."},
        palavra091	=   {nome: "versátil", categoria: "Que tem muitas habilidades ou aplicações."},
        palavra092	=   {nome: "xenofobia", categoria: "Aversão ou hostilidade a estrangeiros."},
        palavra093	=   {nome: "yatagã", categoria: "Tipo de adaga de lâmina curva."},
        palavra094	=   {nome: "zigurate", categoria: "Torre de forma escalonada da antiga Mesopotâmia."},
        palavra095	=   {nome: "abissal", categoria: "Relativo a abismo, muito profundo."},
        palavra096	=   {nome: "cibernética", categoria: "Ciência que estuda sistemas de controle e comunicação em seres vivos e máquinas."},
        palavra097	=   {nome: "deletere", categoria: "Que causa dano ou prejuízo."},
        palavra098	=   {nome: "enigma", categoria: "Questão ou problema difícil de entender ou resolver."},
        palavra099	=   {nome: "fátuo", categoria: "Vaidoso, presunçoso, sem importância real."},
        palavra100	=   {nome: "glauber", categoria: "Tipo de sal."},
        palavra101	=   {nome: "heterogêneo", categoria: "Composto por elementos diferentes."},
        palavra102	=   {nome: "incólume", categoria: "Que saiu ileso, sem dano."},
        palavra103	=   {nome: "jonquil", categoria: "Tipo de flor."},
        palavra104	=   {nome: "kinema", categoria: "Dispositivo precursor do cinema."},
        palavra105	=   {nome: "lúgubre", categoria: "Que inspira tristeza ou melancolia."},
        palavra106	=   {nome: "mundano", categoria: "Relativo a assuntos terrenos ou materiais."},
        palavra107	=   {nome: "nepotismo", categoria: "Prática de favorecer parentes em cargos públicos."},
        palavra108	=   {nome: "ostracismo", categoria: "Exclusão ou isolamento social."},
        palavra109	=   {nome: "perfunctório", categoria: "Feito de maneira superficial ou descuidada."},
        palavra110	=   {nome: "quixotismo", categoria: "Atitude ou comportamento idealista e extravagante."},
        palavra111	=   {nome: "retrocesso", categoria: "Ato de voltar atrás, regressão."},
        palavra112	=   {nome: "sublime", categoria: "Elevado, grandioso, nobre."},
        palavra113	=   {nome: "teologia", categoria: "Estudo sobre as divindades e as crenças religiosas."},
        palavra114	=   {nome: "usurpar", categoria: "Tomar posse ilegalmente, apropriar-se indevidamente."},
        palavra115	=   {nome: "vocábulo", categoria: "Palavra ou termo de um idioma."},
        palavra116	=	{nome: "zeus", categoria: "Deus dos deuses"},
        palavra117	=   {nome: "hipotético", categoria: "Que é uma suposição ou conjectura."},
        palavra118	=   {nome: "abnegado", categoria: "Que age com altruísmo, dedicado aos outros."},
        palavra119	=   {nome: "efluvium", categoria: "Emissão ou exalação de substâncias."},
        palavra120	=   {nome: "genuflexão", categoria: "Ato de ajoelhar-se, geralmente como sinal de reverência religiosa."},
        palavra121	=   {nome: "igneous", categoria: "Relativo a rochas formadas por solidificação do magma."},
        palavra122	=   {nome: "jubiloso", categoria: "Cheio de alegria e entusiasmo."},
        palavra123	=   {nome: "laudatório", categoria: "Que elogia ou enaltece."},
        palavra124	=   {nome: "meticuloso", categoria: "Que age com muita precisão e atenção aos detalhes."},
        palavra125	=   {nome: "nomádico", categoria: "Relativo a grupos de pessoas que não têm uma residência fixa."},
        palavra126	=   {nome: "onírico", categoria: "Relativo a sonhos, fantasioso."},
        palavra127	=   {nome: "perene", categoria: "Que dura por um longo tempo, constante."},
        palavra128	=   {nome: "quixotismo", categoria: "Atitude ou comportamento idealista e extravagante."},
        palavra129	=   {nome: "reminiscência", categoria: "Recordação vaga ou lembrança de algo passado."},
        palavra130	=   {nome: "subsidiário", categoria: "Que atua como apoio ou complemento."},
        palavra131	=   {nome: "tríade", categoria: "Grupo de três elementos interconectados ou interdependentes."},
        palavra132	=   {nome: "ubiquidade", categoria: "Presença simultânea em todos os lugares."},
        palavra133	=   {nome: "vocábulo", categoria: "Palavra ou termo de um idioma."},
        palavra134	=   {nome: "wagneriano", categoria: "Relativo ao compositor alemão Richard Wagner."},
        palavra135	=   {nome: "xenófobo", categoria: "Que tem aversão a estrangeiros."},
        palavra136	=   {nome: "yeoman", categoria: "Antigo trabalhador agrícola inglês."},
        palavra137	=   {nome: "zarpar", categoria: "Iniciar uma viagem de navio."},
        palavra138	=   {nome: "abstêmio", categoria: "Que não consome bebidas alcoólicas."},
        palavra139	=   {nome: "cáustico", categoria: "Que queima ou corroí."},
        palavra140	=   {nome: "dissensão", categoria: "Desacordo, discordância."},
        palavra141	=   {nome: "epifania", categoria: "Revelação súbita ou compreensão profunda."},
        palavra142	=   {nome: "fissura", categoria: "Rachadura estreita em uma superfície."},
        palavra143	=   {nome: "garrulidade", categoria: "Qualidade de falar muito ou de forma inconsequente."},
        palavra144	=   {nome: "herético", categoria: "Que vai contra os princípios aceitos ou a ortodoxia religiosa."},
        palavra145	=   {nome: "ignóbil", categoria: "Que é vergonhoso ou desprezível."},
        palavra146	=   {nome: "jactância", categoria: "Exibição excessiva de orgulho ou vaidade."},
        palavra147	=   {nome: "languidecer", categoria: "Perder força ou vitalidade."},
        palavra148	=   {nome: "maledicência", categoria: "Ato de difamar ou falar mal de alguém."},
        palavra149	=   {nome: "nefando", categoria: "Que é abominável ou execrável."},
        palavra150	=   {nome: "obsequioso", categoria: "Que age com excessiva cortesia ou submissão."},
        palavra151	=   {nome: "pérfido", categoria: "Que age com traição ou falsidade."},
        palavra152	=   {nome: "quimérico", categoria: "Que é fantasioso ou irreal."},
        palavra153	=   {nome: "reticente", categoria: "Que hesita em expressar seus pensamentos ou sentimentos."},
        palavra154	=   {nome: "sagacidade", categoria: "Perspicácia, astúcia."},
        palavra155	=   {nome: "tácito", categoria: "Que é subentendido, implícito."},
        palavra156	=   {nome: "ubíquo", categoria: "Que está presente em todos os lugares ao mesmo tempo."},
        palavra157	=   {nome: "versátil", categoria: "Que tem muitas habilidades ou aplicações."},
        palavra158	=   {nome: "xenofobia", categoria: "Aversão ou hostilidade a estrangeiros."},
        palavra159	=   {nome: "yatagã", categoria: "Tipo de adaga de lâmina curva."},
        palavra160	=   {nome: "zigurate", categoria: "Torre de forma escalonada da antiga Mesopotâmia."},
        palavra161	=   {nome: "abissal", categoria: "Relativo a abismo, muito profundo."},
        palavra162	=   {nome: "cibernética", categoria: "Ciência que estuda sistemas de controle e comunicação em seres vivos e máquinas."},
        palavra163	=   {nome: "deletere", categoria: "Que causa dano ou prejuízo."},
        palavra164	=   {nome: "enigma", categoria: "Questão ou problema difícil de entender ou resolver."},
        palavra165	=   {nome: "fátuo", categoria: "Vaidoso, presunçoso, sem importância real."},
        palavra166	=   {nome: "glauber", categoria: "Tipo de sal."},
        palavra167	=   {nome: "heterogêneo", categoria: "Composto por elementos diferentes."},
        palavra168	=   {nome: "incólume", categoria: "Que saiu ileso, sem dano."},
        palavra169	=   {nome: "jonquil", categoria: "Tipo de flor."},
        palavra170	=   {nome: "kinema", categoria: "Dispositivo precursor do cinema."},
        palavra171	=   {nome: "lúgubre", categoria: "Que inspira tristeza ou melancolia."},
        palavra172	=	{nome: "poseidon", categoria: "deus dos mares (grego)"},
        palavra173	=   {nome: "paradigma", categoria: "Modelo ou padrão que serve como referência."},
        palavra174	=   {nome: "empírico", categoria: "Baseado em experiência prática."},
        palavra175	=   {nome: "voracidade", categoria: "Qualidade de ser voraz, devorador."},
        palavra176	=   {nome: "pândego", categoria: "Que gosta de festas e diversão."},
        palavra177	=   {nome: "anacrônico", categoria: "Que está fora de seu tempo, antiquado."},
        palavra178	=   {nome: "eficaz", categoria: "Que produz o efeito desejado."},
        palavra179	=   {nome: "fútil", categoria: "Desprovido de importância, superficial."},
        palavra180	=   {nome: "heterodoxo", categoria: "Que se afasta das doutrinas convencionais."},
        palavra181	=   {nome: "inócuo", categoria: "Que não causa dano ou prejuízo."},
        palavra182	=   {nome: "magnânimo", categoria: "Generoso, nobre de caráter."},
        palavra183	=   {nome: "modéstia", categoria: "Qualidade de quem é humilde e simples."},
        palavra184	=   {nome: "recíproco", categoria: "Que é mútuo, correspondente."},
        palavra185	=   {nome: "sagaz", categoria: "Perspicaz, astuto, esperto."},
        palavra186	=   {nome: "tácito", categoria: "Que não é expresso verbalmente, implícito."},
        palavra187	=   {nome: "utopia", categoria: "Projeto ou ideia irrealizável."},
        palavra188	=   {nome: "vociferar", categoria: "Falar em tom elevado e veemente."},
        palavra189	=   {nome: "zen", categoria: "Estado de concentração tranquila e pacífica."},
        palavra190	=   {nome: "ascensão", categoria: "Ato de subir, elevar-se."},
        palavra191	=   {nome: "desígnio", categoria: "Intenção, propósito, plano."},
        palavra192	=   {nome: "equidade", categoria: "Justiça, imparcialidade."},
        palavra193	=   {nome: "fomentar", categoria: "Estimular, promover."},
        palavra194	=   {nome: "genuíno", categoria: "Autêntico, verdadeiro."},
        palavra195	=   {nome: "hodierno", categoria: "Relativo ao dia de hoje, atual."},
        palavra196	=   {nome: "intempérie", categoria: "Evento climático adverso."},
        palavra197	=   {nome: "júbilo", categoria: "Alegria intensa, entusiasmo."},
        palavra198	=   {nome: "languidez", categoria: "Fraqueza, falta de vigor."},
        palavra199	=   {nome: "mútuo", categoria: "Recíproco, compartilhado por ambas as partes."},
        palavra200	=   {nome: "nefasto", categoria: "Desastroso, de mau presságio."},
        palavra201	=   {nome: "ocioso", categoria: "Inativo, sem ocupação."},
        palavra202	=   {nome: "pândego", categoria: "Que gosta de festas e diversão."},
        palavra203	=   {nome: "quixotesco", categoria: "Que revela idealismo extravagante."},
        palavra204	=   {nome: "resiliente", categoria: "Capaz de se recuperar de adversidades."},
        palavra205	=   {nome: "sublime", categoria: "Elevado, grandioso, nobre."},
        palavra206	=   {nome: "tênue", categoria: "Que é fraco, delicado ou fino."},
        palavra207	=   {nome: "ubíquo", categoria: "Que está presente em todos os lugares ao mesmo tempo."},
        palavra208	=   {nome: "versátil", categoria: "Que tem muitas habilidades ou aplicações."},
        palavra209	=   {nome: "xenofobia", categoria: "Aversão ou hostilidade a estrangeiros."},
        palavra210	=   {nome: "yatagã", categoria: "Tipo de adaga de lâmina curva."},
        palavra211	=   {nome: "zigurate", categoria: "Torre de forma escalonada da antiga Mesopotâmia."},
        palavra212	=   {nome: "abissal", categoria: "Relativo a abismo, muito profundo."},
        palavra213	=   {nome: "cibernética", categoria: "Ciência que estuda sistemas de controle e comunicação em seres vivos e máquinas."},
        palavra214	=   {nome: "deletere", categoria: "Que causa dano ou prejuízo."},
        palavra215	=   {nome: "enigma", categoria: "Questão ou problema difícil de entender ou resolver."},
        palavra216	=   {nome: "fátuo", categoria: "Vaidoso, presunçoso, sem importância real."},
        palavra217	=   {nome: "glauber", categoria: "Tipo de sal."},
        palavra218	=   {nome: "heterogêneo", categoria: "Composto por elementos diferentes."},
        palavra219	=   {nome: "incólume", categoria: "Que saiu ileso, sem dano."},
        palavra220	=	{nome: "netuno", categoria: "Deus dos mares (romano)"},
        palavra221	=   {nome: "conspícuo", categoria: "Que se destaca, visível e notável."},
        palavra222	=   {nome: "laconismo", categoria: "Brevidade extrema nas palavras, concisão."},
        palavra223	=   {nome: "lúdico", categoria: "Relativo ao jogo, divertido."},
        palavra224	=   {nome: "sonâmbulo", categoria: "Pessoa que caminha ou realiza atividades enquanto dorme."},
        palavra225	=   {nome: "zênite", categoria: "Ponto mais alto da trajetória de um astro no céu."},
        palavra226	=   {nome: "tênue", categoria: "Que é fraco, delicado ou fino."},
        palavra227	=   {nome: "contundente", categoria: "Que causa impacto, incisivo."},
        palavra228	=   {nome: "voraz", categoria: "Que devora com avidez, ávido."},
        palavra229	=   {nome: "ímpeto", categoria: "Movimento impulsivo e violento."},
        palavra230	=	{nome: "brasilia", categoria: "capital do brasil"},
        palavra231	=   {nome: "circunferência", categoria: "Linha que forma a borda de um círculo."},
        palavra232	=   {nome: "procrastinar", categoria: "Adiar a realização de uma tarefa."},
        palavra233	=   {nome: "efervescente", categoria: "Que produz efervescência, borbulhante."},
        palavra234	=   {nome: "infortúnio", categoria: "Acontecimento infeliz ou desafortunado."},
        palavra235	=	{nome: "londres", categoria: "capital da Inglaterra"},
        palavra236	=   {nome: "obelisco", categoria: "Monumento em forma de agulha, geralmente em praças públicas."},
        palavra237	=   {nome: "paradoxo", categoria: "Afirmação aparentemente contraditória."},
        palavra238	=   {nome: "perplexo", categoria: "Sentimento de confusão ou surpresa."},
        palavra239	=   {nome: "efêmero", categoria: "Que dura por um curto período de tempo."},
        palavra240	=	{nome: "roma", categoria: "Capital da Italia"},
        palavra241	=   {nome: "ocelote", categoria: "Felino selvagem encontrado na América."},
        palavra242	=   {nome: "paralelepípedo", categoria: "Bloco retangular usado em pavimentação."},
        palavra243	=   {nome: "xícara", categoria: "Utensílio para servir bebidas quentes."},
        palavra244	=   {nome: "saudade", categoria: "Sentimento nostálgico de algo que se foi."},
        palavra245	=	{nome: "milk", categoria: "leite em inglês"},
        palavra246	=   {nome: "computador", categoria: "Máquina eletrônica que processa dados."},
        palavra247	=   {nome: "elefante", categoria: "Maior mamífero terrestre."},
        palavra248	=   {nome: "python", categoria: "Linguagem de programação de alto nível."}
        
    ];

}

function adicionarPalavra(){
    let addPalavra = document.getElementById("addPalavra").value.toUpperCase();
    let addCategoria = document.getElementById("addCategoria").value.toUpperCase();

    if (isNullOrWhiteSpace(addPalavra) || isNullOrWhiteSpace(addCategoria) || addPalavra.length < 3 || addCategoria.length < 3) {
        abreModal("ATENÇÃO"," Palavra e/ou Categoria inválidos");
        return;
    }

    let palavra = {
        nome: addPalavra,
        categoria: categoria
    }

    palavras.push(palavra);  
    sortear();
    
    document.getElementById("addPalavra").value = "";
    document.getElementById("addCategoria").value = "";
}

function isNullOrWhiteSpace(input){
    return !input || !input.trim();
}

function sortear(){
    if(jogoAutomatico == true){
        location.reload();  
    }
    else{
        if(palavras.length > 0){
            listaDinamica=[];
            criarPalavraSecreta();
            montarPalavraNaTela();
            resetaTeclas();
            tentativas = 6;
            piscarBotaoJogarNovamente(false);
        }
    }
}

function resetaTeclas(){
    let teclas = document.querySelectorAll(".teclas > button")
    teclas.forEach((x) =>{
        x.style.background = "#FFFFFF";
        x.style.color = "#8B008B";
        x.disabled = false;
    });
}


async function piscarBotaoJogarNovamente(querJogar){
    if(querJogar){
        document.getElementById("jogarNovamente").style.display = "block";
    }
    else{
        document.getElementById("jogarNovamente").style.display = "none";
    }
}


