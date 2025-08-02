const callApi = async ({
  callback,
  payload = "",
  onSuccess = () => {},
  onError = () => {},
  setData = () => {},
}) => {
  if (!callback) return;

  setData((prev) => ({ ...prev, loading: true }));
  try {
    const resPayload = Array.isArray(payload) ? payload : [payload];
    const res = await callback(...resPayload);
    setData({ error: false, data: res, loading: false, catch: null });
    if (onSuccess) onSuccess(res);
  } catch (error) {
    if (error.response.data.code === 401) {
      localStorage.clear();
      window.location.reload();
    }
    setData({ error: true, data: [], loading: false, catch: error });
    if (onError) onError(error.response.data.message);
  }
};

export default callApi;
