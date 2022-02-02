const template = document.createElement('template');
template.innerHTML = `
<style>

*,
*::before,
*::after {
	box-sizing: border-box;
}

:host {
	--stack-gutter: var(--size2, 1rem);
	display: block;
}

:host,
:host([y]) {
	width: 100%;
	heigth: auto;
}

.stack,
:host([y]) .stack {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}

::slotted(*:not(:first-child)),
:host([y]) ::slotted(*:not(:first-child)) {
	margin-top: var(--stack-gutter);
}

:host([x]) {
	width: auto;
	height: 100%;
}

:host([x]) .stack {
	flex-direction: row;
}

:host([x]) ::slotted(*:not(:first-child)) {
	margin-top: 0;
	margin-left: var(--stack-gutter);
}

:host([z]) .stack {
	position: relative;
	display: grid;
}

:host([z]) ::slotted(*) {
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
