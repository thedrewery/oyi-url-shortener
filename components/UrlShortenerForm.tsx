'use client'

import { useState } from "react"

const UrlShortenerForm = () => {

    const [longUrl, setLongUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true);

        try {
            const response = await fetch('/api/shorten', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ long_url: longUrl })
            })
            const data = await response.json()
            setShortUrl(data.link)
        }catch (error) {
            setError('Failed to shorten URL' + error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    value={longUrl}
                    onChange={(e) => { setLongUrl(e.target.value) }}
                    placeholder="Enter long URL here"
                    required
                >
                </input>
                <button type="submit" disabled={isLoading}>
                {isLoading ? "Shortening..." : "Shorten URL"}
                </button>
            </form>
            {shortUrl && (
                <div>
                <p>Here is that shortened URL you asked for:</p>
                <a href={shortUrl} target="_blank" rel="noopener noreferer">
                    {shortUrl}
                </a>
                </div>
            )}
            {error && (
                <div>
                    <p className="error">{error}</p>
                </div>
            )}


        </div>

    )
}

export default UrlShortenerForm;