import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
          <p className="text-slate-600 leading-relaxed">
            For Ease of Reference, Use of the Terms "LEARNSQUARE", "we", "us, and/or "our" refer to LEARNSQUARE TECHNOLOGIES PRIVATE LIMITED – a Company Incorporated in India and all of its affiliates which have License to host the Platform and offer Services. LEARNSQUARE Deeply Respects your Privacy and is Committed to Protect it. This Privacy Policy Explains the Types of Information Collected by LEARNSQUARE when you use the Platform / LMS / Website / App that references this Policy, how we collect, use, share and store such information collected and also explains the rationale for collection of such information, the privacy rights and choices you have regarding your information submitted to us when you use the Services. The Services are governed by this Policy, and any other rules, policies or guidelines published on the Platform as applicable to you. Please read this Policy carefully prior to accessing our Platform and using the Services.
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            This Privacy Policy for LEARNSQUARE Referring to LEARNSQUARE TECHNOLOGIES PRIVATE LIMITED ('Company', 'we', 'us', or 'our'), describes how and why we might collect, store, use, and/or share ('process') your information when you use our services ('Services'), such as when you Visit our website at <a href="https://www.learnsquare.co" className="text-primary font-semibold hover:underline">www.learnsquare.co</a>, or Download and use our Mobile Application (LEARNSQUARE) or Engage with us in other related ways, including any sales, marketing, or events.
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            <strong>Questions or Concerns?</strong> Reading this Privacy Policy will help you understand your Privacy Rights and choices. If you do not agree with our Policies and Practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:info@learnsquare.co" className="text-primary font-semibold hover:underline">info@learnsquare.co</a>
          </p>
        </div>

        <section className="mb-12 p-8 rounded-2xl bg-slate-50 border border-slate-100">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Summary of Key Points</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            This Summary Provides Key points from our Privacy Policy, but you can find out more details about any of these topics below following each key point or by using our table of contents below to find the section you are looking for.
          </p>
          <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">What Personal Information do we Process?</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            When you visit, use, or navigate our Services, we may process personal information depending on how you interact with LEARNSQUARE and the Services, the choices you make, and the products and features you use. Do we Process any Sensitive Personal Information? We do not process sensitive personal information.
          </p>
          <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">How do we process your information?</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.
          </p>
          <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">What are your rights?</h3>
          <p className="text-slate-600 leading-relaxed">
            Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
          </p>
        </section>

        <section className="mb-12 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
          <h3 className="text-xl font-black text-slate-900 mb-4">Table of Contents</h3>
          <p className="font-bold text-slate-700 mb-2">WHAT INFORMATION DO WE COLLECT?</p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600">
            <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
            <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
            <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
          </ul>
        </section>

        <section className="mb-10 p-8 rounded-2xl bg-slate-50 border border-slate-100">
          <h3 className="text-xl font-black text-slate-900 mb-4">1. What Information do we Collect? Personal information you disclose to us</h3>
          <p className="text-slate-600 leading-relaxed mb-4 pt-2">
            <strong>In Short:</strong> We collect personal information that you provide to us. We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Personal Information Provided by You: The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Name, Mobile Number, E-Mail ID, Educational Details etc.</li>
            <li><strong>Sensitive Information:</strong> We do not process sensitive information.</li>
            <li><strong>Payment Data:</strong> We may collect data necessary to process your payment if you make purchases.</li>
            <li><strong>Application Data:</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission: Push Notifications. We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings. This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes. All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</li>
          </ul>
        </section>

        <section className="mb-10 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
          <h3 className="text-xl font-black text-slate-900 mb-4">2. How do we Process Your Information?</h3>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</p>
          <p className="text-slate-600 leading-relaxed mb-4">To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</p>
          <p className="text-slate-600 leading-relaxed"><strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</p>
        </section>

        <section className="mb-10 p-8 rounded-2xl bg-slate-50 border border-slate-100">
          <h3 className="text-xl font-black text-slate-900 mb-4">3. When And With Whom Do We Share Your Personal Information?</h3>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>We may need to share your personal information in the following situations:</strong></p>
          <p className="text-slate-600 leading-relaxed"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
        </section>

        <section className="mb-10 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
          <h3 className="text-xl font-black text-slate-900 mb-4">4. How Long Do We Keep Your Information?</h3>
          <p className="text-slate-600 leading-relaxed">
            <strong>In Short:</strong> We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Policy unless otherwise required by law. We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
          </p>
        </section>

        <section className="mb-10 p-8 rounded-2xl bg-slate-50 border border-slate-100">
          <h3 className="text-xl font-black text-slate-900 mb-4">5. What Are Your Privacy Rights?</h3>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>In Short:</strong> You may review, change, or terminate your account at any time.</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying 'STOP' or 'UNSUBSCRIBE' to the SMS messages that we send, or by contacting us at info@learnsquare.co You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>
          <p className="text-slate-600 leading-relaxed">
            <strong>Account Information</strong><br />
            If you would at any time like to review or change the information in your account or terminate your account, you can: Log in to your account settings and update your user account. Contact us using the contact information provided. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements. If you have questions or comments about your privacy rights, you may email us at <a href="mailto:info@learnsquare.co" className="text-primary font-semibold hover:underline">info@learnsquare.co</a>.
          </p>
        </section>

        <section className="mb-10 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
          <h3 className="text-xl font-black text-slate-900 mb-4">6. Do We Make Updates To This Notice?</h3>
          <p className="text-slate-600 leading-relaxed">
            <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws. We may update this Privacy Policy from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible. If we make material changes to this Privacy Policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
          </p>
        </section>

        <section className="mb-10 p-8 rounded-2xl bg-slate-50 border border-slate-100">
          <h3 className="text-xl font-black text-slate-900 mb-4">7. How Can You Contact Us About This Notice?</h3>
          <p className="text-slate-600 leading-relaxed">
            If you have questions or comments about this notice, you may email us at <a href="mailto:info@learnsquare.co" className="text-primary font-semibold hover:underline">info@learnsquare.co</a>
          </p>
        </section>

        <div className="pt-6">
          <Link to="/" className="text-primary font-bold hover:underline">← Back to Home</Link>
        </div>
      </div>
    </main>
    <Footer />
    <WhatsAppButton />
  </motion.div>
);

export default PrivacyPage;
