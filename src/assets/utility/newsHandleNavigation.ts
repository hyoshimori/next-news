// This func is used to open the link when suggestions are being clicked
export const handleNavigation = (url: string) => {
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

export default handleNavigation;
