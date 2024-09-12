// server/routes/privacyRoutes.js
const express = require('express');
const router = express.Router();
const PrivacySettings = require('../models/PrivacySettings');

router.get('/privacy-settings/:userId', async (req, res) => {
  try {
    const settings = await PrivacySettings.findOne({ where: { userId: req.params.userId } });
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/privacy-settings/:userId', async (req, res) => {
  try {
    const { profileVisibility, searchVisibility } = req.body;
    const settings = await PrivacySettings.findOne({ where: { userId: req.params.userId } });
    if (settings) {
      settings.profileVisibility = profileVisibility;
      settings.searchVisibility = searchVisibility;
      await settings.save();
      res.json(settings);
    } else {
      res.status(404).json({ error: 'Settings not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
