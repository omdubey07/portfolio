import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

async function generateResumePdf() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard Letter page (612 x 792 pt)
  const pageWidth = 612;
  const pageHeight = 792;
  const page = pdfDoc.addPage([pageWidth, pageHeight]);

  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const marginX = 45;
  const contentWidth = pageWidth - marginX * 2;
  let y = pageHeight - 45;

  const colorBlack = rgb(0.1, 0.1, 0.12);
  const colorDark = rgb(0.2, 0.2, 0.22);
  const colorGray = rgb(0.35, 0.35, 0.38);
  const colorLine = rgb(0.15, 0.15, 0.18);

  function drawText(text, x, yPos, size, font, color = colorBlack) {
    page.drawText(text, {
      x,
      y: yPos,
      size,
      font,
      color,
    });
  }

  function drawCenteredText(text, yPos, size, font, color = colorBlack) {
    const textWidth = font.widthOfTextAtSize(text, size);
    const x = (pageWidth - textWidth) / 2;
    page.drawText(text, {
      x,
      y: yPos,
      size,
      font,
      color,
    });
  }

  function drawLine(yPos) {
    page.drawLine({
      start: { x: marginX, y: yPos },
      end: { x: pageWidth - marginX, y: yPos },
      thickness: 1,
      color: colorLine,
    });
  }

  function wrapText(text, maxWidth, font, size) {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  // --- HEADER ---
  drawCenteredText("OM DAYASHANKAR DUBEY", y, 17, helveticaBold);
  y -= 16;
  drawCenteredText("AI & Full-Stack Developer | Aspiring Data Analyst", y, 9.5, helvetica, colorDark);
  y -= 14;
  drawCenteredText("Mumbai, Maharashtra | 8468907996 | omdubeyclg07@gmail.com", y, 8.5, helvetica, colorGray);
  y -= 12;
  drawCenteredText("LinkedIn: linkedin.com/in/om-dubey-4206aa393 | GitHub: github.com/Omdubey07", y, 8.5, helvetica, colorGray);
  y -= 14;

  // Helper for Section Heading
  function drawSectionHeading(title) {
    y -= 4;
    drawText(title, marginX, y, 10.5, helveticaBold, colorBlack);
    y -= 5;
    drawLine(y);
    y -= 11;
  }

  // --- ABOUT ---
  drawSectionHeading("ABOUT");
  const aboutText =
    "Second-year B.Sc. Computer Science student at the University of Mumbai with a strong passion for software development, artificial intelligence, and data analysis. Built and deployed multiple AI-powered applications using Python, React, FastAPI, and generative AI APIs while continuously exploring modern technologies through self-driven projects and hackathons. Eager to contribute technical expertise, problem-solving ability, and a collaborative mindset to the Technical Team.";
  const aboutLines = wrapText(aboutText, contentWidth, helvetica, 8.5);
  for (const line of aboutLines) {
    drawText(line, marginX, y, 8.5, helvetica, colorDark);
    y -= 11.5;
  }
  y -= 4;

  // --- EDUCATION ---
  drawSectionHeading("EDUCATION");
  drawText("Thakur Shyamnarayan Degree College, University of Mumbai", marginX, y, 9, helveticaBold, colorBlack);
  const gradText = "Expected Graduation: 2028";
  const gradWidth = helvetica.widthOfTextAtSize(gradText, 8.5);
  drawText(gradText, pageWidth - marginX - gradWidth, y, 8.5, helvetica, colorDark);
  y -= 12;
  drawText("B.Sc. Computer Science | Semester: 3 | Class X: 83.40% | Class XII: 52.50%", marginX, y, 8.5, helvetica, colorDark);
  y -= 14;

  // --- RELEVANT EXPERIENCE ---
  drawSectionHeading("RELEVANT EXPERIENCE");
  drawText("Member, Computer Society of India (CSI)", marginX, y, 9, helveticaBold, colorBlack);
  y -= 12;

  const expBullets = [
    "Contributed to organizing and decorating technical events.",
    "Built a dragon model from recycled materials demonstrating creativity and teamwork.",
  ];
  for (const bullet of expBullets) {
    drawText("•", marginX + 4, y, 8.5, helveticaBold, colorDark);
    drawText(bullet, marginX + 14, y, 8.5, helvetica, colorDark);
    y -= 11.5;
  }
  y -= 4;

  // --- PROJECTS ---
  drawSectionHeading("PROJECTS");
  const projectBullets = [
    {
      title: "PlantScan Pro: ",
      desc: "Built a full-stack AI application using Python, FastAPI, React, TensorFlow and REST APIs for plant identification and care recommendations.",
    },
    {
      title: "Mock Examiner: ",
      desc: "Developed an AI-powered exam generator using Python, Streamlit, Gemini 2.5 Flash API and PyPDF2 with session memory and PDF processing.",
    },
    {
      title: "AI Second Brain (In Progress): ",
      desc: "Developing an AI-powered semantic document search and knowledge management system.",
    },
  ];

  for (const proj of projectBullets) {
    const fullText = proj.title + proj.desc;
    const lines = wrapText(fullText, contentWidth - 14, helvetica, 8.5);
    
    drawText("•", marginX + 4, y, 8.5, helveticaBold, colorDark);
    
    // First line with bold title
    const titleWidth = helveticaBold.widthOfTextAtSize(proj.title, 8.5);
    drawText(proj.title, marginX + 14, y, 8.5, helveticaBold, colorBlack);
    
    const remainingFirstLine = lines[0].substring(proj.title.length);
    drawText(remainingFirstLine, marginX + 14 + titleWidth, y, 8.5, helvetica, colorDark);
    y -= 11.5;

    for (let i = 1; i < lines.length; i++) {
      drawText(lines[i], marginX + 14, y, 8.5, helvetica, colorDark);
      y -= 11.5;
    }
    y -= 2;
  }
  y -= 2;

  // --- HACKATHONS ---
  drawSectionHeading("HACKATHONS");
  const hackathons = [
    "Summer Hacks 2026 – 18th Place (AI Medical Assistant).",
    "Professional Hackathon, Dadar – 8th Place (AI Resume Identifier).",
  ];
  for (const hack of hackathons) {
    drawText("•", marginX + 4, y, 8.5, helveticaBold, colorDark);
    drawText(hack, marginX + 14, y, 8.5, helvetica, colorDark);
    y -= 11.5;
  }
  y -= 4;

  // --- CERTIFICATIONS ---
  drawSectionHeading("CERTIFICATIONS");
  drawText("Deloitte Virtual Experience Program  •  HackArena 2.0 Zonals  •  CSI", marginX, y, 8.5, helvetica, colorDark);
  y -= 14;

  // --- SKILLS ---
  drawSectionHeading("SKILLS");
  const skills = [
    {
      title: "Technical Skills: ",
      desc: "Python, JavaScript, HTML, CSS, FastAPI (Learning), Git, GitHub, Vercel, Render, Gemini AI, Claude, Cursor, MySQL (Learning), Problem Solving, Team Collaboration",
    },
    {
      title: "Languages: ",
      desc: "English, Hindi, Marathi",
    },
  ];

  for (const sk of skills) {
    const fullText = sk.title + sk.desc;
    const lines = wrapText(fullText, contentWidth - 14, helvetica, 8.5);

    drawText("•", marginX + 4, y, 8.5, helveticaBold, colorDark);
    const titleWidth = helveticaBold.widthOfTextAtSize(sk.title, 8.5);
    drawText(sk.title, marginX + 14, y, 8.5, helveticaBold, colorBlack);

    const remainingFirstLine = lines[0].substring(sk.title.length);
    drawText(remainingFirstLine, marginX + 14 + titleWidth, y, 8.5, helvetica, colorDark);
    y -= 11.5;

    for (let i = 1; i < lines.length; i++) {
      drawText(lines[i], marginX + 14, y, 8.5, helvetica, colorDark);
      y -= 11.5;
    }
    y -= 2;
  }

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve("./public/resume.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log("Resume PDF generated successfully at:", outputPath);
}

generateResumePdf().catch((err) => {
  console.error("Error generating resume PDF:", err);
  process.exit(1);
});
