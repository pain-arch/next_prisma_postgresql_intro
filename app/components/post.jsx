export default function Post ({id, title, content, authorName}){
    return(
        <article style={{border: '2px solid black', padding: '15px', margin: '20px 0px' }}>
            <h2>{authorName}</h2>
            <h4>{title}</h4>
            <p>{content}</p>
        </article>
    )
}