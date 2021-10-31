import React from "react";

// @ts-ignore
import { useRegisterSW } from "virtual:pwa-register/react";
import { CornerPromptBox } from "@/components";

export const ReloadPrompt = () => {
  const {
    // offlineReady: [offlineReady, setOfflineReady],
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

  return (
    <CornerPromptBox
      content="🚀 新版本可用，点击更新按钮获取最新内容。"
      showBox={needRefresh}
      onCancel={close}
      cancelLabel="关闭"
      onOk={needRefresh ? () => updateServiceWorker(true) : null}
      okLabel="更新"
    />
  );
};
