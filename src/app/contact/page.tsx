"use client";
import React, { useState } from "react";

const ConsultationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        restaurantName: "",
        website: "",
        currentStatus: "",
        primaryGoal: "",
        contactMethod: "",
        bestTime: "",
        additionalInfo: "",
        gdprConsent: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    const inputStyle = {
        width: "100%",
        padding: "0.5rem",
        marginBottom: "1rem",
        border: "1px solid #1d1d1e22",
        borderRadius: "0.25rem",
        fontSize: "1rem",
    };

    const labelStyle = {
        display: "block",
        marginBottom: "0.5rem",
        fontSize: "1rem",
        color: "#1d1d1e",
    };

    const buttonColor = "#8B4513"; // Dark brownish-red color

    return (
        <section style={{
            paddingTop: "3rem",
            paddingInline: "1rem",
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            paddingBottom: "3rem",
        }}>
            <h2 style={{ fontSize: "1.8rem", textAlign: "center", marginBottom: "2rem" }}>
                Request a Free Consultation
            </h2>
            <form onSubmit={handleSubmit}>
                <label style={labelStyle}>
                    Full Name
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </label>

                <label style={labelStyle}>
                    Email Address
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </label>

                <label style={labelStyle}>
                    Phone Number
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </label>

                <label style={labelStyle}>
                    Restaurant Name
                    <input
                        type="text"
                        name="restaurantName"
                        value={formData.restaurantName}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </label>

                <label style={labelStyle}>
                    Current Website (if applicable)
                    <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                </label>

                <label style={labelStyle}>
                    Current Website Status
                    <select
                        name="currentStatus"
                        value={formData.currentStatus}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    >
                        <option value="">Select an option</option>
                        <option value="no-website">No website</option>
                        <option value="needs-redesign">Existing website needs redesign</option>
                        <option value="other">Other</option>
                    </select>
                </label>

                <label style={labelStyle}>
                    Primary Goal for the Website
                    <select
                        name="primaryGoal"
                        value={formData.primaryGoal}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    >
                        <option value="">Select an option</option>
                        <option value="increase-reservations">Increase reservations</option>
                        <option value="showcase-menu">Showcase menu</option>
                        <option value="improve-online-presence">Improve online presence</option>
                        <option value="other">Other</option>
                    </select>
                </label>

                <label style={labelStyle}>
                    Preferred Contact Method
                    <select
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    >
                        <option value="">Select an option</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                    </select>
                </label>

                <label style={labelStyle}>
                    Best Time to Contact
                    <select
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    >
                        <option value="">Select an option</option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                    </select>
                </label>

                <label style={labelStyle}>
                    Additional Information
                    <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        style={{ ...inputStyle, height: "100px", resize: "vertical" }}
                    />
                </label>

                <label style={{ ...labelStyle, display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                    <input
                        type="checkbox"
                        name="gdprConsent"
                        checked={formData.gdprConsent}
                        onChange={handleCheckboxChange}
                        required
                        style={{ marginRight: "0.5rem" }}
                    />
                    I consent to UI Design Studio storing and processing my personal data for the purpose of this consultation request.
                </label>

                <button
                    type="submit"
                    style={{
                        color: "white",
                        background: buttonColor,
                        paddingInline: "2rem",
                        paddingBlock: "0.6rem",
                        fontSize: "1.1rem",
                        borderRadius: "0.25rem",
                        cursor: "pointer",
                        fontFamily: "Mulish",
                        border: "none",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    Send Consultation Request
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
                        <path d="M22 2L11 13" />
                        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                </button>
            </form>
        </section>
    );
};

export default ConsultationForm;