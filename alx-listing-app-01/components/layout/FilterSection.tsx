'use client';

import React, { useState } from 'react';
import Pill from '@/components/layout/pill';

const FILTERS = ['Top Villa', 'Self Checkin', 'Free WiFi', 'Pet Friendly', 'Ocean View', 'Parking'];

const FilterSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (filter: string) => {
    setActiveFilter((prev) => (prev === filter ? null : filter));
  };

  return (
    <section className="bg-white py-4 px-6 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            isActive={activeFilter === filter}
            onClick={() => handleFilterClick(filter)}
          />
        ))}
      </div>
    </section>
  );
};

export default FilterSection;
