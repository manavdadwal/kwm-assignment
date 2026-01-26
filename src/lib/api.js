// API Utility Functions
// This file contains reusable functions for API integration

import axios from 'axios'

// Base API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api'

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor (for adding auth tokens, etc.)
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor (for error handling)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Handle unauthorized access
      console.error('Unauthorized access')
    } else if (error.response?.status === 500) {
      // Handle server errors
      console.error('Server error')
    }
    return Promise.reject(error)
  }
)

// Contact Form API
export const submitContactForm = async (formData) => {
  try {
    const response = await apiClient.post('/contact', formData)
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to submit contact form')
  }
}

// Example: Salesforce API Integration (for Phase 2)
export const createSFDCContact = async (contactData, accessToken) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SFDC_INSTANCE_URL}/services/data/v58.0/sobjects/Contact/`,
      contactData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    )
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create SFDC contact')
  }
}

// Example: Fetch data from API
export const fetchData = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint)
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to fetch data')
  }
}

// Example: Update data via API
export const updateData = async (endpoint, data) => {
  try {
    const response = await apiClient.put(endpoint, data)
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to update data')
  }
}

// Example: Delete data via API
export const deleteData = async (endpoint) => {
  try {
    const response = await apiClient.delete(endpoint)
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to delete data')
  }
}

export default apiClient
