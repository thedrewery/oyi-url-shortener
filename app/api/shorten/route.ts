import { NextResponse } from 'next/server'


const POST = async (req: Request, res: Response) => {
        const { long_url } = await req.json()

        const BITLY_API_KEY = process.env.BITLY_API_TOKEN

        try {
            const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${BITLY_API_KEY}`
                },
                body: JSON.stringify({ long_url })
            });

            const data = await response.json()

            if (!response.ok) {
                return NextResponse.json(data.description, { status: response.status })
            }

            return NextResponse.json(data, { status: 200 })

        } catch (error) {
            return NextResponse.json('Internal Service Error', { status: 500 })
        }
}

export { POST }
