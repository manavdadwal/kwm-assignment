// API Route for Contact Form Submission
// This will be integrated with Salesforce API in Phase 2

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // TODO: Phase 2 - Integrate with Salesforce API
    // Example structure for SFDC integration:
    /*
    const sfdcResponse = await fetch('https://your-instance.salesforce.com/services/data/v58.0/sobjects/Contact/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        FirstName: name.split(' ')[0],
        LastName: name.split(' ').slice(1).join(' ') || '',
        Email: email,
        Phone: phone || '',
        Description: message,
      }),
    })
    */

    // For now, simulate successful submission
    // In Phase 2, this will connect to actual Salesforce API
    console.log('Contact form submission:', { name, email, phone, message })

    return Response.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        data: {
          name,
          email,
          phone,
          message,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return Response.json(
    { message: 'Contact API endpoint - POST method required' },
    { status: 405 }
  )
}
