// src/components/PrivacySettings.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PrivacySettings = () => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    axios.get('/api/privacy-settings')
      .then(response => setSettings(response.data))
      .catch(error => console.error('Error fetching privacy settings:', error));
  }, []);

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('/api/privacy-settings', settings)
      .then(response => alert('Settings updated successfully'))
      .catch(error => console.error('Error updating privacy settings:', error));
  };

  return (
    <div>
      <h2>Privacy Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Profile Visibility:
          <select name="profileVisibility" value={settings.profileVisibility || ''} onChange={handleChange}>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </label>
        <br />
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default PrivacySettings;
