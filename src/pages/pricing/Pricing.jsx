import React from "react";
import styles from "../products/Products.module.css";
import PageNav from "../../components/pageNav/PageNav";
import img2 from "../../assets/img-2.jpg";

const Pricing = () => {
  return (
    <main className={styles.products}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src={img2} alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
};

export default Pricing;
