import classnames from "classnames";
import Image from "next/image";
import { type MouseEventHandler } from "react";
import styles from "./PdfThumbnail.module.css";

type PdfThumbnailProps = {
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
};

export const PdfThumbnail = ({ onClick }: PdfThumbnailProps) => {
  return (
    <div className={styles.pdfThumbnail} onClick={onClick}>
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
  );
};
