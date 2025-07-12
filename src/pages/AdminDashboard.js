import React, { useState } from "react";
import "./AdminDashboard.css";
import img1 from "../assets/about/electrical.jpg";
function AdminDashboard() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "House",
      price: 188457,
      image: img1,
    },
    {
      id: 1,
      name: "House",
      price: 188457,
      image: img1,
    },
    {
      id: 1,
      name: "House",
      price: 188457,
      image: img1,
    },
    {
      id: 1,
      name: "House",
      price: 188457,
      image: img1,
    },
    {
      id: 1,
      name: "House",
      price: 188457,
      image: img1,
    },
    {
      id: 1,
      name: "House",
      price: 188457,
      image: img1,
    },
    {
      id: 1,
      name: "House",
      price: 188457,
      image: img1,
    },
  ]);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
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
        {items.length === 0 ? (
          <p className="no-items">No items found.</p>
        ) : (
          items.map((item) => (
            <div className="item-card" key={item.id}>
              <img src={item.image} alt={item.name} className="product-image" />
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
  );
}

export default AdminDashboard;
