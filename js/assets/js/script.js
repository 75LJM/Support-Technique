let tickets = [];
getTickets();

document.addEventListener('DOMContentLoaded', () => {

	const sendButton = document.getElementById('sendButton');

	sendButton.addEventListener('click', () => {

		const firstnameInput = document.getElementById('firstnameInput');
		const lastnameInput = document.getElementById('lastnameInput');
		const emailInput = document.getElementById('emailInput');
		const telInput = document.getElementById('telInput');
		const dateInput = document.getElementById('dateInput');
		const timeInput = document.getElementById('timeInput');
		const objectInput = document.getElementById('objectInput');
		const messageInput = document.getElementById('messageInput');

		const newTicket = {
			firstname: firstnameInput.value,
			lastname: lastnameInput.value,
			email: emailInput.value,
			tel: telInput.value,
			date: dateInput.value,
			time: timeInput.value,
			object: objectInput.value,
			message: messageInput.value
		};

		console.log('Nouveau ticket :', newTicket);

		tickets.push(newTicket);

		console.log('Liste des tickets :', tickets);

		const ticketForm = document.getElementById('ticketForm');
		ticketForm.reset();

		saveTickets();

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
