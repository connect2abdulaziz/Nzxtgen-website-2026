import React from "react";
import "./GetQuote.css";

const GetQuote = () => {
    return (
        <div className="service-quote-section">
            <h2 className="quote-title">Get a Quote</h2>
            <p className="quote-description">
                This is a Paragraph. Click on "Edit Text" or double click on the text box to start editing the content.
            </p>
            <div className="quote-form">
                <div className="quote-column">
                    <label className="quote-label" htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        className="quote-input"
                        placeholder="Enter your first name"
                    />
                </div>
                <div className="quote-column">
                    <label className="quote-label" htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        className="quote-input"
                        placeholder="Enter your last name"
                    />
                </div>
                <div className="quote-column">
                    <label className="quote-label" htmlFor="email">Email*</label>
                    <input
                        type="email"
                        id="email"
                        className="quote-input"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="quote-column">
                
                    <button className="quote-button">Send</button>
                </div>
            </div>
        </div>
    );
};

export default GetQuote;
