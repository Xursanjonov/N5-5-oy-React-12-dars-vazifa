import { useRef, useEffect, useState } from "react";
import axiosUrl from "../config";

const useRefAxios = (apiUrl, ...rest) => {
  const dataRef = useRef(null);
  const loadingRef = useRef(false);
  const errorRef = useRef(null);

  const [ _, forceRender] = useState(false);

  useEffect(() => {
    const refData = async () => {
      loadingRef.current = true;
      forceRender((prev) => !prev);

      try {
        const res = await axiosUrl.get(apiUrl);
        dataRef.current = res.data;
      } catch (err) {
        errorRef.current = err.response.data;
      } finally {
        loadingRef.current = false;
        forceRender((prev) => !prev);
      }
    };

    refData();
  }, [...rest]);

  return {
    data: dataRef.current,
    loading: loadingRef.current,
    error: errorRef.current,
  };
};

export default useRefAxios;
