import styled from 'styled-components';
import theme from '../../styles/theme';

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-top: 140px;
  color: ${theme.colors.secondary};

  .product-filters {
    width: 100%;
    height: 32px;
    box-sizing: border-box;
    padding: 0px 60px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;

    .products-form {
      width: max-content;
      height: 100%;
      display: flex;

      .product-search {
        width: 270px;
        height: 100%;
        background-color: ${theme.colors.secondary};
        border: none;
        border-bottom-left-radius: 20px;
        border-top-left-radius: 20px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: ${theme.colors.primary};
        box-sizing: border-box;
        padding: 0px 0px 0px 20px;
        outline: none;

        &::placeholder {
          color: ${theme.colors.primary};
        }
      }

      .search-icon {
        width: 60px;
        height: 100%;
        margin-right: 20px;
        font-size: 20px;
        border-bottom-left-radius: 0px;
        border-top-left-radius: 0px;
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        display: flex;
        align-items: center;
        justify-content: center;

        .search-icon {
          font-size: 16px;
          &:hover {
            border-color: red;
          }
        }
      }
    }

    .filters {
      width: max-content;
      height: 100%;
      display: flex;

      .filter {
        width: 180px;
        height: 100%;
        display: flex;
        box-sizing: border-box;
        padding: 0px 10px;
        align-items: center;
        justify-content: space-around;
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        margin-left: 22px;
        border-radius: 20px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 15px;
      }
    }
  }

  @media (max-width: 830px) {
    .product-filters {
      display: flex;
      width: 88%;
      height: max-content;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px 0px;

      .products-form {
        width: 100%;
        height: max-content;
        justify-content: flex-end;

        .product-search {
          height: 30px;
        }

        .search-icon {
          height: 30px;
          margin-right: 0px;
        }
      }

      .filters {
        width: 100%;
        height: 30px;
        margin-top: 10px;
        justify-content: flex-end;

        .filter {
          margin-left: 10px;
          margin-right: 0px;
        }
      }
    }
  }
`;
