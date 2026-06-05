'use server'

export interface LeadState {
  status: 'idle' | 'success' | 'error'
  message?: string
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

/**
 * Contact-form handler.
 *
 * The site has no backend/CMS, so for now we validate input and log the lead
 * server-side. To actually deliver leads, wire one of these in below:
 *   - an email provider (e.g. Resend / SendGrid)
 *   - a form service (e.g. Formspree)
 *   - a Slack / webhook notification
 */
export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Honeypot: bots fill hidden fields. Pretend success and drop it.
  if (String(formData.get('website') || '').trim() !== '') {
    return { status: 'success', message: 'Thanks — we’ll be in touch within one business day.' }
  }

  const lead = {
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

  // TODO: replace this log with a real delivery integration.
  console.info('[lead] new contact submission:', lead)

  return { status: 'success', message: 'Thanks — we’ll be in touch within one business day.' }
}
