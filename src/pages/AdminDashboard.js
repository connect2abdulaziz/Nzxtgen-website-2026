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
import "./AdminDashboard.css";

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]); // Add this line
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
  const [searchTerm, setSearchTerm] = useState("");   // Add this line
  const navigate = useNavigate();

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
        setAllProducts(items); // Save original list
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    return () => unsubscribe();
  }, [navigate]);

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

  return (
    <div className="wrapper">
      <Navbar />
      <div className="dashboard-container">
        <h2>Admin Dashboard</h2>
        <p className="subtext">Manage your products, pricing, and more.</p>
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
        <div className="card-grid" style={{width:"100%"}}>
          {products.length === 0 ? (
            <p className="no-items">No items found.</p>
          ) : (
            products.map((item) => (
              <div className="item-card" key={item.id}>
                <img src={item.img} alt={item.name} className="product-image" />
                <h3>{item.name}</h3>
                <p className="price">${item.price.toLocaleString()}</p>
                <div className="card-buttons">
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
      </div>
    </div>
  );
}

export default AdminDashboard;
