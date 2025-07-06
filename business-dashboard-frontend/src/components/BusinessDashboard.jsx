import React, { useState } from 'react';
import { Star, MapPin, Users, Sparkles, Loader2 } from 'lucide-react';

const BusinessDashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: ''
  });
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [regenerating, setRegenerating] = useState(false);
  const [errors, setErrors] = useState({});

  // Simulated backend URL - in real implementation, this would be your deployed backend
  const API_BASE_URL = 'http://localhost:3001';

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Business name is required';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      // Simulate API call - replace with actual backend call
      const response = await fetch(`${API_BASE_URL}/business-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      // Simulated response for demo
      // await new Promise(resolve => setTimeout(resolve, 1500));
      // const data = {
      //   rating: (Math.random() * 1.5 + 3.5).toFixed(1),
      //   reviews: Math.floor(Math.random() * 300 + 50),
      //   headline: `Why ${formData.name} is ${formData.location}'s Best Choice in 2025`
      // };
      
      setBusinessData(data);
    } catch (error) {
      console.error('Error fetching business data:', error);
      alert('Failed to fetch business data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerateHeadline = async () => {
    setRegenerating(true);
    
    try {
      // Simulate API call - replace with actual backend call
      const response = await fetch(`${API_BASE_URL}/regenerate-headline?name=${encodeURIComponent(formData.name)}&location=${encodeURIComponent(formData.location)}`);
      const data = await response.json();
      
      // Simulated response for demo
      // await new Promise(resolve => setTimeout(resolve, 1000));
      // const headlines = [
      //   `Discover Why ${formData.name} is ${formData.location}'s Hidden Gem`,
      //   `${formData.name}: Your Go-To Destination in ${formData.location}`,
      //   `Top-Rated ${formData.name} Takes ${formData.location} by Storm`,
      //   `${formData.location} Locals Love ${formData.name} - Here's Why`,
      //   `${formData.name} Sets New Standards in ${formData.location}`,
      //   `Experience Excellence at ${formData.name} in ${formData.location}`
      // ];
      
      // const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
      
      setBusinessData(prev => ({
        ...prev,
        headline: data.headline
      }));
    } catch (error) {
      console.error('Error regenerating headline:', error);
      alert('Failed to regenerate headline. Please try again.');
    } finally {
      setRegenerating(false);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50" />);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full px-4 py-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Local Business Dashboard
            </h1>
            <p className="text-gray-600">
              Discover your business insights and SEO potential
            </p>
          </div>

          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <Sparkles className="w-6 h-6 text-blue-500 mr-2" />
              Business Information
            </h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your business name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.location ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your business location"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                  )}
                </div>
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Analyzing Business...
                  </>
                ) : (
                  'Get Business Insights'
                )}
              </button>
            </div>
          </div>

          {/* Display Card */}
          {businessData && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-green-500 mr-2" />
                {formData.name} - Business Overview
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Rating Card */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">Google Rating</h3>
                    <div className="flex items-center space-x-1">
                      {renderStars(parseFloat(businessData.rating))}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-yellow-600">
                    {businessData.rating}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Out of 5 stars</p>
                </div>
                
                {/* Reviews Card */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">Total Reviews</h3>
                    <Users className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600">
                    {businessData.reviews}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Customer reviews</p>
                </div>
              </div>
              
              {/* SEO Headline Card */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">AI-Generated SEO Headline</h3>
                  <button
                    onClick={handleRegenerateHeadline}
                    disabled={regenerating}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {regenerating ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Regenerate
                      </>
                    )}
                  </button>
                </div>
                <div className="text-xl font-bold text-purple-800 leading-relaxed">
                  {businessData.headline}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Optimized for search engines and local discovery
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;