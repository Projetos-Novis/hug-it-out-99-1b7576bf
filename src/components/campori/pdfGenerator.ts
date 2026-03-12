export async function generatePDF() {
  // Add print class to body to trigger @media print styles
  document.body.classList.add("printing-pdf");
  
  // Small delay so styles apply
  await new Promise((r) => setTimeout(r, 200));
  
  window.print();

  // Remove class after print dialog closes
  window.addEventListener("afterprint", () => {
    document.body.classList.remove("printing-pdf");
  }, { once: true });

  // Fallback removal after timeout (some browsers don't fire afterprint)
  setTimeout(() => {
    document.body.classList.remove("printing-pdf");
  }, 3000);
}
