const template = document.createElement('template');
template.innerHTML = `
<style>
*,
*::before,
*::after {
	box-sizing: border-box;
	/*
	** Allow flex items to shrink smaller than content size
	** https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size
	*/
	min-width: 0;
	min-height: 0;
}

:host {
	--padding-x: var(--dropdown-padding-x, var(--size-1, 1rem));
	--padding-y: var(--dropdown-padding-y, var(--size-2, 1rem));
	--gap-x: var(--dropdown-gap-x, 0);
	--gap-y: var(--dropdown-gap-y, 0);
	display: block;
	width: max-content;
	max-width: 100%;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	gap: var(--gap-x);
}

a {
	display: block;
}

li {
	display: block;
	position: relative;
	padding: var(--padding-y) var(--padding-x);
}

li:hover,
li:focus-within {
	cursor: pointer;
}

ul li ul {
	visibility: hidden;
	opacity: 0;
	display: none;
	position: absolute;
	margin-top: var(--padding-y);
	min-width: 100%;
	width: max-content;
	left: 0;
	flex-direction: column;
	gap: var(--gap-y);
	z-index: 999;
}

ul li ul li {
	width: 100%;
}

ul li:hover > ul,
ul li:focus-within > ul,
ul li ul:hover,
ul li ul:focus {
	visibility: visible;
	opacity: 1;
	display: flex;
}
</style>

<nav part="menuWrapper" role="navigation">
</nav>
`;

class FundamendDropdown extends HTMLElement {
	items = [];

	connectedCallback() {
		if (!this.shadowRoot) {
			this.attachShadow({ mode: 'open' });
			this.shadowRoot.appendChild(template.content.cloneNode(true));
		}
		setTimeout(() => {
			this.shadowRoot.host.classList.add('fundamend-component');

			const menuWrapper = this.shadowRoot.querySelector('nav')
			this.items = JSON.parse(this.getAttribute('data-items'));

			if (this.items?.length > 0) {
				const menuParentElement = document.createElement('ul');
				menuParentElement.setAttribute('part', 'menuParent');
				menuWrapper.appendChild(menuParentElement);

				this.items.forEach(item => {
					const menuChildElement = document.createElement('li');
					const menuChildLinkElement = document.createElement('a');
					menuChildLinkElement.innerHTML = item.text;
					menuChildLinkElement.setAttribute('href', item.href || '');
					menuChildLinkElement.setAttribute('part', 'a');
					menuChildElement.appendChild(menuChildLinkElement);
					menuChildElement.setAttribute('part', 'menuChild');
					menuParentElement.appendChild(menuChildElement);

					if (item.children?.length > 0) {
						const subMenuParentElement = document.createElement('ul');
						subMenuParentElement.setAttribute('part', 'subMenuParent');
						menuChildElement.insertAdjacentElement('beforeend', subMenuParentElement);

						item.children.forEach(child => {
							const subMenuChildElement = document.createElement('li');
							const subMenuChildLinkElement = document.createElement('a');
							subMenuChildLinkElement.innerHTML = child.text;
							subMenuChildLinkElement.setAttribute('href', child.href || '');
							subMenuChildLinkElement.setAttribute('part', 'a');
							subMenuChildElement.appendChild(subMenuChildLinkElement);
							subMenuChildElement.setAttribute('part', 'subMenuChild');
							subMenuParentElement.appendChild(subMenuChildElement);
						});
					}
				});
			}
		});
	}
}

window.customElements.define('fundamend-dropdown', FundamendDropdown);
