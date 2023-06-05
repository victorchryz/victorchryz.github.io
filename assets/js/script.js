var year = new Date().getFullYear();
document.getElementById("current-year").innerHTML = year;

var tit = document.title;
var c = 0;

function writetitle()
{
document.title = tit.substring(0,c);
if(c==tit.length)
{
c = 0;
setTimeout("writetitle()", 1000)
}
else
{
c++;
setTimeout("writetitle()", 250)
}
}
writetitle();

// Obtém a referência do elemento de áudio
var audioPlayer = document.getElementById("audioPlayer");

// Obtém a referência do elemento de origem do áudio
var audioSource = document.getElementById("audioSource");

// Define o caminho do arquivo .mp3
var filePath = "./assets/mp3/Xande_de_Pilares_-_Gratidao.mp3";

// Define o atributo 'src' do elemento de origem do áudio
audioSource.src = filePath;

// Carrega o arquivo de áudio
audioPlayer.load();

// Reproduz o áudio
audioPlayer.play();


// var imageCount = 0;
// var currentImage = 0;
// var images = new Array();


// images[0] = 'http://toplineage2.ga/images/lineage2/01.jpg';
// images[1] = 'http://toplineage2.ga/images/lineage2/02.jpg';


// var preLoadImages = new Array();
// for (var i = 0; i < images.length; i++)
// {
//    if (images[i] == "")
//       break;


//    preLoadImages[i] = new Image();
//    preLoadImages[i].src = images[i];
//    imageCount++;
// }


// function startSlideShow()
// {
//    if (document.body && imageCount > 0)
//    {
//       document.body.style.backgroundImage = "url("+images[currentImage]+")";    
//       document.body.style.backgroundAttachment = "fixed";
//       document.body.style.backgroundRepeat = "repeat";
//       document.body.style.backgroundPosition = "left top";


//       currentImage = currentImage + 1;
//       if (currentImage > (imageCount-1))
//       { 
//          currentImage = 0;
//       }
//       setTimeout('startSlideShow()', 3000);
//    }
// }
// startSlideShow();

window.addEventListener('load', function() {
  const projectContainer = document.querySelector('.project-container');
  const projects = document.querySelectorAll('.project');
  const numVisibleProjectsDesktop = 2; // Número de projetos visíveis no desktop
  let currentProject = 0;

  function showProjects() {
    const numVisibleProjects = isMobile() ? 2 : numVisibleProjectsDesktop;
  
    for (let i = 0; i < projects.length; i++) {
      if (i >= currentProject && i < currentProject + numVisibleProjects) {
        projects[i].style.display = 'block';
      } else {
        projects[i].style.display = 'none';
      }
    }
  
    if (isMobile()) {
      projectContainer.style.flexWrap = 'wrap'; // Quebra a linha em dispositivos móveis
    } else {
      projectContainer.style.flexWrap = 'nowrap'; // Mantém a exibição em uma única linha em desktop
    }
  }
  

  function updateProjects() {
    const numVisibleProjects = isMobile() ? 2 : numVisibleProjectsDesktop;

    currentProject += numVisibleProjects;
    if (currentProject >= projects.length) {
      currentProject = 0;
    }
    showProjects();
  }

  function isMobile() {
    return window.innerWidth <= 720; // Defina a largura máxima para dispositivos móveis
  }

  showProjects();
  setInterval(updateProjects, 10000); // Atualiza os projetos a cada 10 segundos
});

// function abrirDuasAbas(event) {
//   event.preventDefault(); // Impede o comportamento padrão de abrir um link

//   // Abre a primeira aba com o primeiro link
//   var primeiraAba = window.open('https://pt.wikipedia.org/wiki/Linux', '_blank');

//   // Redireciona a página atual para o segundo link
//   var segundaAba = window.open('https://pt.wikipedia.org/wiki/Microsoft_Windows', '_blank');
// }

function abrirDuasAbas(event) {
  event.preventDefault(); // Impede o comportamento padrão de abrir um link

  // Exibe uma mensagem informativa para o usuário
  alert('Ao clicar em OK será aberto duas abas diferentes. Uma relacionada ao Linux e outra ao Windows. Verifique o bloqueio de Pop-Up caso abra apenas uma aba.');

  // Abre a primeira aba com o primeiro link
  var primeiraAba = window.open('https://pt.wikipedia.org/wiki/Linux', '_blank');

  // Abre a segunda aba com o segundo link
  var segundaAba = window.open('https://pt.wikipedia.org/wiki/Microsoft_Windows', '_blank');
}

// Bloquear botão direito do mouse
document.addEventListener("mousedown", function(e) {
  if (e.button === 2) {
    e.preventDefault();
    alert("O botão direito do mouse foi bloqueado neste site por Victor Chryz.");
  }
});

// Impedir a cópia de texto
document.addEventListener("copy", function(e) {
  e.preventDefault();
  alert("A cópia de texto foi bloqueada neste site por Victor Chryz.");
});

// Impedir a cópia de imagens
document.addEventListener("dragstart", function(e) {
  e.preventDefault();
  alert("A cópia de imagens foi bloqueada neste site por Victor Chryz.");
});

// Bloquear o menu de contexto
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  alert("O menu de contexto do mouse foi bloqueado neste site por Victor Chryz.");
});

