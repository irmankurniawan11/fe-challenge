const PostReadingTime = ({postBody}) => {
    const calculateReadingTime = () => {
        const wordsPerMinute = 100;
        const words = postBody.match(/\w+/g);
        const wordCount = words ? words.length : 0;
        const readingTime = Math.ceil(wordCount/wordsPerMinute);
        return readingTime;
    }

    return (
        <div className="text-sm text-slate-500">{calculateReadingTime()} min read</div>
    )
}

export default PostReadingTime