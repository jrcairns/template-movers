import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const response = await fetch(`${process.env.OPTNM_API_URL}/submissions/${process.env.OPTNM_PROJECT_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.OPTNM_API_SECRET!,
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                phone: data.phone,
                quoteType: data.quoteType,
                startingAddress: data.startingAddress,
                destinationAddress: data.destinationAddress,
                moveDate: data.moveDate,
                referrer: data.referrer
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to submit quote');
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error submitting quote:', error);
        return NextResponse.json(
            { error: 'Failed to submit quote' },
            { status: 500 }
        );
    }
} 