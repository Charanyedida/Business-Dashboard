const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Array of SEO headlines for random selection
const seoHeadlines = [
  "Why {name} is {location}'s Best Choice in 2025",
  "Discover Why {name} is {location}'s Hidden Gem",
  "{name}: Your Go-To Destination in {location}",
  "Top-Rated {name} Takes {location} by Storm",
  "{location} Locals Love {name} - Here's Why",
  "{name} Sets New Standards in {location}",
  "Experience Excellence at {name} in {location}",
  "{name} Dominates {location}'s Market in 2025",
  "The Ultimate Guide to {name} in {location}",
  "{name}: {location}'s Premier Business Success Story",
  "Why {name} is Revolutionizing {location}",
  "{name} Becomes {location}'s Most Trusted Name",
  "Inside {name}: {location}'s Rising Star",
  "{name} Delivers Unmatched Quality in {location}",
  "How {name} Became {location}'s Go-To Choice"
];

// Helper function to generate random rating
const generateRandomRating = () => {
  return (Math.random() * 1.5 + 3.5).toFixed(1);
};

// Helper function to generate random review count
const generateRandomReviews = () => {
  return Math.floor(Math.random() * 300 + 50);
};

// Helper function to replace placeholders in headlines
const replacePlaceholders = (headline, name, location) => {
  return headline.replace(/{name}/g, name).replace(/{location}/g, location);
};

// Helper function to get random headline
const getRandomHeadline = (name, location) => {
  const randomIndex = Math.floor(Math.random() * seoHeadlines.length);
  return replacePlaceholders(seoHeadlines[randomIndex], name, location);
};

// Routes

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Business Dashboard API is running' });
});

// POST /business-data - Get business data
app.post('/business-data', (req, res) => {
  try {
    const { name, location } = req.body;
    
    // Basic validation
    if (!name || !location) {
      return res.status(400).json({ 
        error: 'Business name and location are required' 
      });
    }
    
    // Generate simulated business data
    const businessData = {
      rating: generateRandomRating(),
      reviews: generateRandomReviews(),
      headline: getRandomHeadline(name, location)
    };
    
    // Add a small delay to simulate real API processing
    setTimeout(() => {
      res.json(businessData);
    }, 500);
    
  } catch (error) {
    console.error('Error in /business-data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /regenerate-headline - Get new SEO headline
app.get('/regenerate-headline', (req, res) => {
  try {
    const { name, location } = req.query;
    
    // Basic validation
    if (!name || !location) {
      return res.status(400).json({ 
        error: 'Business name and location are required as query parameters' 
      });
    }
    
    // Generate a new random headline
    const newHeadline = getRandomHeadline(name, location);
    
    // Add a small delay to simulate AI processing
    setTimeout(() => {
      res.json({ headline: newHeadline });
    }, 300);
    
  } catch (error) {
    console.error('Error in /regenerate-headline:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Business Dashboard API is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});