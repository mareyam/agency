type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'What services does your automation agency provide?',
    answer:
      'We specialize in end-to-end workflow automations, AI voice bots for inbound and outbound calls, CRM integrations, lead nurturing, and custom AI solutions tailored to your business needs.',
  },
  {
    question: 'How can AI voice bots improve my customer service?',
    answer:
      'Our AI voice bots handle repetitive queries, qualify leads, schedule appointments, and route calls—all with natural, human-like interaction—freeing up your team for higher-value tasks.',
  },
  {
    question: 'Can your automation systems integrate with my existing tools?',
    answer:
      'Yes. We integrate seamlessly with CRMs, ERPs, calendars, databases, and communication tools like Twilio, WhatsApp, Slack, and more using platforms like n8n and custom APIs.',
  },
  {
    question: 'Is it possible to automate outbound sales calls with AI?',
    answer:
      'Absolutely. Our AI bots can initiate outbound calls, pitch your offer, qualify leads, and even follow up—24/7—with personalized scripts based on customer data.',
  },
  {
    question: 'What’s the onboarding process like?',
    answer:
      'We start with a free consultation to understand your workflows and goals, then design, develop, and deploy custom automation or voice bot solutions, followed by training and support.',
  },
  {
    question: 'Do you offer support and maintenance after deployment?',
    answer:
      'Yes, we provide continuous monitoring, performance optimization, and on-demand support to ensure your automations and bots run smoothly over time.',
  },
];
