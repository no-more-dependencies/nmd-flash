import { customElementVsCodePlugin } from "custom-element-vs-code-integration";
import { customElementVuejsPlugin } from 'custom-element-vuejs-integration';
import { customElementJetBrainsPlugin } from 'custom-element-jet-brains-integration';
import { customElementJsxPlugin } from 'custom-element-jsx-integration';
import { customElementSolidJsPlugin } from 'custom-element-solidjs-integration';
import { customElementSveltePlugin } from 'custom-element-svelte-integration';

const outdir = "manifests";
export default {
	globs: ["js/**"],
	outdir,
	plugins: [
		customElementVsCodePlugin({ outdir }),
		customElementVuejsPlugin({ outdir }),
		customElementJetBrainsPlugin({ outdir }),
		customElementJsxPlugin({outdir}),
		customElementSolidJsPlugin({outdir}),
		customElementSveltePlugin({outdir})
	]
}