import { NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';

// Add detailed logging for email configuration
console.log('Email configuration:', {
    user: process.env.EMAIL_USER ? 'Set' : 'Not set',
    pass: process.env.EMAIL_APP_PASSWORD ? 'Set' : 'Not set'
});

// Create transporter with more detailed options
const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
    },
    debug: true, // Enable debug logging
    logger: true  // Enable built-in logger
});

// Verify transporter configuration
transporter.verify(function (error, success) {
    if (error) {
        console.error('Transporter verification error:', error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

export async function POST(request: Request) {
    try {
        // Log the incoming request
        console.log('Received email request');

        const body = await request.json();
        console.log('Request body:', JSON.stringify(body, null, 2));

        const {
            memberID,
            name,
            date,
            paymentMethod,
            address,
            email,
            phone,
            paymentId,
            amount,
        } = body;

        // Validate required fields
        if (!email || !name) {
            console.error('Missing required fields');
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // logo image high resolution
        // https://i.postimg.cc/3N6y3bjW/RSVBF-LOGO.png 

        const emailContent = `
     <div style="font-family: Arial, sans-serif; min-width: 100%; margin: 0 auto; line-height: 1.6; color: #333;">
        <!-- Header -->
        <div style="background-color: #fb923c; padding: 2rem; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Congratulations on completing donation to Gaushala Program</h1>
        </div>



        <!-- Main Content -->
        <div style="padding: 2rem; background-color: #f9f9f9; border: 1px solid #ddd;">
            <div>
                <img src="https://i.ibb.co/0p4fDdHh/RSVBF-LOGO.png" alt="image"
                    style="height: 10rem; display: block; margin: auto;">
            </div>
            <p style="font-size: 16px;">Dear ${name.firstName},</p>

            <p style="font-size: 16px; margin-bottom: 20px;">We are delighted to confirm your donation to the
                Gaushala Program. Your donation has been successfully completed.</p>

            <!-- Member Details Section -->
            <div
                style="background-color: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 20px; border: 1px solid #eee;">
                <h2
                    style="color: #ff7722; margin-top: 0; font-size: 20px; border-bottom: 2px solid #ff7722; padding-bottom: 10px;">
                    Member Information</h2>

                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Registration Date
                        </td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${date}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Full Name</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${name.firstName} ${name.middleName || ''} ${name.lastName}</td>
                    </tr>
                </table>
            </div>

            <!-- Contact Information -->
            <div
                style="background-color: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 20px; border: 1px solid #eee;">
                <h2
                    style="color: #ff7722; margin-top: 0; font-size: 20px; border-bottom: 2px solid #ff7722; padding-bottom: 10px;">
                    Contact Details</h2>

                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Email
                        </td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Address</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${address.street}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Landmark</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${address.landmark}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">State</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${address.state}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Postal Code</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${address.postalCode}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Country</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${address.country}</td>
                    </tr>
                </table>
            </div>

            <!-- Payment Information -->
            <div
                style="background-color: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 20px; border: 1px solid #eee;">
                <h2
                    style="color: #ff7722; margin-top: 0; font-size: 20px; border-bottom: 2px solid #ff7722; padding-bottom: 10px;">
                    Payment Details</h2>

                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Amount
                            Paid</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">₹${amount}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Payment ID</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${paymentId}</td>
                    </tr>
                    <!--
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Payment Method</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${paymentMethod}</td>
                    </tr>
                    -->
                </table>
            </div>

            <!-- Footer Note -->
            <p style="font-size: 16px; margin-top: 20px;">Thank you for donating to the Gaushala Program and contributing to the welfare of cows.</p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
                <p style="color: #666; font-size: 14px;">Visit us at <a href="https://vishwabandhufoundation.org"
                        style="color: #ff7722; text-decoration: none;">vishwabandhufoundation.org</a></p>
                <p style="color: #666; font-size: 14px;">For any queries, please contact us at
                    support@vishwabandhufoundation.org</p>
            </div>
        </div>
    </div>
    `;

        // Log email attempt
        console.log('Attempting to send email to:', email);

        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'You have Successfully donated to Gaushala Program!',
                html: emailContent
            });
            console.log('Email sent successfully');
        } catch (emailError) {
            console.error('Error in sendMail:', emailError);
            throw emailError;
        }

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        // Log the full error
        console.error('Full error details:', error);

        return NextResponse.json(
            {
                message: 'Failed to send email',
                error: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}