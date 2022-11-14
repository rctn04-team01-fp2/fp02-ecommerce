import React from 'react';

interface Props {
  data: string[];
}
export function TableHead({ data }: Props) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
      <tr>
        {data.map((name, index) => (
          <th scope="col" className="py-3 px-6" key={index}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
}
