// When popup loads, set the checkbox state based on stored settings
document.addEventListener('DOMContentLoaded', function () {
	chrome.storage.local.get(['dnbSaga', 'obos'], function (items) {
		document.getElementById('dnbSaga').checked = items.dnbSaga || false;
		document.getElementById('obos').checked = items.obos || false;
	});
});

// Save button functionality
document.getElementById('save').onclick = function () {
	var dnbSaga = document.getElementById('dnbSaga').checked;
	var obos = document.getElementById('obos').checked;
	chrome.storage.local.set({ dnbSaga: dnbSaga, obos: obos }, function () {
		console.log('Settings saved');
		// Optional: Provide feedback to the user that settings have been saved
	});
};
