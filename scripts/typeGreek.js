function displayunicode(e){
  var unicode=e.keyCode? e.keyCode : e.charCode;
  alert(unicode);
}

var textBox = document.getElementById('textBox');
textBox.addEventListener('keyup', displayunicode, false);
