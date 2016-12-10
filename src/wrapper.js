/* eslint-disable no-unused-vars*/
/*!
 * jQuery JavaScript Library v@VERSION
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: @DATE
 */

( function( global, factory ) {

"use strict";

	// TODO: In browsers the message should be:
	//       "jQuery requires a global document".

	var errorMessage = "jQuery requires a window with a document";

	// If modular environment (e.g. NodeJS, CommonJS in browser)...

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// If a global document exists (e.g. in browsers):

		// NOTE: Have to check for document as property of window due to use of fake window in NodeJS

		module.exports = ( global.window && global.window.document ) ?

			// Common JS in browser. Don't create a global.

			factory( global.window, true ) :

			// NodeJS modules pass a fake window object

			function( window ) {

				// If no document property on fake window...

				if ( !window.document ) {
					throw new Error( errorMessage );
				}

				// TODO: Don't augment the fake window (done for compatibility at moment)

				return factory( window, false, window );
			};
	} else {

		// For environments lacking module.exports (e.g. browsers without CommonJS)

		if ( !global.window || !global.window.document ) {
			throw new Error( errorMessage );
		}

		factory( global.window, false, global );
	}

	// NOTE: would be able to pass - this - alone, except that the "document_present_originally"
	// smoke test creates a fake CommonJS/browser environment in NodeJS that fails. :(

} )( typeof global == "undefined" ? this : global, function( window, noGlobal, globalObject ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

// @CODE
// build.js inserts compiled jQuery here

return jQuery;
} );
