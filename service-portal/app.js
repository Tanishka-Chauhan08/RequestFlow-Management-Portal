import { store } from "./store.js";
import { ui } from "./ui.js";

// Initial Render
ui.render(store.tickets);

// Add Ticket
document.getElementById("ticket-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value;

  store.addTicket(title, priority);
  ui.render(store.tickets);
  e.target.reset();
});

// Event Delegation for Delete and Status Toggle with Confirmation
document.getElementById("ticket-list").addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  // 1. Delete Action with Confirmation
  if (e.target.classList.contains("delete-btn")) {
    if (confirm("Are you sure you want to delete this ticket permanently?")) {
      store.deleteTicket(id);
      ui.render(store.tickets);
    }
  }

  // 2. Status Toggle with Confirmation
  else if (e.target.classList.contains("status-btn")) {
    const currentStatus = e.target.innerText; 
    const actionText = currentStatus === "Close" ? "close" : "reopen";

    if (confirm(`Do you want to ${actionText} this ticket?`)) {
      store.toggleStatus(id);
      ui.render(store.tickets);
    }
  }
});

// Function to handle both Search and Priority filtering together
const filterTickets = () => {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  const priorityFilter = document.getElementById("filter-priority").value;

  const filtered = store.tickets.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(searchTerm);
    // "All" shows everything, otherwise it must match exactly
    const matchesPriority =
      priorityFilter === "All" || t.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  });

  ui.render(filtered);
};

// Listen for Search Input (with Debounce)
let timeout;
document.getElementById("search-bar").addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(filterTickets, 300);
});

// Listen for Priority Dropdown Change
document
  .getElementById("filter-priority")
  .addEventListener("change", filterTickets);
