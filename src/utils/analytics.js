/**
 * Google Analytics 4 Event Tracking Utility
 * Tracks only what matters: phone calls, form submissions, and enquiries
 */

// Initialize GA4 - Replace with your actual GA4 Measurement ID
const GA4_MEASUREMENT_ID = process.env.REACT_APP_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX';

/**
 * Initialize Google Analytics 4
 */
export const initGA4 = () => {
  if (typeof window !== 'undefined' && GA4_MEASUREMENT_ID && GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    // Load gtag script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA4_MEASUREMENT_ID, {
      send_page_view: true
    });
  }
};

/**
 * Track phone call click event
 * @param {string} phoneNumber - The phone number that was clicked
 * @param {string} location - Where the call button was clicked (e.g., 'mobile_button', 'footer', 'contact_page')
 */
export const trackPhoneCall = (phoneNumber, location) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call_click', {
      event_category: 'Contact',
      event_label: phoneNumber,
      location: location,
      value: 1
    });
  }
};

/**
 * Track form submission event
 * @param {string} formType - Type of form (e.g., 'contact', 'quote', 'enquiry')
 * @param {string} formName - Name/identifier of the form
 */
export const trackFormSubmission = (formType, formName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submission', {
      event_category: 'Lead',
      event_label: formType,
      form_name: formName,
      value: 1
    });
  }
};

/**
 * Track quote request event
 * @param {string} source - Where the quote request came from
 */
export const trackQuoteRequest = (source) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'quote_request', {
      event_category: 'Lead',
      event_label: source,
      value: 1
    });
  }
};

/**
 * Track WhatsApp click event
 * @param {string} phoneNumber - The WhatsApp number clicked
 */
export const trackWhatsAppClick = (phoneNumber) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'Contact',
      event_label: phoneNumber,
      value: 1
    });
  }
};

/**
 * Track page view (for custom tracking if needed)
 * @param {string} pagePath - The page path
 * @param {string} pageTitle - The page title
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};
