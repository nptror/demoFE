# DAON Landing Page — Đặc tả thiết kế &amp; công nghệ

&gt; **Mục tiêu:** Xây dựng landing page DAON với trải nghiệm Hero tương tác, animation mượt, thể hiện hành trình Seoul → DAON → 4 dịch vụ → Vietnam.  

&gt; **Công nghệ hiện tại:** ReactJS + Vite.  

&gt; **Định hướng:** Không cần Next.js nếu chỉ tập trung vào landing page/animation. React + Vite + Tailwind + Framer Motion là đủ mạnh, dễ maintain và tối ưu tốc độ phát triển.

---

## 1. Mục tiêu sản phẩm

- Tạo ấn tượng chuyên nghiệp, hiện đại, cao cấp cho thương hiệu DAON.

- Truyền tải rõ mô hình: **Seoul → DAON → 4 dịch vụ → Vietnam**.

- Tăng tỷ lệ chuyển đổi qua CTA liên hệ/tư vấn.

- Hero phải là điểm nhấn: interactive, có animation, không bị “tĩnh”.

- Hỗ trợ responsive tốt trên desktop, tablet, mobile.

- Dễ mở rộng thành các trang con hoặc bổ sung section sau này.

---

## 2. Đối tượng người dùng

- Doanh nghiệp Hàn Quốc muốn vào thị trường Việt Nam.

- Doanh nghiệp Việt Nam cần đối tác Hàn Quốc.

- Startup/cá nhân cần dịch vụ:

  - Thành lập công ty

  - Văn phòng đại diện

  - Thuế/kế toán

  - Nhân sự/HR

- Đối tác, nhà đầu tư, khách hàng tiềm năng cần đánh giá năng lực DAON.

---

## 3. Nguyên tắc thiết kế

1. **Rõ ràng – Tin cậy – Hiện đại**

2. **Hero là trung tâm:** người dùng hiểu mô hình DAON trong 5–10 giây.

3. **Animation có mục đích:** không gây rối, không làm chậm.

4. **Chuyển động dẫn dắt câu chuyện:** scroll → node xuất hiện → connection chạy → service mở → journey.

5. **Tối giản nhưng có chiều sâu:** dùng ánh sáng, gradient, blur, glow, particle nhẹ.

6. **Mobile-first:** fallback đơn giản hơn nhưng vẫn giữ tinh thần thiết kế.

---

## 4. Sitemap &amp; luồng trải nghiệm

```text

Landing Page

│

├── Header

│   ├── Logo DAON

│   ├── Menu: Services / Journey / About / Contact

│   └── CTA: Tư vấn ngay

│

├── Hero — Interactive Gateway

│   ├── Seoul Node

│   ├── DAON Core

│   ├── 4 Service Nodes

│   │   ├── Company

│   │   ├── Office

│   │   ├── Tax

│   │   └── HR

│   └── Vietnam Node

│

├── Services Detail

│   ├── Company Formation

│   ├── Representative Office

│   ├── Tax &amp; Accounting

│   └── HR &amp; Payroll

│

├── 7-Step Journey

│   ├── Step 1: Tư vấn

│   ├── Step 2: Khảo sát &amp; chiến lược

│   ├── Step 3: Chuẩn bị hồ sơ

│   ├── Step 4: Thành lập/đăng ký

│   ├── Step 5: Vận hành ban đầu

│   ├── Step 6: Thuế – Kế toán – HR

│   └── Step 7: Đồng hành dài hạn

│

├── Why DAON

│   ├── Kinh nghiệm Hàn – Việt

│   ├── Đội ngũ đa ngôn ngữ

│   ├── Quy trình minh bạch

│   └── Hỗ trợ end-to-end

│

├── Testimonials / Trust

├── FAQ

├── CTA cuối trang

└── Footer

```

---

## 5. Design System

### 5.1. Màu sắc

| Token | Màu | Mục đích |

|---|---|---|

| `--color-bg` | `#050816` | Nền tối chính |

| `--color-bg-soft` | `#0B1026` | Section nền phụ |

