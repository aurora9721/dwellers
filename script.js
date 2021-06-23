// -------- CHOOSE FOR ME RANDOMISER FUNCTION-------------

var sites = [
    'index_discipline.html',
    'index_instincts.html',
    'index_responsabilities.html',
    'index_agency.html'
    'index_endings.html'
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}

// ------- COPY TO CLIPBOARD------------

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
