/**
 * Conditional include of Map Menus data structure 
 * and all the Map Menus functionality
 * - only for 'Main Page' landing pages
 */
const re = /Hauptseite|Main_Page|P%C3%A1gina_principal|Accueil|Pagina_principale|%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8|%EB%8C%80%EB%AC%B8|%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0|Huvudsida|%E9%A6%96%E9%A1%B5/;
if ( re.test(document.location.pathname) ) {

    // console.log('loading menus data');
    const regr = /GR$/;
    var isGR = regr.test(document.location.pathname);
    var lang = mw.config.get('wgContentLanguage');
    var variant = 'MapMenu.js';
    if (isGR) {
        variant = 'MapMenu-GR.js';
    }
    mw.loader.load('/' + lang + '/wiki/index.php?title=MediaWiki:' + variant + '&action=raw&ctype=text/javascript');

    /**
     * Attach a click handler to our buttons to show the "countries" menus
     */
    $('[id$=_button]').click(function () {
        // show the menu in case it's hidden
        $("#menu").show();
        var position = this.id.indexOf('_button');
        var name = this.id.substring(0, position);
        name += "_countries";
        // console.log ("showing list for " + name);
        if (name == 'all_countries_countries') {
            showAllCountries();
        } else {
            showList(name);
        }
    });

    /**
     * Attach a click handler to "links" (spans with class .menulink) in the menus.
     * Because the menus are dynamic, we use a "delegated" event handler
     * with jQuery's .on()
     * https://api.jquery.com/on/
     */
    $("#menu").on("click", ".menulink", function () {
        // console.log( $( this ).text() );
        // find out what menu to show
        var menu = $(this).text().toLowerCase();
        // replace all the blanks
        menu = menu.replace(/ /g, "_");
        menu = menu + "_states";
        // console.log("showing menu for " + menu);
        showList(menu);
    });

    /**
     * Add an event listener to state and country menus
     * so that clicking the red [x] will close the menu.
     */
    $("#menu").on("click", ".exit", function () {
        var menu = $(".exit").parent().attr("parent");
        if (menu) {
            showList(menu);
        } else {
            //showAllCountries();
            $("#menu").hide();
        }
    });
}
