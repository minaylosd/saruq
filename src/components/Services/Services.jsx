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
        "Outsourcing of Manufacturers and Suppliers",
        "A Clear Vision of Industry Clusters Geography",
        "Search of Alternatives",
        "OEM Assistance",
        "Comparison Analysis of Existing Suppliers",
        "Most Suitable Manufacturing Facility Search",
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
        "Air, Rail, Sea, Auto Freight, and Multi-Mode Transportation",
        "Direct Contracts With Freight Agents Worldwide",
        "Guaranteed Best Rates",
        "Customs Clearance With Expenses Break Down",
        "Existing Logistic Solutions Audit",
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
        "DD of the buyer",
        "Export services in UAE, customs clearance",
        "Complete package of supporting export documents and permits",
        "Labeling service (package language localization)",
        "Bonded warehouse storage until shipment readiness",
      ],
    },
    {
      name: "Supplier surveing and due diligence",
      geometry: "triangle",
      geometry_style: {
        width: "calc(var(--width-k) * 37)",
        height: "calc(var(--width-k) * 37)",
      },
      list: [
        "Supplier Check-Up",
        "Company Background",
        "Your Supplier’s Position With Debts",
        "Tax-Related Information",
        "Company Record With Directors Credentials",
        "Legal Address and Date of Incorporation",
        "Factory Visit Prior To Cooperation",
        "Detailed Report About Your Supplier",
      ],
    },
  ];
  return (
    <section>
      <div className={styles.content}>
        <div className={styles.heading__wrapper}>
          <div className={styles.heading__line}></div>
          <h1 className={styles.heading}>Our services</h1>
          <div className={styles.line}></div>
          <div className={styles.rectangle}>
            <Rectangle turn={true} />
          </div>
        </div>
        <div className={styles.card__wrapper}>
          {cardItems.map((item, index) => (
            <div className={styles.card} key={index}>
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
