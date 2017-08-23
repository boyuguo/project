import _ from 'loadsh';

function component(){
	var element = document.creatElement('div');

	element.innerHTML = _.join(['Hello','World'], '');

	return element;
}

document.body.appendChild(component());