var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function ticketsDatabase(arr, sortingCriteria) {
    var ticketArr = [];
    var Ticket = /** @class */ (function () {
        function Ticket(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        return Ticket;
    }());
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var string = arr_1[_i];
        var _a = string.split('|'), name_1 = _a[0], priceStr = _a[1], status_1 = _a[2];
        var price = Number(priceStr);
        var newTicket = new Ticket(name_1, price, status_1);
        ticketArr.push(newTicket);
    }
    var sortedTicketArr = __spreadArray([], ticketArr, true).sort(function (ticket1, ticket2) { return ticket1[sortingCriteria].localeCompare(ticket2[sortingCriteria]); });
    return sortedTicketArr;
}
console.log(ticketsDatabase([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status'));
