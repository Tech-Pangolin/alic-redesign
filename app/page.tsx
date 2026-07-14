import SectionRow from "@/components/shared/SectionRow";
import Text from "@/components/shared/Text";

export default function Home() {
  return (
    <>
      <SectionRow backgroundColor="cream">
        <Text size="lg" color="navy" serif>Hello World</Text>
        <Text size="md" color="navy" serif>Hello World</Text>
        <Text size="base" color="navy" serif>Hello World</Text>
        <Text size="sm" color="navy" serif>Hello World</Text>
      </SectionRow>
      <SectionRow backgroundColor="navy">
        <h1 style={{ color: "var(--color-alic-cream)" }}>Hello World</h1>
      </SectionRow>
      <SectionRow backgroundColor="cream">
        <h1 style={{ color: "var(--color-alic-navy)" }}>Hello World</h1>
      </SectionRow>
      <SectionRow backgroundColor="navy">
        <h1 style={{ color: "var(--color-alic-cream)" }}>Hello World</h1>
      </SectionRow>
    </>
  );
}