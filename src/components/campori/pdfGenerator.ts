export type PdfMode = "desktop" | "mobile";

export async function generatePDF(mode: PdfMode = "desktop") {
  // Add print class + mode class to body
  document.body.classList.add("printing-pdf", `pdf-${mode}`);
  
  // Small delay so styles apply
  await new Promise((r) => setTimeout(r, 200));
  
  window.print();

  const cleanup = () => {
    document.body.classList.remove("printing-pdf", `pdf-${mode}`);
  };

  // Remove class after print dialog closes
  window.addEventListener("afterprint", cleanup, { once: true });

  // Fallback removal after timeout (some browsers don't fire afterprint)
  setTimeout(cleanup, 3000);
}
