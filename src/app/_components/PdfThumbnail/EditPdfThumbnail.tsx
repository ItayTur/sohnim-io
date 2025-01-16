"use client";

import classnames from "classnames";
import Image from "next/image";
import { Button, Dialog, DialogActions, Text, useDialog } from "../UI";
import styles from "./PdfThumbnail.module.css";

export const EditPdfThumbnail = () => {
  const { isDialogOpen, openDialog, closeDialog } = useDialog();

  return (
    <div>
      <Text>Edit</Text>
      <div className={styles.pdfThumbnail} onClick={openDialog}>
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
      <Dialog maxWidth="xl" fullWidth open={isDialogOpen}>
        <iframe
          src="https://xfuv7323.simplepdf.com/editor/430358f5-c5a9-43df-88b6-8d230c5ee90b"
          width="100%"
          height="900px"
        />
        <DialogActions>
          <Button onClick={closeDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
