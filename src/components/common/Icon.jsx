import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Buildings,
  Calculator,
  CaretDown,
  CaretRight,
  Check,
  CheckCircle,
  Compass,
  EnvelopeSimple,
  Globe,
  Handshake,
  List,
  MapPin,
  Minus,
  Path,
  PaperPlaneTilt,
  Phone,
  Plus,
  SealCheck,
  ShieldCheck,
  Sparkle,
  SpinnerGap,
  Stack,
  Steps,
  Translate,
  UsersThree,
  WarningCircle,
  X,
} from '@phosphor-icons/react'

/*
 * Glyph map. Data files stay declarative: services store `icon: "building"`,
 * not a component reference.
 *
 * Weights are standardised to `duotone` for feature glyphs and `regular` for
 * inline UI glyphs, so no icon looks heavier than its neighbour.
 */
const glyphs = {
  building: Buildings,
  briefcase: Briefcase,
  calculator: Calculator,
  users: UsersThree,
  handshake: Handshake,
  translate: Translate,
  seal: SealCheck,
  path: Path,
  steps: Steps,
  compass: Compass,
  shield: ShieldCheck,
  sparkle: Sparkle,
  stack: Stack,
  globe: Globe,
  pin: MapPin,
  phone: Phone,
  mail: EnvelopeSimple,
  check: Check,
  checkCircle: CheckCircle,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  arrowUpRight: ArrowUpRight,
  caretDown: CaretDown,
  caretRight: CaretRight,
  plus: Plus,
  minus: Minus,
  close: X,
  menu: List,
  warning: WarningCircle,
  send: PaperPlaneTilt,
  spinner: SpinnerGap,
}

/**
 * Icon. Always decorative: the accessible name comes from the text next to
 * it, never from the glyph itself.
 */
export default function Icon({
  name,
  size = 20,
  weight = 'duotone',
  className,
  ...rest
}) {
  const Glyph = glyphs[name] ?? CheckCircle

  return (
    <Glyph
      size={size}
      weight={weight}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    />
  )
}