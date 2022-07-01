import { ref } from "vue";
import { api } from "boot/axios";
export default function useApi(url, options) {
  const isLoading = ref(false);
  const isError = ref(false);
  const fetchError = ref(null);
  const fetchStatus = ref(null);
  const result = ref(null);
  //   const meta = ref(null);
  const execute = async (url, options) => {
    isLoading.value = true;
    try {
      const res = await api.get(url, options);
      res.status === 200 ? (result.value = res.data) : (isError.value = true);
      isLoading.value = false;

      fetchStatus.value = res.status;
      //   meta.value = res;
      console.log("fetchStatus", fetchStatus.value);
    } catch (error) {
      result.value = null;
      isError.value = true;
      fetchError.value = error;
    } finally {
      isLoading.value = false;
    }
  };
  //   execute();
  return {
    isError,
    isLoading,
    fetchError,
    fetchStatus,
    result,
    // meta,
    execute,
  };
}
