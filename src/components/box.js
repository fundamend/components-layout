const template = document.createElement('template');
template.innerHTML = `
<style>
.box {
	--box-padding: var(--size0, 20px);

	padding: var(--box-padding);
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
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}

window.customElements.define('fundamend-box', FundamendBox);
