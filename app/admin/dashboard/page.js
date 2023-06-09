"use client";

import CountriesCard from "@components/Dashboard/CountriesCard";
import PersonalInfo from "@components/Dashboard/PersonalInfo";
import ProfitCard from "@components/Dashboard/ProfitCard";
import SalesAndCostCard from "@components/Dashboard/SalesAndCostCard";
import ShippingCard from "@components/Dashboard/ShippingCard";
import Table from "@components/Dashboard/Table";
import { TabHeaders } from "@components/Dashboard/Table/TabHeaders";
import TableState from "@components/Dashboard/Table/TableState";
import UserAvatar from "@components/Dashboard/UserAvatar";
import { user } from "@mocks/user";
import { classNames } from "@utils/classNames";
import { useState } from "react";

export default function Page() {
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <div className="w-full pb-8">
      <div className="flex w-full justify-between flex-wrap gap-4 lg:gap-0 flex-col lg:flex-row lg::flex-nowrap">
        <SalesAndCostCard />
        <ProfitCard />
        <CountriesCard />
      </div>
      <div className="mt-4 w-full bg-white rounded-2xl px-8">
        <div class="flex w-full items-center justify-center pt-6 flex-wrap flex-col lg:flex-row gap-4 lg:flex-nowrap mb-5 lg:mb-auto">
          <UserAvatar user={user} />
          <PersonalInfo user={user} />
          <ShippingCard user={user} />
        </div>
        <TabHeaders selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      <TableState />
      <Table />
    </div>
  );
}
