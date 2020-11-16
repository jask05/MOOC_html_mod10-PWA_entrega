'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('btnInstall');
installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(ev){
    deferredInstallPrompt = ev;
    installButton.removeAttribute('hidden');
}

function installPWA(ev){
    console.log("ENTRA!!!!");
    deferredInstallPrompt.prompt();
    ev.srcElement.setAttribute('hidden', true);
    deferredInstallPrompt.userChoise.then((choice) => {
        if(choice.outcome === 'accepted'){
            console.log('Accepted');
        }else{
            console.log('Not accepted');
        }
        deferredInstallPrompt = null;
    })
}

window.addEventListener('appinstall', logAppInstalled);

function logAppInstalled(ev){
    console.log('APP Pelis instaladas');
}