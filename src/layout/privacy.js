import React from 'react';
import { useLanguage } from '../language';

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      sections: [
        {
          title: "1. Responsible Entity",
          content: `SmartFoodie GmbH
Schellingstraße 109a
80798 Munich
Germany
Email: info@smartfoodiegmbh.eu`
        },
        {
          title: "2. Collection and Processing of Personal Data",
          content: `We do not collect or store any personal data when you visit our website.
We do not use contact forms, user registration, comment functions, or analytical cookies. You can access our website without providing any personal information.`
        },
        {
          title: "3. Use of Cookies",
          content: "Our website does not use any cookies, including technical, analytical, or marketing cookies."
        },
        {
          title: "4. Server Log Files",
          content: `When you visit our website, our hosting provider may automatically collect technical, anonymized data (so-called server log files), such as:

• Browser type and version
• Operating system
• Referrer URL
• IP address (anonymized)
• Time of access

This data is used solely to ensure the technical stability and security of the website. It is not used to identify individuals and is not merged with other data sources.`
        },
        {
          title: "5. Google Search Console",
          content: `We use Google Search Console to monitor and optimize the appearance of our website in Google search results.
This service is provided by Google and helps us understand how users reach our website via Google Search.
Google may collect anonymized usage data via its services, but it does not collect personally identifiable information.
For more information, please refer to Google's Privacy Policy:
👉 https://policies.google.com/privacy`
        },
        {
          title: "6. External Links (Social Media)",
          content: `Our website contains external links to third-party platforms, such as LinkedIn and Instagram.
By clicking these links, you leave our website and are subject to the privacy policies of the respective platforms.

Their privacy policies can be found here:

LinkedIn Privacy Policy
Instagram Privacy Policy`
        },
        {
          title: "7. Your Rights",
          content: `According to the General Data Protection Regulation (GDPR), you have the right to:

• Request information about whether we process any of your personal data
• Request the correction, deletion, or restriction of your data
• Object to certain types of data processing

To exercise these rights, please contact us via the email address above.`
        }
      ]
    },
    de: {
      title: "Datenschutzerklärung",
      sections: [
        {
          title: "1. Verantwortliche Stelle",
          content: `SmartFoodie GmbH
Schellingstraße 109a
80798 München
Deutschland
E-Mail: info@smartfoodiegmbh.eu`
        },
        {
          title: "2. Erhebung und Verarbeitung personenbezogener Daten",
          content: `Wir erheben oder speichern keine personenbezogenen Daten, wenn Sie unsere Website besuchen.
Wir verwenden keine Kontaktformulare, Benutzerregistrierung, Kommentarfunktionen oder Analyse-Cookies. Sie können unsere Website ohne Angabe personenbezogener Daten nutzen.`
        },
        {
          title: "3. Verwendung von Cookies",
          content: "Unsere Website verwendet keine Cookies, einschließlich technischer, analytischer oder Marketing-Cookies."
        },
        {
          title: "4. Server-Logdateien",
          content: `Beim Besuch unserer Website können von unserem Hosting-Anbieter automatisch technische, anonymisierte Daten (sogenannte Server-Logdateien) erfasst werden, wie:

• Browsertyp und -version
• Betriebssystem
• Referrer-URL
• IP-Adresse (anonymisiert)
• Zugriffszeit

Diese Daten werden ausschließlich zur Gewährleistung der technischen Stabilität und Sicherheit der Website verwendet. Sie werden nicht zur Identifizierung von Personen verwendet und nicht mit anderen Datenquellen zusammengeführt.`
        },
        {
          title: "5. Google Search Console",
          content: `Wir verwenden Google Search Console, um das Erscheinungsbild unserer Website in den Google-Suchergebnissen zu überwachen und zu optimieren.
Dieser Dienst wird von Google bereitgestellt und hilft uns zu verstehen, wie Nutzer über die Google-Suche auf unsere Website gelangen.
Google kann über seine Dienste anonymisierte Nutzungsdaten sammeln, erhebt jedoch keine personenbezogenen Daten.
Weitere Informationen finden Sie in der Datenschutzerklärung von Google:
👉 https://policies.google.com/privacy`
        },
        {
          title: "6. Externe Links (Soziale Medien)",
          content: `Unsere Website enthält externe Links zu Drittplattformen wie LinkedIn und Instagram.
Durch Anklicken dieser Links verlassen Sie unsere Website und unterliegen den Datenschutzrichtlinien der jeweiligen Plattformen.

Ihre Datenschutzrichtlinien finden Sie hier:

LinkedIn Datenschutzerklärung
Instagram Datenschutzerklärung`
        },
        {
          title: "7. Ihre Rechte",
          content: `Gemäß der Datenschutz-Grundverordnung (DSGVO) haben Sie das Recht:

• Auskunft darüber zu verlangen, ob wir personenbezogene Daten von Ihnen verarbeiten
• Die Berichtigung, Löschung oder Einschränkung Ihrer Daten zu verlangen
• Der Verarbeitung bestimmter Arten von Daten zu widersprechen

Um diese Rechte auszuüben, kontaktieren Sie uns bitte über die oben genannte E-Mail-Adresse.`
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">{currentContent.title}</h1>
        <div className="space-y-8">
          {currentContent.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">{section.title}</h2>
              <div className="text-gray-600 whitespace-pre-line">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
