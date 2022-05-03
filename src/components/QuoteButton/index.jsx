import styled from "styled-components"

export const QuoteButton = styled.button`
    font-size: 30px;
    font-family: "Amatic SC", sans-serif;
    padding: 20px 45px;
    margin: 12px 0;
    color: gray;
    border-radius: 6px;
    transition: top 0.01s linear;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.267);
    background-color: #f0d264;
    box-shadow: 0 0 0 1px #f0d264 inset, 0 0 0 2px rgba(255, 255, 255, 0) inset,
    0 8px 0 0 rgba(196, 172, 83, 0.7), 0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);
    outline: none;
    cursor: pointer;

    @media (max-width: 480px) {
        padding: 15px 25px;
        font-size: 18px;
        font-weight: 700;
    }
`;
