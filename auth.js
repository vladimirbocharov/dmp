// Защита страниц — редирект на вход если не авторизован
if (sessionStorage.getItem('dmp_auth') !== '1') {
  location.href = 'index.html';
}

function logout() {
  sessionStorage.removeItem('dmp_auth');
  location.href = 'index.html';
}
