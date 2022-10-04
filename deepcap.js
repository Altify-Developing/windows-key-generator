
function LoadDoc() {
        var client = new XMLHttpRequest();
        client.open('GET', 'ajax.txt');
          client.onload = function() {
            document.getElementById("test").innerHTML = this.responseText;
            }
  client.open("GET", "ajax.txt", true);
  client.send();
}
