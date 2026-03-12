import html2pdf from "html2pdf.js";

export async function generatePDF() {
  // Clone the main content area for PDF generation
  const contentArea = document.querySelector(".lg\\:ml-72");
  if (!contentArea) return;

  // Create a wrapper for PDF
  const pdfContainer = document.createElement("div");
  pdfContainer.style.width = "210mm";
  pdfContainer.style.padding = "15mm";
  pdfContainer.style.fontFamily = "'Source Serif 4', Georgia, serif";
  pdfContainer.style.color = "#1a3a2a";
  pdfContainer.style.background = "#fff";
  pdfContainer.style.position = "absolute";
  pdfContainer.style.left = "-9999px";
  pdfContainer.style.top = "0";

  // Clone content
  const clone = contentArea.cloneNode(true) as HTMLElement;
  
  // Remove interactive elements not needed in PDF
  clone.querySelectorAll("a[href='#indice']").forEach((el) => {
    if (el.textContent?.includes("Voltar")) el.remove();
  });

  // Remove the hero section from clone (we'll build a custom PDF header)
  const heroEl = clone.querySelector("#hero");
  if (heroEl) heroEl.remove();

  // Build PDF header
  const header = document.createElement("div");
  header.style.textAlign = "center";
  header.style.marginBottom = "30px";
  header.style.paddingBottom = "20px";
  header.style.borderBottom = "3px solid #1a5c3a";
  header.innerHTML = `
    <p style="font-family: Montserrat, sans-serif; font-size: 12px; letter-spacing: 3px; color: #c78c3c; text-transform: uppercase; margin-bottom: 8px;">
      Associação Paulista do Vale
    </p>
    <h1 style="font-family: Montserrat, sans-serif; font-size: 32px; font-weight: 900; color: #1a5c3a; margin: 0 0 4px 0; line-height: 1.1;">
      III CAMPORI DE LÍDERES
    </h1>
    <p style="font-family: Montserrat, sans-serif; font-size: 18px; font-weight: 700; color: #c78c3c; margin: 8px 0;">
      TEMA: ÍNTEGROS
    </p>
    <p style="font-size: 14px; color: #666; margin: 4px 0;">
      09 a 12 de outubro de 2026 · Catre, Analândia-SP
    </p>
    <p style="font-size: 12px; color: #888;">
      De Líder para Líderes · 1.000 participantes
    </p>
  `;

  pdfContainer.appendChild(header);
  
  // Fix max-width for PDF
  clone.style.maxWidth = "100%";
  clone.style.marginLeft = "0";
  clone.style.padding = "0";
  
  // Ensure tables don't overflow
  clone.querySelectorAll("table").forEach((table) => {
    table.style.fontSize = "11px";
    table.style.width = "100%";
    table.style.wordBreak = "break-word";
  });

  // Ensure all sections are visible  
  clone.querySelectorAll("[class*='scroll-mt']").forEach((el) => {
    (el as HTMLElement).style.scrollMarginTop = "0";
  });

  pdfContainer.appendChild(clone);
  document.body.appendChild(pdfContainer);

  const opt = {
    margin: [5, 5, 10, 5] as [number, number, number, number],
    filename: "III-Campori-Lideres-APV-Orientacoes.pdf",
    image: { type: "jpeg", quality: 0.95 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
      scrollY: 0,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait" as const,
    },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  try {
    await html2pdf().set(opt).from(pdfContainer).save();
  } finally {
    document.body.removeChild(pdfContainer);
  }
}
