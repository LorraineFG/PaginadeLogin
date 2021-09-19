function mostrarsenha() {
    const olhoaberto = document.getElementById('olhoaberto');
    const olhofechado = document.getElementById('olhofechado');
    const fieldPassword = document.getElementById('fieldpassword');
  
    if(olhoaberto.style.display === 'none') {
      olhoaberto.style.display = 'block';
      olhofechado.style.display = 'none';
      fieldPassword.type = 'text';
    } else {
      olhoaberto.style.display = 'none';
      olhofechado.style.display = 'block';
      fieldPassword.type = 'password';
    }
  }

  document.getElementById('btn-login').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Logado!');
  });