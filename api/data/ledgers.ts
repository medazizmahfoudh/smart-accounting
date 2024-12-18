import { LedgerDTO } from "@/dtos/Ledger";

const ledgers: LedgerDTO[] = [
  {
    ledgerId: "W-123456",
    balance: 2303,
    transactions: [
      {
        transactionId: "T-111111",
        invoiceType: "Sent",
        supplierName: "Supplier A",
        customerName: "Customer X",
        totalString: "Four hundred fifty six dollars and seventy eight cents",
        total: "456.78",
      },
      {
        transactionId: "T-222222",
        invoiceType: "Received",
        supplierName: "Supplier B",
        customerName: "Customer Y",
        totalString: "Two hundred thirty four dollars and fifty six cents",
        total: "234.56",
      },
      {
        transactionId: "T-333333",
        invoiceType: "Sent",
        supplierName: "Supplier C",
        customerName: "Customer Z",
        totalString: "Eight hundred seventy six dollars and ninety cents",
        total: "876.90",
      },
      {
        transactionId: "T-444444",
        invoiceType: "Received",
        supplierName: "Supplier D",
        customerName: "Customer W",
        totalString: "Three hundred twelve dollars and forty five cents",
        total: "312.45",
      },
      {
        transactionId: "T-555555",
        invoiceType: "Sent",
        supplierName: "Supplier E",
        customerName: "Customer V",
        totalString: "Six hundred fifty four dollars and thirty two cents",
        total: "654.32",
      },
    ],
  },
  {
    ledgerId: "B-654321",
    balance: 3030,
    transactions: [
      {
        transactionId: "T-666666",
        invoiceType: "Received",
        supplierName: "Supplier F",
        customerName: "Customer U",
        totalString: "Seven hundred eighty nine dollars and twenty one cents",
        total: "789.21",
      },
      {
        transactionId: "T-777777",
        invoiceType: "Sent",
        supplierName: "Supplier G",
        customerName: "Customer T",
        totalString: "Five hundred sixty seven dollars and eighty nine cents",
        total: "567.89",
      },
      {
        transactionId: "T-888888",
        invoiceType: "Received",
        supplierName: "Supplier H",
        customerName: "Customer S",
        totalString: "Four hundred thirty two dollars and ten cents",
        total: "432.10",
      },
      {
        transactionId: "T-999999",
        invoiceType: "Sent",
        supplierName: "Supplier I",
        customerName: "Customer R",
        totalString: "Two hundred one dollars and ninety nine cents",
        total: "201.99",
      },
      {
        transactionId: "T-000000",
        invoiceType: "Received",
        supplierName: "Supplier J",
        customerName: "Customer Q",
        totalString: "Nine hundred ninety nine dollars and eighty eight cents",
        total: "999.88",
      },
    ],
  },
];

export { ledgers };
