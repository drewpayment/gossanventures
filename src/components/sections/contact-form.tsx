'use client'

import { useActionState } from 'react'
import { submitLead, type LeadState } from '@/app/actions'

const initialState: LeadState = { status: 'idle' }

const fieldClass =
  'w-full rounded-xl border border-teal-100 bg-cloud px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200'

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitLead, initialState)

  if (state.status === 'success') {
    return (
      <div className="flex h-full min-h-[20rem] flex-col items-center justify-center gap-4 rounded-3xl border border-teal-100 bg-white p-10 text-center shadow-card">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="font-display text-xl font-semibold text-ink">Message received</h3>
        <p className="max-w-sm text-sm text-ink/65">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-4 rounded-3xl border border-teal-100 bg-white p-8 shadow-card">
      {/* Honeypot — hidden from humans */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Jane Doe" />
        <Field label="Work email" name="email" type="email" required placeholder="jane@company.com" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Company" name="company" placeholder="Acme Distribution" />
        <Field label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" />
      </div>

      <label className="flex flex-col gap-1.5 text-sm">
        <span className="font-medium text-ink/80">What can we help with?</span>
        <select name="interest" defaultValue="general" className={fieldClass}>
          <option value="general">Not sure yet — let’s talk</option>
          <option value="freight-brokerage">Freight Brokerage (FTL/LTL)</option>
          <option value="managed-transportation">Managed Transportation</option>
          <option value="supply-chain-consulting">Supply Chain Consulting</option>
          <option value="freight-audit">Freight Audit & Procurement</option>
        </select>
      </label>

      <label className="flex flex-col gap-1.5 text-sm">
        <span className="font-medium text-ink/80">A bit about your freight</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Top lanes, volumes, current pain points, or just say hello."
          className={fieldClass}
        />
      </label>

      {state.status === 'error' ? (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:bg-teal-700 hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? 'Sending…' : 'Request my free assessment'}
      </button>
      <p className="text-center text-xs text-ink/45">
        No spam, no sales theater. We typically reply within one business day.
      </p>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-ink/80">
        {label}
        {required ? <span className="text-teal-500"> *</span> : null}
      </span>
      <input type={type} name={name} required={required} placeholder={placeholder} className={fieldClass} />
    </label>
  )
}
