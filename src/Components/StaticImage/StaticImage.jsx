// eslint-disable-next-line no-unused-vars
import {
  Image,
} from "@chakra-ui/react";

const StaticImage = (imageData) => {
  

  return (
             <Image
              src={images[imageData.img]}
              height="100%"
              width="100%"
              objectFit="cover"
            />
  );
};
export default StaticImage;
