import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TermsPage = () => (
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
            Terms &amp; Conditions
          </h1>
          <p className="text-slate-600 leading-relaxed">
            You can purchase a Subscription Service of your choice for any category(ies) of content by following instructions on the Platform and making the payment applicable for the Subscription you intend to purchase. Please read the below terms applicable for the purchase of your Platform Subscription. The below terms are to be read with any other terms communicated to you at the time of purchase of your Subscription.
          </p>
        </div>

        <section className="mb-10 p-8 rounded-2xl bg-slate-50 border border-slate-100">
          <h2 className="text-2xl font-black text-slate-900 mb-4">1. Payment Policy</h2>
          <p className="text-slate-600 leading-relaxed">
            Agree that you are solely responsible for all charges that occur through and acknowledge and agree to indemnify, defend, and hold harmless LEARNSQUARE, its licensors, their affiliates, and their respective officers, directors, employees, and agents from any loss arising out of or related to the use of the Platform or any purchases made through the Platform. This obligation will survive your use of the Platform and termination of your Agreement with us. For purposes of the Platform Terms, "Loss" means all losses, liabilities, damages, awards, settlements, claims, suits, proceedings, costs, and expenses (including reasonable legal fees and disbursements and costs of investigation, litigation, settlement, judgement, interest, and penalties). LEARNSQUARE shall not be liable to you for any claims arising out of any act or omission on the part of the Third-Party Service Provider(s) including, but not limited to, any lost, stolen, or incorrectly processed payments.
          </p>
        </section>

        <section className="mb-10 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 mb-4">2. Refund Policy</h2>
          <p className="text-slate-600 leading-relaxed">
            You may cancel your Subscription through your account on the Platform. However, please note that the cancellation will become effective at the end of the then-current billing period; in other words, we will not renew your Subscription, but the existing Subscription will continue until the end of its billing period and there shall be no refund of the fee already paid for the same. So, please read these terms and conditions carefully before purchasing any Subscription. It is pertinent to mention that only under exceptional circumstances which fits into the parameters of the policies of the Company, refund will be given. However, the Company shall have the final say in such a situation and the Decision of the Company shall be considered as final.
          </p>
        </section>

        <section className="mb-10 p-8 rounded-2xl bg-slate-50 border border-slate-100">
          <h2 className="text-2xl font-black text-slate-900 mb-4">3. Subscription</h2>
          <p className="text-slate-600 leading-relaxed">
            We reserve the right to change/revise the pricing of the Subscriptions. For existing Subscriptions for which the applicable fees have been already received by us, we will implement the price changes during the next billing period or renewal of the Subscription. If you have not completed payments for your Subscriptions, we may restrict / suspend your access to the Platform until your account becomes current and paid in full. Subscription will be valid only for the specified period as mentioned against the course.
          </p>
        </section>

        <section className="mb-10 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900 mb-4">4. Payment Gateways</h2>
          <p className="text-slate-600 leading-relaxed">
            We use third-party payment gateways and/or aggregators to process payments applicable to the Services offered by us. Third-party payment gateway(s) made available to you may vary depending on the Subscription you choose. Similarly, we have also enabled integration of third-party payment providers to facilitate better payment options to you, which may vary depending on your territory or the Subscription you choose. Third-party payment gateways/aggregators and third-party payment providers shall collectively be referred to as "Third-Party Service Providers". Please note that all Subscription payments are collected by LEARNSQUARE only through the Platform and not through any third parties (except Third-Party Service Provider(s)). We do not authorise any third party (except Third-Party Service Provider(s)) to collect monies on our behalf.
          </p>
        </section>

        <section className="mb-10 p-8 rounded-2xl bg-slate-50 border border-slate-100">
          <h2 className="text-2xl font-black text-slate-900 mb-4">5. GST and other Service Taxes</h2>
          <p className="text-slate-600 leading-relaxed">
            Your payments to LEARNSQUARE shall be subject to applicable taxes including without limitation Goods and Service Taxes (GST) and Value Added Taxes (VAT) or other similar taxes as may be applicable in your country of residence/from where you have created your account on the Platform/ purchased the underlying Subscriptions.
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

export default TermsPage;
