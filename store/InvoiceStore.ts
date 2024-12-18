import { Invoice } from "@/types/Types";
import { create } from "zustand";

interface InvoiceStoreProps {
  invoice: Invoice | null;
  addInvoice: (item: Invoice) => void;
  removeInvoice: () => void;
}

export const useInvoiceStore = create<InvoiceStoreProps>((set) => ({
  invoice: null,
  addInvoice: (item) => set(() => ({ invoice: item })),
  removeInvoice: () => set(() => ({ invoice: null })),
}));
