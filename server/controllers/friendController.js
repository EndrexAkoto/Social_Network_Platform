const { FriendRequest, User } = require('../models');

// Send Friend Request
exports.sendFriendRequest = async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    // Check if the request already exists
    const existingRequest = await FriendRequest.findOne({ where: { senderId, receiverId } });
    
    if (existingRequest) {
      return res.status(400).json({ msg: 'Friend request already sent.' });
    }

    // Create a new friend request
    const friendRequest = await FriendRequest.create({
      senderId,
      receiverId,
      status: 'pending'
    });

    res.status(201).json({ msg: 'Friend request sent.', friendRequest });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error });
  }
};

// Accept Friend Request
exports.acceptFriendRequest = async (req, res) => {
  const { requestId } = req.body;

  try {
    // Find the friend request
    const request = await FriendRequest.findByPk(requestId);
    
    if (!request) {
      return res.status(404).json({ msg: 'Friend request not found.' });
    }

    // Update the request status to 'accepted'
    request.status = 'accepted';
    await request.save();

    res.status(200).json({ msg: 'Friend request accepted.', request });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error });
  }
};

// Reject Friend Request
exports.rejectFriendRequest = async (req, res) => {
  const { requestId } = req.body;

  try {
    const request = await FriendRequest.findByPk(requestId);

    if (!request) {
      return res.status(404).json({ msg: 'Friend request not found.' });
    }

    await request.destroy();

    res.status(200).json({ msg: 'Friend request rejected.' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error });
  }
};
