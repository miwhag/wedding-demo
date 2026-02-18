/** @format */
import { useState, useEffect } from "react";
import styled from "styled-components";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

const PhotosPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  min-height: 80vh;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding-top: 8rem;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PhotoCard = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  img:hover {
    transform: scale(1.02);
  }
  @media only screen and (max-width: 900px) {
    img {
      height: 300px;
    }
  }
`;

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100001;
  padding: 6rem 2rem;
  @media only screen and (max-width: 900px) {
    padding: 5rem 2rem 4rem 2rem;
  }
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: white;
  font-size: 28px;
  cursor: pointer;
  padding: 8px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  z-index: 100002;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
  }
  @media only screen and (max-width: 900px) {
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    font-size: 24px;
  }
`;

const NavButton = styled.button<{ direction: string }>`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 28px;
  cursor: pointer;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  z-index: 100002;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%) scale(1.1);
  }
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  ${(props) => (props.direction === "prev" ? "left: 30px;" : "right: 30px;")}
  @media only screen and (max-width: 900px) {
    padding: 8px;
    font-size: 22px;
    width: 40px;
    height: 40px;
    ${(props) => (props.direction === "prev" ? "left: 15px;" : "right: 15px;")}
  }
`;

const PhotoCounter = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-family: "Circular-Light";
  font-size: 14px;
  background: rgb(0, 0, 0);
  padding: 8px 16px;
  border-radius: 20px;
  @media only screen and (max-width: 900px) {
    bottom: -17px;
    font-size: 12px;
  }
`;

export default function Photos() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null,
  );

  // Wedding photos from public folder
  const photos = [
    // Ceremony
    "/c-wedding-1.jpg",
    "/c-wedding-2.jpg",
    "/c-wedding-3.jpg",
    "/c-wedding-15.jpg",
    "/c-wedding-16.jpg",
    "/c-wedding-36.jpg",
    "/c-wedding-37.jpg",
    "/c-wedding-38.jpg",
    // Family
    "/f-wedding-4.jpg",
    "/f-wedding-5.jpg",
    "/f-wedding-8.jpg",
    "/f-wedding-14.jpg",
    "/f-wedding-17.jpg",
    "/f-wedding-18.jpg",
    "/f-wedding-19.jpg",
    "/f-wedding-20.jpg",
    "/f-wedding-21.jpg",
    "/f-wedding-22.jpg",
    "/f-wedding-23.jpg",
    "/f-wedding-24.jpg",
    "/f-wedding-25.jpg",
    "/f-wedding-26.jpg",
    "/f-wedding-27.jpg",
    "/f-wedding-28.jpg",
    "/f-wedding-29.jpg",
    "/f-wedding-30.jpg",
    // First Look
    "/fl-wedding-9.jpg",
    "/fl-10.jpg",
    "/fl-11.jpg",
    "/fl-wedding-49.jpg",
    "/fl-wedding-50.jpg",
    // Wedding Party
    "/wp-wedding-12.jpg",
    "/wp-wedding-13.jpg",
    // Reception
    "/r-wedding-31.jpg",
    "/r-wedding-32.jpg",
    "/r-wedding-33.jpg",
    "/r-wedding-34.jpg",
    "/r-wedding-35.jpg",
    "/r-wedding-39.jpg",
    "/r-wedding-40.jpg",
    "/r-wedding-41.jpg",
    "/r-wedding-42.jpg",
    "/r-wedding-43.jpg",
    "/r-wedding-44.jpg",
    "/r-wedding-45.jpg",
    "/r-wedding-46.jpg",
    "/r-wedding-47.jpg",
    "/r-wedding-48.jpg",
  ];

  const openLightbox = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  // Add keyboard listener
  useEffect(() => {
    const goToPrevious = () => {
      setSelectedPhotoIndex((prev) =>
        prev !== null && prev > 0 ? prev - 1 : photos.length - 1,
      );
    };

    const goToNext = () => {
      setSelectedPhotoIndex((prev) =>
        prev !== null && prev < photos.length - 1 ? prev + 1 : 0,
      );
    };

    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, photos.length]);

  const goToPrevious = () => {
    setSelectedPhotoIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : photos.length - 1,
    );
  };

  const goToNext = () => {
    setSelectedPhotoIndex((prev) =>
      prev !== null && prev < photos.length - 1 ? prev + 1 : 0,
    );
  };

  return (
    <PhotosPage>
      <PhotoGrid>
        {photos.map((photo, index) => (
          <PhotoCard key={index} onClick={() => openLightbox(index)}>
            <img src={photo} alt={`Wedding ${index + 1}`} />
          </PhotoCard>
        ))}
      </PhotoGrid>

      {selectedPhotoIndex !== null && (
        <LightboxOverlay onClick={closeLightbox}>
          <LightboxContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeLightbox}>
              <IoClose />
            </CloseButton>
            <img
              src={photos[selectedPhotoIndex]}
              alt={`Wedding ${selectedPhotoIndex + 1}`}
            />
            <PhotoCounter>
              {selectedPhotoIndex + 1} / {photos.length}
            </PhotoCounter>
          </LightboxContent>
          <NavButton
            direction="prev"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <IoChevronBack />
          </NavButton>
          <NavButton
            direction="next"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <IoChevronForward />
          </NavButton>
        </LightboxOverlay>
      )}
    </PhotosPage>
  );
}
