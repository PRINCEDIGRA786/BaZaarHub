import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",background:'rgb(211,211,211)',height:'235px',width:'25px',
        paddingTop:'9%',boxShadow:'3px 3px 8px gray',marginTop:'12px' }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        id="btn"
        style={{ ...style, display: "block",background:'rgb(211,211,211)',
        height:'235px',width:'25px',
        paddingTop:'9%',boxShadow:'-3px 3px 8px gray',marginTop:'12px',color:'red' }}
        
        onClick={onClick}
      />
    );
  }
const App = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: <SampleNextArrow  />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className=' px-12 shadow-md shadow-gray-300  py-5 rounded-md p-1 pb-7 dark:bg-gradient-to-tr from-[#404040] to-[#696969] '>
        <Slider {...settings}>
          <div>
            <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b76e4671bbd70d50.jpg?q=20'
            className=' h-52 w-[96%] mx-auto'/>
          </div>
          <div>
            <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/83297cf771250b25.jpg?q=20'
            className='h-52 w-[96%] mx-auto'/>
          </div>
          <div>
            <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4801adbcf39acbc1.jpg?q=20'
            className='h-52 w-[96%] mx-auto'/>
          </div>
          <div>
          <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a89ee09acc1a9e5.jpg?q=20'
            className='h-52 w-[96%] mx-auto'/>
          </div>
          <div>
          <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/05cdea6dbe08c481.jpg?q=20'
            className='h-52 w-[96%] mx-auto'/>
          </div>
          <div>
            <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/84ae27f93c14a4e3.jpg?q=20'
            className='h-52 w-[96%] mx-auto'/>
          </div>
        </Slider>
      </div>
    );
  };
  
  export default App;