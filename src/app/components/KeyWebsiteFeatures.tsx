import React from "react";
import Image from "next/image";

interface SectionProps {
    title: string;
    imageSrc: string;
    bulletPoints: string[];
}

const BulletPoint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
        }}
    >
        <div
            style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                marginRight: "10px",
                flexShrink: 0,
                border: "1px solid #000",
            }}
        />
        <span>{children}</span>
    </div>
);

const Divider: React.FC = () => (
    <div
    className="mobile"
        style={{
            width: "100%",
            height: "6px",
            borderTop: "1px solid #1d1d1e22",
            borderBottom: "1px solid #1d1d1e22",
        }}
    />
);

const Section: React.FC<SectionProps> = ({ title, imageSrc, bulletPoints }) => (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2rem",
            width: "100%",
            maxWidth: "20rem",
            alignItems: "center",
        }}
    >
            <Divider />
        <h3
            style={{
                marginTop: "2rem",
                textAlign: "center",
            }}
        >
            {title}
        </h3>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
            }}
        >
            <div
                style={{
                    width: "100%",
                    aspectRatio: 0.55,
                    position: "relative",
                    marginTop: "2rem",
                }}
            >
                <Image
                    src={imageSrc}
                    alt={`${title} Image`}
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: "1rem", 
                        border: "1px solid #1d1d1e22",
                     }}
                    sizes="100vw"
                />
            </div>
        </div>
    </div>
);

const Header: React.FC = () => (
    <header
        style={{
            textAlign: "center",
            marginBottom: "2rem",
            fontFamily: "Kaisei Tokumin",
        }}
    >
        <h2
            style={{
                marginBottom: "0.5rem",
            }}
        >
            Key Website Features
        </h2>
        <p
            style={{
                fontSize: "1.2rem",
                opacity: 0.7,
                fontStyle: "italic",
                marginTop: "1rem",
            }}
        >
            Elevate your online presence with these essential elements
        </p>
    </header>
);

const RestaurantWebsiteFeatures: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "2rem",
                width: "100%",
                // paddingTop: "3rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid #1d1d1e22",
                alignItems: "center",
                
            }}
        >
            <Header />
            <div className="key-features">
            <Section
                title="Landing page"
                imageSrc="/heroex.png"
                bulletPoints={["Custom design", "Showcases brand"]}
            />
            <Section
                title="Menu display"
                imageSrc="/menuex.png"
                bulletPoints={[
                    "Interactive categories",
                    "High-quality food photos",
                ]}
            />
            <Section
                title="Reservation info"
                imageSrc="/infoex.png"
                bulletPoints={["Contact details", "Location map"]}
            /></div>
        </div>
    );
};

export default RestaurantWebsiteFeatures;