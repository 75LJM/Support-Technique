let tickets = [];
getTickets();

document.addEventListener('DOMContentLoaded', () => {

	const ticketsContainer = document.getElementById('ticketsContainer');

	tickets.forEach((ticket, index) => {

		const tr = document.createElement('tr');
		ticketsContainer.appendChild(tr);

		const indexTd = document.createElement('td');
		indexTd.innerText = '#' + index;
		tr.appendChild(indexTd);

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

		const deleteBtn = document.createElement('button');
		deleteBtn.className = 'btn btn-danger rounded';
		deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
		actionTd.appendChild(deleteBtn);

		deleteBtn.addEventListener('click', () => {

			tickets.splice(index, 1);
			saveTickets();

		});

	});

});

function saveTickets() {

	const stringifiedTickets = JSON.stringify(tickets);
	localStorage.setItem('tickets', stringifiedTickets);

}

function getTickets() {

	const ticketsFromLocal = localStorage.getItem('tickets');
	const parsedTickets = JSON.parse(ticketsFromLocal);

	if (parsedTickets) { // if parsedTickets !== null/undefined/false
		tickets = parsedTickets;
	} else {
		tickets = [];
	}	

}