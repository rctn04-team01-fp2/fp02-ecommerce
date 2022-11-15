import React from 'react';

interface Props {
  data: string[];
  variant?: string;
}
export function TableHead({ data, variant = 'center' }: Props) {
  return (
    <thead
      className={`text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b ${
        variant === 'center' ? 'text-center' : ''
      }`}
    >
      <tr>
        {data.map((name, index) => (
          <th scope="col" className="pb-12 px-6 pl-2" key={index}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
}
