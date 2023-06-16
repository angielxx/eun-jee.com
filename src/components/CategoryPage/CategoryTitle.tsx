import React from 'react';

interface CategoryTitleProps {
  title: string;
  count: number;
}

const CategoryTitle = ({ title, count }: CategoryTitleProps) => {
  return (
    <div className="flex gap-2 items-center py-2">
      <p className="font-bold">{title}</p>
      <span className="text-sm text-subtext">{count}</span>
    </div>
  );
};

export default CategoryTitle;
