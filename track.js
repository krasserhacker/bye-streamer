function connect() {
    var url = 'https://www.tipeeestream.com/v2.0/users/'+ document.getElementById('username').value +'/providers?apiKey='+ document.getElementById('apitoken').value +'';
    var data = '{"provider":"'+ document.getElementById('prov').value +'","access_token":"'+ document.getElementById('atoken').value +'","refresh_token":"'+ document.getElementById('rtoken').value +'","origin":"managementSecurity"}';
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            addLine(request.status + " | " + request.responseText); 
        }
    }
    request.open('POST', url);
    request.setRequestHeader('Host', 'www.tipeeestream.com');
    request.setRequestHeader('Connection', 'close');
    request.setRequestHeader('Content-Length', '128');
    request.setRequestHeader('Accept', 'application/json, text/plain, */*');
    request.setRequestHeader('Origin', 'https://www.tipeeestream.com');
    request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    request.setRequestHeader('User-Agent', ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.27 Safari/537.36 OPR/62.0.3323.0 (Edition developer)');
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.setRequestHeader('Referer', 'https://www.tipeeestream.com/dashboard/settings/security');
    request.setRequestHeader('Accept-Encoding', 'gzip, deflate');
    request.setRequestHeader('Accept-Language', 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7');
    request.send(data);
    }

function addLine(line) {
    document.getElementById("logs").value = document.getElementById("logs").value + line + '\n';
}