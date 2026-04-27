import type { Lang } from "./translations";

export type ServiceTranslation = {
  title: string;
  shortText: string;
  intro: string;
  bullets: string[];
  suitableFor: string[];
};

export type ServiceItem = {
  slug: string;
  image: string;
  translations: Record<Lang, ServiceTranslation>;
};

export const services: ServiceItem[] = [
  {
    slug: "prumyslove-prostory",
    image: "/services/prumyslove-haly.jpg",
    translations: {
      cs: {
        title: "Průmyslové prostory a haly",
        shortText:
          "Čištění výrobních prostor, skladů a hal se zaměřením na prach, mastnotu a technicky náročné provozy.",
        intro:
          "Zajišťujeme čištění průmyslových prostor a hal tam, kde běžný úklid nestačí. Postup přizpůsobujeme typu provozu, rozsahu znečištění a bezpečnostním požadavkům objektu.",
        bullets: [
          "Mytí stěn, vrat a konstrukcí",
          "Odstranění prachu a pavučin",
          "Odmašťování povrchů",
          "Čištění technických a provozních částí objektu",
          "Mytí oken a prosklených ploch v provozech",
        ],
        suitableFor: ["výrobní haly", "sklady", "technické provozy", "logistická centra"],
      },
      en: {
        title: "Industrial facilities and halls",
        shortText:
          "Cleaning of production areas, warehouses and halls focusing on dust, grease and technically demanding operations.",
        intro:
          "We provide cleaning of industrial premises and halls where routine cleaning is not enough. We adapt the procedure to the type of operation, scope of contamination and safety requirements.",
        bullets: [
          "Cleaning walls, gates and structures",
          "Removal of dust and cobwebs",
          "Degreasing of surfaces",
          "Cleaning of technical and operational areas",
          "Cleaning windows and glazed surfaces in operations",
        ],
        suitableFor: ["production halls", "warehouses", "technical operations", "logistics centres"],
      },
      de: {
        title: "Industriebereiche und Hallen",
        shortText:
          "Reinigung von Produktionsbereichen, Lagern und Hallen mit Fokus auf Staub, Fett und technisch anspruchsvolle Betriebe.",
        intro:
          "Wir reinigen Industrieanlagen und Hallen dort, wo eine normale Reinigung nicht ausreicht. Das Verfahren wird an den Betriebstyp, den Verschmutzungsgrad und die Sicherheitsanforderungen angepasst.",
        bullets: [
          "Reinigung von Wänden, Toren und Konstruktionen",
          "Entfernung von Staub und Spinnweben",
          "Entfettung von Oberflächen",
          "Reinigung technischer und betrieblicher Bereiche",
          "Reinigung von Fenstern und Glasflächen im Betrieb",
        ],
        suitableFor: ["Produktionshallen", "Lager", "technische Betriebe", "Logistikzentren"],
      },
    },
  },
  {
    slug: "administrativni-prostory",
    image: "/services/administrativni.jpg",
    translations: {
      cs: {
        title: "Administrativní prostory",
        shortText:
          "Pravidelný a jednorázový úklid kanceláří, zázemí firem, sociálních zařízení a společných prostor.",
        intro:
          "Kanceláře a administrativní prostory musí působit čistě a reprezentativně. Nastavíme frekvenci i rozsah úklidu podle provozu a požadavků objektu.",
        bullets: [
          "Pravidelný úklid kanceláří",
          "Mytí oken",
          "Čištění koberců a podlah",
          "Úklid sociálních zařízení",
          "Údržba společných prostor a zázemí",
        ],
        suitableFor: ["kanceláře", "administrativní budovy", "showroomy", "firemní zázemí"],
      },
      en: {
        title: "Administrative offices",
        shortText:
          "Regular and one-off cleaning of offices, company facilities, sanitary facilities and common areas.",
        intro:
          "Offices and administrative spaces need to remain clean and representative. We set the cleaning frequency and scope according to the operation and requirements of the facility.",
        bullets: [
          "Regular office cleaning",
          "Window washing",
          "Cleaning carpets and floors",
          "Cleaning sanitary facilities",
          "Maintenance of common areas and back offices",
        ],
        suitableFor: ["offices", "administrative buildings", "showrooms", "company back offices"],
      },
      de: {
        title: "Administrative Räume",
        shortText:
          "Regelmäßige und einmalige Reinigung von Büros, Firmenbereichen, sanitären Anlagen und Gemeinschaftsräumen.",
        intro:
          "Büros und Verwaltungsräume müssen sauber und repräsentativ wirken. Wir passen Reinigungshäufigkeit und Umfang an den Betrieb und die Anforderungen des Objekts an.",
        bullets: [
          "Regelmäßige Büroreinigung",
          "Fensterreinigung",
          "Reinigung von Teppichen und Böden",
          "Reinigung sanitären Anlagen",
          "Pflege von Gemeinschaftsbereichen und Hinterräumen",
        ],
        suitableFor: ["Büros", "Verwaltungsgebäude", "Showrooms", "Firmenbereiche"],
      },
    },
  },
  {
    slug: "stavby",
    image: "/services/stavby.jpg",
    translations: {
      cs: {
        title: "Úklid po stavbě a rekonstrukci",
        shortText:
          "Průběžné i finální úklidy staveb včetně odstranění stavebních nečistot, prachu a zbytků materiálu.",
        intro:
          "Provádíme úklid během stavby i po dokončení projektu. Připravíme objekt k předání, spuštění provozu nebo kolaudaci.",
        bullets: [
          "Průběžné úklidy během stavby",
          "Kolaudační a finální úklidy",
          "Odstranění stavebního prachu",
          "Čištění po barvách, penetracích a hmotách",
          "Úklid i při zachování provozu objektu",
        ],
        suitableFor: ["developerské projekty", "novostavby", "rekonstrukce", "komerční objekty"],
      },
      en: {
        title: "Post-construction and renovation cleaning",
        shortText:
          "Ongoing and final cleaning of construction sites including removal of construction debris, dust and material residues.",
        intro:
          "We clean during construction as well as after completion. We prepare the property for handover, opening or inspection.",
        bullets: [
          "Ongoing cleaning during construction",
          "Final and handover cleaning",
          "Removal of construction dust",
          "Cleaning after paints, primers and compounds",
          "Cleaning while keeping the facility in operation",
        ],
        suitableFor: ["development projects", "new builds", "renovations", "commercial premises"],
      },
      de: {
        title: "Bau- und Renovierungsreinigung",
        shortText:
          "Laufende und abschließende Reinigung von Baustellen einschließlich der Entfernung von Bauverschmutzungen, Staub und Materialresten.",
        intro:
          "Wir reinigen während des Baus und nach Abschluss des Projekts. Wir bereiten das Objekt für Übergabe, Inbetriebnahme oder Abnahme vor.",
        bullets: [
          "Laufende Reinigung während des Baus",
          "Abschluss- und Übergabereinigung",
          "Entfernung von Baustaub",
          "Reinigung nach Farben, Grundierungen und Baustoffen",
          "Reinigung bei laufendem Betrieb",
        ],
        suitableFor: ["Entwicklungsprojekte", "Neubauten", "Renovierungen", "kommerzielle Objekte"],
      },
    },
  },
  {
    slug: "tlakove-myti",
    image: "/services/tlakove-myti.jpg",
    translations: {
      cs: {
        title: "Tlakové mytí",
        shortText:
          "Tlakové čištění fasád, dlažeb, venkovních ploch, techniky a dalších odolných povrchů.",
        intro:
          "Tlakové mytí je vhodné tam, kde je potřeba odstranit tvrdé nečistoty, mastnotu, mechy, řasy nebo dlouhodobé nánosy z odolných materiálů.",
        bullets: [
          "Čištění fasád",
          "Mytí dlažeb a betonových ploch",
          "Odstranění mechů, řas a plísní",
          "Čištění techniky a vozidel",
          "Odstranění nánosů z odolných konstrukcí",
        ],
        suitableFor: ["venkovní plochy", "fasády", "stavební technika", "průmyslové areály"],
      },
      en: {
        title: "Pressure washing",
        shortText:
          "Pressure cleaning of facades, paving, outdoor areas, machinery and other durable surfaces.",
        intro:
          "Pressure washing is suitable where hard dirt, grease, moss, algae or long-term deposits need to be removed from durable materials.",
        bullets: [
          "Facade cleaning",
          "Cleaning paving and concrete surfaces",
          "Removal of moss, algae and mould",
          "Cleaning machinery and vehicles",
          "Removal of deposits from durable structures",
        ],
        suitableFor: ["outdoor areas", "facades", "construction equipment", "industrial sites"],
      },
      de: {
        title: "Hochdruckreinigung",
        shortText:
          "Hochdruckreinigung von Fassaden, Pflasterflächen, Außenbereichen, Technik und anderen widerstandsfähigen Oberflächen.",
        intro:
          "Die Hochdruckreinigung eignet sich dort, wo hartnäckiger Schmutz, Fett, Moose, Algen oder langjährige Ablagerungen von robusten Materialien entfernt werden müssen.",
        bullets: [
          "Reinigung von Fassaden",
          "Reinigung von Pflaster- und Betonflächen",
          "Entfernung von Moos, Algen und Schimmel",
          "Reinigung von Technik und Fahrzeugen",
          "Entfernung von Ablagerungen auf widerstandsfähigen Konstruktionen",
        ],
        suitableFor: ["Außenflächen", "Fassaden", "Bautechnik", "industrielle Areale"],
      },
    },
  },
  {
    slug: "podlahy",
    image: "/services/podlahy.jpg",
    translations: {
      cs: {
        title: "Strojní čištění a obnova podlah",
        shortText:
          "Chemické a mechanické čištění podlah, odstranění starých vrstev a nové ošetření povrchu.",
        intro:
          "Podlahy řešíme podle materiálu, stavu a typu znečištění. Volíme odpovídající technologii i chemii podle konkrétního povrchu.",
        bullets: [
          "Čištění dlažby a kameniny",
          "Odstranění starých vosků",
          "Nanesení nových ochranných vrstev",
          "Hloubkové čištění syntetických povrchů",
          "Čištění dalších podlahových materiálů podle typu provozu",
        ],
        suitableFor: ["obchodní prostory", "kanceláře", "haly", "školy a instituce"],
      },
      en: {
        title: "Machine floor cleaning and restoration",
        shortText:
          "Chemical and mechanical cleaning of floors, removal of old layers and new surface treatment.",
        intro:
          "We treat floors according to the material, condition and type of contamination. We choose the appropriate technology and chemistry for the specific surface.",
        bullets: [
          "Cleaning tiles and stone",
          "Removing old wax layers",
          "Applying new protective coats",
          "Deep cleaning synthetic surfaces",
          "Cleaning other floor materials according to the facility type",
        ],
        suitableFor: ["retail spaces", "offices", "halls", "schools and institutions"],
      },
      de: {
        title: "Maschinelle Bodenreinigung und Erneuerung",
        shortText:
          "Chemische und mechanische Reinigung von Böden, Entfernung alter Schichten und neue Oberflächenbehandlung.",
        intro:
          "Wir behandeln Böden je nach Material, Zustand und Art der Verschmutzung. Wir wählen die geeignete Technologie und Chemie für die konkrete Oberfläche.",
        bullets: [
          "Reinigung von Fliesen und Stein",
          "Entfernung alter Wachsschichten",
          "Auftragen neuer Schutzschichten",
          "Tiefenreinigung synthetischer Oberflächen",
          "Reinigung anderer Bodenbeläge je nach Objekttyp",
        ],
        suitableFor: ["Verkaufsflächen", "Büros", "Hallen", "Schulen und Institutionen"],
      },
    },
  },
  {
    slug: "specialni-prace",
    image: "/services/specialni-prace.jpg",
    translations: {
      cs: {
        title: "Speciální práce a atypické čištění",
        shortText:
          "Individuální zásahy pro technicky náročné, citlivé nebo nestandardní čištění.",
        intro:
          "Řešíme i zakázky, které se nevejdou do běžných kategorií. Navrhujeme vhodný postup podle typu povrchu, objektu a rozsahu znečištění.",
        bullets: [
          "Čištění interiérů autobusů",
          "Čištění lokomotiv a kolejových vozidel",
          "Čištění interiérů kamionů",
          "Mytí oken a prosklených ploch",
          "Odstranění stavebních hmot z citlivých povrchů",
          "Individuální zásahy podle typu objektu a materiálu",
        ],
        suitableFor: ["dopravní prostředky", "logistické provozy", "technické objekty", "komerční budovy", "objekty po stavebních zásazích"],
      },
      en: {
        title: "Special works and atypical cleaning",
        shortText:
          "Individual interventions for technically demanding, sensitive or non-standard cleaning.",
        intro:
          "We also handle assignments that do not fit into standard categories. We propose the appropriate procedure according to the type of surface, facility and scope of contamination.",
        bullets: [
          "Cleaning bus interiors",
          "Cleaning locomotives and railway vehicles",
          "Cleaning truck interiors",
          "Washing windows and glazed surfaces",
          "Removing construction compounds from sensitive surfaces",
          "Individual interventions according to the object and material",
        ],
        suitableFor: ["transport vehicles", "logistics operations", "technical facilities", "commercial buildings", "sites after construction works"],
      },
      de: {
        title: "Spezialarbeiten und atypische Reinigung",
        shortText:
          "Individuelle Einsätze für technisch anspruchsvolle, empfindliche oder nicht standardisierte Reinigungen.",
        intro:
          "Wir übernehmen auch Aufträge, die nicht in übliche Kategorien passen. Wir schlagen das geeignete Verfahren nach Oberflächenart, Objekt und Verschmutzungsgrad vor.",
        bullets: [
          "Reinigung von Businnenräumen",
          "Reinigung von Lokomotiven und Schienenfahrzeugen",
          "Reinigung von LKW-Innenräumen",
          "Reinigung von Fenstern und Glasflächen",
          "Entfernung von Baustoffen auf empfindlichen Oberflächen",
          "Individuelle Einsätze je nach Objekt und Material",
        ],
        suitableFor: ["Fahrzeuge", "Logistikbetriebe", "technische Objekte", "kommerzielle Gebäude", "Objekte nach Bauarbeiten"],
      },
    },
  },
];
