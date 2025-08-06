import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Here you would typically handle the form submission,
    // for example, by sending an email or saving to a database.
    // For now, we'll just log the data and return a success response.

    console.log("Contact form submission received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Subject:", subject);
    console.log("Message:", message);

    return NextResponse.json({ message: "Form submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json({ message: "An error occurred while submitting the form." }, { status: 500 });
  }
}
