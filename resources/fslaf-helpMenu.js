/** 2020/08/31 Add code for new Help Menu Overlay */

$(document).ready( function() {

// URL for bringing in the bundle to the wiki
const url = '/wiki/public_html/helptray.js';
// the selector for the Help button in the header
const button = document.querySelector('#helpLink');
// stop processing if the button doesn't exist
if (!button) return;
button.addEventListener('click', function () {
  // If the script that brings in the Help Overlay isn't on the page yet, we know
  // we need to load it in
  if ( typeof window.renderHelpTray === "undefined" ) {
    const script = document.createElement('script');
    script.setAttribute('src', url);
    // Once the script loads, we need to do a little more set up and then actually
    // open the Help Overlay
    script.onload = function () {
      // This event is fired when the Help Overlay is rendered for the first time
      // Setting { once: true } as an option avoids the potential for multiple
      // times getting called. Once this event fires, we just fire the event to
      // let the Help Overlay it needs to open
      document.addEventListener('helpTrayReady', function () {
        document.dispatchEvent(new CustomEvent('openHelpTray'));
      }, { once: true });
      // Here we create an element to render the Help Overlay on. Just a generic div works
      const renderDiv = document.createElement('div');
      // We add an ID in case we need to easily reference it elsewhere
      renderDiv.id = 'helpOverlayRoot';
      // If you go the route of creating the element programatically, be sure to add it
      // to the body somewhere. Here we just put at the end of the <body>
      document.body.appendChild(renderDiv);
      // This is a consistent way to get info about the size and position of the button
      // We can use this to determine where to set the initial position (the x being pulled
      // out here will be the left of the button, which is the correct x value to start the
      // help tray at. The y is the top of the button, which we can add the button's height
      // to in order to get the correct y value to start the help tray at)
      const rect = button.getBoundingClientRect();
      const x = rect.left;
      const y = rect.top;
      const height = rect.height;
      // Finally, call the renderHelpTray function with the element (required) and the
      // initial position (optional but highly recommended)
      window.renderHelpTray(renderDiv, [x, y + height]);
    };
    document.head.insertBefore(script, document.head.firstChild);
  } else {
    // If we get to this else, the script is already on the page, so we just need
    // to dispatch the appropriate event. At a minimum, this can just fire the
    // openHelpTray event, but the ideal scenario is that the button click acts as
    // a toggle. This example shows how to check if the Help Overlay is already open
    // on the page, and fires the appropriate event based on that
    const eventName = document.querySelector('[data-test=helpOverlayCloseButton]') ? 'closeHelpTray' : 'openHelpTray';
    document.dispatchEvent(new CustomEvent(eventName));
  }
});

});
