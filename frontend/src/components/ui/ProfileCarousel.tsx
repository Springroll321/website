import Carousel from './Carousel';

import pe1 from '../../assets/pfp/pe1.jpg';
import pe2 from '../../assets/pfp/pe2.jpg'; 
import pe3 from '../../assets/pfp/pe3.jpg';

const profileImages = [ pe1, pe2, pe3 ];
function ProfileCarousel() {
    return (
         <div className="flex-1 flex items-center justify-center ">
            <Carousel images={profileImages} autoPlayInterval={4000} sizeClass="sm:w-[300px] sm:h-[400px] md:w-[360px] md:h-[480px] lg:w-[420px] lg:h-[560px] xl:w-[480px] xl:h-[640px]"/>
          </div>
    )
}
export default ProfileCarousel;
