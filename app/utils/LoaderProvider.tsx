'use client'

import React, { createContext, useContext, useMemo, useState } from "react";

interface LoaderContextType {
  loader: boolean;
  setLoader: (loader: boolean, loadingKey?: string) => void;
  queue: Set<string>;
}

const LoaderContext = createContext<LoaderContextType>(null!);

const getLastKey = (q: Set<string>) => {
  return Array.from(q).pop();
};

const keyGenerator = (q: Set<string>) => {
  const lastKeyIndex = getLastKey(q)?.replace("loader-", "");
  return `loader-${Number(lastKeyIndex || 0) + 1}`;
};

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [queue, setQueue] = useState<Set<string>>(new Set());

  const enqueueLoader = (loaderKey?: string) => {
    setQueue((prevQueue) => {
      const key = loaderKey || keyGenerator(prevQueue);
      return new Set(prevQueue).add(key);
    });
  };
  const dequeueLoader = (loaderKey?: string) => {
    setQueue((prevQueue) => {
      if (prevQueue.size <= 1) return new Set();
      const newQueue = new Set(prevQueue);
      const key = loaderKey || getLastKey(prevQueue);
      newQueue.delete(key!);
      return newQueue;
    });
  };

  const setLoader = (isLoading: boolean, loadingKey?: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isLoading ? enqueueLoader(loadingKey) : dequeueLoader(loadingKey);
  };
  const loader = useMemo(() => queue.size > 0, [queue]);
  return <LoaderContext.Provider value={{ loader, setLoader, queue }}>{children}</LoaderContext.Provider>;
}

export function useLoader() {
  return useContext(LoaderContext);
}
