import React from 'react'
import { useParams } from 'react-router-dom' 
import articleContent from './article-content';
import Articles from "../components/Articles";

const Article = () => {
  const { name } =useParams();
  const article=articleContent.find((article) => article.name === name);
  if(!article) return <h1>Article Does not Exit</h1>
  return (
    <div>
    <div>Articles publisher {name} !!
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-grey-900">
        {article.title}
      </h1>
        {article.content.map((paragraph,index) =>(
          <p>{paragraph}</p>
        ))}
        
      </div>
     
        </div>
  )
}

export default Article 