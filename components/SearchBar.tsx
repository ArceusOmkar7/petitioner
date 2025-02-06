"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

const SearchBar = () => {
  const [toggleSearch, setToggleSearch] = useState(false);

  const handleToggleSearch = () => {
    setToggleSearch(true);
  };
  return (
    <div className="w-full flex items-center justify-end">
      <Button variant="ghost" size="icon" onClick={handleToggleSearch}>
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>

      {toggleSearch && (
        <form>
          <Input type="text" placeholder="search..." className="" />
        </form>
      )}
    </div>
  );
};

export default SearchBar;
