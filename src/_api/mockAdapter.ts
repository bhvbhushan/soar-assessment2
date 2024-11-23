import MockAdapter from 'axios-mock-adapter';
import axiosInstance from './axios';
import {
  cardData,
  contactData,
  expenseCategoryData,
  monthlyBalanceData,
  TrxMockData,
  userInfoData,
  weeklyTxnData,
} from '_constants';
import { userDataInterface } from '_interfaces';

let userData: userDataInterface = { ...userInfoData };

// Initialize Mock Adapter with the Axios instance
const mock = new MockAdapter(axiosInstance, { delayResponse: 300 });

// Define mock data
interface SendMoneyPayload {
  contactId: number;
  amount: number;
}

// Request counters to track the number of requests per endpoint
const requestCounters: { [key: string]: number } = {};

// Helper function to increment and retrieve request count
const getRequestCount = (url: string): number => {
  requestCounters[url] = (requestCounters[url] || 0) + 1;
  return requestCounters[url];
};

// Helper function to reset request count
const resetRequestCount = (url: string): void => {
  requestCounters[url] = 0;
};

// GET /api/me
mock.onGet('/api/me').reply(() => {
  return [200, userData];
});

// GET /api/cards
mock.onGet('/api/cards').reply(() => {
  return [200, cardData];
});

// GET /api/contacts
mock.onGet('/api/contacts').reply(() => {
  return [200, contactData];
});

// GET /api/transactions
mock.onGet('/api/transactions').reply(() => {
  return [200, TrxMockData];
});

// GET /api/weeklyTxn
mock.onGet('/api/weeklyTxn').reply(() => {
  return [200, weeklyTxnData];
});

// GET /api/monthlyBalance
mock.onGet('/api/monthlyBalance').reply(() => {
  return [200, monthlyBalanceData];
});

// GET /api/expenseCategory
mock.onGet('/api/expenseCategory').reply(() => {
  return [200, expenseCategoryData];
});

// PUT /api/me
mock.onPut('/api/me').reply((config) => {
  const url = config.url || '';
  const count = getRequestCount(url);
  console.log(`Mock PUT ${url} (Request #${count})`);

  if (count === 3) {
    resetRequestCount(url);
    console.error(`Mock PUT ${url} Error on Request #3`);
    return [
      500,
      { message: 'Internal Server Error: Mock API failure on third request.' },
    ];
  }

  const updatedData: Partial<userDataInterface> = JSON.parse(
    config.data || '{}'
  );
  //Updating user data with new values
  userData = Object.assign(userData, updatedData);
  console.log(`Mock PUT ${url} Success`);
  return [200, userData];
});

// POST /api/send-money
mock.onPost('/api/send-money').reply((config) => {
  const url = config.url || '/api/send-money';
  const count = getRequestCount(url);
  console.log(`Mock POST ${url} (Request #${count})`);

  if (count === 3) {
    resetRequestCount(url);
    console.error(`Mock POST ${url} Error on Request #3`);
    return [
      500,
      { message: 'Internal Server Error: Mock API failure on third request.' },
    ];
  }

  const payload: SendMoneyPayload = JSON.parse(config.data || '{}');
  const transactionId = Date.now();

  console.log(`Mock POST ${url} Success - Transaction ID: ${transactionId}`);
  return [200, { ...payload, transactionId }];
});

// Fallback for any unmatched requests
mock.onAny().reply((config) => {
  const url = config.url || 'Unknown URL';
  console.warn(
    `Mock Warning: No mock defined for ${config.method?.toUpperCase()} ${url}`
  );
  return [404, { message: 'Endpoint not found in Mock API.' }];
});

export default mock;
