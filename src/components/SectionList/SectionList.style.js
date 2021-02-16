import styled from "styled-components";
import { FlexBoxStyle } from "../../style/common.style";

export const SectionListStyle = styled.section`
  margin-top: 5rem;

  .title {
    margin-bottom: 1rem;
    color: ${(p) => p.theme.color.darkestGrayColor};
    font-size: ${(p) => p.theme.fontSize.h2};
  }

  .list-wrapper {
    ${FlexBoxStyle};

    flex-wrap: wrap;

    .list {
      ${FlexBoxStyle};

      padding: 1rem;
      border-radius: 5rem;
      box-shadow: ${(p) => p.theme.boxShadow.innerItems};
      font-size: ${(p) => p.theme.fontSize.h4};
      color: ${(p) => p.theme.color.darkGrayColor};
      margin: 1rem;

      .icon {
        margin-left: 1rem;

        > svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
