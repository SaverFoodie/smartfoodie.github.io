import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../language';
import { FaGift, FaEuroSign, FaTimes } from 'react-icons/fa';

const EventBanner = () => {
  const { language } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  const bannerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <div className="w-full py-6 relative overflow-hidden">
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={bannerVariants}
        >
          {/* Full Width Banner Container */}
          <div className="relative w-full bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 overflow-hidden">
            {/* Simple Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
                  linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%)
                `,
                backgroundSize: '60px 60px'
              }}></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                
                {/* Left Section - Icon & Main Text */}
                <div className="flex items-center gap-4 lg:gap-6 flex-1">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <FaGift className="text-pink-500 text-2xl md:text-3xl" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <FaEuroSign className="text-white text-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Main Text Content */}
                  <div className="text-center lg:text-left">
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 leading-tight drop-shadow-md">
                      {language === "en" ? (
                        <>
                          🎉 Recommend SmartFoodie & earn{' '}
                          <span className="text-yellow-200 font-extrabold inline-block drop-shadow-lg">
                            up to €2000
                          </span>
                          {' '}reward!
                        </>
                      ) : (
                        <>
                          🎉 SmartFoodie empfehlen &{' '}
                          <span className="text-yellow-200 font-extrabold inline-block drop-shadow-lg">
                            bis zu 2000€
                          </span>
                          {' '}kassieren!
                        </>
                      )}
                    </h2>
                  </div>
                </div>

                {/* Center Section - Additional Info */}
                <div className="flex-1 text-center max-w-md">
                  <p className="text-sm md:text-base lg:text-lg text-white/90 mb-3 drop-shadow-sm">
                    {language === "en" 
                      ? "Bring SmartFoodie to your university, company, or gym – anywhere fresh, hot food is needed around the clock."
                      : "Bring SmartFoodie an deine Uni, Firma oder ins Fitnessstudio – überall dorthin, wo frisches, heißes Essen rund um die Uhr gefragt ist."
                    }
                  </p>
                  
                  <p className="text-sm md:text-base lg:text-lg text-white/90 mb-3 drop-shadow-sm">
                    {language === "en" 
                      ? "After successful partnership, you will receive between €800 - €2000 reward!"
                      : "Nach erfolgreicher Partnerschaft erhältst du zwischen 800 - 2000€ Prämie!"
                    }
                  </p>
                  
                  <div className="text-sm md:text-base lg:text-lg text-white/90">
                    {language === "en" ? "To participate, please check the " : "Wenn Sie teilnehmen möchten, lesen Sie bitte die "}
                    <button 
                      className="underline text-yellow-200 hover:text-yellow-100 transition-colors duration-200 font-bold drop-shadow-sm"
                      onClick={() => setShowModal(true)}
                    >
                      {language === "en" ? "terms & conditions" : "Teilnahmebedingungen"}
                    </button>
                    .
                  </div>
                </div>

                {/* Right Section - CTA Button */}
                <div className="flex-shrink-0">
                  <button
                    onClick={() => {
                      window.location.href = '/contact';
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="px-8 py-4 bg-white text-pink-600 rounded-full font-bold text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap hover:bg-gray-50"
                  >
                    {language === "en" ? "Start Now!" : "Jetzt Starten!"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Terms & Conditions Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <motion.div
            className="bg-white max-w-4xl w-full max-h-[85vh] rounded-2xl shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
              <h2 className="text-xl md:text-2xl font-bold pr-8">
                {language === 'en' ? 'Terms & Conditions for the SmartFoodie Referral Program' : 'Teilnahmebedingungen für das Empfehlungsprogramm der SmartFoodie GmbH'}
              </h2>
              <button
                className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <FaTimes className="text-white text-sm" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-120px)]">
              {language === 'en' ? (
                <div className="whitespace-pre-wrap text-sm md:text-base space-y-4 text-gray-700 leading-relaxed">
                  The referral program is organized by SmartFoodie GmbH, Schellingstr. 109a, 80798 Munich (hereinafter "SmartFoodie"). It enables existing SmartFoodie customers to receive rewards when they successfully refer new customers.
                  <br/><br/>
                  <b className="text-orange-600 text-lg">1. Special Terms and Conditions</b><br/>
                  Participation in the referral program is only possible by accepting the following conditions. By participating, the customer automatically agrees to these conditions.<br/>
                  <span className="font-semibold text-orange-600">a. Participation</span><br/>
                  To participate, recommend SmartFoodie to friends or business contacts (hereinafter "Contact"). You will receive a personalized referral link that you can share with your contacts. Through this link, your contact can access a form to provide their (company) contact details and enter your name as the referrer. Alternatively, you can send us your contact's details directly. A SmartFoodie employee will then contact the referred person and inform them about our products.<br/>
                  A referral is considered successful if, during the campaign period, a long-term contract (hereinafter "Contract") is concluded between the referred business customer and SmartFoodie after a three-month trial phase.<br/>
                  <span className="font-semibold text-orange-600">b. Reward</span><br/>
                  After a successful contract conclusion and completion of the trial phase, you will receive your referral reward by bank transfer. The amount of the reward depends on the sales achieved by the referred customer. SmartFoodie reserves the right to make the final decision on the award of the reward.<br/>
                  Note: The reward may be subject to income tax. Proper taxation is the responsibility of the participant. SmartFoodie assumes no tax obligations for the reward.<br/>
                  <span className="font-semibold text-orange-600">c. Campaign Period</span><br/>
                  The referral program is valid from 11.06.2025 to 15.08.2026. Referrals outside this period are excluded. Referrals received during the campaign period but not resulting in a contract within 6 months of first contact are also invalid.<br/>
                  <span className="font-semibold text-orange-600">d. Notification</span><br/>
                  You will be notified by email no later than 14 days after a successful contract conclusion. You will then be asked to provide your bank details for the reward transfer.<br/>
                  <span className="font-semibold text-orange-600">e. Exclusion of Multiple Referrals</span><br/>
                  A contact can only be clearly assigned to one referral. The decisive factor is the first submitted referral – i.e., the one where the contact first registered via a personalized referral link. If no personalized link was used, no assignment and thus no reward payment can be made. Multiple referrals of the same contact will not be considered. Repeated referrals of the same person do not entitle you to further rewards.<br/>
                  <br/>
                  <span className="font-semibold text-orange-600 text-lg">2. General Terms and Conditions</span><br/>
                  By participating, all participants agree to these conditions and all associated participation requirements:<br/>
                  <span className="font-semibold text-orange-600">a.</span> All natural persons aged 18 and over are eligible to participate.<br/>
                  <span className="font-semibold text-orange-600">b.</span> Employees of SmartFoodie GmbH, their relatives, and all persons involved in the implementation of the campaign are excluded from participation.<br/>
                  <span className="font-semibold text-orange-600">c.</span> Participation via automated registration procedures (e.g., competition service providers, etc.) is not permitted. A violation of the terms and conditions, influencing equal opportunities (e.g., through technical manipulation), or a similarly serious violation may, at SmartFoodie's discretion, lead to exclusion from participation or a change in the terms and conditions, even retrospectively. Participation in the campaign is free of charge.<br/>
                  <span className="font-semibold text-orange-600">d.</span> SmartFoodie is entitled to refuse to conclude a contract without giving reasons or to discontinue contact.<br/>
                  <span className="font-semibold text-orange-600">e.</span> Legal recourse is excluded.<br/>
                  <span className="font-semibold text-orange-600">f.</span> SmartFoodie reserves the right to change the terms and conditions at any time or to terminate the campaign early. Changes will be announced in good time.<br/>
                  <br/>
                  <span className="font-semibold text-orange-600 text-lg">3. Assurance and Publication</span><br/>
                  Referrals may only be sent for personal and non-commercial purposes to personal contacts who have consented to receive such messages. The participant assures that the contact has expressly agreed to receive the referral link.<br/>
                  The referral link may not be published or distributed on platforms where it cannot be ensured that the recipients are personal contacts (e.g., on coupon websites or in public forums). The participant is fully liable for any claims by third parties due to unlawful sending.<br/>
                  <br/>
                  <span className="font-semibold text-orange-600 text-lg">4. Data Protection - Declaration of Consent</span><br/>
                  The personal data collected as part of the referral program will be used exclusively for the implementation of the program and will be deleted no later than 30 days after the end of the campaign period, unless another legal basis for longer storage exists.<br/>
                  The contact details provided by the referred contact in the form will be stored for the purpose of processing and contacting. The participant and the contact can revoke their consent at any time with effect for the future.<br/>
                  Data subjects have the right to information, correction, or deletion of their data. Inquiries can be sent at any time to <a href="mailto:info@smartfoodiegmbh.eu" className="underline text-blue-600 hover:text-blue-800">info@smartfoodiegmbh.eu</a>. Otherwise, the data protection regulations of SmartFoodie GmbH apply.<br/>
                  <br/>
                  <span className="font-semibold text-orange-600 text-lg">5. Miscellaneous</span><br/>
                  Should any provision of these terms and conditions be or become wholly or partially invalid, the validity of the remaining provisions shall remain unaffected.<br/>
                  German law applies. The place of jurisdiction, as far as legally permissible, is Munich.
                </div>
              ) : (
                <div className="whitespace-pre-wrap text-sm md:text-base space-y-4 text-gray-700 leading-relaxed">
                  Das Empfehlungsprogramm wird von der SmartFoodie GmbH, Schellingstr. 109a, 80798 München (nachfolgend "SmartFoodie"), veranstaltet. Es ermöglicht bestehenden SmartFoodie-Kundinnen und -Kunden, Prämien zu erhalten, wenn sie erfolgreich neue Kundinnen oder Kunden werben.
                  <br/><br/>
                  <b className="text-orange-600 text-lg">1. Besondere Teilnahmebedingungen</b><br/>
                  Die Teilnahme am Empfehlungsprogramm ist ausschließlich unter Anerkennung der nachfolgenden Bedingungen möglich. Mit der Teilnahme erklärt sich der Kunde automatisch mit diesen Bedingungen einverstanden.<br/>
                  <span className="font-semibold text-orange-600">a. Teilnahme</span><br/>
                  Zur Teilnahme empfehlen Sie SmartFoodie an Freunde oder Geschäftskontakte (nachfolgend "Kontakt") weiter. Hierfür erhalten Sie einen personalisierten Empfehlungslink, den Sie mit Ihren Kontakten teilen können. Über diesen Link gelangt Ihr Kontakt zu einem Formular, in dem er seine (Firmen-)Kontaktdaten hinterlegen und Ihren Namen als Empfehlungsgeber angeben kann. Alternativ können Sie uns die Kontaktdaten Ihres Kontakts auch direkt übermitteln. Ein Mitarbeiter von SmartFoodie wird anschließend den Kontakt aufnehmen und über unsere Produkte informieren.<br/>
                  Eine Empfehlung gilt als erfolgreich, wenn im Aktionszeitraum zwischen dem geworbenen Firmenkunden und SmartFoodie – nach Abschluss einer dreimonatigen Testphase – ein langfristiger Vertrag (nachfolgend "Vertrag") zustande kommt.<br/>
                  <span className="font-semibold text-orange-600">b. Prämie</span><br/>
                  Nach erfolgreichem Vertragsabschluss und Bestehen der Testphase erhalten Sie Ihre Empfehlungsprämie per Überweisung. Die Höhe der Prämie richtet sich nach den erzielten Umsätzen des geworbenen Kunden. SmartFoodie behält sich das Recht vor, die endgültige Entscheidung über die Prämienvergabe zu treffen.<br/>
                  Hinweis: Die Prämie kann einkommensteuerpflichtig sein. Die ordnungsgemäße Versteuerung obliegt dem Teilnehmer. SmartFoodie übernimmt keine steuerlichen Verpflichtungen für die Prämie.<br/>
                  <span className="font-semibold text-orange-600">c. Aktionszeitraum</span><br/>
                  Das Empfehlungsprogramm gilt im Zeitraum vom 11.06.2025 bis zum 11.06.2026. Empfehlungen außerhalb dieses Zeitraums sind ausgeschlossen. Empfehlungen, die zwar im Aktionszeitraum eingehen, jedoch nicht innerhalb von 6 Monaten nach Erstkontakt zu einem Vertrag führen, verlieren ebenfalls ihre Gültigkeit.<br/>
                  <span className="font-semibold text-orange-600">d. Benachrichtigung</span><br/>
                  Sie werden spätestens 14 Tage nach erfolgreichem Vertragsabschluss per E-Mail benachrichtigt. Dabei werden Sie gebeten, Ihre Kontodaten für die Überweisung der Prämie bereitzustellen.<br/>
                  <span className="font-semibold text-orange-600">e. Ausschluss von Mehrfachempfehlungen</span><br/>
                  Ein Kontakt kann nur einer Empfehlung eindeutig zugeordnet werden. Maßgeblich ist die erste übermittelte Empfehlung – also diejenige, bei der sich der Kontakt zuerst über einen personalisierten Empfehlungslink registriert hat. Sollte kein personalisierter Link verwendet worden sein, kann keine Zuordnung und somit keine Prämienauszahlung erfolgen. Mehrfachempfehlungen desselben Kontakts werden nicht berücksichtigt. Wiederholte Empfehlungen derselben Person führen zu keiner weiteren Prämienberechtigung.<br/>
                  <br/>
                  <span className="font-semibold text-orange-600 text-lg">2. Allgemeine Teilnahmebedingungen</span><br/>
                  Mit der Teilnahme erklären sich alle Teilnehmer mit diesen Bedingungen und allen damit verbundenen Teilnahmevoraussetzungen einverstanden:<br/>
                  <span className="font-semibold text-orange-600">a.</span> Teilnahmeberechtigt sind alle natürlichen Personen ab 18 Jahren.<br/>
                  <span className="font-semibold text-orange-600">b.</span> Von der Teilnahme ausgeschlossen sind Mitarbeiter:innen der SmartFoodie GmbH sowie deren Angehörige und alle an der Durchführung der Aktion beteiligten Personen.<br/>
                  <span className="font-semibold text-orange-600">c.</span> Die Teilnahme über automatisierte Anmeldeverfahren (z.B. Gewinnspielservice-Dienstleister o.ä.) ist unzulässig. Eine Verletzung der Teilnahmebedingungen, die Beeinflussung der Chancengleichheit z.B. in Form einer technischen Manipulation oder ein vergleichbar schwerer Verstoß kann nach Ermessen von SmartFoodie zum – auch nachträglichen – Ausschluss von der Teilnahme oder zur Änderung der Teilnahmebedingungen führen. Die Teilnahme an der Aktion ist kostenlos.<br/>
                  <span className="font-semibold text-orange-600">d.</span> SmartFoodie ist berechtigt, einen Vertragsabschluss ohne Angabe von Gründen abzulehnen oder die Kontaktaufnahme abzubrechen.<br/>
                  <span className="font-semibold text-orange-600">e.</span> Der Rechtsweg ist ausgeschlossen.<br/>
                  <span className="font-semibold text-orange-600">f.</span> SmartFoodie behält sich das Recht vor, die Teilnahmebedingungen jederzeit zu ändern oder die Aktion vorzeitig zu beenden. Über Änderungen wird rechtzeitig informiert.<br/>
                  <br/>
                  <span className="font-semibold text-orange-600 text-lg">3. Zusicherung und Veröffentlichung</span><br/>
                  Empfehlungen dürfen ausschließlich zu persönlichen und nicht-kommerziellen Zwecken an persönliche Kontakte versendet werden, die dem Erhalt solcher Nachrichten zugestimmt haben. Der Teilnehmer sichert zu, dass der Kontakt dem Erhalt des Empfehlungslinks ausdrücklich zugestimmt hat.<br/>
                  Der Empfehlungslink darf nicht auf Plattformen veröffentlicht oder verbreitet werden, bei denen nicht sichergestellt ist, dass die Empfänger persönliche Kontakte sind (z. B. auf Gutschein-Webseiten oder in öffentlichen Foren). Für eventuelle Ansprüche Dritter aufgrund rechtswidriger Zusendung haftet der Teilnehmer vollumfänglich.<br/>
                  <br/>
                  <span className="font-semibold text-orange-600 text-lg">4. Datenschutz - Einwilligungserklärung</span><br/>
                  Die im Rahmen des Empfehlungsprogramms erhobenen personenbezogenen Daten werden ausschließlich zur Durchführung des Programms genutzt und spätestens 30 Tage nach Ende des Aktionszeitraums gelöscht, sofern keine andere rechtliche Grundlage für eine längere Speicherung besteht.<br/>
                  Die Kontaktdaten, die der empfohlene Kontakt im Formular angibt, werden zum Zweck der Bearbeitung und Kontaktaufnahme gespeichert. Der Teilnehmer sowie der Kontakt können ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.<br/>
                  Betroffene Personen haben das Recht auf Auskunft, Berichtigung oder Löschung ihrer Daten. Anfragen hierzu können jederzeit an <a href="mailto:info@smartfoodiegmbh.eu" className="underline text-blue-600 hover:text-blue-800">info@smartfoodiegmbh.eu</a> gerichtet werden. Im Übrigen gelten die Datenschutzbestimmungen der SmartFoodie GmbH.<br/>
                  <br/>
                  <span className="font-semibold text-orange-600 text-lg">5. Sonstiges</span><br/>
                  Sollte eine Bestimmung dieser Teilnahmebedingungen ganz oder teilweise unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen Regelungen unberührt.<br/>
                  Es gilt deutsches Recht. Gerichtsstand, soweit gesetzlich zulässig, ist München.
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default EventBanner;
