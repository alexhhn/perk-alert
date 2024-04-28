console.log('content script loaded');

// Function to create and show the popup
function createPopup(message) {
	// Create a new div element for the popup
	const popupDiv = document.createElement('div');

	// Style the popup
	popupDiv.style.position = 'fixed';
	popupDiv.style.top = '20px';
	popupDiv.style.right = '20px';
	popupDiv.style.backgroundColor = '#f9f9f9';
	popupDiv.style.border = '1px solid #ddd';
	popupDiv.style.padding = '20px';
	popupDiv.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.5)';
	popupDiv.style.zIndex = '1000';

	// Add text and image to the popup
	const imageSrc = chrome.runtime.getURL('images/raw.png');
	console.log('imageSrc', imageSrc);
	// Add text and image to the popup
	popupDiv.innerHTML = `<p>${message}</p><img src="${imageSrc}" alt="Perk Image" style="max-width:100px; max-height:100px;">`;

	// Append the popup to the body of the webpage
	document.body.appendChild(popupDiv);

	// Optionally, add a close button and its functionality
	const closeButton = document.createElement('button');
	closeButton.innerText = 'X';
	closeButton.style.position = 'absolute';
	closeButton.style.top = '0';
	closeButton.style.right = '0';
	popupDiv.appendChild(closeButton);

	closeButton.onclick = function () {
		popupDiv.style.display = 'none';
	};
}

// Check and show the popup based on user's membership and current website
chrome.storage.local.get(['dnbSaga', 'obos'], function (items) {
	let message = '';
	if (
		items.dnbSaga &&
		(window.location.href.includes('power.no') ||
			window.location.href.includes('elkjop.no'))
	) {
		message += 'You have perks here because of DNB Mastercard.';
	}
	if (items.obos && window.location.href.includes('skeidar.no')) {
		message += (message ? '<br>' : '') + 'You get perks here because of OBOS.';
	}

	if (message) {
		createPopup(message);
	}
});
