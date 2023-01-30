
function script() {
	let r = document.getElementsByClassName('modal__close');

	const divIdMain = document.getElementById('modal_main');
	const divIdSucces = document.getElementById('modal_success');
	const divClosse = document.getElementsByClassName('modal__close_times')

	divIdMain.className = 'modal modal_active';
	modalClosing();

	const a = document.querySelector('.modal.modal_active a.show-success');
	function eventClickClModal() {
		/*
				Todo: Task: we select 'Div.model.modal_active' 
					regardless of '#Modal_main' or '#Modal_Success' to change the classю
		*/
		divIdMain.className = 'modal';
		divIdSucces.className = 'modal modal_active';
		modalClosing();
	}
	a.addEventListener('click', eventClickClModal);


	function modalClosing() {
		/*
			Todo: I get the class "Modal Active", regardless of ID - "Modal_Main" or "Modal_Success"
		*/
		const getClModalModal_active = document.getElementsByClassName('modal_active');
		const getModalClose = getClModalModal_active[0].getElementsByClassName('modal__close');

		getModalClose[0].addEventListener('click', () => getClModalModal_active[0].className = 'modal');

	};
}
script();

