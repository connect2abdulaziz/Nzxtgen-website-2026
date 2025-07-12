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
    des: "",
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
        des: newItem.des,
        img: newItem.img,
      });
      setProducts((prev) => [
        ...prev,
        { id: docRef.id, ...newItem, price: parseFloat(newItem.price) },
      ]);
      setNewItem({ name: "", price: "", des: "", img: "" });
      setImgReady(false);
    } catch (error) {
      alert("Error creating item");
    }
    setLoading(false);
  };

  return (
    <>
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
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newItem.name}
              onChange={handleFormChange}
              required
            />
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
          <input
            type="text"
            name="des"
            placeholder="Description"
            value={newItem.des}
            onChange={handleFormChange}
            required
          />
          <button type="button" className="image-upload-btn" onClick={openCloudinaryWidget}>
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
                <p style={{ whiteSpace: "pre-line" }}>{item.des}</p>
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
    </>
  );
}

export default AdminDashboard;
