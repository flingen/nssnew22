// Central place for the Luma event links + a tiny event bus that lets any
// button on any page open the registration modal without prop drilling.
export const TICKET_URL = 'https://luma.com/event/evt-Spr0dDUlIpAziaO';
export const LUMA_EMBED_URL = 'https://luma.com/embed/event/evt-Spr0dDUlIpAziaO/simple';

export const OPEN_TICKET_MODAL_EVENT = 'open-ticket-modal';

export function openTicketModal() {
  window.dispatchEvent(new CustomEvent(OPEN_TICKET_MODAL_EVENT));
}
