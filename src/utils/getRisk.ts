export const getRiskStyle = (score: number) => {
  if (score > 60) {
    return {
      level: '위험',
      iconBg: '#FFEBE9',
      color: '#D92D20',
      badgeBg: '#FFEBE9',
      border: '#FECDCA',
    };
  }

  if (score > 30) {
    return {
      level: '주의',
      iconBg: '#FFF4E6',
      color: '#F79009',
      badgeBg: '#FFF4E6',
      border: '#FEC84B',
    };
  }

  return {
    level: '안전',
    iconBg: '#E8F9F0',
    color: '#34C987',
    badgeBg: '#E8F9F0',
    border: '#A6F4C5',
  };
};

export const getRiskBadgeStyle = (score: number) => {
  if (score > 60) {
    return {
      level: '높음',
      color: '#991B1B',
      badgeBg: '#FFEBE9',
    };
  }

  if (score > 30) {
    return {
      level: '보통',
      color: '#92400E',
      badgeBg: '#FFF4E6',
    };
  }

  return {
    level: '낮음',
    color: '#065F46',
    badgeBg: '#E8F9F0',
  };
};
