
function LoadDoc() {
        var client = new XMLHttpRequest();
        client.open('GET', 'resources/states.txt');
        client.onreadystatechange = function()
        {
            if( client.responseText != '' )
            {
                var txt = client.responseText.split("\n");
                let state = Math.floor(Math.random() * 1960) + 1;
                let combo = (txt[state]);
                document.getElementById("test").innerHTML = combo;
            }
        }
}
