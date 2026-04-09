export const store = {
  tickets: JSON.parse(localStorage.getItem("tickets")) || [],

  addTicket(title, priority) {
    const newTicket = {
      id: "TK-" + Math.floor(Math.random() * 10000),
      title,
      priority,
      status: "Open",
      date: new Date().toLocaleDateString(),
    };
    this.tickets.push(newTicket);
    this.save();
    return newTicket;
  },

  deleteTicket(id) {
    this.tickets = this.tickets.filter((t) => t.id !== id);
    this.save();
  },

  toggleStatus(id) {
    const ticket = this.tickets.find((t) => t.id === id);
    if (ticket) {
      ticket.status = ticket.status === "Open" ? "Closed" : "Open";
      this.save();
    }
  },

  save() {
    localStorage.setItem("tickets", JSON.stringify(this.tickets));
  },
};
