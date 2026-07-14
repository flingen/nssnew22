import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { LUMA_EMBED_URL, OPEN_TICKET_MODAL_EVENT } from '../lib/ticketModal';

// Full-screen overlay with the Luma registration embed. Opened from anywhere
// via openTicketModal(). Closes on backdrop click, the X button, or Escape.
export function TicketModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener(OPEN_TICKET_MODAL_EVENT, open);
    return () => window.removeEventListener(OPEN_TICKET_MODAL_EVENT, open);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Register for Nigeria Stablecoin Summit 2.0"
    >
      <div
        className="relative w-full max-w-[600px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close registration"
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <iframe
          src={LUMA_EMBED_URL}
          title="Register for Nigeria Stablecoin Summit 2.0"
          className="w-full h-[75vh] max-h-[620px] rounded-xl bg-white border-0 shadow-2xl"
          allow="fullscreen; payment"
        />
      </div>
    </div>
  );
}
