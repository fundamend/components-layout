const template = document.createElement('template');
template.innerHTML = `
<style>
*,
*::before,
*::after {
	box-sizing: border-box;
}

:host {
	--padding: var(--box-padding, var(--size0, 1rem));
	display: block;
	width: max-content;
	max-width: 100%;
}

.box {
	padding: var(--padding);
	width: 100%;
	height: 100%;
}

:host([x]) .box {
	padding: 0 var(--padding);
}

:host([y]) .box {
	padding: var(--padding) 0;
}

:host([fill]) {
	width: 100%;
	height: 100%;
}

:host([fill-x]) {
	width: 100%;
}

:host([fill-y]) {
	height: 100%;
}
</style>

<div class="box">
	<slot></slot>
</div>
`;

class FundamendBox extends HTMLElement {
	connectedCallback() {
		if (!this.shadowRoot) {
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}
	}
}

window.customElements.define('fundamend-box', FundamendBox);
