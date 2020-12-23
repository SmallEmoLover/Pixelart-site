const abc = document.getElementById("big_clouds");

document.addEventListener("mousemove", function (e) { moveMe(e); });

function moveMe(e) {
    let offsetX = (e.clientX / window.innerWidth * 50);
	let offsetY = (e.clientY / window.innerHeight * 20);

	//Меняем положение фона
	abc.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");
};