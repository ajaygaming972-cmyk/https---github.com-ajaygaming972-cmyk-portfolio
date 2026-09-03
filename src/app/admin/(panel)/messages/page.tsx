'use client';

import { useEffect, useMemo, useState } from 'react';
import { MailOpen, Search, Trash2 } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

type ContactMessage = {
  _id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  read: boolean;
  createdAt: string;
};

type Filter = 'all' | 'unread' | 'read';

function getToken() {
  return localStorage.getItem('admin_token') || sessionStorage.getItem('admin_token');
}

function formatTime(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return '';

  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = date.toDateString() === yesterday.toDateString();

  if (isToday) {
    return `Today · ${date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
  }

  if (isYesterday) return 'Yesterday';

  return date.toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionId, setActionId] = useState<string | null>(null);

  const loadMessages = async () => {
    const token = getToken();
    if (!token) {
      window.location.href = '/admin';
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/messages`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const result = await response.json();

      if (response.status === 401) {
        localStorage.removeItem('admin_token');
        sessionStorage.removeItem('admin_token');
        window.location.href = '/admin';
        return;
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to load messages');
      }

      setMessages(Array.isArray(result.data) ? result.data : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const filteredMessages = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return messages.filter((message) => {
      const matchesFilter =
        filter === 'all' ||
        (filter === 'unread' && !message.read) ||
        (filter === 'read' && message.read);

      if (!matchesFilter) return false;
      if (!normalizedQuery) return true;

      return [message.name, message.email, message.subject, message.message]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(normalizedQuery));
    });
  }, [messages, query, filter]);

  const markAsRead = async (id: string) => {
    const token = getToken();
    if (!token) return;

    setActionId(id);
    try {
      const response = await fetch(`${API_URL}/messages/${id}/read`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ read: true }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Failed to mark message as read');

      setMessages((items) => items.map((item) => (item._id === id ? result.data : item)));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to mark message as read');
    } finally {
      setActionId(null);
    }
  };

  const deleteMessage = async (id: string) => {
    const token = getToken();
    if (!token) return;

    setActionId(id);
    try {
      const response = await fetch(`${API_URL}/messages/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Failed to delete message');

      setMessages((items) => items.filter((item) => item._id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete message');
    } finally {
      setActionId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-extrabold text-white">Messages</h2>
        <p className="mt-1 text-sm text-white/35">Messages submitted through your public contact form.</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
          <Search size={17} className="text-white/25" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search messages..." className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20" />
        </div>

        <div className="flex rounded-xl border border-white/10 bg-white/[0.02] p-1">
          {(['all', 'unread', 'read'] as Filter[]).map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={`rounded-lg px-3 py-2 text-xs font-semibold capitalize transition ${filter === item ? 'bg-[#f5a623]/10 text-[#f5a623]' : 'text-white/45 hover:bg-white/5 hover:text-white'}`}>
              {item === 'all' ? 'All messages' : item}
            </button>
          ))}
        </div>
      </div>

      {error && <div className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</div>}

      {loading ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center text-sm text-white/30">Loading messages...</div>
      ) : (
        <div className="space-y-3">
          {filteredMessages.map((message) => (
            <article key={message._id} className={`rounded-2xl border p-5 transition ${!message.read ? 'border-[#f5a623]/20 bg-[#f5a623]/[0.035]' : 'border-white/10 bg-white/[0.02]'}`}>
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div className="flex min-w-0 gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-xs font-bold text-white/60">{message.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()}</div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-white">{message.name}</h3>
                      {!message.read && <span className="rounded-full bg-[#f5a623]/10 px-2 py-0.5 text-[9px] font-bold text-[#f5a623]">Unread</span>}
                    </div>
                    <p className="mt-1 truncate text-xs text-white/30">{message.email}</p>
                    {message.subject && <p className="mt-4 text-sm font-semibold text-white/75">{message.subject}</p>}
                    <p className="mt-1 text-xs leading-5 text-white/40">{message.message}</p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-1 sm:items-start">
                  <span className="mr-2 text-[10px] text-white/25">{formatTime(message.createdAt)}</span>
                  {!message.read && <button disabled={actionId === message._id} onClick={() => markAsRead(message._id)} className="rounded-lg p-2 text-white/30 hover:bg-white/5 hover:text-[#f5a623] disabled:opacity-40" title="Mark as read"><MailOpen size={15} /></button>}
                  <button disabled={actionId === message._id} onClick={() => deleteMessage(message._id)} className="rounded-lg p-2 text-white/30 hover:bg-red-500/10 hover:text-red-300 disabled:opacity-40" title="Delete"><Trash2 size={15} /></button>
                </div>
              </div>
            </article>
          ))}

          {filteredMessages.length === 0 && <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center text-sm text-white/30">{messages.length === 0 ? 'No messages yet.' : 'No messages found.'}</div>}
        </div>
      )}
    </div>
  );
}
