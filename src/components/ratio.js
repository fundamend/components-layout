const template = document.createElement('template');
template.innerHTML = `
<style>
*,
*::before,
*::after {
	box-sizing: border-box;
}

:host {
	display: block;
	width: 100%;
}

.ratio {
	--ratio-threshold: var(--width-text-max, 60ch);
	--ratio-margin: var(--size0, 1rem);

	width: 100%;
	overflow: hidden;
}

.ratio > * {
	display: flex;
	flex-wrap: wrap;
	margin: calc(var(--ratio-margin) / -2);
	justify-content: center;
}

:host([reversed]) .ratio > * {
	flex-direction: row-reverse;
}

::slotted(*) {
	flex-basis: calc((var(--ratio-threshold) - 100%) * 999) !important;
	margin: calc(var(--ratio-margin) / 2) !important;
}

::slotted(*:first-child) {
	flex-grow: var(--ratio) !important;
}

::slotted(*:last-child) {
	flex-grow: 1 !important;
}
</style>

<div class="ratio">
	<div>
		<slot></slot>
	</div>
</div>
`;

class FundamendRatio extends HTMLElement {
	connectedCallback() {
		if (!this.shadowRoot) {
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}
	}
}

window.customElements.define('fundamend-ratio', FundamendRatio);
