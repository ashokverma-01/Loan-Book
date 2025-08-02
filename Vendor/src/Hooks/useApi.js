import { useEffect, useState, useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";

function useApi({
  callback = () => {},
  dependencies = [],
  payload = "",
  shouldCallApi = true,
  onSuccess = () => {},
  onError = () => {},
  onPreFetch = () => {},
}) {
  const [data, setData] = useState({
    error: false,
    data: [],
    loading: null,
    catch: null,
  });
  const history = useHistory();
  const memoizedCallback = useCallback(callback, [callback]);
  const memoizedDependencies = useMemo(() => dependencies, [dependencies]);

  useEffect(() => {
    if (!memoizedCallback || !shouldCallApi) return;
    onPreFetch && onPreFetch();
    const fetchData = async () => {
      setData((pre) => ({ ...pre, loading: true }));
      try {
        const reqPayload = Array.isArray(payload) ? payload : [payload];
        const res = await memoizedCallback(...reqPayload);
        setData({ error: false, data: res, loading: false, catch: null });
        if (res && onSuccess) {
          const { page = 0, limit = 0, totalDocs = 0, totalPages = 0 } = res;
          onSuccess(res, { page, limit, totalDocs, totalPages });
        }
      } catch (error) {
        console.log("useApi error", error);

        if (error?.response?.data?.code === 401) {
          localStorage.clear();
          history.push("/login");
        }
        if (onError) onError(error?.response?.data?.message || "");
        setData({ error: true, data: [], loading: false, catch: error });
      }
    };
    fetchData();
  }, [memoizedCallback, shouldCallApi, ...memoizedDependencies]);

  return data;
}

export default useApi;
