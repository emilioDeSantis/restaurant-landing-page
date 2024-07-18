import React from "react";

const ProcessCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
}> = ({ icon, title, description }) => {
    return (
        <div
            style={{
                backgroundColor: "white",
                borderRadius: "0.4rem",
                paddingInline: "1.5rem",
                border: "1px solid #e0e0e0",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                paddingBlock: "1.2rem",
                width: "100%",
                maxWidth: "32rem",
            }}
        >
            <div
                style={{
                    flexShrink: 0,
                    backgroundColor: "#f5f5f5",
                    borderRadius: "50%",
                    width: "3.2rem",
                    height: "3.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {icon}
            </div>
            <div style={{ flex: 1 }}>
                <h3
                    style={{
                        fontSize: "1.3rem",
                        fontWeight: 600,
                        fontFamily: "Mulish",
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        marginTop: "0.4rem",
                        lineHeight: 1.4,
                        fontFamily: "Mulish",
                        opacity: 0.7,
                    }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

const DesignIcon: React.FC = () => (
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
        <path d="M12 20h9" />
        <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
        <path d="m15 5 3 3" />
    </svg>
);

const DevelopmentIcon: React.FC = () => (
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
        <path d="M10 12.5 8 15l2 2.5" />
        <path d="m14 12.5 2 2.5-2 2.5" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
    </svg>
);

const HostingIcon: React.FC = () => (
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
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
    </svg>
);

const UpdatesIcon: React.FC = () => (
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
        <path d="M12 17v4" />
        <path d="m15.2 4.9-.9-.4" />
        <path d="m15.2 7.1-.9.4" />
        <path d="m16.9 3.2-.4-.9" />
        <path d="m16.9 8.8-.4.9" />
        <path d="m19.5 2.3-.4.9" />
        <path d="m19.5 9.7-.4-.9" />
        <path d="m21.7 4.5-.9.4" />
        <path d="m21.7 7.5-.9-.4" />
        <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
        <path d="M8 21h8" />
        <circle cx="18" cy="6" r="3" />
    </svg>
);

const WebDesignProcess: React.FC = () => {
    return (
        <section
            style={{
                paddingInline: "1rem",
                paddingBottom: "3rem",
                borderBottom: "1px solid #1d1d1e22",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h2
                style={{
                    marginBottom: "2.5rem",
                    textAlign: "center",
                }}
            >
                Our Website Creation Process
            </h2>

            <div
                style={{
                    width: "100%",
                    display: "flex",
                    gap: "0.6rem",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <ProcessCard
                    icon={<DesignIcon />}
                    title="Design"
                    description="We create a visual design that captures your restaurant's unique style and atmosphere."
                />

                <ProcessCard
                    icon={<DevelopmentIcon />}
                    title="Development"
                    description="We build a responsive, fast-loading website with features tailored to your restaurant's needs."
                />

                <ProcessCard
                    icon={<HostingIcon />}
                    title="Hosting"
                    description="We deploy your site on secure, reliable servers ensuring 24/7 availability and optimal performance."
                />

                <ProcessCard
                    icon={<UpdatesIcon />}
                    title="Updates"
                    description="We provide regular maintenance and updates to keep your site fresh and aligned with your latest offerings."
                />
            </div>
        </section>
    );
};

export default WebDesignProcess;
