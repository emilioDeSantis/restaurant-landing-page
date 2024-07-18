import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
    const buttonColor = "#8B4513"; // Dark brownish-red color

    return (
        <section
            style={{
                paddingTop: "5.6rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingInline: "1rem",
                width: "100%",
                paddingBottom: "3.6rem",
                borderBottom: "1px solid #1d1d1e22",
            }}
        >
            <h1
                style={{
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    opacity: 0.8,
                    color: "#1d1d1e",
                }}
            >
                Custom Restaurant Websites
            </h1>
            <h2 style={{ marginTop: "0.5rem", fontSize: "1.8rem" }}>
                Designed | Built | Hosted
            </h2>
            <div
                style={{
                    position: "relative",
                    marginTop: "2.4rem",
                    aspectRatio: 0.5,
                    height: "20rem",
                }}
            >
                <Image
                    src="/Frame 24-portrait.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Hero Image"
                    sizes="50vw"
                />
            </div>
            <Link href="/contact"
                style={{
                    color: buttonColor,
                    background: `${buttonColor}22`, // 0.2 opacity
                    paddingInline: "6rem",
                    paddingBlock: "0.6rem",
                    fontSize: "1.1rem",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                    fontFamily: "Mulish",
                    border: `1px solid ${buttonColor}`,
                    marginTop: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                Get started
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginLeft: "0.5rem" }}
                >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                </svg>
            </Link>
        </section>
    );
};

export default HeroSection;