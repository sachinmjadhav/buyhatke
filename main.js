(function() {
	// Create UL, add class and render
	let ul = document.createElement('ul');
	ul.setAttribute('class', 'cards');
	document.getElementById('render').appendChild(ul);

	// Fetch Products from local JSON file
	fetch('./products.json')
		.then(res => res.json())
		.then(data => data.products.map(product => renderProduct(product)));

	// Render each product from JSON file in an li
	renderProduct = product => {
		let li = document.createElement('li');
		li.setAttribute('class', 'card-item');

		// Product Image
		let cardImage = document.createElement('div');
		cardImage.setAttribute('class', 'card-image');
		let img = document.createElement('img');
		img.setAttribute('src', product.src);

		let cardContent = document.createElement('div');
		cardContent.setAttribute('class', 'card-content');

		// Product Title
		let title = document.createElement('p');
		title.setAttribute('class', 'card-title');
		title.innerHTML = product.title;

		// Compare Button
		let button = document.createElement('button');
		button.setAttribute('class', 'btn btn-block card-btn');
		button.innerHTML = 'Compare Prices';

		ul.appendChild(li);
		li.appendChild(cardImage);
		cardImage.appendChild(img);
		li.appendChild(cardContent);
		cardContent.appendChild(title);
		cardContent.appendChild(button);
	};
})();
