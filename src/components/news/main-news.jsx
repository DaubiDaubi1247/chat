import HeaderNews from "./header-news/headerNews"
import NewsContent from "./news-content/newsContent"
import "./main-news.scss"
const MainNews = (props) => {
    return (
        <div className="news__wrapper">
            <div className="container">
                <HeaderNews/>
                <NewsContent/>
            </div>
        </div>
    )
}



export default MainNews