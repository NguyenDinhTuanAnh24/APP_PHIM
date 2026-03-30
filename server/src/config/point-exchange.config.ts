// Các gói đổi điểm có sẵn
export const POINT_PACKAGES = [
  {
    id:             'pkg_50',
    name:           'Gói Nhỏ',
    points_required: 50,
    discount_type:  'FIXED' as const,
    discount_value: 20000,       // giảm 20.000đ
    min_amount:     0,
    max_discount:   20000,
    validity_days:  30,          // hiệu lực 30 ngày
    icon:           '🎟️',
    description:    'Giảm 20.000đ cho bất kỳ đơn nào',
    color:          '#3B82F6',
  },
  {
    id:             'pkg_100',
    name:           'Gói Vừa',
    points_required: 100,
    discount_type:  'FIXED' as const,
    discount_value: 50000,       // giảm 50.000đ
    min_amount:     100000,
    max_discount:   50000,
    validity_days:  30,
    icon:           '🎫',
    description:    'Giảm 50.000đ cho đơn từ 100.000đ',
    color:          '#8B5CF6',
  },
  {
    id:             'pkg_200',
    name:           'Gói Lớn',
    points_required: 200,
    discount_type:  'FIXED' as const,
    discount_value: 100000,      // giảm 100.000đ
    min_amount:     150000,
    max_discount:   100000,
    validity_days:  60,
    icon:           '🎪',
    description:    'Giảm 100.000đ cho đơn từ 150.000đ',
    color:          '#F59E0B',
  },
  {
    id:             'pkg_500',
    name:           'Gói VIP',
    points_required: 500,
    discount_type:  'PERCENT' as const,
    discount_value: 20,          // giảm 20%
    min_amount:     0,
    max_discount:   200000,
    validity_days:  90,
    icon:           '👑',
    description:    'Giảm 20% tối đa 200.000đ, hiệu lực 90 ngày',
    color:          '#E50914',
  },
];

export type PointPackage = typeof POINT_PACKAGES[0];
