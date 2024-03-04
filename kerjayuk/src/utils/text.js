

export const formatText = (text) => {
    const boldWords = ["approved", "processed", "paid", "reviewed", "rejected"];

    boldWords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        text = text.replace(regex, ` <strong>${word}</strong>`);
    });

    return <div dangerouslySetInnerHTML={{ __html: text }} />;
}