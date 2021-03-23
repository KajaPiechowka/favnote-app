import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';



  const dummyArticle = {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'hello_roman',
      articleUrl: 'https://youtube.com/helloroman',
     }

const DetailsPage =({pageContext})=> (
   <DetailsTemplate
        pageType={pageContext}
        title={dummyArticle.title}
        content={dummyArticle.content}
        articleUrl={dummyArticle.articleUrl}
        twitterName={dummyArticle.twitterName}
      />
)
  



export default DetailsPage;