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

.fill,
:host([y]) .fill {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-content: stretch;
}

:host([x]) .fill {
	flex-direction: row;
}

::slotted(*) {
	flex-grow: 1;
	overflow: auto;
	scrollbar-gutter: stable;
}

::slotted(header),
::slotted(footer) {
	flex-grow: 0;
	overflow: initial;
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
