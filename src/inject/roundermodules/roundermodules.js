const link = document.createElement('link');
    link.href = chrome.extension.getURL("src/inject/roundermodules/roundermodules.css");;
    link.type = 'text/css';
    link.rel = 'stylesheet';

chrome.storage.local.get(['canvasplus-setting-roundermodules'], (data) => {
    if(data['canvasplus-setting-roundermodules']) {
        if (document.getElementById("context_modules_sortable_container") !== "null") {
            document.querySelector('html').appendChild(link);
        }
    }
})