| `--color-surface` | `rgba(255,255,255,0.06)` | Card, panel kính |

| `--color-primary` | `#4F8CFF` | DAON Core, CTA, connection |

| `--color-accent` | `#7C5CFF` | Gradient, highlight |

| `--color-success` | `#39D98A` | Vietnam node, trạng thái hoàn tất |

| `--color-warning` | `#FFB020` | Tax/attention |

| `--color-text` | `#F5F7FF` | Chữ chính |

| `--color-muted` | `#9CA3AF` | Chữ phụ |

| `--color-border` | `rgba(255,255,255,0.12)` | Viền |

**Gradient chính:**

```css

background: linear-gradient(135deg, #4F8CFF 0%, #7C5CFF 50%, #39D98A 100%);

```

### 5.2. Typography

- Font chính: `Inter`, `Manrope`, hoặc `Plus Jakarta Sans`.

- Font Hàn/Việt: đảm bảo hỗ trợ tiếng Hàn nếu cần.

- Scale:

  - Display: 56–72px

  - H1: 40–56px

  - H2: 32–40px

  - H3: 24–28px

  - Body: 16–18px

  - Small: 14px

  - Caption: 12–13px

### 5.3. Spacing &amp; Layout

- Container: `max-width: 1200px`, padding `24px`.

- Grid: 12 cột desktop, 4 cột mobile.

- Section padding: `80px 0` desktop, `48px 0` mobile.

- Radius:

  - Card: `20–24px`

  - Button: `999px`

  - Node: `50%` hoặc `20px` tùy biến thể.

### 5.4. Breakpoints

```text

sm: 640px

md: 768px

lg: 1024px

xl: 1280px

2xl: 1536px

```

---

## 6. Hero — Interactive Gateway

### 6.1. Cấu trúc

```text

Seoul

   ↓

DAON

 ↙ ↓ ↘

4 Services

   ↓

Vietnam

```

### 6.2. Component tree

```text

&lt;Gateway /&gt;

 ├── &lt;SeoulNode /&gt;

 ├── &lt;DaonCore /&gt;

 ├── &lt;ServiceNode /&gt;

 │    ├── Company

 │    ├── Office

 │    ├── Tax

 │    └── HR

 └── &lt;VietnamNode /&gt;

```

### 6.3. Trạng thái tương tác

- `idle`: tất cả node hiển thị nhẹ, connection chạy chậm.

- `hover`: node được hover phóng to, connection sáng, node khác dim.

- `active`: click chọn service, information panel xuất hiện.

- `scroll`: animation theo scroll progress.

- `reduced-motion`: giảm animation, chỉ fade đơn giản.

### 6.4. React state mẫu

```jsx

const [activeService, setActiveService] = useState(null);

&lt;ServiceNode

  active={activeService === "tax"}

  onHover={() =&gt; setActiveService("tax")}

  onLeave={() =&gt; setActiveService(null)}

/&gt;

```

### 6.5. Hành vi mong muốn

- Hover Tax:

  - Tax phóng to.

  - Connection từ DAON → Tax sáng lên.

  - Các node khác mờ đi.

  - Information panel hiển thị mô tả dịch vụ.

- Click Tax:

  - Panel mở rộng.

  - CTA “Tìm hiểu thêm” hoặc “Tư vấn dịch vụ này”.

- Scroll:

  - Seoul xuất hiện.

  - Connection chạy.

  - DAON Core mở.

  - 4 services xuất hiện.

  - Vietnam xuất hiện.

  - Gateway chuyển dần thành 7-step journey.

### 6.6. Mobile fallback

- Không dùng hover.

- Chuyển thành dạng accordion/card list.

- Animation đơn giản: fade + slide.

- Node có thể xếp dọc:

```text

Seoul

  ↓

DAON

  ↓

Company

Office

Tax

HR

  ↓

Vietnam

```

---

## 7. Motion &amp; Animation

### 7.1. Công cụ

| Công cụ | Vai trò |

|---|---|

| Framer Motion | Animation component, scroll, hover, layout |

| GSAP | Timeline phức tạp nếu cần |

