'use client';

import { useState } from "react";
import { useAppDispatch } from "@/components/app/redux/hooks";
import { useFetchDataFromDbQuery } from "@/components/app/redux/services/apiSlice";
import { setCurrentBoardName } from "@/components/app/redux/features/appSlice";

export default function Sidebar() {
  const [active, setActive] = useState<number>(0);
  const { data, error, isLoading } = useFetchDataFromDbQuery();
  const dispatch = useAppDispatch();

  const handleNav = (index: number, name: string) => {
    setActive(index);
    dispatch(setCurrentBoardName(name));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load data. Please try again later.</p>;
  }

  if (!data || !data[0]?.boards?.length) {
    return <p>No boards available. Create a new board to get started!</p>;
  }

  return (
    <aside className="w-[18.75rem] flex-none dark:bg-dark-grey h-full py-6 pr-6">
      <p className="text-medium-grey pl-[2.12rem] text-[.95rem] font-semibold uppercase pb-3">
        {`All Boards (${data[0]?.boards.length})`}
      </p>
      {data[0]?.boards.map(
        (board: { name: string; id: string }, index: number) => {
          const isActive = index === active;
          return (
            <div
              key={board.id}
              onClick={() => handleNav(index, board.name)}
              className={`${
                isActive
                  ? "rounded-tr-full rounded-br-full bg-blue-500 text-white"
                  : "text-black"
              } cursor-pointer flex items-center space-x-2 pl-[2.12rem] py-3`}
            >
              <p className="text-lg capitalize">{board.name}</p>
            </div>
          );
        }
      )}
      <button className="flex items-center space-x-2 pl-[2.12rem] py-3">
        <p className="text-base font-bold capitalize text-main-purple">
          + Create New Board
        </p>
      </button>
    </aside>
  );
}
