/* Injected Header Testing 1 
<script src="https://beta.familysearch.org/hf/hf.js"></script>
*/

/* Injected Header Testing 2 */
(function() {
  var injHF = document.createElement('script');
  injHF.async = true;
  injHF.src = 'https://beta.familysearch.org/hf/hf.js';
  document.getElementsByTagName("head")[0].appendChild(injHF);
})();

/* Any JavaScript here will be loaded for all users on every page load. */

if ( ( /Main_Page/.test(document.location.href) ) || ( /Guided_Research_for_Online_Records/.test(document.location.href) ) ) {
    $("#content h1").css({"border":0, "text-align":"center"});
}

// Initialize Tooltips from Bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

/**
 * Display the 'Additional online resources' using jQuery
 */
$(document).ready(function(){
  $("#mw-customcollapsible-Additional_online_resources").css({"display": "block"});
});

/* Add Adobe Launch 2020-11-12 
 * There is a corresponding section in override.php to load the library */
$(document).ready(function(){
  // information to record
  var config = {
        'site_id': 'FamilySearch',
        'site_language': mw.config.get('wgContentLanguage'), // e.g. 'en'
        'page_channel': 'Wiki',
        'page_detail': document.location.pathname + document.location.search, //'Home' for the homepage or a unique page title for other pages; including querystring
        'page_type': 'wiki',
        'visitor_state': 'lo'
    };
    // send it
    try {
        _satellite.track('page_view', config);
    } catch (e) {
        // ignore
    }
    console.log("recorded page view for " + config.page_detail);
});
/* End Adobe Launch code */


function getCookie(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value !== null) ? unescape(value[1]) : null;
}
setTimeout(function() {
    var templeCookie = getCookie('fs-highconf') || getCookie('fs-templeinfo');
    if (templeCookie && templeCookie.indexOf('true') > -1) {
        var body = document.querySelector('body');
        body.classList.add('templeMember');
    }
}, 2000);

/**
 * Test if an element has a certain class
 * @deprecated:  Use $(element).hasClass() instead.
 */
mw.log.deprecate( window, 'hasClass', function ( element, className ) {
    return $( element ).hasClass( className );
}, 'Use jQuery.hasClass() instead' );

/* Added for Accordion button */
(function() {
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
})();

/* end Accordion button */
