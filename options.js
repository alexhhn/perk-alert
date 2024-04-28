document.getElementById('save').onclick = function () {
	var dnbSaga = document.getElementById('dnbSaga').checked;
	var obos = document.getElementById('obos').checked;
	chrome.storage.local.set({ dnbSaga: dnbSaga, obos: obos }, function () {
		console.log('Settings saved');
	});
};
