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

.switcher {
	--switcher-threshold: 30rem;
	--switcher-margin: var(--size0, 2px);

	width: 100%;
	overflow: hidden;
}

.switcher > * {
	display: flex;
	flex-wrap: wrap;
	margin: calc(var(--switcher-margin) / -2);
	justify-content: center;
}

::slotted(*) {
	flex-grow: 1 !important;
	flex-basis: calc((var(--switcher-threshold) - 100%) * 999) !important;
	margin: calc(var(--switcher-margin) / 2) !important;
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
