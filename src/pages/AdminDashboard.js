import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    packageIncludes: [""],
    features: [""],
    img: "",
  });
  const [loading, setLoading] = useState(false);
  const [imgReady, setImgReady] = useState(false);
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
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    return () => unsubscribe();
  }, [navigate]);

  const handleDelete = (id) => {
    alert(`Delete item with ID: ${id}`);
  };

  const handleEdit = (id) => {
    alert(`Edit item with ID: ${id}`);
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
      setNewItem({
        name: "",
        price: "",
        packageIncludes: [""],
        features: [""],
        img: "",
      });
      setImgReady(false);
    } catch (error) {
      alert("Error creating item");
    }
    setLoading(false);
  };

  return (
    <div className="wrapper">
      <Navbar />
      <div className="dashboard-container">
        <h2>Admin Dashboard</h2>
        <p className="subtext">Manage your products, pricing, and more.</p>
        <form
          className="create-form"
          onSubmit={handleFormSubmit}
          style={{ margin: "20px 0" }}
        >
          <div className="form-group-row">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                gap: "8px",
              }}
            >
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                gap: "8px",
              }}
            >
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
                className="form-group-row"
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
                    handleArrayChange("packageIncludes", idx, e.target.value)
                  }
                  placeholder={`Include #${idx + 1}`}
                  required
                  style={{ flex: 1 }}
                />
                {newItem.packageIncludes.length > 1 &&
                  idx !== newItem.packageIncludes.length - 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveField("packageIncludes", idx)}
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
                className="form-group-row"
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
          <button type="submit" disabled={loading || !imgReady}>
            {loading ? "Creating..." : "Create"}
          </button>
        </form>
        <div className="card-grid">
          {products.length === 0 ? (
            <p className="no-items">No items found.</p>
          ) : (
            products.map((item) => (
              <div className="item-card" key={item.id}>
                <img src={item.img} alt={item.name} className="product-image" />
                <h3>{item.name}</h3>
                <p className="price">${item.price.toFixed(2)}</p>
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
