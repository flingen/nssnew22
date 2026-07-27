// Central place for the registration link. Every "Book a Seat" / "Get a Ticket"
// button calls openTicketModal(), which now redirects straight to Tix.
export const TICKET_URL = 'https://tix.africa/discover/nss2026';

export function openTicketModal() {
  window.location.href = TICKET_URL;
}
