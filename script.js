var ignoreList = [
	'AAA AUTO',
	'AUTO DISKONT',
	'Auto ESA',
	'1 1 Nejlepší autopůjčka s.r.o.'
];
var searchResults = document.querySelectorAll('.result');

for (var i = searchResults.length - 1; i >= 0; i--) {
	var result = searchResults[i];
	var resultInner = searchResults[i].innerHTML;

	ignoreList.forEach(function(ignoreItem) {
		if (resultInner.indexOf(ignoreItem) >= 0) {
			result.style.display = 'none';
		}
	});
}
