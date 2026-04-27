import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '../../../data/services'
import { getTranslation, validLangs } from '../../../data/translations'

type Props = {
  params: Promise<{ lang: string; slug: string }>
}

function LanguageSwitcher({ lang, slug }: { lang: string; slug: string }) {
  return (
    <div className="langSwitcher">
      {validLangs.map((item) => (
        <Link
          key={item}
          href={`/${item}/sluzby/${slug}`}
          className={item === lang ? 'langLink langLinkActive' : 'langLink'}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}

export default async function ServiceDetailPage({ params }: Props) {
  const { lang, slug } = await params

  if (!validLangs.includes(lang as (typeof validLangs)[number])) {
    notFound()
  }

  const service = services.find((item) => item.slug === slug)
  if (!service) {
    notFound()
  }

  const t = getTranslation(lang)
  const serviceText = service.translations[lang as keyof typeof service.translations]

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
            <LanguageSwitcher lang={lang} slug={slug} />
          </div>
        </div>
      </header>

      <section className="section pageHeroCompact">
        <div className="container">
          <p className="sectionLabel">{t.serviceDetail.label}</p>
          <h1 className="pageTitle">{serviceText.title}</h1>
          <p className="sectionText">{serviceText.intro}</p>
        </div>
      </section>

      <section className="section serviceDetailSection">
        <div className="container serviceDetailGrid">
          <div>
            <img src={service.image} alt={serviceText.title} className="serviceDetailImage" />
          </div>

          <div className="detailCard">
            <h2>{t.serviceDetail.includeTitle}</h2>
            <ul className="detailList">
              {serviceText.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>{t.serviceDetail.suitableTitle}</h2>
            <ul className="detailList">
              {serviceText.suitableFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="detailActions">
              <a href={`/${lang}?service=${slug}#contact`} className="btnPrimary">
                {t.serviceDetail.quote}
              </a>
              <Link href={`/${lang}/sluzby`} className="btnSecondary">
                {t.serviceDetail.back}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
