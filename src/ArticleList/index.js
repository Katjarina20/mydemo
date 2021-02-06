import Article from '../Article'
import './style.css'



export default function ArticleList({ articles }) {
    articles.length = 10;
    // если нужно отрисовать много элементов через метод map, или любой другой иттерируемый метод, то элемнтам внутри него (<li> в данном случае)
    // нужно присваивать уникальный ключ 
    const articleElements = articles.map(article => 
        <li key={article.id} className="article-list_li">
            <Article article={article} />
        </li>
    )
    return (
        <ul>
            {articleElements}
        </ul>
    )
}