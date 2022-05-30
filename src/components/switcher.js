const template = document.createElement('template');
template.innerHTML = `
<style>
*,
*::before,
*::after {
	box-sizing: border-box;
}

:host {
	--gutter: var(--switcher-gutter, var(--size0, 1rem));
	--threshold: var(--switcher-threshold, var(--width-text-max, 60ch));
	display: block;
	width: 100%;
}

.switcher {
	width: 100%;
	overflow: hidden;
}

.switcher > * {
	display: flex;
	flex-wrap: wrap;
	gap: var(--gutter);
	justify-content: center;
}

::slotted(*) {
	flex-grow: 1 !important;
	flex-basis: calc((var(--threshold) - 100%) * 999) !important;
}
</style>

<div class="switcher">
	<div>
		<slot></slot>
	</div>
</div>
`;

class FundamendSwitcher extends HTMLElement {
	connectedCallback() {
		if (!this.shadowRoot) {
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}
	}
}

window.customElements.define('fundamend-switcher', FundamendSwitcher);
