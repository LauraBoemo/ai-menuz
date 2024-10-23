'use client'

import { useState } from "react";
import { getSignedURL } from "../../services";

export interface SignedURLParams {
  fileName: string;
}

const useSignedURL = () => {
  const [signedURL, setSignedURL] = useState<string | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const api = async ({ fileName }: SignedURLParams) => {
    try {
      setLoading(true);
      setError(null);
      setSignedURL(null);
      const res = await getSignedURL("menu", {
        params: {
          path: fileName,
        },
      });
      setSignedURL(res as unknown as string);
      return res;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [api, signedURL, loading, error];
};

export { useSignedURL };
