(function(){
  prettyPrint();
  var lines = document.querySelectorAll('.prettyprint.linenums li[class^="L"]');
  for (var i = 0; i < lines.length; i++) {
    lines[i].id = 'lineNumber' + (i + 1);
  }
})();
