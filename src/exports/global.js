define( [
	"../core"
], function( _jQuery, noGlobal ) {

"use strict";

	// Copy existing global jQuery

	var jQueryImported = jQuery;

	// Copy existing global $

	var $Imported = $;

	_jQuery.noConflict = function( deep ) {
		if ( $ === _jQuery ) {
			$ = $Imported;
		}

		if ( deep && jQuery === _jQuery ) {
			jQuery = jQueryImported;
		}

		return _jQuery;
	};
	
	// If not restricted from exporting jQuery to global scope...

	if ( !noGlobal ) {
		jQuery = $ = _jQuery;
	}
} );