| CSS Transition | Micro-interaction nhẹ |

| SVG | Connection, path, glow |

| Three.js | Chỉ dùng nếu muốn 3D/WebGL |

### 7.2. Timing

- Micro-interaction: `150–250ms`

- Hover node: `200–300ms`

- Scroll reveal: `500–800ms`

- Connection draw: `800–1500ms`

- Easing: `easeOut`, `easeInOut`, `cubic-bezier(0.22, 1, 0.36, 1)`

### 7.3. Framer Motion variants mẫu

```jsx

const fadeUp = {

  hidden: { opacity: 0, y: 24 },

  show: {

    opacity: 1,

    y: 0,

    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }

  }

};

```

### 7.4. Scroll animation

```jsx

&lt;motion.div

  initial="hidden"

  whileInView="show"

  viewport={{ once: true, amount: 0.3 }}

  variants={fadeUp}

&gt;

  &lt;DaonCore /&gt;

&lt;/motion.div&gt;

```

### 7.5. Accessibility

- Tôn trọng `prefers-reduced-motion`.

- Không dùng animation gây chóng mặt.

- Đảm bảo nội dung vẫn đọc được khi tắt animation.

```jsx

const shouldReduceMotion = useReducedMotion();

```

---

## 8. Công nghệ đề xuất

```text

ReactJS

│

├── Vite

├── Tailwind CSS

├── Framer Motion

├── SVG

├── GSAP        ← nếu cần animation timeline phức tạp

└── Three.js    ← chỉ dùng nếu muốn 3D/WebGL

```

### 8.1. Stack chính

| Thành phần | Công nghệ |

|---|---|

| Framework | ReactJS 18+ |

| Build tool | Vite |

| Styling | Tailwind CSS |

| Animation | Framer Motion |

| Vector | SVG |

| State | React state / Zustand nếu cần |

| Form | React Hook Form + Zod |

| Routing | React Router nếu có trang con |

| Testing | Vitest + React Testing Library |

| Deploy | Vercel / Netlify / Cloudflare Pages |

### 8.2. Vì sao không cần Next.js?

- Landing page không yêu cầu SSR phức tạp.

- Animation và interaction là chính.

- React + Vite cho tốc độ dev nhanh, bundle gọn.

- Nếu sau này cần SEO mạnh, có thể chuyển sang Next.js hoặc thêm prerender.

---

## 9. Kiến trúc thư mục

```text

src/

├── assets/

│   ├── images/

│   ├── icons/

│   └── fonts/

│

├── components/

│   ├── common/

│   │   ├── Button.jsx

│   │   ├── Container.jsx

│   │   ├── SectionTitle.jsx

│   │   └── GlowCard.jsx

│   │

│   ├── layout/

│   │   ├── Header.jsx

│   │   ├── Footer.jsx

│   │   └── MobileMenu.jsx

│   │

│   └── gateway/

│       ├── Gateway.jsx

│       ├── SeoulNode.jsx

│       ├── DaonCore.jsx

│       ├── ServiceNode.jsx

│       ├── VietnamNode.jsx

│       ├── ConnectionLine.jsx

│       └── ServiceInfoPanel.jsx

│

├── sections/

│   ├── HeroSection.jsx

│   ├── ServicesSection.jsx

│   ├── JourneySection.jsx

│   ├── WhyDaonSection.jsx

│   ├── TestimonialsSection.jsx

│   ├── FAQSection.jsx

│   └── CTASection.jsx

│

├── data/

│   ├── services.js

│   ├── journey.js

│   └── faq.js

│

├── hooks/

│   ├── useActiveService.js

│   ├── useScrollProgress.js

│   └── useReducedMotion.js

│

├── styles/

│   ├── globals.css

│   └── tailwind.css

│

├── utils/

│   ├── cn.js

│   └── animation.js

│

├── App.jsx

└── main.jsx

```

---

## 10. Data model

### 10.1. Services

