import React from "react";

import { SectionListStyle } from "./SectionList.style";

function SectionList(props) {
  const { title, listItems, icon } = props;
  return (
    <SectionListStyle>
      <h1 className="title"> {title}</h1>
      <article className="list-wrapper">
        {listItems.map((list) => {
          const { listItem, icon } = list;
          return (
            <p className="list">
              {listItem} {icon && <span className="icon">{icon}</span>}
            </p>
          );
        })}
      </article>
    </SectionListStyle>
  );
}

export default SectionList;
