import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    packageIncludes: [""],
    features: [""],
    img: "",
  });
  const [loading, setLoading] = useState(false);
  const [imgReady, setImgReady] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Form submissions state
  const [activeTab, setActiveTab] = useState("products");
  const [enquirySubmissions, setEnquirySubmissions] = useState([]);
  const [quoteSubmissions, setQuoteSubmissions] = useState([]);
  const [allEnquiries, setAllEnquiries] = useState([]);
  const [allQuotes, setAllQuotes] = useState([]);
  const [submissionSearchTerm, setSubmissionSearchTerm] = useState("");
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [submissionFilter, setSubmissionFilter] = useState("all");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/admin");
      }
    });

    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
        setAllProducts(items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchSubmissions = async () => {
      try {
        const enquirySnapshot = await getDocs(collection(db, "enquiry_submissions"));
        const enquiries = enquirySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        enquiries.sort((a, b) => {
          const ta = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp || 0);
          const tb = b.timestamp?.toDate ? b.timestamp.toDate() : new Date(b.timestamp || 0);
          return tb - ta;
        });
        setEnquirySubmissions(enquiries);
        setAllEnquiries(enquiries);

        const quoteSnapshot = await getDocs(collection(db, "quote_submissions"));
        const quotes = quoteSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        quotes.sort((a, b) => {
          const ta = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp || 0);
          const tb = b.timestamp?.toDate ? b.timestamp.toDate() : new Date(b.timestamp || 0);
          return tb - ta;
        });
        setQuoteSubmissions(quotes);
        setAllQuotes(quotes);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      }
    };

    fetchProducts();
    fetchSubmissions();

    return () => unsubscribe();
  }, [navigate]);

  // Apply search and status filter to submissions
  useEffect(() => {
    let filteredEnquiries = [...allEnquiries];
    let filteredQuotes = [...allQuotes];

    if (submissionSearchTerm) {
      const term = submissionSearchTerm.toLowerCase();
      filteredEnquiries = filteredEnquiries.filter(
        (item) =>
          item.name?.toLowerCase().includes(term) ||
          item.email?.toLowerCase().includes(term) ||
          item.phone?.toLowerCase().includes(term) ||
          item.message?.toLowerCase().includes(term)
      );
      filteredQuotes = filteredQuotes.filter(
        (item) =>
          item.firstName?.toLowerCase().includes(term) ||
          item.lastName?.toLowerCase().includes(term) ||
          item.email?.toLowerCase().includes(term) ||
          item.phone?.toLowerCase().includes(term) ||
          item.description?.toLowerCase().includes(term)
      );
    }

    if (submissionFilter !== "all") {
      filteredEnquiries = filteredEnquiries.filter((item) => item.status === submissionFilter);
      filteredQuotes = filteredQuotes.filter((item) => item.status === submissionFilter);
    }

    setEnquirySubmissions(filteredEnquiries);
    setQuoteSubmissions(filteredQuotes);
  }, [submissionSearchTerm, submissionFilter, allEnquiries, allQuotes]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteDoc(doc(db, "products", id));
        setProducts((prev) => prev.filter((item) => item.id !== id));
      } catch (error) {
        alert("Error deleting item");
      }
    }
  };

  const handleEdit = (id) => {
    const product = products.find((item) => item.id === id);
    if (product) {
      setNewItem({
        name: product.name,
        price: product.price,
        packageIncludes: product.packageIncludes || [""],
        features: product.features || [""],
        img: product.img || "",
      });
      setEditId(id);
      setIsEditing(true);
      setImgReady(true);
      setShowModal(true);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (type, idx, value) => {
    setNewItem((prev) => ({
      ...prev,
      [type]: prev[type].map((item, i) => (i === idx ? value : item)),
    }));
  };

  const handleAddField = (type) => {
    setNewItem((prev) => ({
      ...prev,
      [type]: [...prev[type], ""],
    }));
  };

  const handleRemoveField = (type, idx) => {
    setNewItem((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== idx),
    }));
  };

  const openCloudinaryWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "drfjayoje",
        uploadPreset: "omarellai",
        sources: ["local", "url", "camera"],
        multiple: false,
        cropping: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#FFFFFF",
            sourceBg: "#F4F4F5",
            windowBorder: "#90A0B3",
            tabIcon: "#0078FF",
            inactiveTabIcon: "#69778A",
            menuIcons: "#0078FF",
            link: "#0078FF",
            action: "#0078FF",
            inProgress: "#0078FF",
            complete: "#20B832",
            error: "#c43737",
            textDark: "#000000",
            textLight: "#FFFFFF",
          },
        },
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setNewItem((prev) => ({
            ...prev,
            img: result.info.secure_url,
          }));
          setImgReady(true);
        }
      }
    );
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isEditing && editId) {
        // Update existing product
        await updateDoc(doc(db, "products", editId), {
          name: newItem.name,
          price: parseFloat(newItem.price),
          packageIncludes: newItem.packageIncludes.filter(Boolean),
          features: newItem.features.filter(Boolean),
          img: newItem.img,
        });
        setProducts((prev) =>
          prev.map((item) =>
            item.id === editId
              ? {
                  ...item,
                  ...newItem,
                  price: parseFloat(newItem.price),
                }
              : item
          )
        );
      } else {
        // Create new product
        const docRef = await addDoc(collection(db, "products"), {
          name: newItem.name,
          price: parseFloat(newItem.price),
          packageIncludes: newItem.packageIncludes.filter(Boolean),
          features: newItem.features.filter(Boolean),
          img: newItem.img,
        });
        setProducts((prev) => [
          ...prev,
          {
            id: docRef.id,
            ...newItem,
            price: parseFloat(newItem.price),
          },
        ]);
      }
      setNewItem({
        name: "",
        price: "",
        packageIncludes: [""],
        features: [""],
        img: "",
      });
      setImgReady(false);
      setShowModal(false);
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      alert("Error saving item");
    }
    setLoading(false);
  };

  const openModal = (item) => {
    setModalItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "Unknown";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleString();
  };

  const getWhatsAppLink = (submission) => {
    const phone = submission.phone?.replace(/[^0-9]/g, "") || "61437885910";
    const message =
      submission.type === "enquiry"
        ? `Hi ${submission.name}, thanks for your enquiry about "${(submission.message || "").substring(0, 50)}...". We'll get back to you soon!`
        : `Hi ${submission.firstName}, thanks for your quote request for "${(submission.description || "").substring(0, 50)}...". We'll prepare your quote shortly!`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const getEmailLink = (submission) => {
    const subject =
      submission.type === "enquiry"
        ? `Re: Your Enquiry - ${submission.name}`
        : `Re: Your Quote Request - ${submission.firstName} ${submission.lastName}`;
    return `mailto:${submission.email}?subject=${encodeURIComponent(subject)}`;
  };

  const hasAttachments = (submission) => {
    return (submission.attachments && submission.attachments.length > 0) || submission.attachment;
  };

  const getAttachmentCount = (submission) => {
    if (submission.attachments && submission.attachments.length > 0) {
      return submission.attachments.length;
    }
    if (submission.attachment) return 1;
    return 0;
  };

  const downloadAttachment = (attachment) => {
    if (!attachment || !attachment.fileData) return;
    try {
      const base64Data = attachment.fileData.split(",")[1];
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: attachment.fileType });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = attachment.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Error downloading file");
    }
  };

  const viewSubmission = (submission) => {
    setSelectedSubmission(submission);
    setShowSubmissionModal(true);
    if (submission.status === "unread") {
      markSubmissionAsRead(submission.id, submission.type);
    }
  };

  const markSubmissionAsRead = async (id, type) => {
    try {
      const collectionName = type === "enquiry" ? "enquiry_submissions" : "quote_submissions";
      await updateDoc(doc(db, collectionName, id), { status: "read" });
      if (type === "enquiry") {
        setEnquirySubmissions((prev) => prev.map((item) => (item.id === id ? { ...item, status: "read" } : item)));
        setAllEnquiries((prev) => prev.map((item) => (item.id === id ? { ...item, status: "read" } : item)));
      } else {
        setQuoteSubmissions((prev) => prev.map((item) => (item.id === id ? { ...item, status: "read" } : item)));
        setAllQuotes((prev) => prev.map((item) => (item.id === id ? { ...item, status: "read" } : item)));
      }
    } catch (error) {
      console.error("Error marking as read:", error);
    }
  };

  const deleteSubmission = async (id, type) => {
    if (!window.confirm("Are you sure you want to delete this submission?")) return;
    try {
      const collectionName = type === "enquiry" ? "enquiry_submissions" : "quote_submissions";
      await deleteDoc(doc(db, collectionName, id));
      if (type === "enquiry") {
        setEnquirySubmissions((prev) => prev.filter((item) => item.id !== id));
        setAllEnquiries((prev) => prev.filter((item) => item.id !== id));
      } else {
        setQuoteSubmissions((prev) => prev.filter((item) => item.id !== id));
        setAllQuotes((prev) => prev.filter((item) => item.id !== id));
      }
      setShowSubmissionModal(false);
    } catch (error) {
      alert("Error deleting submission");
    }
  };

  const totalEnquiries = allEnquiries.length;
  const totalQuotes = allQuotes.length;
  const unreadEnquiries = allEnquiries.filter((item) => item.status === "unread").length;
  const unreadQuotes = allQuotes.filter((item) => item.status === "unread").length;
  const totalUnread = unreadEnquiries + unreadQuotes;

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/admin");
    });
  };

  return (
    <div className="wrapper">
      <SEO 
        title="Admin Dashboard | NZXTGEN"
        description="Admin dashboard"
        noindex={true}
      />
      <Navbar />
      <div className="dashboard-container">
        <h2>Admin Dashboard</h2>
        <p className="subtext">Manage your products, form submissions, and more.</p>

        <div className="tab-navigation">
          <button
            type="button"
            onClick={() => setActiveTab("products")}
            className={`tab-button ${activeTab === "products" ? "active" : ""}`}
          >
            Products ({allProducts.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("submissions")}
            className={`tab-button ${activeTab === "submissions" ? "active" : ""}`}
          >
            Form Submissions ({totalEnquiries + totalQuotes})
            {totalUnread > 0 && <span className="unread-badge">{totalUnread}</span>}
          </button>
        </div>

        {activeTab === "products" && (
          <>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "end",
            gap: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Search products..."
            style={{
              width: "300px",
              padding: "8px",
              backgroundColor: "#f0f0f0",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
            value={searchTerm}
            onChange={(e) => {
              const term = e.target.value.toLowerCase();
              setSearchTerm(e.target.value);
              setProducts(
                allProducts.filter((item) =>
                  item.name.toLowerCase().includes(term)
                )
              );
            }}
          />
          <button
            style={{
              margin: "20px 0",
              padding: "10px 24px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => {
              setShowModal(true);
              setIsEditing(false); // <-- Reset edit mode
              setEditId(null); // <-- Reset edit id
              setNewItem({
                name: "",
                price: "",
                packageIncludes: [""],
                features: [""],
                img: "",
              });
              setImgReady(false);
            }}
          >
            + Add New Product
          </button>
          <button
            style={{
              margin: "20px 0",
              padding: "10px 24px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              overflowY: "auto", // Add this line
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "32px 24px",
                borderRadius: "12px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                maxWidth: "600px",
                width: "90vw",
                position: "relative",
                maxHeight: "90vh", // Add this line
                overflowY: "auto", // Add this line
              }}
            >
              <button
                type="button"
                onClick={() => setShowModal(false)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "none",
                  border: "none",
                  fontSize: "22px",
                  cursor: "pointer",
                  color: "#333",
                }}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 style={{ color: "black" }}>Add New Product</h2>
              <p className="subtext" style={{ color: "black", opacity: 0.8 }}>
                Enter product details to create a new entry
              </p>
              <form className="create-form" onSubmit={handleFormSubmit}>
                <div className="form-group-row">
                  <div className="form-group-row-inner">
                    <label htmlFor="name" style={{ textAlign: "start" }}>
                      Product Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Product Name"
                      value={newItem.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="form-group-row-inner">
                    <label htmlFor="price" style={{ textAlign: "start" }}>
                      Price <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      value={newItem.price}
                      onChange={handleFormChange}
                      required
                      step="0.01"
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "8px",
                  }}
                >
                  <label style={{ textAlign: "start" }}>
                    Package Includes <span style={{ color: "red" }}>*</span>
                  </label>
                  {newItem.packageIncludes.map((val, idx) => (
                    <div
                      className="form-group-row-wrapper"
                      style={{ alignItems: "center", marginBottom: 8 }}
                      key={idx}
                    >
                      <span
                        style={{
                          width: 10,
                          height: 9,
                          backgroundColor: "black",
                          borderRadius: 9999,
                        }}
                      ></span>
                      <input
                        type="text"
                        value={val}
                        onChange={(e) =>
                          handleArrayChange(
                            "packageIncludes",
                            idx,
                            e.target.value
                          )
                        }
                        placeholder={`Include #${idx + 1}`}
                        required
                        style={{ flex: 1 }}
                      />
                      {newItem.packageIncludes.length > 1 &&
                        idx !== newItem.packageIncludes.length - 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveField("packageIncludes", idx)
                            }
                            style={{
                              marginTop: "0px",
                              padding: "4px 8px",
                              backgroundColor: "#dc3545",
                              color: "white",
                              border: "none",
                              borderRadius: 4,
                              height: "40px",
                              width: "fit-content",
                            }}
                          >
                            Remove
                          </button>
                        )}
                      {idx === newItem.packageIncludes.length - 1 && (
                        <button
                          type="button"
                          onClick={() => handleAddField("packageIncludes")}
                          style={{
                            marginTop: "0px",
                            padding: "4px 8px",
                            backgroundColor: "#218838",
                            color: "white",
                            border: "none",
                            borderRadius: 4,
                            height: "40px",
                            width: "75px",
                          }}
                        >
                          Add
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: "8px",
                  }}
                >
                  <label style={{ textAlign: "start" }}>
                    Features <span style={{ color: "red" }}>*</span>
                  </label>
                  {newItem.features.map((val, idx) => (
                    <div
                      className="form-group-row-wrapper"
                      style={{ alignItems: "center", marginBottom: 8 }}
                      key={idx}
                    >
                      <span
                        style={{
                          width: 10,
                          height: 9,
                          backgroundColor: "black",
                          borderRadius: 9999,
                        }}
                      ></span>
                      <input
                        type="text"
                        value={val}
                        onChange={(e) =>
                          handleArrayChange("features", idx, e.target.value)
                        }
                        placeholder={`Feature #${idx + 1}`}
                        required
                        style={{ flex: 1 }}
                      />
                      {newItem.features.length > 1 &&
                        idx !== newItem.features.length - 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveField("features", idx)}
                            style={{
                              marginTop: "0px",
                              padding: "4px 8px",
                              backgroundColor: "#dc3545",
                              color: "white",
                              border: "none",
                              borderRadius: 4,
                              height: "40px",
                              width: "fit-content",
                            }}
                          >
                            Remove
                          </button>
                        )}
                      {idx === newItem.features.length - 1 && (
                        <button
                          type="button"
                          onClick={() => handleAddField("features")}
                          style={{
                            marginTop: "0px",
                            padding: "4px 8px",
                            backgroundColor: "#218838",
                            color: "white",
                            border: "none",
                            borderRadius: 4,
                            height: "40px",
                            width: "75px",
                          }}
                        >
                          Add
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="image-upload-btn"
                  onClick={openCloudinaryWidget}
                >
                  Upload Image
                </button>
                {newItem.img && (
                  <img
                    src={newItem.img}
                    alt="Preview"
                    style={{
                      width: "100%",
                      maxHeight: 120,
                      objectFit: "cover",
                      marginBottom: 8,
                      borderRadius: 6,
                    }}
                  />
                )}
                <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    style={{ width: "50%" }}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    disabled={loading || !imgReady}
                    style={{ width: "50%" }}
                  >
                    {loading
                      ? isEditing
                        ? "Updating..."
                        : "Creating..."
                      : isEditing
                      ? "Update"
                      : "Create"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <h2>Current Products</h2>
        <div className="card-grid" style={{ width: "100%" }}>
          {products.length === 0 ? (
            <p className="no-items">No items found.</p>
          ) : (
            products.map((item) => (
              <div className="item-card" key={item.id}>
                <img src={item.img} alt={item.name} className="product-image" />
                <h3>{item.name}</h3>
                <p className="price">${item.price.toLocaleString()}</p>
                <div className="card-buttons">
                  <button className="view-btn" onClick={() => openModal(item)}>
                    View
                  </button>
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
          </>
        )}

        {activeTab === "submissions" && (
          <div className="submissions-section">
            <div className="submissions-controls">
              <input
                type="text"
                placeholder="Search submissions..."
                className="search-input"
                value={submissionSearchTerm}
                onChange={(e) => setSubmissionSearchTerm(e.target.value)}
              />
              <select
                value={submissionFilter}
                onChange={(e) => setSubmissionFilter(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Status</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
              </select>
              <button type="button" className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>

            <div className="stats-grid">
              <div className="stat-card enquiries">
                <h3>{totalEnquiries}</h3>
                <p>Total Enquiries</p>
              </div>
              <div className="stat-card quotes">
                <h3>{totalQuotes}</h3>
                <p>Total Quotes</p>
              </div>
              <div className="stat-card unread-enquiries">
                <h3>{unreadEnquiries}</h3>
                <p>Unread Enquiries</p>
              </div>
              <div className="stat-card unread-quotes">
                <h3>{unreadQuotes}</h3>
                <p>Unread Quotes</p>
              </div>
            </div>

            <div className="submissions-layout">
              <div className="submission-section">
                <div className="submission-header">
                  <h3>📝 Enquiry Submissions <span className="submission-count">{enquirySubmissions.length}</span></h3>
                </div>
                <div className="submissions-container">
                  {enquirySubmissions.length === 0 ? (
                    <div className="empty-state">No enquiry submissions found.</div>
                  ) : (
                    <table className="submissions-table">
                      <thead>
                        <tr>
                          <th>Status</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Message</th>
                          <th>Files</th>
                          <th>Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {enquirySubmissions.map((submission) => (
                          <tr key={submission.id} className={submission.status === "unread" ? "unread" : ""}>
                            <td>
                              <span className={`status-badge ${submission.status}`}>
                                {submission.status === "unread" ? "NEW" : "READ"}
                              </span>
                            </td>
                            <td className="name-cell">{submission.name}</td>
                            <td>{submission.email}</td>
                            <td>{submission.phone}</td>
                            <td className="truncate">{(submission.message || "").substring(0, 50)}...</td>
                            <td>
                              <span className={`file-indicator ${hasAttachments(submission) ? "has-file" : "no-file"}`}>
                                {hasAttachments(submission) ? `📎 ${getAttachmentCount(submission)}` : "-"}
                              </span>
                            </td>
                            <td className="date-cell">{formatDate(submission.timestamp)}</td>
                            <td>
                              <button
                                type="button"
                                onClick={() => viewSubmission({ ...submission, type: "enquiry" })}
                                className="btn btn-sm btn-info"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              <div className="submission-section">
                <div className="submission-header">
                  <h3>💰 Quote Submissions <span className="submission-count">{quoteSubmissions.length}</span></h3>
                </div>
                <div className="submissions-container">
                  {quoteSubmissions.length === 0 ? (
                    <div className="empty-state">No quote submissions found.</div>
                  ) : (
                    <table className="submissions-table">
                      <thead>
                        <tr>
                          <th>Status</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Building</th>
                          <th>Description</th>
                          <th>Files</th>
                          <th>Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {quoteSubmissions.map((submission) => (
                          <tr key={submission.id} className={submission.status === "unread" ? "unread" : ""}>
                            <td>
                              <span className={`status-badge ${submission.status}`}>
                                {submission.status === "unread" ? "NEW" : "READ"}
                              </span>
                            </td>
                            <td className="name-cell">{submission.firstName} {submission.lastName}</td>
                            <td>{submission.email}</td>
                            <td>{submission.phone}</td>
                            <td>{submission.buildingType}</td>
                            <td className="truncate">{(submission.description || "").substring(0, 50)}...</td>
                            <td>
                              <span className={`file-indicator ${hasAttachments(submission) ? "has-file" : "no-file"}`}>
                                {hasAttachments(submission) ? `📎 ${getAttachmentCount(submission)}` : "-"}
                              </span>
                            </td>
                            <td className="date-cell">{formatDate(submission.timestamp)}</td>
                            <td>
                              <button
                                type="button"
                                onClick={() => viewSubmission({ ...submission, type: "quote" })}
                                className="btn btn-sm btn-info"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      {showSubmissionModal && selectedSubmission && (
        <div className="modal-overlay" onClick={() => setShowSubmissionModal(false)}>
          <div className="modal-container submission-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedSubmission.type === "enquiry" ? "📝 Enquiry" : "💰 Quote"} Submission</h3>
              <button type="button" onClick={() => setShowSubmissionModal(false)} className="modal-close" aria-label="Close">×</button>
            </div>
            <div className="submission-details">
              <div className="detail-section">
                <h4>👤 Personal Information</h4>
                <div className="detail-grid">
                  {selectedSubmission.type === "enquiry" ? (
                    <>
                      <div className="detail-item"><span className="label">Name:</span><span className="value">{selectedSubmission.name}</span></div>
                      <div className="detail-item"><span className="label">Email:</span><span className="value">{selectedSubmission.email}</span></div>
                      <div className="detail-item"><span className="label">Phone:</span><span className="value">{selectedSubmission.phone || "Not provided"}</span></div>
                      <div className="detail-item"><span className="label">Address:</span><span className="value">{selectedSubmission.address || "Not provided"}</span></div>
                    </>
                  ) : (
                    <>
                      <div className="detail-item"><span className="label">Name:</span><span className="value">{selectedSubmission.firstName} {selectedSubmission.lastName}</span></div>
                      <div className="detail-item"><span className="label">Email:</span><span className="value">{selectedSubmission.email}</span></div>
                      <div className="detail-item"><span className="label">Phone:</span><span className="value">{selectedSubmission.phone || "Not provided"}</span></div>
                    </>
                  )}
                </div>
              </div>
              <div className="detail-section">
                <h4>📋 Submission Details</h4>
                <div className="detail-grid">
                  <div className="detail-item"><span className="label">Type:</span><span className="value">{selectedSubmission.type === "enquiry" ? "General Enquiry" : "Quote Request"}</span></div>
                  <div className="detail-item"><span className="label">Source:</span><span className="value">{selectedSubmission.source || "—"}</span></div>
                  <div className="detail-item"><span className="label">Date:</span><span className="value">{formatDate(selectedSubmission.timestamp)}</span></div>
                  <div className="detail-item"><span className="label">Status:</span><span className={`value status-${selectedSubmission.status}`}>{selectedSubmission.status.toUpperCase()}</span></div>
                </div>
              </div>
              <div className="detail-section">
                <h4>💬 {selectedSubmission.type === "enquiry" ? "Message" : "Work Description"}</h4>
                <div className="message-content">
                  {selectedSubmission.type === "enquiry" ? selectedSubmission.message : selectedSubmission.description}
                </div>
              </div>
              {selectedSubmission.type === "quote" && (
                <div className="detail-section">
                  <h4>🏗️ Project Details</h4>
                  <div className="detail-grid">
                    <div className="detail-item"><span className="label">Building Type:</span><span className="value">{selectedSubmission.buildingType}</span></div>
                    {selectedSubmission.otherSpec && <div className="detail-item"><span className="label">Other Spec:</span><span className="value">{selectedSubmission.otherSpec}</span></div>}
                    <div className="detail-item"><span className="label">Roof Type:</span><span className="value">{selectedSubmission.roofType}</span></div>
                    {selectedSubmission.wallTypes && <div className="detail-item"><span className="label">Wall Types:</span><span className="value">{selectedSubmission.wallTypes}</span></div>}
                    {selectedSubmission.ceilingTypes && <div className="detail-item"><span className="label">Ceiling Types:</span><span className="value">{selectedSubmission.ceilingTypes}</span></div>}
                    {selectedSubmission.additionalInfo && <div className="detail-item"><span className="label">Additional Info:</span><span className="value">{selectedSubmission.additionalInfo}</span></div>}
                  </div>
                </div>
              )}
              {(hasAttachments(selectedSubmission) || selectedSubmission.attachment) && (
                <div className="detail-section">
                  <h4>📎 Attached Files {hasAttachments(selectedSubmission) && `(${getAttachmentCount(selectedSubmission)})`}</h4>
                  {selectedSubmission.attachments && selectedSubmission.attachments.length > 0 && (
                    <div className="attachments-list">
                      {selectedSubmission.attachments.map((attachment, index) => (
                        <div key={index} className="attachment-item">
                          <div className="attachment-info">
                            <span className="file-icon">📄</span>
                            <div className="file-details">
                              <div className="file-name">{attachment.fileName}</div>
                              <div className="file-meta">Size: {attachment.fileSize ? (attachment.fileSize / 1024 / 1024).toFixed(2) : "—"} MB | Type: {attachment.fileType || "—"}</div>
                            </div>
                          </div>
                          {attachment.fileData ? (
                            <button type="button" onClick={() => downloadAttachment(attachment)} className="btn btn-sm btn-success">📥 Download</button>
                          ) : (
                            <span className="file-meta">(Not stored – file too large)</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {selectedSubmission.attachment && !selectedSubmission.attachments && (
                    <div className="attachments-list">
                      <div className="attachment-item">
                        <div className="attachment-info">
                          <span className="file-icon">📄</span>
                          <div className="file-details">
                            <div className="file-name">{selectedSubmission.attachment.fileName}</div>
                            <div className="file-meta">Size: {(selectedSubmission.attachment.fileSize / 1024 / 1024).toFixed(2)} MB | Type: {selectedSubmission.attachment.fileType}</div>
                          </div>
                        </div>
                        {selectedSubmission.attachment.fileData ? (
                          <button type="button" onClick={() => downloadAttachment(selectedSubmission.attachment)} className="btn btn-sm btn-success">📥 Download</button>
                        ) : (
                          <span className="file-meta">(Not stored)</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="modal-actions">
              <div className="action-group-left">
                <button type="button" onClick={() => deleteSubmission(selectedSubmission.id, selectedSubmission.type)} className="btn btn-danger">🗑️ Delete</button>
              </div>
              <div className="action-group-right">
                <button type="button" onClick={() => setShowSubmissionModal(false)} className="btn btn-secondary">Close</button>
                <a href={getEmailLink(selectedSubmission)} className="btn btn-primary">📧 Reply via Email</a>
                <a href={getWhatsAppLink(selectedSubmission)} target="_blank" rel="noopener noreferrer" className="btn btn-success">📱 Reply via WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && modalItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={modalItem.img} alt={modalItem.name} />
              </div>
              <div className="modal-info">
                <h2 className="modal-title">{modalItem.name}</h2>
                <h4>Package Includes:</h4>
                <ul className="package-list">
                  {modalItem.packageIncludes?.map((pkg, idx) => (
                    <li key={idx}>{pkg}</li>
                  ))}
                </ul>
                <h4>Features:</h4>
                <ul className="feature-list">
                  {modalItem.features?.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="modal-price">${modalItem.price}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
