"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import useHideNavOnScroll from "../hooks/useHideNavOnScroll";
import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";

const Header: React.FC = () => {
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const pathname = usePathname();

    const visible = useHideNavOnScroll();

    const links = [
        { label: "Home", href: "/" },
        { label: "Contact", href: "/contact" },

    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                position: "fixed",
                top: 0,
                transform: `translateY(${visible ? 0 : -4.1}rem)`,
                transition: "0.3s",
                zIndex: 1000,
                background: '#ffffff' ,
                borderBottom: '1px solid #1d1d1e22',
            }}
        >
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    zIndex: 1000,
                    letterSpacing: "0.1em",
                    paddingInline: "5vw",
                }}
            >
                <Link href="/" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Logo />
                </Link>
                <nav
                    className="desktop"
                    style={{
                        gap: "2.4rem",
                        fontWeight: 300,
                        letterSpacing: "0.04em",
                        height: "4rem",
                        opacity: 1,
                    }}
                >
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            ref={(el) => {
                                linkRefs.current[index] = el;
                            }}
                            className={link.href == pathname ? "" : "nav-link"}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                transition: "0.3s",
                                fontWeight: 400,
                            }}
                            href={link.href}
                        >
                            <div>{link.label}</div>
                        </Link>
                    ))}
                </nav>
                <div className="mobile">
                    <DropdownMenu navLinks={links as { label: string; href: string }[]} />
                </div>
            </div>
        </div>
    );
};

export default Header;
