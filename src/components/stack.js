const template = document.createElement('template');
template.innerHTML = `
<style>
:root {
	--stack-margin: var(--size0, 20px);
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

:host {
	display: block;
}
	width: 100%;
	height: 100%;
}

.stack,
:host([y]) .stack {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}

::slotted(*:not(:first-child)),
:host([y]) ::slotted(*:not(:first-child)) {
	margin-top: var(--size0, 20px);
}

:host([x]) .stack {
	flex-direction: row;
}

:host([x]) ::slotted(*:not(:first-child)) {
	margin-top: 0;
	margin-left: var(--size0, 20px);
}

:host([z]) .stack {
	position: relative;
	display: grid;
}

:host([z]) ::slotted(*) {
	color: red;
	grid-area: 1/-1;
	margin: 0;
}
</style>

<div class="stack">
	<slot></slot>
</div>
`;

class FundamendStack extends HTMLElement {
	connectedCallback() {
		if (!this.shadowRoot) {
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}
	}
}

window.customElements.define('fundamend-stack', FundamendStack);
