'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export interface LeadState {
  status: 'idle' | 'success' | 'error'
  message?: string
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Honeypot: bots fill hidden fields. Pretend success and drop it.
  if (String(formData.get('website') || '').trim() !== '') {
    return { status: 'success', message: 'Thanks — we’ll be in touch within one business day.' }
  }

  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const company = String(formData.get('company') || '').trim()
  const phone = String(formData.get('phone') || '').trim()
  const interest = String(formData.get('interest') || '').trim()
  const message = String(formData.get('message') || '').trim()

  if (!name || !email) {
    return { status: 'error', message: 'Please share your name and email so we can reach you.' }
  }
  if (!EMAIL_RE.test(email)) {
    return { status: 'error', message: 'That email address doesn’t look right — mind double-checking it?' }
  }

  if (!process.env.DATABASE_URI || !process.env.PAYLOAD_SECRET) {
    console.warn('[submitLead] CMS not configured; lead not persisted:', { name, email, company })
    return {
      status: 'error',
      message: 'Our form isn’t connected yet. Please email us directly and we’ll respond right away.',
    }
  }

  try {
    const payload = await getPayload({ config })
    await payload.create({
      collection: 'leads',
      data: {
        name,
        email,
        company,
        phone,
        interest: (interest || 'general') as
          | 'freight-brokerage'
          | 'managed-transportation'
          | 'supply-chain-consulting'
          | 'freight-audit'
          | 'general',
        message,
        status: 'new',
      },
    })
    return { status: 'success', message: 'Thanks — we’ll be in touch within one business day.' }
  } catch (err) {
    console.error('[submitLead] failed to persist lead:', err)
    return {
      status: 'error',
      message: 'Something went wrong on our end. Please try again or email us directly.',
    }
  }
}
