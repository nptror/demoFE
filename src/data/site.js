import { services } from './services'

/*
 * Site configuration: brand, navigation, contact and footer.
 *
 * TODO(content): confirm the advisory email, the hotline and the office
 * addresses with the client before launch. Only city-level locations are
 * published here, no street addresses.
 */
export const brand = {
  name: 'DAON',
  suffix: 'Vietnam Advisory',
  flow: 'Korea → DAON → Vietnam',
  korean: '한국에서 베트남까지, 하나의 파트너',
}

/*
 * Interface languages. `htmlLang` feeds document.documentElement.lang on
 * switch. English is one entry away:
 *   { code: 'EN', label: 'English', htmlLang: 'en' }
 */
export const languages = [
  { code: 'KR', label: '한국어', htmlLang: 'ko' },
  { code: 'VN', label: 'Tiếng Việt', htmlLang: 'vi' },
]

export const navItems = [
  { id: 'services', label: 'Dịch vụ', href: '#services' },
  { id: 'journey', label: 'Quy trình', href: '#journey' },
  { id: 'why-daon', label: 'Vì sao DAON', href: '#why-daon' },
  { id: 'faq', label: 'Hỏi đáp', href: '#faq' },
  { id: 'consultation', label: 'Liên hệ', href: '#consultation' },
]

export const contact = {
  email: 'advisory@daonpartners.com',
  kakao: 'Kênh KakaoTalk: DAON Advisory',
  languages: 'Tiếng Hàn · Tiếng Việt · Tiếng Anh',
  locations: ['Seoul', 'TP. Hồ Chí Minh', 'Hà Nội'],
  response:
    'Phản hồi trong giờ làm việc tại Việt Nam và Hàn Quốc. Nội dung trao đổi được giữ kín.',
}

export const footerColumns = [
  {
    id: 'services',
    title: 'Bốn nhóm dịch vụ',
    items: services.map((service) => ({
      label: service.title,
      href: '#services',
    })),
  },
  {
    id: 'explore',
    title: 'Tìm hiểu thêm',
    items: [
      { label: 'Vì sao DAON', href: '#why-daon' },
      { label: 'Quy trình 7 bước', href: '#journey' },
      { label: 'Câu hỏi thường gặp', href: '#faq' },
      { label: 'Tư vấn 1:1', href: '#consultation' },
    ],
  },
]

/* These routes are not implemented yet; the links are placeholders. */
export const legalLinks = [
  { label: 'Chính sách bảo mật', href: '#' },
  { label: 'Điều khoản sử dụng', href: '#' },
  { label: 'Mẫu NDA', href: '#' },
]

export default { brand, navItems, contact, footerColumns, legalLinks }
