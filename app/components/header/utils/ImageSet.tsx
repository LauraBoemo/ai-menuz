import Image from "next/image";

export const ImageSet = () => {
  return ( 
    <>
      <Image 
        src={"/static/CornerTopLeft.svg"}
        width={75}
        height={75}
        style={{ position: "absolute", top: 5, left: 5 }}
        alt="CornerBottomLeft"
      />
      <Image 
        src={"/static/CornerTopRight.svg"}
        width={75}
        height={75}
        style={{ position: "absolute", top: 5, right: 5 }}
        alt="CornerBottomLeft"
      />
      <Image 
        src={"/static/CornerBottomRight.svg"}
        width={75}
        height={75}
        style={{ position: "absolute", bottom: 5, left: 5 }}
        alt="CornerBottomLeft"
      />
      <Image 
        src={"/static/CornerBottomLeft.svg"}
        width={75}
        height={75}
        style={{ position: "absolute", bottom: 5, right: 5 }}
        alt="CornerBottomLeft"
      />
    </>
  );
}

export default ImageSet;
