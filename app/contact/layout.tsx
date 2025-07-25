import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: 'コンタクト｜株式会社アクイユ',
  openGraph: {
    title: 'コンタクト｜株式会社アクイユ',
  },
  alternates: {
    canonical: '/contact',
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Contact" sub="お問い合わせ" />
      <Sheet>{children}</Sheet>
    </>
  );
}
