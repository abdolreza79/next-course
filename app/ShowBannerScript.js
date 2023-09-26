import Script from "next/script";
import React from "react";

const ShowBannerScript = () => {
  return (
    <Script id="show-banner">
      {`document.getElementById('banner').classList.remove('hidden')`}
    </Script>
  );
};

export default ShowBannerScript;