```js

export const services = [

  {

    id: "company",

    title: "Thành lập công ty",

    titleKo: "법인 설립",

    description: "Tư vấn và thực hiện thành lập công ty tại Việt Nam.",

    icon: "building",

    color: "#4F8CFF"

  },

  {

    id: "office",

    title: "Văn phòng đại diện",

    titleKo: "대표사무소",

    description: "Thành lập và quản lý văn phòng đại diện.",

    icon: "briefcase",

    color: "#7C5CFF"

  },

  {

    id: "tax",

    title: "Thuế &amp; Kế toán",

    titleKo: "세무·회계",

    description: "Dịch vụ thuế, kế toán, báo cáo tài chính.",

    icon: "calculator",

    color: "#FFB020"

  },

  {

    id: "hr",

    title: "Nhân sự &amp; HR",

    titleKo: "인사·HR",

    description: "Tuyển dụng, payroll, HR compliance.",

    icon: "users",

    color: "#39D98A"

  }

];

```

### 10.2. Journey

```js

export const journeySteps = [

  { id: 1, title: "Tư vấn", description: "Lắng nghe nhu cầu và mục tiêu." },

  { id: 2, title: "Khảo sát &amp; chiến lược", description: "Phân tích thị trường, pháp lý, chi phí." },

  { id: 3, title: "Chuẩn bị hồ sơ", description: "Soạn và kiểm tra hồ sơ pháp lý." },

  { id: 4, title: "Thành lập/đăng ký", description: "Nộp hồ sơ và theo dõi tiến độ." },

  { id: 5, title: "Vận hành ban đầu", description: "Thiết lập vận hành, tuyển dụng, tài khoản." },

  { id: 6, title: "Thuế – Kế toán – HR", description: "Đồng hành thường xuyên." },

  { id: 7, title: "Đồng hành dài hạn", description: "Hỗ trợ mở rộng và tối ưu." }

];

```

---

## 11. Code mẫu Gateway

```jsx

import { useState } from "react";

import { motion } from "framer-motion";

import { services } from "../../data/services";

import SeoulNode from "./SeoulNode";

import DaonCore from "./DaonCore";

import ServiceNode from "./ServiceNode";

import VietnamNode from "./VietnamNode";

import ServiceInfoPanel from "./ServiceInfoPanel";

export default function Gateway() {

  const [activeService, setActiveService] = useState(null);

  return (

    &lt;section className="relative min-h-screen overflow-hidden bg-[#050816]"&gt;

      &lt;div className="relative z-10 mx-auto max-w-6xl px-6 py-24"&gt;

        &lt;SeoulNode /&gt;

        &lt;DaonCore active={!!activeService} /&gt;

        &lt;div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"&gt;

          {[services.map](http://services.map)((service) =&gt; (

            &lt;ServiceNode

              key={[service.id](http://service.id)}

              service={service}

              active={activeService === [service.id](http://service.id)}

              onHover={() =&gt; setActiveService([service.id](http://service.id))}

              onLeave={() =&gt; setActiveService(null)}

            /&gt;

          ))}

        &lt;/div&gt;

        &lt;VietnamNode /&gt;

        &lt;ServiceInfoPanel serviceId={activeService} /&gt;

      &lt;/div&gt;

    &lt;/section&gt;

  );

}

```

---

## 12. Component mẫu ServiceNode

```jsx

import { motion } from "framer-motion";

export default function ServiceNode({

  service,

  active,

  onHover,

  onLeave

}) {

  return (

    &lt;motion.button

      type="button"

      onMouseEnter={onHover}

      onMouseLeave={onLeave}

      onFocus={onHover}

      onBlur={onLeave}

      animate={{

        scale: active ? 1.08 : 1,

        opacity: active ? 1 : 0.72

      }}

      transition={{ duration: 0.25 }}

      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur"

      style={{ boxShadow: active ? `0 0 40px ${service.color}55` : "none" }}

    &gt;

      &lt;div className="mb-2 text-sm text-white/60"&gt;{service.titleKo}&lt;/div&gt;

      &lt;div className="text-base font-semibold text-white"&gt;{service.title}&lt;/div&gt;

    &lt;/motion.button&gt;

  );

}

```

---

## 13. Performance

