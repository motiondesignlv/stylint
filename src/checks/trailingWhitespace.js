'use strict';

var whitespaceRe = /[ \t]+$/; // check for unecessary tabs or whitespace at eol
var anythingElseRe = /[^ \t]/; // anything BUT whitespace (we dont want to return false positives on empty lines)

/**
 * @description check for trailing whitespace
 * @param  {string} [line] curr line being linted
 * @return {boolean} true if whitespace found, false if not
 */
var trailingWhitespace = function( line ) {
	var whitespace = false;

	// not an empty line, with whitespace at the end
	if ( anythingElseRe.test( line ) &&
		whitespaceRe.test( line ) ) {
		whitespace = true;
	}

	if ( whitespace ) {
		this.msg( 'trailing whitespace' );
	}

	return whitespace;
};

module.exports = trailingWhitespace;
