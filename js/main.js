
function background() {
	document.getElementById("background").style.height = document.getElementsByTagName("body")[0].clientHeight + "px";
}

window.addEventListener("load", background);
window.addEventListener("resize", background);

