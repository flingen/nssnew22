// Registration now redirects straight to Tix (see openTicketModal in
// ../lib/ticketModal), so there is no in-page modal to render. This component
// is kept as a no-op so existing imports in App.tsx keep working.
export function TicketModal() {
  return null;
}
