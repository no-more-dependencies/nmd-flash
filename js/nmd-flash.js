import NmdFlashContainer from './nmd-flash-container';

const msgTemplate = document.createRange().createContextualFragment(/*html*/`
<span part="text">
	<slot></slot>
</span>
<button type="button" part="close-button"></button>`);

export default class NmdFlash extends HTMLElement {
	/**
	 * Adds message to default container. @see {@link NmdFlashContainer} for more info and parameters.
	 */
	static add() {
		NmdFlashContainer.add.apply(null, arguments);
	}

	static get observedAttributes() {
		return ["auto-dismiss"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if(name === "auto-dismiss") {
			clearTimeout(this.dismissTimeoutId);
			let timeout = parseInt(newValue);
			if(Number.isNaN(timeout))
				throw new Error(`Value of attribute "auto-dismiss" must contain integer.`);
			this.dismissTimeoutId = setTimeout(() => this.dismiss(), timeout);
		}
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow({mode: "open"});
		let fragment = msgTemplate.cloneNode(true);
		shadowRoot.appendChild(fragment);

		this._messageElement = shadowRoot.querySelector("span");

		shadowRoot.querySelector("button").addEventListener("click", (e) => {
			this.dismiss();
		});
	}

	/**
	 * Dismisses message with animation. Use remove() to remove notification without animation.
	 */
	dismiss() {
		this.style.setProperty("--height", this.offsetHeight + "px");
		this.setAttribute("dismissed", "");
		setTimeout(() => this.remove(), 500);
	}

	/**
	 * @returns {string} type of message.
	 */
	get type() {
		return this.getAttribute("type") || "info";
	}

	/**
	 * Set type of message. Can be any string but css styles are prepared for types: "info", 
	 * "success", "fail" and "warning". "info" is default.
	 * @param {string} value
	 */
	set type(value) {
		this.setAttribute("type", value);
	}

	/**
	 * @returns {string} text of message without HTML tags.
	 */
	get messageText() {
		if (this._messageElement)
			return this._messageElement.innerText;
		return null;
	}

	get messageElement() {
		return this._messageElement;
	}

	set messageText(text) {
		if (this._messageElement)
			this._messageElement.innerText = text;
	}
}