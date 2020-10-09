import NmdFlash from "./nmd-flash";

let defaultContainer = null;

export default class NmdFlashContainer extends HTMLElement {
	static set defaultContainer(container){
		if(container instanceof FlashContainer)
			defaultContainer = container;
		else
			throw new Error("Passed element is not FlashContainer.");
	}

	static get defaultContainer() {
		return defaultContainer;
	}

	static add() {
		if(defaultContainer)
			defaultContainer.add.apply(defaultContainer, arguments);
		else
			throw new Error("No default FlashContainer found.");
	}

	constructor() {
		super();
		if(!defaultContainer)
			defaultContainer = this;
	}

	/**
	 * Creates new message and appends it to this container.
	 * @param {string} message -  text of message, if this contains HTML tags, also set isMessage to true
	 * @param {string} [type=null] - message type, @see {@link NmdFlash.type}
	 * @param {number} [autoDismiss=0] - time in ms, message will be dismissed after this time
	 * @param {boolean} [isMessageHtml=false] - set this to true if message contains HTML tags
	 */
	add(message, type, autoDismiss, isMessageHtml) {
		let msg = new NmdFlash();
		if(isMessageHtml)
			msg.innerHTML = message;
		else
			msg.innerText = message;
		if(type)
			msg.setAttribute("type", type);
		if(autoDismiss > 0)
			msg.setAttribute("auto-dismiss", autoDismiss);
		this.appendChild(msg);
	}
}