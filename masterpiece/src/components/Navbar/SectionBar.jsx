import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

export default function SectionBar() {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <div className="mb-3 ">
      <div className="overflow-x-auto">
        <TETabs>
          <div className="flex flex-nowrap w-full shadow-lg dark:bg-neutral-700 ">
            <TETabsItem
              onClick={() => handleBasicClick("tab1")}
              active={basicActive === "tab1"}
              className="flex-shrink-0 px-4 py-2 text-center"
            >
              WOMEN
            </TETabsItem>
            <TETabsItem
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
              className="flex-shrink-0 px-4 py-2 text-center"
            >
              MEN
            </TETabsItem>
            <TETabsItem
              onClick={() => handleBasicClick("tab3")}
              active={basicActive === "tab3"}
              className="flex-shrink-0 px-4 py-2 text-center"
            >
              KIDS
            </TETabsItem>
            <TETabsItem
              onClick={() => handleBasicClick("tab4")}
              active={basicActive === "tab4"}
              className="flex-shrink-0 px-4 py-2 text-center"
            >
              BABY
            </TETabsItem>
            <TETabsItem
              onClick={() => handleBasicClick("tab5")}
              active={basicActive === "tab5"}
              className="flex-shrink-0 px-4 py-2 text-center"
            >
              DRESSES
            </TETabsItem>
            <TETabsItem
              onClick={() => handleBasicClick("tab6")}
              active={basicActive === "tab6"}
              className="flex-shrink-0 px-4 py-2 text-center text-red-500 font-bold border-b-0"
            >
              SALE%
            </TETabsItem>
          </div>
        </TETabs>
      </div>

      <TETabsContent>
        <TETabsPane show={basicActive === "tab1"}>Tab 1 content</TETabsPane>
        <TETabsPane show={basicActive === "tab2"}>Tab 2 content</TETabsPane>
        <TETabsPane show={basicActive === "tab3"}>Tab 3 content</TETabsPane>
        <TETabsPane show={basicActive === "tab4"}>Tab 4 content</TETabsPane>
        <TETabsPane show={basicActive === "tab5"}>Tab 5 content</TETabsPane>
        <TETabsPane show={basicActive === "tab6"}>Tab 6 content</TETabsPane>
      </TETabsContent>
    </div>
  );
}
