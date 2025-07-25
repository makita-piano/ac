import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: '採用情報｜株式会社アクイユ',
  openGraph: {
    title: '採用情報｜株式会社アクイユ',
  },
  alternates: {
    canonical: '/recruit',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Recruit" sub="採用情報" />
      <Sheet>{children}</Sheet>
    </>
  );
}
