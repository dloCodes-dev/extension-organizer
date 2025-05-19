const getExtensionData = async () => {
	try {
		const extensionJSON = await fetch('../data.json');
		const extensionData = await extensionJSON.json();
		return extensionData;
	} catch (error) {
		console.error(error);
	}
};

const displayExtensions = (allExtensions) => {
	const cardContainer = document.querySelector('.extensions-container');

	allExtensions.forEach((extension, i) => {
		const extensionCard = document.createElement('div');
		const cardHeaderContainer = document.createElement('div');
		const textContentContainer = document.createElement('div');
		const extensionImage = document.createElement('img');
		const extensionTitle = document.createElement('h3');
		const extensionContent = document.createElement('p');
		const removeToggleContainer = document.createElement('div');
		const removeButton = document.createElement('div');
		const toggleContainer = document.createElement('div');
		const toggleActive = document.createElement('div');

		extensionCard.classList.add('extensions__card');
		cardHeaderContainer.classList.add('extensions__header');
		textContentContainer.classList.add('extensions__header-content');
		extensionTitle.classList.add('extensions__title');
		removeToggleContainer.classList.add('extensions__toggle-container');
		removeButton.classList.add('extensions__remove');
		toggleContainer.classList.add('extensions__toggle');

		if (i === 2 || i === 5 || i === 7 || i === 10) {
			toggleActive.classList.add('extensions__toggle--inactive');
		} else {
			toggleActive.classList.add('extensions__toggle--active');
		}

		extensionImage.setAttribute('src', `${extension.logo}`);
		extensionTitle.textContent = `${extension.name}`;
		extensionContent.textContent = `${extension.description}`;
		removeButton.textContent = 'Remove';

		cardContainer.appendChild(extensionCard);
		extensionCard.append(cardHeaderContainer, removeToggleContainer);
		cardHeaderContainer.append(extensionImage, textContentContainer);
		textContentContainer.append(extensionTitle, extensionContent);
		removeToggleContainer.append(removeButton, toggleContainer);
		toggleContainer.appendChild(toggleActive);
	});

	const cards = document.querySelectorAll('.extensions__card');

	return [cards, allExtensions];
};

const darkMode = (extensions) => {
	extensions.forEach((cardsAndButtons) => {
		cardsAndButtons.classList.toggle('extensions__card--dark');
	});

	const header = document.querySelector('.extension__header');
	const nav = document.querySelector('.extension__nav');

	header.classList.toggle('extension__header--dark');
	nav.classList.toggle('extension__nav--dark');
	document.body.classList.toggle('dark-mode');
	console.log('clicked');
};

const toggleExtension = (evt, allExtensions) => {
	const toggleSwitch = evt.target;
	const currentHeader = toggleSwitch
		.closest('.extensions__card')
		.querySelector('.extensions__header h3');

	if (evt.target.classList.contains('extensions__toggle--active')) {
		toggleSwitch.classList.toggle('extensions__toggle--inactive');
		toggleSwitch.classList.remove('extensions__toggle--active');

		changeActiveStatus(currentHeader.textContent, allExtensions, false);
	} else if (evt.target.classList.contains('extensions__toggle--inactive')) {
		toggleSwitch.classList.toggle('extensions__toggle--active');
		toggleSwitch.classList.remove('extensions__toggle--inactive');

		changeActiveStatus(currentHeader.textContent, allExtensions, true);
	}
};

const changeActiveStatus = (headerContent, allExtensions, flag) => {
	allExtensions.forEach((eachExtension) => {
		if (eachExtension.name.includes(headerContent)) {
			eachExtension.isActive = flag;
		}
	});
};

const showExtensions = (allExtensions) => {
	const cardContainer = document.querySelector('.extensions-container');

	console.log(allExtensions);

	allExtensions.forEach((extension) => {
		const extensionCard = document.createElement('div');
		const cardHeaderContainer = document.createElement('div');
		const textContentContainer = document.createElement('div');
		const extensionImage = document.createElement('img');
		const extensionTitle = document.createElement('h3');
		const extensionContent = document.createElement('p');
		const removeToggleContainer = document.createElement('div');
		const removeButton = document.createElement('div');
		const toggleContainer = document.createElement('div');
		const toggleActive = document.createElement('div');

		extensionCard.classList.add('extensions__card');
		cardHeaderContainer.classList.add('extensions__header');
		textContentContainer.classList.add('extensions__header-content');
		extensionTitle.classList.add('extensions__title');
		removeToggleContainer.classList.add('extensions__toggle-container');
		removeButton.classList.add('extensions__remove');
		toggleContainer.classList.add('extensions__toggle');

		if (extension.isActive === false) {
			toggleActive.classList.add('extensions__toggle--inactive');
		} else {
			toggleActive.classList.add('extensions__toggle--active');
		}

		extensionImage.setAttribute('src', `${extension.logo}`);
		extensionTitle.textContent = `${extension.name}`;
		extensionContent.textContent = `${extension.description}`;
		removeButton.textContent = 'Remove';

		cardContainer.appendChild(extensionCard);
		extensionCard.append(cardHeaderContainer, removeToggleContainer);
		cardHeaderContainer.append(extensionImage, textContentContainer);
		textContentContainer.append(extensionTitle, extensionContent);
		removeToggleContainer.append(removeButton, toggleContainer);
		toggleContainer.appendChild(toggleActive);
	});
};

