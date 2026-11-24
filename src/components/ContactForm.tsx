import { useState, type FormEvent } from 'react';

interface Props {
  email: string;
  whatsapp: string;
  web3formsKey: string;
  t: {
    name: string; email: string; message: string; send: string;
    sending: string; ok: string; waContinue: string; err: string; waGreeting: string;
  };
}

export default function ContactForm({ email, whatsapp, web3formsKey, t }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [waLink, setWaLink] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const from = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');

    // Anti-spam (honeypot)
    if (data.get('company')) return;

    setStatus('sending');

    const waText = `${t.waGreeting} ${name}.\n\n${message}\n\n${from}`;
    const waUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(waText)}`;

    try {
      if (web3formsKey) {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `Nuevo contacto web: ${name}`,
            from_name: 'Núcleo Software (web)',
            name,
            email: from,
            message,
          }),
        });
        const json = await res.json();
        if (!json.success) throw new Error('mail');
      } else {
        // Sin clave configurada: fallback a mailto
        const mailto = `mailto:${email}?subject=${encodeURIComponent('Contacto web: ' + name)}&body=${encodeURIComponent(message + '\n\n' + name + ' — ' + from)}`;
        window.location.href = mailto;
      }
      setStatus('ok');
      setWaLink(waUrl);
      form.reset();
      window.open(waUrl, '_blank', 'noopener'); // puede bloquearse; el botón de abajo es el respaldo
    } catch {
      setStatus('err');
    }
  }

  const field =
    'w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3.5 text-text placeholder:text-muted/60 outline-none transition focus:border-brand focus:bg-white/[0.06] focus:ring-4 focus:ring-brand/15';

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="eyebrow !text-muted">{t.name}</span>
          <input name="name" required autoComplete="name" className={field + ' mt-2'} />
        </label>
        <label className="block">
          <span className="eyebrow !text-muted">{t.email}</span>
          <input name="email" type="email" required autoComplete="email" className={field + ' mt-2'} />
        </label>
      </div>
      <label className="block">
        <span className="eyebrow !text-muted">{t.message}</span>
        <textarea name="message" required rows={5} className={field + ' mt-2 resize-none'} />
      </label>
      {/* honeypot */}
      <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full sm:w-auto justify-center disabled:opacity-60">
        {status === 'sending' ? t.sending : t.send}
        <span aria-hidden>→</span>
      </button>

      <p role="status" aria-live="polite" className={'text-sm min-h-5 ' + (status === 'err' ? 'text-red-400' : 'text-brand-soft')}>
        {status === 'ok' && t.ok}
        {status === 'err' && t.err}
      </p>
      {status === 'ok' && waLink && (
        <a href={waLink} target="_blank" rel="noopener" className="btn btn-ghost">
          {t.waContinue} <span aria-hidden>→</span>
        </a>
      )}
    </form>
  );
}
