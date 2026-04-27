import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '../data/services'
import { getTranslation, validLangs } from '../data/translations'
import ContactForm from './ContactForm'

type Props = {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ service?: string | string[] | undefined }>
}

function LanguageSwitcher({ lang }: { lang: string }) {
  return (
    <div className="langSwitcher">
      {validLangs.map((item) => (
        <Link
          key={item}
          href={`/${item}`}
          className={item === lang ? 'langLink langLinkActive' : 'langLink'}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}

function getSingleSearchParam(value: string | string[] | undefined): string | null {
  if (typeof value === 'string') {
    return value
  }

  if (Array.isArray(value) && value.length > 0) {
    return value[0] ?? null
  }

  return null
}

export default async function Page({ params, searchParams }: Props) {
  const { lang } = await params

  if (!validLangs.includes(lang as (typeof validLangs)[number])) {
    notFound()
  }

  const query = await searchParams
  const requestedServiceSlug = getSingleSearchParam(query.service)
  const selectedServiceSlug = services.some((service) => service.slug === requestedServiceSlug)
    ? requestedServiceSlug
    : null

  const t = getTranslation(lang)
  const featured = services.slice(0, 6)
  const operatorLabel =
    lang === 'de' ? 'Betreiber' : lang === 'en' ? 'Operator' : 'Provozovatel'
  const registeredOfficeLabel =
    lang === 'de' ? 'Sitz' : lang === 'en' ? 'Registered office' : 'Sídlo'
  const dataBoxLabel =
    lang === 'de' ? 'Datenbox' : lang === 'en' ? 'Data box' : 'Datová schránka'

  const formTextByLang = {
    cs: {
      sending: 'Odesilani...',
      successMessage: 'Formular byl uspesne odeslan.',
      genericError: 'Odeslani formulare selhalo.',
      nameRequired: 'Vyplnte jmeno.',
      emailRequired: 'Vyplnte e-mail.',
      emailInvalid: 'E-mail neni ve spravnem formatu.',
      messageRequired: 'Vyplnte zpravu.',
    },
    en: {
      sending: 'Sending...',
      successMessage: 'Your request was sent successfully.',
      genericError: 'Sending the form failed.',
      nameRequired: 'Please fill in your name.',
      emailRequired: 'Please fill in your email.',
      emailInvalid: 'Email format is invalid.',
      messageRequired: 'Please fill in your message.',
    },
    de: {
      sending: 'Wird gesendet...',
      successMessage: 'Ihre Anfrage wurde erfolgreich gesendet.',
      genericError: 'Das Senden des Formulars ist fehlgeschlagen.',
      nameRequired: 'Bitte fuellen Sie Ihren Namen aus.',
      emailRequired: 'Bitte fuellen Sie Ihre E-Mail aus.',
      emailInvalid: 'Das E-Mail-Format ist ungueltig.',
      messageRequired: 'Bitte fuellen Sie Ihre Nachricht aus.',
    },
  } as const

  const formText = formTextByLang[lang as keyof typeof formTextByLang] ?? formTextByLang.cs

  return (
    <main className="page">
      <header className="topbar">
        <div className="container topbarInner">
          <div className="logo">
            <img
              src="/jspdcleaning-logo.png"
              alt={`${t.siteName} logo`}
              className="logoMark"
            />
            <span>{t.siteName}</span>
          </div>

          <div className="topbarRight">
            <nav className="nav">
              <a href="#services">{t.nav.services}</a>
              <a href="#why">{t.nav.why}</a>
              <a href="#contact">{t.nav.contact}</a>
            </nav>
            <LanguageSwitcher lang={lang} />
          </div>
        </div>
      </header>

      <section className="hero heroBlue">
        <div className="container heroGrid">
          <div>
            <div className="badge">{t.hero.badge}</div>
            <h1>{t.hero.title}</h1>
            <p className="heroText">{t.hero.description}</p>

            <div className="heroButtons">
              <a className="btnPrimary" href="#contact">
                {t.hero.callPrimary}
              </a>
              <Link className="btnSecondary" href={`/${lang}/sluzby`}>
                {t.hero.callSecondary}
              </Link>
            </div>

            <div className="heroHighlights">
              {t.hero.highlights.map((item) => (
                <div key={item} className="heroHighlight">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="heroPanel">
            <div className="panelLabel">{t.hero.panelLabel}</div>
            <h2>{t.hero.panelTitle}</h2>
            <p>{t.hero.panelText}</p>
            <Link className="panelLink" href={`/${lang}/sluzby`}>
              {t.hero.panelLink}
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="sectionIntro">
            <p className="sectionLabel">{t.servicesIntro.label}</p>
            <h2>{t.servicesIntro.title}</h2>
            <p className="sectionText">{t.servicesIntro.description}</p>
          </div>

          <div className="serviceCardsGrid">
            {featured.map((service) => {
              const serviceText = service.translations[lang as keyof typeof service.translations]
              return (
                <article key={service.slug} className="serviceCard">
                  <img src={service.image} alt={serviceText.title} className="serviceCardImage" />
                  <div className="serviceCardBody">
                    <h3>{serviceText.title}</h3>
                    <p>{serviceText.shortText}</p>
                    <Link href={`/${lang}/sluzby/${service.slug}`} className="textLink">
                      {t.servicesIntro.detail}
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="centerRow">
            <Link className="btnPrimary" href={`/${lang}/sluzby`}>
              {t.servicesIntro.allServices}
            </Link>
          </div>
        </div>
      </section>

      <section id="why" className="section sectionTint">
        <div className="container">
          <div className="sectionIntro">
            <p className="sectionLabel">{t.why.label}</p>
            <h2>{t.why.title}</h2>
          </div>

          <div className="whyGrid">
            {t.why.cards.map((card) => (
              <div key={card.title} className="whyCard">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contactGrid">
          <div className="contactInfo">
            <p className="sectionLabel">{t.contact.label}</p>
            <h2>{t.contact.title}</h2>
            <p className="sectionText">{t.contact.description}</p>

            <div className="contactList">
              <div>
                <strong>{t.contact.phoneLabel}</strong>
                <p>+420 731 955 936</p>
              </div>
              <div>
                <strong>{t.contact.emailLabel}</strong>
                <p>cleaning@jspd.cz</p>
              </div>
              <div>
                <strong>{t.contact.regionLabel}</strong>
                <p className="countryList">
                  {t.contact.regionLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <ContactForm
            lang={lang}
            serviceSlug={selectedServiceSlug}
            t={{
              nameLabel: t.contact.nameLabel,
              companyLabel: t.contact.companyLabel,
              emailFieldLabel: t.contact.emailFieldLabel,
              phoneFieldLabel: t.contact.phoneFieldLabel,
              messageLabel: t.contact.messageLabel,
              submit: t.contact.submit,
              sending: formText.sending,
              successMessage: formText.successMessage,
              genericError: formText.genericError,
              nameRequired: formText.nameRequired,
              emailRequired: formText.emailRequired,
              emailInvalid: formText.emailInvalid,
              messageRequired: formText.messageRequired,
            }}
          />
        </div>
      </section>

      <footer className="siteFooter">
        <div className="container siteFooterInner">
          <div className="siteFooterDetails">
            <p>
              <strong>{operatorLabel}:</strong> JSPD Holding s.r.o.
            </p>
            <p>
              <strong>IČO:</strong> 23415738
            </p>
            <p>
              <strong>{registeredOfficeLabel}:</strong> Riegrova 394/17, 779 00 Olomouc
            </p>
            <p>
              <strong>E-mail:</strong> jspdholding@gmail.com
            </p>
            <p>
              <strong>{dataBoxLabel}:</strong> qifj4ye
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
