if ('serviceWorker' in navigator) {

    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register("/Persion-PWA-Manifest-Generator/sw.js")
            .then(function () {
                console.log('service worker registered .');

            })
            .catch(function () {
                console.log('SW Errors .');

            });
    });
}


function app() {
    let input_name = document.getElementById("input_name").value;
    let input_short_name = document.getElementById("input_short_name").value;
    let input_theme = document.getElementById("input_theme").value;
    let input_background = document.getElementById("input_background").value;
    let input_discription = document.getElementById("input_discription").innerHTML;
    let input_start_url = document.getElementById("input_start_url").value;
    let input_scope = document.getElementById("input_scope").value;
    let input_display = document.getElementById("input_display").value;
    let input_orientation = document.getElementById("input_orientation").value;
    let input_lang = document.getElementById("input_lang").value;
    let input_direction = document.getElementById("input_direction").value;


    if((input_name == "")||(input_short_name == "")||(input_theme == "")||(input_background == "")||(input_start_url == "")||(input_scope == "")||(input_lang == "")||(input_direction == "")){
        return true;
    }


    textJSON = `
    {
        "name": "${input_name}",
        "short_name": "${input_short_name}",
        "description": "${input_discription}",
        "theme_color": "${input_theme}",
        "background_color": "${input_background}",
        "display": "${input_display}",
        "orientation": "${input_orientation}",
        "start_url": "${input_start_url}?utm_source=homescreen",
        "scope": "${input_scope}",
        "dir": "${input_direction}",
        "lang": "${input_lang}",
        "icons": [
            {
                "src": "image/icons/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "image/icons/icon-256x256.png",
                "sizes": "256x256",
                "type": "image/png"
            },
            {
                "src": "image/icons/icon-384x384.png",
                "sizes": "384x384",
                "type": "image/png"
            },
            {
                "src": "image/icons/icon-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
    }
    `
    document.getElementById("response").innerHTML = textJSON;
    return false;
}

function copyBtn() {
    var copyText = document.getElementById("response");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    if (app()){
        alert("هیج کدام را خالی نگذارید")
    }else{
        app();
        modal.style.display = "block";
    }
    
  
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}