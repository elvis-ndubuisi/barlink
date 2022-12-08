import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

const BlogCard = () => {
  return (
    <Link href="/" className={styles.blogcard}>
      <h3>What is a QR code</h3>
      <p>
        Quick response or QR, is a type of barcode that can store a multitude of
        information. The obvious difference between a QR Code and Barcode is its
        appearance.
      </p>
      <p>Learn more</p>
    </Link>
  );
};

export default BlogCard;
