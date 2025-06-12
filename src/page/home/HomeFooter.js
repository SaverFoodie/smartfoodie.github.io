import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../language';

function HomeFooter() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getFontSize = () => {
    if (windowWidth <= 480) return '1em';
    if (windowWidth <= 768) return '1.4em';
    if (windowWidth <= 1024) return '1.6em';
    return '1.8em';
  };

  const getContainerHeight = () => {
    if (windowWidth <= 480) return '65vh';
    if (windowWidth <= 768) return '75vh';
    if (windowWidth <= 1024) return '80vh';
    return '80vh';
  };

  const getButtonStyles = () => {
    if (windowWidth <= 480) {
      return {
        fontSize: '0.9rem',
        padding: '0.2rem 0.4rem',
        alignSelf: 'center', 
      };
    }
    if (windowWidth <= 768) {
      return {
        fontSize: '1.1rem',
        padding: '0.4rem 0.8rem',
        alignSelf: 'center',
      };
    }
    if (windowWidth <= 1024) {
      return {
        fontSize: '1.2rem',
        padding: '0.65rem 1.1rem',
        alignSelf: 'flex-start',
        marginLeft: '15%',
      };
    }
    return {
      fontSize: '1.3rem',
      padding: '0.8rem 1.4rem',
      alignSelf: 'flex-start',
      marginLeft: '25%',
    };
  };

  const getContentWrapperStyles = () => {
    return {
      ...styles.contentWrapper,
      width: windowWidth <= 768 ? '100%' : '60%',
      paddingLeft: windowWidth <= 480 ? '3vw' : '5vw',
      paddingRight: windowWidth <= 480 ? '3vw' : '5vw',
      alignItems: windowWidth <= 768 ? 'center' : 'flex-start',
    };
  };

  const getOverlayStyles = () => {
    if (windowWidth <= 768) {
      return {
        ...styles.overlay,
        background: 'rgba(0, 0, 0, 0.6)',
      };
    }
    return styles.overlay;
  };

  const containerStyle = {
    ...styles.warmthButtonContainer,
    backgroundImage: 'url("./footer.jpg")',
    height: getContainerHeight(),
  };

  const textStyle = {
    ...styles.warmthText,
    fontSize: getFontSize(),
    maxWidth: windowWidth <= 768 ? '100%' : '80%',
    textAlign: windowWidth <= 768 ? 'center' : 'left',
  };

  return (
    <div style={containerStyle}>
      <div style={getOverlayStyles()}></div>
      <div style={getContentWrapperStyles()}>
        {language === "en" ? (
          <>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight font-['Cormorant_Garamond',serif]">
              Recommend SmartFoodie &{' '}
              <span className="text-[#ffb700] text-5xl md:text-6xl font-semibold font-['Cormorant_Garamond',serif]">up to €2000</span> reward!
            </h2>
            <p className="text-xl md:text-2xl text-white font-semibold mb-8 max-w-2xl">
              Bring SmartFoodie to your university, company, or gym – anywhere fresh, hot food is needed around the clock.
            </p>
            <div className="mb-8 text-white text-xl md:text-2xl font-semibold">
              After successful partnership, you will receive between €800 - €2000 reward!
            </div>
            <div className="text-xl md:text-2xl text-white font-medium">
              To participate, please check the{' '}
              <button className="underline bg-none border-none p-0 cursor-pointer" style={{color:'#ffb700',background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => setShowModal(true)}>
                terms & conditions
              </button>.
            </div>
          </>
        ) : (
          <>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight font-['Cormorant_Garamond',serif]">
              SmartFoodie empfehlen &{' '}
              <span className="text-[#ffb700] text-5xl md:text-6xl font-semibold font-['Cormorant_Garamond',serif]">bis zu 2000€</span> kassieren!
            </h2>
            <p className="text-xl md:text-2xl text-white font-semibold mb-8 max-w-2xl">
              Bring SmartFoodie an deine Uni, Firma oder ins Fitnessstudio – überall dorthin, wo frisches, heißes Essen rund um die Uhr gefragt ist.
            </p>
            <div className="mb-8 text-white text-xl md:text-2xl font-semibold">
              Nach erfolgreicher Partnerschaft erhältst du zwischen 800 - 2000€ Prämie!
            </div>
            <div className="text-xl md:text-2xl text-white font-medium">
               Wenn Sie teilnehmen möchten, lesen Sie bitte die{' '}
               <button className="underline bg-none border-none p-0 cursor-pointer" style={{color:'#ffb700',background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => setShowModal(true)}>
                 Teilnahmebedingungen
               </button>.
            </div>
          </>
        )}
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white max-w-2xl w-full p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[80vh]">
            <h2 className="text-xl font-bold mb-4">{language === 'en' ? 'Terms & Conditions for the SmartFoodie Referral Program' : 'Teilnahmebedingungen für das Empfehlungsprogramm der SmartFoodie GmbH'}</h2>
            {language === 'en' ? (
              <div className="whitespace-pre-wrap text-sm md:text-base mb-4" style={{fontFamily: 'inherit'}}>
                The referral program is organized by SmartFoodie GmbH, Schellingstr. 109a, 80798 Munich (hereinafter "SmartFoodie"). It enables existing SmartFoodie customers to receive rewards when they successfully refer new customers.
                <br/><br/>
                <b>1. Special Terms and Conditions</b><br/>
                Participation in the referral program is only possible by accepting the following conditions. By participating, the customer automatically agrees to these conditions.<br/>
                <span style={{fontWeight:600}}>a. Participation</span><br/>
                To participate, recommend SmartFoodie to friends or business contacts (hereinafter "Contact"). You will receive a personalized referral link that you can share with your contacts. Through this link, your contact can access a form to provide their (company) contact details and enter your name as the referrer. Alternatively, you can send us your contact's details directly. A SmartFoodie employee will then contact the referred person and inform them about our products.<br/>
                A referral is considered successful if, during the campaign period, a long-term contract (hereinafter "Contract") is concluded between the referred business customer and SmartFoodie after a three-month trial phase.<br/>
                <span style={{fontWeight:600}}>b. Reward</span><br/>
                After a successful contract conclusion and completion of the trial phase, you will receive your referral reward by bank transfer. The amount of the reward depends on the sales achieved by the referred customer. SmartFoodie reserves the right to make the final decision on the award of the reward.<br/>
                Note: The reward may be subject to income tax. Proper taxation is the responsibility of the participant. SmartFoodie assumes no tax obligations for the reward.<br/>
                <span style={{fontWeight:600}}>c. Campaign Period</span><br/>
                The referral program is valid from 11.06.2025 to 15.08.2026. Referrals outside this period are excluded. Referrals received during the campaign period but not resulting in a contract within 6 months of first contact are also invalid.<br/>
                <span style={{fontWeight:600}}>d. Notification</span><br/>
                You will be notified by email no later than 14 days after a successful contract conclusion. You will then be asked to provide your bank details for the reward transfer.<br/>
                <span style={{fontWeight:600}}>e. Exclusion of Multiple Referrals</span><br/>
                A contact can only be clearly assigned to one referral. The decisive factor is the first submitted referral – i.e., the one where the contact first registered via a personalized referral link. If no personalized link was used, no assignment and thus no reward payment can be made. Multiple referrals of the same contact will not be considered. Repeated referrals of the same person do not entitle you to further rewards.<br/>
                <br/>
                <span style={{fontWeight:600}}>2. General Terms and Conditions</span><br/>
                By participating, all participants agree to these conditions and all associated participation requirements:<br/>
                <span style={{fontWeight:600}}>a.</span> All natural persons aged 18 and over are eligible to participate.<br/>
                <span style={{fontWeight:600}}>b.</span> Employees of SmartFoodie GmbH, their relatives, and all persons involved in the implementation of the campaign are excluded from participation.<br/>
                <span style={{fontWeight:600}}>c.</span> Participation via automated registration procedures (e.g., competition service providers, etc.) is not permitted. A violation of the terms and conditions, influencing equal opportunities (e.g., through technical manipulation), or a similarly serious violation may, at SmartFoodie's discretion, lead to exclusion from participation or a change in the terms and conditions, even retrospectively. Participation in the campaign is free of charge.<br/>
                <span style={{fontWeight:600}}>d.</span> SmartFoodie is entitled to refuse to conclude a contract without giving reasons or to discontinue contact.<br/>
                <span style={{fontWeight:600}}>e.</span> Legal recourse is excluded.<br/>
                <span style={{fontWeight:600}}>f.</span> SmartFoodie reserves the right to change the terms and conditions at any time or to terminate the campaign early. Changes will be announced in good time.<br/>
                <br/>
                <span style={{fontWeight:600}}>3. Assurance and Publication</span><br/>
                Referrals may only be sent for personal and non-commercial purposes to personal contacts who have consented to receive such messages. The participant assures that the contact has expressly agreed to receive the referral link.<br/>
                The referral link may not be published or distributed on platforms where it cannot be ensured that the recipients are personal contacts (e.g., on coupon websites or in public forums). The participant is fully liable for any claims by third parties due to unlawful sending.<br/>
                <br/>
                <span style={{fontWeight:600}}>4. Data Protection - Declaration of Consent</span><br/>
                The personal data collected as part of the referral program will be used exclusively for the implementation of the program and will be deleted no later than 30 days after the end of the campaign period, unless another legal basis for longer storage exists.<br/>
                The contact details provided by the referred contact in the form will be stored for the purpose of processing and contacting. The participant and the contact can revoke their consent at any time with effect for the future.<br/>
                Data subjects have the right to information, correction, or deletion of their data. Inquiries can be sent at any time to <a href="mailto:info@smartfoodiegmbh.eu" className="underline text-blue-700">info@smartfoodiegmbh.eu</a>. Otherwise, the data protection regulations of SmartFoodie GmbH apply.<br/>
                <br/>
                <span style={{fontWeight:600}}>5. Miscellaneous</span><br/>
                Should any provision of these terms and conditions be or become wholly or partially invalid, the validity of the remaining provisions shall remain unaffected.<br/>
                German law applies. The place of jurisdiction, as far as legally permissible, is Munich.
              </div>
            ) : (
              <div className="whitespace-pre-wrap text-sm md:text-base mb-4" style={{fontFamily: 'inherit'}}>
                Das Empfehlungsprogramm wird von der SmartFoodie GmbH, Schellingstr. 109a, 80798 München (nachfolgend "SmartFoodie"), veranstaltet. Es ermöglicht bestehenden SmartFoodie-Kundinnen und -Kunden, Prämien zu erhalten, wenn sie erfolgreich neue Kundinnen oder Kunden werben.
                <br/><br/>
                <b>1. Besondere Teilnahmebedingungen</b><br/>
                Die Teilnahme am Empfehlungsprogramm ist ausschließlich unter Anerkennung der nachfolgenden Bedingungen möglich. Mit der Teilnahme erklärt sich der Kunde automatisch mit diesen Bedingungen einverstanden.<br/>
                <span style={{fontWeight:600}}>a. Teilnahme</span><br/>
                Zur Teilnahme empfehlen Sie SmartFoodie an Freunde oder Geschäftskontakte (nachfolgend "Kontakt") weiter. Hierfür erhalten Sie einen personalisierten Empfehlungslink, den Sie mit Ihren Kontakten teilen können. Über diesen Link gelangt Ihr Kontakt zu einem Formular, in dem er seine (Firmen-)Kontaktdaten hinterlegen und Ihren Namen als Empfehlungsgeber angeben kann. Alternativ können Sie uns die Kontaktdaten Ihres Kontakts auch direkt übermitteln. Ein Mitarbeiter von SmartFoodie wird anschließend den Kontakt aufnehmen und über unsere Produkte informieren.<br/>
                Eine Empfehlung gilt als erfolgreich, wenn im Aktionszeitraum zwischen dem geworbenen Firmenkunden und SmartFoodie – nach Abschluss einer dreimonatigen Testphase – ein langfristiger Vertrag (nachfolgend "Vertrag") zustande kommt.<br/>
                <span style={{fontWeight:600}}>b. Prämie</span><br/>
                Nach erfolgreichem Vertragsabschluss und Bestehen der Testphase erhalten Sie Ihre Empfehlungsprämie per Überweisung. Die Höhe der Prämie richtet sich nach den erzielten Umsätzen des geworbenen Kunden. SmartFoodie behält sich das Recht vor, die endgültige Entscheidung über die Prämienvergabe zu treffen.<br/>
                Hinweis: Die Prämie kann einkommensteuerpflichtig sein. Die ordnungsgemäße Versteuerung obliegt dem Teilnehmer. SmartFoodie übernimmt keine steuerlichen Verpflichtungen für die Prämie.<br/>
                <span style={{fontWeight:600}}>c. Aktionszeitraum</span><br/>
                Das Empfehlungsprogramm gilt im Zeitraum vom 11.06.2025 bis zum 11.06.2026. Empfehlungen außerhalb dieses Zeitraums sind ausgeschlossen. Empfehlungen, die zwar im Aktionszeitraum eingehen, jedoch nicht innerhalb von 6 Monaten nach Erstkontakt zu einem Vertrag führen, verlieren ebenfalls ihre Gültigkeit.<br/>
                <span style={{fontWeight:600}}>d. Benachrichtigung</span><br/>
                Sie werden spätestens 14 Tage nach erfolgreichem Vertragsabschluss per E-Mail benachrichtigt. Dabei werden Sie gebeten, Ihre Kontodaten für die Überweisung der Prämie bereitzustellen.<br/>
                <span style={{fontWeight:600}}>e. Ausschluss von Mehrfachempfehlungen</span><br/>
                Ein Kontakt kann nur einer Empfehlung eindeutig zugeordnet werden. Maßgeblich ist die erste übermittelte Empfehlung – also diejenige, bei der sich der Kontakt zuerst über einen personalisierten Empfehlungslink registriert hat. Sollte kein personalisierter Link verwendet worden sein, kann keine Zuordnung und somit keine Prämienauszahlung erfolgen. Mehrfachempfehlungen desselben Kontakts werden nicht berücksichtigt. Wiederholte Empfehlungen derselben Person führen zu keiner weiteren Prämienberechtigung.<br/>
                <br/>
                <span style={{fontWeight:600}}>2. Allgemeine Teilnahmebedingungen</span><br/>
                Mit der Teilnahme erklären sich alle Teilnehmer mit diesen Bedingungen und allen damit verbundenen Teilnahmevoraussetzungen einverstanden:<br/>
                <span style={{fontWeight:600}}>a.</span> Teilnahmeberechtigt sind alle natürlichen Personen ab 18 Jahren.<br/>
                <span style={{fontWeight:600}}>b.</span> Von der Teilnahme ausgeschlossen sind Mitarbeiter:innen der SmartFoodie GmbH sowie deren Angehörige und alle an der Durchführung der Aktion beteiligten Personen.<br/>
                <span style={{fontWeight:600}}>c.</span> Die Teilnahme über automatisierte Anmeldeverfahren (z.B. Gewinnspielservice-Dienstleister o.ä.) ist unzulässig. Eine Verletzung der Teilnahmebedingungen, die Beeinflussung der Chancengleichheit z.B. in Form einer technischen Manipulation oder ein vergleichbar schwerer Verstoß kann nach Ermessen von SmartFoodie zum – auch nachträglichen – Ausschluss von der Teilnahme oder zur Änderung der Teilnahmebedingungen führen. Die Teilnahme an der Aktion ist kostenlos.<br/>
                <span style={{fontWeight:600}}>d.</span> SmartFoodie ist berechtigt, einen Vertragsabschluss ohne Angabe von Gründen abzulehnen oder die Kontaktaufnahme abzubrechen.<br/>
                <span style={{fontWeight:600}}>e.</span> Der Rechtsweg ist ausgeschlossen.<br/>
                <span style={{fontWeight:600}}>f.</span> SmartFoodie behält sich das Recht vor, die Teilnahmebedingungen jederzeit zu ändern oder die Aktion vorzeitig zu beenden. Über Änderungen wird rechtzeitig informiert.<br/>
                <br/>
                <span style={{fontWeight:600}}>3. Zusicherung und Veröffentlichung</span><br/>
                Empfehlungen dürfen ausschließlich zu persönlichen und nicht-kommerziellen Zwecken an persönliche Kontakte versendet werden, die dem Erhalt solcher Nachrichten zugestimmt haben. Der Teilnehmer sichert zu, dass der Kontakt dem Erhalt des Empfehlungslinks ausdrücklich zugestimmt hat.<br/>
                Der Empfehlungslink darf nicht auf Plattformen veröffentlicht oder verbreitet werden, bei denen nicht sichergestellt ist, dass die Empfänger persönliche Kontakte sind (z. B. auf Gutschein-Webseiten oder in öffentlichen Foren). Für eventuelle Ansprüche Dritter aufgrund rechtswidriger Zusendung haftet der Teilnehmer vollumfänglich.<br/>
                <br/>
                <span style={{fontWeight:600}}>4. Datenschutz - Einwilligungserklärung</span><br/>
                Die im Rahmen des Empfehlungsprogramms erhobenen personenbezogenen Daten werden ausschließlich zur Durchführung des Programms genutzt und spätestens 30 Tage nach Ende des Aktionszeitraums gelöscht, sofern keine andere rechtliche Grundlage für eine längere Speicherung besteht.<br/>
                Die Kontaktdaten, die der empfohlene Kontakt im Formular angibt, werden zum Zweck der Bearbeitung und Kontaktaufnahme gespeichert. Der Teilnehmer sowie der Kontakt können ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.<br/>
                Betroffene Personen haben das Recht auf Auskunft, Berichtigung oder Löschung ihrer Daten. Anfragen hierzu können jederzeit an <a href="mailto:info@smartfoodiegmbh.eu" className="underline text-blue-700">info@smartfoodiegmbh.eu</a> gerichtet werden. Im Übrigen gelten die Datenschutzbestimmungen der SmartFoodie GmbH.<br/>
                <br/>
                <span style={{fontWeight:600}}>5. Sonstiges</span><br/>
                Sollte eine Bestimmung dieser Teilnahmebedingungen ganz oder teilweise unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen Regelungen unberührt.<br/>
                Es gilt deutsches Recht. Gerichtsstand, soweit gesetzlich zulässig, ist München.
              </div>
            )}
            <button
              className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
              aria-label="Schließen"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  warmthButtonContainer: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
    height: '85vh',
    padding: '0',
    borderRadius: '0px',
    position: 'relative',
  },
  contentWrapper: {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  warmthText: {
    marginBottom: '15px',
    color: 'white',
    width: 'auto',
    padding: '0',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0) 100%)',
    zIndex: 1,
  },
  button: {
    
    marginTop: '2rem',
    width: 'auto',
  }
};
  
export default HomeFooter;
