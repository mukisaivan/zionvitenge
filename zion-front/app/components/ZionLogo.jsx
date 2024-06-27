import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import styled from 'styled-components';

// Styled component to wrap the image
const ImageWrapper = styled.div`
  width: 100px;
  height: auto; // Maintains aspect ratio based on width
`;

export default function ZionLogo() {
  return (
    <ImageWrapper>
      <Image
        src="/logo1.png"
        alt="Zion Logo"
        width='0'
        height='0'
        sizes="100px"
        priority
        className="w-auto h-auto"
      />
    </ImageWrapper>
  );
}
