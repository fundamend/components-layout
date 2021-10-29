const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
	--sidebar-gutter: var(--size0, 20px);

	display: block;
	height: 100%;
	width: 100%;
	overflow: hidden;
}

:host > :not(style) {
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	margin: calc(var(--sidebar-gutter) / -2);
}

:host > :not(style) > * {
	margin: calc(var(--sidebar-gutter) / 2);
}

.sidebar {
	flex-grow: 1;
	background-color: red;
}

.not-sidebar {
	flex-basis: 0;
	flex-grow: 999;
	min-width: calc(50% - var(--sidebar-gutter));
	background-color: green;
}
</style>

<div>
	<div class="sidebar">
		<slot name="sidebar">[add your sidebar content here]</slot>
	</div>
	<div class="not-sidebar">
		<slot>[add your content here]</slot>
	</div>
</div>
`;

class FundamendSidebar extends HTMLElement {
	connectedCallback() {
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
}

window.customElements.define('fundamend-sidebar', FundamendSidebar);
