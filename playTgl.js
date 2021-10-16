function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    if(elements && elements[0]){
	    const elemDisplay = elements[0].style.display;
	    elements[0].style.display = elemDisplay === "none" ? "" : "none";
    }
}

// TARGET SITES:
// udemy
// youtube

removeElementsByClass("video-player--center-button--aPLkI")
removeElementsByClass("ytp-progress-bar")
