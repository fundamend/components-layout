const template = document.createElement('template');
template.innerHTML = `
<style>
:root {
	--stack-margin: var(--size0, 20px);
}

.stack,
:host([x]) .stack {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}

::slotted(*:not(:first-child)),
:host([x]) ::slotted(*:not(:first-child)) {
	margin-top: var(--size0, 20px);
}

:host([y]) .stack {
	flex-direction: row;
}

:host([y]) ::slotted(*:not(:first-child)) {
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
	<slot>[add your content here]</slot>
</div>
`;

class FundamendStack extends HTMLElement {
	connectedCallback() {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}

window.customElements.define('fundamend-stack', FundamendStack);
