// Тип для кастомных формул
type Formula = {
  formulaId: string;
  formula: (baseAmount: number, price: number, fee: number) => number;
};

// Пример кастомных формул
const customFormulas: Formula[] = [
  {
    formulaId: 'abcd',
    formula: (baseAmount, price, fee) => baseAmount * price * (1 - fee) * 1.05, // пример с увеличенным коэффициентом
  },
  {
    formulaId: 'xyz',
    formula: (baseAmount, price, fee) => baseAmount * price * (1 - fee) * 0.9, // пример с уменьшенным коэффициентом
  },
];

// Функция для применения кастомной формулы
function applyCustomFormula(formulaId: string, baseAmount: number, price: number, fee: number): number {
  const formula = customFormulas.find((f) => f.formulaId === formulaId);
  if (formula) {
    return formula.formula(baseAmount, price, fee);
  }
  return baseAmount * price * (1 - fee); // дефолтная формула
}

// Получение списка поддерживаемых валютных пар
async function getCurrencyPairs(): Promise<string[]> {
  const response = await fetch('/api/symbols');
  const data = await response.json();
  return data.map((pair: { symbol: string }) => pair.symbol); // Возвращаем список символов валютных пар
}

// Получение текущего курса обмена для валютной пары
async function getExchangeRate(symbol: string): Promise<number> {
  const response = await fetch(`/api/ticker/price?symbol=${symbol}`);
  const data = await response.json();
  return parseFloat(data.price);
}

// Получение данных о комиссии, минимальных и максимальных суммах
async function getFees(symbol: string) {
  const response = await fetch(`/api/fee?symbol=${symbol}`);
  const data = await response.json();
  return {
    fee: parseFloat(data.fee), // комиссия в процентах
    minAmount: parseFloat(data.min_amount), // минимальная сумма
    maxAmount: parseFloat(data.max_amount), // максимальная сумма
    formulaId: data.formula_id || 'default', // добавляем formula_id
  };
}

// Расчет получаемой суммы с учетом комиссии и кастомных формул
async function calculateAmount(
  symbol: string, // Валютная пара (например, BTC_USDT)
  inputAmount: number, // Введенная сумма в базовой валюте
): Promise<number> {
  // Получаем данные
  const exchangeRate = await getExchangeRate(symbol);
  const { fee, minAmount, maxAmount, formulaId } = await getFees(symbol);

  // Проверяем на минимальную и максимальную сумму
  if (inputAmount < minAmount) {
    throw new Error(`Сумма меньше минимальной. Минимальная сумма: ${minAmount}`);
  }

  if (inputAmount > maxAmount) {
    throw new Error(`Сумма больше максимальной. Максимальная сумма: ${maxAmount}`);
  }

  // Применяем кастомную формулу (если есть)
  return applyCustomFormula(formulaId, inputAmount, exchangeRate, fee);
}
