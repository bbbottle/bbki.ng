import React from "react";

// @ts-ignore
import { useRegisterSW } from "virtual:pwa-register/react";
import { CornerPromptBox } from "@/components";

export const ReloadPrompt = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: ServiceWorkerRegistration) {
      console.log("SW Registered: ", r);
    },
    onRegisterError(error: any) {
      console.log("SW registration error", error);
    },
  });

  const close = () => {
    // setOfflineReady(false);
    setNeedRefresh(false);
  };

  // @ts-ignore
  const appVer = GLOBAL_BBKING_VERSION;
  console.log("appVer: ", appVer);

  return (
    <CornerPromptBox
      content={`🚀 发现新版本。获取更新？`}
      showBox={needRefresh}
      onCancel={close}
      cancelLabel="关闭"
      onOk={needRefresh ? () => updateServiceWorker(true) : close}
    />
  );
};
