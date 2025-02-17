import React from "react";
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

// Helper function to fetch logo
async function fetchLogoBuffer(url: string): Promise<Uint8Array | null> {
    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        return new Uint8Array(arrayBuffer);
    } catch (error) {
        console.error('Error fetching logo:', error);
        return null;
    }
}

async function GenerateMembershipCard(memberDetails: {
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
    const pdfDoc = await PDFDocument.create();

    // Card dimensions (keeping A4 width but adjusting height to match preview)
    const pageWidth = 595;
    const pageHeight = 360;
    const page = pdfDoc.addPage([pageWidth, pageHeight]);

    // Load fonts
    const regularFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const boldFont = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

    // Colors - Matching exactly with HTML (#ff7722)
    const whiteColor = rgb(1, 1, 1);
    const orangeColor = rgb(255 / 255, 119 / 255, 34 / 255); // #ff7722
    const grayTextColor = rgb(75 / 255, 85 / 255, 99 / 255); // text-gray-600
    const darkGrayColor = rgb(55 / 255, 65 / 255, 81 / 255); // text-gray-700

    // Background with orange border
    page.drawRectangle({
        x: 20,
        y: 20,
        width: pageWidth-40,
        height: pageHeight-40,
        color: whiteColor,
        borderColor: orangeColor,
        borderWidth: 2,
    });

    // Header section
    const headerY = pageHeight - 80;

    //LOGO, BSC text (as fallback for logo)
    const logoUrl = 'https://i.ibb.co/0p4fDdHh/RSVBF-LOGO.png';
    const logoBuffer = await fetchLogoBuffer(logoUrl);
    if (logoBuffer) {
        try {
            const logoImage = await pdfDoc.embedPng(logoBuffer);
            
            const circleSize = 60;            
            // Draw logo
            page.drawImage(logoImage, {
                x: 57,
                y: headerY - 23,
                width: circleSize,
                height: circleSize
            });
        } catch (error) {
            console.error('Error embedding logo:', error);
            // Fallback to text if logo fails
            page.drawText('BSC', {
                x: 40,
                y: pageHeight - 60,
                size: 24,
                font: boldFont,
                color: orangeColor
            });
        }
    }

    // Organization name
    page.drawText('Membership Card', {
        x: 130,
        y: headerY + 10,
        size: 20,
        font: boldFont,
        color: orangeColor
    });

    page.drawText('Bharat Self Care Team', {
        x: 130,
        y: headerY - 10,
        size: 12,
        font: regularFont,
        color: grayTextColor
    });

    // Member ID on right
    page.drawText('Member ID', {
        x: pageWidth - 150,
        y: headerY + 10,
        size: 12,
        font: regularFont,
        color: orangeColor
    });

    page.drawText(memberDetails.memberID, {
        x: pageWidth - 150,
        y: headerY - 10,
        size: 12,
        font: boldFont,
        color: darkGrayColor
    });

    // Header separator line
    page.drawLine({
        start: { x: 40, y: headerY - 35 },
        end: { x: pageWidth - 40, y: headerY - 35 },
        thickness: 1.5,
        color: orangeColor
    });

    // Content section
    const leftColumnX = 60;
    const rightColumnX = pageWidth / 2 + 20;
    let currentY = headerY - 70;
    const labelSize = 12;
    const valueSize = 14;
    const spacingBetweenFields = 50;

    // Helper function to draw a field with orange label
    const drawField = (label: string, value: string, x: number, y: number) => {
        page.drawText(label, {
            x,
            y,
            size: labelSize,
            font: regularFont,
            color: orangeColor
        });
        page.drawText(value, {
            x,
            y: y - 20,
            size: valueSize,
            font: boldFont,
            color: darkGrayColor
        });
    };

    // Left column
    drawField('Full Name',
        `${memberDetails.name.firstName} ${memberDetails.name.middleName || ''} ${memberDetails.name.lastName}`.trim(),
        leftColumnX,
        currentY
    );

    drawField('Contact Number',
        memberDetails.phone,
        leftColumnX,
        currentY - spacingBetweenFields
    );

    drawField('Aadhar Number',
        `XXXX-XXXX-${memberDetails.aadhar.slice(-4)}`,
        leftColumnX,
        currentY - spacingBetweenFields * 2
    );

    // Right column
    drawField('Nominee Details',
        memberDetails.nomineeName,
        rightColumnX,
        currentY
    );

    page.drawText(`(${memberDetails.nomineeRelation})`, {
        x: rightColumnX,
        y: currentY - 35,
        size: 12,
        font: regularFont,
        color: grayTextColor
    });

    // Address
    page.drawText('Address', {
        x: rightColumnX,
        y: currentY - spacingBetweenFields * 1.5,
        size: labelSize,
        font: regularFont,
        color: orangeColor
    });

    const address = [
        memberDetails.address.street + (memberDetails.address.landmark ? `, ${memberDetails.address.landmark}` : ''),
        `${memberDetails.address.state} - ${memberDetails.address.postalCode}`,
        memberDetails.address.country
    ];

    address.forEach((line, index) => {
        page.drawText(line, {
            x: rightColumnX,
            y: currentY - spacingBetweenFields * 1.5 - 20 - (index * 20),
            size: valueSize,
            font: boldFont,
            color: darkGrayColor
        });
    });

    // Footer
    page.drawLine({
        start: { x: 40, y: 50 },
        end: { x: pageWidth - 40, y: 50 },
        thickness: 1,
        color: rgb(0.9, 0.9, 0.9)
    });

    // support email
    page.drawText('For support: support@vishwabandhufoundation.org', {
        x: pageWidth / 2 - 100,
        y: 32,
        size: 8,
        font: regularFont,
        color: grayTextColor
    });

    const pdfBytes = await pdfDoc.save();
    return Buffer.from(pdfBytes);
}

export default GenerateMembershipCard;