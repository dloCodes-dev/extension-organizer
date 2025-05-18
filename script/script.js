const getBookmarkData = async () => {
	try {
		const extensionJSON = await fetch('../data.json');
		const extensionData = await extensionJSON.json();
		return displayBookmarks(extensionData);
	} catch (error) {
		console.error(error);
	}
};

const displayBookmarks = (allExtensions) => {
	const cardContainer = document.querySelector('.extensions-container');

	allExtensions.forEach((extension, i) => {
		console.log(typeof i);
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

	return cards;
};

const darkMode = (switchingToDarkMode) => {
	switchingToDarkMode.forEach((cardsAndButtons) => {
		cardsAndButtons.classList.toggle('extensions__card--dark');
	});

	const header = document.querySelector('.extension__header');
	const nav = document.querySelector('.extension__nav');

	header.classList.toggle('extension__header--dark');
	nav.classList.toggle('extension__nav--dark');
	document.body.classList.toggle('dark-mode');
};

const toggleExtension = (evt) => {
	if (evt.target.classList.contains('extensions__toggle--active')) {
		evt.target.classList.toggle('extensions__toggle--inactive');
	} else if (evt.target.classList.contains('extensions__toggle--inactive')) {
		evt.target.classList.toggle('extensions__toggle--active');
	}
};

const dynamicElements = getBookmarkData();

dynamicElements.then((cards) => {
	const darkModeButton = document.querySelector('.extension__nav--moon');

	darkModeButton.addEventListener('click', () => {
		darkMode(cards);
	});
});

//* Need to add logic to target specific toggles
const containerForCards = document.querySelector('.extensions-container');
containerForCards.addEventListener('click', toggleExtension);
