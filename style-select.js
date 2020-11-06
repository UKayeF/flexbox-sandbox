document.onreadystatechange = function initEventHandlers(argument) {
	if (document.readyState === 'complete'){
		setup();
	}
}

function setup() {
	const flexDirectionOptions = document.querySelectorAll('input[name=flex-direction]');
	flexDirectionOptions.forEach(
		flexDirectionOption => flexDirectionOption.addEventListener('click', () => {
			const container = document.querySelector('.container');
			container.classList.toggle('row');
			container.classList.toggle('column');
		})
	);
	const reverseCheckbox = document.querySelector('#reverse');
	reverseCheckbox.addEventListener('click', () => {
		const container = document.querySelector('.container');
		container.classList.toggle('reverse');
	});
	const wrapCheckbox = document.querySelector('#wrap');
	wrapCheckbox.addEventListener('click', () => {
		const container = document.querySelector('.container');
		container.classList.toggle('wrap');
	});
}
