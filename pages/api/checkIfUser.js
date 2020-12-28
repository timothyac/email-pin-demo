export default (req, res) => {
  res.statusCode = 200;

  // Simulate a network delay
  setTimeout(() => {
    res.json({ verified: true });
  }, 1000);
};
