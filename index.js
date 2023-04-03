const express = require('express');
const app = express();

app.get('/math/power/:base/:exponent', (req, res) => {
  const { base, exponent } = req.params;
  const root = req.query.root === 'true';

  // convert base and exponent to numbers
  const baseNumber = Number(base);
  const exponentNumber = Number(exponent);

  // check for valid input
  if (isNaN(baseNumber) || isNaN(exponentNumber)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  // calculate result and root if needed
  const result = Math.pow(baseNumber, exponentNumber);
  const response = { result };
  if (root) {
    response.root = Math.sqrt(baseNumber);
  }

  // send response
  res.json(response);
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
