function copyText(text) {
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  }); 
  /* Alert the copied text */
  var tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = "✅ Copied To Clipboard";
}

function outFunc() {
  var tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = "📋Copy To Clipboard";
}
