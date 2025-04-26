import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ContentPageProps {
    title: string;
    content: string;
}

const ContentPage: React.FC<ContentPageProps> = ({ title, content }) => {
    return (
        <ContentWrapper>
            <h2>{title}</h2>
            <p>{content}</p>

            {/* Enllaç per tornar a la pàgina d'inici */}
            <ReturnLink to="/">← Tornar a l'inici</ReturnLink>
        </ContentWrapper>
    );
}

export default ContentPage;

const ContentWrapper = styled.div`
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    h2 {
        color: #0d47a1;
    }
    p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #555;
    }
`;

const ReturnLink = styled(Link)`
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #0d47a1;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    &:hover {
        background-color: #1976d2;
    }
`;
