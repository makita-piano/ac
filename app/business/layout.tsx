import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '事業内容｜株式会社アクイユ',
  openGraph: {
    title: '事業内容｜株式会社アクイユ',
  },
  alternates: {
    canonical: '/business',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Business" sub="事業内容" />
      <Sheet>{children}</Sheet>
    </>
  );
}
