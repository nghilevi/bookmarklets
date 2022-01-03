function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    if(elements && elements[0]){
	    const elemDisplay = elements[0].style.display;
	    elements[0].style.display = elemDisplay === "none" ? "" : "none";
    }
}

removeElementsByClass("udlite-icon-xxxlarge");
removeElementsByClass("ytp-progress-bar")

/*
. udemy
. youtube

remember to put ; at the end to separate fn execution to avoid Uncaught SyntaxError: Unexpected identifier
*/