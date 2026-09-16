/*
 * Why DAON: a two-column comparison plus four capability statements.
 * Deliberately contains no client counts, percentages or satisfaction scores.
 */
export const comparison = {
  before: {
    title: 'Tự xử lý nhiều nhà cung cấp',
    summary:
      'Doanh nghiệp tự ghép luật sư, kế toán, tuyển dụng và mặt bằng thành một quy trình riêng.',
    points: [
      'Nhiều đầu mối, thông tin lệch nhau',
      'Hồ sơ chuyển tay, tiến độ bị ngắt',
      'Khó theo dõi mốc pháp lý',
      'Chi phí tách rời theo từng bên',
    ],
  },
  after: {
    title: 'Một đầu mối cùng DAON',
    summary:
      'Một đội ngũ theo doanh nghiệp từ hồ sơ đầu tiên đến lúc vận hành và mở rộng.',
    points: [
      'Một đầu mối tiếng Hàn và tiếng Việt',
      'Luồng công việc liền mạch từ IRC đến kế toán',
      'Mốc tiến độ được ghi rõ theo từng bước',
      'Một hợp đồng cho cả nhóm dịch vụ',
    ],
  },
}

export const capabilities = [
  {
    id: 'kr-vn',
    icon: 'handshake',
    title: 'Kinh nghiệm Hàn Việt',
    body: 'Đội ngũ làm việc cùng doanh nghiệp Hàn Quốc và cơ quan Việt Nam ở cả hai thị trường.',
  },
  {
    id: 'language',
    icon: 'translate',
    title: 'Đội ngũ đa ngôn ngữ',
    body: 'Trao đổi bằng tiếng Hàn, tiếng Việt và tiếng Anh. Hồ sơ nộp bằng tiếng Việt.',
  },
  {
    id: 'transparent',
    icon: 'seal',
    title: 'Quy trình minh bạch',
    body: 'Từng bước, từng hồ sơ và từng mốc xử lý được nêu rõ trước khi thực hiện.',
  },
  {
    id: 'lifecycle',
    icon: 'path',
    title: 'Hỗ trợ trọn vòng đời',
    body: 'Từ khảo sát ban đầu đến thuế, kế toán, nhân sự và mở rộng về sau.',
  },
]

export default { comparison, capabilities }
