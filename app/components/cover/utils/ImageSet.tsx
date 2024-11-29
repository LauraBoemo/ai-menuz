import Image from "next/image";

export const ImageSet = () => {
  return ( 
    <>
      <Image 
        src={"/static/CornerTopLeft.svg"}
        width={65}
        height={65}
        style={{ position: "absolute", top: 10, left: 10 }}
        alt="CornerBottomLeft"
      />
      <Image 
        src={"/static/CornerTopRight.svg"}
        width={65}
        height={65}
        style={{ position: "absolute", top: 10, right: 10 }}
        alt="CornerBottomLeft"
      />
      <Image 
        src={"/static/CornerBottomRight.svg"}
        width={65}
        height={65}
        style={{ position: "absolute", bottom: 10, left: 10 }}
        alt="CornerBottomLeft"
      />
      <Image 
        src={"/static/CornerBottomLeft.svg"}
        width={65}
        height={65}
        style={{ position: "absolute", bottom: 10, right: 10 }}
        alt="CornerBottomLeft"
      />
    </>
  );
}

export default ImageSet;
