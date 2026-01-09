import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-satoshi font-bold text-2xl md:text-3xl text-deep-navy mb-3">
          Don't Miss Out
        </h2>
        <p className="text-gray-600 mb-8">
          Stay ahead! Don't miss exclusive insights, community stories, new speakers, and schedule
          announcements.
        </p>

        {isSubmitted ? (
          <div className="flex items-center justify-center gap-2 text-nigeria-green">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Thanks for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-nigeria-green focus:ring-2 focus:ring-nigeria-green/20 transition-all"
              required
            />
            <Button type="submit" variant="primary" className="inline-flex items-center gap-2">
              Subscribe <Send size={16} />
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
