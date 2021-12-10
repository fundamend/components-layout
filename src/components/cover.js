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

.cover {
	--cover-margin: var(--size0, 20px);

	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
}

::slotted(*) {
	margin-top: var(--cover-margin);
	margin-bottom: var(--cover-margin);
}

.cover > h1 {
	margin-top: auto;
	margin-bottom: auto;
}

.cover > :first-child:not(h1) {
	margin-top: 0;
}

.cover > :last-child:not(h1) {
	margin-bottom: 0;
}
</style>

<div class="cover">
	<h1>
		<slot></slot>
	</h1>
	<slot name="content"></slot>
</div>
`;

class FundamendCover extends HTMLElement {
	connectedCallback() {
		if (!this.shadowRoot) {
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}
	}
}

window.customElements.define('fundamend-cover', FundamendCover);
