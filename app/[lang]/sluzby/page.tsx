import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../../data/services";
import { getTranslation, validLangs } from "../../data/translations";

type Props = {
  params: Promise<{ lang: string }>;
};

function LanguageSwitcher({ lang }: { lang: string }) {
  return (
    <div className="langSwitcher">
      {validLangs.map((item) => (
        <Link
          key={item}
          href={`/${item}/sluzby`}
          className={item === lang ? "langLink langLinkActive" : "langLink"}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

export default async function ServicesPage({ params }: Props) {
  const { lang } = await params;

  if (!validLangs.includes(lang as (typeof validLangs)[number])) {
    notFound();
  }

  const t = getTranslation(lang);

  return (
    <main className="page">
      <header className="topbar">
        <div className="container topbarInner">
          <Link href={`/${lang}`} className="logo">
            {t.siteName}
          </Link>

          <div className="topbarRight">
            <nav className="nav">
              <Link href={`/${lang}`}>{t.nav.home}</Link>
              <Link href={`/${lang}/sluzby`}>{t.nav.services}</Link>
            </nav>
            <LanguageSwitcher lang={lang} />
          </div>
        </div>
      </header>

      <section className="section pageHeroCompact">
        <div className="container">
          <p className="sectionLabel">{t.servicesPage.label}</p>
          <h1 className="pageTitle">{t.servicesPage.title}</h1>
          <p className="sectionText">{t.servicesPage.description}</p>
        </div>
      </section>

      <section className="section servicesListingSection">
        <div className="container">
          <div className="serviceCardsGrid">
            {services.map((service) => {
              const serviceText = service.translations[lang as keyof typeof service.translations];
              return (
                <article key={service.slug} className="serviceCard">
                  <img src={service.image} alt={serviceText.title} className="serviceCardImage" />
                  <div className="serviceCardBody">
                    <h3>{serviceText.title}</h3>
                    <p>{serviceText.shortText}</p>
                    <Link href={`/${lang}/sluzby/${service.slug}`} className="btnSecondary">
                      {t.servicesPage.detail}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
