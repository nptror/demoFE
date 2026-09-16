/*
 * Seven-step market-entry journey.
 *
 * `title` and `description` come from the design spec; `detail`,
 * `deliverables` and `owner` keep the step cards concrete instead of
 * marketing prose. No durations are claimed: timing depends on the business
 * structure and the licensing authority.
 */
export const journeySteps = [
  {
    id: 1,
    title: 'Tư vấn',
    titleKo: '상담',
    description: 'Lắng nghe nhu cầu và mục tiêu.',
    detail:
      'Buổi làm việc đầu tiên bằng tiếng Hàn hoặc tiếng Việt để xác định ngành nghề, quy mô và thời điểm dự kiến vào thị trường.',
    deliverables: ['Bản tóm tắt nhu cầu', 'Khung đầu việc ban đầu'],
    owner: 'DAON và doanh nghiệp',
  },
  {
    id: 2,
    title: 'Khảo sát và chiến lược',
    titleKo: '전략 수립',
    description: 'Phân tích thị trường, pháp lý, chi phí.',
    detail:
      'Đối chiếu điều kiện ngành nghề, yêu cầu vốn và các hình thức đầu tư trước khi chốt phương án.',
    deliverables: ['Bản phân tích phương án', 'Đề xuất cơ cấu đầu tư'],
    owner: 'DAON',
  },
  {
    id: 3,
    title: 'Chuẩn bị hồ sơ',
    titleKo: '서류 준비',
    description: 'Soạn và kiểm tra hồ sơ pháp lý.',
    detail:
      'Hợp pháp hóa lãnh sự, dịch thuật và rà soát từng giấy tờ cùng doanh nghiệp trước khi nộp.',
    deliverables: ['Danh mục hồ sơ', 'Bộ hồ sơ đã dịch'],
    owner: 'DAON và doanh nghiệp',
  },
  {
    id: 4,
    title: 'Thành lập/đăng ký',
    titleKo: '설립 등록',
    description: 'Nộp hồ sơ và theo dõi tiến độ.',
    detail:
      'Nộp hồ sơ, làm việc với cơ quan cấp phép và cập nhật tiến độ theo từng mốc xử lý.',
    deliverables: ['IRC và ERC', 'Cập nhật tiến độ theo mốc'],
    owner: 'DAON',
  },
  {
    id: 5,
    title: 'Vận hành ban đầu',
    titleKo: '초기 운영',
    description: 'Thiết lập vận hành, tuyển dụng, tài khoản.',
    detail:
      'Con dấu, tài khoản ngân hàng, chữ ký số, hệ thống kế toán và các bước chuẩn bị cho người lao động nước ngoài.',
    deliverables: ['Bộ thiết lập vận hành', 'Kế hoạch tuyển dụng'],
    owner: 'DAON',
  },
  {
    id: 6,
    title: 'Thuế, kế toán và HR',
    titleKo: '세무·회계·인사',
    description: 'Đồng hành thường xuyên.',
    detail:
      'Kê khai và báo cáo theo kỳ, xử lý bảng lương, bảo hiểm và các nghĩa vụ lao động định kỳ.',
    deliverables: ['Báo cáo theo kỳ', 'Hồ sơ lao động'],
    owner: 'DAON',
  },
  {
    id: 7,
    title: 'Đồng hành dài hạn',
    titleKo: '장기 동행',
    description: 'Hỗ trợ mở rộng và tối ưu.',
    detail:
      'Hỗ trợ khi doanh nghiệp mở thêm chi nhánh, thay đổi vốn điều lệ hoặc mở rộng đội ngũ.',
    deliverables: ['Kế hoạch mở rộng', 'Đầu mối thường trực'],
    owner: 'DAON',
  },
]

export default journeySteps
