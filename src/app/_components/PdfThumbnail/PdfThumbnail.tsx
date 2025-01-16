import { EmbedPDF } from "@simplepdf/react-embed-pdf";
import classnames from "classnames";
import Image from "next/image";
import { Text } from "../UI";
import styles from "./PdfThumbnail.module.css";

export const PdfThumbnail = () => {
  return (
    <div>
      <Text>Send PDF To Client</Text>
      <EmbedPDF companyIdentifier="xfuv7323">
        <a href="https://xfuv7323.simplepdf.com/form/430358f5-c5a9-43df-88b6-8d230c5ee90b">
          <div className={styles.pdfThumbnail}>
            <Image
              src="/pdf_thumbnail_sohnimio_3d_default.svg"
              alt="PDF Thumbnail"
              width={100}
              height={100}
              className={classnames(styles.default, styles.img)}
              priority
            />
            <Image
              src="/pdf_thumbnail_sohnimio_3d_hover.svg"
              alt="PDF Thumbnail Hover"
              width={100}
              height={100}
              className={classnames(styles.hover, styles.img)}
              priority
            />
          </div>
        </a>
      </EmbedPDF>
    </div>
  );
};
