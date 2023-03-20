import { useState, useEffect } from 'react';

export const useDataApi = (
  initialUrl: string,
  initialData: any,
  initConfig: any
) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [config, setConfig] = useState(initConfig);

  useEffect(() => {
    // 设置接口只发送一次
    let didCancel = false;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      console.log('222=====', 222);
      try {
        const result = await fetch(url, initConfig).then(function (resolve) {
          return resolve.json();
        });
        if (!didCancel) {
          setData(result.data);
        }
      } catch (error) {
        if (!didCancel) {
          setIsError(true);
        }
      }
      setIsLoading(false);
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);
  const doFetch = (url: string) => {
    setUrl(url);
  };
  const doSetconfig = (config: any) => {
    setConfig(config);
  };
  return { data, isLoading, isError, doFetch, doSetconfig };
};
