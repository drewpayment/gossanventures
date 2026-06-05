'use server'

import { Resend } from 'resend'
import { siteSettings } from '@/lib/site'

export interface LeadState {
  status: 'idle' | 'success' | 'error'
  message?: string
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

const INTEREST_LABELS: Record<string, string> = {
  'freight-brokerage': 'Freight Brokerage (FTL/LTL)',
  'managed-transportation': 'Managed Transportation',
  'supply-chain-consulting': 'Supply Chain Consulting',
  'freight-audit': 'Freight Audit & Procurement',
  general: 'Not sure yet',
}

const SUCCESS = 'Thanks — we’ll be in touch within one business day.'

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!))

interface Lead {
  name: string
  email: string
  company: string
  phone: string
  interest: string
  message: string
}

function renderHtml(lead: Lead) {
  const interest = INTEREST_LABELS[lead.interest] || lead.interest
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:6px 16px 6px 0;color:#5b6b6f;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#102f36;font-size:14px">${esc(value)}</td></tr>`
      : ''
  return `<!doctype html><html><body style="margin:0;background:#fbfaf6;padding:24px;font-family:Arial,Helvetica,sans-serif">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #d6e9eb;border-radius:16px;overflow:hidden">
    <div style="background:#1c5f6e;padding:20px 24px;color:#fff;font-size:16px;font-weight:bold">New enquiry — Gossan Ventures</div>
    <div style="padding:24px">
      <table style="border-collapse:collapse;width:100%">
        ${row('Name', lead.name)}
        ${row('Email', lead.email)}
        ${row('Company', lead.company)}
        ${row('Phone', lead.phone)}
        ${row('Interest', interest)}
      </table>
      ${
        lead.message
          ? `<div style="margin-top:16px;padding-top:16px;border-top:1px solid #e4f2f1">
               <div style="color:#5b6b6f;font-size:13px;margin-bottom:6px">Message</div>
               <div style="color:#102f36;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(lead.message)}</div>
             </div>`
          : ''
      }
    </div>
  </div></body></html>`
}

function renderText(lead: Lead) {
  const interest = INTEREST_LABELS[lead.interest] || lead.interest
  return [
    'New enquiry — Gossan Ventures',
    '',
    `Name:     ${lead.name}`,
    `Email:    ${lead.email}`,
    lead.company ? `Company:  ${lead.company}` : '',
    lead.phone ? `Phone:    ${lead.phone}` : '',
    `Interest: ${interest}`,
    '',
    lead.message ? `Message:\n${lead.message}` : '',
  ]
    .filter(Boolean)
    .join('\n')
}

/**
 * Contact-form handler. Emails the lead to LEAD_TO_EMAIL via Resend.
 *
 * Required env vars in production:
 *   RESEND_API_KEY   - your Resend API key
 *   LEAD_TO_EMAIL    - inbox that should receive enquiries
 *   LEAD_FROM_EMAIL  - verified sender, e.g. "Gossan Ventures <leads@yourdomain.com>"
 *
 * Without RESEND_API_KEY (e.g. local dev) it logs the lead and returns success.
 */
export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Honeypot: bots fill hidden fields. Pretend success and drop it.
  if (String(formData.get('website') || '').trim() !== '') {
    return { status: 'success', message: SUCCESS }
  }

  const lead: Lead = {
    name: String(formData.get('name') || '').trim(),
    email: String(formData.get('email') || '').trim(),
    company: String(formData.get('company') || '').trim(),
    phone: String(formData.get('phone') || '').trim(),
    interest: String(formData.get('interest') || 'general').trim(),
    message: String(formData.get('message') || '').trim(),
  }

  if (!lead.name || !lead.email) {
    return { status: 'error', message: 'Please share your name and email so we can reach you.' }
  }
  if (!EMAIL_RE.test(lead.email)) {
    return { status: 'error', message: 'That email address doesn’t look right — mind double-checking it?' }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEAD_TO_EMAIL || siteSettings.email
  const from = process.env.LEAD_FROM_EMAIL || 'Gossan Ventures <onboarding@resend.dev>'

  if (!apiKey) {
    console.warn('[lead] RESEND_API_KEY not set; logging instead of emailing:', lead)
    return { status: 'success', message: SUCCESS }
  }

  try {
    const resend = new Resend(apiKey)
    const subjectCompany = lead.company ? ` (${lead.company})` : ''
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: lead.email,
      subject: `New enquiry from ${lead.name}${subjectCompany}`,
      html: renderHtml(lead),
      text: renderText(lead),
    })

    if (error) {
      console.error('[lead] Resend returned an error:', error)
      return {
        status: 'error',
        message: 'Something went wrong sending your message. Please try again or email us directly.',
      }
    }

    return { status: 'success', message: SUCCESS }
  } catch (err) {
    console.error('[lead] failed to send via Resend:', err)
    return {
      status: 'error',
      message: 'Something went wrong on our end. Please try again or email us directly.',
    }
  }
}
