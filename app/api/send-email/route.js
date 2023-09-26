import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend('re_123456789');

resend.domains.get('d91cd9bd-1176-453e-8fc1-35364d380206');
////
// const resend = new Resend('re_bkkcGu17_M6NJ7rXoNBQhFoDGvHeuGE9F');

export async function POST() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "abdolreza79@gmail.com",
    subject: "Hello World",
    react: <WelcomeTemplate name="reza" />,
  });
  return NextResponse.json({});
}
