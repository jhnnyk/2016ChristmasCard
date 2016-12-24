var personSelect = document.getElementById('name');

var loadPersonalPage = function() {
  var name = this.value;

  switch (name) {
    case 'Mandy':
      window.location = 'mandy.html';
      break;
    case 'Travis':
      window.location = 'travis.html';
      break;
    case 'Luke':
      window.location = 'luke.html';
      break;
    case 'Skyler':
      window.location = 'skyler.html';
      break;
    case 'Betty':
      window.location = 'betty.html';
      break;
    default:
      window.location = 'index.html';
  }
}

// personSelect.onchange = loadPersonalPage;
personSelect.addEventListener("change", loadPersonalPage);