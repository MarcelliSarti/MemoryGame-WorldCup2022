function showPassword() {
  var txtSenha = document.getElementById('txtSenha');
  txtSenha.type = (txtSenha.type == 'password' ? 'text' : 'password');
}