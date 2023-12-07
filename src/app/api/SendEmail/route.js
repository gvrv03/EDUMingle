import RootAuth from "@/Middleware/RootAuth";
import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend("re_GvsnCJ3B_GajgupNFmLFLqnD5SfF6qwsm");

export const POST = RootAuth(async (req) => {
  try {
    const Details = await req.json();
    const { userEmails, subject, emailData } = Details;

    const { data, error } = await resend.emails.send({
      from: "gcoenCSE@gauravnarnaware.com",
      to: userEmails,
      subject: subject,
      html: emailData,
    });
    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(error);
  }
});

export async function GET() {
  try {
    const data = await resend.emails.get(
      "139b244a-c09f-4217-91b0-a86cec5c57c3"
    );
    return NextResponse.json(data);
    // const data = "gvrv narnaware"
  } catch (error) {
    return NextResponse.json(error);
  }
}