- Lazy load section dưới fold:

  ```jsx

  const JourneySection = lazy(() =&gt; import("./sections/JourneySection"));

  ```

- Tối ưu SVG: dùng `currentColor`, tránh path quá phức tạp.

- Ảnh: WebP/AVIF, `loading="lazy"`, `decoding="async"`.

- Font: subset, `font-display: swap`.

- Bundle: theo dõi bằng `vite-bundle-visualizer`.

- Animation: ưu tiên `transform` và `opacity`.

- Tránh re-render toàn bộ Gateway khi hover; tách component hoặc dùng `memo`.

---

## 14. SEO

- Thẻ title, meta description.

- Open Graph, Twitter Card.

- Semantic HTML: `header`, `main`, `section`, `footer`.

- Alt text cho ảnh.

- Structured data nếu cần: `Organization`, `LocalBusiness`, `FAQPage`.

- Sitemap + robots.txt.

- Nếu cần SEO mạnh hơn: prerender bằng `vite-plugin-ssr` hoặc chuyển Next.js sau.

---

## 15. Accessibility

- Keyboard navigation cho node và CTA.

- `aria-label` cho icon button.

- Focus visible rõ ràng.

- Contrast đạt WCAG AA.

- Hỗ trợ `prefers-reduced-motion`.

- Không dùng màu làm phương tiện truyền tải duy nhất.

---

## 16. Responsive

| Breakpoint | Hành vi |

|---|---|

| Mobile | Gateway xếp dọc, không hover, card list |

| Tablet | 2 cột service, animation giảm |

| Desktop | Gateway đầy đủ, hover, connection line |

| Large | Tăng khoảng trắng, hiệu ứng glow |

---

## 17. Testing &amp; QA

- Unit test: `Vitest` + `React Testing Library`.

- Test component: Gateway, ServiceNode, Button.

- Test responsive: Chrome DevTools, BrowserStack.

- Test animation: kiểm tra reduced motion.

- Test performance: Lighthouse, Web Vitals.

- Test form: validation, submit, error state.

---

## 18. Deployment

- Build:

  ```bash

  npm run build

  ```

- Preview:

  ```bash

  npm run preview

  ```

- Deploy: Vercel / Netlify / Cloudflare Pages.

- CI/CD: GitHub Actions.

- Env:

  ```text

  VITE_API_URL=

  VITE_GA_ID=

  ```

---

## 19. Roadmap triển khai

| Giai đoạn | Công việc |

|---|---|

| 1 | Setup React + Vite + Tailwind + Framer Motion |

| 2 | Xây dựng design system, layout, Header/Footer |

| 3 | Làm Hero Gateway tĩnh |

| 4 | Thêm hover, active, connection animation |

| 5 | Thêm scroll animation |

| 6 | Làm Services, Journey, Why DAON |

| 7 | Responsive + accessibility |

| 8 | SEO + performance |

| 9 | Testing + deploy |

---

## 20. Checklist bàn giao

- [ ] Hero Gateway hoạt động desktop/mobile.

- [ ] Hover/click service node mượt.

- [ ] Scroll animation đúng timeline.

- [ ] Có fallback reduced motion.

- [ ] Responsive ít nhất 3 breakpoint.

- [ ] SEO cơ bản.

- [ ] Accessibility cơ bản.

- [ ] Build production không lỗi.

- [ ] Deploy thành công.

- [ ] Tài liệu component rõ ràng.

---

## 21. Kết luận

Với DAON landing page, **ReactJS + Vite** là lựa chọn phù hợp: đủ mạnh cho Hero tương tác, animation phức tạp, dễ component hóa và bảo trì.  

Stack khuyến nghị:

```text

ReactJS + Vite

Tailwind CSS

Framer Motion

SVG

GSAP (optional)

Three.js (optional)

```

Thiết kế nên tập trung vào **Interactive Gateway**, **chuyển động dẫn dắt câu chuyện**, và **trải nghiệm mobile rõ ràng**.  

Nếu làm đúng, landing page DAON sẽ không chỉ đẹp mà còn truyền tải được năng lực và quy trình dịch vụ một cách thuyết phục.