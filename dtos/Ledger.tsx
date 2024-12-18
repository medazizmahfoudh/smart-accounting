export type TransactionPreviewDTO = {
  transactionId: string;
  invoiceType: string;
  supplierName: string;
  customerName: string;
  totalString: string;
  total: string;
};

export type LedgerDTO = {
  balance: number;
  ledgerId: string;
  transactions: TransactionPreviewDTO[];
};
