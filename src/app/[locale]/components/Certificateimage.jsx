import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css'; // จำเป็นต้องเพิ่มไฟล์ CSS นี้ด้วย

export default function CertificateImage() {
  return (
    <div className="max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto p-2">
      <AwesomeSlider 
        animation="cubeAnimation" 
        className="w-full h-64 sm:h-96 md:h-128 lg:h-160 xl:h-192 2xl:h-224"
      >
        <div data-src="/images/certficate-img/สื่อ.jpeg" />
        <div data-src="/images/certficate-img/สื่อ2.jpeg" />
        <div data-src="/images/certficate-img/สื่อ3.jpeg" />
        <div data-src="/images/certficate-img/สื่อ4.jpeg" />
        <div data-src="/images/certficate-img/สื่อ5.jpeg" />
      </AwesomeSlider>
    </div>
  );
}
