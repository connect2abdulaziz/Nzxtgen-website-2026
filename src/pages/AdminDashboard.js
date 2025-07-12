import React, { useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Smart Light",
      price: 49.99,
      image:
        "https://www.google.com/imgres?q=Smart%20Light&imgurl=https%3A%2F%2Fomnicloudsolutions.com%2Fwp-content%2Fuploads%2F2021%2F12%2FSmart-RGB-Bulb-WIFI-Application-and-Voice-Control.png&imgrefurl=https%3A%2F%2Fomnicloudsolutions.com%2Fproduct%2Fwifi-smart-led-bulb%2F%3Fsrsltid%3DAfmBOooYUsjo8g6sNsTJSFITUU-H118JY7ubSJvW8O4T9of4VUOaNiv0&docid=nWi3-l2s7D6aAM&tbnid=tUYCxcK6QwQ3PM&vet=12ahUKEwjg_NXciLaOAxVE1AIHHUliAzMQM3oECG0QAA..i&w=500&h=500&hcb=2&ved=2ahUKEwjg_NXciLaOAxVE1AIHHUliAzMQM3oECG0QAA",
    },
    {
      id: 2,
      name: "Smart Lock",
      price: 89.99,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pcmag.com%2Fpicks%2Fthe-best-smart-locks&psig=AOvVaw1rfO6unBOyP9Qmy03HO2i2&ust=1752366659720000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNiQzNSIto4DFQAAAAAdAAAAABAE",
    },
    {
      id: 3,
      name: "Security Camera",
      price: 129.99,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcamera&psig=AOvVaw1tJ07WrZ7GnJNuHsJj3s1Y&ust=1752366582717000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPD5hsOIto4DFQAAAAAdAAAAABAE",
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
