import { React, useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import HeroSection from "../../pages/HomePage/HeroSection";
import HotSale from "../../pages/HomePage/HotSale";
import { ShopNow } from "../../pages/HomePage/ShopNow";
import { Sections } from "../../pages/HomePage/Sections";
import { Dress } from "../../pages/HomePage/Dress";
import { Payment } from "../../pages/HomePage/Payment";
import {
  WomenCard,
  MenCard,
  KidsCard,
  BabyCard,
  DressesCard,
  SaleCard,
} from "../../pages/ProductPage/CategoryComponents/CategoryComponents";

export default function SectionBar() {
  const [basicActive, setBasicActive] = useState("tab1");
  const [categoryFilter, setCategoryFilter] = useState(null);

  const handleBasicClick = (value) => {
    window.scrollTo(0, 0);
    if (value === basicActive) {
      return;
    }

    // Reset categoryFilter to "all" for Men and Women tabs
    if (value === "tab2" || value === "tab3") {
      setCategoryFilter("all");
    } else {
      setCategoryFilter(null);
    }

    setBasicActive(value);
  };

  const navigateWithFilter = (tab, filter) => {
    setBasicActive(tab);
    setCategoryFilter(filter);
  };

  return (
    <div className="mb-3">
      <div className="overflow-x-auto">
        <TETabs>
          <div className="flex flex-nowrap w-full shadow-lg dark:bg-neutral-700">
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
              onClick={() => handleBasicClick("tab6")}
              active={basicActive === "tab6"}
              className="flex-shrink-0 px-4 py-2 text-center"
            >
              DRESSES
            </TETabsItem>
          </div>
        </TETabs>
      </div>

      <TETabsContent>
        <TETabsPane show={basicActive === "tab1"}>
          <HeroSection
            setBasicActive={setBasicActive}
            navigateWithFilter={navigateWithFilter}
          />
          <HotSale
            setBasicActive={setBasicActive}
            navigateWithFilter={navigateWithFilter}
          />
          <ShopNow
            setBasicActive={setBasicActive}
            navigateWithFilter={navigateWithFilter}
          />
          <Sections
            setBasicActive={setBasicActive}
            navigateWithFilter={navigateWithFilter}
          />
          <Dress setBasicActive={setBasicActive} />
          <Payment />
        </TETabsPane>
        <TETabsPane show={basicActive === "tab2"}>
          <WomenCard initialSubcategory={categoryFilter} />
        </TETabsPane>
        <TETabsPane show={basicActive === "tab3"}>
          <MenCard initialSubcategory={categoryFilter} />
        </TETabsPane>
        <TETabsPane show={basicActive === "tab4"}>
          <KidsCard />
        </TETabsPane>
        <TETabsPane show={basicActive === "tab6"}>
          <DressesCard />
        </TETabsPane>
      </TETabsContent>
    </div>
  );
}