var mainBox = new Vue({
	el:'#main-box',
	data: function(){
		return {
			contents:[
`<input type="range" min="-100" max="100" value="0" step="10" name="power" list="powers" onchange="document.getElementById('power').innerHTML=this.value+'%'">
<datalist id="powers">
<option value="-80" label="min" />
<option value="-50" />
<option value="-30" />
<option value="0" label="default" />
<option value="30" />
<option value="50" />
<option value="80" label="max" />
</datalist>
<br />
<p id="power">0%</p>`,
`<input type="url" name="location" list="urls">
<datalist id="urls">
 <option label="HTML" value="file://sample.html" />
 <option label="GitHub" value="https://github.com/Shosetsu/" />
 <option label="GravBall" value="https://shosetsu.github.io/GravityBall/" />
</datalist>`,
`<form method='post'>
<p><label>Username: <input type="text" name='name' required maxlength=4 /></label></p>
<p><label>Password: <input type="password" name='password' required minlength=8 /></label></p>
<p><label>Mail: <input type="email" name='mail' required list="mails" size='30' /></label></p>
<p><label>Tel: <input type="tel" name='tel' required /></label></p>
<p><input type='submit' /> <input type='reset' /></p>
<datalist id="mails"><option value="Shosetsu.rr@outlook.com" label="myMail" /></datalist>
</form>`,
`<input type="color" value="#7864ff" autocomplete="false" list="color-list" />
<input type="color" value="#ffd700" autocomplete="false" />
<datalist id="color-list">
<option value="#7864ff" label="default" />
<option value="#ff0000" label="red" />
</datalist>`,
`Just Memo<hr />
<a onclick='window.open("http://jp.finalfantasyxiv.com/lodestone/character/9032279/")'>My Lodestone</a>
<hr />`
			]
		}
	}
});