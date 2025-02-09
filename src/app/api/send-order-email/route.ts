import { NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

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

// Function to mask Aadhar number
function maskAadharNumber(aadharNumber: string): string {
    // Ensure the Aadhar number is valid (12 digits)
    if (!aadharNumber || aadharNumber.length !== 12) {
        return 'XXXX-XXXX-XXXX';
    }
    
    // Mask all but last 4 digits
    return `${aadharNumber.slice(0, 4).replace(/\d/g, 'X')}-` +
           `${aadharNumber.slice(4, 8).replace(/\d/g, 'X')}-` +
           `${aadharNumber.slice(8, 12)}`;
}

// Function to fetch logo as a buffer
async function fetchLogoBuffer(logoUrl: string) {
    try {
        const response = await fetch(logoUrl);
        return Buffer.from(await response.arrayBuffer());
    } catch (error) {
        console.error('Failed to fetch logo:', error);
        return null;
    }
}

// Function to create membership card PDF
async function generateMembershipCard(memberDetails: {
    memberID: string,
    name: { firstName: string, middleName?: string, lastName: string },
    phone: string,
    aadhar: string,
    nomineeName: string,
    nomineeRelation: string,
    nomineeAadhar: string,
    address: {
        street: string,
        landmark: string,
        state: string,
        postalCode: string,
        country: string
    }
}): Promise<Buffer> {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    
    // Card dimensions (standard ID card size)
    const pageWidth = 300; // Slightly wider for better design
    const pageHeight = 200;

    // Create front page
    const frontPage = pdfDoc.addPage([pageWidth, pageHeight]);
    
    // Load fonts
    const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    
    // Colors
    const primaryColor = rgb(1, 0.46, 0.1); // text color
    const secondaryColor = rgb(1, 0.46, 0.1); // Orange
    const textColor = rgb(0, 0, 0); // Black
    const bgColor = rgb(0.9, 0.67, 0.44);
    

    // Fetch and embed logo
    const logoUrl = 'https://i.ibb.co/0p4fDdHh/RSVBF-LOGO.png';
    const logoBuffer = await fetchLogoBuffer(logoUrl);
    let logoPng;
    if (logoBuffer) {
        logoPng = await pdfDoc.embedPng(logoBuffer);
    }

    // Background rectangle
    frontPage.drawRectangle({
        x: 0,
        y: 0,
        width: pageWidth,
        height: pageHeight,
        color: bgColor,
    });

    // Border
    frontPage.drawRectangle({
        x: 10,
        y: 10,
        width: pageWidth - 20,
        height: pageHeight - 20,
        borderColor: primaryColor,
        borderWidth: 2,
        color: rgb(1, 1, 1) // White fill
    });

    // Logo
    if (logoPng) {
        frontPage.drawImage(logoPng, {
            x: 20,
            y: pageHeight - 90,
            width: 70,
            height: 70,
        });
    }

    // Organization Name
    frontPage.drawText('Bharat Self Care Team', {
        x: pageWidth / 2 - 50,
        y: pageHeight - 60,
        size: 16,
        font: boldFont,
        color: primaryColor
    });

    // Member Details
    const startX = 30;
    let currentY = pageHeight / 2 - 20;
    const lineHeight = 15;  
    const textSize = 10;

    frontPage.drawText(`Member ID: ${memberDetails.memberID}`, {
        x: startX,
        y: currentY,
        size: textSize,
        font: regularFont,
        color: textColor
    });
    currentY -= lineHeight;

    frontPage.drawText(`Name: ${memberDetails.name.firstName} ${memberDetails.name.lastName}`, {
        x: startX,
        y: currentY,
        size: textSize,
        font: regularFont,
        color: textColor
    });
    currentY -= lineHeight;

    frontPage.drawText(`Phone: ${memberDetails.phone}`, {
        x: startX,
        y: currentY,
        size: textSize,
        font: regularFont,
        color: textColor
    });
    currentY -= lineHeight;

    frontPage.drawText(`Aadhar: ${maskAadharNumber(memberDetails.aadhar)}`, {
        x: startX,
        y: currentY,
        size: textSize,
        font: regularFont,
        color: textColor
    });

    // Create back page
    const backPage = pdfDoc.addPage([pageWidth, pageHeight]);
    
    // Background for back page
    backPage.drawRectangle({
        x: 0,
        y: 0,
        width: pageWidth,
        height: pageHeight,
        color: bgColor,
    });

    // Border for back page
    backPage.drawRectangle({
        x: 10,
        y: 10,
        width: pageWidth - 20,
        height: pageHeight - 20,
        borderColor: secondaryColor,
        borderWidth: 2,
        color: rgb(1, 1, 1) // White fill
    });

    // Nominee Details Title
    backPage.drawText('Nominee Information', {
        x: pageWidth / 2 - 90,
        y: pageHeight - 30,
        size: 16,
        font: boldFont,
        color: secondaryColor
    });

    // Reset positioning for back page
    currentY = pageHeight - 50; // Start from the bottom of the page    

    backPage.drawText(`Nominee Name: ${memberDetails.nomineeName}`, {
        x: startX,
        y: currentY,
        size: textSize,
        font: regularFont,
        color: textColor
    });
    currentY -= lineHeight;

    backPage.drawText(`Relationship: ${memberDetails.nomineeRelation}`, {
        x: startX,
        y: currentY,
        size: textSize,
        font: regularFont,
        color: textColor
    });
    currentY -= lineHeight;

    backPage.drawText(`Nominee Aadhar: ${maskAadharNumber(memberDetails.nomineeAadhar)}`, {
        x: startX,
        y: currentY,
        size: textSize,
        font: regularFont,
        color: textColor
    });
    currentY -= lineHeight * 2;

    // Address Details
    backPage.drawText('Address:', {
        x: startX,
        y: currentY,
        size: 12,
        font: boldFont,
        color: textColor
    });
    currentY -= lineHeight;

    const addressLines = [
        memberDetails.address.street+", " + memberDetails.address.landmark,
        `${memberDetails.address.state} - ${memberDetails.address.postalCode}`,
        memberDetails.address.country
    ];

    addressLines.forEach(line => {
        backPage.drawText(line, {
            x: startX,
            y: currentY,
            size: 10,
            font: regularFont,
            color: textColor
        });
        currentY -= lineHeight;
    });

    // Serialize PDF to bytes
    const pdfBytes = await pdfDoc.save();
    
    return Buffer.from(pdfBytes);
}

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
            gender,
            dob,
            paymentMethod,
            address,
            email,
            phone,
            paymentId,
            aadhar,
            nomineeName,
            nomineeRelation,
            nomineeAadhar,
        } = body;

        // Validate required fields
        if (!email || !name) {
            console.error('Missing required fields');
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Generate Membership Card PDF
        const membershipCardPDF = await generateMembershipCard({
            memberID,
            name,
            phone,
            aadhar,
            nomineeName,
            nomineeRelation,
            nomineeAadhar,
            address
        });

        const emailContent = `
      <div style="font-family: Arial, sans-serif; min-width: 100%; margin: 0 auto; line-height: 1.6; color: #333;">
        <!-- Header -->
        <div style="background-color: #fb923c; padding: 2rem; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Welcome to Bharat Self Care Team</h1>
        </div>

        
    
        <!-- Main Content -->
        <div style="padding: 2rem; background-color: #f9f9f9; border: 1px solid #ddd;">
            <div>
                <img src="https://i.ibb.co/0p4fDdHh/RSVBF-LOGO.png" alt="image" style="height: 10rem; display: block; margin: auto;">
            </div>
            <p style="font-size: 16px;">Dear ${name.firstName},</p>
            
            <p style="font-size: 16px; margin-bottom: 20px;">We are delighted to confirm your registration with the Bharat Self Care Team. Your membership has been successfully activated.</p>
    
            <!-- Member Details Section -->
            <div style="background-color: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 20px; border: 1px solid #eee;">
                <h2 style="color: #ff7722; margin-top: 0; font-size: 20px; border-bottom: 2px solid #ff7722; padding-bottom: 10px;">Member Information</h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Member ID</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${memberID}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Registration Date</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${date}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Full Name</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${name.firstName} ${name.middleName || ''} ${name.lastName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Gender</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${gender}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Date of Birth</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${dob}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Aadhar Number</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">XXXX-XXXX-${aadhar.slice(-4)}</td>
                    </tr>
                </table>
            </div>
    
            <!-- Contact Information -->
            <div style="background-color: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 20px; border: 1px solid #eee;">
                <h2 style="color: #ff7722; margin-top: 0; font-size: 20px; border-bottom: 2px solid #ff7722; padding-bottom: 10px;">Contact Details</h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Email</td>
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
    
            <!-- Nominee Information -->
            <div style="background-color: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 20px; border: 1px solid #eee;">
                <h2 style="color: #ff7722; margin-top: 0; font-size: 20px; border-bottom: 2px solid #ff7722; padding-bottom: 10px;">Nominee Details</h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Nominee Name</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${nomineeName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Relationship</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">${nomineeRelation}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Nominee Aadhar</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">XXXX-XXXX-${nomineeAadhar.slice(-4)}</td>
                    </tr>
                </table>
            </div>
    
            <!-- Payment Information -->
            <div style="background-color: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 20px; border: 1px solid #eee;">
                <h2 style="color: #ff7722; margin-top: 0; font-size: 20px; border-bottom: 2px solid #ff7722; padding-bottom: 10px;">Payment Details</h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 40%;">Amount Paid</td>
                        <td style="padding: 8px; border-bottom: 1px solid #eee;">₹500.00</td>
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
            <p style="font-size: 16px; margin-top: 20px;">Thank you for joining the Bharat Self Care Team. We look forward to your active contribution to the community.</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
                <p style="color: #666; font-size: 14px;">Visit us at <a href="https://vishwabandhufoundation.org" style="color: #ff7722; text-decoration: none;">vishwabandhufoundation.org</a></p>
                <p style="color: #666; font-size: 14px;">For any queries, please contact us at support@vishwabandhufoundation.org</p>
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
                subject: 'You are Successfully registered to Bharat Self Care Team Program!',
                html: emailContent,
                attachments: [
                    {
                        filename: `${name.firstName}_${memberID}_membership_card.pdf`,
                        content: membershipCardPDF
                    }
                ]
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