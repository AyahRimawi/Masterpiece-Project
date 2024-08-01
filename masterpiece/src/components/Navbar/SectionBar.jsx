import { React, useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import { HeroSection } from "../../pages/HomePage/HeroSection";
import { HotSale } from "../../pages/HomePage/HotSale";
import { ShopNow } from "../../pages/HomePage/ShopNow";
import { Sections } from "../../pages/HomePage/Sections";
import { Dress } from "../../pages/HomePage/Dress";
import { Payment } from "../../pages/HomePage/Payment";
import { SalesCard } from "../../pages/Card/SalesCard";


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
              Home
            </TETabsItem>
            <TETabsItem
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
              className="flex-shrink-0 px-4 py-2 text-center"
            >
              WOMEN
            </TETabsItem>
            <TETabsItem
              onClick={() => handleBasicClick("tab3")}
              active={basicActive === "tab3"}
              className="flex-shrink-0 px-4 py-2 text-center"
            >
              MEN
            </TETabsItem>
            <TETabsItem
              onClick={() => handleBasicClick("tab4")}
              active={basicActive === "tab4"}
              className="flex-shrink-0 px-4 py-2 text-center"
            >
              KIDS
            </TETabsItem>
            <TETabsItem
              onClick={() => handleBasicClick("tab5")}
              active={basicActive === "tab5"}
              className="flex-shrink-0 px-4 py-2 text-center"
            >
              BABY
            </TETabsItem>
            <TETabsItem
              onClick={() => handleBasicClick("tab6")}
              active={basicActive === "tab6"}
              className="flex-shrink-0 px-4 py-2 text-center"
            >
              DRESSES
            </TETabsItem>
            <TETabsItem
              onClick={() => handleBasicClick("tab7")}
              active={basicActive === "tab7"}
              className="flex-shrink-0 px-4 py-2 text-center text-red-500 font-bold border-b-0"
            >
              SALE%
            </TETabsItem>
          </div>
        </TETabs>
      </div>

      <TETabsContent>
        <TETabsPane show={basicActive === "tab1"}>
          <HeroSection />
          <HotSale />
          <ShopNow />
          <Sections />
          <Dress />
          <Payment />
        </TETabsPane>
        <TETabsPane show={basicActive === "tab2"}>
          <SalesCard />
        </TETabsPane>
        <TETabsPane show={basicActive === "tab3"}>
          {" "}
          <SalesCard />
        </TETabsPane>
        <TETabsPane show={basicActive === "tab4"}>
          {" "}
          <SalesCard />
        </TETabsPane>
        <TETabsPane show={basicActive === "tab5"}>
          {" "}
          <SalesCard />
        </TETabsPane>
        <TETabsPane show={basicActive === "tab6"}>
          {" "}
          <SalesCard />
        </TETabsPane>
        <TETabsPane show={basicActive === "tab7"}>
          {" "}
          <SalesCard />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
}
