import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
    return (
        <section
            style={{
                paddingInline: "1rem",
                display: "flex",
                marginTop: "2rem",
            }}
        >
            <div
                style={{
                    backgroundColor: "#f8f8f8",
                    maxWidth: "50rem",
                    border: "1px solid #1d1d1e22",
                    borderRadius: "1.6rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems  : "center",
                    textAlign: "center",
                    paddingInline: "1rem",
                    paddingBottom: "2rem",
                }}
            >
                <h2
                    style={{
                        fontSize: "2rem",
                        marginBottom: "1.5rem",
                        fontWeight: 700,
                    }}
                >
                    Emilio DeSantis
                </h2>

                <div
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        margin: "0 auto 1.5rem",
                    }}
                >
                    <Image
                        src="/head.png" // Replace with your actual image path
                        alt="Emilio DeSantis"
                        width={150}
                        height={150}
                        objectFit="cover"
                    />
                </div>

                <p
                    style={{
                        maxWidth: "600px",
                        margin: "0 auto",
                        lineHeight: "1.6",
                        color: "#555",
                        fontFamily: "Mulish, sans-serif",
                    }}
                >
                    I'm a passionate freelance web designer specializing in
                    creating captivating online experiences for restaurants.
                    With a blend of creativity and technical expertise, I craft
                    websites that not only showcase your culinary delights but
                    also enhance your digital presence. My approach combines
                    aesthetics with functionality, ensuring your site leaves a
                    lasting impression on potential diners and drives growth for
                    your business.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
