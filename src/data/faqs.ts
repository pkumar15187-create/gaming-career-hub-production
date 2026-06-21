import { FAQItem } from '../types';

export const INITIAL_FAQS: FAQItem[] = [
  // 1. Account (4 FAQs)
  {
    id: "faq-acc-1",
    category: "Account",
    question: "How do I create and verify my account on Gaming Career Hub?",
    answer: "To set up your professional gaming profile, click the 'Register' button on the navigation bar, input your active email address, and establish a password. After logging in, navigate to 'My Profile' to connect your in-game identification handles like BGMI Character ID or Valorant Riot ID. Complete your profile verification to unlock custom tournaments and real-time dashboard analytics.",
    status: "published",
    isFeatured: true,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-acc-2",
    category: "Account",
    question: "Can I connect multiple game IDs to a single account?",
    answer: "Yes, you can register and save one verified handle per gaming division (e.g., one BGMI ID, one Valorant tag, and one Call of Duty handle) on your single-account dashboard. This maintains clean individual career progress logs and MMR tracking parameters while preventing cross-game account confusion.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-acc-3",
    category: "Account",
    question: "How do I change my registered email or in-game nickname?",
    answer: "Registered email addresses are permanently linked to your profile to prevent transfer scams. However, if you need a critical correction due to a spelling typo or game name change, open a ticket via the 'Contact Support' form or contact our administration. Include screenshots of your game client profile as proof.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-acc-4",
    category: "Account",
    question: "What happens if my profile has incorrect stats or game handles?",
    answer: "Lobby verification systems check in-game nicknames and IDs against tournament team sheets. If you register incorrect handles, you won't clear automated anti-cheat checkpoints or join custom rooms. Always audit your nickname and ID string inside 'My Profile' before clicking match-register buttons.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },

  // 2. Registration (4 FAQs)
  {
    id: "faq-reg-1",
    category: "Registration",
    question: "How do I register for a specific competitive tournament?",
    answer: "Browse the 'Tournaments' tab on the homepage or navigation rail, examine the schedule, entry requirements, and prize pools. Select an active lobby, verify you hold the required Diamond entry credits or VIP Membership eligibility, and select your roster format (Solo, Duo, or Squad). Click 'Confirm Registration' to secure your seat.",
    status: "published",
    isFeatured: true,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-reg-2",
    category: "Registration",
    question: "What are the common validation blocks during tournament registration?",
    answer: "Common obstacles include holding an insufficient Diamond balance, an unlinked game ID for that title, entering after the registration cutoff timer, or a fully occupied slot grid. Check the warning toasts to resolve these issues instantly.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-reg-3",
    category: "Registration",
    question: "Can I cancel my slot registration and receive a refund?",
    answer: "Yes, you can leave tournaments up to 60 minutes before the scheduled start time. Go to your dashboard registry panel and click 'Exit Tournament'. The system will process an instantaneous, 100% refund of your entry diamonds to your active wallet balance.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-reg-4",
    category: "Registration",
    question: "How do registration lock times work?",
    answer: "Lobbies lock precisely 60 minutes before the matches start. After the registration lock, you cannot register, edit rosters, or exit for diamond refunds. This gives administrators sufficient time to construct custom room grids and coordinate broadcasts.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },

  // 3. Login (4 FAQs)
  {
    id: "faq-log-1",
    category: "Login",
    question: "I forgot my password. How can I regain access to my account?",
    answer: "If you cannot log in, click the 'Forgot Password' link on the login window. Enter your registered email address, and our system will forward a recovery link. Follow the directions to reset your credential matrix smoothly.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-log-2",
    category: "Login",
    question: "Can I log in using third-party social credentials?",
    answer: "Currently, our platform supports high-security email/password authentication alongside native Supabase Auth integrations. Social log-ins for Google and Discord are undergoing safety evaluation and will arrive in our next development phase.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-log-3",
    category: "Login",
    question: "Why does my account say 'Session Expired' periodically?",
    answer: "To secure your wallet assets, our servers initiate a session rotation check every 7 days. If your session expires, just input your login credentials to establish a clean, encrypted connection token.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-log-4",
    category: "Login",
    question: "What should I do if my login is locked due to multiple failed tries?",
    answer: "To repel brute-force hacks, the platform places a temporary 15-minute lock after 5 unsuccessful password attempts. Wait out the cooldown period or complete a secure Password Reset sequence to bypass the lockout.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },

  // 4. Membership (4 FAQs)
  {
    id: "faq-mem-1",
    category: "Membership",
    question: "What features are unlocked with elite VIP Elite Memberships?",
    answer: "VIP Elite Membership unlocks free entry to selected high-reward premium tournaments, premium visual avatar profiles frames, a high-contrast 'Elite Tier' badge, double referral conversion multipliers, and high-priority withdrawal clearance through our administrative desk.",
    status: "published",
    isFeatured: true,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-mem-2",
    category: "Membership",
    question: "Are memberships on recurring auto-renewal?",
    answer: "No, we respect your financial autonomy. All membership plans (30-day passes or seasonal packages) require manual purchase. We never save secret credit cards or trigger surprise bank auto-renewals.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-mem-3",
    category: "Membership",
    question: "How do I upgrade from a Basic account to VIP Membership?",
    answer: "Head over to the 'Membership Benefits' panel, select your preferred pass (Bronze, Silver, Gold, or Ultimate Platinum), enter active coupons to secure discounts, upload your payment proof (receipt screenshot), and click 'Submit'. Admin validates the proof within 30-120 minutes.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-mem-4",
    category: "Membership",
    question: "Can I cancel my elite VIP membership plan?",
    answer: "Yes, you can request plan cancellations at any time through our transparent 'Terms & Cancellations' portal. Select your reason, submit feedback, and your account will flag off renewal. Note that previously processed plan purchases are non-refundable.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },

  // 5. Diamond Wallet (4 FAQs)
  {
    id: "faq-wal-1",
    category: "Diamond Wallet",
    question: "What is the difference between Top-up Diamonds and Winning Diamonds?",
    answer: "First, 'Top-up Diamonds' are purchased credits used strictly to register for paid matchmaking rooms. They cannot be withdrawn. In contrast, 'Winning Diamonds' are earned by placing in tournaments or winning leaderboards. These are fully eligible for direct UPI withdrawals to your bank.",
    status: "published",
    isFeatured: true,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-wal-2",
    category: "Diamond Wallet",
    question: "How do I inspect my physical statement logs?",
    answer: "Navigate to 'My Wallet'. There you can view detailed chronological logs tracking purchase receipts, tournament entries, exit refunds, and withdrawal events with transaction IDs.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-wal-3",
    category: "Diamond Wallet",
    question: "Can I transfer diamonds directly to a friend's profile?",
    answer: "To block money laundering and account hijacking, peer-to-peer balance transfers of both top-up and winning diamonds are strictly disabled. Diamonds are restricted to the originating owner's profile.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-wal-4",
    category: "Diamond Wallet",
    question: "Why has my diamond balance been locked or placed on hold?",
    answer: "We lock diamond balances when gameplay audits track cheating, match-fixing, or fraudulent UPI payment screenshots. If your account is innocent, please submit a support ticket with your transaction and match details for review.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },

  // 6. Top-up (4 FAQs)
  {
    id: "faq-top-1",
    category: "Top-up",
    question: "How do I buy diamonds to top up my wallet balance?",
    answer: "Go to your Wallet dashboard, specify the volume of diamonds you want (e.g. 100, 500, or 1000 Pack), copy our official administrative UPI address, make the payment through your UPI app (GPay, PhonePe, Paytm), enter your 12-digit UPI reference number, upload the screenshot, and submit. Approval is completed quickly by our moderators.",
    status: "published",
    isFeatured: true,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-top-2",
    category: "Top-up",
    question: "What is the processing time for top-up diamond approvals?",
    answer: "Our administrative desk operates 24/7. Most top-up requests are approved and credited within 20 to 60 minutes. If your request is stuck beyond 2 hours, double-check that your submitted UPI reference number matches your payment receipt exactly.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-top-3",
    category: "Top-up",
    question: "What happens if I submit an incorrect UPI UTR/Reference number?",
    answer: "Submitting mismatched UTR numbers leads to automatic system rejection to block transaction spam. If you made an honest typo, create a new top-up request with the correct 12-digit UTR string and the original screenshot.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-top-4",
    category: "Top-up",
    question: "Are card payments, net banking, or wallets supported for top-ups?",
    answer: "To reduce transaction fees and provide the fastest verification, we use standard Unified Payments Interface (UPI) transfers. This allows direct bank-to-bank transfers with zero commissions for grassroots gamers.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },

  // 7. Withdraw (4 FAQs)
  {
    id: "faq-wit-1",
    category: "Withdraw",
    question: "How do withdrawals work and what is the minimum payout?",
    answer: "Open your wallet dashboard, write down your desired payout volume of winning diamonds, supply your verified personal UPI handle, and submit. The minimum withdrawal threshold is 500 Winning Diamonds. There are no fees, and payments are sent directly to your UPI handle.",
    status: "published",
    isFeatured: true,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-wit-2",
    category: "Withdraw",
    question: "What are 'locked_withdraw_diamonds'?",
    answer: "When you request a withdrawal, those winning diamonds are moved to 'locked_withdraw_diamonds' in our database. This prevents double-spending in active lobbies while our security team audits the match logs. Once approved, the funds are sent and the lock clears.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-wit-3",
    category: "Withdraw",
    question: "How long does it take for my withdrawal to clear?",
    answer: "Standard withdrawals are processed within 24-72 hours. Elite VIP players benefit from prioritized queues, typically clearing within 12 hours. If any of your matches are flagged for suspicious activity, the transaction may be held for a full 7-day gameplay review.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-wit-4",
    category: "Withdraw",
    question: "Why was my withdrawal request rejected?",
    answer: "Withdrawals are rejected if the destination UPI address is invalid, or if our anti-cheat system flags your account for hacks or teaming in any recent cash-prize slots. Rejected balances are returned to your wallet or frozen pending appeal.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },

  // 8. Tournaments (4 FAQs)
  {
    id: "faq-trn-1",
    category: "Tournaments",
    question: "How is fair play and competitive integrity maintained?",
    answer: "We use a strict validation framework. Players must submit match victory screenshots within 30 minutes of a game's conclusion. Our referee panel audits these uploads, and verified winnings are deposited directly into your winning_diamonds balance.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-trn-2",
    category: "Tournaments",
    question: "What happens if a player leaves or forfeits a tournament?",
    answer: "If you leave at least 60 minutes prior to setup, you receive an instant 100% diamond refund. Leaving during active matchmaking or failing to join the room is considered a forfeit, and the entry fee is distributed to the prize pool.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-trn-3",
    category: "Tournaments",
    question: "How long does it take for referees to distribute tournament prizes?",
    answer: "Once matches end and screenshots are uploaded, prize distribution takes 1-3 hours. Referees review lobby logs to filter out hackers before releasing the payouts.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-trn-4",
    category: "Tournaments",
    question: "Can I participate from a simulator or PC emulator?",
    answer: "Emulator participation is strictly forbidden in mobile-only categories (BGMI, Free Fire MAX) unless explicitly marked. Simulators are detected instantly by our anti-cheat tools, resulting in slot disqualification with zero refunds.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },

  // 9. Room ID & Password (4 FAQs)
  {
    id: "faq-rm-1",
    category: "Room ID & Password",
    question: "Where do I retrieve the custom Room ID and secret Password?",
    answer: "The Room ID and Password are shown directly on your dashboard tournament card exactly 15 minutes before the match start time. Ensure you are logged in and click on the specific tournament item to view the credentials.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-rm-2",
    category: "Room ID & Password",
    question: "Why can't I see the Room ID and Password coordinates?",
    answer: "Ensure you are registered for the event and the starting countdown is under 15 minutes. Try refreshing the page. If registration locked and you aren't on the roster, the credentials will remain hidden to prevent lobby-crashing.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-rm-3",
    category: "Room ID & Password",
    question: "What happens if I share the Room details with unregistered friends?",
    answer: "Sharing Room credentials with unregistered players violates our fair play agreement. Unregistered individuals are kicked from the room, and the originating sharer faces immediate account suspension and a total freeze of prize balances.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-rm-4",
    category: "Room ID & Password",
    question: "What should I do if the Room host sets the wrong match parameters?",
    answer: "If the room host establishes incorrect maps, modes, or spectator scopes, do not enter. Take screenshot evidence and forward it immediately to our support handle so referees can pause the lobby, reschedule, or process manual refunds.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },

  // 10. Referral (4 FAQs)
  {
    id: "faq-ref-1",
    category: "Referral",
    question: "How does the referral bonus program operate?",
    answer: "Go to your Profile page and copy your custom Referral Link. Share it with friends. When a friend signs up and completes their first top-up transaction, you will instantly receive a bonus in your Diamond wallet.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-ref-2",
    category: "Referral",
    question: "Is there a maximum cap on referral diamonds I can collect?",
    answer: "There are no limits on the number of players you can refer. Our top promoters earn thousands of diamonds daily by referring gaming guild networks and Esports teams.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-ref-3",
    category: "Referral",
    question: "Why haven't I received credit for a referral signup?",
    answer: "To earn the bonus, your referred player must use your exact link or input your UID, verify their phone/email, and finalize at least one top-up purchase. If they register without the code, the connection cannot be made retroactively.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-ref-4",
    category: "Referral",
    question: "Are there penalties for creating fake accounts under my link?",
    answer: "Yes. Using bots to generate dummy accounts under your own referral code is flagged as system fraud. Accounts linked to referral exploits are permanently banned with all balances forfeited.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },

  // 11. Promo Codes (4 FAQs)
  {
    id: "faq-prm-1",
    category: "Promo Codes",
    question: "How do I redeem coupons and promotional codes?",
    answer: "You can apply promotional codes during checkout for memberships and diamond top-ups. Input the code into the promo field and click 'Apply Coupon' to instantly reduce the required secure payment amount.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-prm-2",
    category: "Promo Codes",
    question: "Where do I find verified active promo codes?",
    answer: "We distribute active codes through our official Telegram broadcast channels, seasonal influencer streams, discord announcements, and special promotional banners displayed on the homepage.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-prm-3",
    category: "Promo Codes",
    question: "Can I combine multiple promo codes on a single purchase?",
    answer: "Our checkout system allows only one promotion code per invoice. Mashing codes is disabled. Always choose the highest discount offer for your transaction size.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-prm-4",
    category: "Promo Codes",
    question: "Why does my coupon code show 'Invalid or Expired'?",
    answer: "This warning indicates the coupon has reached its total global redemption limit, has expired, or is restricted to first-time buyers. Double-check spelling and terms before trying another code.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },

  // 12. Payments (4 FAQs)
  {
    id: "faq-pay-1",
    category: "Payments",
    question: "What is the procedure for verifying cash payment proofs?",
    answer: "Once a UPI receipt screenshot is uploaded, our automated system parses the image metadata. Next, a human moderator cross-checks the 12-digit UTR/Reference code against bank ledger logs. The transaction clears once matched.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-pay-2",
    category: "Payments",
    question: "What happens if my UPI transaction fails but money is deducted?",
    answer: "If your banking app deducts cash but shows a failure, wait 2 hours. UPI protocols usually auto-refund failed transfers back to your account. If the payment clears but is stuck, create a top-up request with the UTR.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-pay-3",
    category: "Payments",
    question: "Are there any service tax fees levied on payouts?",
    answer: "We do not deduct hidden commissions or handling charges on withdrawals. You receive the exact cash value of your winnings via UPI.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-pay-4",
    category: "Payments",
    question: "Can I cancel my payment request or invoice once filed?",
    answer: "Unpaid invoices remain pending on the database and can be cancelled. Once a payment proof is uploaded and sent for admin review, the transaction cannot be cancelled manually. If rejected, it will be marked cancelled in your logs.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },

  // 13. Security (3 FAQs)
  {
    id: "faq-sec-1",
    category: "Security",
    question: "How are my user data and wallet assets secured?",
    answer: "We employ robust security protocols. All sessions are authenticated via Supabase security headers and protected behind end-to-end HTTPS. Sensitive wallet variables are strictly managed server-side of the ledger data.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-sec-2",
    category: "Security",
    question: "Will I ever be asked for my account password?",
    answer: "No. Staff and administrators will never request your password, credit details, or PINs. If someone claiming to represent Gaming Career Hub asks for credentials, report them immediately.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-sec-3",
    category: "Security",
    question: "What should I do if I suspect someone has logged into my account?",
    answer: "If you detect unusual account changes, go to 'My Profile' and trigger a Password Reset instantly. This invalidates all active session tokens on any other device, restoring exclusive physical ownership.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },

  // 14. Technical Issues (3 FAQs)
  {
    id: "faq-tec-1",
    category: "Technical Issues",
    question: "The platform screens appear outdated or updates aren't rendering. How do I fix it?",
    answer: "This is usually caused by stagnant local cache files. Perform a hard-refresh by holding Shift and clicking the refresh icon on your browser, or clear your browser's data storage to sync with our servers instantly.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-tec-2",
    category: "Technical Issues",
    question: "Why can't I upload my tournament screenshot proof?",
    answer: "Verify your image format is.png,.jpg, or.webp, and the size is under 5MB. Large image files fail to process. Compressing the screenshot resolves upload bottlenecks immediately.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  },
  {
    id: "faq-tec-3",
    category: "Technical Issues",
    question: "My dashboard is loading slowly. What is the cause of this latency?",
    answer: "This is usually due to high network latency. Close background downloads, check your local bandwidth, or disable intensive extensions (like heavy VPN layers) to optimize server speed.",
    status: "published",
    isFeatured: false,
    created_at: "2026-06-21T07:12:44-07:00"
  }
];
