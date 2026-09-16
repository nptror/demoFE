/*
 * Service model.
 *
 * Fields come from the DAON design spec. `label`, `meta` and `highlights` are
 * display extras used by the gateway nodes and the services grid.
 * `color` is a semantic identity colour for that service node. It is never
 * used as a CTA colour: all calls to action stay DAON blue.
 */
export const services = [
  {
    id: 'company',
    title: 'Thành lập công ty',
    titleKo: '법인 설립',
    label: 'Company',
    meta: 'IRC và ERC · Điều lệ song ngữ',
    description: 'Tư vấn và thực hiện thành lập công ty tại Việt Nam.',
    highlights: [
      'Chọn hình thức đầu tư và ngành nghề phù hợp',
      'Soạn hồ sơ IRC, ERC và điều lệ Hàn Việt',
      'Theo dõi hồ sơ đến khi nhận giấy phép',
    ],
    icon: 'building',
    color: '#4F8CFF',
  },
  {
    id: 'office',
    title: 'Văn phòng đại diện',
    titleKo: '대표사무소',
    label: 'Office',
    meta: 'Địa chỉ đăng ký · Văn phòng dịch vụ',
    description: 'Thành lập và quản lý văn phòng đại diện.',
    highlights: [
      'Đăng ký văn phòng đại diện theo quy định',
      'Địa chỉ pháp lý và văn phòng dịch vụ',
      'Báo cáo định kỳ cho văn phòng đại diện',
    ],
    icon: 'briefcase',
    color: '#7C5CFF',
  },
  {
    id: 'tax',
    title: 'Thuế và Kế toán',
    titleKo: '세무·회계',
    label: 'Tax',
    meta: 'VAS · Thuế TNDN · Thuế GTGT',
    description: 'Dịch vụ thuế, kế toán, báo cáo tài chính.',
    highlights: [
      'Hạch toán theo chuẩn mực kế toán Việt Nam',
      'Kê khai thuế TNDN, GTGT và báo cáo tài chính',
      'Báo cáo song ngữ Hàn Việt theo kỳ',
    ],
    icon: 'calculator',
    color: '#FFB020',
  },
  {
    id: 'hr',
    title: 'Nhân sự và HR',
    titleKo: '인사·HR',
    label: 'HR',
    meta: 'Giấy phép lao động · Bảng lương',
    description: 'Tuyển dụng, payroll, HR compliance.',
    highlights: [
      'Giấy phép lao động, thẻ tạm trú và bảo hiểm',
      'Bảng lương và hợp đồng lao động',
      'Tuyển dụng nhân sự Việt Nam theo vị trí',
    ],
    icon: 'users',
    color: '#39D98A',
  },
]

/** Look up one service. Used by the gateway nodes and the info panel. */
export function getServiceById(id) {
  return services.find((service) => service.id === id) ?? null
}

export default services
