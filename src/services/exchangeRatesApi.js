const fetchExchangeRates = async () => {
  try {
    const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(ENDPOINT);
    if (!response.ok) throw Error(`Failed to fetch ${ENDPOINT}`);
    const data = await response.json();
    delete data.USDT;
    return data;
  } catch (err) {
    return err;
  }
};

export default fetchExchangeRates;
