"use client";

import React from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import { motion } from "framer-motion";
import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/contact";

// Change this whenever the policy text changes (section 6 refers to it).
const LAST_UPDATED = "27 October 2026";

const PrivacyPage = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background text-foreground"
    >
        <Navbar />
        <main className="pt-28 pb-20">
            <div className="container max-w-4xl mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-sm font-semibold text-slate-500 mb-6">Last updated: {LAST_UPDATED}</p>
                    <p className="text-slate-600 leading-relaxed text-justify">
                        For ease of reference, use of the terms "LEARNSQUARE", "we", "us" and/or "our" refer to LEARNSQUARE TECHNOLOGIES PRIVATE LIMITED – a company incorporated in India and all of its affiliates which have a licence to host the Platform and offer Services. LEARNSQUARE deeply respects your privacy and is committed to protecting it. This Privacy Policy explains the types of information collected by LEARNSQUARE when you use the Platform / LMS / Website / App that references this Policy, how we collect, use, share and store such information collected and also explains the rationale for collection of such information, the privacy rights and choices you have regarding your information submitted to us when you use the Services. The Services are governed by this Policy, and any other rules, policies or guidelines published on the Platform as applicable to you. Please read this Policy carefully prior to accessing our Platform and using the Services.
                    </p>
                    <p className="text-slate-600 leading-relaxed mt-4 text-justify">
                        This Privacy Policy for LEARNSQUARE TECHNOLOGIES PRIVATE LIMITED ("Company", "we", "us" or "our") describes how and why we might collect, store, use and/or share ("process") your information when you use our services ("Services"), such as when you visit our website at <a href="https://learnsquare.co" className="text-primary font-semibold hover:underline">learnsquare.co</a>, or download and use our mobile application (LEARNSQUARE) or engage with us in other related ways, including any sales, marketing, or events.
                    </p>
                    <p className="text-slate-600 leading-relaxed mt-4 text-justify">
                        <strong>Questions or concerns?</strong> Reading this Privacy Policy will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-semibold hover:underline">{SUPPORT_EMAIL}</a>.
                    </p>
                </div>

                <section className="mb-12 p-8 rounded-2xl bg-slate-50 border border-slate-100">
                    <h2 className="text-2xl font-black text-slate-900 mb-4">Summary of key points</h2>
                    <p className="text-slate-600 leading-relaxed mb-6 text-justify">
                        This summary provides key points from our Privacy Policy, but you can find out more details about any of these topics below following each key point or by using our table of contents below to find the section you are looking for.
                    </p>
                    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">What personal information do we process?</h3>
                    <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                        When you visit, use, or navigate our Services, we may process personal information depending on how you interact with LEARNSQUARE and the Services, the choices you make, and the products and features you use. Do we process any sensitive personal information? We do not process sensitive personal information.
                    </p>
                    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">How do we process your information?</h3>
                    <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                        We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.
                    </p>
                    <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">What are your rights?</h3>
                    <p className="text-slate-600 leading-relaxed text-justify">
                        Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
                    </p>
                </section>

                <section className="mb-12 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-black text-slate-900 mb-4">Table of contents</h3>
                    <ul className="list-disc pl-6 space-y-1 text-slate-600">
                        <li>What information do we collect?</li>
                        <li>How do we process your information?</li>
                        <li>When and with whom do we share your personal information?</li>
                        <li>How long do we keep your information?</li>
                        <li>What are your privacy rights?</li>
                        <li>Do we make updates to this notice?</li>
                        <li>How can you contact us about this notice?</li>
                    </ul>
                </section>

                <section className="mb-10 p-8 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="text-xl font-black text-slate-900 mb-2">1. What information do we collect?</h3>
                    <h4 className="text-base font-bold text-slate-800 mb-2">Personal information you disclose to us</h4>
                    <p className="text-slate-600 leading-relaxed mb-4 pt-2 text-justify">
                        <strong>In short:</strong> We collect personal information that you provide to us. We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                        Personal information provided by you: the personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                        <li>Name, mobile number, email ID, educational details, etc.</li>
                        <li><strong>Sensitive information:</strong> We do not process sensitive information.</li>
                        <li><strong>Payment data:</strong> We may collect data necessary to process your payment if you make purchases.</li>
                        <li><strong>Application data:</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission: push notifications. We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings. This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes. All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</li>
                    </ul>
                </section>

                <section className="mb-10 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-black text-slate-900 mb-4">2. How do we process your information?</h3>
                    <p className="text-slate-600 leading-relaxed mb-4 text-justify"><strong>In short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
                    <p className="text-slate-600 leading-relaxed mb-4 text-justify"><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></p>
                    <p className="text-slate-600 leading-relaxed mb-4 text-justify"><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</p>
                    <p className="text-slate-600 leading-relaxed mb-4 text-justify"><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</p>
                    <p className="text-slate-600 leading-relaxed mb-4 text-justify"><strong>To respond to user enquiries/offer support to users.</strong> We may process your information to respond to your enquiries and solve any potential issues you might have with the requested service.</p>
                    <p className="text-slate-600 leading-relaxed text-justify"><strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</p>
                </section>

                <section className="mb-10 p-8 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="text-xl font-black text-slate-900 mb-4">3. When and with whom do we share your personal information?</h3>
                    <p className="text-slate-600 leading-relaxed mb-4 text-justify"><strong>In short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>
                    <p className="text-slate-600 leading-relaxed mb-4 text-justify"><strong>We may need to share your personal information in the following situations:</strong></p>
                    <p className="text-slate-600 leading-relaxed text-justify"><strong>Business transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
                </section>

                <section className="mb-10 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-black text-slate-900 mb-4">4. How long do we keep your information?</h3>
                    <p className="text-slate-600 leading-relaxed text-justify">
                        <strong>In short:</strong> We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Policy unless otherwise required by law. We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us to keep your personal information for longer than the period of time in which users have an account with us. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                    </p>
                </section>

                <section className="mb-10 p-8 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="text-xl font-black text-slate-900 mb-4">5. What are your privacy rights?</h3>
                    <p className="text-slate-600 leading-relaxed mb-4 text-justify"><strong>In short:</strong> You may review, change, or terminate your account at any time.</p>
                    <p className="text-slate-600 leading-relaxed mb-4 text-justify"><strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us at {SUPPORT_EMAIL}. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>
                    <p className="text-slate-600 leading-relaxed text-justify">
                        <strong>Account information</strong><br />
                        If you would at any time like to review or change the information in your account or terminate your account, you can log in to your account settings and update your user account, or contact us using the contact information provided. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements. If you have questions or comments about your privacy rights, you may email us at <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-semibold hover:underline">{SUPPORT_EMAIL}</a>.
                    </p>
                </section>

                <section className="mb-10 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-black text-slate-900 mb-4">6. Do we make updates to this notice?</h3>
                    <p className="text-slate-600 leading-relaxed text-justify">
                        <strong>In short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws. We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date at the top of this page and will be effective as soon as it is accessible. If we make material changes to this Privacy Policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
                    </p>
                </section>

                <section className="mb-10 p-8 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="text-xl font-black text-slate-900 mb-4">7. How can you contact us about this notice?</h3>
                    <p className="text-slate-600 leading-relaxed text-justify">
                        If you have questions or comments about this notice, you may email us at <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-semibold hover:underline">{SUPPORT_EMAIL}</a>.
                    </p>
                </section>

                <div className="pt-6">
                    <Link href="/" className="text-primary font-bold hover:underline">← Back to home</Link>
                </div>
            </div>
        </main>
        <Footer />
        <WhatsAppButton />
    </motion.div>
);

export default PrivacyPage;
