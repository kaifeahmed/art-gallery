const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PK8GOADaBtYLeCSdErdgxrzny4GPVzKgNF8hLDsowLjEumvyyliASogUrzCr6M2zCGDiAO9pMSyc5HaWeDHFOtJ002FwpFymb');
const multer = require('multer');
const path = require('path');


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Unable to create payment intent' });
  }
});

app.post('/capture-payment', async (req, res) => {
  const { tokenId, amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_data: {
        type: 'card',
        card: {
          token: tokenId,
        },
      },
      confirmation_method: 'manual',
      confirm: true,
      return_url: 'http://localhost:300', // Add your desired return URL
    });

    if (paymentIntent.status === 'succeeded') {
      res.status(200).json({ success: true, paymentIntent });
    } else {
      // If payment failed, check for specific errors and send appropriate error message
      let errorMessage = 'Payment failed';
      if (paymentIntent.last_payment_error && paymentIntent.last_payment_error.message) {
        errorMessage = paymentIntent.last_payment_error.message;
      }
      res.status(400).json({ error: errorMessage });
      console.log('Payment failed:', errorMessage);
    }
  } catch (error) {
    console.error('Error capturing payment:', error.message);
    res.status(500).json({ error: error.message});
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'images'));
  },
  filename: (req, file, cb) => {
    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().replace(/:/g, '-').replace(/\..+/, ''); // Format date as string

    // Replace spaces with underscores in the original filename
    const sanitizedFilename = file.originalname.replace(/\s+/g, '_');

    // Generate a unique filename based on the sanitized filename and current date/time
    const uniqueFilename = `${formattedDate}_${sanitizedFilename}`;

    cb(null, uniqueFilename);
  },
});
  
const upload = multer({ storage });


app.post('/upload-images', upload.array('files', 10), (req, res) => {
  console.log('Request Body:', req.body); // Log the request body
  console.log('Request Files:', req.files); // Log the uploaded files

  const filenames = req.files.map(file => file.filename);

  // Send the filenames in the response
  res.json({ success: true, message: 'Files uploaded successfully', file_names: filenames });
});
  

app.use('/images', express.static(path.join(__dirname, 'images')));
  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
