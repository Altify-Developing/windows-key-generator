function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }
function readfileautomatically () {
        var client = new XMLHttpRequest();
        client.open('GET', '/html/OAG/Resources/FN.txt');
        client.onreadystatechange = function()
        {
            if( client.responseText != '' )
            {
                var txt = client.responseText.split("\n");
