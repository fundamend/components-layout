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

.cluster {
	--cluster-margin: var(--size0, 20px);

	width: 100%;
	overflow: hidden;
}

.cluster > * {
	display: flex;
	flex-wrap: wrap;
	margin: calc(var(--cluster-margin) / -2);
}

::slotted(*) {
	margin: calc(var(--cluster-margin) / 2);
}

.cluster > *,
:host([start]) .cluster > * {
	justify-content: flex-start;
}

:host([center]) .cluster > * {
	justify-content: center;
}

:host([end]) .cluster > * {
	justify-content: flex-end;
}
</style>

<div class="cluster">
	<div>
		<slot></slot>
	</div>
</div>
`;

class FundamendCluster extends HTMLElement {
	connectedCallback() {
		if (!this.shadowRoot) {
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}
	}
}

window.customElements.define('fundamend-cluster', FundamendCluster);
