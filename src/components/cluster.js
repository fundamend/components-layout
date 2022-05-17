const template = document.createElement('template');
template.innerHTML = `
<style>
*,
*::before,
*::after {
	box-sizing: border-box;
}

:host {
	--margin: var(--cluster-margin, var(--size0, 1rem));
	display: block;
}

:host([y]) {
	height: 100%;
	width: max-content;
}

.cluster {
	display: flex;
	flex-wrap: wrap;
	gap: var(--margin);
	width: 100%;
	height: 100%;
	align-content: center;
	align-items: center;
}

.cluster,
:host([x]) .cluster {
	flex-direction: row;
}

:host([y]) .cluster {
	flex-direction: column;
}

.cluster,
:host([start]) .cluster {
	justify-content: flex-start;
}

:host([end]) .cluster {
	justify-content: flex-end;
}

:host([center]) .cluster {
	justify-content: center;
}

</style>

<div class="cluster">
	<slot></slot>
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
