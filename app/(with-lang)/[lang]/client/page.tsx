import ClientComponent from "./client";

export const generateStaticParams = () => {
  return ["en", "de"].map((lang) => ({ lang }));
};

export const dynamicParams = false;

export default function ClientPage() {
  return <ClientComponent />;
}
