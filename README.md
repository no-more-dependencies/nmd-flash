# nmd-flash

Web component for displaying styled and animated messages.

[Demo](https://no-more-dependencies.github.io/#nmd-flash)

```
<nmd-flash-container>
	<nmd-flash type="success">
		Everything is awesome.
	</nmd-flash>
	<nmd-flash type="fail">
		Something is wong.
	</nmd-flash>
	<nmd-flash type="warning">
		Mind the gap.
	</nmd-flash>
	<nmd-flash type="info">
		Roses are red.
	</nmd-flash>
	<nmd-flash><!-- defaults to info -->
		Violets are blue.
	</nmd-flash>
	<nmd-flash auto-dismiss="1000">
		I will be gone in 1 second. Oh no!
	</nmd-flash>
</nmd-flash-container>
```

```
// You can run these:
// Static methods will add notifications to first flash-container in the document. You can also call add method directly on flash-container element.
NmdFlash.add("Hi!");
NmdFlash.add(
	"This was a <strong>triumph</strong>.", // message
	"success", // type
	1000, // autodismiss
	true // message contains HTML tags
);

let msg = document.querySelector("nmd-flash");
msg.type = "warning";
msg.messageText = "Nevermind, I'm a warning now.";
msg.dismiss();
```

Just import one of these in your document:

 * `dist/nmd-flash.js` (includes css styles, without icons)
 * `dist/nmd-flash-unicode-icons.js` (same as above but with unicode icons, but they are kinda lame)
 * `dist/nmd-flash-fontawesome-icons.js` (fontawesome icons support, but you need to load fontawesome in your document yourself)

 If you want to import just classes without registering custom elements, import `js/main.js`.