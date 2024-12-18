import { Invoice } from "@/types/Types";
import { apiClientOCR } from "./client/apiClient";
import * as FileSystem from "expo-file-system";
import mime from "mime"; // Import the mime library

export const processInvoice = async (
  uri: string | null
): Promise<{ status: number; data: Invoice } | undefined> => {
  if (uri) {
    try {
      const filename = uri.split("/").pop();
      if (filename) {
        const fileType = mime.getType(filename); // Automatically get the MIME type based on file extension
        if (!fileType) {
          throw new Error("Unable to determine file type");
        }

        const formData = new FormData();
        formData.append("file", {
          uri,
          name: filename,
          type: fileType,
        });

        const response = await apiClientOCR.post<Invoice>(
          "/extract/fromInvoice",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("OCR response:", response.data);
        return { status: response.status, data: response.data };
      } else {
        throw new Error("Unable to extract file name");
      }
    } catch (error) {
      console.error("Error reading invoice image:", error);
    }
  }
};
