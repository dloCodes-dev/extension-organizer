const getBookmarkData = async () => {
	try {
		const extensionJSON = await fetch('../data.json');
		const extensionData = await extensionJSON.json();
		displayBookmarks(extensionData);
	} catch (error) {
		console.error(error);
	}
};

const displayBookmarks = (allExtensions) => {
	const cardContainer = document.querySelector('.extensions-container');

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

const toggleExtension = (evt) => {};

getBookmarkData();

const containerForCards = document.querySelector('.extensions-container');
containerForCards.addEventListener('click', toggleExtension);
