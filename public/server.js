// <script src="https://obniz.io/js/jquery-3.2.1.min.js"></script>
// <script
// 	src="https://unpkg.com/obniz@2.0.1/obniz.js"
// 	crossorigin="anonymous"
// ></script>

var Obniz = require("obniz");
var obniz = new Obniz("5795-1526");

function sleep(msec) {
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve();
		}, msec);
	});
}
obniz.onconnect = async function() {
	for (var i = 0; i < 9; i++) {
		obniz.display.clear();
		obniz.display.print("Hello World");
		await sleep(1000);
	}
};
