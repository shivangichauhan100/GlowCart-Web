import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddressScreen.css';

type Address = {
  id: number;
  type: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
};

const AddressScreen = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      type: 'Home',
      name: 'Aastha Sharma',
      phone: '+91 98765 43210',
      address: '123 Beauty Lane, Apartment 4B',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      isDefault: true,
    },
    {
      id: 2,
      type: 'Office',
      name: 'Aastha Sharma',
      phone: '+91 98765 43210',
      address: '456 Corporate Plaza, Floor 8',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400002',
      isDefault: false,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    type: 'Home',
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const address: Address = {
      id: Date.now(),
      ...newAddress,
      isDefault: addresses.length === 0,
    };
    setAddresses([...addresses, address]);
    setNewAddress({
      type: 'Home',
      name: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
    });
    setShowAddForm(false);
  };

  const setDefaultAddress = (id: number) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id,
    })));
  };

  const deleteAddress = (id: number) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <div className="address-screen">
      <header className="address-header">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/profile')}>
            ← Back
          </button>
          <h1 className="address-title">My Addresses</h1>
          <div className="header-actions">
            <button 
              className="add-address-btn"
              onClick={() => setShowAddForm(true)}
            >
              + Add New
            </button>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="address-content">
          {addresses.map((address) => (
            <div key={address.id} className="address-card">
              <div className="address-header-card">
                <div className="address-type">
                  <span className="type-badge">{address.type}</span>
                  {address.isDefault && <span className="default-badge">Default</span>}
                </div>
                <div className="address-actions">
                  <button className="action-btn edit-btn">✏️</button>
                  <button 
                    className="action-btn delete-btn"
                    onClick={() => deleteAddress(address.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
              
              <div className="address-details">
                <h3 className="address-name">{address.name}</h3>
                <p className="address-phone">{address.phone}</p>
                <p className="address-text">
                  {address.address}, {address.city}, {address.state} - {address.pincode}
                </p>
              </div>
              
              {!address.isDefault && (
                <button 
                  className="set-default-btn"
                  onClick={() => setDefaultAddress(address.id)}
                >
                  Set as Default
                </button>
              )}
            </div>
          ))}

          {addresses.length === 0 && (
            <div className="empty-address">
              <div className="empty-icon">📍</div>
              <h3>No Addresses Found</h3>
              <p>Add your first delivery address to get started</p>
              <button 
                className="btn add-first-btn"
                onClick={() => setShowAddForm(true)}
              >
                Add Address
              </button>
            </div>
          )}
        </div>
      </div>

      {showAddForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add New Address</h2>
              <button 
                className="close-btn"
                onClick={() => setShowAddForm(false)}
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleAddAddress} className="address-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Address Type</label>
                  <select
                    value={newAddress.type}
                    onChange={(e) => setNewAddress({...newAddress, type: e.target.value})}
                    required
                  >
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={newAddress.name}
                    onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    value={newAddress.phone}
                    onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Address</label>
                <textarea
                  value={newAddress.address}
                  onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
                  placeholder="Enter complete address"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    value={newAddress.city}
                    onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                    placeholder="Enter city"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input
                    type="text"
                    value={newAddress.state}
                    onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
                    placeholder="Enter state"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Pincode</label>
                  <input
                    type="text"
                    value={newAddress.pincode}
                    onChange={(e) => setNewAddress({...newAddress, pincode: e.target.value})}
                    placeholder="Enter pincode"
                    required
                  />
                </div>
              </div>
              
              <div className="form-actions">
                <button type="button" className="btn cancel-btn" onClick={() => setShowAddForm(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn save-btn">
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressScreen;
