import Link from 'next/link';

const Hero = ({ 
    title, 
    subtitle, 
    description, 
    button1Text, 
    button1Link, 
    button2Text, 
    button2Link, 
    svgImage, 
    titleColor , 
    titleSize , 
    imageWidth , 
    imageHeight 
  }) => {
  return (
    <div className=" mx-2 py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 px-4">
          <div className="bg-white text-black px-4 py-2 inline-block mb-4 rounded-full">
            <span className="font-medium">{subtitle}</span>
          </div>
          <h1 className={`${titleSize} font-bold mb-6 ${titleColor} `}>{title}</h1>
          <p className="text-lg mb-8">{description}</p>
          <div className="flex space-x-4">
            <Link href={button1Link} className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light">
                {button1Text}
            </Link>
            <Link href={button2Link} className="  text-black px-6 py-3 border-gray-700 rounded-lg hover:bg-gray-200 ">
                {button2Text}
            </Link>
          </div>
        </div>
        <div className=" items-centre justify-end lg:w-1/2 px-4 lg:mt-0">
        <img src={svgImage} alt="Hero Section Image" className={`${imageWidth} ${imageHeight}`} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
