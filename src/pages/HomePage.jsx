import { motion } from 'framer-motion'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Container from '../components/common/Container'
import SectionTitle from '../components/common/SectionTitle'
import GlowCard from '../components/common/GlowCard'
import Button from '../components/common/Button'
import Icon from '../components/common/Icon'
import SeoulNode from '../components/gateway/SeoulNode'
import VietnamNode from '../components/gateway/VietnamNode'
import DaonCore from '../components/gateway/DaonCore'
import ServiceNode from '../components/gateway/ServiceNode'
import ServiceInfoPanel from '../components/gateway/ServiceInfoPanel'
import ConnectionLine from '../components/gateway/ConnectionLine'
import ScrollProgressBar from '../components/ScrollProgress'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useActiveService } from '../hooks/useActiveService'
import {
  revealProps,
  staggerGroup,
  fadeUp,
  viewportOnce,
} from '../utils/animation'
import { services } from '../data/services'
import { journeySteps } from '../data/journey'
import { comparison, capabilities } from '../data/whyDaon'
import { testimonials, SAMPLE_NOTICE } from '../data/testimonials'
import { faqItems } from '../data/faq'
import { contact } from '../data/site'

/*
 * Connection geometry, in the 0-100 stage coordinate space shared with the
 * absolutely positioned nodes (SVG viewBox is stretched with
 * preserveAspectRatio="none").
 */
const connections = [
  { id: 'seoul-core', d: 'M 50 13 L 50 27', color: '#4f8cff', serviceId: null },
  { id: 'core-company', d: 'M 50 41 C 50 49 30 48 22 53', color: '#4F8CFF', serviceId: 'company' },
  { id: 'core-office', d: 'M 50 41 C 50 49 70 48 78 53', color: '#7C5CFF', serviceId: 'office' },
  { id: 'core-tax', d: 'M 50 41 C 50 60 34 63 32 75', color: '#FFB020', serviceId: 'tax' },
  { id: 'core-hr', d: 'M 50 41 C 50 60 66 63 68 75', color: '#39D98A', serviceId: 'hr' },
  { id: 'company-vn', d: 'M 21 62 C 21 78 38 86 46 92', color: '#4F8CFF', serviceId: 'company' },
  { id: 'office-vn', d: 'M 79 62 C 79 78 62 86 54 92', color: '#7C5CFF', serviceId: 'office' },
  { id: 'tax-vn', d: 'M 33 83 C 36 89 42 91 46 93', color: '#FFB020', serviceId: 'tax' },
  { id: 'hr-vn', d: 'M 67 83 C 64 89 58 91 54 93', color: '#39D98A', serviceId: 'hr' },
]

