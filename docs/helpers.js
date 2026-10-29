const { Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType } = require("docx");

exports.H1 = t => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(t)] });
exports.H2 = t => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(t)] });
exports.P = t => new Paragraph({ spacing: { after: 120 }, children: [new TextRun(t)] });
exports.B = t => new Paragraph({ bullet: { level: 0 }, children: [new TextRun(t)] });
exports.code = s => s.trim().split("\n").map(l => new Paragraph({ children: [new TextRun({ text: l || " ", font: "Courier New", size: 16 })] }));
exports.table = (head, rows) => new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  rows: [head, ...rows].map((r, i) => new TableRow({
    tableHeader: i === 0,
    children: r.map(c => new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: c, bold: i === 0, size: 18 })] })] }))
  }))
});
