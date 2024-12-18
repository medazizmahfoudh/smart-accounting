import { useStorageState } from "@/hooks/useStorageState";
import axios from "axios";

const apiClientOCR = axios.create({
  baseURL: "https://hamzagbada.ovh",
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});
// const apiClient = axios.create({
//   baseURL: "http://startitup.live/api/v1",
//   headers: {
//     Authorization: `Bearer ${session}`,
//   },
// });

export { apiClientOCR };
