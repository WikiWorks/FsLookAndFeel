/* ################################### */
/* Sidebar menu change for Upload file */
/* ################################### */
function ModifySidebar( action, section, name, link ) {
	try {
		switch ( section ) {
			case 'languages':
				var target = 'p-lang';
				break;
			case 'toolbox':
				var target = 'p-tb';
				break;
			case 'navigation':
				var target = 'p-navigation';
				break;
			default:
				var target = 'p-' + section;
				break;
		}

		if ( action == 'add' ) {
			var node = document.getElementById( target )
							   .getElementsByTagName( 'div' )[0]
							   .getElementsByTagName( 'ul' )[0];

			var aNode = document.createElement( 'a' );
			var liNode = document.createElement( 'li' );

			aNode.appendChild( document.createTextNode( name ) );
			aNode.setAttribute( 'href', link );
			liNode.appendChild( aNode );
			liNode.className = 'plainlinks';
			node.appendChild( liNode );
		}

		if ( action == 'remove' ) {
			var list = document.getElementById( target )
							   .getElementsByTagName( 'div' )[0]
							   .getElementsByTagName( 'ul' )[0];

			var listelements = list.getElementsByTagName( 'li' );

			for ( var i = 0; i < listelements.length; i++ ) {
				if (
					listelements[i].getElementsByTagName( 'a' )[0].innerHTML == name ||
					listelements[i].getElementsByTagName( 'a' )[0].href == link
				)
				{
					list.removeChild( listelements[i] );
				}
			}
		}

	} catch( e ) {
		// let's just ignore what's happened
		return;
	}
}

// removes [[Special:Upload|Special:Upload]] from toolbox if not Moderator
if ( mw.config.get( 'wgUserGroups', [] ).indexOf( 'Moderator' ) < 0 ) {
	function CustomizeModificationsOfSidebar() {
	ModifySidebar( 'remove', 'toolbox', 'Upload file', 'https://beta.familysearch.org/en/wiki/Special:Upload' );
	}
	
	jQuery( CustomizeModificationsOfSidebar );
}
