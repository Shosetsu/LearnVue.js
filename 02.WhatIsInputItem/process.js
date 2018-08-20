var mainBox = new Vue({
	el:'#main-box',
	data: function(){
		return {
			box1:`<input type="range" min="-100" max="100" value="0" step="10" name="power" list="powers">
<datalist id="powers">
	<option value="0">
	<option value="-30">
	<option value="30">
	<option value="50">
</datalist>`,
			box2:`<input type="url" name="location" list="urls">
<datalist id="urls">
 <option label="MIME: Format of Internet Message Bodies" value="">
 <option label="HTML" value="https://html.spec.whatwg.org/">
 <option label="DOM" value="https://dom.spec.whatwg.org/">
 <option label="Fullscreen" value="https://fullscreen.spec.whatwg.org/">
 <option label="Media Session" value="https://mediasession.spec.whatwg.org/">
 <option label="The Single UNIX Specification, Version 3" value="http://www.unix.org/version3/">
</datalist>`
		}
	}
});