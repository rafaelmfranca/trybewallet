// Regex from https://stackoverflow.com/questions/4964691/super-simple-email-validation-with-javascript
export const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

export const PASSWORD_MIN_LENGTH = 6;

export const PAYMENT_METHODS = [
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];

export const EXPENSE_TAGS = [
  'Alimentação',
  'Lazer',
  'Trabalho',
  'Transporte',
  'Saúde',
];

export const walletInitialState = {
  value: '0',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

export const expenseTableHeader = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];
