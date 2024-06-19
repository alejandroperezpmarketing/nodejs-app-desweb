/**
* Hides all the firts children divs in a div. Does not modify de internal divs of the children.
* @method function libs_general_hideAllDivsInDiv
* @param {str} divName - string with the id of the div that contains all the divs to hide
* @return none
*/
export function libs_general_hideAllDivsInDiv(divName) {
	var selector="#" + divName + ">div"//select all divs wich the parent is divname (only the first level)
    var divs= document.querySelectorAll(selector);
	var div;
	var n=divs.length;
	var i;
    for (i = 0; i < n; i++) {
    	div=divs[i];
    	div.style.display = 'none';//hide the div
    }
}

/**
* Hides all the divs in a div, except one
* @method libs_general_hideAllDivsInDivExceptOne
* @param {str} divParentName - string with the id of the div that contains all the divs to hide and the div to show
* @param {str} divName - string with the id of the div in the divParentName to show
* @return none
*/
export function libs_general_hideAllDivsInDivExceptOne(divParentName, divName) {
	libs_general_hideAllDivsInDiv(divParentName);
	var selector="#" + divName;
	var div= document.querySelector(selector);//selects only one
	div.style.display = 'block';
}


export function libs_general_showElement(elementName) {
	var selector="#" + elementName;
	var element= document.querySelector(selector);//selects only one
	element.style.display = 'block';
}

export function libs_general_hideElement(elementName) {
	var selector="#" + elementName;
	var element= document.querySelector(selector);//selects only one
	element.style.display = 'none';
}



/**
* Returns a string coordinates
* @method lib_general_geojsonCoordinatesToWktSring
* @param {vector} vectorCoordinates - Vector coordinates to transform: [[x, y],[x, y], ...]
* @return string - 'x,y x,y,...'
*/
export function lib_general_geojsonCoordinatesToWktString(vectorCoordinates){
	var s="";
	var np=vectorCoordinates.length;
	for (var i = 0; i < np; i ++){
		var pt=vectorCoordinates[i];
		s=s+pt[0].toString() + " " + pt[1].toString() + ",";
	}
	var n=s.length;
	//console.log(s.substring(0, n-1));
	return s.substring(0, n-1);//remove the final comma	
}