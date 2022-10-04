
function LoadDoc() {
        var client = new XMLHttpRequest();
          client.onload = function() {
            document.getElementById("test").innerHTML = this.responseText;
            }
  client.open("GET", "ajax.txt", true);
  client.send();
}
