import React from "react";
import HeroSection from "./components/HeroSection";
import ServicesOffered from "./components/ServicesOffered";
import KeyWebsiteFeatures from "./components/KeyWebsiteFeatures";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const LandingPage: React.FC = () => {
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <HeroSection />
            <ServicesOffered />
            <KeyWebsiteFeatures />
            <WhyChooseUs />
            <AboutUs />
            <CallToAction />
        </div>
    );
};

export default LandingPage;
