import NmdFlash from "./nmd-flash";

let defaultContainer = null;

/**
 * @tag nmd-flash-container
 * @slot - insert flash messages here
 * @attribute inline - Styles it to be normal static block, instead of being fixed
 * @cssproperty --nmd-flash-width - width of messages when in non inline container
 * @cssproperty --nmd-flash-margin - margin of nmd-flash
 * @cssproperty --nmd-flash-margin-top-bottom - individually set margin of nmd-flash
 * @cssproperty --nmd-flash-margin-left-right - individually set margin of nmd-flash
 * @cssproperty --nmd-flash-margin-top - individually set margin of nmd-flash
 * @cssproperty --nmd-flash-margin-bottom - individually set margin of nmd-flash
 * @cssproperty --nmd-flash-margin-right - individually set margin of nmd-flash
 * @cssproperty --nmd-flash-margin-left - individually set margin of nmd-flash
 */
export default class NmdFlashContainer extends HTMLElement {
	static set defaultContainer(container){
		if(container instanceof NmdFlashContainer)
			defaultContainer = container;
		else
			throw new Error("Passed element is not FlashContainer.");
	}

	static get defaultContainer() {
		return defaultContainer;
	}

	/**
	 * Creates new message and appends it to this container.
	 * @param {string} message -  text of message, if this contains HTML tags, also set isMessage to true
	 * @param {string} [type=null] - message type, @see {@link NmdFlash.type}
	 * @param {number} [autoDismiss=0] - time in ms, message will be dismissed after this time
	 * @param {boolean} [isMessageHtml=false] - set this to true if message contains HTML tags
	 */
	static add() {
		if(defaultContainer)
			defaultContainer.add(...arguments);
		else
			throw new Error("No default FlashContainer found.");
	}

	constructor() {
		super();
		if(!defaultContainer)
			defaultContainer = this;
	}

	connectedCallback() {
		this.ariaLive = "polite";
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