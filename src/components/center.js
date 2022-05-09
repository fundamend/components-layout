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
	height: 100%
}

:host([x]) {
	width: 100%;
	height: auto;
}

:host([y]) {
	width: max-content;
	height: 100%;
}

.center {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

:host([x]) .center {
	justify-content: initial;
}

:host([y]) .center {
	align-items: initial;
}
</style>

<div class="center">
	<slot></slot>
</div>
`;

class FundamendCenter extends HTMLElement {
	connectedCallback() {
		if (!this.shadowRoot) {
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}
	}
}

window.customElements.define('fundamend-center', FundamendCenter);