const activeExtensions = (allExtensions) => {
	const cardContainer = document.querySelector('.extensions-container');

	while (cardContainer.firstChild) {
		cardContainer.removeChild(cardContainer.lastChild);
	}

	allExtensions.forEach((eachExtension) => {
		if (eachExtension.isActive === true) {
			const extensionCard = document.createElement('div');
			const cardHeaderContainer = document.createElement('div');
			const textContentContainer = document.createElement('div');
			const extensionImage = document.createElement('img');
			const extensionTitle = document.createElement('h3');
			const extensionContent = document.createElement('p');
			const removeToggleContainer = document.createElement('div');
			const removeButton = document.createElement('div');
			const toggleContainer = document.createElement('div');
			const toggleActive = document.createElement('div');

			extensionImage.setAttribute('src', `${eachExtension.logo}`);
			extensionTitle.textContent = `${eachExtension.name}`;
			extensionContent.textContent = `${eachExtension.description}`;
			removeButton.textContent = 'Remove';

			extensionCard.classList.add('extensions__card');
			cardHeaderContainer.classList.add('extensions__header');
			textContentContainer.classList.add('extensions__header-content');
			extensionTitle.classList.add('extensions__title');
			removeToggleContainer.classList.add('extensions__toggle-container');
			removeButton.classList.add('extensions__remove');
			toggleContainer.classList.add('extensions__toggle');
			toggleActive.classList.add('extensions__toggle--active');

			cardContainer.appendChild(extensionCard);
			extensionCard.append(cardHeaderContainer, removeToggleContainer);
			cardHeaderContainer.append(extensionImage, textContentContainer);
			textContentContainer.append(extensionTitle, extensionContent);
			removeToggleContainer.append(removeButton, toggleContainer);
			toggleContainer.appendChild(toggleActive);
		}
	});
};

const inactiveExtensions = (allExtensions) => {
	const cardContainer = document.querySelector('.extensions-container');

	while (cardContainer.firstChild) {
		cardContainer.removeChild(cardContainer.lastChild);
	}

	allExtensions.forEach((eachExtension) => {
		if (eachExtension.isActive === false) {
			const extensionCard = document.createElement('div');
			const cardHeaderContainer = document.createElement('div');
			const textContentContainer = document.createElement('div');
			const extensionImage = document.createElement('img');
			const extensionTitle = document.createElement('h3');
			const extensionContent = document.createElement('p');
			const removeToggleContainer = document.createElement('div');
			const removeButton = document.createElement('div');
			const toggleContainer = document.createElement('div');
			const toggleActive = document.createElement('div');

			extensionImage.setAttribute('src', `${eachExtension.logo}`);
			extensionTitle.textContent = `${eachExtension.name}`;
			extensionContent.textContent = `${eachExtension.description}`;
			removeButton.textContent = 'Remove';

			extensionCard.classList.add('extensions__card');
			cardHeaderContainer.classList.add('extensions__header');
			textContentContainer.classList.add('extensions__header-content');
			extensionTitle.classList.add('extensions__title');
			removeToggleContainer.classList.add('extensions__toggle-container');
			removeButton.classList.add('extensions__remove');
			toggleContainer.classList.add('extensions__toggle');
			toggleActive.classList.add('extensions__toggle--inactive');

			cardContainer.appendChild(extensionCard);
			extensionCard.append(cardHeaderContainer, removeToggleContainer);
			cardHeaderContainer.append(extensionImage, textContentContainer);
			textContentContainer.append(extensionTitle, extensionContent);
			removeToggleContainer.append(removeButton, toggleContainer);
			toggleContainer.appendChild(toggleActive);
		}
	});
};

getExtensionData().then((jsonOBJ) => {
	displayExtensions(jsonOBJ);

	const containerForCards = document.querySelector('.extensions-container');

	const allButton = document.querySelector('.extension__header > ul > li:first-child');
	const activeButton = document.querySelector('.extension__header > ul > li:nth-child(2)');
	const inactiveButton = document.querySelector('.extension__header > ul > li:last-child');

	containerForCards.addEventListener('click', (evt) => {
		toggleExtension(evt, jsonOBJ);
	});

	allButton.addEventListener('click', () => {
		const cardContainer = document.querySelector('.extensions-container');

		while (cardContainer.firstChild) {
			cardContainer.removeChild(cardContainer.lastChild);
		}

		//! need to add function to display all extensions
		showExtensions(jsonOBJ);
	});

	activeButton.addEventListener('click', () => {
		const flag = activeExtensions(jsonOBJ);
	});

	inactiveButton.addEventListener('click', () => {
		inactiveExtensions(jsonOBJ);
	});
});
