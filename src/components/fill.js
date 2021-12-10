const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
	width: 100%;
	height: 100%;
}

.fill {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

::slotted(*) {
	flex-grow: 1;
	flex-shrink: 1;
	overflow: auto;
}

::slotted(:not(main)) {
	flex-grow: 0;
	flex-shrink: 0;
}
</style>

<div class="fill">
	<slot></slot>
</div>
`;

class FundamendFill extends HTMLElement {
	connectedCallback() {
		if (!this.shadowRoot) {
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}
	}
}

window.customElements.define('fundamend-fill', FundamendFill);
