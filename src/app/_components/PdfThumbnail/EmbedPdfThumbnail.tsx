import { EmbedPDF } from "@simplepdf/react-embed-pdf";
import Link from "next/link";
import { Text } from "../UI";
import { PdfThumbnail } from "./PdfThumbnail";

/**
 * EmbedPdfThumbnail component
 *
 * This component uses the SimplePDF EmbedPDF component to embed a PDF thumbnail.
 * It includes a link that wraps the PdfThumbnail component.
 */
export const EmbedPdfThumbnail = () => {
  return (
    <div>
      <Text>Embed</Text>
      <EmbedPDF locale="it" companyIdentifier="xfuv7323">
        <Link href="https://xfuv7323.simplepdf.com/form/adadced2-781c-4f68-aadd-13b3d173d633">
          <PdfThumbnail />
        </Link>
      </EmbedPDF>
    </div>
  );
};
