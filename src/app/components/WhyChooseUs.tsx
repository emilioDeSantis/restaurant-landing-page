import React from "react";

const WhyChooseUs: React.FC = () => {
    const reasons = [
        "Specialized focus on restaurant websites",
        "Quick turnaround time to get you online faster",
        "Affordable pricing tailored to your budget",
        "Ongoing support to keep your site fresh and functional",
    ];

    return (
        <section
            style={{
                paddingInline: "2rem",
                maxWidth: "50rem",
                display: "flex",
                flexDirection: "column",
                paddingBottom: "3rem",
                // borderBottom: "1px solid #1d1d1e22",
            }}
        >
                <h2
                    style={{
                        marginBottom: "1rem",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    Why Choose Us
                </h2>
                <div
                    style={{
                        width: "100%",
                        height: "6px",
                        borderTop: "1px solid #1d1d1e22",
                        borderBottom: "1px solid #1d1d1e22",
                    }}
                />
                <ul
                    style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "2rem",
                        gap: "1.6rem",
                    }}
                >
                    {reasons.map((reason, index) => (
                        <li
                            key={index}
                            style={{
                                fontSize: "1.1rem",
                                lineHeight: 1.4,
                                position: "relative",
                                display: "flex",
                                justifyContent: "flex-start",
                                textAlign:"left",
                                // fontStyle: "italic",
                                opacity: 0.7,
                                gap: "0.6rem",
                            }}
                        >
                            <span
                                style={{
                                    minHeight: "0.6rem",
                                    height: "0.6rem",   
                                    width: "0.6rem",
                                    minWidth: "0.6rem",
                                    borderRadius: "50%",
                                    border: "2px solid #1d1d1e",
                                    marginTop: "0.5rem",
                                }}
                            ></span>
                            {reason}
                        </li>
                    ))}
                </ul>
        </section>
    );
};

export default WhyChooseUs;
