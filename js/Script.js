function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    
    if(valor>=01/21||valor<=02/18||valor=="Aquario"||valor=="aquario"){
        texto.innerHTML = "AQUÁRIO";
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","500px");
        texto.innerHTML+= " <p>Camus é um cavaleiro bastante poderoso, com habilidade de baixar a temperatura e lançar o Pó de Diamante com grande facilidade. A Execução Aurora é o seu golpe secreto mais poderoso, que emite um frio próximo ao zero absoluto, e foi herdado por Hyoga.</p>"
    }
     else if(valor >=02/19||valor >=03/20||valor=="peixes"||valor=="Peixes"){
        texto.innerHTML = "peixes";
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","300px");
        texto.innerHTML+= "<p>Pisces Aphrodite (Afrodite de Peixes), é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. É um poderoso Cavaleiro capaz de gerar e manipular rosas. É um dos Cavaleiros mais poderosos do exército de Atena.</p>"
    }
    if(valor >=03/21 || valor <= 04/20||valor=="aries"||valor=="Aries"||valor=="Áries"||valor=="áries"){
        texto.innerHTML = "Aries";
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","300px");
        texto.innerHTML+= "<p>Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário.</p>"
    }
    else if(valor >=04/21||valor <= 05/20||valor=="touro"|| valor =="Touro"){
        texto.innerHTML = "TOURO";
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","300px");
        texto.innerHTML+= "Aldebaran é o Cavaleiro de Ouro de Touro do século XX, que protege a Casa de Touro no Santuário. Dotado de uma resistência fora do comum, nem mesmo o Meteoro de Pégaso de Seiya conseguiu causar danos ao seu corpo. Sendo um Cavaleiro de Ouro, Aldebaran é um dos Cavaleiros mais poderosos do Exército de Atena.";
    }
   else if(valor >=05/21||valor <= 06/20||valor=="Gemeos"||valor=="gemeos"){
        texto.innerHTML = "Gemeos";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","300px");
        texto.innerHTML+= "<p>Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena.</p>"
    }
    else if(valor >= 06/21|| valor<= 07/22||valor=="cancer"||valor=="Cancer"||valor=="câncer"||valor=="Câncer"){
        texto.innerHTML = "CANCER";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
    }
    else if(valor>=07/23||valor<= 08/22|| valor=="Leao"||valor=="leao"||valor=="Leão"||valor=="leao"){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","300px");
        texto.innerHTML+= "<p>Aiolia de Leão  é um Cavaleiro de Ouro do Século XX, irmão do cavaleiro de Sagitário da mesma época (Aioros), na série Os Cavaleiros do Zodíaco, de Masami Kurumada. É o Cavaleiro de Ouro que protege a Casa de Leão.</p>"
    }
    else if(valor >= 08/23||valor<=09/22||valor=="Virgem"||valor=="virgem"){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
        texto.innerHTML+= "<p>Shaka de Virgem é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências.</p>"
    }
    else if(valor>=09/23||valor <= 10/22||valor=="Libra"||valor=="libra"){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
        texto.innerHTML+= " <p>fora um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries.</p>"
    }
    else if(valor >=10/23||valor <=11/21 ||valor=="escorpiao"||valor=="escorpião"||valor=="Escorpião"||valor=="Escorpiao"){
        texto.innerHTML = "ESCORPIÃO";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
        texto.innerHTML+= "<p>O forte senso de confiança e superioridade de Milo. Milo é confiante e orgulhoso, e se importa muito com a honra e dignidade dos cavaleiros. Sempre seguro de si, é mais impassível do que a maioria dos outros Cavaleiros de Ouro.</p>"
    }
    else if(valor>=11/22||valor<=12/21||valor=="sagitario"||valor=="Sagitario"||valor=="sagitário"||valor=="Sagitário"){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.png");
        imagem.setAttribute("width","300px");
        texto.innerHTML+= " <p>Cavaleiro de Ouro do signo de sagitário. Natural da Grécia. É o irmão mais velho de Aiolia e foi considerado traidor pela morte de Atena. Mas na verdade é um cavaleiro exemplar que dedicou sua vida na grande missão de proteger Atena mesmo desprezado pelos que o rodeavam.</p>"
    }
    else if(valor>=12/22||valor<=01/20||valor=="capricórnio"||valor=="Capricórnio"||valor=="Capricornio"||valor=="capricornio"){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","300px");
        texto.innerHTML+= "<p>Shura de Capricórnio é o Cavaleiro de Ouro que protege a décima casa do Santuário, a Casa de Capricórnio. Um dos principais personagens de Saint Seiya (Os Cavaleiros do Zodíaco), Shura se considera o cavaleiro mais fiel a Athena.</p>";
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}