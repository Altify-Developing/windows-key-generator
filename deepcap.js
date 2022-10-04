
function LoadDoc() {
        var client = new XMLHttpRequest();
        client.open('GET', 'ajax.txt');
        client.onreadystatechange = function()
        {
            if( client.responseText != '' )
            {
                var txt = client.responseText.split("\n");
                let combo = (txt[1]);
                document.getElementById("test").innerHTML = combo;
            }
        }
}
