export default class Loader {
	constructor() {
		this.element = document.createElement('div');
	}
	createLoaderElement = (className) => {
		this.element.className = className;
		this.element.innerHTML = `<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>`;
		return this;
	}
	removeLoaderElement = () => {
		this.element.parentNode.removeChild(this.element);
	}
}