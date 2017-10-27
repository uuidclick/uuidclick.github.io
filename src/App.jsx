import preact from 'preact';
import hat from 'hat';
import linkState from 'linkstate';

export default class App extends preact.Component {
	render(props, state) {
		let error, value;
		try {
			value = hat(state.bits, state.base);
		} catch(e) {
			error = e;
		}
		return (<center>
			<h1>Here, have a string.</h1>
			<h3>strings provided by <a href="https://npmjs.com/package/hat">hat</a></h3>
			<AutoselectInput value={error || value} />
			<h3>Configure the string?</h3>
			<label>Bits: <input value={state.bits} type="number" onInput={linkState(this, 'bits')} /></label>
			<label>Base: <input value={state.base} type="number" onInput={linkState(this, 'base')} /></label>
		</center>);
	}
	constructor() {
		super();
		this.state = {
			bits: 128,
			base: 16
		};
	}
}

class AutoselectInput extends preact.Component {
	render(props, state) {
		return <input type="text" value={props.value} readonly onFocus={() => this.base.setSelectionRange(0, this.base.value.length)} autofocus style={{width: "90%", maxWidth: "500px", textAlign: "center"}}/>;
	}
}
