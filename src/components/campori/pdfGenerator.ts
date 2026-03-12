import html2pdf from "html2pdf.js";

export async function generatePDF() {
  // We'll capture the actual visible content directly instead of cloning
  const contentArea = document.getElementById("pdf-content");
  if (!contentArea) return;

  // Temporarily hide sidebar and back-to-top for cleaner PDF
  const sidebar = document.querySelector("[data-pdf-hide='sidebar']") as HTMLElement | null;
  const backToTop = document.querySelector("[data-pdf-hide='back-to-top']") as HTMLElement | null;
  const hero = document.getElementById("hero") as HTMLElement | null;
  const backLinks = contentArea.querySelectorAll("[data-pdf-hide='back-link']") as NodeListOf<HTMLElement>;

  // Save original states
  if (sidebar) sidebar.style.display = "none";
  if (backToTop) backToTop.style.display = "none";
  if (hero) hero.style.display = "none";
  backLinks.forEach((el) => (el.style.display = "none"));

  // Remove left margin temporarily
  const wrapper = document.getElementById("pdf-wrapper") as HTMLElement | null;
  const origML = wrapper?.style.marginLeft || "";
  if (wrapper) wrapper.style.marginLeft = "0";

  // Insert a PDF header at the top
  const pdfHeader = document.createElement("div");
  pdfHeader.id = "pdf-temp-header";
  pdfHeader.style.cssText = "text-align:center;margin-bottom:30px;padding:40px 20px 20px;border-bottom:3px solid #1a5c3a;";
  pdfHeader.innerHTML = `
    <p style="font-family:Montserrat,sans-serif;font-size:12px;letter-spacing:3px;color:#c78c3c;text-transform:uppercase;margin-bottom:8px;">Associação Paulista do Vale</p>
    <h1 style="font-family:Montserrat,sans-serif;font-size:32px;font-weight:900;color:#1a5c3a;margin:0 0 4px;line-height:1.1;">III CAMPORI DE LÍDERES</h1>
    <p style="font-family:Montserrat,sans-serif;font-size:18px;font-weight:700;color:#c78c3c;margin:8px 0;">TEMA: ÍNTEGROS</p>
    <p style="font-size:14px;color:#666;margin:4px 0;">09 a 12 de outubro de 2026 · Catre, Analândia-SP</p>
    <p style="font-size:12px;color:#888;">De Líder para Líderes · 1.000 participantes</p>
  `;
  contentArea.insertBefore(pdfHeader, contentArea.firstChild);

  // Scroll to top for consistent capture
  window.scrollTo(0, 0);
  
  // Small delay to let layout settle
  await new Promise((r) => setTimeout(r, 300));

  const opt = {
    margin: [8, 8, 12, 8] as [number, number, number, number],
    filename: "III-Campori-Lideres-APV-Orientacoes.pdf",
    image: { type: "jpeg" as const, quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      windowWidth: 900,
    },
    jsPDF: {
      unit: "mm" as const,
      format: "a4" as const,
      orientation: "portrait" as const,
    },
    pagebreak: { mode: ["avoid-all" as const, "css" as const] },
  };

  try {
    await html2pdf().set(opt).from(contentArea).save();
  } finally {
    // Restore everything
    contentArea.removeChild(pdfHeader);
    if (sidebar) sidebar.style.display = "";
    if (backToTop) backToTop.style.display = "";
    if (hero) hero.style.display = "";
    backLinks.forEach((el) => (el.style.display = ""));
    if (wrapper) wrapper.style.marginLeft = origML;
  }
}
