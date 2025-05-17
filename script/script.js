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
		const contentContainer = document.createElement('div');
		const extensionImageBackground = document.createElement('div');
		const extensionImage = document.createElement('img');
		const extensionTitle = document.createElement('h3');
		const extensionContent = document.createElement('p');
		const removeToggleContainer = document.createElement('div');
		const removeButton = document.createElement('div');
		const toggleContainer = document.createElement('div');
		const toggleActive = document.createElement('div');

		extensionCard.classList.add('extensions__card');
		contentContainer.classList.add('extensions__content-container');
		extensionImageBackground.classList.add('extensions__content-image');
		extensionTitle.classList.add('extensions__title');
		removeToggleContainer.classList.add('extensions__toggle-container');
		removeButton.classList.add('extensions__remove');
		toggleContainer.classList.add('extensions__toggle');

		extensionImage.setAttribute('src', `${extension.logo}`);

		cardContainer.appendChild(extensionCard);
		extensionCard.append(contentContainer, removeToggleContainer);
		contentContainer.append(
			extensionImageBackground,
			extensionTitle,
			extensionContent
		);
		extensionImageBackground.appendChild(extensionImage);
		removeToggleContainer.append(removeButton, toggleContainer);
		toggleContainer.appendChild(toggleActive);
	});
};

getBookmarkData();
