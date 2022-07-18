/* Injected Header Testing 1 
<script src="https://beta.familysearch.org/hf/hf.js"></script>
*/

/* Injected Header Testing 2 */
(function() {
  var injHF = document.createElement('script');
  injHF.async = true;
  injHF.src = 'https://' + window.location.host + '/hf/hf.js';
  document.getElementsByTagName("head")[0].appendChild(injHF);
})();
