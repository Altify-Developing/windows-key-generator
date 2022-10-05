linenum = Math.floor(Math.random() * 2) + 1;
function readfileautomatically () {
        var client = new XMLHttpRequest();
        client.open('GET', 'ajax.txt');
        client.onreadystatechange = function()
        {
            if( client.responseText != '' )
            {
                var txt = client.responseText.split("\n");
                combo = (txt[linenum]);
                document.getElementById("combo").innerHTML = (combo);
                alert(combo);
            }
        }
        client.send();
    }
