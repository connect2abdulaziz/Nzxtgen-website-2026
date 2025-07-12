import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./AdminDashboard.css";
function AdminDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
  }, []);

  console.log("Products:", products);

  const handleDelete = (id) => {
    alert(`Delete item with ID: ${id}`);
    // Replace with delete logic
  };

  const handleEdit = (id) => {
    alert(`Edit item with ID: ${id}`);
    // Replace with edit logic/modal
  };

  const handleCreate = () => {
    alert("Create new item");
    // Replace with create logic/modal
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <p className="subtext">Manage your products, pricing, and more.</p>

      <button className="create-btn" onClick={handleCreate}>
        + Create New Item
      </button>

      <div className="card-grid">
        {products.length === 0 ? (
          <p className="no-items">No items found.</p>
        ) : (
          products.map((item) => (
            <div className="item-card" key={item.id}>
              <img src={item.img} alt={item.name} className="product-image" />
              <h3>{item.name}</h3>
              <p className="price">${item.price.toFixed(2)}</p>
              <p className="price">{item.des}</p>
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
  );
}

export default AdminDashboard;
