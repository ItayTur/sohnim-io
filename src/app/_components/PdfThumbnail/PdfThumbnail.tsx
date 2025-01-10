import Image from "next/image";
import styles from "./PdfThumbnail.module.css";

export const PdfThumbnail = () => {
  const onClick = () => {
    console.log("hello from click");
  };

  return (
    <div className={styles.pdfThumbnail} onClick={onClick}>
      <Image
        src="/pdf_thumbnail_sohnimio_3d_default.svg"
        alt="PDF Thumbnail"
        width={100}
        height={100}
        className={styles.default}
        priority
      />
      <Image
        src="/pdf_thumbnail_sohnimio_3d_hover.svg"
        alt="PDF Thumbnail Hover"
        width={100}
        height={100}
        className={styles.hover}
        priority
      />
    </div>
  );
};
