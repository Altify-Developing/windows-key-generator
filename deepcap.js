
function readfileautomatically () {
        var client = new XMLHttpRequest();
        client.open('GET', '/resources/states.txt');
        client.onreadystatechange = function()
        {
            if( client.responseText != '' )
            {
                var txt = client.responseText.split("\n");
                state = Math.floor(Math.random() * 1) + 1960;
                combo = ('state: '+txt[state]);
                document.getElementById("test").innerHTML = (combo);
            }
        }
}
