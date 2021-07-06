import React from 'react';
import { FaHeart } from 'react-icons/fa';

import {
  CellFigure,
  CoverPicture,
  NewsContent,
  NewsHeader,
  DetailsContainer
} from '../../styles/newsCell.style';

export interface NewsCellProps {
  author?: string
  title: string
  description?: string
  urlToImage?: string
  publishedAt?: string
  follow?: boolean
  followNews: (id: string) => void
};

export const NewsCell: React.FC<NewsCellProps> = ({ 
  author,
  title,
  description,
  urlToImage,
  publishedAt,
  follow,
  followNews
}) => {
  return (
    <CellFigure>
      <CoverPicture
        alt={title}
        src={urlToImage}
        effect="blur"
        visibleByDefault={true} />

      <NewsContent>
        <NewsHeader>
          <DetailsContainer>
            <p className="name">{author}</p>
            <p className="posted">{publishedAt}</p>
          </DetailsContainer>
        </NewsHeader>
        <div className="desc">{description}</div>
        <div className="tags">
          <span>#party</span>
          <span>#colorful</span>
        </div>
        <div className="footer">
          <div className="like" onClick={(e) => {
            e.preventDefault();
            followNews(title)
          }}>
            <FaHeart color={follow ? 'red' : 'white'} />
            <span> 1k</span>
          </div>
        </div>
      </NewsContent>
    </CellFigure>
  );
}


