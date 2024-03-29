const template = document.createElement('template');
template.innerHTML = `
<style>

*,
*::before,
*::after {
	box-sizing: border-box;
}

:host {
	--gutter: var(--stack-gutter, var(--size0, 1rem));
	display: block;
}

:host,
:host([y]) {
	width: 100%;
	height: auto;
}

.stack,
:host([y]) .stack {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}

::slotted(*:not(:first-child)),
:host([y]) ::slotted(*:not(:first-child)) {
	margin-top: var(--gutter);
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
	margin-left: var(--gutter);
}

:host([z]) .stack {
	position: relative;
	display: grid;
	justify-content: stretch;
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
