import React, { useState, useEffect } from "react";
import styled from "styled-components";
import clmtrackr from "clmtrackr";

import VideoSection from "../components/VideoSection";
import FilterSection from "../components/FilterSection";
import Gallary from "../components/Gallary";

const WebFilter: React.FC = (): JSX.Element => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 400,
    height: 250
  });

  // clmtrackr init setting
  useEffect(() => {
    const ctrack = new clmtrackr.tracker();
    ctrack.init();
  }, []);

  return (
    <Container>
      <VideoSection setSize={setSize} size={size} />
      <FilterSection />
      <Gallary />
    </Container>
  );
};

export default WebFilter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;