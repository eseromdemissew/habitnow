import { useEffect, useState } from "react";

export const APK_URL = "/downloads/habitnow.apk";
type ApkStatus = "checking" | "available" | "unavailable";

/** Check the actual file, not an HTML fallback returned for a missing public asset. */
export function useApkDownload() {
  const [status, setStatus] = useState<ApkStatus>("checking");

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    fetch(APK_URL, { method: "HEAD", cache: "no-store", signal: controller.signal })
      .then((response) => {
        const type = response.headers.get("content-type")?.split(";")[0]?.trim();
        const binary = type === "application/vnd.android.package-archive" || type === "application/octet-stream" || type === "application/zip";

        setStatus(response.ok && binary && response.headers.get("content-length") !== "0" ? "available" : "unavailable");
      })
      .catch(() => setStatus("unavailable"))
      .finally(() => clearTimeout(timeout));

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  return status;
}
