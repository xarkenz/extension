
let style = document.createElement("style");
style.innerHTML = `:root:root {
  --ic-brand-font-color-dark: white;
  --ic-brand-font-color-dark-lightened-15: #f5f5f5;
}

#content {
  color: white;
}

body, .header-bar, .item-group-container {
  background-color: #2b2b2b !important;
}

.item-group-condensed .ig-header {
  background-color: #454545 !important;
  border: 1px solid black !important;
}

.ig-header .name {
  color: white !important;
  text-shadow: 1px 1px 0 rgba(64,64,64,0.5) !important;
}

.item-group-condensed .ig-row {
  background: #2b2b2b !important;
  border-bottom: 1px solid black !important;
}

.ig-list .ig-row {
  border: 1px solid black !important;
}
`

  chrome.storage.local.get(['dark_mode'], function(data) {
    if(data.dark_mode) document.body.appendChild(style);
  });
