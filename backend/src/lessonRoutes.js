const express = require("express");
const router = express.Router();
const { User, Lesson } = require("./config");

// Purchase a Lesson
router.post("/purchase", async (req, res) => {
  const { userId, lessonType, price } = req.body;

  try {
    // Step 1: Find or create the lesson
    let lesson = await Lesson.findOne({ type: lessonType, price: price });
    if (!lesson) {
      lesson = new Lesson({ type: lessonType, price: price });
    }

    // Step 2: Update the Lesson schema
    lesson.purchasedBy.push({ userId, purchasedAt: Date.now() });
    lesson.totalPurchases += 1;
    await lesson.save();

    // Step 3: Update the User schema
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.lessonsPurchased.push({ lessonId: lesson._id, purchasedAt: Date.now() });
    await user.save();

    res.status(200).json({ message: "Lesson purchased successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Fetch User's Purchased Lessons
router.get("/user-lessons/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("lessonsPurchased.lessonId");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ lessons: user.lessonsPurchased });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch Lesson Details and Purchasers
router.get("/lesson-details/:lessonId", async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.lessonId).populate("purchasedBy.userId");
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    res.status(200).json({
      type: lesson.type,
      price: lesson.price,
      totalPurchases: lesson.totalPurchases,
      purchasedBy: lesson.purchasedBy,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
