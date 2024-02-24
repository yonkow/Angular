type objectType = {
    destination: string,
    price: number,
    status: string,
}

function ticketsDatabase(arr: string[], sortingCriteria: string): objectType[] {

    let ticketArr: objectType[] = [];

    class Ticket {
        constructor(public destination: string, public price: number, public status: string) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (const string of arr) {
        let [name, priceStr, status] = string.split('|');
        const price: number = Number(priceStr);

        const newTicket = new Ticket(name, price, status);
        ticketArr.push(newTicket);
    }

    let sortedTicketArr = [...ticketArr].sort((ticket1, ticket2) => ticket1[sortingCriteria].localeCompare(ticket2[sortingCriteria]));

    return sortedTicketArr
}

console.log(ticketsDatabase([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ],
    'status'    
));