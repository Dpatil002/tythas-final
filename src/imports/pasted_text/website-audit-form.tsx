Update the website so the “Get Website Audit” form is connected to Supabase and stores every submitted lead in a Supabase table.

The form should feel premium, clean, reliable, and business-focused. Match the existing website style.

Use this brand system:
- Background: #F8FAFC
- Card background: #FFFFFF
- Primary text: #0B1220
- Body text: #475569
- Muted text: #64748B
- Accent blue: #2563EB
- Deep blue hover: #1E40AF
- Border: #E2E8F0
- Success green: #16A34A
- Error red: #DC2626
- Headings: Satoshi
- Body: Inter

Goal:
Create a working “Get Website Audit” form that submits data to Supabase.

The form should collect qualified leads and save them into a Supabase table called:

website_audit_requests

Use Supabase environment variables:

For Vite / React:
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

For Next.js:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

Important:
Never expose the Supabase service_role key in frontend code. Use only the anon public key.

Create a Supabase client file.

For Vite / React:

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

For Next.js:

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

Required Supabase table SQL:

create table website_audit_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company_name text,
  website_url text not null,
  email text not null,
  phone text,
  improvement_goal text,
  timeline text,
  budget_range text,
  source text default 'website_audit_form',
  status text default 'new',
  created_at timestamp with time zone default now()
);

Enable Row Level Security:

alter table website_audit_requests enable row level security;

Add insert-only public policy:

create policy "Allow public audit form inserts"
on website_audit_requests
for insert
to anon
with check (true);

Do not add public select, update, or delete policies.

Form Placement:
The form should open when the user clicks any of these CTAs:
- Get Website Audit
- Request Website Audit
- Find What My Website Is Missing

Preferred behavior:
Use a clean modal form for navbar and hero CTA, and also include a visible form card in the Website Audit CTA section.

Form Title:
Request a Website Audit

Supporting text:
Tell us about your website and goals. We’ll review the key areas where your website may be losing clarity, visibility, trust, or enquiries.

Form Fields:

1. Name
Input type: text
Placeholder: Your name
Required: yes
Database column: name

2. Company Name
Input type: text
Placeholder: Company name
Required: no
Database column: company_name

3. Website URL
Input type: url
Placeholder: https://yourwebsite.com
Required: yes
Database column: website_url

Add microcopy below this field:
We’ll review this website for UX, SEO, trust, and lead-capture opportunities.

4. Email
Input type: email
Placeholder: you@company.com
Required: yes
Database column: email

5. Phone Number
Input type: tel
Placeholder: Your phone number
Required: no
Database column: phone

6. What do you want to improve?
Input type: textarea
Placeholder: Example: better leads, SEO, redesign, speed, enquiry flow, custom features...
Required: no
Database column: improvement_goal

7. Timeline
Input type: select
Required: no
Database column: timeline

Options:
- Immediately
- Within 2–4 weeks
- Within 1–2 months
- Just exploring

8. Budget Range
Input type: select
Required: no
Database column: budget_range

Options:
- Below ₹50,000
- ₹50,000 – ₹1,00,000
- ₹1,00,000 – ₹2,50,000
- ₹2,50,000+
- Not sure yet

Add a hidden honeypot spam field:
Field name: website
This field should be invisible to real users.
If this field contains any value, do not submit the form to Supabase.
Do not show any error to spam bots.

Submit Button:
Default text: Submit Audit Request
Loading text: Submitting...
Success text: Request Submitted

Form behavior:
1. Validate required fields.
2. Validate email format.
3. Validate website URL format.
4. If honeypot field has value, stop submission silently.
5. Insert the form data into Supabase table website_audit_requests.
6. Show loading state while submitting.
7. Show success message after submission.
8. Reset the form after successful submission.
9. Show error message if submission fails.

Insert this object into Supabase on submit:

{
  name: form.name,
  company_name: form.company_name,
  website_url: form.website_url,
  email: form.email,
  phone: form.phone,
  improvement_goal: form.improvement_goal,
  timeline: form.timeline,
  budget_range: form.budget_range,
  source: 'website_audit_form',
  status: 'new'
}

Use this insert logic:

const { error } = await supabase
  .from('website_audit_requests')
  .insert([leadData])

If error exists, show the error message.
If there is no error, show the success message and reset the form.

Success Message:
Audit request submitted successfully. We’ll review your website and contact you shortly.

Success style:
- Light green background tint
- Text: #16A34A
- Small check icon

Error Message:
Something went wrong. Please try again or contact us directly.

Show contact numbers below error:
8767977216
7887685816

Error style:
- Light red background tint
- Text: #DC2626

Contact Card:
Add contact details below the form or in a side card.

Title:
Prefer to talk directly?

Phone numbers:
8767977216
7887685816

Location:
Pune, India

Contact card style:
- Background: #F8FAFC
- Border: #E2E8F0
- Border radius: 20px
- Use phone and location icons
- Text color: #0B1220
- Supporting label color: #64748B

UI Design Requirements:

Form Card:
- Background: #FFFFFF
- Border: 1px solid #E2E8F0
- Border radius: 24px
- Padding: 32px
- Soft shadow
- Max width: 720px

Inputs:
- Height: 52px
- Border: 1px solid #CBD5E1
- Focus border: #2563EB
- Border radius: 12px
- Padding: 14px 16px
- Text: #0B1220
- Placeholder: #94A3B8

Textarea:
- Minimum height: 120px
- Border radius: 12px
- Resize vertical only

Submit Button:
- Full width on mobile
- Background: #2563EB
- Hover: #1E40AF
- Text: #FFFFFF
- Border radius: 12px
- Height: 54px
- Font weight: 600

UX Details:
- Keep the form clean and not overwhelming.
- Use two-column fields on desktop.
- Stack fields vertically on mobile.
- Keep required fields visually clear.
- Add privacy microcopy near submit button:
Your details are only used to respond to your audit request.

CTA Button Connections:
Connect these buttons to open the modal form or scroll to the audit form section:
- Navbar Get Website Audit
- Hero Get a Website Audit
- Problem section Find What My Website Is Missing
- Audit CTA Request Website Audit
- Final CTA Get Website Audit

Mobile Behavior:
- Modal should be full width with comfortable padding.
- Form fields should be stacked.
- Submit button should be full width.
- Contact card should appear below the form.
- Avoid tiny text and cramped spacing.

Developer Notes:
Install Supabase package:
npm install @supabase/supabase-js

Use environment variables.
Do not hardcode Supabase keys directly in components.
Use only the Supabase anon key on the frontend.
Do not add public read access to the lead table.

Final Instruction:
Build the form so it is not just visually designed, but functionally ready to submit website audit requests into Supabase.

The final experience should feel simple, trustworthy, fast, secure, and professional.