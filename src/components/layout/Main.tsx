import SiteHead from "./SiteHead";

interface MainProps {
    children: React.ReactNode;
  }

export default function Main({ children }: MainProps) {
  return (
    <>
      <SiteHead />
      <div className="font-roboto h-screen container mx-auto bg-white p-6	">
        {children}
      </div>
    </>
  );
}