import HeroSection from "@/components/HeroSection";
import GreetingsSection from "@/components/GreetingsSection";
import GallerySection from "@/components/GallerySection";
import VenueInformationSection from "@/components/VenueInformationSection";
import GuestBookSection from "@/components/GuestBookSection";
import GiftInformationSection from "@/components/GiftInformationSection";

export default function Home() {
  const localImagePaths = [
    "/images/gallery-placeholder-1.svg",
    "/images/gallery-placeholder-2.svg",
    "/images/gallery-placeholder-3.svg",
    "/images/gallery-placeholder-4.svg",
  ];

  return (
    <main className="container mx-auto"> {/* Removed p-4, sections will manage their own padding */}
      <HeroSection
        brideName="이아름" // Example Korean Name
        groomName="김철수" // Example Korean Name
        weddingDate="2024년 10월 26일 토요일"
        weddingTime="오후 2시"
        weddingVenue="서울 강남구 더채플앳논현"
        welcomeMessage="소중한 분들을 모시고 사랑의 결실을 맺게 되었습니다."
      />
      <GreetingsSection
        groomParents="김영진 · 박은혜 의 아들 철수"
        brideParents="이민준 · 한지아 의 딸 아름"
        invitationText={`오랜 기다림 속에서 저희 두 사람,\n서로의 마음에 깊은 사랑과 믿음을 심으며\n이제 하나가 되려 합니다.\n\n함께 맞는 첫날,\n귀한 걸음 하시어 축복해 주시면\n더없는 기쁨으로 간직하겠습니다.`}
      />
      <GallerySection imagePaths={localImagePaths} />
      <VenueInformationSection
        venueName="더채플앳논현"
        venueAddress="서울 강남구 논현로 549 (역삼동)"
        venueContact="02-1234-5678"
        mapPlaceholderText="카카오맵 / 네이버지도 연동 예정"
        transportationInfo="지하철: 신논현역 3번 출구 도보 5분\n버스: 논현역 정류장 하차\n주차: 2시간 무료"
      />
      <GuestBookSection />
      <GiftInformationSection
        title="신랑 신부에게 마음 전하기"
        accountHolderName="김철수"
        bankName="하나은행"
        accountNumber="123-456789-01234"
        message="축하해주시는 모든 분들께 진심으로 감사드립니다.\n따뜻한 마음 소중히 간직하겠습니다."
        accountTypeLabel="신랑 측 계좌"
      />
      <GiftInformationSection
        title="" // No title for the second one to avoid repetition
        accountHolderName="이아름"
        bankName="국민은행"
        accountNumber="987-654321-09876"
        accountTypeLabel="신부 측 계좌"
        message="보내주신 축복과 사랑, 마음 깊이 새기고\n예쁘게 살겠습니다." // Example of a different message for the bride
      />
    </main>
  );
}
