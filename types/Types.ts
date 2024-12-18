export enum InvoiceType {
  SENT = "Sent",
  RECEIVED = "Received",
}

export type Transaction = {
  invoice: Invoice;
  invoiceType: InvoiceType;
};

export type Invoice = {
  supplierId: string;
  supplierName: string;
  supplierAddress: string;
  invoiceNumber: string;
  invoiceDate: string;
  paymentMethod: string;
  inventoryRef: string;
  operatorName: string;
  receipt: string;
  customerRef: string;
  customerId: string;
  customerName: string;
  customerAddress: string;
  products: Product[];
  totalRaw: string;
  totalDiscount: string;
  totalTaxFree: string;
  total: string;
  totalString: string;
  taxList: TaxListItem[];
};

export type TaxListItem = {
  name: string;
  values: [];
};

export type Product = {
  ref: string;
  name: string;
  quantity: string;
  unit: string;
  unitPrice: string;
  discount: string;
  priceTaxFree: string;
  taxPercent: string;
};

export type Ledger<T> = {
  ledgerOf: T;
  balance: number;
  transactions: Transaction[];
};

export type BankAccount = {
  bank: string;
  accountId: string;
  iban: string;
};

export type Wallet = {
  holder: string;
  walletId: string;
};
