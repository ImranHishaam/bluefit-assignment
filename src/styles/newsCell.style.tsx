import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const CellFigure = styled.figure`
    width: 50%;
    height: 100%;
    background: #242C39;
    box-shadow: 0 0 12px 2px rgba(0, 0, 0, .5);
    margin-bottom: 20px;
    border-radius: 10px;
    font-size: 14px;
    margin: auto;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      width: 100%;
  }

    .tags {
        font-size: 12px;
        color: #FFDF3B;
        padding-top: 10px;
      }
      
     .footer {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
      }
      
     .footer .like {
        flex: 0 0 25%;
      }
      
     .footer i {
        padding-right: 3px;
      }
`;

export const MovieTitle = styled.p`
    padding: 15px;
    padding-bottom: 0;
    font-weight: 400;
    text-align: left;
`;

export const CoverPicture = styled(LazyLoadImage)`
    background-position: 50%;
    background-size: cover;
    height: 200px;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const NewsContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 10px;
    text-align: center;
`;

export const NewsHeader = styled.div`
    align-items: center;
`;

export const DetailsContainer = styled.div`
  margin-left: 10px;
  text-align: center;
`;