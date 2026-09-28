import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import tailwindConfig from "./tailwind.config";

export type EnquiryEmailProps = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
};

export function EnquiryEmail({ name, email, phone, service, message }: EnquiryEmailProps) {
  const title = `New website enquiry from ${name}`;

  return (
    <Html lang="en" dir="ltr">
      <Tailwind config={tailwindConfig}>
        <Head><title>{title}</title></Head>
        <Body className="bg-centreline-soft font-sans py-[36px]">
          <Preview>{title} — {service || "General building enquiry"}</Preview>
          <Container lang="en" dir="ltr" className="mx-auto bg-white max-w-[600px] overflow-hidden">
            <Section className="bg-centreline-ink px-[32px] py-[28px]">
              <Text className="m-0 text-[13px] font-bold tracking-[3px] uppercase text-white">Centreline <span className="text-centreline-red">Build</span></Text>
              <Heading as="h1" className="m-0 mt-[22px] text-[32px] leading-[38px] text-white">A new project enquiry has landed.</Heading>
            </Section>

            <Section className="px-[32px] py-[30px]">
              <Text className="m-0 mb-[18px] text-[16px] leading-[25px] text-centreline-muted">Reply directly to this email to continue the conversation with {name}.</Text>
              <Hr className="my-[22px] border-0 border-t border-solid border-[#deddd8]" />
              <Row>
                <Column className="w-[50%] align-top pr-[12px]">
                  <Text className="m-0 text-[11px] font-bold tracking-[1.5px] uppercase text-centreline-red">Name</Text>
                  <Text className="m-0 mt-[5px] text-[16px] leading-[23px] text-centreline-ink">{name}</Text>
                </Column>
                <Column className="w-[50%] align-top pl-[12px]">
                  <Text className="m-0 text-[11px] font-bold tracking-[1.5px] uppercase text-centreline-red">Service</Text>
                  <Text className="m-0 mt-[5px] text-[16px] leading-[23px] text-centreline-ink">{service || "Not selected"}</Text>
                </Column>
              </Row>
              <Row className="mt-[22px]">
                <Column className="w-[50%] align-top pr-[12px]">
                  <Text className="m-0 text-[11px] font-bold tracking-[1.5px] uppercase text-centreline-red">Email</Text>
                  <Text className="m-0 mt-[5px] text-[16px] leading-[23px] text-centreline-ink">{email}</Text>
                </Column>
                <Column className="w-[50%] align-top pl-[12px]">
                  <Text className="m-0 text-[11px] font-bold tracking-[1.5px] uppercase text-centreline-red">Phone</Text>
                  <Text className="m-0 mt-[5px] text-[16px] leading-[23px] text-centreline-ink">{phone || "Not provided"}</Text>
                </Column>
              </Row>
              <Hr className="my-[26px] border-0 border-t border-solid border-[#deddd8]" />
              <Heading as="h2" className="m-0 text-[20px] leading-[28px] text-centreline-ink">Project details</Heading>
              <Text className="m-0 mt-[12px] whitespace-pre-wrap text-[16px] leading-[26px] text-centreline-ink">{message}</Text>
            </Section>

            <Section className="bg-centreline-red px-[32px] py-[20px]">
              <Text className="m-0 text-[13px] leading-[20px] text-white">Sent from the Centreline Build website enquiry form.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

EnquiryEmail.PreviewProps = {
  name: "Jordan Lee",
  email: "jordan@example.com",
  phone: "021 555 0182",
  service: "Renovations & Extensions",
  message: "We’re planning an extension and would like to discuss timing and next steps.",
} satisfies EnquiryEmailProps;

export default EnquiryEmail;

