const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
	pointer-events: none;
}

.center {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	pointer-events: none;
}

:host([x]) .center {
	justify-content: initial;
}

:host([y]) .center {
	align-items: initial;
}
</style>

<div class="center">
	<slot>[add your content here]</slot>
</div>
`;

class FundamendCenter extends HTMLElement {
	connectedCallback() {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}

window.customElements.define('fundamend-center', FundamendCenter);
