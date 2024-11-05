import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY as string;
    if (!apiKey) {
        return NextResponse.json({ error: "Missing API Key", data: null });
    }

    const { searchParams } = new URL(req.url);
    const input = searchParams.get("input");

    // Using the Places Autocomplete API endpoint
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json`;

    try {
        const response = await fetch(`${url}?input=${encodeURIComponent(input || '')}&key=${apiKey}&types=address&location=42.9849,-81.2453&radius=100000&language=en&components=country:ca`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Simplify the response structure
        return NextResponse.json({
            predictions: data.predictions.map((prediction: any) => ({
                description: prediction.description,
                placeId: prediction.place_id
            })),
            error: null
        });
    } catch (error) {
        console.error("Error fetching autocomplete suggestions:", error);
        return NextResponse.json({ error: "Failed to fetch suggestions", predictions: [] });
    }
}