import styles from "./Services.module.css";
import Rectangle from "../Rectangle/Rectangle";
import Geometry from "./Geometry";

export const Services = () => {
  const cardItems = [
    {
      name: "Product sourcing",
      geometry: "square",
      geometry_style: {
        width: "calc(var(--width-k) * 32.74)",
        height: "calc(var(--width-k) * 32.74)",
      },
      list: [
        "Outsourcing of manufacturers and suppliers according to geography of industrial clusters",
        "OEM Assistance",
        "Comparison analysis of existing suppliers/selection of alternative supppliers",
        "Search of most suitable manufacturing facility",
      ],
    },
    {
      name: "Logistics",
      geometry: "circle",
      geometry_style: {
        width: "calc(var(--width-k) * 32.74)",
        height: "calc(var(--width-k) * 32.74)",
      },
      list: [
        "Air, Rail, Sea, Auto Freight, and Multi-Mode transportation",
        "Contracts with freight agents worldwide with best rates guaranteed",
        "Customs clearance with expenses breakdown",
        "Audit of existing logistic solutions",
      ],
    },
    {
      name: "Export",
      geometry: "hexagon",
      geometry_style: {
        width: "calc(var(--width-k) * 37)",
        height: "calc(var(--width-k) * 37)",
      },
      list: [
        "DD of the Buyer",
        "Export services in the UAE, Customs clearance",
        "Complete package of supporting Export Documents And Permits",
        "Labeling service (Package language localization)",
        "Bonded warehouse storage until shipment readiness",
      ],
    },
    {
      name: "Supplier evaluation",
      geometry: "triangle",
      geometry_style: {
        width: "calc(var(--width-k) * 37)",
        height: "calc(var(--width-k) * 37)",
      },
      list: [
        "Supplier check-up",
        "Company background",
        "Your Supplier’s position with debts",
        "Tax-related information",
        "Company record with directors credentials",
        "Legal address and date of incorporation",
        "Facilities visit prior to cooperation",
        "Detailed report about your Supplier",
      ],
    },
  ];
  return (
    <section id="services" className="section">
      <div className={styles.content}>
        <div
          data-animation="services__heading"
          className={styles.heading__wrapper}
        >
          <div className={styles.heading__line}></div>
          <h1 className={styles.heading}>Our services</h1>
          <div className={styles.line}></div>
          <div className={styles.rectangle}>
            <Rectangle turn={true} />
          </div>
        </div>
        <div className={styles.card__wrapper}>
          {cardItems.map((item, index) => (
            <div
              data-animation="services__card"
              className={styles.card}
              key={index}
            >
              <div className={styles.card__heading__wrapper}>
                <div style={item.geometry_style}>
                  <Geometry shape={item.geometry} />
                </div>
                <h3 className={styles.card__heading}>{item.name}</h3>
              </div>
              <ul className={styles.list}>
                {item.list.map((item, index) => (
                  <li className={styles.list__item} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
