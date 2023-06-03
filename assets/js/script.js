var year = new Date().getFullYear();
document.getElementById("current-year").innerHTML = year;

window.addEventListener('load', function() {
    const projectContainer = document.querySelector('.project-container');
    const projects = document.querySelectorAll('.project');
    const numVisibleProjects = 3;
    let currentProject = 0;
  
    function showProjects() {
      for (let i = 0; i < projects.length; i++) {
        if (i >= currentProject && i < currentProject + numVisibleProjects) {
          projects[i].style.display = 'block';
        } else {
          projects[i].style.display = 'none';
        }
      }
    }
  
    function updateProjects() {
      currentProject += numVisibleProjects;
      if (currentProject >= projects.length) {
        currentProject = 0;
      }
      showProjects();
    }
  
    showProjects();
    setInterval(updateProjects, 10000); // Atualiza os projetos a cada 15 segundos
  });

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
    alert("A cópia de texto foi bloqueada neste site por Victor Chryz");
  });
  
  // Impedir a cópia de imagens
  document.addEventListener("dragstart", function(e) {
    e.preventDefault();
    alert("A cópia de imagens foi bloqueada neste site por Victor Chryz");
  });
  
  // Bloquear o menu de contexto
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    alert("O menu de contexto do mouse foi bloqueado neste site por Victor Chryz");
  });
  