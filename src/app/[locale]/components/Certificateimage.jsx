import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css'; // จำเป็นต้องเพิ่มไฟล์ CSS นี้ด้วย

export default function CertificateImage() {
  return (
    <div className="max-w-screen-lg mx-auto p-2">
      <AwesomeSlider animation="cubeAnimation" className="h-screen">
        <div data-src="/images/certficate-img/สื่อ.jpeg" />
        <div data-src="/images/certficate-img/สื่อ2.jpeg" />
        <div data-src="/images/certficate-img/สื่อ3.jpeg" />
        <div data-src="/images/certficate-img/สื่อ4.jpeg" />
        <div data-src="/images/certficate-img/สื่อ5.jpeg" />
      </AwesomeSlider>
    </div>
  );
}