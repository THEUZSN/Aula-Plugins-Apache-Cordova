// This is a JavaScript file

document.addEventListener("deviceready", onDeviceReady, false );


function vibrar(){
    navigator.vibrate(Number(document.getElementById("tempo").value)*1000);
    alert(`vibrou por ${Number(document.getElementById("tempo").value)*1000}ms`)
}