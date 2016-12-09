define( [
	"../core"
], function( jQuery, noGlobal, globalObject ) {

"use strict";

	// If not restricted from exporting jQuery to global scope...

	if ( !noGlobal ) {
		
		// Copy existing global jQuery

		var _jQuery = globalObject.jQuery;

		// Copy existing global $

		var _$ = globalObject.$;

		jQuery.noConflict = function( deep ) {
			if ( globalObject.$ === jQuery ) {
				globalObject.$ = _$;
			}

			if ( deep && jQuery === _jQuery ) {
				globalObject.jQuery = jQuery;
			}

			return jQuery;
		};
		
		
		globalObject.jQuery = globalObject.$ = jQuery;
	}
} );
