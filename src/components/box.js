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
	height: 100%;
}

.box {
	--box-padding: var(--size0, 20px);

	padding: var(--box-padding);
	width: 100%;
	height: 100%;
}

:host([x]) .box {
	padding: 0 var(--box-padding);
}

:host([y]) .box {
	padding: var(--box-padding) 0;
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