const nodePositions = {
  company: { x: 21, y: 57 },
  office: { x: 79, y: 57 },
  tax: { x: 32, y: 80 },
  hr: { x: 68, y: 80 },
}

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion()
  const progress = useScrollProgress()
  const { activeId, pinnedId, hover, clearHover, togglePin } = useActiveService()

  return (
    <>
      <a href="#main-content" className="skip-link">
        Vào nội dung chính
      </a>

      <ScrollProgressBar progress={progress} />
      <Header />

      <main id="main-content">
        {/* ── Hero: interactive gateway ─────────────────────────────── */}
        <section
          id="top"
          aria-labelledby="hero-title"
          className="relative overflow-hidden pb-10 pt-28 lg:pb-14 lg:pt-24"
        >
          <div aria-hidden="true" className="net-grid pointer-events-none absolute inset-0 opacity-60" />
          <div
            aria-hidden="true"
            className="halo left-1/2 top-[-140px] h-[320px] w-[680px] -translate-x-1/2 bg-daond/20"
          />

          <Container className="relative">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-[720px] text-center"
            >
              <span className="label-micro">Korea → DAON → Vietnam</span>
              <h1
                id="hero-title"
                className="mt-4 text-[2rem] leading-[1.12] font-extrabold text-mist sm:text-[2.5rem] lg:text-[3rem]"
              >
                한국에서 베트남까지,
                <span className="block text-daond-soft">하나의 파트너</span>
              </h1>
              <p className="mx-auto mt-5 max-w-[58ch] text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                DAON은 베트남 시장 진입 기업을 위한 통합 파트너입니다. 조사,
                설립, 운영을 하나의 팀에서 진행합니다. 법인 설립부터 세무·회계,
                인사까지 하나의 계약으로 관리됩니다.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button href="#consultation" size="lg">
                  상담 요청하기
                  <Icon name="arrowRight" weight="regular" size={16} />
                </Button>
                <Button href="#services" variant="secondary" size="lg">
                  서비스 살펴보기
                </Button>
              </div>
            </motion.div>

            {/* Desktop gateway stage */}
            <div className="relative mt-10 hidden h-[600px] lg:block">
              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                {connections.map((line) => {
                  const highlighted = line.serviceId !== null && activeId === line.serviceId
                  const dimmed = line.serviceId !== null && activeId !== null && activeId !== line.serviceId
                  return (
                    <ConnectionLine
                      key={line.id}
                      d={line.d}
                      color={line.color}
                      highlighted={highlighted}
                      dimmed={dimmed}
                      drawDelay={0.35}
                      shouldReduceMotion={shouldReduceMotion}
                    />
                  )
                })}
              </svg>

              <SeoulNode
                variant="stage"
                x={50}
                y={10}
                shouldReduceMotion={shouldReduceMotion}
              />
              <DaonCore
                variant="stage"
                x={50}
                y={34}
                active={activeId !== null}
                shouldReduceMotion={shouldReduceMotion}
              />

              {services.map((service) => {
                const position = nodePositions[service.id]
                return (
                  <ServiceNode
                    key={service.id}
                    service={service}
                    variant="stage"
                    x={position.x}
                    y={position.y}
                    active={activeId === service.id}
                    dimmed={activeId !== null && activeId !== service.id}
                    pinned={pinnedId === service.id}
                    onHover={hover}
                    onLeave={clearHover}
                    onSelect={togglePin}
                    shouldReduceMotion={shouldReduceMotion}
                    delay={0.55}
                  />
                )
              })}

              <VietnamNode
                variant="stage"
                x={50}
                y={95}
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>

            {/* Mobile gateway flow */}
            <div className="mx-auto mt-10 flex max-w-[440px] flex-col gap-3 lg:hidden">
              <SeoulNode variant="flow" shouldReduceMotion={shouldReduceMotion} />
              {services.map((service) => (
                <ServiceNode
                  key={service.id}
                  service={service}
                  variant="stack"
                  shouldReduceMotion={shouldReduceMotion}
                  delay={0.5}
                />
              ))}
              <DaonCore variant="flow" shouldReduceMotion={shouldReduceMotion} />
              <VietnamNode variant="flow" shouldReduceMotion={shouldReduceMotion} />
            </div>

            <ServiceInfoPanel
              activeId={activeId}
              pinnedId={pinnedId}
              onHover={hover}
              onLeave={clearHover}
              onRequest={togglePin}
              shouldReduceMotion={shouldReduceMotion}
            />
          </Container>
        </section>

        {/* ── Services ──────────────────────────────────────────────── */}
        <section
          id="services"
          aria-labelledby="services-title"
          className="border-t border-hairline bg-ink-900/40 py-16 lg:py-24"
        >
          <Container>
            <motion.div
              {...revealProps(shouldReduceMotion)}
              viewport={viewportOnce}
            >
              <SectionTitle
                id="services-title"
                title="Bốn nhóm dịch vụ, một luồng công việc"
                description="Từ giấy phép đầu tiên đến báo cáo thuế định kỳ — mỗi nhóm dịch vụ nối tiếp nhóm trước đó, nên doanh nghiệp không phải ghép nhiều nhà cung cấp."
              />
            </motion.div>

            <motion.div
              {...revealProps(shouldReduceMotion, staggerGroup(0.09, 0.1), viewportOnce)}
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {services.map((service) => (
                <motion.article
                  key={service.id}
                  variants={fadeUp}
                  className="surface relative flex flex-col overflow-hidden p-5"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5"
                    style={{ backgroundColor: service.color }}
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-14 -right-10 h-28 w-28 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${service.color}2b, transparent 70%)`,
                    }}
                  />
                  <span
                    className="relative grid h-11 w-11 place-items-center rounded-[14px] border border-hairline"
                    style={{ color: service.color }}
                  >
                    <Icon name={service.icon} size={22} />
                  </span>
                  <span className="label-micro relative mt-4 block">{service.label}</span>
                  <h3 className="relative mt-1.5 text-[1.0625rem] font-bold text-mist">
                    {service.title}
                  </h3>
                  <p className="relative mt-0.5 text-[0.75rem] text-muted">
                    {service.titleKo}
                  </p>
                  <p className="relative mt-3 text-sm text-muted">{service.description}</p>
                  <ul className="relative mt-4 flex flex-col gap-2">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-[0.8125rem] text-mist/85">
                        <Icon
                          name="check"
                          weight="regular"
                          size={14}
                          className="mt-[3px] shrink-0"
                          style={{ color: service.color }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="relative mt-4 border-t border-hairline pt-3 text-[0.75rem] text-muted">
                    {service.meta}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* ── Journey: 7 steps ──────────────────────────────────────── */}
        <section
          id="journey"
          aria-labelledby="journey-title"
          className="border-t border-hairline bg-ink-900/60 py-16 lg:py-24"
        >
          <Container>
            <motion.div {...revealProps(shouldReduceMotion)} viewport={viewportOnce}>
              <SectionTitle
                id="journey-title"
                eyebrow="Quy trình"
                title="Bảy bước từ ý tưởng đến vận hành"
                description="Mỗi bước có đầu ra rõ ràng và đầu mối phụ trách. Không cam kết thời gian cố định — tiến độ phụ thuộc ngành nghề và cơ quan cấp phép."
              />
            </motion.div>

            <motion.ol
              {...revealProps(shouldReduceMotion, staggerGroup(0.08, 0.1), viewportOnce)}
              className="journey-track mt-10"
            >
              {journeySteps.map((step) => (
                <motion.li key={step.id} variants={fadeUp}>
                  <GlowCard as="article" interactive className="h-full p-5">
                    <div className="flex items-start gap-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-daond/40 bg-daond/15 text-sm font-extrabold text-daond-soft">
                        {step.id}
                      </span>
                      <div className="min-w-0">
                        <span className="label-micro">{step.titleKo}</span>
                        <h3 className="mt-1 text-[1.0625rem] font-bold text-mist">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-muted">{step.description}</p>
                        <p className="mt-2 text-[0.8125rem] leading-relaxed text-mist/80">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2 border-t border-hairline pt-4">
                      {step.deliverables.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-hairline bg-white/[0.04] px-2.5 py-1 text-[0.6875rem] text-mist/85"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-[0.75rem] text-muted">
                      Đầu mối: <span className="text-mist/85">{step.owner}</span>
                    </p>
                  </GlowCard>
                </motion.li>
              ))}
            </motion.ol>
          </Container>
        </section>

        {/* ── Why DAON ──────────────────────────────────────────────── */}
        <section
          id="why-daon"
          aria-labelledby="why-daon-title"
          className="border-t border-hairline bg-ink-900/40 py-16 lg:py-24"
        >
          <Container>
            <motion.div {...revealProps(shouldReduceMotion)} viewport={viewportOnce}>
              <SectionTitle
                id="why-daon-title"
                title="Vì sao doanh nghiệp chọn một đầu mối"
                description="Cùng một mục tiêu, hai cách vận hành rất khác nhau."
              />
            </motion.div>

            <motion.div
              {...revealProps(shouldReduceMotion, staggerGroup(0.1, 0.1), viewportOnce)}
              className="mt-10 grid gap-4 lg:grid-cols-2"
            >
              {[comparison.before, comparison.after].map((side) => (
                <motion.div
                  key={side.title}
                  variants={fadeUp}
                  className="surface relative overflow-hidden p-6"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-0.5 ${
                      side === comparison.after ? 'bg-mint' : 'bg-white/25'
                    }`}
                  />
                  <h3 className="text-[1.125rem] font-bold text-mist">{side.title}</h3>
                  <p className="mt-2 text-sm text-muted">{side.summary}</p>
                  <ul className="mt-5 flex flex-col gap-3">
                    {side.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-[0.875rem] text-mist/85">
                        <Icon
                          name={side === comparison.after ? 'checkCircle' : 'close'}
                          weight={side === comparison.after ? 'fill' : 'regular'}
                          size={16}
                          className={`mt-[3px] shrink-0 ${
                            side === comparison.after ? 'text-mint' : 'text-muted'
                          }`}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              {...revealProps(shouldReduceMotion, staggerGroup(0.08, 0.15), viewportOnce)}
              className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {capabilities.map((capability) => (
                <motion.div key={capability.id} variants={fadeUp} className="surface-quiet p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-[14px] border border-hairline text-daond-soft">
                    <Icon name={capability.icon} size={20} />
                  </span>
                  <h3 className="mt-4 text-[0.9375rem] font-bold text-mist">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-muted">
                    {capability.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* ── Testimonials ──────────────────────────────────────────── */}
        <section
          id="testimonials"
          aria-labelledby="testimonials-title"
          className="border-t border-hairline bg-ink-900/60 py-16 lg:py-24"
        >
          <Container>
            <motion.div {...revealProps(shouldReduceMotion)} viewport={viewportOnce}>
              <SectionTitle
                id="testimonials-title"
                title="Đối tác nói gì về quy trình làm việc"
                description="Ba phản ánh điển hình về cách một đầu mối thay đổi nhịp làm việc."
              />
            </motion.div>

            <motion.div
              {...revealProps(shouldReduceMotion, staggerGroup(0.09, 0.1), viewportOnce)}
              className="mt-10 grid gap-4 lg:grid-cols-3"
            >
              {testimonials.map((testimonial) => (
                <motion.figure key={testimonial.id} variants={fadeUp} className="surface flex flex-col p-6">
                  <Icon
                    name="sparkle"
                    size={22}
                    className="text-daond-soft"
                  />
                  <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-mist/90">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-hairline pt-4">
                    <p className="text-[0.875rem] font-bold text-mist">{testimonial.name}</p>
                    <p className="mt-0.5 text-[0.8125rem] text-muted">{testimonial.role}</p>
                    <p className="mt-0.5 text-[0.75rem] text-muted">{testimonial.context}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>

            <p className="mt-6 flex items-center justify-center gap-2 text-center text-[0.75rem] text-muted">
              <Icon name="warning" weight="regular" size={14} className="shrink-0" />
              {SAMPLE_NOTICE}
            </p>
          </Container>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section
          id="faq"
          aria-labelledby="faq-title"
          className="border-t border-hairline bg-ink-900/40 py-16 lg:py-24"
        >
          <Container className="max-w-[820px]">
            <motion.div {...revealProps(shouldReduceMotion)} viewport={viewportOnce}>
              <SectionTitle
                id="faq-title"
                title="Câu hỏi thường gặp"
                description="Những câu hỏi xuất hiện nhiều nhất trong buổi làm việc đầu tiên."
              />
            </motion.div>

            <motion.div
              {...revealProps(shouldReduceMotion, staggerGroup(0.06, 0.1), viewportOnce)}
              className="mt-10 flex flex-col gap-3"
            >
              {faqItems.map((item) => (
                <motion.details key={item.id} variants={fadeUp} className="surface group px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[0.9375rem] font-semibold text-mist [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <Icon
                      name="caretDown"
                      weight="regular"
                      size={16}
                      className="shrink-0 text-muted transition-transform duration-200 ease-gateway group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
                </motion.details>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* ── Consultation CTA ──────────────────────────────────────── */}
        <section
          id="consultation"
          aria-labelledby="consultation-title"
          className="relative overflow-hidden border-t border-hairline bg-ink-900/60 py-16 lg:py-24"
        >
          <div aria-hidden="true" className="net-grid pointer-events-none absolute inset-0 opacity-40" />
          <div
            aria-hidden="true"
            className="halo left-1/2 top-1/2 h-[280px] w-[560px] -translate-x-1/2 -translate-y-1/2 bg-daond/15"
          />
          <Container className="relative">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-[640px] text-center"
            >
              <span className="label-micro">Bắt đầu</span>
              <h2
                id="consultation-title"
                className="mt-4 text-[1.75rem] leading-[1.15] font-extrabold text-mist sm:text-[2.25rem]"
              >
                한 번의 대화로 시작합니다
              </h2>
              <p className="mx-auto mt-4 max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted">
                {contact.response} Email로 먼저 문의해도 좋습니다.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button href={`mailto:${contact.email}`} size="lg">
                  <Icon name="mail" weight="regular" size={16} />
                  {contact.email}
                </Button>
                <Button href="#top" variant="secondary" size="lg">
                  다시 게이트웨이 보기
                </Button>
              </div>
              <p className="mt-5 text-[0.8125rem] text-muted">{contact.kakao}</p>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}


