const template = document.createElement('template');
template.innerHTML = `
<style>

*,
*::before,
*::after {
	box-sizing: border-box;
}

:host {
	--sections-margin-x: var(--size0, 1rem);
	--sections-margin-y: var(--size0, 1rem);
	--sections-gutter: var(--size4, 3rem);
	display: block;
	width: 100%;
	heigth: auto;
}

.sections {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
}

::slotted(*) {
	padding-left: var(--sections-margin-y);
	padding-right: var(--sections-margin-y);
	width: 100%;
	display: flex;
	justify-content: center;
}

::slotted(*:first-child) {
	padding-top: var(--sections-margin-x);
}

::slotted(*:not(:last-child)) {
	padding-bottom: calc(var(--sections-gutter) / 2);
}

::slotted(*:not(:first-child)) {
	padding-top: calc(var(--sections-gutter) / 2);
}

::slotted(*:last-child) {
	padding-bottom: var(--sections-margin-x);
}
</style>

<div class="sections">
	<slot></slot>
</div>
`;

class FundamendSections extends HTMLElement {
	connectedCallback() {
		if (!this.shadowRoot) {
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}
	}
}

window.customElements.define('fundamend-sections', FundamendSections);
