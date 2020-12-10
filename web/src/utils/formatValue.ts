const formatValue = (value: number): string => {
  const convert = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return convert;
};

export default formatValue;
