import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { CareerCard } from "../Card/CareerCard";

const FadingCareerCard = (props) => {
  const [hasFaded, setHasFaded] = useState(false);

  return !hasFaded ? (
    <Fade onVisibilityChange={() => setHasFaded(true)}>
      <CareerCard {...props} />
    </Fade>
  ) : (
    <CareerCard {...props} />
  );
};

export { FadingCareerCard };
