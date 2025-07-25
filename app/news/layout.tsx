import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: 'お知らせ｜株式会社アクイユ',
  openGraph: {
    title: 'お知らせ｜株式会社アクイユ',
  },
  alternates: {
    canonical: '/news',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="お知らせ" />
      <Sheet>{children}</Sheet>
    </>
  );
}
