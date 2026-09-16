import Container from '../common/Container'
import Icon from '../common/Icon'
import { brand, contact, footerColumns, legalLinks } from '../../data/site'

/**
 * Site footer. Four columns on desktop, stacked on mobile, one hairline
 * above the legal row.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline bg-ink-950">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="grid h-9 w-9 place-items-center rounded-[12px] bg-gradient-to-br from-daond to-violet text-[0.8125rem] font-extrabold text-white"
              >
                D
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-[0.9375rem] font-extrabold tracking-[0.16em] text-mist">
                  {brand.name}
                </span>
                <span className="mt-[5px] text-[0.6875rem] text-muted">
                  {brand.suffix}
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm text-muted">{brand.flow}</p>
            <p className="mt-2 text-sm text-mist/85">{brand.korean}</p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.id}>
              <h3 className="text-[0.8125rem] font-semibold text-mist">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.items.map((item) => (
                  <li key={`${column.id}-${item.label}`}>
                    <a
                      href={item.href}
                      className="text-sm text-muted transition-colors duration-200 ease-gateway hover:text-mist"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[0.8125rem] font-semibold text-mist">
              Liên hệ
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 transition-colors duration-200 ease-gateway hover:text-mist"
                >
                  <Icon name="mail" weight="regular" size={16} />
                  {contact.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Icon name="phone" weight="regular" size={16} />
                {contact.kakao}
              </li>
              <li className="inline-flex items-start gap-2">
                <Icon
                  name="pin"
                  weight="regular"
                  size={16}
                  className="mt-[3px] shrink-0"
                />
                <span>{contact.locations.join(' · ')}</span>
              </li>
              <li className="inline-flex items-start gap-2">
                <Icon
                  name="globe"
                  weight="regular"
                  size={16}
                  className="mt-[3px] shrink-0"
                />
                <span>{contact.languages}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-hairline pt-6 text-[0.8125rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.name} Market Entry Partners. {brand.flow}
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors duration-200 ease-gateway hover:text-mist"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}