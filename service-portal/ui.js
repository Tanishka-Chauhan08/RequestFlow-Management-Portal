const ticketList = document.getElementById("ticket-list");
const countTotal = document.getElementById("count-total");

export const ui = {
  render(tickets) {
    ticketList.innerHTML = "";
    tickets.forEach((ticket) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${ticket.id}</td>
                <td><strong>${ticket.title}</strong></td>
                <td><span class="badge" style="background: ${this.getPriorityColor(ticket.priority)}; color: white">${ticket.priority}</span></td>
                <td>${ticket.status}</td>
                <td>
                    <button class="status-btn" data-id="${ticket.id}">${ticket.status === "Open" ? "Close" : "Reopen"}</button>
                    <button class="delete-btn" data-id="${ticket.id}">Delete</button>
                </td>
            `;
      ticketList.appendChild(row);
    });
    countTotal.innerText = tickets.length;
  },

  getPriorityColor(priority) {
    if (priority === "High") return "#ef4444";
    if (priority === "Medium") return "#f59e0b";
    return "#10b981";
  },
};
