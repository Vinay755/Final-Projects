// Function to fetch real-time exchange rates from the API
async function fetchExchangeRates() {
  const apiKey = "YOUR_API_KEY"; // Replace 'YOUR_API_KEY' with your actual API key
  const baseCurrency = "USD"; // Base currency for exchange rates

  try {
    const response = await fetch(
      `https://v6.exchangeratesapi.io/latest?base=${baseCurrency}&access_key=${apiKey}`
    );
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return null;
  }
}

// Function to populate currency select dropdowns with fetched data
async function populateCurrencies() {
  const exchangeRates = await fetchExchangeRates();

  if (exchangeRates) {
    const sourceCurrencySelect = document.getElementById("sourceCurrency");
    const targetCurrencySelect = document.getElementById("targetCurrency");

    for (const currency in exchangeRates) {
      const option = document.createElement("option");
      option.value = currency;
      option.text = currency;
      sourceCurrencySelect.appendChild(option.cloneNode(true));
      targetCurrencySelect.appendChild(option);
    }
  }
}

// Function to populate currency rates table with fetched data
async function populateCurrencyRatesTable() {
  const exchangeRates = await fetchExchangeRates();

  if (exchangeRates) {
    const currencyRatesTableBody = document.getElementById(
      "currencyRatesTableBody"
    );

    for (const currency in exchangeRates) {
      const rate = exchangeRates[currency];
      const row = `<tr><td>${currency}</td><td>${rate.toFixed(4)}</td></tr>`;
      currencyRatesTableBody.innerHTML += row;
    }
  }
}

// Function to convert currency using fetched exchange rates
async function convertCurrency() {
  const sourceCurrency = document.getElementById("sourceCurrency").value;
  const targetCurrency = document.getElementById("targetCurrency").value;
  const amount = parseFloat(document.getElementById("amount").value);

  const exchangeRates = await fetchExchangeRates();

  if (exchangeRates && exchangeRates[targetCurrency]) {
    const targetRate = exchangeRates[targetCurrency];
    const result = amount * targetRate;

    document.getElementById(
      "result"
    ).innerText = `${amount} ${sourceCurrency} = ${result.toFixed(
      2
    )} ${targetCurrency}`;
  } else {
    document.getElementById("result").innerText =
      "Error: Exchange rates not available";
  }
}

// Populate currency select dropdowns and rates table on page load
window.onload = function () {
  populateCurrencies();
  populateCurrencyRatesTable();
};
