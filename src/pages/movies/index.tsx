import MainAds from '@/components/layout/MainAds';

export default function Movies() {
  return (
    <div>
      <MainAds />
      <MainAds />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
