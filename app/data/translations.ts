export type Lang = "cs" | "en" | "de";

export type TranslationMap = {
  siteName: string;
  nav: {
    home: string;
    services: string;
    why: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    callPrimary: string;
    callSecondary: string;
    highlights: string[];
    panelLabel: string;
    panelTitle: string;
    panelText: string;
    panelLink: string;
  };
  servicesIntro: {
    label: string;
    title: string;
    description: string;
    allServices: string;
    detail: string;
  };
  why: {
    label: string;
    title: string;
    cards: { title: string; text: string }[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    phoneLabel: string;
    emailLabel: string;
    regionLabel: string;
    regionLines: string[];
    nameLabel: string;
    companyLabel: string;
    emailFieldLabel: string;
    phoneFieldLabel: string;
    messageLabel: string;
    submit: string;
  };
  servicesPage: {
    label: string;
    title: string;
    description: string;
    detail: string;
  };
  serviceDetail: {
    label: string;
    includeTitle: string;
    suitableTitle: string;
    back: string;
    quote: string;
  };
  switcher: {
    cs: string;
    en: string;
    de: string;
  };
};

export const translations: Record<Lang, TranslationMap> = {
  cs: {
    siteName: "JSPD Cleaning",
    nav: {
      home: "Úvod",
      services: "Služby",
      why: "Proč my",
      contact: "Kontakt",
    },
    hero: {
      badge: "Profesionální úklid pro firmy a provozy",
      title: "Úklid a odborné čištění pro firmy, haly a provozy",
      description:
        "Zajišťujeme pravidelný úklid, technické čištění i náročnější zakázky tam, kde je potřeba spolehlivost, správný postup a kvalitní výsledek.",
      callPrimary: "Nezávazná poptávka",
      callSecondary: "Zobrazit služby",
      highlights: ["Průmyslové provozy", "Úklid po stavbě", "Speciální zásahy"],
      panelLabel: "JSPD Cleaning",
      panelTitle: "Profesionální úklid a odborné čištění pro firemní provozy",
      panelText:
        "Zajišťujeme pravidelný servis i specializované zásahy v administrativních, průmyslových a technických objektech. Rozsah prací přizpůsobujeme typu provozu i konkrétním požadavkům zákazníka.",
      panelLink: "Přejít na přehled služeb",
    },
    servicesIntro: {
      label: "Služby",
      title: "Hlavní oblasti, které zajišťujeme",
      description:
        "Nabízíme pravidelný úklid i specializované služby pro objekty, kde je potřeba správný postup, technické vybavení a zkušenost s náročnějšími zásahy.",
      allServices: "Všechny služby",
      detail: "Detail služby",
    },
    why: {
      label: "Proč JSPD Cleaning",
      title: "Na co se při spolupráci zaměřujeme",
      cards: [
        {
          title: "Správně nastavený rozsah",
          text:
            "Každá zakázka má jiné požadavky. Rozsah prací i postup řešíme podle typu objektu, stupně znečištění a provozních možností zákazníka.",
        },
        {
          title: "Pravidelný servis i jednorázové zásahy",
          text:
            "Zajišťujeme dlouhodobý úklid i jednotlivé akce, například po stavbě, při technickém znečištění nebo u atypických požadavků.",
        },
        {
          title: "Důraz na výsledek",
          text:
            "Cílem není jen provést práci, ale odevzdat prostor ve stavu, který odpovídá domluvenému zadání a účelu objektu.",
        },
      ],
    },
    contact: {
      label: "Kontakt",
      title: "Potřebujete nacenit úklid nebo odborné čištění?",
      description:
        "Pošlete nám základní informace o objektu nebo zakázce a připravíme návrh vhodného řešení.",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      regionLabel: "Působnost",
      regionLines: ["Česká republika", "Slovensko", "Polsko", "Německo", "Rakousko"],
      nameLabel: "Jméno",
      companyLabel: "Firma",
      emailFieldLabel: "E-mail",
      phoneFieldLabel: "Telefon",
      messageLabel: "Co potřebujete vyřešit",
      submit: "Odeslat poptávku",
    },
    servicesPage: {
      label: "Služby",
      title: "Přehled služeb",
      description:
        "Každá hlavní služba má vlastní detail. To je praktičtější než mít všechno namačkané na homepage.",
      detail: "Detail služby",
    },
    serviceDetail: {
      label: "Služba",
      includeTitle: "Co obvykle zahrnuje",
      suitableTitle: "Typické objekty",
      back: "Zpět na služby",
      quote: "Nezávazná poptávka",
    },
    switcher: {
      cs: "CZ",
      en: "EN",
      de: "DE",
    },
  },
  en: {
    siteName: "JSPD Cleaning",
    nav: {
      home: "Home",
      services: "Services",
      why: "Why us",
      contact: "Contact",
    },
    hero: {
      badge: "Professional cleaning for companies and facilities",
      title: "Cleaning and specialised maintenance for companies, halls and facilities",
      description:
        "We provide regular cleaning, technical maintenance and more demanding assignments where reliability, proper procedure and quality results are required.",
      callPrimary: "Request a quote",
      callSecondary: "View services",
      highlights: ["Industrial facilities", "Post-construction cleaning", "Special tasks"],
      panelLabel: "JSPD Cleaning",
      panelTitle: "Professional cleaning and technical maintenance for corporate facilities",
      panelText:
        "We deliver regular service and specialised interventions in administrative, industrial and technical facilities. The scope of work is adapted to the type of operation and the customer's specific requirements.",
      panelLink: "Go to service overview",
    },
    servicesIntro: {
      label: "Services",
      title: "Key areas we cover",
      description:
        "We offer regular cleaning and specialised services for facilities where the right procedure, technical equipment and experience with demanding tasks are required.",
      allServices: "All services",
      detail: "Service detail",
    },
    why: {
      label: "Why JSPD Cleaning",
      title: "What we focus on in cooperation",
      cards: [
        {
          title: "Clearly defined scope",
          text:
            "Every assignment has different requirements. We determine the scope of work and procedures based on the type of facility, level of contamination and operational possibilities.",
        },
        {
          title: "Regular service and one-off interventions",
          text:
            "We provide long-term cleaning as well as single assignments, for example after construction, during technical contamination or at atypical requirements.",
        },
        {
          title: "Focus on results",
          text:
            "The goal is not just to carry out the work, but to deliver a space in a condition that meets the agreed assignment and the purpose of the facility.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Do you need a price estimate for cleaning or technical maintenance?",
      description:
        "Send us basic information about the facility or assignment and we will prepare a suitable solution proposal.",
      phoneLabel: "Phone",
      emailLabel: "E-mail",
      regionLabel: "Territory",
      regionLines: ["Czech Republic", "Slovakia", "Poland", "Germany", "Austria"],
      nameLabel: "Name",
      companyLabel: "Company",
      emailFieldLabel: "E-mail",
      phoneFieldLabel: "Phone",
      messageLabel: "What do you need to resolve",
      submit: "Send request",
    },
    servicesPage: {
      label: "Services",
      title: "Service overview",
      description:
        "Each core service has its own detail page. This is more practical than cramming everything onto the homepage.",
      detail: "Service detail",
    },
    serviceDetail: {
      label: "Service",
      includeTitle: "Typically includes",
      suitableTitle: "Typical facilities",
      back: "Back to services",
      quote: "Request a quote",
    },
    switcher: {
      cs: "CZ",
      en: "EN",
      de: "DE",
    },
  },
  de: {
    siteName: "JSPD Cleaning",
    nav: {
      home: "Startseite",
      services: "Leistungen",
      why: "Warum wir",
      contact: "Kontakt",
    },
    hero: {
      badge: "Professionelle Reinigung für Unternehmen und Betriebe",
      title: "Reinigung und fachgerechte Pflege für Unternehmen, Hallen und Anlagen",
      description:
        "Wir bieten regelmäßige Reinigung, technische Pflege und anspruchsvolle Aufträge, bei denen Zuverlässigkeit, das richtige Verfahren und ein qualitatives Ergebnis erforderlich sind.",
      callPrimary: "Anfrage stellen",
      callSecondary: "Leistungen ansehen",
      highlights: ["Industriebetriebe", "Bauendreinigung", "Spezialarbeiten"],
      panelLabel: "JSPD Cleaning",
      panelTitle: "Professionelle Reinigung und technische Pflege für Unternehmensanlagen",
      panelText:
        "Wir bieten regelmäßigen Service und spezielle Einsätze in administrativen, industriellen und technischen Objekten. Der Arbeitsumfang wird an die Art des Betriebs und die spezifischen Anforderungen des Kunden angepasst.",
      panelLink: "Zur Leistungsübersicht",
    },
    servicesIntro: {
      label: "Leistungen",
      title: "Hauptbereiche, die wir abdecken",
      description:
        "Wir bieten regelmäßige Reinigung und spezialisierte Dienstleistungen für Objekte, bei denen das richtige Verfahren, technische Ausrüstung und Erfahrung mit anspruchsvollen Aufträgen erforderlich sind.",
      allServices: "Alle Leistungen",
      detail: "Leistung im Detail",
    },
    why: {
      label: "Warum JSPD Cleaning",
      title: "Worauf wir bei der Zusammenarbeit achten",
      cards: [
        {
          title: "Richtig definierter Umfang",
          text:
            "Jeder Auftrag hat andere Anforderungen. Wir bestimmen den Arbeitsumfang und das Verfahren je nach Objekttyp, Verschmutzungsgrad und betrieblichen Möglichkeiten.",
        },
        {
          title: "Regelmäßiger Service und einmalige Einsätze",
          text:
            "Wir bieten langfristige Reinigung sowie Einzelaufträge an, zum Beispiel nach dem Bau, bei technischer Verschmutzung oder bei atypischen Anforderungen.",
        },
        {
          title: "Fokus auf Ergebnisse",
          text:
            "Ziel ist es nicht nur, die Arbeit zu erledigen, sondern den Raum in einem Zustand zu übergeben, der dem vereinbarten Auftrag und dem Zweck des Objekts entspricht.",
        },
      ],
    },
    contact: {
      label: "Kontakt",
      title: "Benötigen Sie ein Angebot für Reinigung oder technische Pflege?",
      description:
        "Senden Sie uns grundlegende Informationen über das Objekt oder den Auftrag und wir erstellen einen geeigneten Lösungsvorschlag.",
      phoneLabel: "Telefon",
      emailLabel: "E-Mail",
      regionLabel: "Gebiet",
      regionLines: ["Tschechien", "Slowakei", "Polen", "Deutschland", "Österreich"],
      nameLabel: "Name",
      companyLabel: "Firma",
      emailFieldLabel: "E-Mail",
      phoneFieldLabel: "Telefon",
      messageLabel: "Was möchten Sie klären",
      submit: "Anfrage senden",
    },
    servicesPage: {
      label: "Leistungen",
      title: "Leistungsübersicht",
      description:
        "Jede Hauptleistung hat ihre eigene Detailseite. Das ist praktischer, als alles auf die Startseite zu packen.",
      detail: "Leistung im Detail",
    },
    serviceDetail: {
      label: "Leistung",
      includeTitle: "Beinhaltet üblicherweise",
      suitableTitle: "Typische Objekte",
      back: "Zurück zu den Leistungen",
      quote: "Anfrage stellen",
    },
    switcher: {
      cs: "CZ",
      en: "EN",
      de: "DE",
    },
  },
};

export const validLangs: Lang[] = ["cs", "en", "de"];

export function getTranslation(lang: string): TranslationMap {
  return translations[(validLangs.includes(lang as Lang) ? lang : "cs") as Lang];
}
