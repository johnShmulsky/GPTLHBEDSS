// eslint-disable-next-line no-unused-vars
import {
  Image,
} from "@chakra-ui/react";
import Img1 from "../../media/stats.png";
import Img2 from "../../media/img2.png";
import Img3 from "../../media/img3.png";
import Img4 from "../../media/img4.png";

const StaticImage = (imageData) => {
  const images = {    
    Img1: Img1,
    Img2: Img2,
    Img3: Img3,
    Img4: Img4,
  };
  console.log(imageData.img)

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
