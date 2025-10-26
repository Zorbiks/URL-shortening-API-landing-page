const shortenURL = async (url) => {
    const data = { url }

    const response = await fetch(`https://0s.lv/api/v1/shorten`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        throw Error('Error while shortening URL')
    }

    const { shortUrl } = await response.json();
    return shortUrl;
}

export { shortenURL };