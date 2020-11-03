let ticketsArr = [];

document.addEventListener('DOMContentLoaded', () => {

	getAllTickets();
	displayAllTickets();

	const supportForm = document.getElementById('supportForm');
	if (supportForm) {
		supportForm.addEventListener('submit', (event)  => {
			event.preventDefault();

			const inputs = event.target.elements;

			const ticket = {
				firstname: inputs['firstname'].value,
				lastname: inputs['lastname'].value,
				email: inputs['email'].value,
				tel: inputs['tel'].value,
				date: inputs['date'].value,
				time: inputs['time'].value,
				object: inputs['object'].value,
				message: inputs['message'].value
			};

			saveTicket(ticket);
			const supportForm = document.getElementById('supportForm');
			supportForm.reset();
			alert('Ticket enregistré');
		});
	}

});

function getAllTickets() {
	const storedTickets = JSON.parse(localStorage.getItem('tickets'));
	if (storedTickets) {
		ticketsArr = storedTickets;
	}
}

function displayAllTickets() {
	const tableRowsContainer = document.getElementById('tableRowsContainer');
	if (tableRowsContainer) {

		tableRowsContainer.innerHTML = '';

		ticketsArr.forEach((ticket, ticketIndex) => {

			const tr = document.createElement('tr');
			tableRowsContainer.appendChild(tr);

			const th = document.createElement('th');
			th.innerText = '#' + ticketIndex;
			tr.appendChild(th);

			const dateTd = document.createElement('td');
			dateTd.innerText = ticket.date;
			tr.appendChild(dateTd);

			const objectTd = document.createElement('td');
			objectTd.innerText = ticket.object;
			tr.appendChild(objectTd);

			const authorTd = document.createElement('td');
			authorTd.innerText = ticket.firstname + ' ' + ticket.lastname;
			tr.appendChild(authorTd);

			const actionTd = document.createElement('td');
			tr.appendChild(actionTd);

			const delBtn = document.createElement('button');
			delBtn.type = 'button';
			delBtn.ticketIndex = ticketIndex;
			delBtn.className = 'btn btn-danger rounded delBtn';
			delBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
			actionTd.appendChild(delBtn);

		});

	}

	const delButtons = document.querySelectorAll('.delBtn');
	if (delButtons && delButtons.length > 0) {
		delButtons.forEach((delBtn) => {

			delBtn.addEventListener('click', () => {
				removeTicket(delBtn.ticketIndex);
			});

		});
	}

}

function saveTicket(ticket) {
	ticketsArr.push(ticket);
	localStorage.setItem('tickets', JSON.stringify(ticketsArr));
}

function removeTicket(ticketIndex) {
	if (confirm('Supprimer ce ticket ?')) {
		ticketsArr.splice(ticketIndex, 1);
		localStorage.setItem('tickets', JSON.stringify(ticketsArr));
		displayAllTickets();
	}
}