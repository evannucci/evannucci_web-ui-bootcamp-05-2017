
	function save() {
	var field = document.getElementById('field').value;
	localStorage.setItem('text', field);
	}

	function load() {
		var stored = localStorage.getItem('text');
		if (stored){
				document.getElementById('field').value = stored;
			}
	}

	function remove() {
		document.getElementById('field').value = '';
		localStorage.removeItem('text');
	}

	function drag_drop(event){
		event.preventDefault();
		alert(event.dataTransfer.files[0]);
		alert(event.dataTransfer.files[0].name);
		alert(event.dataTransfer.files[0].size+" bytes");
		}