//로컬스토리지를 비워서, id를 비워버리자.
window.onbeforeunload = function () {
	localStorage.clear()
}