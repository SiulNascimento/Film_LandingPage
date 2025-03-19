/*function showSection(sectionId, event) {
    event.preventDefault(); // Impede o comportamento padrão do link
  
    // Esconde todas as seções
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      section.style.display = 'none';
    });
    
    // Exibe a seção selecionada
    document.getElementById(sectionId).style.display = 'block';
  }
*/

  // Função para exibir a seção correta
function showSection(section) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Esconde todas as seções
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });

    // Exibe a seção clicada
    var activeSection = document.getElementById(section);
    activeSection.classList.add('active');
}