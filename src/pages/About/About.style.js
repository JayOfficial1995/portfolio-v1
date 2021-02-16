import styled from "styled-components";

import {
  CommonGridStyle,
  FlexBoxStyle,
  InnerShadowStyle,
  BoxShadowStyle,
} from "../../style/common.style";

export const AboutStyle = styled.main`
  ${InnerShadowStyle};
  padding: 2rem;
  border-radius: 2rem;
  height: 62rem;
  overflow-y: scroll;
`;

export const OverviewStyle = styled.article`
  .title {
    margin-bottom: 1rem;
    color: ${(p) => p.theme.color.darkestGrayColor};
    font-size: ${(p) => p.theme.fontSize.h2};
  }

  .description {
    margin-bottom: 1rem;
    color: ${(p) => p.theme.color.grayColor};
  }
`;

export const ExperianceStyle = styled.article`
  margin-top: 5rem;

  .title {
    margin-bottom: 1rem;
    color: ${(p) => p.theme.color.darkestGrayColor};
    font-size: ${(p) => p.theme.fontSize.h2};
  }

  .experiance-tabs-wrapper {
    ${CommonGridStyle};

    margin-top: 3rem;
    align-items: stretch;

    @media (max-width: ${(p) => p.theme.breakPoints.tablet}) {
      grid-template-columns: 1fr;
    }

    .experiance-box {
      ${BoxShadowStyle};

      padding: 2rem;
      border-radius: 1rem;

      .work-year {
        font-size: ${(p) => p.theme.fontSize.h5};
        color: ${(p) => p.theme.color.grayColor};
      }

      .box-title {
        color: ${(p) => p.theme.color.darkestGrayColor};
        font-size: ${(p) => p.theme.fontSize.h2};
        line-height: 2rem;
        margin: 0.5rem 0;
      }

      .company-details {
        ${FlexBoxStyle};

        justify-content: space-between;

        .company-name {
          font-size: ${(p) => p.theme.fontSize.h4};
          color: ${(p) => p.theme.color.purpleColor};
        }

        .address {
          font-size: ${(p) => p.theme.fontSize.h6};
        }
      }

      .job-description-wrapper {
        margin-top: 3rem;
        list-style: none;

        .job-description {
          font-size: ${(p) => p.theme.fontSize.h5};
          margin-bottom: 1rem;
          position: relative;

          &:before {
            content: " ";
            width: 0.4rem;
            height: 0.4rem;
            background: ${(p) => p.theme.color.gradientPurpleColor};
            border-radius: 50%;
            position: absolute;
            left: -8px;
            top: 7px;
          }
        }
      }
    }
  }
`;
