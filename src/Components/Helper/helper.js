const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Jim_Joseph_Resume.pdf";
  link.click();
};

const normalizeRoute = (route) => {
  return route.replace(/\/$/, "");
}

export { handleResumeDownload, normalizeRoute };
