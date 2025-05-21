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
			toggleContainer.classList.add('extensions__toggle-bg--inactive');
		} else {
			toggleActive.classList.toggle('extensions__toggle--active');
			toggleContainer.classList.toggle('extensions__toggle-bg--active');
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

	return cardContainer.childNodes;
};

const darkMode = (extensions) => {
	document.body.classList.toggle('dark-mode');

	extensions.forEach((cards) => {
		cards.classList.toggle('extensions__card--dark');
	});

	const header = document.querySelector('.extension__header');
	const nav = document.querySelector('.extension__nav');

	header.classList.toggle('extension__header--dark');
	nav.classList.toggle('extension__nav--dark');
};

const darkModeCards = (allCurrentCards) => {
	if (document.body.classList.contains('dark-mode')) {
		allCurrentCards.forEach((card) => {
			card.classList.toggle('extensions__card--dark');
		});
	}
};

const toggleExtension = (evt, allExtensions) => {
	const toggleSwitch = evt.target;
	const currentHeader = toggleSwitch
		.closest('.extensions__card')
		.querySelector('.extensions__header h3');

	if (toggleSwitch.classList.contains('extensions__toggle--active')) {
		toggleSwitch.classList.toggle('extensions__toggle--inactive');
		toggleSwitch.parentNode.classList.toggle('extensions__toggle-bg--inactive');
		toggleSwitch.classList.toggle('extensions__toggle--active');
		toggleSwitch.parentNode.classList.toggle('extensions__toggle-bg--active');

		changeActiveStatus(currentHeader.textContent, allExtensions, false);
	} else if (toggleSwitch.classList.contains('extensions__toggle--inactive')) {
		toggleSwitch.classList.toggle('extensions__toggle--active');
		toggleSwitch.parentNode.classList.toggle('extensions__toggle-bg--active');
		toggleSwitch.classList.toggle('extensions__toggle--inactive');
		toggleSwitch.parentNode.classList.toggle('extensions__toggle-bg--inactive');

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

const removeSelection = (evt, allExtensions) => {
	const removeButton = evt.target;
	const removeCard = removeButton.closest('.extensions__card');
	const header = removeCard.querySelector('h3').textContent;

	if (removeButton.classList.contains('extensions__remove')) {
		deleteElement(removeCard.firstChild);
		removeCard.remove(removeCard);

		const extensionPosition = allExtensions.findIndex((extension) => {
			return extension.name === header;
		});

		allExtensions.splice(extensionPosition, 1);
	}
};

const deleteElement = (element) => {
	while (element.firstChild) {
		element.removeChild(element.lastChild);
	}
};

const showExtensions = (allExtensions) => {
	const cardContainer = document.querySelector('.extensions-container');

	deleteElement(cardContainer);

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
		toggleContainer.classList.add('extensions__toggle-bg--active');

		if (extension.isActive === true) {
			toggleActive.classList.toggle('extensions__toggle--active');
		} else if (extension.isActive === false) {
			toggleActive.classList.toggle('extensions__toggle--inactive');
			toggleContainer.classList.toggle('extensions__toggle-bg--inactive');
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

	darkModeCards(cardContainer.childNodes);
};

const activeExtensions = (allExtensions) => {
	const cardContainer = document.querySelector('.extensions-container');

	deleteElement(cardContainer);

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
			toggleContainer.classList.add('extensions__toggle-bg--active');
			toggleActive.classList.add('extensions__toggle--active');

			// if (eachExtension.isActive === true) {
			// 	toggleActive.classList.toggle('extensions__toggle--active');
			// }

			cardContainer.appendChild(extensionCard);
			extensionCard.append(cardHeaderContainer, removeToggleContainer);
			cardHeaderContainer.append(extensionImage, textContentContainer);
			textContentContainer.append(extensionTitle, extensionContent);
			removeToggleContainer.append(removeButton, toggleContainer);
			toggleContainer.appendChild(toggleActive);
		}
	});

	darkModeCards(cardContainer.childNodes);
};

const inactiveExtensions = (allExtensions) => {
	const cardContainer = document.querySelector('.extensions-container');

	deleteElement(cardContainer);

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
			toggleContainer.classList.add('extensions__toggle-bg--inactive');
			toggleActive.classList.add('extensions__toggle--inactive');

			cardContainer.appendChild(extensionCard);
			extensionCard.append(cardHeaderContainer, removeToggleContainer);
			cardHeaderContainer.append(extensionImage, textContentContainer);
			textContentContainer.append(extensionTitle, extensionContent);
			removeToggleContainer.append(removeButton, toggleContainer);
			toggleContainer.appendChild(toggleActive);
		}
	});

	darkModeCards(cardContainer.childNodes);
};

getExtensionData().then((extensionsObj) => {
	const containerForCards = document.querySelector('.extensions-container');
	const cards = displayExtensions(extensionsObj);

	const darkModeButton = document.querySelector('.extension__nav-moon');
	const allButton = document.querySelector('.extension__header > ul > li:first-child');
	const activeButton = document.querySelector('.extension__header > ul > li:nth-child(2)');
	const inactiveButton = document.querySelector('.extension__header > ul > li:last-child');

	darkModeButton.addEventListener('click', () => {
		darkMode(cards);
	});

	containerForCards.addEventListener('click', (evt) => {
		toggleExtension(evt, extensionsObj);
		removeSelection(evt, extensionsObj);
	});

	allButton.addEventListener('click', () => {
		showExtensions(extensionsObj);
	});

	activeButton.addEventListener('click', () => {
		activeExtensions(extensionsObj);
	});

	inactiveButton.addEventListener('click', () => {
		inactiveExtensions(extensionsObj);
	});
});
