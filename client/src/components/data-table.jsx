import React from 'react'
import Button from './button'
import { twMerge } from 'tailwind-merge'
// const data = [
//   [
//     'Pavithri',
//     'shimnasreedaran@gmail.com',
//     '9605854176',
//     'Active',
//     <Button
//       className={
//         'bg-primary rounded-lg text-sm py-[7px] text-primary-foreground'
//       }
//     >
//       View
//     </Button>,
//   ],
//   [
//     'Pavithri',
//     'shimnasreedaran@gmail.com',
//     '9605854176',
//     'Active',
//     <Button
//       className={
//         'bg-primary rounded-lg text-sm py-[7px] text-primary-foreground'
//       }
//     >
//       View
//     </Button>,
//   ],
//   [
//     'Pavithri',
//     'shimnasreedaran@gmail.com',
//     '9605854176',
//     'Active',
//     <Button
//       className={
//         'bg-primary rounded-lg text-sm py-[7px] text-primary-foreground'
//       }
//     >
//       View
//     </Button>,
//   ],
//   [
//     'Pavithri',
//     'shimnasreedaran@gmail.com',
//     '9605854176',
//     'Active',
//     <Button
//       className={
//         'bg-primary rounded-lg text-sm py-[7px] text-primary-foreground'
//       }
//     >
//       View
//     </Button>,
//   ],
//   [
//     'Pavithri',
//     'shimnasreedaran@gmail.com',
//     '9605854176',
//     'Active',
//     <Button
//       className={
//         'bg-primary rounded-lg text-sm py-[7px] text-primary-foreground'
//       }
//     >
//       View
//     </Button>,
//   ],
//   [
//     'Pavithri',
//     'shimnasreedaran@gmail.com',
//     '9605854176',
//     'Active',
//     <Button
//       className={
//         'bg-primary rounded-lg text-sm py-[7px] text-primary-foreground'
//       }
//     >
//       View
//     </Button>,
//   ],
//   [
//     'Pavithri',
//     'shimnasreedaran@gmail.com',
//     '9605854176',
//     'Active',
//     <Button
//       className={
//         'bg-primary rounded-lg text-sm py-[7px] text-primary-foreground'
//       }
//     >
//       View
//     </Button>,
//   ],
//   [
//     'Pavithri',
//     'shimnasreedaran@gmail.com',
//     '9605854176',
//     'Active',
//     <Button
//       className={
//         'bg-primary rounded-lg text-sm py-[7px] text-primary-foreground'
//       }
//     >
//       View
//     </Button>,
//   ],
//   [
//     'Pavithri',
//     'shimnasreedaran@gmail.com',
//     '9605854176',
//     'Active',
//     <Button
//       className={
//         'bg-primary rounded-lg text-sm py-[7px] text-primary-foreground'
//       }
//     >
//       View
//     </Button>,
//   ],
//   [
//     'Pavithri',
//     'shimnasreedaran@gmail.com',
//     '9605854176',
//     'Active',
//     <Button
//       className={
//         'bg-primary rounded-lg text-sm py-[7px] text-primary-foreground'
//       }
//     >
//       View
//     </Button>,
//   ],
//   [
//     'Pavithri',
//     'shimnasreedaran@gmail.com',
//     '9605854176',
//     'Active',
//     <Button
//       className={
//         'bg-primary rounded-lg text-sm py-[7px] text-primary-foreground'
//       }
//     >
//       View
//     </Button>,
//   ],
//   [
//     'Pavithri',
//     'shimnasreedaran@gmail.com',
//     '9605854176',
//     'Active',
//     <Button
//       className={
//         'bg-primary rounded-lg text-sm py-[7px] text-primary-foreground'
//       }
//     >
//       View
//     </Button>,
//   ],
// ]
export default function DataTable({ labels, data, loading }) {
  return (
    <div className="bg-[#fdf9f9] shadow-xl rounded-xl flex-1 p-3">
      <table className="w-full">
        <thead>
          <tr className="w-full">
            {labels.map((label, index) => (
              <th
                className={twMerge(
                  'text-left font-[500] text-[16px] py-3',
                  index === 0 && 'w-[140px]',
                )}
                key={index}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading &&
            Array(10)
              .fill(0)
              .map((_, index) => (
                <tr key={index} className="border-b border-neutral-400 mb-2">
                  <td className="bg-neutral-600/20 mb-2 py-[1.4rem] animate-pulse"></td>
                  <td className="bg-neutral-600/20 mb-2 py-[1.4rem] animate-pulse"></td>
                  <td className="bg-neutral-600/20 mb-2 py-[1.4rem] animate-pulse"></td>
                  <td className="bg-neutral-600/20 mb-2 py-[1.4rem] animate-pulse"></td>
                  <td className="bg-neutral-600/20 mb-2 py-[1.4rem] animate-pulse"></td>
                </tr>
              ))}
          {!loading &&
            data &&
            data?.map((items, idx) => (
              <tr key={idx} className="border-t border-neutral-600/20 ">
                {items.map((item, index) => (
                  <td key={index} className="py-2 text-sm font-light">
                    {item}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
