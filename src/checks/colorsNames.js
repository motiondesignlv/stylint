'use strict'

var hexRe = /#(?:[a-z]{3}){1,2}/im
var ignoreRe = /^\s*(?:#|.*=.*)/

const colorsList = [
    'aliceblue','antiquewhite','aqua','aquamarine','azure','beige','bisque',
    'black','blanchedalmond','blue','blueviolet','brown','burlywood','cadetblue',
    'chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan',
    'darkblue','darkcyan','darkgoldenrod','darkgray','darkgrey','darkgreen','darkkhaki',
    'darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon',
    'darkseagreen','darkslateblue','darkslategray','darkslategrey','darkturquoise',
    'darkviolet','deeppink','deepskyblue','dimgray','dimgrey','dodgerblue','firebrick',
    'floralwhite','forestgreen','fuchsia','gainsboro','ghostwhite','gold','goldenrod',
    'gray','grey','green','greenyellow','honeydew','hotpink','indianred','indigo',
    'ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue',
    'lightcoral','lightcyan','lightgoldenrodyellow','lightgray','lightgrey','lightgreen',
    'lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightslategrey',
    'lightsteelblue','lightyellow','lime','limegreen','linen','magenta','maroon','mediumaquamarine',
    'mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen',
    'mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite',
    'navy','oldlace','olive','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen',
    'paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple',
    'rebeccapurple','red','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell',
    'sienna','silver','skyblue','slateblue','slategray','slategrey','snow','springgreen','steelblue','tan',
    'teal','thistle','tomato','turquoise','violet','wheat','white','whitesmoke','yellow','yellowgreen',
];

/**
 * @description if we disallowed hex colors, check for them and return true if found
 * @param {string} [line] curr line being linted
 * @returns {boolean} true if hex color found, false if not
 */
var colors = function( line ) {
	if ( ignoreRe.test( line ) || this.state.root ) { return }

	var hex = false
	var colorsList = hexRe.exec( line )

	// so basically if we're using #hex colors outside of a var declaration
	if ( match !== null ) {
		hex = true
	}

	if ( hex === true ) {
		this.msg( 'plaincolor are not allowed, should be a variable', match.index )
	}

	return hex
}

module.exports = colors
