import React from "react";

const Logo = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "flex-end",
            }}
        >
            <svg height="1.6rem" viewBox="0 0 14 12" fill="none">
                <g clipPath="url(#clip0_67_213)">
                    <rect width="14" height="12" fill="white" />
                    <path
                        d="M1 1V9C1 10.1046 1.89543 11 3 11V11C4.10457 11 5 10.1046 5 9V1"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.99902 1V11"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="12"
                        y="9.99997"
                        width="2"
                        height="2"
                        rx="1"
                        fill="black"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_67_213">
                        <rect width="14" height="12" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <div
                style={{
                    fontSize: "0.8rem",
                    fontWeight: 300,
                    textTransform: "uppercase",
                    lineHeight: 0.9,
                    marginLeft: "0.4rem",
                    fontStyle: "italic",
                    fontFamily: "Mulish",

                }}
            >
                Design Studio
            </div>
        </div>
    );
};

export default Logo;
