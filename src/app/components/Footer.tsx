import React from "react";

const Footer: React.FC = () => {
    return (
        <footer
            style={{
                paddingInline: "1rem",
                paddingTop: "3rem",
                paddingBottom: "1.6rem",
                backgroundColor: "#f8f8f8",
                fontFamily: "Georgia, serif",
                width: "100%",
                borderTop: "1px solid #1d1d1e22",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    maxWidth: "800px",
                    margin: "0 auto",
                    textAlign: "center",
                }}
            >
                <div style={{ marginBottom: "1.5rem" }}>
                    <p
                        style={{
                            marginBottom: "0.5rem",
                            fontFamily: "Mulish, sans-serif",
                        }}
                    >
                        <a
                            href="mailto:emilio@ui-design-studio.com"
                            style={{ color: "#333", textDecoration: "none" }}
                        >
                            emilio@ui-design-studio.com
                        </a>
                    </p>
                    <p
                        style={{
                            marginBottom: "1.5rem",
                            fontFamily: "Mulish, sans-serif",
                        }}
                    >
                        <a
                            href="tel:7818797402"
                            style={{ color: "#333", textDecoration: "none" }}
                        >
                            781.879.7402
                        </a>
                    </p>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "1rem",
                        }}
                    >
                        <a
                            href="https://www.linkedin.com/in/emilio-desantis-53140719b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#333" }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/ui_design_studio_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#333" }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    ry="5"
                                />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </a>
                    </div>
                </div>
                <p
                    style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "0.9rem",
                        color: "#666",
                    }}
                >
                    © 2024 UI Design Studio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
