import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(): Promise<NextResponse> {
  const filePath = path.join(process.cwd(), "public/documents/cv-en-web.pdf");

  try {
    // Check if the file exists
    await fs.stat(filePath);

    // Read file
    const fileBuffer = await fs.readFile(filePath);

    // Return file as a response
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Disposition": 'attachment; filename="CV.pdf"',
        "Content-Type": "application/pdf",
      },
    });
  } catch (error) {
    console.error("Error downloading file:", error);

    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    return NextResponse.json({ error: "Server failed" }, { status: 500 });
  }
}
